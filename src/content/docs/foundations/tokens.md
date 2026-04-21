---
title: Design Tokens
description: Understanding the W3C DTCG token system in ATOM Design System — 1,800+ tokens across 4 layers.
---

Design tokens are the foundation of ATOM DS. They store visual design values (colors, spacing, typography, borders) as named variables that flow from Figma into CSS, SCSS, and JavaScript outputs.

## Token format

ATOM uses the **W3C Design Token Community Group (DTCG)** specification. Source tokens are JSON:

```json
{
  "bg": {
    "$type": "color",
    "primary": { "$value": "{figma.colors.primitive.neutral.0}" }
  }
}
```

At build time, Style Dictionary resolves references and outputs:

```css
/* CSS Custom Properties */
--bg-primary: #FFFFFF;
```

```scss
/* SCSS Variables */
$bg-primary: #FFFFFF;
```

```javascript
/* JavaScript (ESM) */
export const bgPrimary = '#FFFFFF';
```

---

## Token categories

### Colors

Background, foreground, border, and brand tokens.

```css
--bg-primary              /* Main surface */
--bg-inverse-primary      /* Inverted surface */
--fg-primary              /* Primary text */
--fg-secondary            /* Secondary text */
--border-primary          /* Default border */
```

[View semantic colors →](/foundations/semantic-colors/)

### Spacing

Dimension scale from xxs to 17xl.

```css
--primitive-spacing-xs    /* 4px */
--primitive-spacing-s     /* 8px */
--primitive-spacing-m     /* 16px */
--primitive-spacing-l     /* 24px */
--primitive-spacing-xl    /* 32px */
```

[View spacing tokens →](/foundations/spacing/)

### Typography

Font families, sizes, weights, and line heights.

```css
--primitive-font-size-12   /* 0.75rem */
--primitive-font-size-14   /* 0.875rem */
--primitive-font-size-16   /* 1rem */
--primitive-font-weight-regular
--primitive-font-weight-medium
--primitive-font-weight-bold
```

[View typography tokens →](/foundations/typography/)

### Borders & Radius

Stroke widths and corner radius values.

```css
--primitive-radius-xs      /* 4px */
--primitive-radius-s       /* 8px */
--primitive-radius-m       /* 16px */
--primitive-radius-pill    /* 1000px */
--primitive-stroke-xs      /* 1px */
```

[View borders →](/foundations/borders/)

### Opacity

Transparency values for glass effects and overlays.

```css
--primitive-opacity-5      /* 5% */
--primitive-opacity-10     /* 10% */
--primitive-opacity-50     /* 50% */
--primitive-opacity-90     /* 90% */
```

### Breakpoints

Responsive breakpoint values.

```css
--primitive-breakpoint-sm   /* 640px */
--primitive-breakpoint-md   /* 768px */
--primitive-breakpoint-lg   /* 1024px */
```

[View breakpoints →](/foundations/breakpoints/)

### Elevations

Box shadow values for depth hierarchy.

```css
--elevation-s
--elevation-m
--elevation-l
```

---

## Naming convention

Tokens follow a consistent pattern based on their layer:

| Layer | Pattern | Example |
|-------|---------|---------|
| Figma | `--figma-{collection}-{path}` | `--figma-colors-primitive-blue-500` |
| Foundation | `--primitive-{category}-{value}` | `--primitive-spacing-m` |
| Semantic | `--{intent}-{variant}` | `--bg-primary`, `--fg-disabled` |
| Component | `--{component}-{property}-{variant}-{state}` | `--buttons-bg-primary-enabled` |

All names are **lowercase kebab-case**. No camelCase or PascalCase in CSS output.

---

## The four layers

Tokens are organized in a hierarchy where each layer references the one below:

```
Component  →  references Semantic
Semantic   →  references Figma primitives
Foundation →  manual values with units (px, rem)
Figma      →  raw values synced from Figma (read-only)
```

[Learn about the 4-layer architecture →](/architecture/token-layers/)

---

## Using tokens in CSS

Always use `var()` to consume tokens:

```css
/* Semantic tokens for general UI */
.card {
  background: var(--bg-primary);
  color: var(--fg-primary);
  border: 1px solid var(--border-primary);
  border-radius: var(--primitive-radius-m);
  padding: var(--primitive-spacing-l);
}

/* Component tokens for specific components */
.button--primary {
  background: var(--buttons-bg-primary-enabled);
  color: var(--buttons-fg-primary-enabled);
}

.button--primary:hover {
  background: var(--buttons-bg-primary-hovered);
}
```

---

## Build outputs

Style Dictionary generates multiple formats from the same source:

| File | Selector/Format | Use case |
|------|----------------|----------|
| `build/css/tokens.css` | `:root` | All 1,800+ tokens as CSS vars |
| `build/css/dark.css` | `[data-theme="dark"]` | Dark theme overrides |
| `build/css/foundation.css` | `:root` | Only foundation tokens |
| `build/css/semantic.css` | `:root` | Only semantic tokens |
| `build/css/components.css` | `:root` | Only component tokens |
| `build/scss/_tokens.scss` | `$var-name` | SCSS variables |
| `build/js/tokens.js` | ESM named exports | JavaScript (camelCase) |
| `build/js/tokens.cjs` | CommonJS | Node.js require() |
| `build/js/tokens.d.ts` | TypeScript | Type declarations |
| `build/json/tokens.json` | Flat JSON | Tools and Figma |

---

## Installing tokens

```bash
npm install @atomchat.io/tokens
```

```css
/* Import all tokens */
@import '@atomchat.io/tokens/build/css/tokens.css';

/* Or layer-specific */
@import '@atomchat.io/tokens/build/css/foundation.css';
@import '@atomchat.io/tokens/build/css/semantic.css';
@import '@atomchat.io/tokens/build/css/components.css';
```

---

## Best practices

### Do

1. **Use semantic or component tokens** in your styles
2. **Reference the appropriate layer** — semantic for general UI, component for specific widgets
3. **Let dark mode work automatically** by using semantic tokens (they flip in dark theme)

### Don't

1. **Don't hardcode values** — always use a token
2. **Don't use `--figma-*` tokens directly** in components — use semantic/component layer
3. **Don't use `--primitive-*` for colors** — use `--bg-*`, `--fg-*`, `--border-*` instead
4. **Don't invent token names** — check what exists first with the MCP server or built CSS

---

## Next steps

- [Colors](/foundations/colors/) — Full primitive color palette
- [Semantic Colors](/foundations/semantic-colors/) — bg, fg, border token reference
- [Dark Mode](/foundations/dark-mode/) — How theming works
- [Token Layers](/architecture/token-layers/) — The 4-layer architecture explained
