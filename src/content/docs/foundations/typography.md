---
title: Typography
description: Font family, size, weight, line height, and tracking tokens.
---

## Font families

| Token | Value |
|-------|-------|
| `--primitive-font-display` | Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif |
| `--primitive-font-body` | Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif |

## Weights

| Token | Value |
|-------|-------|
| `--primitive-weight-regular` | 400 |
| `--primitive-weight-medium` | 500 |
| `--primitive-weight-bold` | 700 |

## Sizes

| Token | rem | px |
|-------|-----|-----|
| `--primitive-size-display-xl` | 4.5rem | 72px |
| `--primitive-size-display-l` | 4rem | 64px |
| `--primitive-size-display-m` | 3.5rem | 56px |
| `--primitive-size-display-s` | 3.25rem | 52px |
| `--primitive-size-huge-title` | 3rem | 48px |
| `--primitive-size-h1` | 2.5rem | 40px |
| `--primitive-size-h2` | 2rem | 32px |
| `--primitive-size-h3` | 2rem | 32px |
| `--primitive-size-h4` | 1.75rem | 28px |
| `--primitive-size-heading` | 1.5rem | 24px |
| `--primitive-size-body` | 1.25rem | 20px |
| `--primitive-size-caption` | 1rem | 16px |
| `--primitive-size-label` | 0.75rem | 12px |
| `--primitive-size-label-small` | 0.625rem | 10px |
| `--primitive-size-footnote` | 0.5rem | 8px |

## Line heights

| Token | Value |
|-------|-------|
| `--primitive-line-height-none` | 1 |
| `--primitive-line-height-tight` | 1.1 |
| `--primitive-line-height-snug` | 1.25 |
| `--primitive-line-height-normal` | 1.3 |
| `--primitive-line-height-relaxed` | 1.5 |
| `--primitive-line-height-loose` | 1.8 |

## Tracking (letter spacing)

| Token | Value |
|-------|-------|
| `--primitive-tracking-tighter` | -0.06em |
| `--primitive-tracking-tight` | -0.04em |
| `--primitive-tracking-normal` | -0.02em |
| `--primitive-tracking-wide` | 0 |
| `--primitive-tracking-wider` | 0.02em |
| `--primitive-tracking-widest` | 0.06em |

## Usage

```css
.heading {
  font-family: var(--primitive-font-display);
  font-size: var(--primitive-size-h2);
  font-weight: var(--primitive-weight-bold);
  line-height: var(--primitive-line-height-tight);
  letter-spacing: var(--primitive-tracking-tight);
}

.body {
  font-size: var(--primitive-size-body);
  font-weight: var(--primitive-weight-regular);
  line-height: var(--primitive-line-height-relaxed);
}
```
