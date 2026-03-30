---
title: Elevations
description: Shadow and elevation tokens for Atom Design System.
---

Atom DS provides a shadow system for creating depth and visual hierarchy. Elevation tokens define subtle shadows that establish layering and focus without being distracting.

## Elevation Levels

Atom DS includes three elevation levels, each designed for specific use cases:

| Level | Token | Value | Use Case |
|-------|-------|-------|----------|
| Card | `--elevation-card` | `0px 2px 4px rgba(9, 9, 11, 0.08)` | Default cards, containers |
| Popover | `--elevation-popover` | `0px 6px 14px rgba(9, 9, 11, 0.08)` | Dropdowns, tooltips, popovers |
| Dialog | `--elevation-dialog` | `0px 16px 32px rgba(9, 9, 11, 0.08)` | Modals, overlays, important dialogs |

## Visual Hierarchy

```
┌─────────────────────────────────────┐
│         Dialog (Highest)            │  ← 0px 16px 32px
├─────────────────────────────────────┤
│    Popover (Medium)                 │  ← 0px 6px 14px
├─────────────────────────────────────┤
│  Card (Baseline)                    │  ← 0px 2px 4px
├─────────────────────────────────────┤
│ Default Background (No Shadow)      │
└─────────────────────────────────────┘
```

## Usage Examples

### Card Elevation

Use for default containers, cards, and surface-level components:

```css
.card {
  background: var(--color-background-surface);
  border-radius: var(--border-radius-m);
  padding: var(--spacing-md);
  box-shadow: var(--elevation-card);
}
```

**When to use:**
- Product cards
- Content containers
- Surface panels
- Default lifted surfaces

### Popover Elevation

Use for elements that hover above or extend from content:

```css
.dropdown {
  position: absolute;
  background: var(--color-background-surface);
  border-radius: var(--border-radius-s);
  box-shadow: var(--elevation-popover);
  z-index: 1000;
}

.tooltip {
  background: var(--color-background-surface);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-xs);
  box-shadow: var(--elevation-popover);
}
```

**When to use:**
- Dropdown menus
- Tooltips
- Popovers
- Context menus
- Floating action buttons

### Dialog Elevation

Use for modal dialogs and high-priority overlays:

```css
.modal {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
}

.modal-content {
  background: var(--color-background-surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--elevation-dialog);
  max-width: 600px;
  width: 90%;
}
```

**When to use:**
- Modal dialogs
- Important alerts
- Full-screen overlays
- Confirmation dialogs
- High-priority interactions

## Complete Component Examples

### Card Component

```css
.card {
  background: var(--color-background-surface);
  border: var(--border-stroke-xs) solid var(--color-border-light);
  border-radius: var(--border-radius-m);
  padding: var(--spacing-md);
  box-shadow: var(--elevation-card);
  transition: box-shadow 200ms ease, border-color 200ms ease;
}

.card:hover {
  border-color: var(--color-border-default);
  box-shadow: var(--elevation-popover);
}

.card:active {
  box-shadow: var(--elevation-card);
}
```

### Dropdown Menu

```css
.menu-button {
  position: relative;
  cursor: pointer;
}

.menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  margin-top: var(--spacing-xs);
  background: var(--color-background-surface);
  border-radius: var(--border-radius-s);
  box-shadow: var(--elevation-popover);
  border: var(--border-stroke-xs) solid var(--color-border-light);
  z-index: 1000;
}

.menu-item {
  padding: var(--spacing-sm) var(--spacing-md);
  cursor: pointer;
  transition: background 150ms ease;
}

.menu-item:hover {
  background: var(--color-background-hover);
}
```

### Modal Dialog

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  opacity: 0;
  animation: fadeIn 200ms ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.modal-dialog {
  background: var(--color-background-surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--elevation-dialog);
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  transform: scale(0.95);
  animation: scaleIn 200ms ease forwards;
}

@keyframes scaleIn {
  to {
    transform: scale(1);
  }
}
```

### Floating Action Button

```css
.fab {
  position: fixed;
  bottom: var(--spacing-lg);
  right: var(--spacing-lg);
  width: 56px;
  height: 56px;
  border-radius: var(--border-radius-circle);
  background: var(--color-primary-default);
  color: var(--color-text-inverse);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--elevation-popover);
  transition: box-shadow 200ms ease, background 200ms ease;
  z-index: 1000;
}

.fab:hover {
  background: var(--color-primary-hover);
  box-shadow: var(--elevation-dialog);
}

.fab:active {
  box-shadow: var(--elevation-popover);
}
```

## Accessibility Considerations

### Color Contrast

Shadows rely on contrast and should never be the only indicator of UI state. Ensure:

- Interactive states are indicated by color, border, or text changes
- Focus states are clearly visible (use focus ring)
- Don't rely on shadows alone for depth perception

### Motion

Some users prefer reduced motion. Consider:

```css
@media (prefers-reduced-motion: reduce) {
  .card,
  .modal-dialog {
    animation: none;
    transition: none;
  }
}
```

### Dark Mode

Ensure shadows are visible in dark mode by using appropriate opacity:

```css
@media (prefers-color-scheme: dark) {
  .card {
    box-shadow: var(--elevation-card);
    /* Shadows should still be visible with dark background */
  }
}
```

## Best Practices

1. **Use elevation intentionally**: Only add shadows where they improve hierarchy
2. **Keep it subtle**: Shadows should enhance, not distract
3. **Consistent stacking**: Higher z-index = stronger elevation
4. **Test contrast**: Ensure shadows are visible on all backgrounds
5. **Avoid multiple shadows**: Use single shadow tokens, don't combine them
6. **Responsive spacing**: Adjust z-index and padding for mobile
7. **Performance**: Use `box-shadow` sparingly on animated elements

## Common Patterns

### Layered Content
```css
/* Layer 1: Base content */
.content { box-shadow: none; }

/* Layer 2: Cards and panels */
.card { box-shadow: var(--elevation-card); }

/* Layer 3: Popovers and dropdowns */
.popover { box-shadow: var(--elevation-popover); z-index: 1000; }

/* Layer 4: Modals */
.modal { box-shadow: var(--elevation-dialog); z-index: 2000; }
```

### Interactive States
```css
.interactive-element {
  box-shadow: var(--elevation-card);
  transition: box-shadow 200ms ease;
}

.interactive-element:hover {
  box-shadow: var(--elevation-popover);
}

.interactive-element:active {
  box-shadow: var(--elevation-card);
}
```

## Next Steps

- [Colors](/foundations/colors/) - Color system and tokens
- [Borders](/foundations/borders/) - Border and radius tokens
- [Spacing](/foundations/spacing/) - Spacing scale
