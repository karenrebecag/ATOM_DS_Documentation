# Component Prompts Documentation

This directory contains reusable AI prompts for replicating ATOM Design System components in any framework.

## Overview

Each `.txt` file contains a comprehensive, sequential prompt that guides an AI assistant (like Claude Code) through building a component from scratch while maintaining design system standards.

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

## Current Prompts

- `button.txt` — Button component with 6 variants, 5 sizes, loading state
- `badge.txt` — Badge component with smart overflow logic
- `checkbox.txt` — Checkbox component with light/dark themes

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
