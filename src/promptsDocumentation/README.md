# Component Prompts Documentation

This directory contains reusable AI prompts for implementing ATOM Design System components in any framework.

---

## ⚠️ CRITICAL UPDATE (2025-03-31)

### GSAP Types Issue — FIXED

**All prompts now include explicit warnings about `@types/gsap`.**

**The Problem:**
When using these prompts with v0 or similar tools, they attempt to install `@types/gsap@^3.12.11`, which **does not exist**. This causes installation failures.

**Why It Happens:**
GSAP 3.5+ includes TypeScript types natively. The `@types/gsap` package is obsolete (last version: 3.0.0 from 2019).

**The Fix:**
✅ **Only install `gsap` — no @types package needed**

```bash
# ✅ CORRECT
pnpm add gsap

# ❌ WRONG
pnpm add gsap @types/gsap
```

**All prompts now include:**
- Explicit warning sections about `@types/gsap`
- Clear installation commands
- Troubleshooting guidance

See `GSAP_TYPES_FIX.md` for complete documentation.

### Button Prompt — MASSIVELY IMPROVED

**Before:** Abstract descriptions of animations
**After:** **300+ lines of complete, copy-paste-ready code**

**New additions to `button.txt`:**
- ✅ Complete `initRotateClones()` function (47 lines)
- ✅ Complete `initRotateCalc()` function (62 lines)
- ✅ Complete `initHoverRotate()` function (97 lines)
- ✅ Complete `initShimmerText()` function (50 lines)
- ✅ GSAP config with CustomEase "atom" setup
- ✅ Critical CSS structure with grid layout
- ✅ Initialization order documentation
- ✅ Motion preferences handling

**v0 can now copy the exact implementation instead of guessing.**

---

## Overview

Each `.txt` file contains a comprehensive, sequential prompt that guides an AI assistant (like Claude Code) through either:
- **Using the official npm package** (if Astro is selected)
- **Converting the Astro component** to another framework while maintaining design system standards

## NPM Package Information

**Official Package:** `@atomchat.io/components-astro@2.0.4`

**Core Dependencies:**
- `@atomchat.io/tokens@1.0.3` — Design token definitions
- `@atomchat.io/css@0.2.3` — Compiled CSS from tokens

**Optional Dependencies:**
- `@atomchat.io/animations@1.2.1` — GSAP animation functions
- `gsap` — Animation library

## Available Components (23 total)

### Layout Primitives (6 components)
- `Container` — Max-width content container
- `Stack` — Vertical spacing primitive
- `Inline` — Horizontal spacing primitive
- `Grid` — CSS Grid layout
- `Section` — Semantic section wrapper
- `Center` — Centering primitive

**Import paths:**
```typescript
import { Container } from '@atomchat.io/components-astro';
import { Stack } from '@atomchat.io/components-astro';
import { Inline } from '@atomchat.io/components-astro';
import { Grid } from '@atomchat.io/components-astro';
import { Section } from '@atomchat.io/components-astro';
import { Center } from '@atomchat.io/components-astro';
```

### Atoms (17 components)
- `Avatar` — User avatar with fallback
- `Badge` — Notification badge with overflow logic ✅ *Prompt available*
- `Button` — Primary action button ✅ *Prompt available*
- `Caption` — Small caption text
- `Checkbox` — Selection control ✅ *Prompt available*
- `Chip` — Dismissible tag/filter
- `Divider` — Visual separator
- `Heading` — Semantic heading
- `IconButton` — Icon-only button
- `LabelText` — Form label text
- `LinkButton` — Link styled as button
- `Radio` — Single selection control
- `Spinner` — Loading indicator
- `StatusIcon` — Status indicator icon
- `Tag` — Static label/category
- `Text` — Body text primitive
- `Toggle` — Switch/toggle control

**Import paths:**
```typescript
import { Avatar } from '@atomchat.io/components-astro';
import { Badge } from '@atomchat.io/components-astro';
import { Button } from '@atomchat.io/components-astro';
import { Caption } from '@atomchat.io/components-astro';
import { Checkbox } from '@atomchat.io/components-astro';
import { Chip } from '@atomchat.io/components-astro';
import { Divider } from '@atomchat.io/components-astro';
import { Heading } from '@atomchat.io/components-astro';
import { IconButton } from '@atomchat.io/components-astro';
import { LabelText } from '@atomchat.io/components-astro';
import { LinkButton } from '@atomchat.io/components-astro';
import { Radio } from '@atomchat.io/components-astro';
import { Spinner } from '@atomchat.io/components-astro';
import { StatusIcon } from '@atomchat.io/components-astro';
import { Tag } from '@atomchat.io/components-astro';
import { Text } from '@atomchat.io/components-astro';
import { Toggle } from '@atomchat.io/components-astro';
```

**Specific file paths in npm:**
```
@atomchat.io/components-astro/src/layout/Container.astro
@atomchat.io/components-astro/src/layout/Stack.astro
@atomchat.io/components-astro/src/atoms/Avatar.astro
@atomchat.io/components-astro/src/atoms/Badge.astro
@atomchat.io/components-astro/src/atoms/Button.astro
@atomchat.io/components-astro/src/atoms/Checkbox.astro
... etc
```

## Import Pattern Flexibility (Updated 2026-03-31)

All ATOM packages now support **multiple import patterns** thanks to improved package.json exports configuration following Node.js best practices.

### Tokens Package
```typescript
// Shorthand (recommended)
import '@atomchat.io/tokens/css'
import '@atomchat.io/tokens/scss'

// Full path (also supported)
import '@atomchat.io/tokens/build/css/tokens.css'
import '@atomchat.io/tokens/build/scss/_tokens.scss'
import '@atomchat.io/tokens/build/json/tokens.json'
```

### CSS Package
```typescript
// Shorthand (recommended)
import '@atomchat.io/css'

// Alternative paths (all work)
import '@atomchat.io/css/atom.css'
import '@atomchat.io/css/dist/atom.css'
```

### Animations Package
```typescript
// Shorthand (recommended)
import { initBadge } from '@atomchat.io/animations/badge'

// Full path (also supported)
import { initBadge } from '@atomchat.io/animations/dist/badge.js'
```

### Components Package
```typescript
// Shorthand (recommended)
import Button from '@atomchat.io/components-astro/atoms/Button.astro'

// Full path (also supported)
import Button from '@atomchat.io/components-astro/src/atoms/Button.astro'
```

**Why this matters:** AI tools and bundlers may generate imports with different path styles. All patterns now work correctly, providing better compatibility and developer experience.

## Installation Flow

### If User Chooses Astro:
```bash
# Install the complete component library from npm
pnpm add @atomchat.io/components-astro@2.0.4
pnpm add @atomchat.io/tokens@1.0.3
pnpm add @atomchat.io/css@0.2.3
```

**Result:** Direct usage, no conversion needed. All 23 components ready to import.

### If User Chooses Another Framework:
```bash
# Install only the design system foundation
pnpm add @atomchat.io/tokens@1.0.3
pnpm add @atomchat.io/css@0.2.3
```

**Result:** User must convert the Astro component source to their chosen framework while maintaining:
- Design tokens
- DOM structure
- Accessibility
- Animation contracts

## Prompt Structure

Every prompt follows this standardized structure:

### 1. Questions Phase
Before implementation, the AI asks the user:

**Question 1: Target Stack**
- React
- Next.js
- Vue 3
- Angular
- Astro
- Svelte/SvelteKit
- Vanilla HTML/CSS/JS

**Question 2: Animation Support**
- Yes, include full GSAP animations
- No, static component only

### 2. Component Specification
Complete technical specification including:
- Overview and key features
- Installation requirements
- Props API
- DOM structure
- Design tokens reference
- Visual variants
- State handling
- Accessibility requirements

### 3. Implementation Details
- Required design tokens with exact CSS custom property names
- Base component styles
- Animation system (if enabled)
- Data-attribute contract
- GSAP animation implementations

### 4. Usage Examples
Real-world code snippets for common patterns

### 5. Implementation Checklist
Step-by-step checklist to ensure complete implementation

### 6. Critical Rules
Non-negotiable requirements (e.g., "NEVER hardcode values")

### 7. Verification Questions
Post-implementation testing checklist

## Usage with CopyPromptButton

The `CopyPromptButton` component automatically loads and displays these prompts:

```astro
import CopyPromptButton from '@/components/CopyPromptButton.astro';

<CopyPromptButton componentName="button" variant="primary" />
```

This renders a button that:
1. Reads the content from `src/promptsDocumentation/button.txt`
2. Copies the full prompt to clipboard on click
3. Shows visual feedback (hover states, "Copied!" message)

## File Naming Convention

Files must match the component name exactly:

```
button.txt        → Button component
badge.txt         → Badge component
checkbox.txt      → Checkbox component
toggle.txt        → Toggle component
```

## Creating New Prompts

When adding a new component prompt:

1. **Create the `.txt` file** in this directory
2. **Follow the standardized structure** (see existing files)
3. **Include all design tokens** from the component documentation
4. **Add data-attribute contract** for animations
5. **Provide usage examples** for all variants/states
6. **Update the documentation page** to include `<CopyPromptButton>`

Example:

```astro
---
// In src/content/docs/components/buttons/new-component.mdx
---

## Build this Component with AI

import CopyPromptButton from '../../../../components/CopyPromptButton.astro';

<CopyPromptButton componentName="new-component" variant="primary" />
```

## Design Principles

### DRY (Don't Repeat Yourself)
- Prompt content lives in `.txt` files, not in components
- One reusable `CopyPromptButton` component for all pages
- Design tokens defined once, referenced everywhere

### Token-First Philosophy
All prompts enforce token-first styling:
- ✅ `background: var(--buttons-bg-primary-enabled);`
- ❌ `background: #3b82f6;`

### Framework Agnostic
Prompts guide conversion from Astro (npm source) to any target framework while preserving:
- Design tokens
- DOM structure
- Accessibility
- Animation contracts

### Separation of Concerns
- **Component layer** — Semantic HTML with data attributes
- **Animation layer** — GSAP functions initialize globally
- **Prompt layer** — Complete specification in text files

## Current Prompts Available

### ✅ `button.txt`
**Component:** Button
**NPM Path:** `@atomchat.io/components-astro/src/atoms/Button.astro`
**Features:** 6 variants, 5 sizes, loading state, icon support, GSAP animations
**Versions:** @2.0.4 (components), @1.0.3 (tokens), @0.2.3 (css)

### ✅ `badge.txt`
**Component:** Badge
**NPM Path:** `@atomchat.io/components-astro/src/atoms/Badge.astro`
**Features:** 3 types, 3 states, smart overflow (99+, +50), auto-hide on zero
**Versions:** @2.0.4 (components), @1.0.3 (tokens), @0.2.3 (css)

### ✅ `checkbox.txt`
**Component:** Checkbox
**NPM Path:** `@atomchat.io/components-astro/src/atoms/Checkbox.astro`
**Features:** Light/dark themes, SVG checkmark, disabled state, GSAP animations
**Versions:** @2.0.4 (components), @1.0.3 (tokens), @0.2.3 (css)

### 📋 Remaining Components (no prompts yet)
These components are available in npm but don't have prompts yet:
- Avatar, Caption, Chip, Divider, Heading, IconButton, LabelText, LinkButton, Radio, Spinner, StatusIcon, Tag, Text, Toggle
- Container, Stack, Inline, Grid, Section, Center

## Best Practices

1. **Keep prompts declarative** — Specify what, not how
2. **Include overflow logic** — Document edge cases (0 count, 99+, etc.)
3. **Reference actual tokens** — Use exact token names from design system
4. **Provide accessibility requirements** — ARIA labels, keyboard nav, focus states
5. **Add motion preferences** — Respect `prefers-reduced-motion`
6. **Include verification steps** — Help users test their implementation

## Maintenance

When updating component documentation:
1. Update the corresponding `.txt` prompt file
2. Ensure token references match the latest design system
3. Test the prompt with an AI assistant
4. Verify the generated component matches specs

## Related Files

- `/src/components/CopyPromptButton.astro` — Reusable button component
- `/src/content/docs/components/**/*.mdx` — Component documentation pages
- `/src/promptsDocumentation/**/*.txt` — Prompt content files
