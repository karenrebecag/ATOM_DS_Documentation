---
title: Elevations
description: Box shadow tokens for depth hierarchy.
---

## Elevation scale

| Token | Value | Use case |
|-------|-------|----------|
| `--primitive-elevation-card` | `0px 2px 4px rgba(9,9,11, 0.08)` | Cards, list items |
| `--primitive-elevation-popover` | `0px 6px 14px rgba(9,9,11, 0.08)` | Dropdowns, tooltips |
| `--primitive-elevation-dialog` | `0px 16px 32px rgba(9,9,11, 0.08)` | Modals, dialogs |

All shadows use zinc.950 at 8% opacity. Larger offset + blur = higher elevation.

## Usage

```css
.card {
  box-shadow: var(--primitive-elevation-card);
}

.dropdown {
  box-shadow: var(--primitive-elevation-popover);
}

.modal {
  box-shadow: var(--primitive-elevation-dialog);
}
```
