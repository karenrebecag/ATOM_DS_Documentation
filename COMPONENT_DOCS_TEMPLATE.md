# Component Documentation Template

**Basado en:** Button component documentation
**Uso:** Guía de estructura para documentar componentes de ATOM Design System

---

## Estructura de archivo

```
component-name.mdx
```

**Ubicación:**
- **Buttons:** `src/content/docs/components/buttons/`
- **Selection Controls:** `src/content/docs/components/selection-controls/`
- **Indicators & Status:** `src/content/docs/components/indicators-status/`
- **Content Display:** `src/content/docs/components/content-display/`
- **Text:** `src/content/docs/components/text/`
- **Layout:** `src/content/docs/components/layout/`
- **Molecules:** `src/content/docs/components/molecules/`

---

## Frontmatter (Required)

```yaml
---
title: ComponentName
description: Brief one-line description of the component's purpose.
---
```

**Reglas:**
- `title`: PascalCase, nombre del componente
- `description`: Una línea, máximo 100 caracteres, termina con punto

---

## NO imports required

Los componentes NO se importan en la documentación. Solo se referencian y se usan en playgrounds.

---

## Sección 1: Overview (Required)

```md
## Overview

Brief introduction to the component (1-2 paragraphs).

**Key Features:**
- Feature 1
- Feature 2
- Feature 3
- Fully token-driven styling
- Accessible with ARIA labels
```

**Contenido:**
- Descripción del propósito del componente
- Casos de uso principales
- Lista de características clave (4-8 items)
- Siempre mencionar: token-driven, accesibilidad

---

## Sección 2: Demo (Required)

```md
## Demo

:::tip[Interactive Playground]
**[Open ComponentName Playground →](/playground/component-name)**

View all ComponentName variants with live interactions and working states in an isolated environment.
:::
```

**Reglas:**
- Usar Starlight's `:::tip` directive
- Link al playground: `/playground/component-name`
- Describir brevemente qué se puede ver en el playground

---

## Sección 3: Installation (Required)

```md
## Installation

\`\`\`bash
# Install component package
pnpm add @atomchat.io/components-astro

# Install required dependencies
pnpm add @atomchat.io/css @atomchat.io/tokens
\`\`\`

**CSS Import (required):**
\`\`\`astro
---
// In your layout or page
import '@atomchat.io/css/dist/atom.css';
---
\`\`\`
```

**Siempre incluir:**
- Comando de instalación del paquete
- Dependencias requeridas
- Import de CSS global

---

## Sección 4: Anatomy (Optional but Recommended)

```md
## Anatomy

Visual representation of component structure.

\`\`\`
┌─────────────────────┐
│  .component         │  ← Description
│  ┌───────────────┐  │
│  │  .element     │  │  ← Description
│  └───────────────┘  │
└─────────────────────┘
\`\`\`

**DOM Structure:**
\`\`\`html
<div class="component component--variant">
  <span class="component__element">...</span>
</div>
\`\`\`
```

**Útil para:**
- Componentes con estructura compleja
- Explicar jerarquía de elementos
- Documentar clases BEM

---

## Sección 5: Framework Support (Required)

**IMPORTANTE:** Esta sección debe ir SIEMPRE después de Anatomy y antes de API Reference.

```md
## Framework Support

The ComponentName component is available for multiple frameworks with shared design tokens, styles, and behavior.

import FrameworkSwitcher from '../../../../components/FrameworkSwitcher.astro';

<FrameworkSwitcher
  frameworks={[
    { name: 'astro', label: 'Astro', icon: 'https://svgl.app/library/astro-icon-dark.svg' },
    { name: 'react', label: 'React', icon: 'https://svgl.app/library/react_dark.svg' },
    { name: 'nextjs', label: 'Next.js', icon: 'https://svgl.app/library/nextjs_icon_dark.svg' },
    { name: 'vue', label: 'Vue', icon: 'https://svgl.app/library/vue.svg' },
    { name: 'angular', label: 'Angular', icon: 'https://svgl.app/library/angular.svg' },
  ]}
>
  <div data-framework="astro" data-active="true">

### Installation
\`\`\`bash
pnpm add @atomchat.io/components-astro @atomchat.io/css
\`\`\`

### Usage
\`\`\`astro
---
import { Component } from '@atomchat.io/components-astro';
import '@atomchat.io/css';
---

<Component variant="Primary" size="m">
  Content
</Component>
\`\`\`

  </div>

  <div data-framework="react">

### Installation
\`\`\`bash
pnpm add @atomchat.io/components-react @atomchat.io/css
\`\`\`

### Usage
\`\`\`tsx
import { Component } from '@atomchat.io/components-react';
import '@atomchat.io/css';

function Example() {
  return (
    <Component variant="Primary" size="m">
      Content
    </Component>
  );
}
\`\`\`

  </div>

  <div data-framework="nextjs">

### Installation
\`\`\`bash
pnpm add @atomchat.io/components-react @atomchat.io/css
\`\`\`

### Usage
\`\`\`tsx
'use client';

import { Component } from '@atomchat.io/components-react';
import '@atomchat.io/css';

export default function Example() {
  return (
    <Component variant="Primary" size="m">
      Content
    </Component>
  );
}
\`\`\`

  </div>

  <div data-framework="vue">

### Installation
\`\`\`bash
pnpm add @atomchat.io/components-vue @atomchat.io/css
\`\`\`

### Usage
\`\`\`vue
<script setup>
import { Component } from '@atomchat.io/components-vue';
import '@atomchat.io/css';
</script>

<template>
  <Component variant="Primary" size="m">
    Content
  </Component>
</template>
\`\`\`

  </div>

  <div data-framework="angular">

### Installation
\`\`\`bash
pnpm add @atomchat.io/components-angular @atomchat.io/css
\`\`\`

### Usage
\`\`\`typescript
import { ComponentComponent } from '@atomchat.io/components-angular';
import '@atomchat.io/css';

@Component({
  imports: [ComponentComponent],
  template: \`
    <atom-component variant="Primary" size="m">
      Content
    </atom-component>
  \`
})
export class ExampleComponent {}
\`\`\`

  </div>
</FrameworkSwitcher>
```

**Reglas críticas:**
- Esta sección SIEMPRE va después de Anatomy
- Primero Astro con `data-active="true"`
- Importar FrameworkSwitcher al inicio
- Usar iconos de SVGL API

---

## Sección 6: API Reference (Required)

```md
## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"primary" \| "secondary"` | `"primary"` | Visual style variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size of the component |
| `disabled` | `boolean?` | `false` | Disables interaction |
| `class` | `string?` | — | Additional CSS classes |

**Notes:**
- Special behaviors or auto-detection logic
- Required vs optional props
```

**Formato:**
- Tabla con: Prop, Type, Default, Description
- Usar TypeScript types exactos
- Marcar opcionales con `?`
- Agregar notas si hay lógica especial

---

## Sección 7: Variants (Required)

```md
## Variants

### Size Variants

| Size | Token | Value | Use Case |
|------|-------|-------|----------|
| **sm** | `--component-size-sm` | `32px` | Compact layouts |
| **md** | `--component-size-md` | `40px` | Default UI |
| **lg** | `--component-size-lg` | `48px` | Emphasis |

### Visual Variants

| Variant | Background | Border | Use Case |
|---------|------------|--------|----------|
| **primary** | `var(--bg-primary)` | None | Main actions |
| **secondary** | `var(--bg-secondary)` | `1px` | Secondary actions |
```

**Incluir:**
- Todas las variantes del componente (size, type, state, etc.)
- Tokens usados
- Valores (si relevante)
- Casos de uso

---

## Sección 8: Usage Examples (Required)

```md
## Usage Examples

### Basic Usage

\`\`\`astro
---
import { ComponentName } from '@atomchat.io/components-astro';
---

<ComponentName variant="primary" size="md" />
\`\`\`

### With Custom Props

\`\`\`astro
<ComponentName
  variant="secondary"
  size="lg"
  disabled={false}
/>
\`\`\`

### Advanced Pattern

\`\`\`astro
<ComponentName size="md">
  <span slot="icon">...</span>
</ComponentName>
\`\`\`
```

**Reglas:**
- Mínimo 3 ejemplos (basic, intermediate, advanced)
- Mostrar casos de uso reales
- Incluir slots si aplica

---

## Sección 9: Structure Tokens (Required)

```md
## Structure Tokens

### Size Tokens

\`\`\`css
--component-structure-size-sm: 32px;
--component-structure-size-md: 40px;
--component-structure-size-lg: 48px;
\`\`\`

### Spacing Tokens

\`\`\`css
--component-structure-padding-x: var(--spacing-sm);
--component-structure-padding-y: var(--spacing-xs);
\`\`\`
```

**Incluir:**
- Todos los tokens de estructura usados por el componente
- Agrupados por categoría (size, spacing, border, etc.)
- Valores en CSS custom properties

---

## Sección 10: Dependencies (Required)

```md
## Dependencies

### Required Packages
- `@atomchat.io/css` — Component styles and tokens
- `@atomchat.io/tokens` — Design token definitions

### Semantic Tokens Used

**Background:**
\`\`\`css
--bg-primary        /* Description */
--bg-secondary      /* Description */
\`\`\`

**Foreground:**
\`\`\`css
--fg-primary        /* Description */
--fg-secondary      /* Description */
\`\`\`

**Spacing:**
\`\`\`css
--xs, --sm, --md    /* Internal spacing */
\`\`\`

**Border Radius:**
\`\`\`css
--radius-sm         /* Description */
--radius-md         /* Description */
\`\`\`
```

**Documentar:**
- Paquetes necesarios
- Tokens semánticos usados (agrupados por categoría)
- Comentarios breves de uso

---

## Sección 11: Animations (Optional)

```md
## Animations

The Component has **no built-in animations** / **built-in animations for X**.

**Animation Opportunities:**
- Entry animations (fade-in, scale)
- Hover effects (scale, shadow)
- State transitions (loading, success)

**Example with GSAP:**
\`\`\`astro
<script>
  import gsap from 'gsap';

  gsap.fromTo('.component',
    { scale: 0, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out' }
  );
</script>
\`\`\`

**Example with CSS:**
\`\`\`css
.component {
  transition: transform 200ms ease;
}

.component:hover {
  transform: scale(1.05);
}
\`\`\`
```

**Contenido:**
- Indicar si tiene animaciones built-in o no
- Sugerir oportunidades de animación
- Ejemplos con GSAP y/o CSS

---

## Sección 12: Accessibility (Required)

```md
## Accessibility

### ARIA Attributes

The Component includes built-in accessibility features:

\`\`\`html
<div
  class="component"
  role="button"
  aria-label="Descriptive label"
  aria-disabled="false"
>
  ...
</div>
\`\`\`

**Automatic ARIA Labels:**
- `role="..."` — Semantic role
- `aria-label` — Descriptive text
- `aria-disabled` — State indication

### Best Practices

✅ **Always provide meaningful labels:**
\`\`\`astro
<Component aria-label="Submit form" />
\`\`\`

✅ **Use semantic HTML:**
\`\`\`astro
<button><Component /></button>
\`\`\`

❌ **Don't use generic labels:**
\`\`\`astro
<!-- Bad -->
<Component aria-label="Click here" />
\`\`\`
```

**Incluir:**
- Atributos ARIA automáticos del componente
- Best practices con ejemplos ✅
- Anti-patterns con ejemplos ❌

---

## Sección 13: Composition Patterns (Optional but Recommended)

```md
## Composition Patterns

### Component Group

For multiple components together:

\`\`\`astro
---
import { ComponentGroup } from '@atomchat.io/components-astro';
---

<ComponentGroup spacing="sm">
  <Component />
  <Component />
  <Component />
</ComponentGroup>
\`\`\`

### Clickable Component

Wrap in a button for interactivity:

\`\`\`astro
<button type="button" class="component-button">
  <Component />
</button>
\`\`\`

### With Tooltip

\`\`\`astro
<div class="component-wrapper" data-tooltip="Tooltip text">
  <Component />
</div>
\`\`\`
```

**Mostrar:**
- Composiciones comunes del componente
- Patrones con otros componentes
- Wrappers útiles (buttons, links, tooltips)

---

## Sección 14: Design Tokens in Action (Optional but Recommended)

```md
## Design Tokens in Action

### Token-First Philosophy

Every visual property of the Component is controlled by design tokens. This ensures:

✅ **Global consistency** — All components use the same scale
✅ **Easy theming** — Change tokens to update all instances
✅ **Responsive sizing** — Tokens can be responsive via media queries
✅ **Maintainability** — Update once, reflect everywhere

### Token Override Example

\`\`\`css
/* Custom size variant (if needed) */
.component--xl {
  width: var(--component-size-xl, 64px);
  height: var(--component-size-xl, 64px);
}
\`\`\`
```

**Reforzar:**
- Filosofía token-first
- Beneficios de usar tokens
- Ejemplo de override personalizado

---

## Sección 15: Build this Component with AI (Optional)

```md
## Build this Component with AI

Use this pre-built prompt to generate a complete showcase of this component in your preferred framework. The AI will create a working implementation with all variants and proper token usage.

**What you get:**
- Complete component setup with proper imports
- All 6 variants + 5 sizes demonstrated
- States (enabled, disabled, loading) with examples
- Optional additional GSAP animations
- Token-first styling (no hardcoded values)
```

**Notas:**
- Esta sección es opcional
- NO usar CopyPromptButton (no existe)
- Solo describir qué se puede construir con AI

---

## Checklist de Documentación

Antes de publicar, verifica:

- [ ] Frontmatter completo (`title`, `description`)
- [ ] Imports correctos (ajustar profundidad `../`)
- [ ] Overview con Key Features
- [ ] Demo interactivo con `DemoShowcase`
- [ ] Installation con CSS import
- [ ] API Reference con tabla de props
- [ ] Variants documentadas con tokens
- [ ] Usage Examples (mínimo 3)
- [ ] Structure Tokens listados
- [ ] Dependencies con semantic tokens
- [ ] Accessibility con ARIA y best practices
- [ ] Framework Support table
- [ ] Framework Examples con selector (5 frameworks)
- [ ] FrameworkSwitcher conectado con ID correcto
- [ ] Build with AI prompt personalizado

---

## Notas Importantes

### IDs únicos
Cada página debe tener IDs únicos para:
- `DemoShowcase`: `id="component-demo"`
- `TechnologySelector`: `id="component-framework-selector"`
- `FrameworkSwitcher`: `selectorId="component-framework-selector"`

Reemplazar "component" con el nombre del componente (ej: `avatar-demo`, `button-demo`).

### Depth de imports
Ajustar `../` según ubicación:
- `components/atoms/`: `../../../../components/docs/`
- `components/molecules/`: `../../../../components/docs/`
- `components/content-display/`: `../../../../components/docs/`

### Orden de secciones
Seguir el orden exacto del template para consistencia entre páginas.

### Tokens
- Siempre usar `var(--token-name)`
- Nunca hardcodear valores
- Documentar todos los tokens usados

### Accessibility
- Siempre incluir sección de accesibilidad
- Documentar ARIA automáticos
- Mostrar best practices y anti-patterns

---

**Última actualización:** 2026-03-30
**Basado en:** Avatar component documentation
