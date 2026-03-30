---
title: Borders
description: Border stroke and radius tokens for Atom Design System.
---

Atom DS provides a comprehensive border system with tokens for controlling stroke widths and border radius. These tokens ensure consistent and scalable borders across your application.

## Border Strokes

Border stroke tokens define the thickness of borders, lines, and dividers. Use these tokens to create consistent visual weight across your UI.

### Stroke Widths

| Stroke | Token | Value |
|--------|-------|-------|
| <span style="display:inline-block;width:40px;height:20px;border-bottom:0.5px solid #000;"></span> | `--border-stroke-2xs` | 0.5px |
| <span style="display:inline-block;width:40px;height:20px;border-bottom:1px solid #000;"></span> | `--border-stroke-xs` | 1px |
| <span style="display:inline-block;width:40px;height:20px;border-bottom:2px solid #000;"></span> | `--border-stroke-s` | 2px |
| <span style="display:inline-block;width:40px;height:20px;border-bottom:4px solid #000;"></span> | `--border-stroke-m` | 4px |

**Usage:**
```css
.divider {
  border-bottom: var(--border-stroke-xs) solid var(--color-border-default);
}

.card {
  border: var(--border-stroke-s) solid var(--color-border-light);
}

.focus-ring {
  border: var(--border-stroke-m) solid var(--color-primary-default);
}
```

## Border Radius

Border radius tokens control the roundness of corners. Atom DS provides multiple radius scales to support different design needs.

### Radius (Pixel-based)

| Preview | Token | Value |
|---------|-------|-------|
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:0px;"></span> | `--border-radius-none` | 0px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:2px;"></span> | `--border-radius-xxs` | 2px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:4px;"></span> | `--border-radius-xs` | 4px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:8px;"></span> | `--border-radius-s` | 8px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:12px;"></span> | `--border-radius-sm` | 12px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:16px;"></span> | `--border-radius-m` | 16px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:20px;"></span> | `--border-radius-md` | 20px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:24px;"></span> | `--border-radius-l` | 24px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:28px;"></span> | `--border-radius-lg` | 28px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:32px;"></span> | `--border-radius-xl` | 32px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:36px;"></span> | `--border-radius-xxl` | 36px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:40px;"></span> | `--border-radius-2xxl` | 40px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:44px;"></span> | `--border-radius-3xxl` | 44px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:48px;"></span> | `--border-radius-4xxl` | 48px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:52px;"></span> | `--border-radius-5xxl` | 52px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:1000px;"></span> | `--border-radius-pill` | 1000px |
| <span style="display:inline-block;width:40px;height:40px;background:#ddd;border-radius:50%;"></span> | `--border-radius-circle` | 50% |

### Radius (Em-based)

Em-based radius tokens scale relative to font size, useful for responsive typography-driven designs.

| Token | Value |
|-------|-------|
| `--border-radius-em-xs` | 0.125em |
| `--border-radius-em-s` | 0.1875em |
| `--border-radius-em-m` | 0.25em |
| `--border-radius-em-l` | 0.4375em |
| `--border-radius-em-xl` | 0.5em |
| `--border-radius-em-round` | 1em |
| `--border-radius-em-pill` | 3em |

**Usage:**
```css
.button {
  border-radius: var(--border-radius-s);
  border: var(--border-stroke-xs) solid var(--color-border-default);
}

.card {
  border-radius: var(--border-radius-m);
}

.avatar {
  border-radius: var(--border-radius-circle);
}

.badge {
  border-radius: var(--border-radius-pill);
}

.text-input {
  border-radius: var(--border-radius-xs);
}
```

## Border Combinations

Common border combinations for typical components:

### Subtle Border
```css
.card-subtle {
  border: var(--border-stroke-xs) solid var(--color-border-light);
  border-radius: var(--border-radius-m);
}
```

### Strong Border
```css
.card-strong {
  border: var(--border-stroke-s) solid var(--color-border-strong);
  border-radius: var(--border-radius-m);
}
```

### Focus Ring
```css
.input:focus {
  outline: var(--border-stroke-m) solid var(--color-primary-default);
  outline-offset: 2px;
  border-radius: var(--border-radius-xs);
}
```

### Divider
```css
.divider {
  height: var(--border-stroke-xs);
  background: var(--color-border-light);
  border: none;
}
```

## Best Practices

1. **Use stroke tokens for borders**: Avoid hardcoding `1px` or `2px` values
2. **Pair strokes with colors**: Always combine stroke tokens with appropriate color tokens
3. **Maintain consistency**: Use the same radius scale within a component family
4. **Responsive radius**: Use em-based radius for typography-dependent scaling
5. **Accessibility**: Ensure sufficient border contrast for visual distinction

## Next Steps

- [Colors](/foundations/colors/) - Color system and tokens
- [Typography](/foundations/typography/) - Typography tokens
- [Spacing](/foundations/spacing/) - Spacing scale
