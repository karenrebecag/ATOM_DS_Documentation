---
title: Borders
description: Stroke width and border radius tokens.
---

## Stroke

| Token | Value |
|-------|-------|
| `--primitive-stroke-2xs` | 0.5px |
| `--primitive-stroke-xs` | 1px |
| `--primitive-stroke-s` | 2px |
| `--primitive-stroke-m` | 4px |

## Radius (px)

| Token | Value |
|-------|-------|
| `--primitive-radius-none` | 0px |
| `--primitive-radius-xxs` | 2px |
| `--primitive-radius-xs` | 4px |
| `--primitive-radius-s` | 8px |
| `--primitive-radius-sm` | 12px |
| `--primitive-radius-m` | 16px |
| `--primitive-radius-md` | 20px |
| `--primitive-radius-l` | 24px |
| `--primitive-radius-lg` | 28px |
| `--primitive-radius-xl` | 32px |
| `--primitive-radius-xxl` | 36px |
| `--primitive-radius-pill` | 1000px |
| `--primitive-radius-circle` | 50% |

## Radius (em)

Relative radius that scales with font size.

| Token | Value |
|-------|-------|
| `--primitive-radius-em-xs` | 0.125em |
| `--primitive-radius-em-s` | 0.1875em |
| `--primitive-radius-em-m` | 0.25em |
| `--primitive-radius-em-l` | 0.4375em |
| `--primitive-radius-em-xl` | 0.5em |
| `--primitive-radius-em-round` | 1em |
| `--primitive-radius-em-pill` | 3em |

## Usage

```css
.card {
  border: var(--primitive-stroke-xs) solid var(--border-primary);
  border-radius: var(--primitive-radius-m);
}

.badge {
  border-radius: var(--primitive-radius-pill);
}

.avatar {
  border-radius: var(--primitive-radius-circle);
}
```
