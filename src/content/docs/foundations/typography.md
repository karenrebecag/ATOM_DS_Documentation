---
title: Typography
description: Typography system with font families, sizes, weights, and line heights for Atom Design System.
---

Atom DS provides a comprehensive typography system built on a clear hierarchy. The system includes font families, sizes, weights, line heights, and letter spacing to ensure consistent and readable text across your interface.

## Font Families

Atom DS uses Inter as the primary typeface with system font fallbacks:

### Display & Body Font

```css
:root {
  --font-display: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-body: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

**Font Stack:**
- **Primary:** Inter (modern, highly legible)
- **Fallback 1:** -apple-system (macOS/iOS)
- **Fallback 2:** BlinkMacSystemFont (older macOS)
- **Fallback 3:** Segoe UI (Windows)
- **Final:** sans-serif (system default)

## Font Weights

Atom DS uses three font weights for different text purposes:

| Weight | Token | Value | Usage |
|--------|-------|-------|-------|
| Regular | `--font-weight-regular` | 400 | Body text, normal content |
| Medium | `--font-weight-medium` | 500 | Emphasis, UI labels |
| Bold | `--font-weight-bold` | 700 | Headings, strong emphasis |

```css
.text-regular {
  font-weight: var(--font-weight-regular);
}

.text-medium {
  font-weight: var(--font-weight-medium);
}

.text-bold {
  font-weight: var(--font-weight-bold);
}
```

## Font Sizes

Atom DS provides a comprehensive size scale from 8px to 72px:

| Level | Token | Size | Rem | Use Case |
|-------|-------|------|-----|----------|
| DisplayXL | `--font-size-display-xl` | 72px | 4.5rem | Extra large display |
| DisplayL | `--font-size-display-l` | 64px | 4rem | Large display |
| DisplayM | `--font-size-display-m` | 56px | 3.5rem | Medium display |
| DisplayS | `--font-size-display-s` | 52px | 3.25rem | Small display |
| HugeTitle | `--font-size-huge-title` | 48px | 3rem | Hero titles |
| H1 | `--font-size-h1` | 40px | 2.5rem | Main heading |
| H2 | `--font-size-h2` | 32px | 2rem | Section heading |
| H3 | `--font-size-h3` | 32px | 2rem | Subsection heading |
| H4 | `--font-size-h4` | 28px | 1.75rem | Minor heading |
| Heading | `--font-size-heading` | 24px | 1.5rem | Small heading |
| Body | `--font-size-body` | 20px | 1.25rem | Large body text |
| Caption | `--font-size-caption` | 16px | 1rem | Standard body text |
| Label | `--font-size-label` | 12px | 0.75rem | Small labels |
| LabelSmall | `--font-size-label-small` | 10px | 0.625rem | Tiny labels |
| Footnote | `--font-size-footnote` | 8px | 0.5rem | Minimal text |

## Line Heights

Line height tokens ensure proper readability at different text sizes:

### Fixed Line Heights

| Level | Token | Value | Size | Purpose |
|-------|-------|-------|------|---------|
| DisplayXL | `--line-height-display-xl` | 88px | 72px | Large displays |
| DisplayL | `--line-height-display-l` | 80px | 64px | Large displays |
| DisplayM | `--line-height-display-m` | 72px | 56px | Display text |
| DisplayS | `--line-height-display-s` | 64px | 52px | Display text |
| HugeTitle | `--line-height-huge-title` | 64px | 48px | Hero titles |
| H1 | `--line-height-h1` | 56px | 40px | Main headings |
| H2 | `--line-height-h2` | 48px | 32px | Section headings |
| H3 | `--line-height-h3` | 40px | 32px | Subheadings |
| H4 | `--line-height-h4` | 32px | 28px | Minor headings |
| Heading | `--line-height-heading` | 32px | 24px | Small headings |
| Body | `--line-height-body` | 24px | 20px | Large body |
| Caption | `--line-height-caption` | 24px | 16px | Standard text |
| Label | `--line-height-label` | 16px | 12px | Labels |
| LabelSmall | `--line-height-label-small` | 16px | 10px | Small labels |
| Footnote | `--line-height-footnote` | 16px | 8px | Footnotes |

### Flexible Line Heights

| Token | Value | Usage |
|-------|-------|-------|
| `--line-height-none` | 1 | Titles, display text |
| `--line-height-tight` | 1.1 | Headings |
| `--line-height-snug` | 1.25 | Small headings |
| `--line-height-normal` | 1.3 | Default line height |
| `--line-height-relaxed` | 1.5 | Body text, longer copy |
| `--line-height-loose` | 1.8 | Accessibility, dyslexia-friendly |

## Letter Spacing

Letter spacing (tracking) tokens control character spacing:

| Token | Value | Usage |
|-------|-------|-------|
| `--tracking-tighter` | -0.06em | Tight, display headlines |
| `--tracking-tight` | -0.04em | Compressed text |
| `--tracking-normal` | -0.02em | Default text |
| `--tracking-wide` | 0 | Normal spacing |
| `--tracking-wider` | 0.02em | Increased spacing |
| `--tracking-widest` | 0.06em | Very wide spacing |

## Typography Hierarchy

### Display Styles (Hero/Banner)

```css
.display-xl {
  font-size: var(--font-size-display-xl);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-display-xl);
  letter-spacing: var(--tracking-tighter);
}

.display-l {
  font-size: var(--font-size-display-l);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-display-l);
  letter-spacing: var(--tracking-tight);
}
```

### Heading Styles

```css
h1 {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-h1);
  letter-spacing: var(--tracking-normal);
}

h2 {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-h2);
}

h3 {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-h3);
}

h4 {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-h4);
}
```

### Body Styles

```css
.body-lg {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-body);
}

.body {
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption);
}

.body-sm {
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-label);
}
```

### Label Styles

```css
.label {
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-label);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
}

.label-small {
  font-size: var(--font-size-label-small);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-label-small);
  letter-spacing: var(--tracking-widest);
}
```

## Complete Examples

### Article/Blog Post

```css
.article {
  font-family: var(--font-body);
  color: var(--color-text-primary);
}

.article h1 {
  font-size: var(--font-size-h1);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-h1);
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
}

.article h2 {
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-h2);
  margin-top: var(--spacing-2xxl);
  margin-bottom: var(--spacing-md);
}

.article p {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
}

.article strong {
  font-weight: var(--font-weight-bold);
}

.article em {
  font-style: italic;
}
```

### Button with Label

```css
.button {
  font-family: var(--font-body);
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-label);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
  padding: var(--spacing-sm) var(--spacing-md);
}
```

### Form Labels

```css
.form-label {
  font-size: var(--font-size-label);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-label);
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.form-hint {
  font-size: var(--font-size-label-small);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-label-small);
  color: var(--color-text-tertiary);
}
```

### Card Title & Description

```css
.card-title {
  font-size: var(--font-size-heading);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-heading);
  margin-bottom: var(--spacing-sm);
}

.card-description {
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-caption);
  color: var(--color-text-secondary);
}
```

## Accessibility & Readability

### Minimum Contrast

```css
/* Ensure sufficient contrast */
.text-primary {
  color: var(--color-text-primary);
  background: var(--color-background-default);
}

.text-secondary {
  color: var(--color-text-secondary);
  background: var(--color-background-default);
}
```

### Readable Line Length

```css
.article {
  max-width: 65ch; /* 65 characters per line */
}

.content {
  max-width: 80ch; /* 80 characters per line */
}
```

### Focus States

```css
.text-link:focus {
  outline: 2px solid var(--color-primary-default);
  outline-offset: 2px;
}
```

## Best Practices

1. **Use font size tokens**: Never hardcode pixel values
2. **Maintain hierarchy**: Use 3-4 different sizes maximum per section
3. **Line height matters**: Always pair font size with appropriate line height
4. **Readability first**: Ensure sufficient contrast and line length
5. **Mobile optimization**: Reduce font sizes on mobile if needed
6. **Consistent spacing**: Use spacing tokens around text
7. **Font loading**: Use system fonts for performance
8. **Accessibility**: Test with screen readers and zoom

## Semantic Typography Presets

Beyond primitive tokens, Atom DS provides semantic typography presets that combine font-size and font-weight for common use cases:

### Display Presets

| Level | Regular | Medium | Bold |
|-------|---------|--------|------|
| DisplayXL | `--text-displayXL-regular` | `--text-displayXL-medium` | `--text-displayXL-bold` |
| DisplayL | `--text-displayL-regular` | `--text-displayL-medium` | `--text-displayL-bold` |
| DisplayM | `--text-displayM-regular` | `--text-displayM-medium` | `--text-displayM-bold` |
| DisplayS | `--text-displayS-regular` | `--text-displayS-medium` | `--text-displayS-bold` |

### Heading Presets

| Level | Regular | Medium | Bold |
|-------|---------|--------|------|
| HugeTitle | `--text-hugetitle-regular` | `--text-hugetitle-medium` | `--text-hugetitle-bold` |
| H1 | `--text-h1-regular` | `--text-h1-medium` | `--text-h1-bold` |
| H2 | `--text-h2-regular` | `--text-h2-medium` | `--text-h2-bold` |
| H3 | `--text-h3-regular` | `--text-h3-medium` | `--text-h3-bold` |
| H4 | `--text-h4-regular` | `--text-h4-medium` | `--text-h4-bold` |
| Heading | `--text-heading-regular` | `--text-heading-medium` | `--text-heading-bold` |

### Body Presets

| Level | Regular | Medium | Bold |
|-------|---------|--------|------|
| Body | `--text-body-regular` | `--text-body-medium` | `--text-body-bold` |
| Caption | `--text-caption-regular` | `--text-caption-medium` | `--text-caption-bold` |
| Label | `--text-label-regular` | `--text-label-medium` | `--text-label-bold` |
| LabelSmall | `--text-labelSmall-regular` | `--text-labelSmall-medium` | `--text-labelSmall-bold` |
| Footnote | `--text-footnote-regular` | `--text-footnote-medium` | `--text-footnote-bold` |

### Using Typography Presets

```css
/* Using semantic presets */
h1 {
  font-size: var(--text-h1-bold);
  line-height: var(--line-height-h1);
}

.body-lg {
  font-size: var(--text-body-regular);
  line-height: var(--line-height-body);
}

.label-medium {
  font-size: var(--text-label-medium);
  line-height: var(--line-height-label);
  text-transform: uppercase;
  letter-spacing: var(--tracking-wider);
}

.caption-bold {
  font-size: var(--text-caption-bold);
  font-weight: var(--font-weight-displayXL-bold);
  line-height: var(--line-height-caption);
}
```

## Semantic Opacity Tokens

Named opacity levels for semantic usage:

| Token | Value | Usage |
|-------|-------|-------|
| `--opacity-subtle` | 10% | Watermarks, very subtle elements |
| `--opacity-light` | 25% | Light overlays, faded text |
| `--opacity-medium` | 50% | Modal overlays, disabled states |
| `--opacity-high` | 75% | Secondary content, hover states |
| `--opacity-full` | 100% | Primary content |
| `--opacity-disabled` | 40% | Disabled UI elements |
| `--opacity-placeholder` | 50% | Placeholder text |
| `--opacity-hover` | 80% | Hover state reduction |

## Semantic Elevation Tokens

Predefined shadow values for depth hierarchy:

| Token | Usage |
|-------|-------|
| `--elevation-card` | Cards, panels, containers |
| `--elevation-popover` | Dropdowns, tooltips, popovers |
| `--elevation-dialog` | Modals, dialogs, blocking overlays |

## Z-Index Hierarchy

Predefined z-index values for layering:

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | 0 | Normal stacking context |
| `--z-dropdown` | 1000 | Dropdowns, select menus |
| `--z-sticky` | 100 | Sticky headers, nav |
| `--z-fixed` | 500 | Fixed positioning |
| `--z-toast` | 5000 | Toast notifications |
| `--z-tooltip` | 1100 | Tooltips, popovers |
| `--z-transition` | 2000 | Transition overlays |
| `--z-dialog-backdrop` | 2500 | Modal backdrops |
| `--z-dialog` | 3000 | Modal dialogs |

## Motion Tokens

Animation timing and easing:

### Duration

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-quarter` | 75ms | Quick interactions |
| `--duration-half` | 150ms | Standard transitions |
| `--duration-default` | 300ms | Normal animations |
| `--duration-onehalf` | 450ms | Longer transitions |
| `--duration-double` | 600ms | Extended animations |
| `--duration-shimmer` | 2s | Skeleton loading |

### Easing Functions

| Token | Value | Usage |
|-------|-------|-------|
| `--ease-default` | cubic-bezier(0.4, 0, 0.2, 1) | Standard easing |
| `--ease-standard` | cubic-bezier(0.2, 0, 0, 1) | Material Design easing |

## Border & Radius Tokens

### Stroke Weights

| Token | Usage |
|-------|-------|
| `--stroke-2xs` | Hairline borders, dividers |
| `--stroke-xs` | Thin borders |
| `--stroke-s` | Standard borders |
| `--stroke-m` | Medium borders |
| `--stroke-weight` | Default border weight |
| `--border-thin` | Thin line |
| `--border-default` | Default 2px border |

### Border Radius

| Size | Token | Usage |
|------|-------|-------|
| None | `--radius-none` | Sharp corners |
| XXS | `--radius-xxs` | Minimal rounding |
| XS | `--radius-xs` | Subtle rounding |
| S | `--radius-s` | Small rounding |
| SM | `--radius-sm` | Standard rounding |
| M | `--radius-m` | Medium rounding |
| MD | `--radius-md` | Medium default |
| L | `--radius-l` | Large rounding |
| LG | `--radius-lg` | Large rounded |
| XL | `--radius-xl` | Extra large |
| XXL | `--radius-xxl` | Very large |
| 2XL | `--radius-2xxl` | Extra large |
| 3XL | `--radius-3xxl` | Very large |
| 4XL | `--radius-4xxl` | Extra large |
| 5XL | `--radius-5xxl` | Maximum |
| Pill | `--radius-pill` | Pill-shaped (50%) |
| Circle | `--radius-circle` | Circular (50%) |
| Round | `--radius-round` | Rounded em-based |

## Responsive Typography

```css
/* Mobile typography */
body {
  font-size: var(--font-size-caption);
  line-height: var(--line-height-relaxed);
}

h1 {
  font-size: var(--font-size-h2);
}

/* Desktop typography */
@media (min-width: var(--breakpoint-md)) {
  body {
    font-size: var(--font-size-body);
  }

  h1 {
    font-size: var(--font-size-h1);
  }
}
```

## Complete Example with Semantic Tokens

```css
/* Card with semantic tokens */
.card {
  padding: var(--spacing-md);
  border-radius: var(--radius-m);
  box-shadow: var(--elevation-card);
  z-index: var(--z-base);
}

.card-title {
  font-size: var(--text-heading-bold);
  line-height: var(--line-height-heading);
  color: var(--color-fg-primary);
  margin-bottom: var(--spacing-sm);
}

.card-description {
  font-size: var(--text-caption-regular);
  line-height: var(--line-height-caption);
  color: var(--color-fg-secondary);
  opacity: var(--opacity-high);
}

/* Modal with semantic tokens */
.modal {
  position: fixed;
  z-index: var(--z-dialog);
  background: var(--color-bg-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--elevation-dialog);
  animation: fadeIn var(--duration-default) var(--ease-default);
}

.modal::backdrop {
  background: rgba(0, 0, 0, var(--opacity-medium));
  z-index: var(--z-dialog-backdrop);
}
```

## Next Steps

- [Colors](/foundations/colors/) - Color system and tokens
- [Spacing](/foundations/spacing/) - Spacing scale
- [Elevations](/foundations/elevations/) - Shadow system
