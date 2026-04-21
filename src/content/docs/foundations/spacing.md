---
title: Spacing
description: Spacing scale tokens for padding, margin, and gap.
---

## Scale

A linear 4px-based scale from 2px to 100px:

| Token | Value |
|-------|-------|
| `--primitive-spacing-xxs` | 2px |
| `--primitive-spacing-xs` | 4px |
| `--primitive-spacing-s` | 8px |
| `--primitive-spacing-sm` | 12px |
| `--primitive-spacing-m` | 16px |
| `--primitive-spacing-md` | 20px |
| `--primitive-spacing-l` | 24px |
| `--primitive-spacing-lg` | 28px |
| `--primitive-spacing-xl` | 32px |
| `--primitive-spacing-xxl` | 36px |
| `--primitive-spacing-2xl` | 40px |
| `--primitive-spacing-3xl` | 44px |
| `--primitive-spacing-4xl` | 48px |
| `--primitive-spacing-5xl` | 52px |
| `--primitive-spacing-6xl` | 56px |
| `--primitive-spacing-7xl` | 60px |
| `--primitive-spacing-8xl` | 64px |
| `--primitive-spacing-9xl` | 68px |
| `--primitive-spacing-10xl` | 72px |
| `--primitive-spacing-11xl` | 76px |
| `--primitive-spacing-12xl` | 80px |
| `--primitive-spacing-13xl` | 84px |
| `--primitive-spacing-14xl` | 88px |
| `--primitive-spacing-15xl` | 92px |
| `--primitive-spacing-16xl` | 96px |
| `--primitive-spacing-17xl` | 100px |

## Common usage

| Context | Token |
|---------|-------|
| Icon gap | `xs` (4px) |
| Button padding | `s`–`m` (8–16px) |
| Card padding | `l`–`xl` (24–32px) |
| Section spacing | `4xl`–`8xl` (48–64px) |
| Page margin | `12xl`–`16xl` (80–96px) |

## Usage

```css
.card {
  padding: var(--primitive-spacing-l);
  gap: var(--primitive-spacing-m);
}

.section {
  padding-block: var(--primitive-spacing-8xl);
}

.button {
  padding: var(--primitive-spacing-s) var(--primitive-spacing-m);
  gap: var(--primitive-spacing-xs);
}
```
