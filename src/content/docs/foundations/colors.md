---
title: Colors
description: Color tokens and palette for Atom Design System.
---

Atom DS provides a comprehensive color system with semantic naming for consistent color usage across your application.

## Color Categories

### Primary Colors

Used for primary actions, links, and brand elements.

```css
--color-primary-default   /* Primary color base */
--color-primary-hover     /* Hover state */
--color-primary-active    /* Active/pressed state */
```

**Usage example:**
```css
.button-primary {
  background: var(--color-primary-default);
}

.button-primary:hover {
  background: var(--color-primary-hover);
}
```

### Secondary Colors

Used for secondary actions and accents.

```css
--color-secondary-default
--color-secondary-hover
--color-secondary-active
```

### Semantic Colors

Colors with specific meaning for user feedback.

```css
/* Success - positive feedback */
--color-success-default
--color-success-light
--color-success-dark

/* Error - error states and validation */
--color-error-default
--color-error-light
--color-error-dark

/* Warning - cautionary information */
--color-warning-default
--color-warning-light
--color-warning-dark

/* Info - informational messages */
--color-info-default
--color-info-light
--color-info-dark
```

### Text Colors

Hierarchical text colors for readability.

```css
--color-text-primary      /* Primary text */
--color-text-secondary    /* Secondary/muted text */
--color-text-tertiary     /* Disabled/placeholder text */
--color-text-inverse      /* Text on dark backgrounds */
--color-text-disabled     /* Disabled text */
```

### Background Colors

Surface and background colors.

```css
--color-background-default  /* Page background */
--color-background-surface  /* Card/panel backgrounds */
--color-background-hover    /* Hover backgrounds */
--color-background-disabled /* Disabled backgrounds */
```

### Border Colors

Border and divider colors.

```css
--color-border-default    /* Default borders */
--color-border-light      /* Subtle borders */
--color-border-strong     /* Emphasized borders */
```

## Usage Guidelines

### Using Semantic Colors

Always use semantic colors for their intended purpose:

```css
/* ✅ Correct */
.success-message {
  color: var(--color-success-default);
  background: var(--color-success-light);
}

.error-message {
  color: var(--color-error-default);
  background: var(--color-error-light);
}

/* ❌ Incorrect - don't use success color for errors */
.error-message {
  color: var(--color-success-default);
}
```

### Text Hierarchy

Use text color tokens to create visual hierarchy:

```css
.heading {
  color: var(--color-text-primary);
}

.description {
  color: var(--color-text-secondary);
}

.caption {
  color: var(--color-text-tertiary);
}
```

### Interactive States

Use state variants for interactive elements:

```css
.button {
  background: var(--color-primary-default);
}

.button:hover {
  background: var(--color-primary-hover);
}

.button:active {
  background: var(--color-primary-active);
}

.button:disabled {
  background: var(--color-background-disabled);
  color: var(--color-text-disabled);
}
```

## Accessibility

Atom DS color tokens are designed with accessibility in mind:

- All text colors meet WCAG 2.1 AA contrast requirements
- Interactive elements have clear hover and active states
- Semantic colors use sufficient contrast for readability

:::caution[Check Contrast]
When combining colors, always verify contrast ratios meet WCAG standards, especially for custom color combinations.
:::

## Best Practices

1. **Use semantic names**: Prefer `--color-primary-default` over raw hex values
2. **Respect hierarchy**: Use text color tokens to establish information hierarchy
3. **State consistency**: Use `-hover`, `-active` variants for interactive states
4. **Semantic purpose**: Use semantic colors (success, error, warning, info) for their intended meaning

## Color Palette

Atom DS includes a comprehensive primitive color palette designed to be flexible and accessible. Each color family includes 11 tones ranging from 50 (lightest) to 950 (darkest), with special values like 0 (white) and 1000 (black) for neutral colors.

### Red
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-red-50` | #FEF3F3 | rgb(254, 243, 243) |
| `--color-red-100` | #FFE2E3 | rgb(255, 226, 227) |
| `--color-red-200` | #FFCACA | rgb(255, 202, 202) |
| `--color-red-300` | #FFA2A3 | rgb(255, 162, 163) |
| `--color-red-400` | #FF6467 | rgb(255, 100, 103) |
| `--color-red-500` | #FB2C37 | rgb(251, 44, 55) |
| `--color-red-600` | #E7000B | rgb(231, 0, 11) |
| `--color-red-700` | #C10008 | rgb(193, 0, 8) |
| `--color-red-800` | #9E0812 | rgb(158, 8, 18) |
| `--color-red-900` | #82181A | rgb(130, 24, 26) |
| `--color-red-950` | #460808 | rgb(70, 8, 8) |

### Orange
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-orange-50` | #FFF4ED | rgb(255, 244, 237) |
| `--color-orange-100` | #FFDEC8 | rgb(255, 222, 200) |
| `--color-orange-200` | #FFC8A4 | rgb(255, 200, 164) |
| `--color-orange-300` | #FF9D5B | rgb(255, 157, 91) |
| `--color-orange-400` | #FF7C24 | rgb(255, 124, 36) |
| `--color-orange-500` | #FF6600 | rgb(255, 102, 0) |
| `--color-orange-600` | #DB5700 | rgb(219, 87, 0) |
| `--color-orange-700` | #A44200 | rgb(164, 66, 0) |
| `--color-orange-800` | #803300 | rgb(128, 51, 0) |
| `--color-orange-900` | #5B2400 | rgb(91, 36, 0) |
| `--color-orange-950` | #371600 | rgb(55, 22, 0) |

### Amber
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-amber-50` | #FFFBEA | rgb(255, 251, 234) |
| `--color-amber-100` | #FFF4C6 | rgb(255, 244, 198) |
| `--color-amber-200` | #FEE685 | rgb(254, 230, 133) |
| `--color-amber-300` | #FFD230 | rgb(255, 210, 48) |
| `--color-amber-400` | #FFBA00 | rgb(255, 186, 0) |
| `--color-amber-500` | #FE9900 | rgb(254, 153, 0) |
| `--color-amber-600` | #E17100 | rgb(225, 113, 0) |
| `--color-amber-700` | #BB4D00 | rgb(187, 77, 0) |
| `--color-amber-800` | #973C00 | rgb(151, 60, 0) |
| `--color-amber-900` | #7B3306 | rgb(123, 51, 6) |
| `--color-amber-950` | #471901 | rgb(71, 25, 1) |

### Yellow
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-yellow-50` | #FEFCE8 | rgb(254, 252, 232) |
| `--color-yellow-100` | #FFF9C2 | rgb(255, 249, 194) |
| `--color-yellow-200` | #FEF186 | rgb(254, 241, 134) |
| `--color-yellow-300` | #FFE020 | rgb(255, 224, 32) |
| `--color-yellow-400` | #FDC800 | rgb(253, 200, 0) |
| `--color-yellow-500` | #F1B100 | rgb(241, 177, 0) |
| `--color-yellow-600` | #D08800 | rgb(208, 136, 0) |
| `--color-yellow-700` | #A76000 | rgb(167, 96, 0) |
| `--color-yellow-800` | #894B00 | rgb(137, 75, 0) |
| `--color-yellow-900` | #733E0A | rgb(115, 62, 10) |
| `--color-yellow-950` | #432005 | rgb(67, 32, 5) |

### Lime
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-lime-50` | #F8FEE7 | rgb(248, 254, 231) |
| `--color-lime-100` | #ECFDCA | rgb(236, 253, 202) |
| `--color-lime-200` | #D9FA99 | rgb(217, 250, 153) |
| `--color-lime-300` | #BBF452 | rgb(187, 244, 82) |
| `--color-lime-400` | #9AE600 | rgb(154, 230, 0) |
| `--color-lime-500` | #7DCF00 | rgb(125, 207, 0) |
| `--color-lime-600` | #5EA600 | rgb(94, 166, 0) |
| `--color-lime-700` | #497D00 | rgb(73, 125, 0) |
| `--color-lime-800` | #3C6300 | rgb(60, 99, 0) |
| `--color-lime-900` | #35540E | rgb(53, 84, 14) |
| `--color-lime-950` | #192F03 | rgb(25, 47, 3) |

### Green
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-green-50` | #F1FDF4 | rgb(241, 253, 244) |
| `--color-green-100` | #DCFCE7 | rgb(220, 252, 231) |
| `--color-green-200` | #B9F8CF | rgb(185, 248, 207) |
| `--color-green-300` | #7AF2A8 | rgb(122, 242, 168) |
| `--color-green-400` | #06DF73 | rgb(6, 223, 115) |
| `--color-green-500` | #00C951 | rgb(0, 201, 81) |
| `--color-green-600` | #00A73D | rgb(0, 167, 61) |
| `--color-green-700` | #008236 | rgb(0, 130, 54) |
| `--color-green-800` | #0E542C | rgb(14, 84, 44) |
| `--color-green-900` | #0E542C | rgb(14, 84, 44) |
| `--color-green-950` | #032E16 | rgb(3, 46, 22) |

### Emerald
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-emerald-50` | #ECFEF6 | rgb(236, 254, 246) |
| `--color-emerald-100` | #D1FAE5 | rgb(209, 250, 229) |
| `--color-emerald-200` | #A4F4D0 | rgb(164, 244, 208) |
| `--color-emerald-300` | #5EEAB4 | rgb(94, 234, 180) |
| `--color-emerald-400` | #00D492 | rgb(0, 212, 146) |
| `--color-emerald-500` | #00BD7D | rgb(0, 189, 125) |
| `--color-emerald-600` | #009966 | rgb(0, 153, 102) |
| `--color-emerald-700` | #007A56 | rgb(0, 122, 86) |
| `--color-emerald-800` | #006145 | rgb(0, 97, 69) |
| `--color-emerald-900` | #004F3B | rgb(0, 79, 59) |
| `--color-emerald-950` | #002D21 | rgb(0, 45, 33) |

### Teal
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-teal-50` | #F1FDFA | rgb(241, 253, 250) |
| `--color-teal-100` | #CBFBF2 | rgb(203, 251, 242) |
| `--color-teal-200` | #97F6E5 | rgb(151, 246, 229) |
| `--color-teal-300` | #47ECD5 | rgb(71, 236, 213) |
| `--color-teal-400` | #00D5BE | rgb(0, 213, 190) |
| `--color-teal-500` | #00BBA7 | rgb(0, 187, 167) |
| `--color-teal-600` | #009689 | rgb(0, 150, 137) |
| `--color-teal-700` | #00786F | rgb(0, 120, 111) |
| `--color-teal-800` | #00605A | rgb(0, 96, 90) |
| `--color-teal-900` | #0B4F4A | rgb(11, 79, 74) |
| `--color-teal-950` | #022F2E | rgb(2, 47, 46) |

### Cyan
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-cyan-50` | #EBFFFF | rgb(235, 255, 255) |
| `--color-cyan-100` | #CEFAFE | rgb(206, 250, 254) |
| `--color-cyan-200` | #A3F4FD | rgb(163, 244, 253) |
| `--color-cyan-300` | #54EAFD | rgb(84, 234, 253) |
| `--color-cyan-400` | #00D3F3 | rgb(0, 211, 243) |
| `--color-cyan-500` | #00B8DB | rgb(0, 184, 219) |
| `--color-cyan-600` | #0092B9 | rgb(0, 146, 185) |
| `--color-cyan-700` | #007595 | rgb(0, 117, 149) |
| `--color-cyan-800` | #015F79 | rgb(1, 95, 121) |
| `--color-cyan-900` | #0F4E64 | rgb(15, 78, 100) |
| `--color-cyan-950` | #053345 | rgb(5, 51, 69) |

### Sky
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-sky-50` | #F0F9FF | rgb(240, 249, 255) |
| `--color-sky-100` | #DFF3FE | rgb(223, 243, 254) |
| `--color-sky-200` | #B9E6FF | rgb(185, 230, 255) |
| `--color-sky-300` | #75D4FF | rgb(117, 212, 255) |
| `--color-sky-400` | #00BCFF | rgb(0, 188, 255) |
| `--color-sky-500` | #00A6F5 | rgb(0, 166, 245) |
| `--color-sky-600` | #0084D1 | rgb(0, 132, 209) |
| `--color-sky-700` | #0069A9 | rgb(0, 105, 169) |
| `--color-sky-800` | #005A8A | rgb(0, 90, 138) |
| `--color-sky-900` | #004A71 | rgb(0, 74, 113) |
| `--color-sky-950` | #042F4A | rgb(4, 47, 74) |

### Blue
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-blue-50` | #EFF6FF | rgb(239, 246, 255) |
| `--color-blue-100` | #DBEAFF | rgb(219, 234, 255) |
| `--color-blue-200` | #BFDBFF | rgb(191, 219, 255) |
| `--color-blue-300` | #8EC6FF | rgb(142, 198, 255) |
| `--color-blue-400` | #52A2FF | rgb(82, 162, 255) |
| `--color-blue-500` | #2C7FFF | rgb(44, 127, 255) |
| `--color-blue-600` | #165DFC | rgb(22, 93, 252) |
| `--color-blue-700` | #1447E6 | rgb(20, 71, 230) |
| `--color-blue-800` | #193CB9 | rgb(25, 60, 185) |
| `--color-blue-900` | #1C398E | rgb(28, 57, 142) |
| `--color-blue-950` | #162456 | rgb(22, 36, 86) |

### Indigo
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-indigo-50` | #EEF2FF | rgb(238, 242, 255) |
| `--color-indigo-100` | #E0E7FF | rgb(224, 231, 255) |
| `--color-indigo-200` | #C7D2FF | rgb(199, 210, 255) |
| `--color-indigo-300` | #A3B4FF | rgb(163, 180, 255) |
| `--color-indigo-400` | #7C86FF | rgb(124, 134, 255) |
| `--color-indigo-500` | #615FFF | rgb(97, 95, 255) |
| `--color-indigo-600` | #4F39F6 | rgb(79, 57, 246) |
| `--color-indigo-700` | #432DD7 | rgb(67, 45, 215) |
| `--color-indigo-800` | #3729AC | rgb(55, 41, 172) |
| `--color-indigo-900` | #312C86 | rgb(49, 44, 134) |
| `--color-indigo-950` | #1E1A4D | rgb(30, 26, 77) |

### Violet
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-violet-50` | #F5F3FF | rgb(245, 243, 255) |
| `--color-violet-100` | #EDE9FF | rgb(237, 233, 255) |
| `--color-violet-200` | #DDD6FF | rgb(221, 214, 255) |
| `--color-violet-300` | #C5B3FF | rgb(197, 179, 255) |
| `--color-violet-400` | #A684FF | rgb(166, 132, 255) |
| `--color-violet-500` | #8E51FF | rgb(142, 81, 255) |
| `--color-violet-600` | #8023FF | rgb(128, 35, 255) |
| `--color-violet-700` | #7107E7 | rgb(113, 7, 231) |
| `--color-violet-800` | #5D0EC1 | rgb(93, 14, 193) |
| `--color-violet-900` | #4D169A | rgb(77, 22, 154) |
| `--color-violet-950` | #2F0D68 | rgb(47, 13, 104) |

### Purple
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-purple-50` | #FAF5FF | rgb(250, 245, 255) |
| `--color-purple-100` | #F3E8FF | rgb(243, 232, 255) |
| `--color-purple-200` | #EAD4FF | rgb(234, 212, 255) |
| `--color-purple-300` | #DAB2FF | rgb(218, 178, 255) |
| `--color-purple-400` | #C27BFF | rgb(194, 123, 255) |
| `--color-purple-500` | #AD47FF | rgb(173, 71, 255) |
| `--color-purple-600` | #990FFA | rgb(153, 15, 250) |
| `--color-purple-700` | #8200DA | rgb(130, 0, 218) |
| `--color-purple-800` | #6E10B1 | rgb(110, 16, 177) |
| `--color-purple-900` | #59168B | rgb(89, 22, 139) |
| `--color-purple-950` | #3C0366 | rgb(60, 3, 102) |

### Fuchsia
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-fuchsia-50` | #FCF5FF | rgb(252, 245, 255) |
| `--color-fuchsia-100` | #FAE8FF | rgb(250, 232, 255) |
| `--color-fuchsia-200` | #F6D0FF | rgb(246, 208, 255) |
| `--color-fuchsia-300` | #F4A8FF | rgb(244, 168, 255) |
| `--color-fuchsia-400` | #ED6AFF | rgb(237, 106, 255) |
| `--color-fuchsia-500` | #E12BFB | rgb(225, 43, 251) |
| `--color-fuchsia-600` | #C800DF | rgb(200, 0, 223) |
| `--color-fuchsia-700` | #A900B7 | rgb(169, 0, 183) |
| `--color-fuchsia-800` | #8A0194 | rgb(138, 1, 148) |
| `--color-fuchsia-900` | #731478 | rgb(115, 20, 120) |
| `--color-fuchsia-950` | #4B0050 | rgb(75, 0, 80) |

### Pink
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-pink-50` | #FDF3F8 | rgb(253, 243, 248) |
| `--color-pink-100` | #FDE7F4 | rgb(253, 231, 244) |
| `--color-pink-200` | #FCCEE8 | rgb(252, 206, 232) |
| `--color-pink-300` | #FEA5D5 | rgb(254, 165, 213) |
| `--color-pink-400` | #FC64B6 | rgb(252, 100, 182) |
| `--color-pink-500` | #F7339A | rgb(247, 51, 154) |
| `--color-pink-600` | #E60076 | rgb(230, 0, 118) |
| `--color-pink-700` | #C7005C | rgb(199, 0, 92) |
| `--color-pink-800` | #A3004C | rgb(163, 0, 76) |
| `--color-pink-900` | #861043 | rgb(134, 16, 67) |
| `--color-pink-950` | #510324 | rgb(81, 3, 36) |

### Rose
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-rose-50` | #FFF2F2 | rgb(255, 242, 242) |
| `--color-rose-100` | #FFE4E6 | rgb(255, 228, 230) |
| `--color-rose-200` | #FFCCD3 | rgb(255, 204, 211) |
| `--color-rose-300` | #FFA0AE | rgb(255, 160, 174) |
| `--color-rose-400` | #FF637F | rgb(255, 99, 127) |
| `--color-rose-500` | #FF2157 | rgb(255, 33, 87) |
| `--color-rose-600` | #ED0040 | rgb(237, 0, 64) |
| `--color-rose-700` | #C70036 | rgb(199, 0, 54) |
| `--color-rose-800` | #A50036 | rgb(165, 0, 54) |
| `--color-rose-900` | #8B0836 | rgb(139, 8, 54) |
| `--color-rose-950` | #4D0218 | rgb(77, 2, 24) |

### Gray
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-gray-50` | #F9FAFB | rgb(249, 250, 251) |
| `--color-gray-100` | #F3F4F6 | rgb(243, 244, 246) |
| `--color-gray-200` | #E5E7EB | rgb(229, 231, 235) |
| `--color-gray-300` | #D1D5DC | rgb(209, 213, 220) |
| `--color-gray-400` | #99A1AF | rgb(153, 161, 175) |
| `--color-gray-500` | #6A7282 | rgb(106, 114, 130) |
| `--color-gray-600` | #4A5565 | rgb(74, 85, 101) |
| `--color-gray-700` | #364153 | rgb(54, 65, 83) |
| `--color-gray-800` | #1E2939 | rgb(30, 41, 57) |
| `--color-gray-900` | #101828 | rgb(16, 24, 40) |
| `--color-gray-950` | #030712 | rgb(3, 7, 18) |

### Zinc
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-zinc-50` | #FAFAFA | rgb(250, 250, 250) |
| `--color-zinc-100` | #F4F4F5 | rgb(244, 244, 245) |
| `--color-zinc-200` | #E4E4E7 | rgb(228, 228, 231) |
| `--color-zinc-300` | #D4D4D8 | rgb(212, 212, 216) |
| `--color-zinc-400` | #9F9FA9 | rgb(159, 159, 169) |
| `--color-zinc-500` | #71717B | rgb(113, 113, 123) |
| `--color-zinc-600` | #52525C | rgb(82, 82, 92) |
| `--color-zinc-700` | #3F3F46 | rgb(63, 63, 70) |
| `--color-zinc-800` | #27272A | rgb(39, 39, 42) |
| `--color-zinc-900` | #18181B | rgb(24, 24, 27) |
| `--color-zinc-950` | #09090B | rgb(9, 9, 11) |

### Neutral
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-neutral-0` | #FFFFFF | rgb(255, 255, 255) |
| `--color-neutral-50` | #FAFAFA | rgb(250, 250, 250) |
| `--color-neutral-100` | #F5F5F5 | rgb(245, 245, 245) |
| `--color-neutral-200` | #E5E5E5 | rgb(229, 229, 229) |
| `--color-neutral-300` | #D4D4D4 | rgb(212, 212, 212) |
| `--color-neutral-400` | #A1A1A1 | rgb(161, 161, 161) |
| `--color-neutral-500` | #737373 | rgb(115, 115, 115) |
| `--color-neutral-600` | #525252 | rgb(82, 82, 82) |
| `--color-neutral-700` | #404040 | rgb(64, 64, 64) |
| `--color-neutral-800` | #262626 | rgb(38, 38, 38) |
| `--color-neutral-900` | #171717 | rgb(23, 23, 23) |
| `--color-neutral-950` | #0A0A0A | rgb(10, 10, 10) |
| `--color-neutral-1000` | #000000 | rgb(0, 0, 0) |

### Stone
| Token | Hex | RGB |
|-------|-----|-----|
| `--color-stone-50` | #FAFAF9 | rgb(250, 250, 249) |
| `--color-stone-100` | #F5F5F4 | rgb(245, 245, 244) |
| `--color-stone-200` | #E7E5E4 | rgb(231, 229, 228) |
| `--color-stone-300` | #D6D3D1 | rgb(214, 211, 209) |
| `--color-stone-400` | #A6A09B | rgb(166, 160, 155) |
| `--color-stone-500` | #79716B | rgb(121, 113, 107) |
| `--color-stone-600` | #57534D | rgb(87, 83, 77) |
| `--color-stone-700` | #44403B | rgb(68, 64, 59) |
| `--color-stone-800` | #292524 | rgb(41, 37, 36) |
| `--color-stone-900` | #1C1917 | rgb(28, 25, 23) |
| `--color-stone-950` | #0C0A09 | rgb(12, 10, 9) |

### Alpha
| Token | Value |
|-------|-------|
| `--color-alpha-0` | rgba(255, 255, 255, 0) |
| `--color-alpha-50` | rgba(250, 250, 250, 0.7) |
| `--color-alpha-100` | rgba(245, 245, 245, 0.7) |
| `--color-alpha-200` | rgba(229, 229, 229, 0.7) |
| `--color-alpha-300` | rgba(212, 212, 212, 0.7) |
| `--color-alpha-400` | rgba(160, 160, 160, 0.7) |
| `--color-alpha-500` | rgba(115, 115, 115, 0.7) |
| `--color-alpha-600` | rgba(82, 82, 82, 0.7) |
| `--color-alpha-700` | rgba(63, 63, 63, 0.7) |
| `--color-alpha-800` | rgba(38, 38, 38, 0.7) |
| `--color-alpha-900` | rgba(23, 23, 23, 0.7) |
| `--color-alpha-950` | rgba(10, 10, 10, 0.7) |

## Next Steps

- [Typography](/foundations/typography/) - Typography system and tokens
- [Spacing](/foundations/spacing/) - Spacing scale
- [Quick Start](/getting-started/quick-start/) - Build a component with color tokens
