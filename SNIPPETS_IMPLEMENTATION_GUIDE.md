# Snippets Implementation Guide
## DRY Architecture for ATOM Design System Documentation

**Last Updated:** 2026-04-01
**Status:** ✅ Active Pattern

---

## Table of Contents

1. [Problem Statement](#problem-statement)
2. [Solution Architecture](#solution-architecture)
3. [Implementation Steps](#implementation-steps)
4. [File Structure](#file-structure)
5. [Usage Examples](#usage-examples)
6. [Migration Guide](#migration-guide)
7. [Best Practices](#best-practices)

---

## Problem Statement

### **Before Snippets (Anti-Pattern)**

Component documentation pages had **hardcoded source code** in MDX files:

```mdx
## Installation

<Tabs syncKey="framework">
  <TabItem label="React">
    ```tsx title="Button.tsx"
    // ❌ 150+ lines of hardcoded React component code
    import { forwardRef } from 'react';
    export const Button = forwardRef(...)
    ```
  </TabItem>

  <TabItem label="Vue">
    ```vue title="Button.vue"
    // ❌ 120+ lines of hardcoded Vue component code
    <script setup lang="ts">...
    ```
  </TabItem>

  <!-- Repeat for Astro, Angular -->
</Tabs>
```

### **Problems:**

1. **Code Duplication:** ~320+ lines of duplicated code per component
2. **Maintenance Nightmare:** Update component → update docs manually
3. **Sync Issues:** Easy to forget updating docs when component changes
4. **Error-Prone:** Copy-paste mistakes, outdated examples
5. **Poor DX:** Hard to navigate giant MDX files

---

## Solution Architecture

### **After Snippets (✅ DRY Pattern)**

Component source code lives in **single source of truth** files:

```
src/
└── snippets/
    └── {component}/
        ├── astro.ts          ← Astro component source
        ├── react.ts          ← React component source
        ├── vue.ts            ← Vue component source
        └── angular.ts        ← Angular component source
```

Documentation **consumes** snippets dynamically:

```mdx
## Installation

import { Code } from '@astrojs/starlight/components';
import { buttonReactSnippets } from '../../../../snippets/button/react';

<Tabs syncKey="framework">
  <TabItem label="React">
    <Code
      code={buttonReactSnippets[0].content}
      lang={buttonReactSnippets[0].language}
      title={buttonReactSnippets[0].path}
    />
  </TabItem>
</Tabs>
```

### **Benefits:**

✅ **Single Source of Truth** — Component code exists in one place
✅ **Auto-Sync** — Docs always show latest component code
✅ **Reduced Lines** — ~320 lines → ~80 lines per component doc
✅ **Better DX** — Smaller, more maintainable MDX files
✅ **Reusability** — Snippets can be used in multiple places

---

## Implementation Steps

### **Step 1: Create Snippet Files**

Create a new directory for your component:

```bash
mkdir -p src/snippets/{component-name}
```

Create framework-specific snippet files:

```bash
touch src/snippets/{component-name}/{astro,react,vue,angular}.ts
```

### **Step 2: Define Snippet Interface**

Each snippet file should export a `SnippetFile[]` array:

```typescript
// src/snippets/button/react.ts

export interface SnippetFile {
  path: string          // File path (e.g., "Button.tsx")
  language: string      // Syntax highlighting (e.g., "typescript")
  description: string   // What this file does
  content: string       // Full source code
}

export const buttonReactSnippets: SnippetFile[] = [
  {
    path: 'Button.tsx',
    language: 'typescript',
    description: 'Main Button component with polymorphic rendering',
    content: `import { forwardRef } from 'react';
import type { ButtonVariant, SizeVariant } from '../types';
import { cn } from '../utils/cn';

export const Button = forwardRef<HTMLElement, ButtonProps>(
  (props, ref) => {
    // ... complete component source code
  }
);

Button.displayName = 'Button';`
  },
  {
    path: 'types.ts',
    language: 'typescript',
    description: 'Shared TypeScript types',
    content: `export type SizeVariant = 'xs' | 's' | 'm' | 'l' | 'xl';
export type ButtonVariant = 'Primary' | 'Secondary' | 'Tertiary';`
  },
  {
    path: 'utils/cn.ts',
    language: 'typescript',
    description: 'Lightweight className merging utility',
    content: `export function cn(...classes: ClassValue[]): string {
  return classes.flat().filter(Boolean).join(' ');
}`
  }
];
```

### **Step 3: Import Snippets in MDX**

In your component documentation page:

```mdx
---
title: Button
description: Interactive button component
---

import { Tabs, TabItem, Code } from '@astrojs/starlight/components';
import { buttonReactSnippets } from '../../../../snippets/button/react';
import { buttonVueSnippets } from '../../../../snippets/button/vue';
import { buttonAstroSnippets } from '../../../../snippets/button/astro';
import { buttonAngularSnippets } from '../../../../snippets/button/angular';
```

### **Step 4: Consume Snippets Dynamically**

Replace hardcoded code blocks with `<Code>` component:

```mdx
<Tabs syncKey="framework">
  <TabItem label="React" icon="seti:react">
    ### Install packages
    ```bash
    pnpm add @atomchat.io/components-react @atomchat.io/css
    ```

    ### Component source

    <Code
      code={buttonReactSnippets[0].content}
      lang={buttonReactSnippets[0].language}
      title={buttonReactSnippets[0].path}
    />

    **Dependencies:** [...list of npm packages...]
  </TabItem>

  <TabItem label="Vue" icon="seti:vue">
    <Code
      code={buttonVueSnippets[0].content}
      lang={buttonVueSnippets[0].language}
      title={buttonVueSnippets[0].path}
    />
  </TabItem>

  <!-- Repeat for other frameworks -->
</Tabs>
```

---

## File Structure

### **Recommended Organization**

```
ATOMDS_Documentation/
├── src/
│   ├── snippets/                      ← SINGLE SOURCE OF TRUTH
│   │   ├── button/
│   │   │   ├── astro.ts               ← Astro Button implementation
│   │   │   ├── react.ts               ← React Button implementation
│   │   │   ├── vue.ts                 ← Vue Button implementation
│   │   │   └── angular.ts             ← Angular Button implementation
│   │   ├── avatar/
│   │   │   ├── astro.ts
│   │   │   ├── react.ts
│   │   │   ├── vue.ts
│   │   │   └── angular.ts
│   │   └── {component}/               ← Add more components...
│   │
│   └── content/docs/components/       ← DOCUMENTATION (consumes snippets)
│       ├── buttons/
│       │   └── button.mdx             ← Imports buttonReactSnippets, etc.
│       ├── content-display/
│       │   └── avatar.mdx             ← Imports avatarReactSnippets, etc.
│       └── {category}/
│           └── {component}.mdx
│
└── SNIPPETS_IMPLEMENTATION_GUIDE.md  ← This file
```

---

## Usage Examples

### **Example 1: Single File Component**

For components with a single file (most cases):

```typescript
// src/snippets/badge/react.ts
export const badgeReactSnippets: SnippetFile[] = [
  {
    path: 'Badge.tsx',
    language: 'typescript',
    description: 'Badge component with variants and states',
    content: `export function Badge({ variant, children }: BadgeProps) {
  return <span className={\`badge badge--\${variant}\`}>{children}</span>;
}`
  }
];
```

Usage in MDX:

```mdx
<Code
  code={badgeReactSnippets[0].content}
  lang="typescript"
  title="Badge.tsx"
/>
```

### **Example 2: Multi-File Component**

For components with multiple related files:

```typescript
// src/snippets/form/react.ts
export const formReactSnippets: SnippetFile[] = [
  {
    path: 'Form.tsx',
    language: 'typescript',
    description: 'Main form component with validation',
    content: `// Main component code...`
  },
  {
    path: 'useForm.ts',
    language: 'typescript',
    description: 'Form state management hook',
    content: `// Hook code...`
  },
  {
    path: 'validators.ts',
    language: 'typescript',
    description: 'Form validation utilities',
    content: `// Validators code...`
  }
];
```

Usage in MDX (show all files):

```mdx
### Component Files

{formReactSnippets.map((snippet, i) => (
  <>
    <h4>{snippet.path}</h4>
    <p>{snippet.description}</p>
    <Code code={snippet.content} lang={snippet.language} title={snippet.path} />
  </>
))}
```

### **Example 3: Optional Files**

Show additional files in a collapsible section:

```mdx
### Main Component

<Code code={buttonReactSnippets[0].content} lang="typescript" title="Button.tsx" />

<details>
<summary>📁 Additional Files (types, utilities)</summary>

#### Types

<Code code={buttonReactSnippets[1].content} lang="typescript" title="types.ts" />

#### Utilities

<Code code={buttonReactSnippets[2].content} lang="typescript" title="utils/cn.ts" />

</details>
```

---

## Migration Guide

### **Migrating Existing Component Docs**

Follow these steps to migrate a component from hardcoded to snippets:

#### **1. Create Snippet Files**

```bash
mkdir -p src/snippets/{component-name}
touch src/snippets/{component-name}/{astro,react,vue,angular}.ts
```

#### **2. Extract Hardcoded Code**

Open the existing component documentation:

```mdx
<!-- src/content/docs/components/atoms/badge.mdx -->

<TabItem label="React">
  ```tsx title="Badge.tsx"
  // ❌ THIS IS HARDCODED - Extract this!
  export function Badge({ variant }: BadgeProps) {
    return <span>Badge</span>;
  }
  ```
</TabItem>
```

Copy the code from the triple backticks into the snippet file:

```typescript
// src/snippets/badge/react.ts
export const badgeReactSnippets: SnippetFile[] = [
  {
    path: 'Badge.tsx',
    language: 'typescript',
    description: 'Badge component with variants',
    content: `export function Badge({ variant }: BadgeProps) {
  return <span>Badge</span>;
}`
  }
];
```

#### **3. Update MDX to Import Snippets**

Add imports at the top of the MDX file:

```mdx
---
title: Badge
---

import { Code } from '@astrojs/starlight/components';
import { badgeReactSnippets } from '../../../../snippets/badge/react';
```

#### **4. Replace Hardcoded Blocks**

Replace the hardcoded block:

```mdx
<!-- ❌ BEFORE -->
<TabItem label="React">
  ```tsx title="Badge.tsx"
  export function Badge({ variant }: BadgeProps) {
    return <span>Badge</span>;
  }
  ```
</TabItem>

<!-- ✅ AFTER -->
<TabItem label="React">
  <Code
    code={badgeReactSnippets[0].content}
    lang={badgeReactSnippets[0].language}
    title={badgeReactSnippets[0].path}
  />
</TabItem>
```

#### **5. Repeat for All Frameworks**

Repeat steps 2-4 for Astro, Vue, and Angular tabs.

#### **6. Test Locally**

```bash
pnpm dev
```

Verify that:
- ✅ Code blocks render correctly
- ✅ Syntax highlighting works
- ✅ File titles display properly
- ✅ No console errors

#### **7. Clean Up**

Delete any backup files or commented-out code:

```bash
rm src/content/docs/components/atoms/badge.mdx.backup
```

---

## Best Practices

### **✅ DO**

1. **Keep Snippets Synced with Actual Components**
   Copy code directly from the monorepo component packages:
   ```bash
   # Example: Sync Button from monorepo
   cp /path/to/monorepo/packages/components-react/src/atoms/Button.tsx \
      src/snippets/button/react-source.tsx
   ```

2. **Use Descriptive Descriptions**
   ```typescript
   description: 'Main Button component with polymorphic rendering (button vs link)'
   ```

3. **Include All Necessary Files**
   If a component needs types or utils, include them in the array:
   ```typescript
   [
     { path: 'Button.tsx', ...},
     { path: 'types.ts', ... },
     { path: 'utils/cn.ts', ... }
   ]
   ```

4. **Use Consistent Naming**
   - Export name: `{component}{Framework}Snippets`
   - Examples: `buttonReactSnippets`, `avatarVueSnippets`, `checkboxAngularSnippets`

5. **Document Edge Cases**
   Add comments in snippets for complex parts:
   ```typescript
   content: `// Angular limitation: ng-content with @if only projects in first branch
   @if (loading()) {
     <ng-content /> // ✅ Works here
   } @else {
     <ng-content /> // ❌ Never renders
   }`
   ```

### **❌ DON'T**

1. **Don't Simplify Production Code for Docs**
   Show the REAL implementation, not a simplified version.

2. **Don't Forget to Update Snippets**
   When you update a component in the monorepo, update the snippet too.

3. **Don't Mix Snippet + Hardcoded**
   Either use snippets for ALL frameworks or none. No mixing.

4. **Don't Include node_modules Imports**
   Keep relative imports as they would be in the actual component.

5. **Don't Duplicate Logic**
   If multiple components share utils, consider a shared snippet file:
   ```typescript
   // src/snippets/_shared/cn.ts
   export const sharedUtilsSnippets = [...]
   ```

---

## Advanced Patterns

### **Pattern 1: Conditional Framework Snippets**

Show different snippets based on feature support:

```mdx
<TabItem label="React">
  {buttonReactSnippets[0].content.includes('forwardRef') ? (
    <Code code={buttonReactSnippets[0].content} lang="typescript" title="Button.tsx" />
  ) : (
    <p>⚠️ This feature is not yet available in React.</p>
  )}
</TabItem>
```

### **Pattern 2: Version-Specific Snippets**

For components with breaking changes:

```typescript
export const buttonReactSnippetsV1: SnippetFile[] = [...];
export const buttonReactSnippetsV2: SnippetFile[] = [...];
```

```mdx
<Tabs>
  <TabItem label="v2.x (Latest)">
    <Code code={buttonReactSnippetsV2[0].content} ... />
  </TabItem>
  <TabItem label="v1.x (Legacy)">
    <Code code={buttonReactSnippetsV1[0].content} ... />
  </TabItem>
</Tabs>
```

### **Pattern 3: Interactive Snippets**

Add metadata for interactive examples:

```typescript
export interface InteractiveSnippet extends SnippetFile {
  demo?: {
    props: Record<string, any>
    examples: Array<{ label: string; props: Record<string, any> }>
  }
}
```

---

## Troubleshooting

### **Issue: Snippets not rendering**

**Cause:** Import path is incorrect
**Solution:** Check the relative path from MDX to snippet:

```mdx
<!-- If MDX is in: src/content/docs/components/atoms/button.mdx -->
<!-- Snippet is in:  src/snippets/button/react.ts -->
<!-- Correct path: -->
import { buttonReactSnippets } from '../../../../../snippets/button/react';
```

### **Issue: Syntax highlighting broken**

**Cause:** Wrong `language` value
**Solution:** Use correct Prism language identifier:

```typescript
// ❌ Wrong
language: 'ts'

// ✅ Correct
language: 'typescript'
```

Common language values:
- `typescript`, `javascript`
- `astro`, `vue`, `svelte`
- `bash`, `json`, `yaml`

### **Issue: Code escaping issues**

**Cause:** Template literals with `${}` or backticks
**Solution:** Escape properly:

```typescript
content: `const className = \`button button--\${variant}\`;` // ✅ Escaped backticks
```

---

## Maintenance Checklist

When updating a component in the monorepo:

- [ ] Update component source in monorepo package
- [ ] Copy updated code to corresponding snippet file
- [ ] Verify syntax (no missing brackets, proper escaping)
- [ ] Test docs locally (`pnpm dev`)
- [ ] Check all framework tabs render correctly
- [ ] Commit snippet changes with component changes

---

## Future Enhancements

### **Planned Features:**

1. **Auto-sync Script**
   Script to automatically copy component code from monorepo to snippets:
   ```bash
   pnpm sync-snippets button
   ```

2. **Snippet Validator**
   Pre-commit hook to validate snippet syntax:
   ```bash
   pnpm validate-snippets
   ```

3. **Version Tags**
   Show component version in snippet header:
   ```mdx
   <Code code={...} meta="v2.0.1" />
   ```

4. **Diff View**
   Show code differences between versions:
   ```mdx
   <SnippetDiff old={v1} new={v2} />
   ```

---

## Summary

**Snippets pattern provides:**

✅ **DRY** — Single source of truth for component code
✅ **Maintainability** — Update once, reflected everywhere
✅ **Consistency** — No sync issues between docs and code
✅ **Performance** — Smaller MDX files, faster builds
✅ **Developer Experience** — Cleaner, more readable docs

**Remember:** Component code should live in `src/snippets/`, NOT in MDX files.

---

**Questions or Issues?**
Open an issue in the monorepo: https://github.com/atomchat/atom-design-system/issues
