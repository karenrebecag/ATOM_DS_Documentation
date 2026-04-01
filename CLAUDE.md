# ATOM Design System — Documentation Site
# Astro Starlight documentation for @atomchat.io packages
# Stack: Astro 5 + Starlight + MDX + TypeScript

---

## Project Overview

This is the **official documentation site** for the ATOM Design System, built with Astro Starlight.
It provides interactive component documentation with live examples, code snippets, and AI prompts.

**Live URL:** https://atom-ds-documentation-brown.vercel.app/

---

## Architecture

```
ATOMDS_Documentation/
├── src/
│   ├── components/          ← Custom Starlight components
│   │   ├── CopyPromptButton.astro     ✅ READY — AI prompt copy button
│   │   ├── FrameworkSwitcher.astro    ✅ READY — Framework tabs sync
│   │   ├── GrainyGradient.astro       ✅ READY — Animated gradient backgrounds
│   │   └── TemplateCard.astro         ✅ READY — Template showcase cards
│   ├── content/docs/
│   │   └── components/
│   │       ├── buttons/
│   │       │   └── button.mdx         ✅ READY — Button documentation
│   │       ├── content-display/
│   │       │   └── avatar.mdx         ❌ NOT READY (for later)
│   │       ├── molecules/
│   │       │   └── avatar-group.mdx   ❌ NOT READY (for later)
│   │       └── layout/
│   │           ├── center.mdx         ❌ NOT READY (for later)
│   │           ├── container.mdx      ❌ NOT READY (for later)
│   │           ├── grid.mdx           ❌ NOT READY (for later)
│   │           ├── inline.mdx         ❌ NOT READY (for later)
│   │           ├── section.mdx        ❌ NOT READY (for later)
│   │           └── stack.mdx          ❌ NOT READY (for later)
│   ├── promptsDocumentation/          ← AI prompts by component
│   │   ├── button.ts          ✅ READY — Structured prompts (Astro, React, Vue, Angular)
│   │   ├── badge.txt          ❌ DEPRECATED FORMAT (use .ts instead)
│   │   └── checkbox.txt       ❌ DEPRECATED FORMAT (use .ts instead)
│   └── snippets/                      ← Component source code snippets
│       └── button/            ✅ READY — Button implementations
│           ├── astro.ts       ✅ Complete Astro Button source
│           ├── react.ts       ✅ Complete React Button source
│           └── angular.ts     ✅ Complete Angular Button source
├── astro.config.mjs           ✅ Starlight config
├── package.json               ✅ Dependencies
└── CLAUDE.md                  ✅ This file
```

---

## Component Documentation Pattern

Each component page follows this structure:

### 1. **Overview**
- Component description
- Key features
- Link to interactive playground

### 2. **Installation** (Framework Tabs)
- Install packages command
- **Component source** (consumed from `snippets/{component}/{framework}.ts`)
- AI prompt copy button (CopyPromptButton)
- Dependencies list

### 3. **Usage Examples**
- Basic usage
- Variants showcase
- Props table

### 4. **API Reference**
- Props/Inputs documentation
- Events/Outputs documentation
- Slots/Content projection

### 5. **Animations** (if applicable)
- GSAP animations setup
- Motion preferences

### 6. **Accessibility**
- ARIA attributes
- Keyboard navigation
- Screen reader support

---

## Snippets System (DRY Architecture)

### **Problem:**
Previously, component source code was **hardcoded** in MDX files, causing ~320+ lines of duplication per component.

### **Solution:**
Component source code lives in `src/snippets/{component}/{framework}.ts` as single source of truth.

### **Structure:**

```typescript
// src/snippets/button/react.ts
export interface SnippetFile {
  path: string          // File path (e.g., "Button.tsx")
  language: string      // Syntax highlighting (e.g., "typescript")
  description: string   // What this file does
  content: string       // Full source code
}

export const buttonReactSnippets: SnippetFile[] = [
  {
    path: 'Button.tsx',
    language: 'typescript',
    description: 'Main Button component with polymorphic rendering',
    content: `import { forwardRef } from 'react';
// ... complete component source code
`
  },
  {
    path: 'types.ts',
    language: 'typescript',
    description: 'Button type definitions',
    content: `export type ButtonVariant = ...`
  }
]
```

### **Usage in MDX:**

```mdx
---
import { Code } from '@astrojs/starlight/components';
import { buttonReactSnippets } from '../../../../snippets/button/react';
---

<Tabs syncKey="framework">
  <TabItem label="React">
    <Code
      code={buttonReactSnippets[0].content}
      lang={buttonReactSnippets[0].language}
      title={buttonReactSnippets[0].path}
    />
  </TabItem>
</Tabs>
```

**Benefits:**
- ✅ Single source of truth
- ✅ Automatic updates across docs
- ✅ No code duplication
- ✅ Easy to maintain

---

## CopyPromptButton Component

**Purpose:** One-click AI prompt copying for Claude Code users

**How it works:**
1. Reads structured prompts from `promptsDocumentation/{component}.ts`
2. Syncs with FrameworkSwitcher tabs (Astro, React, Vue, Angular)
3. Copies framework-specific installation prompt to clipboard
4. Features animated gradient background

**Usage:**
```astro
<CopyPromptButton component="button" framework="react" variant="primary" />
```

**Prompt Structure:**
```typescript
// src/promptsDocumentation/button.ts
export const buttonPrompts = {
  astro: {
    title: "Build Button with Astro",
    packages: ["@atomchat.io/components-astro", "@atomchat.io/css"],
    prompt: `Install the ATOM Button component for Astro...`
  },
  react: { ... },
  vue: { ... },
  angular: { ... }
}
```

---

## Files to Commit (Button Release)

### ✅ **Core Documentation**
- `src/content/docs/components/buttons/button.mdx` — Button docs (refactored to use snippets)

### ✅ **Snippets (Single Source of Truth)**
- `src/snippets/button/astro.ts` — Astro Button source
- `src/snippets/button/react.ts` — React Button source
- `src/snippets/button/angular.ts` — Angular Button source
- ⚠️ **TODO:** Add `vue.ts` for completeness

### ✅ **AI Prompts**
- `src/promptsDocumentation/button.ts` — Structured prompts by framework

### ✅ **UI Components**
- `src/components/CopyPromptButton.astro` — AI prompt copy button
- `src/components/FrameworkSwitcher.astro` — Framework tabs
- `src/components/GrainyGradient.astro` — Gradient backgrounds
- `src/components/TemplateCard.astro` — Template cards

### ✅ **Configuration**
- `astro.config.mjs` — Starlight config
- `package.json` — Dependencies
- `pnpm-lock.yaml` — Lock file
- `CLAUDE.md` — This file

---

## Files NOT to Commit (Not Ready)

### ❌ **Other Component Docs**
- `src/content/docs/components/content-display/avatar.mdx` — Avatar not ready
- `src/content/docs/components/molecules/avatar-group.mdx` — AvatarGroup not ready
- `src/content/docs/components/layout/*.mdx` — Layout components not ready

### ❌ **Deprecated Files** (Already deleted)
- `src/promptsDocumentation/button.txt` — Replaced by button.ts
- `src/content/docs/components/content-display/avatar.mdx.backup` — Backup file
- `pnpm-lock 2.yaml` — Duplicate lock file

### ❌ **Internal Reports**
- `AUDIT_REPORT.md` — Internal audit
- `FRAMEWORK_PACKAGES.md` — Internal reference

---

## Development Workflow

### **Run docs locally:**
```bash
cd /Users/karenortiz/Desktop/ATOMDS_Documentation
pnpm dev
```

### **Build for production:**
```bash
pnpm build
```

### **Deploy:**
Automatic deployment to Vercel on push to main branch.

---

## Adding New Component Documentation

### 1. **Create snippets** (DRY source of truth)
```bash
mkdir src/snippets/my-component
touch src/snippets/my-component/{astro,react,vue,angular}.ts
```

### 2. **Create prompts** (AI integration)
```bash
touch src/promptsDocumentation/my-component.ts
```

### 3. **Create MDX page**
```bash
touch src/content/docs/components/category/my-component.mdx
```

### 4. **Follow Button pattern**
- Use `<Code code={snippet.content} />` instead of hardcoding
- Add CopyPromptButton with framework prop
- Add FrameworkSwitcher tabs

---

## Tech Stack

- **Framework:** Astro 5
- **Docs Engine:** Starlight
- **Content:** MDX
- **Styling:** CSS (consuming @atomchat.io/css)
- **Animations:** GSAP (via @atomchat.io/animations)
- **Deployment:** Vercel

---

## Key Principles

1. **DRY:** Component source lives in snippets/, not hardcoded in MDX
2. **Single Source of Truth:** Snippets are consumed, never duplicated
3. **AI-First:** Every component has CopyPromptButton for Claude Code
4. **Framework-Agnostic:** Document all 4 frameworks (Astro, React, Vue, Angular)
5. **Accessibility:** Every component includes accessibility documentation

---

## Current Status (2026-04-01)

- ✅ Button documentation complete and refactored
- ✅ Snippets system implemented
- ✅ CopyPromptButton working with button.ts prompts
- ✅ Cleanup of deprecated .txt files
- 🚧 Other components pending (Avatar, AvatarGroup, Layouts)

---

## Next Steps

1. ✅ Refactor button.mdx to consume from snippets (NEXT)
2. ✅ Create snippets implementation guide (NEXT)
3. ⏳ Add Vue snippet for Button
4. ⏳ Deploy updated docs to Vercel
5. ⏳ Repeat pattern for remaining components
