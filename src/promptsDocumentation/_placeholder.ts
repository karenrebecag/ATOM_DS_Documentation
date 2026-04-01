/**
 * Placeholder prompts for components without specific prompts yet
 * Used as fallback by CopyPromptButton when component-specific prompts don't exist
 */

export const placeholderPrompts = {
  astro: {
    title: "Build Component with Astro",
    packages: ["@atomchat.io/components-astro", "@atomchat.io/css"],
    prompt: `Install the ATOM component for Astro:

\`\`\`bash
pnpm add @atomchat.io/components-astro @atomchat.io/css @atomchat.io/tokens
\`\`\`

Import the component:

\`\`\`astro
---
import '@atomchat.io/css';
import { Component } from '@atomchat.io/components-astro';
---

<Component />
\`\`\`

Component-specific installation guide coming soon.`
  },
  react: {
    title: "Build Component with React",
    packages: ["@atomchat.io/components-react", "@atomchat.io/css"],
    prompt: `Install the ATOM component for React:

\`\`\`bash
pnpm add @atomchat.io/components-react @atomchat.io/css @atomchat.io/tokens
\`\`\`

Import the component:

\`\`\`tsx
import '@atomchat.io/css';
import { Component } from '@atomchat.io/components-react';

export function App() {
  return <Component />;
}
\`\`\`

Component-specific installation guide coming soon.`
  },
  vue: {
    title: "Build Component with Vue",
    packages: ["@atomchat.io/components-vue", "@atomchat.io/css"],
    prompt: `Install the ATOM component for Vue:

\`\`\`bash
pnpm add @atomchat.io/components-vue @atomchat.io/css @atomchat.io/tokens
\`\`\`

Import the component:

\`\`\`vue
<script setup lang="ts">
import '@atomchat.io/css';
import { Component } from '@atomchat.io/components-vue';
</script>

<template>
  <Component />
</template>
\`\`\`

Component-specific installation guide coming soon.`
  },
  angular: {
    title: "Build Component with Angular",
    packages: ["@atomchat.io/components-angular", "@atomchat.io/css"],
    prompt: `Install the ATOM component for Angular:

\`\`\`bash
pnpm add @atomchat.io/components-angular @atomchat.io/css @atomchat.io/tokens
\`\`\`

Import the component:

\`\`\`typescript
import '@atomchat.io/css';
import { Component } from '@atomchat.io/components-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Component],
  template: '<atom-component></atom-component>'
})
export class AppComponent {}
\`\`\`

Component-specific installation guide coming soon.`
  }
}
