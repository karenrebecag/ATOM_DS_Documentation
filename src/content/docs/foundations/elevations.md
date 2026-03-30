---
title: Elevations
description: Shadow system for Atom Design System establishing visual hierarchy and depth.
---

Atom DS provides three fundamental shadow levels that create visual hierarchy and establish depth perception. Each elevation level serves a specific purpose in the interface.

## Three Basic Shadow Levels

Atom DS defines three elevation levels that communicate information hierarchy and focus:

### Elevation Card

**Token:** `--elevation-card`

**Value:** `0px 2px 4px rgba(9, 9, 11, 0.08)`

**Intent of Use:**
Minimal shadow to subtly distinguish content from the background. Provides structure without overloading the interface.

**Use Cases:**
- Main Containers
- Cards
- Widgets

```css
.card {
  box-shadow: var(--elevation-card);
}

.container {
  box-shadow: var(--elevation-card);
}

.widget {
  box-shadow: var(--elevation-card);
}
```

### Elevation Popover

**Token:** `--elevation-popover`

**Value:** `0px 6px 14px rgba(9, 9, 11, 0.08)`

**Intent of Use:**
Medium shadow indicating that an element is temporarily floating above the current page.

**Use Cases:**
- Filter Panels
- Dropdown Menus
- Tooltips
- Toast Notifications

```css
.dropdown {
  box-shadow: var(--elevation-popover);
}

.tooltip {
  box-shadow: var(--elevation-popover);
}

.toast {
  box-shadow: var(--elevation-popover);
}

.filter-panel {
  box-shadow: var(--elevation-popover);
}
```

### Elevation Modal

**Token:** `--elevation-modal`

**Value:** `0px 16px 32px rgba(9, 9, 11, 0.08)`

**Intent of Use:**
Deep and expansive shadow for elements that block the main flow and require total focus.

**Use Cases:**
- Modals
- Dialogs
- Side Panels
- Navigation Drawers

```css
.modal {
  box-shadow: var(--elevation-modal);
}

.dialog {
  box-shadow: var(--elevation-modal);
}

.side-panel {
  box-shadow: var(--elevation-modal);
}

.drawer {
  box-shadow: var(--elevation-modal);
}
```

## Visual Hierarchy

```
┌─────────────────────────────────────┐
│   Modal (Deep & Expansive)          │  ← 0px 16px 32px
│   Requires Total Focus              │
├─────────────────────────────────────┤
│  Popover (Temporary Floating)       │  ← 0px 6px 14px
│  Medium Emphasis                    │
├─────────────────────────────────────┤
│ Card (Subtle Structure)             │  ← 0px 2px 4px
│ Baseline Level                      │
├─────────────────────────────────────┤
│ Default Background (No Shadow)      │
└─────────────────────────────────────┘
```

## Implementation Patterns

### Card with Hover State

```css
.card {
  box-shadow: var(--elevation-card);
  transition: box-shadow 200ms ease;
}

.card:hover {
  box-shadow: var(--elevation-popover);
}
```

### Dropdown Menu

```css
.menu {
  position: absolute;
  background: var(--color-background-surface);
  border-radius: var(--border-radius-s);
  box-shadow: var(--elevation-popover);
  z-index: 1000;
}
```

### Modal Overlay

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2000;
}

.modal-content {
  background: var(--color-background-surface);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--elevation-modal);
}
```

### Tooltip

```css
.tooltip {
  position: absolute;
  background: var(--color-background-surface);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-xs);
  box-shadow: var(--elevation-popover);
  z-index: 1000;
}
```

## Best Practices

1. **Use appropriate elevation level**: Match shadow depth to component importance
2. **Maintain z-index hierarchy**: Higher elevation = higher z-index
3. **Don't mix elevation levels**: Use one shadow per component
4. **Test on all backgrounds**: Ensure shadows are visible on light and dark surfaces
5. **Performance**: Minimize animated shadow changes; use transitions sparingly
6. **Accessibility**: Don't rely on shadow alone for visual distinction

## Next Steps

- [Colors](/foundations/colors/) - Color system and tokens
- [Borders](/foundations/borders/) - Border and radius tokens
- [Spacing](/foundations/spacing/) - Spacing scale
