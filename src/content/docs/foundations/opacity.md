---
title: Opacity
description: Opacity scale tokens for Atom Design System.
---

Atom DS provides a comprehensive opacity scale for controlling transparency levels. These tokens define standardized opacity values for consistent visual treatment across your interface.

## Opacity Scale

Atom DS includes 13 opacity levels ranging from 0 (fully transparent) to 100 (fully opaque):

| Level | Token | Value | Visual |
|-------|-------|-------|--------|
| 0 | `--opacity-0` | 0 | <span style="display:inline-block;width:40px;height:20px;background:rgba(0, 0, 0, 0);border:1px solid #ccc;"></span> |
| 10 | `--opacity-10` | 0.1 | <span style="display:inline-block;width:40px;height:20px;background:rgba(0, 0, 0, 0.1);border:1px solid #ccc;"></span> |
| 20 | `--opacity-20` | 0.2 | <span style="display:inline-block;width:40px;height:20px;background:rgba(0, 0, 0, 0.2);border:1px solid #ccc;"></span> |
| 25 | `--opacity-25` | 0.25 | <span style="display:inline-block;width:40px;height:20px;background:rgba(0, 0, 0, 0.25);border:1px solid #ccc;"></span> |
| 30 | `--opacity-30` | 0.3 | <span style="display:inline-block;width:40px;height:20px;background:rgba(0, 0, 0, 0.3);border:1px solid #ccc;"></span> |
| 40 | `--opacity-40` | 0.4 | <span style="display:inline-block;width:40px;height:20px;background:rgba(0, 0, 0, 0.4);border:1px solid #ccc;"></span> |
| 50 | `--opacity-50` | 0.5 | <span style="display:inline-block;width:40px;height:20px;background:rgba(0, 0, 0, 0.5);border:1px solid #ccc;"></span> |
| 60 | `--opacity-60` | 0.6 | <span style="display:inline-block;width:40px;height:20px;background:rgba(0, 0, 0, 0.6);border:1px solid #ccc;"></span> |
| 70 | `--opacity-70` | 0.7 | <span style="display:inline-block;width:40px;height:20px;background:rgba(0, 0, 0, 0.7);border:1px solid #ccc;"></span> |
| 75 | `--opacity-75` | 0.75 | <span style="display:inline-block;width:40px;height:20px;background:rgba(0, 0, 0, 0.75);border:1px solid #ccc;"></span> |
| 80 | `--opacity-80` | 0.8 | <span style="display:inline-block;width:40px;height:20px;background:rgba(0, 0, 0, 0.8);border:1px solid #ccc;"></span> |
| 90 | `--opacity-90` | 0.9 | <span style="display:inline-block;width:40px;height:20px;background:rgba(0, 0, 0, 0.9);border:1px solid #ccc;"></span> |
| 100 | `--opacity-100` | 1 | <span style="display:inline-block;width:40px;height:20px;background:rgba(0, 0, 0, 1);border:1px solid #ccc;"></span> |

## Common Usage Patterns

### Disabled State

```css
.button:disabled {
  opacity: var(--opacity-50);
  cursor: not-allowed;
}

.input:disabled {
  opacity: var(--opacity-60);
  background: var(--color-background-disabled);
}
```

### Hover & Focus States

```css
.button {
  opacity: var(--opacity-100);
  transition: opacity 200ms ease;
}

.button:hover {
  opacity: var(--opacity-90);
}

.button:active {
  opacity: var(--opacity-80);
}
```

### Placeholder Text

```css
.input::placeholder {
  color: var(--color-text-tertiary);
  opacity: var(--opacity-70);
}
```

### Overlay Backgrounds

```css
.modal-overlay {
  background: rgba(0, 0, 0, var(--opacity-50));
}

.backdrop {
  background: rgba(0, 0, 0, var(--opacity-40));
}
```

### Icon Opacity

```css
.icon-primary {
  opacity: var(--opacity-100);
}

.icon-secondary {
  opacity: var(--opacity-70);
}

.icon-tertiary {
  opacity: var(--opacity-50);
}
```

### Fade Animations

```css
.fade-enter {
  opacity: var(--opacity-0);
  transition: opacity 300ms ease;
}

.fade-enter-active {
  opacity: var(--opacity-100);
}

.fade-exit {
  opacity: var(--opacity-100);
  transition: opacity 300ms ease;
}

.fade-exit-active {
  opacity: var(--opacity-0);
}
```

## Opacity in Color Systems

### With Colors

```css
/* Semi-transparent color overlay */
.overlay {
  background: rgba(var(--color-primary-rgb), var(--opacity-30));
}

/* Disabled button */
.button:disabled {
  background: var(--color-primary-default);
  opacity: var(--opacity-50);
}

/* Text with reduced prominence */
.secondary-text {
  color: var(--color-text-primary);
  opacity: var(--opacity-70);
}
```

### Dark Mode Overlays

```css
.dark-mode-overlay {
  background: rgba(0, 0, 0, var(--opacity-50));
}

.light-mode-overlay {
  background: rgba(255, 255, 255, var(--opacity-40));
}
```

## Common Opacity Levels by Use Case

### Fully Visible
- **Primary Elements**: `--opacity-100` (100%)
- **Interactive Elements**: `--opacity-100` (100%)

### High Visibility
- **Secondary Text**: `--opacity-90` (90%)
- **Secondary Icons**: `--opacity-80` (80%)

### Medium Visibility
- **Placeholder Text**: `--opacity-70` (70%)
- **Tertiary Text**: `--opacity-60` (60%)
- **Modal Overlay**: `--opacity-50` (50%)

### Low Visibility
- **Disabled State**: `--opacity-50` (50%)
- **Subtle Dividers**: `--opacity-30` (30%)
- **Background Watermark**: `--opacity-10` (10%)

### Fully Transparent
- **Hidden Elements**: `--opacity-0` (0%)
- **Transparent Base**: `--opacity-0` (0%)

## Hover & Interaction States

### Button State Progression

```css
.button {
  opacity: var(--opacity-100);
}

.button:hover {
  opacity: var(--opacity-90);
}

.button:active {
  opacity: var(--opacity-80);
}

.button:disabled {
  opacity: var(--opacity-50);
}
```

### Link State Progression

```css
.link {
  opacity: var(--opacity-100);
}

.link:hover {
  opacity: var(--opacity-80);
}

.link:visited {
  opacity: var(--opacity-70);
}
```

## Accessibility Considerations

### Color Contrast with Opacity

```css
/* Ensure sufficient contrast when using opacity */
.text-on-color {
  background: var(--color-primary-default);
  color: var(--color-text-inverse);
  opacity: var(--opacity-100); /* Not reduced */
}

/* Reduce opacity for secondary content */
.secondary-content {
  opacity: var(--opacity-70);
}
```

### Motion & Reduced Motion

```css
.fade-animation {
  opacity: var(--opacity-0);
  transition: opacity 300ms ease;
}

@media (prefers-reduced-motion: reduce) {
  .fade-animation {
    animation: none;
    transition: none;
    opacity: var(--opacity-100);
  }
}
```

## Best Practices

1. **Use tokens consistently**: Never hardcode opacity values like `0.5`
2. **Maintain readability**: Ensure sufficient contrast when reducing opacity
3. **Meaningful opacity**: Use opacity to convey state (disabled, secondary, etc.)
4. **Performance**: Minimize opacity changes on frequently animated elements
5. **Accessibility**: Test opacity combinations for WCAG contrast compliance
6. **Mobile considerations**: Ensure opacity levels are distinguishable on all devices
7. **Theme compatibility**: Verify opacity levels work on both light and dark backgrounds

## Next Steps

- [Colors](/foundations/colors/) - Color system and tokens
- [Elevations](/foundations/elevations/) - Shadow system
- [Spacing](/foundations/spacing/) - Spacing scale
