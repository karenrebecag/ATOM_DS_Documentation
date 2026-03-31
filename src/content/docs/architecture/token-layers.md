---
title: Token Layers
description: Understanding the three-layer token architecture in AtomChat Design System.
---

AtomChat Design System uses a **three-layer hierarchical token architecture** to provide flexibility, consistency, and maintainability.

## The Three Layers

```
┌─────────────────────────────────────┐
│   Component Layer                   │  ← Specific overrides
│   --buttons-bg-primary-enabled      │
├─────────────────────────────────────┤
│   Semantic Layer                    │  ← Intent-driven
│   --bg-primary, --text-body-m       │
├─────────────────────────────────────┤
│   Primitive Layer                   │  ← Foundation values
│   --primitive-blue-500, --spacing-4 │
└─────────────────────────────────────┘
```

Each layer builds upon the previous one, creating a flexible system that scales from global design decisions down to component-specific needs.

---

## Layer 1: Primitive (Foundation)

**Purpose:** Raw foundation values with no semantic meaning.

**Naming Pattern:** `--primitive-{category}-{value}`

### Examples

```css
/* Colors */
--primitive-blue-50: #eff6ff;
--primitive-blue-100: #dbeafe;
--primitive-blue-500: #3b82f6;
--primitive-blue-900: #1e3a8a;

/* Spacing */
--primitive-spacing-1: 0.25rem;   /* 4px */
--primitive-spacing-2: 0.5rem;    /* 8px */
--primitive-spacing-4: 1rem;      /* 16px */
--primitive-spacing-8: 2rem;      /* 32px */

/* Typography */
--primitive-font-size-12: 0.75rem;
--primitive-font-size-14: 0.875rem;
--primitive-font-size-16: 1rem;
--primitive-font-size-24: 1.5rem;

/* Radius */
--primitive-radius-2: 2px;
--primitive-radius-4: 4px;
--primitive-radius-8: 8px;
```

### When to Use

**❌ Almost Never in Components**

Primitive tokens should rarely be used directly in component styles. They exist as building blocks for semantic tokens.

**✅ Only When:**
- Creating new semantic tokens
- Building the design system itself
- Debugging token values

---

## Layer 2: Semantic (Intent-Driven)

**Purpose:** Tokens with meaning and intent. This is the **primary layer** for most component development.

**Naming Pattern:** `--{category}-{intent}-{variant}`

### Color Semantics

```css
/* Backgrounds */
--bg-primary: var(--primitive-blue-500);
--bg-secondary: var(--primitive-slate-500);
--bg-surface: var(--primitive-white);
--bg-hover: var(--primitive-slate-100);
--bg-disabled: var(--primitive-slate-200);

/* Text */
--text-primary: var(--primitive-slate-900);
--text-secondary: var(--primitive-slate-600);
--text-tertiary: var(--primitive-slate-400);
--text-inverse: var(--primitive-white);
--text-disabled: var(--primitive-slate-300);

/* Borders */
--border-default: var(--primitive-slate-300);
--border-strong: var(--primitive-slate-500);
--border-light: var(--primitive-slate-200);

/* States */
--success: var(--primitive-green-500);
--error: var(--primitive-red-500);
--warning: var(--primitive-yellow-500);
--info: var(--primitive-blue-500);
```

### Spacing Semantics

```css
/* Gap/Spacing */
--gap-xs: var(--primitive-spacing-1);   /* 4px */
--gap-s: var(--primitive-spacing-2);    /* 8px */
--gap-m: var(--primitive-spacing-4);    /* 16px */
--gap-l: var(--primitive-spacing-6);    /* 24px */
--gap-xl: var(--primitive-spacing-8);   /* 32px */
```

### Typography Semantics

```css
/* Font Sizes */
--text-caption: var(--primitive-font-size-12);
--text-body-s: var(--primitive-font-size-14);
--text-body-m: var(--primitive-font-size-16);
--text-body-l: var(--primitive-font-size-18);
--text-heading-s: var(--primitive-font-size-20);
--text-heading-m: var(--primitive-font-size-24);
--text-heading-l: var(--primitive-font-size-32);
```

### Radius Semantics

```css
--radius-s: var(--primitive-radius-2);
--radius-m: var(--primitive-radius-4);
--radius-l: var(--primitive-radius-8);
--radius-full: 9999px;
```

### When to Use

**✅ Primary Layer for Components**

Use semantic tokens for 90% of your component styling:

```css
.card {
  background: var(--bg-surface);
  color: var(--text-primary);
  padding: var(--gap-l);
  border-radius: var(--radius-m);
  border: 1px solid var(--border-default);
}

.card__title {
  font-size: var(--text-heading-s);
  color: var(--text-primary);
  margin-bottom: var(--gap-m);
}
```

---

## Layer 3: Component (Specific)

**Purpose:** Component-specific tokens for granular control and variants.

**Naming Pattern:** `--{component}-{property}-{variant}-{state}`

### Button Examples

```css
/* Button - Primary Variant */
--buttons-bg-primary-enabled: var(--bg-primary);
--buttons-bg-primary-hover: var(--primitive-blue-600);
--buttons-bg-primary-active: var(--primitive-blue-700);
--buttons-bg-primary-disabled: var(--bg-disabled);

--buttons-text-primary-enabled: var(--text-inverse);
--buttons-text-primary-disabled: var(--text-disabled);

/* Button - Secondary Variant */
--buttons-bg-secondary-enabled: var(--bg-secondary);
--buttons-bg-secondary-hover: var(--primitive-slate-600);
--buttons-bg-secondary-active: var(--primitive-slate-700);

/* Button - Ghost Variant */
--buttons-bg-ghost-enabled: transparent;
--buttons-bg-ghost-hover: var(--bg-hover);
--buttons-border-ghost: var(--border-default);

/* Button Sizing */
--buttons-padding-s: var(--gap-xs) var(--gap-s);
--buttons-padding-m: var(--gap-s) var(--gap-m);
--buttons-padding-l: var(--gap-m) var(--gap-l);

--buttons-font-size-s: var(--text-body-s);
--buttons-font-size-m: var(--text-body-m);
--buttons-font-size-l: var(--text-body-l);

--buttons-radius: var(--radius-m);
```

### Input Examples

```css
/* Input States */
--inputs-bg-enabled: var(--bg-surface);
--inputs-bg-disabled: var(--bg-disabled);
--inputs-bg-focus: var(--bg-surface);

--inputs-border-enabled: var(--border-default);
--inputs-border-focus: var(--bg-primary);
--inputs-border-error: var(--error);

--inputs-text: var(--text-primary);
--inputs-placeholder: var(--text-tertiary);

/* Input Sizing */
--inputs-padding: var(--gap-s) var(--gap-m);
--inputs-font-size: var(--text-body-m);
--inputs-radius: var(--radius-m);
```

### When to Use

**✅ For Component Variants**

Use component tokens when you need:
- Multiple variants (primary, secondary, ghost)
- Complex state management (enabled, hover, active, disabled)
- Component-specific overrides

```css
.button {
  /* Component tokens for variant control */
  background: var(--buttons-bg-primary-enabled);
  color: var(--buttons-text-primary-enabled);
  padding: var(--buttons-padding-m);
  font-size: var(--buttons-font-size-m);
  border-radius: var(--buttons-radius);
}

.button:hover {
  background: var(--buttons-bg-primary-hover);
}

.button:disabled {
  background: var(--buttons-bg-primary-disabled);
  color: var(--buttons-text-primary-disabled);
}

.button--secondary {
  background: var(--buttons-bg-secondary-enabled);
}
```

---

## Decision Tree: Which Layer to Use?

```
Are you building a component?
├─ YES → Use Semantic tokens (Layer 2)
│        Need variant/state control?
│        ├─ YES → Use Component tokens (Layer 3)
│        └─ NO  → Stick with Semantic tokens
│
└─ NO  → Are you defining new design tokens?
         └─ YES → Start with Primitives (Layer 1)
                  Then create Semantics (Layer 2)
```

---

## Layer Comparison

| Aspect | Primitive | Semantic | Component |
|--------|-----------|----------|-----------|
| **Usage in components** | ❌ Avoid | ✅ Primary | ✅ For variants |
| **Theming** | ❌ Don't change | ✅ Theme here | ✅ Optional overrides |
| **Naming** | Generic | Intentional | Specific |
| **Flexibility** | Low | High | Highest |
| **Example** | `--primitive-blue-500` | `--bg-primary` | `--buttons-bg-primary-hover` |

---

## Theme Switching

Semantic and Component tokens make theming easy:

```css
/* Light theme (default) */
:root,
[data-theme="light"] {
  --bg-primary: var(--primitive-blue-500);
  --bg-surface: var(--primitive-white);
  --text-primary: var(--primitive-slate-900);
}

/* Dark theme */
[data-theme="dark"] {
  --bg-primary: var(--primitive-blue-400);
  --bg-surface: var(--primitive-slate-900);
  --text-primary: var(--primitive-slate-100);
}
```

Components using semantic tokens automatically adapt:

```css
.card {
  background: var(--bg-surface);      /* Adapts to theme */
  color: var(--text-primary);         /* Adapts to theme */
}
```

---

## Best Practices

### ✅ Do

1. **Use semantic tokens by default** in components
2. **Use component tokens** for variants and states
3. **Define primitives** as foundation values
4. **Theme at semantic layer** for consistency
5. **Document token purpose** in comments

### ❌ Don't

1. **Don't use primitives** directly in components
2. **Don't hardcode values** anywhere
3. **Don't skip layers** (primitive → component)
4. **Don't create semantic tokens** for every primitive
5. **Don't theme primitives** (theme semantics instead)

---

## Real-World Example

### ❌ Bad: Using Primitives

```css
.button {
  background: var(--primitive-blue-500);
  color: var(--primitive-white);
  padding: var(--primitive-spacing-2) var(--primitive-spacing-4);
  border-radius: var(--primitive-radius-4);
}
```

### ✅ Good: Using Semantics

```css
.button {
  background: var(--bg-primary);
  color: var(--text-inverse);
  padding: var(--gap-s) var(--gap-m);
  border-radius: var(--radius-m);
}
```

### ✅ Better: Using Component Tokens

```css
.button {
  background: var(--buttons-bg-primary-enabled);
  color: var(--buttons-text-primary-enabled);
  padding: var(--buttons-padding-m);
  border-radius: var(--buttons-radius);
}

.button:hover {
  background: var(--buttons-bg-primary-hover);
}
```

---

## Next Steps

- [Packages](/architecture/packages/) - Learn about each package
- [Design Tokens](/foundations/tokens/) - Explore all available tokens
- [Quick Start](/getting-started/quick-start/) - Build a component using layers
