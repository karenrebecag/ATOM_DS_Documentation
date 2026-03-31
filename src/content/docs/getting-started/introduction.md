---
title: Introduction
description: Learn about AtomChat Design System and its monorepo architecture.
---

## What is AtomChat Design System?

AtomChat Design System is a **monorepo-based design system** that provides a complete foundation for building consistent and scalable user interfaces. Built with modern web standards and distributed as independent npm packages, AtomChat DS offers tokens, styles, and animations that work together seamlessly.

## Key Features

- **W3C DTCG Compliant Tokens**: Design tokens follow the W3C Design Token Community Group specification
- **Multi-Format Output**: Tokens available as CSS custom properties, SCSS variables, JavaScript, TypeScript, and JSON
- **Three-Layer Architecture**: Primitive → Semantic → Component token hierarchy
- **GSAP Animations**: Professional animation system with full accessibility support
- **Theme Support**: Built-in light/dark mode via `data-theme` attribute
- **Monorepo Structure**: Independent versioning and publishing using Turborepo + pnpm
- **Accessibility First**: Respects `prefers-reduced-motion` at OS, site, and element levels
- **Zero Hardcoded Values**: All visual decisions use tokens

## Architecture Overview

AtomChat DS is organized as a **monorepo** containing multiple packages:

```
atomchat-ds/
├── packages/
│   ├── tokens/          → @atomchat.io/tokens
│   ├── css/             → @atomchat.io/css
│   ├── animations/      → @atomchat.io/animations
│   └── components-astro/ → @atomchat.io/components-astro
└── apps/
    └── docs/            → Documentation site
```

## Package Ecosystem

### @atomchat.io/tokens
The **source of truth** for all design decisions. Generates tokens in multiple formats:
- CSS custom properties
- SCSS variables
- JavaScript (ESM/CJS)
- TypeScript definitions
- Raw JSON

### @atomchat.io/css
Pre-compiled CSS bundle including:
- Token-based styles
- Modern CSS reset
- Base utilities
- Component styles

### @atomchat.io/animations
GSAP-based animation system featuring:
- ScrollTrigger effects
- Page transitions
- Micro-interactions
- Motion preference detection

### @atomchat.io/components-astro
UI components built with Astro (under construction)

## Design Philosophy

AtomChat DS follows a **token-first approach** where every visual design decision is encoded as a reusable token. The three-layer architecture ensures:

1. **Primitive Layer**: Foundation values (colors, spacing, typography scales)
2. **Semantic Layer**: Intent-driven tokens with meaning (background, text, borders)
3. **Component Layer**: Component-specific overrides and variations

This layering provides:
- ✅ **Consistency**: Shared design language
- ✅ **Flexibility**: Override at any layer
- ✅ **Maintainability**: Change once, update everywhere
- ✅ **Scalability**: Extend without breaking existing implementations

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **pnpm + Turborepo** | Monorepo management |
| **Style Dictionary v4** | Token compilation |
| **GSAP 3.12** | Animation engine |
| **LightningCSS** | CSS optimization |
| **Changesets** | Release management |
| **W3C DTCG** | Token format specification |

## Key Principles

1. **No Hardcoded Values**: Every visual value must use a token
2. **Semantic Naming**: Tokens describe intent, not appearance
3. **Accessibility First**: Motion preferences, contrast, and WCAG compliance
4. **Framework Agnostic**: Works with React, Vue, Astro, Svelte, or vanilla HTML
5. **Independent Versioning**: Each package has its own release cycle

## Next Steps

Ready to start using AtomChat DS?

- [Installation](/getting-started/installation/) - Add packages to your project
- [Quick Start](/getting-started/quick-start/) - Build your first component
- [Architecture Overview](/architecture/overview/) - Deep dive into the system
- [Design Tokens](/foundations/tokens/) - Explore available tokens
