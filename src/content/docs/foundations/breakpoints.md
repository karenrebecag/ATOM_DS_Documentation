---
title: Breakpoints
description: Responsive design breakpoints for Atom Design System.
---

Atom DS provides a comprehensive breakpoint system for responsive design. These tokens define the viewport widths at which your layout should adapt and change.

## Breakpoint Values

Primary breakpoint tokens mark the starting point for each responsive tier:

| Tier | Token | Value | Range |
|------|-------|-------|-------|
| X-Small | `--breakpoint-xs` | 0px | 0 - 599px |
| Small | `--breakpoint-sm` | 600px | 600 - 960px |
| Medium | `--breakpoint-md` | 961px | 961 - 1280px |
| Large | `--breakpoint-lg` | 1281px | 1281 - 1920px |
| X-Large | `--breakpoint-xl` | 1921px | 1921px+ |

## Maximum Breakpoint Values

Maximum breakpoint tokens define the upper bound of each responsive tier:

| Tier | Token | Value |
|------|-------|-------|
| X-Small | `--breakpoint-max-xs` | 599px |
| Small | `--breakpoint-max-sm` | 960px |
| Medium | `--breakpoint-max-md` | 1280px |
| Large | `--breakpoint-max-lg` | 1920px |

## Canvas Sizes

Canvas tokens represent standard device/viewport widths for designing and testing responsive layouts:

| Device | Token | Value |
|--------|-------|-------|
| Mobile (XS) | `--canvas-xs` | 360px |
| Mobile (SM) | `--canvas-sm` | 600px |
| Tablet (MD) | `--canvas-md` | 1024px |
| Desktop (LG) | `--canvas-lg` | 1280px |
| Wide Desktop (XL) | `--canvas-xl` | 1921px |

## Media Query Usage

### Using Breakpoint Tokens

```css
/* Mobile-first approach (recommended) */
.container {
  width: 100%;
  padding: var(--spacing-sm);
}

/* Small screens and up */
@media (min-width: var(--breakpoint-sm)) {
  .container {
    padding: var(--spacing-md);
  }
}

/* Medium screens and up */
@media (min-width: var(--breakpoint-md)) {
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
}

/* Large screens and up */
@media (min-width: var(--breakpoint-lg)) {
  .container {
    max-width: 1200px;
  }
}

/* X-Large screens and up */
@media (min-width: var(--breakpoint-xl)) {
  .container {
    max-width: 1400px;
  }
}
```

### Using Maximum Breakpoint Tokens

```css
/* Hide on mobile and tablet */
@media (max-width: var(--breakpoint-max-sm)) {
  .desktop-only {
    display: none;
  }
}

/* Hide on mobile only */
@media (max-width: var(--breakpoint-max-xs)) {
  .mobile-hidden {
    display: none;
  }
}

/* Show only on large and x-large screens */
@media (min-width: var(--breakpoint-lg)) {
  .large-screens-only {
    display: block;
  }
}
```

## SCSS Mixins

Create reusable SCSS mixins for cleaner responsive code:

```scss
// Mixin for min-width breakpoints
@mixin respond-to($breakpoint) {
  @if $breakpoint == 'sm' {
    @media (min-width: var(--breakpoint-sm)) {
      @content;
    }
  }
  @else if $breakpoint == 'md' {
    @media (min-width: var(--breakpoint-md)) {
      @content;
    }
  }
  @else if $breakpoint == 'lg' {
    @media (min-width: var(--breakpoint-lg)) {
      @content;
    }
  }
  @else if $breakpoint == 'xl' {
    @media (min-width: var(--breakpoint-xl)) {
      @content;
    }
  }
}

// Mixin for max-width breakpoints
@mixin respond-until($breakpoint) {
  @if $breakpoint == 'xs' {
    @media (max-width: var(--breakpoint-max-xs)) {
      @content;
    }
  }
  @else if $breakpoint == 'sm' {
    @media (max-width: var(--breakpoint-max-sm)) {
      @content;
    }
  }
  @else if $breakpoint == 'md' {
    @media (max-width: var(--breakpoint-max-md)) {
      @content;
    }
  }
  @else if $breakpoint == 'lg' {
    @media (max-width: var(--breakpoint-max-lg)) {
      @content;
    }
  }
}

// Usage
.grid {
  display: grid;
  grid-template-columns: 1fr;

  @include respond-to('sm') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include respond-to('md') {
    grid-template-columns: repeat(3, 1fr);
  }

  @include respond-to('lg') {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

## Responsive Design Pattern

### Mobile-First (Recommended)

Start with mobile styles and enhance for larger screens:

```css
/* Base mobile styles */
.card {
  padding: var(--spacing-sm);
  font-size: var(--font-size-sm);
}

/* Tablet and up */
@media (min-width: var(--breakpoint-sm)) {
  .card {
    padding: var(--spacing-md);
  }
}

/* Desktop and up */
@media (min-width: var(--breakpoint-md)) {
  .card {
    padding: var(--spacing-lg);
    font-size: var(--font-size-base);
  }
}
```

### Desktop-First (Legacy)

Start with desktop styles and reduce for smaller screens:

```css
/* Base desktop styles */
.sidebar {
  width: 300px;
  display: block;
}

/* Tablet and below */
@media (max-width: var(--breakpoint-max-md)) {
  .sidebar {
    width: 100%;
  }
}

/* Mobile and below */
@media (max-width: var(--breakpoint-max-xs)) {
  .sidebar {
    display: none;
  }
}
```

## Common Layout Patterns

### Responsive Grid

```css
.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-md);
}

@media (min-width: var(--breakpoint-sm)) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: var(--breakpoint-md)) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: var(--breakpoint-lg)) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### Sidebar + Content

```css
.layout {
  display: flex;
  flex-direction: column;
}

.sidebar {
  width: 100%;
  margin-bottom: var(--spacing-lg);
}

.content {
  width: 100%;
}

@media (min-width: var(--breakpoint-md)) {
  .layout {
    flex-direction: row;
    gap: var(--spacing-lg);
  }

  .sidebar {
    width: 250px;
    margin-bottom: 0;
    flex-shrink: 0;
  }

  .content {
    flex: 1;
  }
}
```

### Navigation

```css
.nav-menu {
  display: none;
  position: fixed;
  inset: 0;
  background: var(--color-background-default);
  z-index: 100;
}

.nav-menu.open {
  display: block;
}

.nav-toggle {
  display: block;
}

@media (min-width: var(--breakpoint-md)) {
  .nav-menu {
    display: flex;
    position: static;
    background: transparent;
    z-index: auto;
  }

  .nav-toggle {
    display: none;
  }
}
```

## Best Practices

1. **Mobile-first approach**: Start with mobile styles and enhance for larger screens
2. **Use tokens consistently**: Always use breakpoint tokens, never hardcode values
3. **Test at canvas sizes**: Use canvas tokens for design and testing
4. **Limit breakpoints**: Stick to the defined 5 breakpoints to maintain consistency
5. **Touch-friendly mobile**: Increase tap targets on mobile (min 44px × 44px)
6. **Readable text**: Ensure line-length is appropriate at each breakpoint
7. **Optimize images**: Serve appropriately sized images for each breakpoint

## Testing Breakpoints

When testing responsive design, use these viewport sizes:

```
XS: 360px  (Mobile - smallest)
SM: 600px  (Mobile - largest)
MD: 1024px (Tablet)
LG: 1280px (Desktop)
XL: 1921px (Wide Desktop)
```

## Next Steps

- [Colors](/foundations/colors/) - Color system and tokens
- [Borders](/foundations/borders/) - Border and radius tokens
- [Spacing](/foundations/spacing/) - Spacing scale
