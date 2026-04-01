/**
 * Component Framework Availability Matrix
 *
 * Central source of truth for which frameworks support which components.
 * Used by FrameworkSwitcher to show accurate availability.
 *
 * Updated: 2026-03-31 (Documentation Audit)
 * Source: Audit of actual implementations in atom-design-system packages
 */

export const COMPONENT_AVAILABILITY = {
  // ========== ATOMS ==========

  // Buttons
  Avatar: ['astro', 'react', 'nextjs', 'angular'],
  Badge: ['astro', 'react', 'nextjs'],
  Button: ['astro', 'react', 'nextjs', 'angular'],
  Caption: ['astro'],
  Checkbox: ['astro', 'react', 'nextjs'],
  Chip: ['astro', 'react', 'nextjs'],
  Divider: ['astro'],
  Heading: ['astro'],
  IconButton: ['astro'],
  LabelText: ['astro'],
  LinkButton: ['astro'],
  Radio: ['astro'],
  Spinner: ['astro'],
  StatusIcon: ['astro', 'react', 'nextjs', 'angular'],
  Tag: ['astro', 'react', 'nextjs'],
  Text: ['astro', 'react', 'nextjs'],
  Toggle: ['astro', 'react', 'nextjs'],

  // ========== MOLECULES ==========

  AvatarGroup: ['astro', 'react', 'nextjs'],

  // ========== LAYOUT ==========

  Center: ['astro'],
  Container: ['astro', 'react', 'nextjs', 'angular'],
  Grid: ['astro', 'react', 'nextjs', 'angular'],
  Inline: ['astro', 'react', 'nextjs'],
  Section: ['astro'],
  Stack: ['astro', 'react', 'nextjs', 'angular'],
} as const;

export type ComponentName = keyof typeof COMPONENT_AVAILABILITY;

export type FrameworkName = 'astro' | 'react' | 'angular' | 'vue' | 'nextjs';

/**
 * Check if a component is available for a specific framework
 *
 * @param component - Component name (e.g., "Button", "Avatar")
 * @param framework - Framework name (e.g., "react", "vue")
 * @returns true if component is available for framework
 *
 * @example
 * ```ts
 * isComponentAvailable('Button', 'react') // true
 * isComponentAvailable('Button', 'vue')   // false
 * isComponentAvailable('Heading', 'react') // false (Astro only)
 * ```
 */
export function isComponentAvailable(
  component: ComponentName,
  framework: FrameworkName
): boolean {
  return COMPONENT_AVAILABILITY[component]?.includes(framework) ?? false;
}

/**
 * Get all available frameworks for a component
 *
 * @param component - Component name
 * @returns Array of framework names
 *
 * @example
 * ```ts
 * getAvailableFrameworks('Button')   // ['astro', 'react', 'nextjs', 'angular']
 * getAvailableFrameworks('Heading')  // ['astro']
 * ```
 */
export function getAvailableFrameworks(
  component: ComponentName
): readonly FrameworkName[] {
  return COMPONENT_AVAILABILITY[component] ?? [];
}

/**
 * Get all components available for a specific framework
 *
 * @param framework - Framework name
 * @returns Array of component names
 *
 * @example
 * ```ts
 * getComponentsForFramework('react')
 * // ['Button', 'Checkbox', 'Toggle', 'Chip', ...]
 *
 * getComponentsForFramework('vue')
 * // [] (no Vue components yet)
 * ```
 */
export function getComponentsForFramework(
  framework: FrameworkName
): ComponentName[] {
  return (Object.keys(COMPONENT_AVAILABILITY) as ComponentName[]).filter(
    (component) => isComponentAvailable(component, framework)
  );
}

/**
 * Framework implementation statistics
 *
 * @example
 * ```ts
 * getFrameworkStats()
 * // {
 * //   astro: { total: 24, percentage: 100 },
 * //   react: { total: 9, percentage: 37.5 },
 * //   angular: { total: 5, percentage: 20.8 },
 * //   vue: { total: 0, percentage: 0 },
 * //   nextjs: { total: 9, percentage: 37.5 }
 * // }
 * ```
 */
export function getFrameworkStats() {
  const totalComponents = Object.keys(COMPONENT_AVAILABILITY).length;
  const frameworks: FrameworkName[] = ['astro', 'react', 'angular', 'vue', 'nextjs'];

  return frameworks.reduce((stats, framework) => {
    const available = getComponentsForFramework(framework).length;
    return {
      ...stats,
      [framework]: {
        total: available,
        percentage: Math.round((available / totalComponents) * 100 * 10) / 10,
      },
    };
  }, {} as Record<FrameworkName, { total: number; percentage: number }>);
}

/**
 * Framework display labels and icons
 */
export const FRAMEWORK_META = {
  astro: {
    label: 'Astro',
    icon: 'https://svgl.app/library/astro-icon-dark.svg',
  },
  react: {
    label: 'React',
    icon: 'https://svgl.app/library/react_dark.svg',
  },
  nextjs: {
    label: 'Next.js',
    icon: 'https://svgl.app/library/nextjs_icon_dark.svg',
  },
  vue: {
    label: 'Vue',
    icon: 'https://svgl.app/library/vue.svg',
  },
  angular: {
    label: 'Angular',
    icon: 'https://svgl.app/library/angular.svg',
  },
} as const;
