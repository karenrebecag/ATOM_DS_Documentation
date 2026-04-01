/**
 * Fetch Component Source Utility
 *
 * Hybrid approach for fetching component source code:
 * - DEV: Import from local monorepo (fast, no network)
 * - PROD: Fetch from npm via jsDelivr CDN (single source of truth)
 *
 * This ensures:
 * - Zero code duplication
 * - Docs always sync with published packages
 * - Fast dev experience with local imports
 */

export interface ComponentSource {
  path: string;
  language: string;
  description: string;
  content: string;
}

export type Framework = 'react' | 'vue' | 'angular' | 'astro';

interface FetchConfig {
  component: string;
  framework: Framework;
  version?: string;
  filePath?: string;
}

/**
 * Component source URLs for npm packages
 */
const NPM_URLS: Record<Framework, (component: string, version: string, filePath: string) => string> = {
  react: (component, version, filePath) =>
    `https://cdn.jsdelivr.net/npm/@atomchat.io/components-react@${version}/src/atoms/${filePath}`,

  vue: (component, version, filePath) =>
    `https://cdn.jsdelivr.net/npm/@atomchat.io/components-vue@${version}/src/atoms/${filePath}`,

  angular: (component, version, filePath) =>
    `https://cdn.jsdelivr.net/npm/@atomchat.io/components-angular@${version}/src/atoms/${filePath}`,

  astro: (component, version, filePath) =>
    `https://cdn.jsdelivr.net/npm/@atomchat.io/components-astro@${version}/src/atoms/${filePath}`,
};

/**
 * Default versions for each framework package
 */
const DEFAULT_VERSIONS: Record<Framework, string> = {
  react: '2.0.1',
  vue: '1.0.1',
  angular: '2.0.1',
  astro: '2.0.3',
};

/**
 * Default file paths for each framework
 */
const DEFAULT_FILE_PATHS: Record<Framework, (component: string) => string> = {
  react: (component) => `${component}.tsx`,
  vue: (component) => `${component}.vue`,
  angular: (component) => `${component.toLowerCase()}.component.ts`,
  astro: (component) => `${component}.astro`,
};

/**
 * Fetch component source code from npm (production)
 */
async function fetchFromNpm(config: FetchConfig): Promise<string> {
  const { component, framework, version, filePath } = config;
  const packageVersion = version || DEFAULT_VERSIONS[framework];
  const file = filePath || DEFAULT_FILE_PATHS[framework](component);

  const url = NPM_URLS[framework](component, packageVersion, file);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch from npm: ${response.status} ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${framework} ${component} from npm:`, error);
    throw error;
  }
}

/**
 * Import component source from local monorepo (development)
 *
 * Note: Vite's ?raw import only works with static paths,
 * so this needs to be called with explicit imports in the consuming file.
 */
export async function importFromLocal(framework: Framework, component: string): Promise<string> {
  // This is a placeholder - actual imports must be done statically in the consuming file
  // Example usage:
  // const source = import.meta.env.DEV
  //   ? await import('../../../atom-design-system/packages/components-react/src/atoms/Button.tsx?raw')
  //   : await fetchFromNpm({ component: 'Button', framework: 'react' });

  throw new Error('Local imports must be done statically in the consuming file using import.meta.env.DEV check');
}

/**
 * Main function: Fetch component source using hybrid approach
 *
 * In production, always fetches from npm.
 * For local imports in dev, use the pattern:
 *
 * ```astro
 * ---
 * const isDev = import.meta.env.DEV;
 * const reactSource = isDev
 *   ? (await import('../../../../atom-design-system/packages/components-react/src/atoms/Button.tsx?raw')).default
 *   : await fetchComponentSource({ component: 'Button', framework: 'react' });
 * ---
 * ```
 */
export async function fetchComponentSource(config: FetchConfig): Promise<string> {
  // In production (or when explicitly requested), fetch from npm
  return fetchFromNpm(config);
}

/**
 * Create a ComponentSource object with metadata
 */
export function createComponentSource(
  content: string,
  framework: Framework,
  component: string,
  description?: string
): ComponentSource {
  const languageMap: Record<Framework, string> = {
    react: 'tsx',
    vue: 'vue',
    angular: 'typescript',
    astro: 'astro',
  };

  const fileExtMap: Record<Framework, string> = {
    react: 'tsx',
    vue: 'vue',
    angular: 'component.ts',
    astro: 'astro',
  };

  return {
    path: `${component}.${fileExtMap[framework]}`,
    language: languageMap[framework],
    description: description || `${component} component for ${framework}`,
    content,
  };
}

/**
 * Fetch multiple files for a component (e.g., component + types + utils)
 */
export async function fetchComponentFiles(
  component: string,
  framework: Framework,
  files: { path: string; description: string }[]
): Promise<ComponentSource[]> {
  const results = await Promise.all(
    files.map(async (file) => {
      const content = await fetchComponentSource({
        component,
        framework,
        filePath: file.path,
      });

      return createComponentSource(content, framework, component, file.description);
    })
  );

  return results;
}
