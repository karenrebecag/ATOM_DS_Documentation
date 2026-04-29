/**
 * Fetch Component Source Utility
 *
 * Fetches component source code from npm via jsDelivr CDN at build time.
 * Uses a component→path lookup table to resolve the correct file path per framework.
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
 * Latest published versions for each framework package.
 * Update these when new versions are published.
 */
const DEFAULT_VERSIONS: Record<Framework, string> = {
  react:   '2.2.1',
  vue:     '1.1.1',
  angular: '2.1.1',
  astro:   '5.3.3',
};

/**
 * Maps component names to their file path within src/atoms/ for each framework.
 * Derived from the actual published package structure.
 */
const COMPONENT_PATHS: Record<string, Partial<Record<Framework, string>>> = {
  // Buttons
  Button:       { react: 'buttons/Button.tsx',       astro: 'buttons/Button.astro',       vue: 'Button.vue',               angular: 'button.component.ts' },
  IconButton:   { react: 'buttons/IconButton.tsx',   astro: 'buttons/IconButton.astro',   vue: 'buttons/IconButton.vue',   angular: 'buttons/icon-button.component.ts' },
  LinkButton:   { react: 'buttons/LinkButton.tsx',   astro: 'buttons/LinkButton.astro',   vue: 'buttons/LinkButton.vue',   angular: 'buttons/link-button.component.ts' },
  NavLink:      { react: 'buttons/NavLink.tsx',      astro: 'buttons/NavLink.astro' },

  // Forms / Selection controls
  Checkbox:     { react: 'forms/Checkbox.tsx',       astro: 'forms/Checkbox.astro' },
  Radio:        { react: 'forms/Radio.tsx',           astro: 'forms/Radio.astro' },
  Toggle:       { react: 'forms/Toggle.tsx',          astro: 'forms/Toggle.astro' },
  TextField:    { react: 'forms/TextField.tsx',       astro: 'forms/TextField.astro',      vue: 'forms/TextField.vue',      angular: 'forms/text-field.component.ts' },
  TextArea:     { react: 'forms/TextArea.tsx',        astro: 'forms/TextArea.astro',       vue: 'forms/TextArea.vue',       angular: 'forms/text-area.component.ts' },
  SearchField:  { react: 'forms/SearchField.tsx',     astro: 'forms/SearchField.astro',    vue: 'forms/SearchField.vue',    angular: 'forms/search-field.component.ts' },

  // Indicators & Status
  Badge:        { react: 'indicators/Badge.tsx',      astro: 'indicators/Badge.astro' },
  Chip:         { react: 'indicators/Chip.tsx',        astro: 'indicators/Chip.astro' },
  Spinner:      { react: 'indicators/Spinner.tsx',     astro: 'indicators/Spinner.astro' },
  Tag:          { react: 'indicators/Tag.tsx',          astro: 'indicators/Tag.astro' },
  Skeleton:     { react: 'indicators/Skeleton.tsx' },
  EmptyState:   { react: 'indicators/EmptyState.tsx',  astro: 'indicators/EmptyState.astro' },

  // Layout
  Divider:      { react: 'layout/Divider.tsx',         astro: 'layout/Divider.astro' },

  // Lists
  BulletItem:   { react: 'lists/BulletItem.tsx',       astro: 'lists/BulletItem.astro',    vue: 'lists/BulletItem.vue',     angular: 'lists/bullet-item.component.ts' },
  NumberItem:   { react: 'lists/NumberItem.tsx',        astro: 'lists/NumberItem.astro',    vue: 'lists/NumberItem.vue',     angular: 'lists/number-item.component.ts' },

  // Media / Content Display
  Avatar:       { react: 'media/Avatar.tsx',            astro: 'media/Avatar.astro',        vue: 'Avatar.vue' },

  // Navigation
  Pagination:   { react: 'navigation/Pagination.tsx',   astro: 'navigation/Pagination.astro',    vue: 'navigation/Pagination.vue',    angular: 'navigation/pagination.component.ts' },
  SegmentControl: { react: 'navigation/SegmentControl.tsx', astro: 'navigation/SegmentControl.astro', vue: 'navigation/SegmentControl.vue', angular: 'navigation/segment-control.component.ts' },

  // Typography
  Heading:      { react: 'typography/Heading.tsx',      astro: 'typography/Heading.astro',   vue: 'typography/Heading.vue',    angular: 'typography/heading.component.ts' },
  Text:         { react: 'typography/Text.tsx',          astro: 'typography/Text.astro',      vue: 'typography/Text.vue',       angular: 'typography/text.component.ts' },

  // Feedback
  Tooltip:      { astro: 'feedback/Tooltip.astro' },

  // Integrations
  WhatsAppButton: {
    react:   'integrations/WhatsAppButton.tsx',
    vue:     'integrations/WhatsAppButton.vue',
    angular: 'integrations/whatsapp-button.component.ts',
    astro:   'integrations/WhatsAppButton.astro',
  },
};

/**
 * Resolve the file path for a given component + framework.
 * Falls back to the legacy flat path if not in the lookup table.
 */
function resolveFilePath(component: string, framework: Framework): string {
  const paths = COMPONENT_PATHS[component];
  if (paths && paths[framework]) {
    return paths[framework]!;
  }
  // Legacy fallback (flat structure from old package versions)
  const extMap: Record<Framework, string> = { react: 'tsx', vue: 'vue', angular: 'component.ts', astro: 'astro' };
  const base = framework === 'angular' ? component.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '') : component;
  return `${base}.${extMap[framework]}`;
}

/**
 * Fetch component source code from jsDelivr CDN at build time.
 */
export async function fetchComponentSource(config: FetchConfig): Promise<string> {
  const { component, framework, version, filePath } = config;
  const packageVersion = version || DEFAULT_VERSIONS[framework];
  const file = filePath || resolveFilePath(component, framework);
  const url = `https://cdn.jsdelivr.net/npm/@atomchat.io/components-${framework}@${packageVersion}/src/atoms/${file}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch from npm: ${response.status} ${response.statusText} (${url})`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error fetching ${framework} ${component} from npm:`, error);
    throw error;
  }
}

/**
 * Create a ComponentSource object with metadata.
 */
export function createComponentSource(
  content: string,
  framework: Framework,
  component: string,
  description?: string
): ComponentSource {
  const languageMap: Record<Framework, string> = {
    react: 'tsx', vue: 'vue', angular: 'typescript', astro: 'astro',
  };
  const fileExtMap: Record<Framework, string> = {
    react: 'tsx', vue: 'vue', angular: 'component.ts', astro: 'astro',
  };
  return {
    path: `${component}.${fileExtMap[framework]}`,
    language: languageMap[framework],
    description: description || `${component} component for ${framework}`,
    content,
  };
}

/**
 * Check whether a component has a known implementation for a given framework.
 */
export function componentExistsFor(component: string, framework: Framework): boolean {
  const paths = COMPONENT_PATHS[component];
  return !!(paths && paths[framework]);
}

/**
 * Fetch multiple files for a component.
 */
export async function fetchComponentFiles(
  component: string,
  framework: Framework,
  files: { path: string; description: string }[]
): Promise<ComponentSource[]> {
  return Promise.all(
    files.map(async (file) => {
      const content = await fetchComponentSource({ component, framework, filePath: file.path });
      return createComponentSource(content, framework, component, file.description);
    })
  );
}
