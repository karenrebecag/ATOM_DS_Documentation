---
title: Dark Mode
description: How the ATOM dark theme works — from source tokens to runtime activation.
---

ATOM ships a fully functional dark theme that overrides semantic color tokens via a CSS attribute selector. Components adapt automatically — no per-component dark mode code needed.

## How it works

```
themes/dark/colors.json          ← Dark overrides (same paths as semantic)
        │
        ▼
Style Dictionary (dark config)   ← Filters only overridden tokens
        │
        ▼
build/css/dark.css               ← 82 CSS overrides under [data-theme="dark"]
        │
        ▼
<html data-theme="dark">         ← Activates dark theme at runtime
```

The dark theme is a **separate CSS file** that overrides semantic variables. Primitive tokens stay constant — only the semantic mapping changes.

---

## Activation

Add `data-theme="dark"` to your root element:

```html
<!-- Light (default) -->
<html>

<!-- Dark -->
<html data-theme="dark">
```

### JavaScript toggle

```javascript
function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}
```

### Respect system preference

```javascript
// Match OS preference on load
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');

// Listen for changes
window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', (e) => {
    document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
  });
```

### Persist preference

```javascript
// Save
localStorage.setItem('atom-theme', 'dark');

// Restore (before page renders — put in <head>)
const saved = localStorage.getItem('atom-theme');
if (saved) {
  document.documentElement.setAttribute('data-theme', saved);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
}
```

---

## Loading the CSS

### CDN

```html
<!-- Light tokens (always required) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atomchat.io/tokens/build/css/tokens.css">

<!-- Dark overrides (add after tokens.css) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atomchat.io/tokens/build/css/dark.css">
```

### npm

```javascript
// In your app entry
import '@atomchat.io/tokens/build/css/tokens.css';
import '@atomchat.io/tokens/build/css/dark.css';
```

Order matters — `dark.css` must load **after** `tokens.css` so the overrides take effect.

---

## What gets overridden

Dark mode overrides **semantic tokens only** — backgrounds, foregrounds, borders, and brand colors. Primitives and component tokens stay unchanged (they reference semantic tokens, so they adapt automatically).

### Backgrounds (bg)

| Token | Light | Dark |
|-------|-------|------|
| `--bg-primary` | neutral.0 (white) | zinc.950 (near-black) |
| `--bg-secondary` | zinc.50 | zinc.900 |
| `--bg-tertiary` | zinc.100 | zinc.800 |
| `--bg-disabled` | zinc.100 | zinc.900 |
| `--bg-inverse-primary` | zinc.950 | zinc.50 |
| `--bg-status-info` | blue.50 | blue.950 |
| `--bg-status-error` | red.50 | red.950 |

### Foregrounds (fg)

| Token | Light | Dark |
|-------|-------|------|
| `--fg-primary` | zinc.900 | neutral.0 (white) |
| `--fg-secondary` | zinc.800 | zinc.200 |
| `--fg-tertiary` | zinc.600 | zinc.300 |
| `--fg-disabled` | zinc.400 | zinc.600 |
| `--fg-inverse-primary` | zinc.50 | zinc.900 |
| `--fg-brand` | orange.500 | orange.400 |
| `--fg-status-error` | red.800 | red.300 |

### Borders

| Token | Light | Dark |
|-------|-------|------|
| `--border-primary` | zinc.200 | zinc.600 |
| `--border-secondary` | zinc.100 | zinc.700 |
| `--border-disabled` | zinc.100 | zinc.800 |
| `--border-brand` | orange.500 | orange.600 |

### Other

| Token | Light | Dark |
|-------|-------|------|
| `--brand-primary` | orange.500 | orange.400 |
| `--backdrop-overlay` | rgba(0,0,0,0.5) | rgba(0,0,0,0.7) |
| `--dialog-bg-default` | white | zinc.900 |
| `--dialog-fg-primary` | zinc.900 | zinc.50 |

---

## Why components adapt automatically

Component tokens reference semantic tokens:

```json
// src/components/buttons/button.json
{ "buttons": { "bg": { "primary-enabled": { "$value": "{bg.inverse.primary}" } } } }
```

When dark mode activates, `--bg-inverse-primary` changes from `zinc.950` to `zinc.50`. The button's background updates automatically — zero dark-mode-specific CSS in the component.

```css
/* This works in both themes: */
.button--primary {
  background: var(--buttons-bg-primary-enabled);
  /* Light: resolves to zinc.950 (dark button on light bg) */
  /* Dark: resolves to zinc.50 (light button on dark bg) */
}
```

---

## Architecture details

### Source file

Dark overrides live in a single file:

```
packages/tokens/themes/dark/colors.json
```

This file mirrors the structure of `src/semantic/colors.json` but with dark-appropriate values. Only tokens that need to change are included — everything else inherits from light theme.

### Build configuration

A separate Style Dictionary config handles the dark build:

```
packages/tokens/config/style-dictionary.dark.config.mjs
```

How it works:
1. Sources all light tokens (for reference resolution)
2. Sources `themes/dark/*.json` last (SD merge = later source wins)
3. Collects all token paths defined in dark files
4. Outputs **only those paths** to `dark.css` with the `[data-theme="dark"]` selector

This means `dark.css` is minimal — only 82 overrides instead of all 1,600+ tokens.

### Output

```css
/* build/css/dark.css */
[data-theme="dark"] {
  --bg-primary: var(--figma-colors-primitive-zinc-950);
  --bg-secondary: var(--figma-colors-primitive-zinc-900);
  --fg-primary: var(--figma-colors-primitive-neutral-0);
  --fg-secondary: var(--figma-colors-primitive-zinc-200);
  --border-primary: var(--figma-colors-primitive-zinc-600);
  /* ... 77 more overrides */
}
```

Note: dark overrides use `var()` references to Figma primitive variables. This means if primitives change (via `/figma-pull`), dark theme values update too after rebuild.

---

## Adding new dark overrides

To add a new token override for dark mode:

1. Add the token path in `themes/dark/colors.json` with the dark value:

```json
{
  "bg": {
    "my-new-surface": {
      "$value": "{figma.colors.primitive.zinc.800}",
      "$description": "Dark version of my-new-surface"
    }
  }
}
```

2. Rebuild tokens:

```bash
cd packages/tokens && pnpm build
```

3. The token appears in `dark.css` automatically — the build config detects new paths in the dark theme file.

---

## Design principles

| Principle | Implementation |
|-----------|---------------|
| **Primitives are constant** | Same blue.500, zinc.950 in both themes |
| **Semantics flip** | bg.primary is white in light, near-black in dark |
| **Inverse inverts** | bg.inverse.primary is dark-on-light, light-on-dark |
| **Status colors shift** | Light uses .50 shades, dark uses .950 shades |
| **Contrast preserved** | fg colors use lighter shades (.200-.400) on dark surfaces |
| **Brand adapts** | Orange shifts from .500 to .400 for better dark contrast |

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Dark mode not activating | Ensure `dark.css` loads after `tokens.css` |
| Some tokens not changing | Token might not have a dark override — add it to `themes/dark/colors.json` |
| Flash of light theme | Add the localStorage script to `<head>` (before body renders) |
| Component looks wrong in dark | Check that it uses semantic/component tokens, not hardcoded colors |
| Custom component needs dark support | Reference semantic tokens — they adapt automatically |

---

## Next steps

- [Token Layers](/architecture/token-layers/) — How the 4-layer system works
- [Semantic Colors](/foundations/semantic-colors/) — Full semantic color reference
- [Figma Sync](/architecture/figma-sync/) — How primitives are synced from Figma
