# Framework Package Reference

**Updated:** 2026-03-31

Este documento define los packages npm correctos para cada framework del ATOM Design System.

---

## NPM Packages

### Package Scope: `@atomchat.io`

| Framework | Package Name | Status | Path |
|-----------|--------------|--------|------|
| **Astro** | `@atomchat.io/components-astro` | ✅ Published | `/packages/components-astro` |
| **React** | `@atomchat.io/components-react` | 🚧 In Development | `/packages/components-react` |
| **Angular** | `@atomchat.io/components-angular` | 🚧 In Development | `/packages/components-angular` |
| **Vue** | `@atomchat.io/components-vue` | 🚧 In Development | `/packages/components-vue` |

**Note:** Next.js uses the React package (`@atomchat.io/components-react`)

---

## Installation Commands

### Astro
```bash
pnpm add @atomchat.io/components-astro @atomchat.io/css
```

### React
```bash
pnpm add @atomchat.io/components-react @atomchat.io/css
```

### Next.js
```bash
pnpm add @atomchat.io/components-react @atomchat.io/css
```

### Vue
```bash
pnpm add @atomchat.io/components-vue @atomchat.io/css
```

### Angular
```bash
pnpm add @atomchat.io/components-angular @atomchat.io/css
```

---

## CSS Import (All Frameworks)

```typescript
import '@atomchat.io/css';
```

---

## Component Import Patterns

### Astro
```astro
---
import { Button } from '@atomchat.io/components-astro';
import '@atomchat.io/css';
---

<Button variant="Primary">Click me</Button>
```

### React
```tsx
import { Button } from '@atomchat.io/components-react';
import '@atomchat.io/css';

function App() {
  return <Button variant="Primary">Click me</Button>;
}
```

### Next.js (App Router)
```tsx
'use client';

import { Button } from '@atomchat.io/components-react';
import '@atomchat.io/css';

export default function Page() {
  return <Button variant="Primary">Click me</Button>;
}
```

### Vue 3 (Composition API)
```vue
<script setup>
import { Button } from '@atomchat.io/components-vue';
import '@atomchat.io/css';
</script>

<template>
  <Button variant="Primary">Click me</Button>
</template>
```

### Angular (Standalone Components)
```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@atomchat.io/components-angular';
import '@atomchat.io/css';

@Component({
  imports: [ButtonComponent],
  template: `
    <atom-button variant="Primary">Click me</atom-button>
  `
})
export class AppComponent {}
```

---

## Package Versions

Check the latest versions:
- [npm: @atomchat.io/components-astro](https://www.npmjs.com/package/@atomchat.io/components-astro)
- [npm: @atomchat.io/components-react](https://www.npmjs.com/package/@atomchat.io/components-react)
- [npm: @atomchat.io/components-angular](https://www.npmjs.com/package/@atomchat.io/components-angular)
- [npm: @atomchat.io/components-vue](https://www.npmjs.com/package/@atomchat.io/components-vue)

---

## Local Development Paths

When working on the monorepo locally:

```
/Users/karenortiz/Desktop/atom-design-system/
├── packages/
│   ├── components-astro/     ← Astro components
│   ├── components-react/     ← React components
│   ├── components-angular/   ← Angular components
│   └── components-vue/       ← Vue components
```

---

## Component Availability Matrix

See `/src/lib/component-availability.ts` for the current status of which components are available in which frameworks.

**Current Implementation Status:**
- **Astro:** 24/24 components (100%)
- **React:** 9/24 components (37.5%)
- **Angular:** 5/24 components (20.8%)
- **Vue:** 0/24 components (0%)

Components are being added to each framework package incrementally.
