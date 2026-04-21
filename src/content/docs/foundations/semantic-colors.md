---
title: Semantic Colors
description: Semantic color system for backgrounds, text, borders, and status indicators.
---

Atom DS provides a semantic color system built on top of primitive colors. These tokens map primitive colors to specific UI purposes like backgrounds, text, borders, and interactive states.

## Background Colors (BG)

Background color tokens define surface colors for containers, panels, and page backgrounds.

### Base Backgrounds

| Purpose | Token | Value | Usage |
|---------|-------|-------|-------|
| Primary | `--bg-primary` | Neutral-0 (white) | Main page background |
| Secondary | `--bg-secondary` | Zinc-50 | Secondary surfaces |
| Tertiary | `--bg-tertiary` | Zinc-100 | Subtle surfaces |
| Quaternary | `--bg-quaternary` | Zinc-200 | Faint backgrounds |
| Disabled | `--bg-disabled` | Zinc-100 | Disabled state surfaces |

### Inverse Backgrounds

For dark contexts or inverted layouts:

```css
--bg-inverse-primary: Zinc-950 (darkest)
--bg-inverse-secondary: Zinc-800
--bg-inverse-tertiary: Zinc-600
```

### Soft Backgrounds

Semi-transparent backgrounds with alpha channel:

```css
--bg-soft-primary: Alpha-950 (most opaque)
--bg-soft-secondary: Alpha-800
--bg-soft-tertiary: Alpha-0 (transparent)
```

### Status Backgrounds

Semantic backgrounds for status messaging:

| Status | Token | Color | Usage |
|--------|-------|-------|-------|
| Info | `--bg-status-info` | Blue-50 | Information messages |
| Success | `--bg-status-success` | Emerald-50 | Success messages |
| Warning | `--bg-status-warning` | Yellow-50 | Warning messages |
| Error | `--bg-status-error` | Red-50 | Error messages |
| Neutral | `--bg-status-neutral` | Zinc-200 | Neutral status |
| Brand | `--bg-status-brand` | Orange-50 | Brand status |
| AI | `--bg-status-ai` | Violet-100 | AI-related |

### Interactive Backgrounds

Backgrounds for interactive components with state variants:

```css
/* Primary interactive */
--bg-interactive-primary-default: Base
--bg-interactive-primary-hovered: Zinc-800
--bg-interactive-primary-pressed: Zinc-900

/* Secondary interactive */
--bg-interactive-secondary-default: Base
--bg-interactive-secondary-hovered: Zinc-50
--bg-interactive-secondary-pressed: Zinc-100

/* Links */
--bg-interactive-link-hovered: Blue-50
--bg-interactive-link-pressed: Blue-100

/* Danger states */
--bg-interactive-danger-primary-hovered: Red-400
--bg-interactive-danger-primary-pressed: Red-600
```

### Accent Backgrounds

Specialized backgrounds for specific contexts:

```css
/* AI Features */
--bg-accent-ai-primary: Violet-600
--bg-accent-ai-secondary: Violet-100
--bg-accent-ai-tertiary: Pink-100

/* Inbox/Chat */
--bg-accent-inbox-new: Green-100
--bg-accent-inbox-active: Blue-100
--bg-accent-inbox-reassigned: Amber-50
--bg-accent-inbox-return: Cyan-50
--bg-accent-inbox-typification: Orange-100
--bg-accent-inbox-bubble-sent: Emerald-100
--bg-accent-inbox-bubble-received: Neutral-0

/* Notifications */
--bg-accent-notifications-primary: Red-500
--bg-accent-notifications-secondary: Red-100
```

## Foreground Colors (FG)

Text and icon colors for various hierarchy levels and purposes.

### Base Text Colors

| Level | Token | Value | Usage |
|-------|-------|-------|-------|
| Primary | `--fg-primary` | Zinc-900 | Main body text |
| Secondary | `--fg-secondary` | Zinc-800 | Secondary text |
| Tertiary | `--fg-tertiary` | Zinc-600 | Tertiary text |
| Quaternary | `--fg-quaternary` | Zinc-500 | Muted text |
| Disabled | `--fg-disabled` | Zinc-400 | Disabled text |

### Inverse Text Colors

For dark backgrounds:

```css
--fg-inverse-primary: Zinc-50 (lightest)
--fg-inverse-secondary: Zinc-200
--fg-inverse-tertiary: Zinc-400
--fg-inverse-disabled: Zinc-300
```

### Status Text Colors

```css
--fg-status-info: Blue-800
--fg-status-success: Emerald-600
--fg-status-warning: Yellow-700
--fg-status-error: Red-600
--fg-status-informative: Blue-600
--fg-status-neutral: Zinc-600
--fg-status-brand: Orange-500
--fg-status-ai: Purple-600
```

### Interactive Text Colors

Text colors for interactive elements with state variants:

```css
/* Links */
--fg-interactive-link-enabled: Blue-500
--fg-interactive-link-hovered: Blue-600
--fg-interactive-link-pressed: Blue-700
--fg-interactive-link-disabled: Blue-400

/* Danger links */
--fg-interactive-danger-secondary-enabled: Red-500
--fg-interactive-danger-secondary-hovered: Red-600
--fg-interactive-danger-secondary-pressed: Red-700
```

### Accent Text Colors

Specialized text colors for specific features:

```css
/* AI */
--fg-accent-ai-primary: Zinc-50 (on dark backgrounds)
--fg-accent-ai-secondary: Violet-700
--fg-accent-ai-tertiary: Pink-700

/* Inbox/Chat */
--fg-accent-inbox-new: Green-800
--fg-accent-inbox-active: Blue-800
--fg-accent-inbox-reassigned: Amber-800
--fg-accent-inbox-return: Cyan-950

/* Status Indicators */
--fg-accent-indicators-online: Green-500
--fg-accent-indicators-offline: Red-500
--fg-accent-indicators-idle: Yellow-500
--fg-accent-indicators-inactive: Gray-500
```

## Border Colors

Colors for borders, dividers, and outlines.

### Base Borders

| Level | Token | Value | Usage |
|-------|-------|-------|-------|
| Primary | `--border-primary` | Zinc-500 | Default borders |
| Secondary | `--border-secondary` | Zinc-300 | Subtle borders |
| Tertiary | `--border-tertiary` | Zinc-200 | Very subtle borders |
| Disabled | `--border-disabled` | Zinc-100 | Disabled borders |

### Status Borders

```css
--border-status-info: Blue-500
--border-status-success: Emerald-600
--border-status-warning: Yellow-600
--border-status-error: Red-600
```

### Interactive Borders

State-specific borders for interactive components:

```css
/* Secondary buttons */
--border-interactive-secondary-hovered: Zinc-400
--border-interactive-secondary-pressed: Zinc-500
--border-interactive-secondary-focused: Zinc-900

/* Links */
--border-interactive-link-focused: Blue-500

/* Danger */
--border-interactive-danger-secondary-enabled: Red-500
--border-interactive-danger-secondary-hovered: Red-600
--border-interactive-danger-secondary-focused: Red-500
```

## Brand Colors

Brand-specific color tokens for logo, accents, and branded elements.

```css
--color-brand-primary: Orange-500 (Main brand color)

--color-brand-secondary-orange: Orange-50
--color-brand-secondary-green: Green-50
--color-brand-secondary-violet: Violet-50
--color-brand-secondary-blue: Blue-50
--color-brand-secondary-rose: Rose-50
```

## Dialog Colors

Specific colors for modal dialogs and overlays.

```css
--color-dialog-bg-default: Neutral-0 (white)
--color-dialog-border-default: Zinc-300
--color-dialog-fg-primary: Zinc-950
--color-dialog-fg-secondary: Zinc-600
```

## Backdrop Colors

Overlay colors for modal backdrops:

```css
--color-backdrop-overlay: rgba(0, 0, 0, 0.5) (50% black)
```

## Usage Examples

### Button States

```css
/* Primary Button */
.button-primary {
  background: var(--color-brand-primary);
  color: var(--color-text-inverse);
  border: none;
}

.button-primary:hover {
  background: var(--bg-interactive-primary-hovered);
}

.button-primary:active {
  background: var(--bg-interactive-primary-pressed);
}

.button-primary:disabled {
  background: var(--bg-disabled);
  color: var(--fg-disabled);
}
```

### Secondary Button

```css
.button-secondary {
  background: var(--bg-secondary);
  color: var(--fg-primary);
  border: 1px solid var(--border-secondary);
}

.button-secondary:hover {
  background: var(--bg-interactive-secondary-hovered);
  border-color: var(--border-interactive-secondary-hovered);
}

.button-secondary:active {
  background: var(--bg-interactive-secondary-pressed);
}
```

### Status Message

```css
.alert-success {
  background: var(--bg-status-success);
  border-color: var(--border-status-success);
  color: var(--fg-status-success);
}

.alert-error {
  background: var(--bg-status-error);
  border-color: var(--border-status-error);
  color: var(--fg-status-error);
}
```

### Link

```css
.link {
  color: var(--fg-interactive-link-enabled);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
}

.link:hover {
  color: var(--fg-interactive-link-hovered);
}

.link:active {
  color: var(--fg-interactive-link-pressed);
}

.link:disabled {
  color: var(--fg-interactive-link-disabled);
}
```

### Modal Dialog

```css
.modal {
  background: var(--color-dialog-bg-default);
  border: 1px solid var(--color-dialog-border-default);
  color: var(--color-dialog-fg-primary);
}

.modal-title {
  color: var(--color-dialog-fg-primary);
  font-weight: var(--font-weight-bold);
}

.modal-description {
  color: var(--color-dialog-fg-secondary);
}
```

### Status Indicator

```css
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.status-badge.online::before {
  background: var(--fg-accent-indicators-online);
  width: 8px;
  height: 8px;
  border-radius: var(--border-radius-circle);
}

.status-badge.offline::before {
  background: var(--fg-accent-indicators-offline);
}

.status-badge.idle::before {
  background: var(--fg-accent-indicators-idle);
}
```

## Best Practices

1. **Use semantic tokens**: Always use semantic color tokens, not primitives
2. **Maintain hierarchy**: Use primary → secondary → tertiary for text hierarchy
3. **Status consistency**: Use status colors consistently across the app
4. **Contrast**: Ensure sufficient contrast between foreground and background
5. **Interactive states**: Always include hover, active, and disabled states
6. **Dark mode**: Consider inverse colors for dark theme support
7. **Brand alignment**: Use brand colors strategically, not everywhere
8. **Accessibility**: Test all color combinations for WCAG compliance

## Next Steps

- [Colors](/foundations/colors/) - Primitive color palette
- [Borders](/foundations/borders/) - Border tokens
- [Elevations](/foundations/elevations/) - Shadow system
