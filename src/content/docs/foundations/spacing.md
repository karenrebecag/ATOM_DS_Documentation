---
title: Spacing
description: Spacing scale tokens for Atom Design System.
---

Atom DS provides a comprehensive spacing scale for consistent layout and alignment. These tokens establish rhythm and visual balance throughout your interface.

## Spacing Scale

Atom DS includes 22 spacing levels designed for flexible layouts:

| Tier | Token | Value | Use Case |
|------|-------|-------|----------|
| 2XS | `--spacing-xxs` | 2px | Minimal gaps, icon spacing |
| XS | `--spacing-xs` | 4px | Tight spacing, small gaps |
| S | `--spacing-s` | 8px | Small components, margins |
| SM | `--spacing-sm` | 12px | Small padding, gaps |
| M | `--spacing-m` | 16px | Base padding, margins |
| MD | `--spacing-md` | 20px | Standard spacing |
| L | `--spacing-l` | 24px | Larger components |
| LG | `--spacing-lg` | 28px | Generous spacing |
| XL | `--spacing-xl` | 32px | Large sections |
| 2XL | `--spacing-2xxl` | 36px | Major sections |
| 3XL | `--spacing-3xxl` | 44px | Large sections |
| 4XL | `--spacing-4xxl` | 48px | Extra large spacing |
| 5XL | `--spacing-5xxl` | 52px | Extra large spacing |
| 6XL | `--spacing-6xxl` | 56px | Extra large spacing |
| 7XL | `--spacing-7xxl` | 60px | Extra large spacing |
| 8XL | `--spacing-8xxl` | 64px | Extra large spacing |
| 9XL | `--spacing-9xxl` | 68px | Extra large spacing |
| 10XL | `--spacing-10xxl` | 72px | Extra large spacing |
| 11XL | `--spacing-11xxl` | 76px | Extra large spacing |
| 12XL | `--spacing-12xxl` | 80px | Extra large spacing |
| 13XL | `--spacing-13xxl` | 84px | Extra large spacing |
| 14XL | `--spacing-14xxl` | 88px | Extra large spacing |
| 15XL | `--spacing-15xxl` | 92px | Extra large spacing |
| 16XL | `--spacing-16xxl` | 96px | Extra large spacing |
| 17XL | `--spacing-17xxl` | 100px | Maximum spacing |

## Common Spacing Patterns

### Component Padding

```css
/* Buttons */
.button {
  padding: var(--spacing-sm) var(--spacing-md);
}

/* Cards */
.card {
  padding: var(--spacing-md);
}

/* Large sections */
.section {
  padding: var(--spacing-lg);
}

/* Modals */
.modal-content {
  padding: var(--spacing-xl);
}
```

### Margins & Gaps

```css
/* Element spacing */
.element {
  margin-bottom: var(--spacing-m);
}

/* Grid gaps */
.grid {
  display: grid;
  gap: var(--spacing-md);
}

/* Flex gaps */
.flex-container {
  display: flex;
  gap: var(--spacing-sm);
}

/* Section spacing */
.section + .section {
  margin-top: var(--spacing-lg);
}
```

### Text Spacing

```css
/* Headings */
h1 {
  margin-bottom: var(--spacing-md);
}

/* Paragraphs */
p {
  margin-bottom: var(--spacing-sm);
}

/* Lists */
li {
  margin-bottom: var(--spacing-xs);
}
```

### Icon & Text Combinations

```css
/* Icon with text */
.icon-text {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

/* Icon button */
.icon-button {
  padding: var(--spacing-sm);
}

/* Badge with icon */
.badge {
  padding: var(--spacing-xxs) var(--spacing-xs);
}
```

## Layout Examples

### Card Component

```css
.card {
  padding: var(--spacing-md);
  border-radius: var(--border-radius-m);
  box-shadow: var(--elevation-card);
}

.card-header {
  margin-bottom: var(--spacing-md);
}

.card-body {
  margin-bottom: var(--spacing-sm);
}

.card-footer {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: var(--border-stroke-xs) solid var(--color-border-light);
}
```

### Button Group

```css
.button-group {
  display: flex;
  gap: var(--spacing-sm);
}

.button {
  padding: var(--spacing-sm) var(--spacing-md);
}
```

### Navigation

```css
.navbar {
  padding: var(--spacing-sm) var(--spacing-md);
  display: flex;
  gap: var(--spacing-lg);
}

.nav-item {
  padding: var(--spacing-sm) var(--spacing-md);
}
```

### Form Layout

```css
.form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.form-label {
  font-weight: var(--font-weight-medium);
}

.form-input {
  padding: var(--spacing-sm) var(--spacing-md);
}

.form-hint {
  margin-top: var(--spacing-xxs);
  font-size: var(--font-size-sm);
  color: var(--color-text-tertiary);
}
```

### Grid Layout

```css
/* Mobile-first */
.grid {
  display: grid;
  gap: var(--spacing-md);
}

/* Tablet */
@media (min-width: var(--breakpoint-sm)) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
  }
}

/* Desktop */
@media (min-width: var(--breakpoint-md)) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-xl);
  }
}
```

### Section Spacing

```css
.page {
  padding: var(--spacing-md);
}

.section {
  margin-bottom: var(--spacing-2xxl);
}

.section-header {
  margin-bottom: var(--spacing-lg);
}

.section-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}
```

## Responsive Spacing

```css
/* Base mobile spacing */
.container {
  padding: var(--spacing-md);
}

.grid {
  gap: var(--spacing-md);
}

/* Tablet spacing */
@media (min-width: var(--breakpoint-sm)) {
  .container {
    padding: var(--spacing-lg);
  }

  .grid {
    gap: var(--spacing-lg);
  }
}

/* Desktop spacing */
@media (min-width: var(--breakpoint-md)) {
  .container {
    padding: var(--spacing-xl);
  }

  .grid {
    gap: var(--spacing-2xxl);
  }
}
```

## Spacing Ratios

The spacing scale follows a consistent ratio:

- **2:1 ratio**: Progression from small to large (2px, 4px, 8px, etc.)
- **Even intervals**: 4px increments up to larger sizes
- **Flexible system**: Supports both micro and macro spacing needs

## Best Practices

1. **Use tokens consistently**: Never hardcode spacing values like `16px`
2. **Create rhythm**: Maintain consistent spacing ratios throughout designs
3. **Limit levels**: Don't use more than 5-6 different spacing values in a component
4. **Responsive spacing**: Increase spacing on larger screens
5. **White space**: Use spacing to create visual hierarchy and breathing room
6. **Alignment**: Align elements to the spacing grid for visual consistency
7. **Touch targets**: Ensure interactive elements are at least 44px × 44px
8. **Mobile first**: Start with smaller spacing on mobile, increase for desktop

## Spacing Guidelines by Component Type

### Buttons
- Padding: `--spacing-sm` to `--spacing-md`
- Gap between buttons: `--spacing-sm`

### Cards
- Padding: `--spacing-md` to `--spacing-lg`
- Margin between cards: `--spacing-md`

### Forms
- Field gap: `--spacing-md`
- Label to input: `--spacing-xs`
- Helper text spacing: `--spacing-xxs`

### Navigation
- Horizontal gap: `--spacing-lg`
- Vertical padding: `--spacing-sm`

### Sections
- Between sections: `--spacing-2xxl` to `--spacing-3xxl`
- Internal padding: `--spacing-xl`

### Lists
- Item spacing: `--spacing-xs` to `--spacing-sm`
- List padding: `--spacing-md`

## Next Steps

- [Colors](/foundations/colors/) - Color system and tokens
- [Borders](/foundations/borders/) - Border and radius tokens
- [Typography](/foundations/typography/) - Typography scale
