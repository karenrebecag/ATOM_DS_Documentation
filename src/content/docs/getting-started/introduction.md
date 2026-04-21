---
title: Introduction
description: ATOM Design System — AI-connected, Figma-synced, multi-framework design system distributed as independent npm packages.
---

## ATOM Design System

ATOM is a **production-grade design system** that bridges Figma, AI, and code into a single pipeline. Design tokens flow automatically from Figma into CSS, SCSS, and JavaScript — then power components across React, Vue, Angular, and Astro.

```
Figma → /figma-pull → Tokens → Style Dictionary → CSS/SCSS/JS
                                      ↓
                    Components (React, Vue, Angular, Astro)
                                      ↓
                         Your app (light + dark theme)
```

---

## Why ATOM

| Problem | ATOM's solution |
|---------|----------------|
| Tokens drift from design files | **Auto-sync from Figma** via Plugin API — no manual copy-paste |
| AI doesn't know your components | **MCP server** gives Claude full context of props, tokens, imports |
| Multiple frameworks, no consistency | **One token source** powers 4 framework implementations |
| Dark mode is an afterthought | **Built-in theming** — one attribute flips 82 semantic overrides |
| Animations break accessibility | **3-tier motion system** respects OS, site, and element preferences |
| Hard to onboard new developers | **DOM contracts** — add a data attribute, animation works |

---

## The stack

```
ATOM_DS/
├── packages/
│   ├── tokens/              1,800+ W3C DTCG tokens
│   ├── css/                 Pre-compiled CSS bundle (42.5 kB)
│   ├── animations/          28 GSAP modules, framework-agnostic
│   ├── components-react/    React 18/19 components
│   ├── components-vue/      Vue 3.4+ components
│   ├── components-angular/  Angular 21+ components
│   ├── components-astro/    31 Astro components
│   └── mcp/                 AI context server for Claude
├── tools/
│   └── figma-sync/          Figma → tokens pipeline
└── apps/
    └── docs/                This documentation site
```

All packages are published under the `@atomchat.io` scope on npm.

---

## Packages

### @atomchat.io/tokens

The **source of truth**. 1,800+ design tokens in a 4-layer hierarchy synced from Figma:

- **Figma layer** — auto-synced primitives (colors, spacing, radius, opacity)
- **Foundation layer** — manual bridges with units (px, rem)
- **Semantic layer** — intent-driven aliases (bg, fg, border)
- **Component layer** — per-component variant + state tokens

Outputs: CSS custom properties, SCSS variables, ESM/CJS JavaScript, TypeScript declarations, JSON.

### @atomchat.io/css

Pre-compiled CSS consuming all tokens. Includes reset, typography, component styles, and utilities. Zero hardcoded values — everything is `var(--token)`.

### @atomchat.io/animations

28 animation modules powered by GSAP. Every module is framework-agnostic — it works through **DOM contracts** (data attributes). Add `data-reveal="fade-up"` to any element, call `initReveal()`, done.

Includes: scroll reveals, parallax, hover effects, custom cursor, marquees, text animations, toast notifications, page transitions, and 14 marketing-specific modules.

### @atomchat.io/components-react

React 18/19 components with TypeScript, polymorphic rendering (`as` prop), and forwardRef. Built with tsup (ESM + CJS).

### @atomchat.io/components-vue

Vue 3 Composition API components with `<script setup>`, typed props, and composables.

### @atomchat.io/components-angular

Angular 21+ standalone components with Signals, OnPush change detection, and ng-content projection.

### @atomchat.io/components-astro

31 zero-build Astro components consumed directly as `.astro` files. The most complete implementation.

### @atomchat.io/mcp

MCP server that gives AI assistants (Claude Code, Claude Desktop) full knowledge of available components, props, tokens, and installation instructions. Install it and Claude knows your design system.

---

## Key differentiators

### Figma-connected

Designers update variables in Figma. You run `/figma-pull`. Tokens update across the entire system — no manual JSON editing, no drift.

### AI-first

The MCP server means Claude can answer "What button variants exist in React?" or "Show me spacing tokens" without you pasting documentation. It reads from auto-generated manifests that stay in sync with source.

### Framework-agnostic animations

Animations work through data attributes, not framework APIs. The same `data-reveal="fade-up"` works in Astro, React, Vue, Angular, or plain HTML. Cleanup functions handle SPA navigation.

### Accessibility by default

- 3-tier motion preferences (OS → site → element)
- WCAG 2.1 AA color contrast
- Keyboard navigation preserved
- `tabindex="-1"` on disabled links
- Screen reader compatibility

### Dark mode included

One attribute: `<html data-theme="dark">`. 82 semantic overrides flip. Components adapt automatically through the token reference chain — zero per-component dark mode code.

---

## Design philosophy

**Token-first:** Every visual decision is a token. No hex values, no magic numbers, no `16px`.

**4-layer architecture:**

```
Component    → {bg.inverse.primary}          → "What color is this button?"
Semantic     → {figma.colors.primitive.zinc.950}  → "What does primary mean?"
Foundation   → manual values with units      → "What are the raw dimensions?"
Figma        → #09090B                       → "What did the designer set?"
```

Each layer has a clear owner:
- **Figma layer** — owned by designers, synced automatically
- **Foundation** — owned by DS team
- **Semantic** — owned by DS team
- **Component** — owned by component developers

---

## Tech stack

| Technology | Purpose |
|------------|---------|
| pnpm 9 + Turborepo | Monorepo management |
| Style Dictionary v4 | Token compilation (W3C DTCG) |
| GSAP 3.12 | Animation engine (6 plugins) |
| Vite 6 + LightningCSS | CSS build |
| tsup | React/TS component build |
| ng-packagr | Angular APF build |
| Changesets | Versioning + npm publish |
| MCP SDK | AI integration |

---

## Get started

1. **[Install packages](/getting-started/installation/)** — add tokens, CSS, and components
2. **[Quick start](/getting-started/quick-start/)** — build your first component with tokens
3. **[AI integration](/getting-started/ai-integration/)** — set up the MCP server for Claude
4. **[Token layers](/architecture/token-layers/)** — understand the 4-layer architecture
5. **[Figma sync](/architecture/figma-sync/)** — connect your Figma to the pipeline
6. **[Dark mode](/foundations/dark-mode/)** — enable theming
7. **[Animations](/foundations/animations/)** — add scroll reveals and interactions
