---
title: Token Layers
description: Understanding the four-layer token architecture in AtomChat Design System — from Figma sync to CSS output.
---

AtomChat Design System uses a **four-layer hierarchical token architecture**. Each layer has a clear owner and purpose:

## The Four Layers

```
┌─────────────────────────────────────────────────────┐
│   Layer 4: Component                                │  ← Component-specific states
│   buttons.bg.primary-enabled → {bg.inverse.primary} │
├─────────────────────────────────────────────────────┤
│   Layer 3: Semantic                                 │  ← Intent-driven aliases
│   bg.primary → {figma.colors.primitive.neutral.0}   │
├─────────────────────────────────────────────────────┤
│   Layer 2: Foundation                               │  ← Manual bridges + primitives
│   Primitive.Spacing.m → {figma.spacing.m}           │
├─────────────────────────────────────────────────────┤
│   Layer 1: Figma (read-only, auto-synced)           │  ← Source of truth from Figma
│   figma.colors.primitive.blue.500 = #3B82F6         │
└─────────────────────────────────────────────────────┘
```

| Layer | Owner | Location | Updates |
|-------|-------|----------|---------|
| Figma | Designers (via `/figma-pull`) | `src/figma/primitives/` | Automatic |
| Foundation | Design System team | `src/foundation/` | Manual |
| Semantic | Design System team | `src/semantic/` | Manual |
| Component | Component developers | `src/components/` | Manual |

---

## Layer 1: Figma (Auto-synced)

**Purpose:** Raw values extracted directly from Figma variable collections. This is the **source of truth** from the design tool.

**Location:** `packages/tokens/src/figma/primitives/`

**Owner:** Designers — synced via `/figma-pull` skill

**Format:**

```json
{
  "figma": {
    "colors": {
      "primitive": {
        "blue": {
          "500": { "$value": "#3B82F6", "$type": "color" }
        },
        "zinc": {
          "950": { "$value": "#09090B", "$type": "color" }
        }
      }
    }
  }
}
```

```json
{
  "figma": {
    "spacing": {
      "xs": { "$value": 4, "$type": "number" },
      "s":  { "$value": 8, "$type": "number" },
      "m":  { "$value": 16, "$type": "number" },
      "l":  { "$value": 24, "$type": "number" },
      "xl": { "$value": 32, "$type": "number" }
    }
  }
}
```

**Rules:**
- Never edit these files manually
- They are overwritten by `/figma-pull`
- The `figma` namespace prefix enables downstream references like `{figma.colors.primitive.blue.500}`

**CSS output:** `--figma-colors-primitive-blue-500: #3B82F6;`

---

## Layer 2: Foundation

**Purpose:** Manual bridges that reference the Figma layer. Adds dimensions (px, rem) to raw Figma numbers and provides stable aliases.

**Location:** `packages/tokens/src/foundation/`

**Format:**

```json
{
  "Primitive": {
    "Spacing": {
      "$type": "dimension",
      "xs":  { "$value": "4px" },
      "s":   { "$value": "8px" },
      "m":   { "$value": "16px" },
      "l":   { "$value": "24px" },
      "xl":  { "$value": "32px" },
      "2xl": { "$value": "40px" }
    },
    "Radius": {
      "$type": "dimension",
      "none":   { "$value": "0px" },
      "xs":     { "$value": "4px" },
      "s":      { "$value": "8px" },
      "m":      { "$value": "16px" },
      "pill":   { "$value": "1000px" },
      "circle": { "$value": "50%" }
    },
    "Stroke": {
      "$type": "dimension",
      "xs": { "$value": "1px" },
      "s":  { "$value": "2px" }
    }
  }
}
```

**Why this layer exists:**
- Figma spacing values are raw numbers (e.g., `16`) — Foundation adds units (`16px`)
- Provides a stable naming layer that doesn't break if Figma collections are reorganized
- Contains values that don't come from Figma (motion, z-index, glass effects)

**Files:** `borders.json`, `breakpoints.json`, `elevations.json`, `glass.json`, `motion.json`, `opacity.json`, `spacing.json`, `typography.json`, `z-index.json`

**CSS output:** `--primitive-spacing-m: 16px;`

---

## Layer 3: Semantic

**Purpose:** Intent-driven tokens that reference the Figma layer directly. This is where design decisions live — what "primary background" means.

**Location:** `packages/tokens/src/semantic/`

**Format:**

```json
{
  "bg": {
    "$type": "color",
    "primary":   { "$value": "{figma.colors.primitive.neutral.0}" },
    "secondary": { "$value": "{figma.colors.primitive.zinc.50}" },
    "tertiary":  { "$value": "{figma.colors.primitive.zinc.100}" },
    "disabled":  { "$value": "{figma.colors.primitive.zinc.100}" },
    "inverse": {
      "primary":   { "$value": "{figma.colors.primitive.zinc.950}" },
      "secondary": { "$value": "{figma.colors.primitive.zinc.800}" }
    },
    "danger": {
      "primary":   { "$value": "{figma.colors.primitive.red.500}" }
    },
    "status": {
      "info":    { "$value": "{figma.colors.primitive.blue.50}" },
      "success": { "$value": "{figma.colors.primitive.esmerald.50}" },
      "warning": { "$value": "{figma.colors.primitive.yellow.50}" },
      "error":   { "$value": "{figma.colors.primitive.red.50}" }
    }
  },
  "fg": {
    "$type": "color",
    "primary":   { "$value": "{figma.colors.primitive.zinc.900}" },
    "secondary": { "$value": "{figma.colors.primitive.zinc.800}" },
    "tertiary":  { "$value": "{figma.colors.primitive.zinc.600}" },
    "disabled":  { "$value": "{figma.colors.primitive.zinc.400}" },
    "inverse": {
      "primary": { "$value": "{figma.colors.primitive.zinc.50}" }
    }
  }
}
```

**Key pattern:** Semantic tokens reference `{figma.colors.primitive.*}` — they point directly to the synced Figma layer.

**Files:** `colors.json` (bg, fg, border, brand, interactive states)

**CSS output:** `--bg-primary: #FFFFFF;` (resolved through Figma reference)

---

## Layer 4: Component

**Purpose:** Component-specific tokens for every variant and state. References semantic tokens.

**Location:** `packages/tokens/src/components/`

**Format:**

```json
{
  "buttons": {
    "bg": {
      "$type": "color",
      "primary-enabled":   { "$value": "{bg.inverse.primary}" },
      "primary-hovered":   { "$value": "{bg.inverse.secondary}" },
      "primary-disabled":  { "$value": "{bg.disabled}" },

      "secondary-enabled": { "$value": "{bg.primary}" },
      "secondary-hovered": { "$value": "{bg.tertiary}" },
      "secondary-disabled": { "$value": "{bg.disabled}" },

      "danger-primary-enabled": { "$value": "{bg.danger.primary}" },
      "danger-primary-hovered": { "$value": "{bg.interactive.danger.primary.hovered}" }
    }
  }
}
```

**Naming pattern:** `{component}.{property}.{variant}-{state}`

**Files organized by category:**
- `buttons/button.json`, `buttons/link-button.json`
- `forms/checkbox.json`, `forms/radio.json`, `forms/toggle.json`, `forms/text-field.json`, `forms/textarea.json`
- `indicators/badge.json`, `indicators/chip.json`, `indicators/tag.json`, `indicators/spinner.json`
- `layout/divider.json`, `layout/navbar.json`
- `navigation/pagination.json`, `navigation/segment-control.json`
- `containers/card.json`
- `media/avatar.json`
- `effects/glass.json`
- `feedback/tooltip.json`

**CSS output:** `--buttons-bg-primary-enabled: #09090B;` (resolved through full chain)

---

## Reference chain

When Style Dictionary builds, it resolves the full chain:

```
Component token:     {bg.inverse.primary}
       ↓ resolves to
Semantic token:      {figma.colors.primitive.zinc.950}
       ↓ resolves to
Figma token:         #09090B
       ↓ outputs
CSS variable:        --buttons-bg-primary-enabled: #09090B;
```

In your CSS, you consume the final variable:

```css
.button--primary {
  background: var(--buttons-bg-primary-enabled);
}

.button--primary:hover {
  background: var(--buttons-bg-primary-hovered);
}
```

---

## Decision tree: Which layer to use?

```
Are you building a component?
├─ YES → Does your component need variant/state tokens?
│        ├─ YES → Use Component tokens (Layer 4)
│        │        e.g. var(--buttons-bg-primary-enabled)
│        └─ NO  → Use Semantic tokens (Layer 3)
│                  e.g. var(--bg-primary), var(--fg-secondary)
│
├─ Are you defining new design decisions?
│  └─ YES → Create Semantic tokens (Layer 3)
│           that reference Figma layer values
│
└─ Are you syncing from Figma?
   └─ YES → Use /figma-pull (Layer 1, automatic)
```

---

## Layer comparison

| Aspect | Figma | Foundation | Semantic | Component |
|--------|-------|-----------|----------|-----------|
| **Owner** | Designers | DS team | DS team | Dev team |
| **Updates** | Auto (sync) | Manual | Manual | Manual |
| **Editable** | Never | Yes | Yes | Yes |
| **References** | None (raw values) | Figma layer | Figma layer | Semantic layer |
| **Naming** | `figma.collection.path` | `Primitive.Category.size` | `bg.intent` | `component.property.variant-state` |
| **Example** | `#3B82F6` | `16px` | `{figma.colors...}` | `{bg.inverse.primary}` |
| **CSS prefix** | `--figma-*` | `--primitive-*` | `--bg-*`, `--fg-*` | `--buttons-*`, `--chip-*` |

---

## Theme switching

Dark theme overrides live in a separate CSS file (`build/css/dark.css`) with the `[data-theme="dark"]` selector. Only semantic tokens are overridden — primitives stay constant:

```css
/* Light (default in :root) */
--bg-primary: #FFFFFF;          /* resolves from neutral.0 */
--fg-primary: #09090B;          /* resolves from zinc.950 */

/* Dark override */
[data-theme="dark"] {
  --bg-primary: #09090B;        /* resolves from zinc.950 */
  --fg-primary: #FAFAFA;        /* resolves from zinc.50 */
}
```

Components using semantic/component tokens adapt automatically — no per-component dark mode code needed.

---

## Best practices

### Do

1. **Use component tokens** for component styles (they encode all states)
2. **Use semantic tokens** for layout and general UI
3. **Reference downward** — component → semantic → figma
4. **Let `/figma-pull` manage Layer 1** — never edit `src/figma/` manually
5. **Keep semantic layer thin** — it maps intent to primitives, nothing more

### Don't

1. **Don't use `--figma-*` variables directly** in CSS — use semantic or component tokens
2. **Don't hardcode hex values** — always reference a token
3. **Don't skip layers** (e.g., component referencing figma directly)
4. **Don't edit `src/figma/primitives/`** — it gets overwritten by sync
5. **Don't create component tokens for one-off uses** — semantic is enough

---

## Real-world example

### The full chain for a button's primary background:

**Layer 1** — Figma delivers the raw color:
```json
// src/figma/primitives/colors.json
{ "figma": { "colors": { "primitive": { "zinc": { "950": { "$value": "#09090B" } } } } } }
```

**Layer 3** — Semantic gives it meaning:
```json
// src/semantic/colors.json
{ "bg": { "inverse": { "primary": { "$value": "{figma.colors.primitive.zinc.950}" } } } }
```

**Layer 4** — Component applies it to a specific state:
```json
// src/components/buttons/button.json
{ "buttons": { "bg": { "primary-enabled": { "$value": "{bg.inverse.primary}" } } } }
```

**CSS output:**
```css
--figma-colors-primitive-zinc-950: #09090B;
--bg-inverse-primary: #09090B;
--buttons-bg-primary-enabled: #09090B;
```

**Usage:**
```css
.button--primary {
  background: var(--buttons-bg-primary-enabled);
}
```

If the designer changes zinc.950 in Figma → run `/figma-pull` → the value propagates through all layers automatically.

---

## Next steps

- [Figma Sync](/architecture/figma-sync/) — How tokens are pulled from Figma
- [Packages](/architecture/packages/) — Learn about each package
- [Design Tokens](/foundations/tokens/) — Explore all available tokens
