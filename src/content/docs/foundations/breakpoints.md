---
title: Breakpoints
description: Responsive breakpoint tokens and UI behavior per viewport.
---

## Breakpoints

| Token | Min | Max | Description |
|-------|-----|-----|-------------|
| `--primitive-breakpoint-xs` | 0px | 599px | Mobile |
| `--primitive-breakpoint-sm` | 600px | 960px | Tablet |
| `--primitive-breakpoint-md` | 961px | 1280px | Desktop |
| `--primitive-breakpoint-lg` | 1281px | 1920px | Large desktop |
| `--primitive-breakpoint-xl` | 1921px | — | Extra large |

## Canvas widths

Design reference widths per breakpoint (from Figma):

| Breakpoint | Canvas |
|-----------|--------|
| XS | 360px |
| SM | 600px |
| MD | 1024px |
| LG | 1280px |
| XL | 1921px |

## UI behavior

| Breakpoint | Padding | Menu icon | Menu buttons |
|-----------|---------|-----------|-------------|
| XS (mobile) | 24px | Yes | No |
| SM (tablet) | 32px | No | Yes |
| MD (desktop) | 88px | No | Yes |
| LG (large) | 120px | No | Yes |

## Usage

```css
@media (min-width: 600px) {
  .container { padding-inline: 32px; }
}

@media (min-width: 961px) {
  .container { padding-inline: 88px; }
}

@media (min-width: 1281px) {
  .container { padding-inline: 120px; }
}
```
