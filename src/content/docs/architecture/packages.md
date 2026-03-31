---
title: Packages
description: Detailed overview of each package in the AtomChat Design System.
---

AtomChat Design System is distributed as independent npm packages under the **@atomchat.io** scope. Each package serves a specific purpose and can be used independently or together.

## @atomchat.io/tokens

The **foundation** of the design system. All visual design decisions are defined here as W3C DTCG-compliant design tokens.

### Features

- **Multi-format output**: CSS, SCSS, JavaScript, TypeScript, JSON
- **Three-layer architecture**: Primitive, Semantic, Component
- **Theme support**: Light/dark mode built-in
- **CDN ready**: Available via jsDelivr
- **Type-safe**: Full TypeScript definitions

### Installation

```bash
pnpm add @atomchat.io/tokens
```

**CDN:**
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atomchat.io/tokens@1.0.0/build/css/tokens.css">
```

### Usage

**CSS:**
```css
@import '@atomchat.io/tokens/build/css/tokens.css';

.component {
  background: var(--bg-primary);
  color: var(--text-primary);
}
```

**JavaScript:**
```typescript
import tokens from '@atomchat.io/tokens';

console.log(tokens.colors.primary);
```

**SCSS:**
```scss
@use '@atomchat.io/tokens/build/scss/tokens' as tokens;

.button {
  background: tokens.$bg-primary;
}
```

### Available Files

| Path | Format | Size |
|------|--------|------|
| `build/css/tokens.css` | CSS Variables | 60.77 KB |
| `build/css/foundation.css` | CSS (Primitive layer) | 14.77 KB |
| `build/css/semantic.css` | CSS (Semantic layer) | 8.32 KB |
| `build/css/components.css` | CSS (Component layer) | 21.43 KB |
| `build/css/dark.css` | CSS (Dark theme) | 325 B |
| `build/scss/tokens.scss` | SCSS Variables | - |
| `build/js/tokens.js` | JavaScript (ESM) | - |
| `build/js/tokens.cjs` | JavaScript (CommonJS) | - |
| `build/js/tokens.d.ts` | TypeScript Definitions | - |
| `build/json/tokens.json` | Raw JSON | - |

### Package.json

```json
{
  "name": "@atomchat.io/tokens",
  "version": "1.0.0",
  "description": "AtomChat Design System tokens — W3C DTCG format, compiled via Style Dictionary",
  "main": "build/js/tokens.cjs",
  "module": "build/js/tokens.js",
  "types": "build/js/tokens.d.ts",
  "license": "MIT"
}
```

---

## @atomchat.io/css

Pre-compiled CSS bundle that includes design tokens, modern reset, and base utilities.

### Features

- **All tokens included**: Complete token set as CSS variables
- **Modern CSS reset**: Normalize browser defaults
- **Base utilities**: Common utility classes
- **Component styles**: Pre-built component CSS
- **Optimized**: Minified and optimized with LightningCSS

### Installation

```bash
pnpm add @atomchat.io/css
```

### Usage

```typescript
// Import in your entry file
import '@atomchat.io/css';
```

**Or via HTML:**
```html
<link rel="stylesheet" href="./node_modules/@atomchat.io/css">
```

### What's Included

1. **CSS Reset**: Modern normalize
2. **Design Tokens**: All token layers
3. **Base Styles**: Typography, layout helpers
4. **Utilities**: Common utility classes
5. **Component Styles**: Optional component CSS

### File Structure

```
@atomchat.io/css/
└── dist/
    ├── atom.css          # Complete bundle
    └── atom.min.css      # Minified version
```

---

## @atomchat.io/animations

GSAP-based animation system with full accessibility support.

### Features

- **GSAP-powered**: Professional animation engine
- **ScrollTrigger**: Scroll-based animations
- **Motion preferences**: Respects `prefers-reduced-motion`
- **Three-level control**: OS, site, and element-level motion control
- **Type-safe**: TypeScript definitions included

### Installation

```bash
pnpm add @atomchat.io/animations gsap
```

:::tip[Peer Dependency]
GSAP is a peer dependency. Make sure to install both packages.
:::

### Usage

**Initialize:**
```typescript
import { initAllAnimations } from '@atomchat.io/animations';

// Initialize on page load
initAllAnimations();
```

**HTML Attributes:**
```html
<!-- Fade in animation -->
<div data-animate="fade-in" data-delay="0.2s">
  Content
</div>

<!-- Scroll-triggered -->
<section data-scroll-trigger="fade-up">
  Appears on scroll
</section>
```

### Animation Types

| Type | Description |
|------|-------------|
| `fade-in` | Fade in from transparent |
| `fade-up` | Fade in from below |
| `fade-down` | Fade in from above |
| `slide-left` | Slide in from right |
| `slide-right` | Slide in from left |
| `scale` | Scale up from center |

### Motion Control Levels

1. **OS Level**: `prefers-reduced-motion: reduce`
   - All animations disabled or simplified

2. **Site Level**: `data-motion="reduced"`
   - Site-wide motion control

3. **Element Level**: `data-motion="none"`
   - Disable animation for specific element

**Example:**
```html
<!-- Disable animations site-wide -->
<html data-motion="reduced">

<!-- Disable for specific element -->
<div data-animate="fade-in" data-motion="none">
  No animation
</div>
```

### API

```typescript
import {
  initAllAnimations,
  createScrollAnimation,
  createFadeIn,
  gsap
} from '@atomchat.io/animations';

// Initialize all animations
initAllAnimations();

// Create custom animation
gsap.to('.element', {
  opacity: 1,
  duration: 1,
  ease: 'power2.out'
});

// Scroll animation
createScrollAnimation('.section', {
  trigger: '.section',
  start: 'top center',
  end: 'bottom center'
});
```

---

## @atomchat.io/components-astro

UI components built with Astro (under construction).

### Status

🚧 **In Development**

This package will include:
- Pre-built Astro components
- Token integration
- Accessibility features
- Animation support

### Planned Components

- Button
- Input
- Card
- Modal
- Dropdown
- Navigation
- And more...

---

## Package Comparison

| Feature | tokens | css | animations |
|---------|--------|-----|------------|
| Design Tokens | ✅ Source | ✅ Included | ❌ |
| CSS Reset | ❌ | ✅ | ❌ |
| Utilities | ❌ | ✅ | ❌ |
| GSAP | ❌ | ❌ | ✅ |
| TypeScript | ✅ | ❌ | ✅ |
| CDN Available | ✅ | ✅ | ❌ |
| Peer Dependencies | None | None | GSAP |

## Package Dependencies

```
@atomchat.io/tokens (standalone)
    ↓
@atomchat.io/css (depends on tokens internally)

@atomchat.io/animations (standalone, requires GSAP)
    ↓
@atomchat.io/components-astro (depends on tokens + animations)
```

## Versioning

All packages follow **semantic versioning**:

- **Major** (1.0.0 → 2.0.0): Breaking changes
- **Minor** (1.0.0 → 1.1.0): New features, backwards compatible
- **Patch** (1.0.0 → 1.0.1): Bug fixes

Packages are versioned independently using **Changesets**.

## Next Steps

- [Token Layers](/architecture/token-layers/) - Understanding the three-layer system
- [Installation](/getting-started/installation/) - Install packages
- [Quick Start](/getting-started/quick-start/) - Build your first component
