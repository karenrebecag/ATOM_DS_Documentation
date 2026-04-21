# Storybook → Docs Playground: Step-by-Step Guide

## Architecture

```
Storybook story (Playground export)
  → standalone HTML in public/playground/
  → iframe via StoryPlayground.astro
  → embedded in component .mdx
```

---

## Step 1 — Identify the Storybook story

Open `apps/storybook/stories/<Component>.stories.js`.
Find the `export const Playground` story — it contains the render logic.

Copy these values:
- `VARIANTS` array
- `SIZES` array
- The HTML structure from `renderBtn()` / `render()`
- Any component-specific SVG or constants

---

## Step 2 — Create the standalone HTML

Create `public/playground/<component-name>.html`.

### Required shell

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <!-- 1. Load tokens CSS from jsDelivr -->
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@atomchat.io/tokens@1.0.3/build/css/tokens.css"/>
  <!-- 2. Load component CSS from jsDelivr -->
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@atomchat.io/css@0.2.3/dist/atom.css"/>
</head>
<body>
  <!-- markup from the story -->

  <!-- 3. Load animations from npm via esm.sh (no bundler needed) -->
  <script type="module">
    import { initRotateClones, initRotateCalc, initHoverRotate }
      from 'https://esm.sh/@atomchat.io/animations@1.2.1/hover';

    window.__atomAnimations = { initRotateClones, initRotateCalc, initHoverRotate };
    window.dispatchEvent(new CustomEvent('atom:animations-ready'));
  </script>

  <!-- 4. Playground state + render logic -->
  <script>
    (function () {
      let cleanupHover = null;

      function update() {
        if (cleanupHover) { cleanupHover(); cleanupHover = null; }

        const preview = document.getElementById('preview');
        preview.innerHTML = renderComponent(); // your render fn

        const anim = window.__atomAnimations;
        if (anim) {
          anim.initRotateClones({ scope: preview });
          anim.initRotateCalc({ scope: preview });
          cleanupHover = anim.initHoverRotate({ scope: preview });
        }
      }

      // bind controls, then:
      update();
      window.addEventListener('atom:animations-ready', update, { once: true });
    })();
  </script>
</body>
</html>
```

### Key rules

| Rule | Why |
|------|-----|
| `data-hover-rotate` on root element | `initHoverRotate` scans for this selector |
| Clone span with `aria-hidden="true"` | Required by `initRotateClones` to detect pre-rendered clones |
| `scope: preview` on every init call | Scopes to the preview container, avoids re-scanning the whole doc |
| Call cleanup before `innerHTML =` | Removes old `pointerenter` listeners, prevents memory leaks |
| `atom:animations-ready` event | Module scripts are async; re-run update when animations load |

---

## Step 3 — Create the Astro wrapper (skip if using StoryPlayground)

`StoryPlayground.astro` already exists in `src/components/`.
It accepts `src`, `height` (default 280), and `title` props.

```astro
<StoryPlayground src="/playground/<component>.html" height={280} />
```

Only create a new wrapper if you need custom sizing logic.

---

## Step 4 — Embed in the MDX doc

In `src/content/docs/components/<category>/<component>.mdx`:

```mdx
import StoryPlayground from '../../../../components/StoryPlayground.astro';

<StoryPlayground src="/playground/<component>.html" />
```

Place it right after the Overview description, before the feature list.
Remove any `:::tip` callout that previously linked to the playground URL.

---

## Step 5 — Adjust height

Default height is 280px. Increase for components with many variants:

- Button (6 variants + 5 sizes + states) → `height={280}`
- IconButton (compact preview)           → `height={240}`
- LinkButton (same as Button)            → `height={280}`

---

## Package versions

When upgrading packages, update these three URLs in every playground HTML:

```
tokens  → cdn.jsdelivr.net/npm/@atomchat.io/tokens@X.X.X/build/css/tokens.css
css     → cdn.jsdelivr.net/npm/@atomchat.io/css@X.X.X/dist/atom.css
anim    → esm.sh/@atomchat.io/animations@X.X.X/hover
```

Current versions: tokens@1.0.3 · css@0.2.3 · animations@1.2.1

---

## Why esm.sh instead of jsDelivr for animations?

`@atomchat.io/animations` uses bare ESM imports (`import gsap from 'gsap'`).
jsDelivr serves raw files — bare specifiers break in the browser.
esm.sh rewrites all imports to absolute CDN URLs server-side,
producing browser-ready ESM without a bundler or import map.
