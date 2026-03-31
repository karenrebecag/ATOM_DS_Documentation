---
title: Quick Start
description: Build your first component with AtomChat Design System tokens.
---

This guide will walk you through creating your first component using AtomChat DS tokens in under 10 minutes.

## Prerequisites

Make sure you have [installed @atomchat.io/tokens](/getting-started/installation/) in your project.

## Step 1: Import Tokens

### Via CDN (Fastest)

Add to your HTML `<head>`:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atomchat.io/tokens@1.0.0/build/css/tokens.css">
```

### Via npm

Import the token CSS in your project:

```css
/* styles.css */
@import '@atomchat.io/tokens/build/css/tokens.css';
```

Or use the complete CSS bundle:

```css
@import '@atomchat.io/css';
```

## Step 2: Create a Button Component

Let's build a button component using AtomChat DS tokens following the three-layer architecture.

### HTML

```html
<button class="atom-button">
  Click me
</button>
```

### CSS with Semantic Tokens

Use **semantic tokens** for intent-driven styling:

```css
.atom-button {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--gap-s) var(--gap-m);

  /* Typography */
  font-family: var(--font-family-base);
  font-size: var(--text-body-m);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-tight);

  /* Visual */
  background: var(--bg-primary);
  color: var(--text-inverse);
  border: none;
  border-radius: var(--radius-m);

  /* Interaction */
  cursor: pointer;
  transition: background 200ms ease;
}

.atom-button:hover {
  background: var(--bg-primary-hover);
}

.atom-button:active {
  background: var(--bg-primary-active);
}

.atom-button:disabled {
  background: var(--bg-disabled);
  color: var(--text-disabled);
  cursor: not-allowed;
}
```

### Using Component Layer Tokens

For more granular control, use **component-specific tokens**:

```css
.atom-button {
  /* Component layer tokens */
  background: var(--buttons-bg-primary-enabled);
  color: var(--buttons-text-primary-enabled);
  padding: var(--buttons-padding-m);
  border-radius: var(--buttons-radius);
}

.atom-button:hover {
  background: var(--buttons-bg-primary-hover);
}

.atom-button:active {
  background: var(--buttons-bg-primary-active);
}

.atom-button:disabled {
  background: var(--buttons-bg-disabled);
  color: var(--buttons-text-disabled);
}
```

## Step 3: Add Variants

Create button variants using semantic tokens:

```css
/* Secondary variant */
.atom-button--secondary {
  background: var(--bg-secondary);
}

.atom-button--secondary:hover {
  background: var(--bg-secondary-hover);
}

/* Ghost variant */
.atom-button--ghost {
  background: transparent;
  border: 1px solid var(--border-default);
  color: var(--text-primary);
}

.atom-button--ghost:hover {
  background: var(--bg-hover);
}
```

### HTML with Variants

```html
<button class="atom-button atom-button--secondary">
  Secondary Button
</button>

<button class="atom-button atom-button--ghost">
  Ghost Button
</button>
```

## Step 4: Understanding Token Layers

AtomChat DS uses a **three-layer token architecture**:

### 1. Primitive Layer
Raw foundation values (rarely used directly):

```css
/* ❌ Avoid in components */
color: var(--primitive-blue-500);
padding: var(--primitive-spacing-4);
```

### 2. Semantic Layer (Recommended)
Intent-driven tokens for most use cases:

```css
/* ✅ Use in most components */
background: var(--bg-primary);
color: var(--text-primary);
padding: var(--gap-m);
border-radius: var(--radius-m);
```

### 3. Component Layer
Component-specific overrides:

```css
/* ✅ Use for specific components */
background: var(--buttons-bg-primary-enabled);
padding: var(--buttons-padding-m);
```

## Step 5: Theme Support

AtomChat DS includes automatic light/dark theme support:

```html
<!-- Light theme (default) -->
<html data-theme="light">

<!-- Dark theme -->
<html data-theme="dark">
```

Your button will automatically adapt to the theme using semantic tokens!

## Step 6: Adding Animations (Optional)

If you installed `@atomchat.io/animations`:

```javascript
import { initAllAnimations } from '@atomchat.io/animations';

// Initialize animations
initAllAnimations();
```

Add animation attributes to your button:

```html
<button
  class="atom-button"
  data-animate="fade-in"
  data-delay="0.2s">
  Animated Button
</button>
```

:::tip[Motion Preferences]
AtomChat animations automatically respect `prefers-reduced-motion`. Users who prefer reduced motion will see instant transitions.
:::

## Best Practices

1. **Use Semantic Tokens First**: Start with semantic tokens (`--bg-primary`) before component tokens
2. **Never Use Primitives**: Avoid primitive tokens (`--primitive-blue-500`) in component styles
3. **Theme Agnostic**: Don't hardcode colors; let tokens handle light/dark modes
4. **Zero Hardcoded Values**: Every visual value should use a token
5. **BEM Naming**: Use Block-Element-Modifier naming for CSS classes

## Token-First Approach

Notice how **every visual value** uses a token:

```css
/* ✅ Good: Token-based */
.component {
  background: var(--bg-primary);
  padding: var(--gap-m);
  border-radius: var(--radius-m);
  color: var(--text-primary);
}

/* ❌ Bad: Hardcoded values */
.component {
  background: #3b82f6;
  padding: 1rem;
  border-radius: 0.5rem;
  color: #111827;
}
```

## Complete Example

Here's a complete button component using best practices:

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <!-- Using CDN -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atomchat.io/tokens@1.0.0/build/css/tokens.css">
  <style>
    .atom-button {
      display: inline-flex;
      align-items: center;
      gap: var(--gap-s);
      padding: var(--gap-s) var(--gap-m);

      font-family: var(--font-family-base);
      font-size: var(--text-body-m);
      font-weight: var(--font-weight-medium);

      background: var(--bg-primary);
      color: var(--text-inverse);
      border: none;
      border-radius: var(--radius-m);

      cursor: pointer;
      transition: background 200ms ease;
    }

    .atom-button:hover {
      background: var(--bg-primary-hover);
    }
  </style>
</head>
<body>
  <button class="atom-button">
    Click me
  </button>

  <script>
    // Theme toggler
    const toggleTheme = () => {
      const html = document.documentElement;
      const theme = html.getAttribute('data-theme');
      html.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
    };
  </script>
</body>
</html>
```

## Next Steps

Now that you've built your first component, explore:

- [Token Layers](/architecture/token-layers/) - Deep dive into the three-layer architecture
- [Colors](/foundations/colors/) - Semantic color tokens
- [Typography](/foundations/typography/) - Typography system
- [Animations](/foundations/animations/) - GSAP animation system
