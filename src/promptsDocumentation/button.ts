/**
 * Button Component Prompts - Structured by Framework
 *
 * This file replaces the monolithic button.txt with framework-specific prompts.
 * Each framework gets its own declarative, focused prompt that only installs
 * the actual package and shows real implementation files.
 */

export interface FrameworkPrompt {
  title: string
  packages: string[]
  optionalPackages?: string[]
  prompt: string
}

export interface ButtonPrompts {
  astro: FrameworkPrompt
  react: FrameworkPrompt
  nextjs: FrameworkPrompt
  angular: FrameworkPrompt
  vue: FrameworkPrompt
}

export const buttonPrompts: ButtonPrompts = {
  astro: {
    title: "Build Button with Astro",
    packages: [
      "@atomchat.io/components-astro",
      "@atomchat.io/css",
      "@atomchat.io/tokens"
    ],
    optionalPackages: [
      "@atomchat.io/animations",
      "gsap"
    ],
    prompt: `Install the ATOM Button component for Astro.

STEP 1: Install packages
\`\`\`bash
pnpm add @atomchat.io/components-astro @atomchat.io/css
pnpm add @atomchat.io/animations gsap  # Optional for animations
\`\`\`

STEP 2: Import and use
\`\`\`astro
---
import { Button } from '@atomchat.io/components-astro';
import '@atomchat.io/css';
---

<Button variant="Primary" size="m">
  Click me
</Button>

<Button variant="Secondary" size="l" loading>
  Loading...
</Button>

<Button variant="Tertiary" size="s" href="/about">
  Learn More
</Button>
\`\`\`

CRITICAL RULES:
- ONLY install the packages listed above
- Use the EXACT component from @atomchat.io/components-astro
- Import @atomchat.io/css for styles
- Do NOT write custom CSS
- Do NOT modify component internals
- Refer to documentation for all props and variants

This installs the complete, production-ready Button component from the ATOM Design System.`
  },

  react: {
    title: "Build Button with React",
    packages: [
      "@atomchat.io/components-react",
      "@atomchat.io/css",
      "@atomchat.io/tokens",
      "react",
      "react-dom"
    ],
    optionalPackages: [
      "@atomchat.io/animations",
      "gsap"
    ],
    prompt: `Install the ATOM Button component for React.

STEP 1: Install packages
\`\`\`bash
pnpm add @atomchat.io/components-react @atomchat.io/css
pnpm add @atomchat.io/animations gsap  # Optional for animations
\`\`\`

STEP 2: Import and use
\`\`\`tsx
import { Button } from '@atomchat.io/components-react';
import '@atomchat.io/css';
import { useState } from 'react';

function Example() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button variant="Primary" size="m" onClick={() => setLoading(true)}>
        Click me
      </Button>

      <Button variant="Secondary" size="l" loading={loading}>
        Loading...
      </Button>

      <Button variant="Tertiary" size="s" href="/about">
        Learn More
      </Button>
    </>
  );
}
\`\`\`

CRITICAL RULES:
- ONLY install the packages listed above
- Use the EXACT component from @atomchat.io/components-react
- Import @atomchat.io/css for styles
- Do NOT write custom CSS
- Do NOT modify component internals
- Refer to documentation for all props and variants

This installs the complete, production-ready Button component from the ATOM Design System.`
  },

  nextjs: {
    title: "Build Button with Next.js",
    packages: [
      "@atomchat.io/components-react",
      "@atomchat.io/css",
      "@atomchat.io/tokens",
      "next",
      "react",
      "react-dom"
    ],
    optionalPackages: [
      "@atomchat.io/animations",
      "gsap"
    ],
    prompt: `Install the ATOM Button component for Next.js.

STEP 1: Install packages
\`\`\`bash
pnpm add @atomchat.io/components-react @atomchat.io/css
pnpm add @atomchat.io/animations gsap  # Optional for animations
\`\`\`

STEP 2: Import CSS in root layout
\`\`\`tsx
// app/layout.tsx
import '@atomchat.io/css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
\`\`\`

STEP 3: Use the component (Client Component)
\`\`\`tsx
'use client';

import { Button } from '@atomchat.io/components-react';
import { useState } from 'react';

export default function Example() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Button variant="Primary" size="m" onClick={() => setLoading(true)}>
        Click me
      </Button>

      <Button variant="Secondary" size="l" loading={loading}>
        Loading...
      </Button>

      <Button variant="Tertiary" size="s" href="/about">
        Learn More
      </Button>
    </>
  );
}
\`\`\`

CRITICAL RULES:
- ONLY install the packages listed above
- Use the EXACT component from @atomchat.io/components-react
- Import @atomchat.io/css in your root layout
- Add 'use client' directive for interactive components
- Do NOT write custom CSS
- Do NOT modify component internals
- Refer to documentation for all props and variants

This installs the complete, production-ready Button component from the ATOM Design System.`
  },

  angular: {
    title: "Build Button with Angular",
    packages: [
      "@atomchat.io/components-angular",
      "@atomchat.io/css",
      "@atomchat.io/tokens",
      "@angular/core"
    ],
    optionalPackages: [
      "@atomchat.io/animations",
      "gsap"
    ],
    prompt: `Install the ATOM Button component for Angular.

STEP 1: Install packages
\`\`\`bash
pnpm add @atomchat.io/components-angular @atomchat.io/css
pnpm add @atomchat.io/animations gsap  # Optional for animations
\`\`\`

STEP 2: Import CSS globally
\`\`\`json
// angular.json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/@atomchat.io/css/dist/atom.css",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
\`\`\`

STEP 3: Import and use
\`\`\`typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@atomchat.io/components-angular';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [ButtonComponent],
  template: \`
    <atom-button variant="Primary" size="m" (click)="handleClick()">
      Click me
    </atom-button>

    <atom-button variant="Secondary" size="l" [loading]="loading">
      Loading...
    </atom-button>

    <atom-button variant="Tertiary" size="s" href="/about">
      Learn More
    </atom-button>
  \`
})
export class ExampleComponent {
  loading = false;

  handleClick() {
    this.loading = true;
  }
}
\`\`\`

CRITICAL RULES:
- ONLY install the packages listed above
- Use the EXACT component from @atomchat.io/components-angular
- Import @atomchat.io/css in angular.json styles array
- Use standalone components (Angular 14+)
- Do NOT write custom CSS
- Do NOT modify component internals
- Refer to documentation for all props and variants

This installs the complete, production-ready Button component from the ATOM Design System.`
  },

  vue: {
    title: "Build Button with Vue",
    packages: [
      "@atomchat.io/components-vue",
      "@atomchat.io/css",
      "@atomchat.io/tokens",
      "vue"
    ],
    optionalPackages: [
      "@atomchat.io/animations",
      "gsap"
    ],
    prompt: `Install the ATOM Button component for Vue 3.

STEP 1: Install packages
\`\`\`bash
pnpm add @atomchat.io/components-vue @atomchat.io/css
pnpm add @atomchat.io/animations gsap  # Optional for animations
\`\`\`

STEP 2: Import CSS globally
\`\`\`typescript
// main.ts or main.js
import { createApp } from 'vue';
import '@atomchat.io/css';
import App from './App.vue';

createApp(App).mount('#app');
\`\`\`

STEP 3: Import and use
\`\`\`vue
<script setup lang="ts">
import { Button } from '@atomchat.io/components-vue';
import '@atomchat.io/css';
import { ref } from 'vue';

const loading = ref(false);

const handleClick = () => {
  loading.value = true;
};
</script>

<template>
  <Button variant="Primary" size="m" @click="handleClick">
    Click me
  </Button>

  <Button variant="Secondary" size="l" :loading="loading">
    Loading...
  </Button>

  <Button variant="Tertiary" size="s" href="/about">
    Learn More
  </Button>
</template>
\`\`\`

CRITICAL RULES:
- ONLY install the packages listed above
- Use the EXACT component from @atomchat.io/components-vue
- Import @atomchat.io/css in main.ts
- Use Composition API with <script setup>
- Do NOT write custom CSS
- Do NOT modify component internals
- Refer to documentation for all props and variants

This installs the complete, production-ready Button component from the ATOM Design System.`
  }
};

/**
 * Dependencies for each framework (extracted from prompts)
 * Used by DependencyChips component
 */
export const buttonDependencies = {
  astro: [
    { package: '@atomchat.io/components-astro', version: 'latest' },
    { package: '@atomchat.io/css', version: 'latest' },
    { package: '@atomchat.io/tokens', version: 'latest' },
    { package: '@atomchat.io/animations', version: 'latest', optional: true },
    { package: 'gsap', version: '^3.12.0', optional: true }
  ],
  react: [
    { package: '@atomchat.io/components-react', version: 'latest' },
    { package: '@atomchat.io/css', version: 'latest' },
    { package: '@atomchat.io/tokens', version: 'latest' },
    { package: 'react', version: '^18.0.0' },
    { package: 'react-dom', version: '^18.0.0' },
    { package: '@atomchat.io/animations', version: 'latest', optional: true },
    { package: 'gsap', version: '^3.12.0', optional: true }
  ],
  nextjs: [
    { package: '@atomchat.io/components-react', version: 'latest' },
    { package: '@atomchat.io/css', version: 'latest' },
    { package: '@atomchat.io/tokens', version: 'latest' },
    { package: 'next', version: '^14.0.0' },
    { package: 'react', version: '^18.0.0' },
    { package: 'react-dom', version: '^18.0.0' },
    { package: '@atomchat.io/animations', version: 'latest', optional: true },
    { package: 'gsap', version: '^3.12.0', optional: true }
  ],
  angular: [
    { package: '@atomchat.io/components-angular', version: 'latest' },
    { package: '@atomchat.io/css', version: 'latest' },
    { package: '@atomchat.io/tokens', version: 'latest' },
    { package: '@angular/core', version: '^17.0.0' },
    { package: '@atomchat.io/animations', version: 'latest', optional: true },
    { package: 'gsap', version: '^3.12.0', optional: true }
  ],
  vue: [
    { package: '@atomchat.io/components-vue', version: 'latest' },
    { package: '@atomchat.io/css', version: 'latest' },
    { package: '@atomchat.io/tokens', version: 'latest' },
    { package: 'vue', version: '^3.0.0' },
    { package: '@atomchat.io/animations', version: 'latest', optional: true },
    { package: 'gsap', version: '^3.12.0', optional: true }
  ]
};
