---
title: Design Tokens
description: Understanding the token system in Atom Design System.
---

Design tokens are the foundation of Atom DS. They are named variables that store visual design attributes such as colors, spacing, typography, and more.

## What are Design Tokens?

Design tokens are **named entities that store visual design values**. Instead of hardcoding values like `#3b82f6` or `16px`, you use semantic names like `--color-primary-default` or `--spacing-md`.

## Token Format

Atom DS uses **CSS custom properties** (CSS variables) as the runtime format:

```css
/* ✅ Using tokens */
.my-component {
  color: var(--color-primary-default);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
}

/* ❌ Hardcoded values */
.my-component {
  color: #3b82f6;
  padding: 1rem;
  border-radius: 0.5rem;
}
```

## Token Categories

Atom DS organizes tokens into the following categories:

### Colors

Color tokens for backgrounds, text, borders, and semantic colors.

```css
--color-primary-default
--color-secondary-default
--color-success-default
--color-error-default
--color-text-primary
--color-background-surface
```

[View all color tokens →](/foundations/colors/)

### Typography

Font families, sizes, weights, and line heights.

```css
--font-family-base
--font-size-base
--font-weight-medium
--line-height-normal
```

[View all typography tokens →](/foundations/typography/)

### Spacing

Consistent spacing scale for margins, padding, and gaps.

```css
--spacing-xs
--spacing-sm
--spacing-md
--spacing-lg
--spacing-xl
```

[View all spacing tokens →](/foundations/spacing/)

### Borders & Radius

Border widths and border radius values.

```css
--border-width-default
--radius-sm
--radius-md
--radius-lg
```

### Shadows

Elevation shadows for depth and hierarchy.

```css
--shadow-sm
--shadow-md
--shadow-lg
```

### Breakpoints

Responsive breakpoint values.

```css
--breakpoint-sm
--breakpoint-md
--breakpoint-lg
```

[View all breakpoint tokens →](/foundations/breakpoints/)

## Naming Convention

Atom DS follows a consistent naming pattern:

```
--{category}-{property}-{variant}
```

**Examples:**
- `--color-primary-default`
- `--spacing-md`
- `--font-size-lg`
- `--radius-sm`

## Using Tokens

Tokens are accessed using the CSS `var()` function:

```css
.button {
  background: var(--color-primary-default);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
}
```

## Benefits

Using design tokens provides several advantages:

1. **Consistency**: Same values used everywhere
2. **Maintainability**: Change once, update everywhere
3. **Theming**: Easy to create dark mode or brand variations
4. **Developer Experience**: Autocomplete in modern editors
5. **Documentation**: Self-documenting code with semantic names

## Best Practices

:::tip[Always Use Tokens]
Never hardcode visual values. If a token doesn't exist for your use case, consider proposing a new token.
:::

:::caution[Avoid Direct Values]
Avoid using raw values like `#3b82f6` or `16px` in your styles. Always use the appropriate token.
:::

## Next Steps

- [Colors](/foundations/colors/) - Explore the color system
- [Typography](/foundations/typography/) - Typography tokens and scales
- [Spacing](/foundations/spacing/) - Spacing system and usage
