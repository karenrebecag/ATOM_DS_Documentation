# Components Library

Built with native Astro + Canvas for zero JavaScript framework dependencies.

## Animated Gradient Canvas

Both `CopyPromptButton` and `GradientCard` components use an optimized canvas-based animated gradient with grain/noise effects and warp distortions. The animation uses Perlin-like noise functions and is GPU-accelerated.

## GradientCard Component

Reusable card component with integrated animated gradient background.

### Usage in Astro

```astro
---
import GradientCard from '../components/GradientCard.astro'
---

<GradientCard
  title="Feature Title"
  description="Card description text"
  color1="#FF9FFC"
  color2="#715abf"
  color3="#B19EEF"
>
  <p>Additional content goes here</p>
</GradientCard>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | - | Card title (optional) |
| `description` | string | - | Card description (optional) |
| `color1` | string | `#FF9FFC` | First gradient color |
| `color2` | string | `#715abf` | Second gradient color |
| `color3` | string | `#B19EEF` | Third gradient color |
| `className` | string | `''` | Additional CSS classes |

### Slot

The default slot accepts any Astro/HTML content to be rendered inside the card.

## CopyPromptButton Component (Updated)

Enhanced with animated gradient background for better visual appeal.

### Usage

```astro
---
import CopyPromptButton from '../components/CopyPromptButton.astro'
---

<CopyPromptButton
  componentName="button"
  variant="primary"
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `componentName` | string | - | Name of prompt file (without .txt) |
| `variant` | 'primary' \| 'secondary' | `'primary'` | Button style variant |

---

## FrameworkSwitcher Component

Dynamic framework selector for component documentation pages.

## Usage in MDX

```mdx
---
title: Your Component
---

import FrameworkSwitcher from '../../../../components/FrameworkSwitcher.astro';

## Framework Support

<FrameworkSwitcher
  frameworks={[
    { name: 'astro', label: 'Astro', icon: 'https://svgl.app/library/astro-icon-dark.svg' },
    { name: 'react', label: 'React', icon: 'https://svgl.app/library/react_dark.svg' },
    { name: 'nextjs', label: 'Next.js', icon: 'https://svgl.app/library/nextjs_icon_dark.svg' },
    { name: 'vue', label: 'Vue', icon: 'https://svgl.app/library/vue.svg' },
    { name: 'angular', label: 'Angular', icon: 'https://svgl.app/library/angular.svg' },
  ]}
>
  <div data-framework="astro" data-active="true">

### Installation

\`\`\`bash
pnpm add @atomchat.io/components-astro
\`\`\`

### Usage

\`\`\`astro
---
import { YourComponent } from '@atomchat.io/components-astro';
---

<YourComponent />
\`\`\`

  </div>

  <div data-framework="react">

### Installation

\`\`\`bash
pnpm add @atomchat.io/components-react
\`\`\`

### Usage

\`\`\`tsx
import { YourComponent } from '@atomchat.io/components-react';

export default function Example() {
  return <YourComponent />;
}
\`\`\`

  </div>

  <!-- Repeat for other frameworks -->
</FrameworkSwitcher>
```

## Props

### `frameworks`

Array of framework configurations.

**Type:**
```typescript
{
  name: string;      // Identifier (e.g., 'astro', 'react')
  label: string;     // Display name (e.g., 'Astro', 'React')
  icon?: string;     // Optional icon path
}[]
```

## Features

- **Persistent Selection** — User's framework preference is saved to `localStorage`
- **Keyboard Navigation** — Arrow keys, Home, End navigation
- **Accessibility** — Full ARIA support with roles and states
- **Token-Based Styling** — Uses ATOM design tokens
- **Smooth Transitions** — Respects `prefers-reduced-motion`

## Data Attributes

Each framework's content must have:
- `data-framework="frameworkName"` — Matches the `name` in frameworks array
- `data-active="true"` — (Optional) Set on default framework (usually Astro)

## Notes

- The first framework in the array is the default if no preference is saved
- Icons are optional but recommended for better UX
- Content can include any MDX/HTML markup
