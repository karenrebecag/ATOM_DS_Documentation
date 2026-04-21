---
title: Animations
description: Framework-agnostic GSAP animation system with DOM contracts and accessibility-first motion control.
---

The `@atomchat.io/animations` package provides 28 animation modules powered by GSAP. Every module is **framework-agnostic** — it works through DOM contracts (data attributes and classes). Add the right attribute to your HTML, call the init function, and it works in Astro, React, Vue, Angular, or plain HTML.

## Installation

```bash
npm install @atomchat.io/animations gsap
```

GSAP is a **peer dependency** — you must install both.

## Core pattern

Every animation module follows the same contract:

```typescript
import { initReveal } from '@atomchat.io/animations';

// 1. Call init → get cleanup function
const cleanup = initReveal({ scope: document });

// 2. When done (SPA navigation, unmount) → call cleanup
cleanup();
```

**Rules:**
- `init*()` scans the DOM for matching data attributes
- Returns a `CleanupFn` that kills all tweens, ScrollTriggers, listeners, and observers
- Returns `NOOP` if no matching elements found or motion is reduced
- Supports a `scope` parameter to limit DOM queries to a container

---

## Modules

### Scroll reveals

Add `data-reveal` to any element. It fades in when scrolled into view.

```html
<div data-reveal="fade-up">Fades up on scroll</div>
<div data-reveal="fade-down">Fades down</div>
<div data-reveal="fade-left">Fades from left</div>
<div data-reveal="fade-right">Fades from right</div>
<div data-reveal="fade">Simple fade</div>
<div data-reveal="fade-scale">Fade + scale</div>
```

**Stagger** — reveals children sequentially:

```html
<div data-reveal="stagger">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

**Batch mode** — performance-optimized for many elements:

```html
<div data-batch-reveal>Item 1</div>
<div data-batch-reveal>Item 2</div>
<div data-batch-reveal>Item 3</div>
```

**Init:**
```typescript
import { initReveal, initBatchReveal } from '@atomchat.io/animations';

const cleanup1 = initReveal();
const cleanup2 = initBatchReveal();
```

---

### Parallax

Scroll-linked movement. This is a **vestibular-risk** animation — it bails entirely when motion is reduced.

```html
<!-- Y-axis parallax (moves element vertically on scroll) -->
<div data-parallax data-speed="50">
  Moves 50px during scroll
</div>

<!-- Scale parallax (zooms element on scroll) -->
<img data-parallax-scale data-from="1.15" data-to="1" src="hero.jpg" />
```

**Init:**
```typescript
import { initParallax } from '@atomchat.io/animations';
const cleanup = initParallax();
```

---

### Hover interactions

Multiple hover effects controlled via data attributes:

**Rotate on hover** (button labels):
```html
<button data-hover-rotate>
  <span class="button__label">Hover me</span>
</button>
```

**Card hover** (lift + shadow + image zoom):
```html
<div data-card-hover>
  <img src="card.jpg" />
  <h3>Card title</h3>
</div>
```

**Magnetic** (cursor-following):
```html
<button data-magnetic="0.3">
  Follows cursor with 30% strength
</button>
```

**Init:**
```typescript
import {
  initRotateClones,
  initRotateCalc,
  initHoverRotate,
  initCardHover,
  initMagnetic,
} from '@atomchat.io/animations';

// Order matters for rotate:
const c1 = initRotateClones();
const c2 = initRotateCalc();
const c3 = initHoverRotate();
const c4 = initCardHover();
const c5 = initMagnetic();
```

---

### Custom cursor

Replaces the native cursor with a custom animated dot that reacts to interactive elements.

```html
<!-- Required DOM structure -->
<div id="custom-cursor">
  <div id="cursor-text">
    <span class="cursor-text__label"></span>
  </div>
</div>

<!-- Optional: custom label on hover -->
<a href="/about" data-cursor-text="Read more">About us</a>
```

Auto-labels: `<a>` shows "View", `<button>` shows "Click", `<input>` shows "Focus", `mailto:` shows "Email", `tel:` shows "Call".

**Init:**
```typescript
import { initCursor } from '@atomchat.io/animations';
const cleanup = initCursor();
```

Disabled on touch devices and when motion is reduced.

---

### Text animations

**Shimmer** — animated gradient sweep:
```html
<span data-shimmer>Loading...</span>
<span data-shimmer="2">2-second duration</span>
```

**Text reveal** — character/line entrance:
```html
<h1 data-text-reveal>Animated headline</h1>
```

**Init:**
```typescript
import { initLoading, initTextAnimations } from '@atomchat.io/animations';
const c1 = initLoading();
const c2 = initTextAnimations();
```

---

### Marquee

CSS-based infinite scroll. Uses IntersectionObserver (no GSAP tweens).

```html
<div data-marquee>
  <div data-marquee-list>
    <span>Item 1</span>
    <span>Item 2</span>
    <span>Item 3</span>
    <!-- Duplicate content for seamless loop -->
    <span>Item 1</span>
    <span>Item 2</span>
    <span>Item 3</span>
  </div>
</div>
```

**Init:**
```typescript
import { initMarquee } from '@atomchat.io/animations';
const cleanup = initMarquee();
```

---

### Scroll direction

Detects scroll direction and sets a CSS class or attribute for header show/hide patterns.

**Init:**
```typescript
import { initScrollDirection } from '@atomchat.io/animations';
const cleanup = initScrollDirection();
```

---

### Progress nav

Scroll progress indicator.

```html
<div data-progress-nav></div>
```

**Init:**
```typescript
import { initProgressNav } from '@atomchat.io/animations';
const cleanup = initProgressNav();
```

---

### Toast

Animate toast notifications with position-aware enter/exit.

```typescript
import {
  initToastAnimations,
  animateToastEnter,
  animateToastExit,
} from '@atomchat.io/animations';

// Auto-animate via MutationObserver
const cleanup = initToastAnimations();

// Or imperatively
animateToastEnter(toastElement);
await animateToastExit(toastElement); // Returns Promise
```

---

### Odometer

Animated number counter with digit roll effect.

```html
<span data-odometer>1,234</span>
```

**Init:**
```typescript
import { initOdometer } from '@atomchat.io/animations';
const cleanup = initOdometer();
```

---

### Badge

Notification badge animation (pop-in, scale).

**Init:**
```typescript
import { initBadge } from '@atomchat.io/animations';
const cleanup = initBadge();
```

---

### Page transitions

Full-page transition effects for Barba.js or manual SPA navigation.

**Init:**
```typescript
import { initPageTransition } from '@atomchat.io/animations';
const cleanup = initPageTransition();
```

---

### Marketing modules

Landing page specific animations. Import selectively to avoid unused code:

| Module | Attribute | Description |
|--------|-----------|-------------|
| `initSlider` | `data-slider-*` | Rotation slider |
| `initVerticalSlider` | `data-vslider-*` | Vertical slider |
| `initFlickCards` | `data-flick-cards-*` | Draggable card carousel |
| `initDraggableMarquee` | `data-draggable-marquee-*` | Draggable marquee |
| `initRotatingLayers` | `data-rotating-layers` | Concentric rotating circles |
| `initLayoutGridFlip` | `data-layout-grid` | FLIP grid transitions |
| `initStats` | `data-stats-*` | Count-up numbers |
| `initLogoWall` | `data-logo-wall-*` | Logo cycling grid |
| `initSocialProof` | `data-social-proof-*` | Social proof strip |
| `initFeatures` | `data-features-*` | Bento grid features |
| `initPricing` | `data-pricing-*` | Pricing toggle |
| `initAboutCard` | `data-about-card` | Persona card swap |
| `initFooterLogo` | `data-footer-logo-wrap` | Footer scatter |
| `initSidebarWipe` | `data-sidebar-collapse` | Sidebar wipe transition |

```typescript
import { initStats, initLogoWall } from '@atomchat.io/animations';
const c1 = initStats();
const c2 = initLogoWall();
```

---

## Motion preferences (WCAG 2.3.3)

A 3-tier system that controls all animations:

### Tier 1 — OS (automatic)

Detected via `prefers-reduced-motion: reduce`. No code needed — the system reads it automatically.

### Tier 2 — Site (manual override)

```html
<html data-motion="reduced">  <!-- Simplified animations -->
<html data-motion="none">     <!-- No animations at all -->
```

```typescript
import { setMotionLevel } from '@atomchat.io/animations';
setMotionLevel('reduced');  // or 'none', 'full'
```

### Tier 3 — Element (exemption)

```html
<!-- This element never animates regardless of other settings -->
<div data-motion-exempt>Always static</div>
```

### How modules respond

| Motion level | Vestibular-risk (parallax) | Non-vestibular (reveal, fade) |
|-------------|--------------------------|-------------------------------|
| `full` | Runs normally | Runs normally |
| `reduced` | **Skipped entirely** (returns NOOP) | Sets final state instantly (no tween) |
| `none` | Skipped | Skipped |

### Toggle button example

```typescript
import { getMotionLevel, setMotionLevel } from '@atomchat.io/animations';

button.addEventListener('click', () => {
  const current = getMotionLevel();
  setMotionLevel(current === 'full' ? 'reduced' : 'full');
});
```

### Watch for changes

```typescript
import { watchMotionPreference } from '@atomchat.io/animations';

const cleanup = watchMotionPreference((level) => {
  console.log('Motion changed to:', level);
});
```

---

## Init all at once

For convenience, initialize every animation module in one call:

```typescript
import { initAllAnimations } from '@atomchat.io/animations';

const cleanup = initAllAnimations();

// Later (SPA navigation, unmount):
cleanup();
```

This calls all 28 `init*()` functions and returns a master cleanup.

---

## Framework integration

### Astro

```astro
---
// No framework needed — just HTML + data attributes
---
<div data-reveal="fade-up">Content</div>

<script>
  import { initReveal } from '@atomchat.io/animations';
  initReveal();
</script>
```

### React

```tsx
import { useEffect } from 'react';
import { initReveal, initParallax } from '@atomchat.io/animations';

function Page() {
  useEffect(() => {
    const c1 = initReveal();
    const c2 = initParallax();
    return () => { c1(); c2(); };
  }, []);

  return (
    <div data-reveal="fade-up">Content</div>
  );
}
```

### Vue

```vue
<template>
  <div data-reveal="fade-up">Content</div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { initReveal } from '@atomchat.io/animations';

let cleanup;
onMounted(() => { cleanup = initReveal(); });
onUnmounted(() => { cleanup?.(); });
</script>
```

### Barba.js (SPA transitions)

```typescript
import { initAllAnimations } from '@atomchat.io/animations';
import { initSmoothScroll } from '@atomchat.io/animations/extras/smooth-scroll';
import { initTransitions } from '@atomchat.io/animations/extras/transitions';

let cleanup = initAllAnimations();
initSmoothScroll();  // Optional Lenis integration
initTransitions();   // Optional Barba.js integration

barba.hooks.after(() => {
  cleanup();
  cleanup = initAllAnimations();
});
```

---

## GSAP config

All GSAP plugins are registered once in `config.ts`. Never register plugins yourself:

| Plugin | Used by |
|--------|---------|
| ScrollTrigger | reveal, parallax, progress-nav, stats |
| CustomEase | Global "atom" ease curve |
| Draggable | draggable-marquee, flick-cards, slider |
| InertiaPlugin | Momentum dragging (pairs with Draggable) |
| Observer | Scroll/touch observation |
| Flip | layout-grid-flip |

**Timing constants** (matching `@atomchat.io/tokens` motion tokens):

| Constant | Value | Token |
|----------|-------|-------|
| `DURATION.quarter` | 0.15s | `motion.duration.quarter` |
| `DURATION.half` | 0.3s | `motion.duration.half` |
| `DURATION.default` | 0.6s | `motion.duration.default` |
| `DURATION.double` | 1.2s | `motion.duration.double` |
| `STAGGER.fast` | 0.03s | `motion.stagger.fast` |
| `STAGGER.default` | 0.05s | `motion.stagger.default` |
| `STAGGER.slow` | 0.1s | `motion.stagger.slow` |

**Default ease:** `"atom"` — a custom cubic-bezier `(0.625, 0.05, 0, 1)`.

**Tab visibility:** GSAP ticker pauses when the tab is hidden (saves CPU), wakes and refreshes ScrollTrigger when visible again.

---

## Data attributes reference

### Universal

| Attribute | Values | Description |
|-----------|--------|-------------|
| `data-motion` | `reduced`, `none` | Site-level motion control (on `<html>`) |
| `data-motion-exempt` | (presence) | Element never animates |

### Scroll

| Attribute | Values | Description |
|-----------|--------|-------------|
| `data-reveal` | `fade-up`, `fade-down`, `fade-left`, `fade-right`, `fade`, `fade-scale`, `stagger` | Scroll reveal variant |
| `data-batch-reveal` | (presence) | Batch-optimized reveal |
| `data-stagger` | number (e.g. `0.05`) | Custom stagger timing |
| `data-parallax` | (presence) | Y-axis parallax |
| `data-speed` | number (e.g. `50`) | Parallax pixels of movement |
| `data-parallax-scale` | (presence) | Scale parallax |
| `data-from` | number (e.g. `1.15`) | Scale start value |
| `data-to` | number (e.g. `1`) | Scale end value |
| `data-progress-nav` | (presence) | Progress bar |

### Interactions

| Attribute | Values | Description |
|-----------|--------|-------------|
| `data-hover-rotate` | (presence) | Rotate label on hover |
| `data-card-hover` | (presence) | Card lift + shadow + zoom |
| `data-magnetic` | number 0-1 (e.g. `0.3`) | Magnetic cursor follow |
| `data-cursor-text` | string (e.g. `"Read more"`) | Custom cursor label |
| `data-size` | `full` | Full-width hover variant |

### Text

| Attribute | Values | Description |
|-----------|--------|-------------|
| `data-shimmer` | number? (seconds) | Shimmer gradient |
| `data-text-reveal` | (presence) | Character/line reveal |

### Marketing

| Attribute | Description |
|-----------|-------------|
| `data-marquee` | Marquee wrapper |
| `data-marquee-list` | Marquee animated list |
| `data-slider-*` | Slider system |
| `data-vslider-*` | Vertical slider |
| `data-flick-cards-*` | Card carousel |
| `data-draggable-marquee-*` | Draggable marquee |
| `data-rotating-layers` | Rotating circles |
| `data-layout-grid` | FLIP grid |
| `data-stats-*` | Count-up numbers |
| `data-logo-wall-*` | Logo cycling |
| `data-social-proof-*` | Social proof |
| `data-features-*` | Bento grid |
| `data-pricing-*` | Pricing toggle |
| `data-about-card` | Persona card |
| `data-footer-logo-wrap` | Footer scatter |
| `data-sidebar-collapse` | Sidebar wipe |

---

## Performance

- **Tab visibility:** Ticker sleeps when tab is hidden
- **Scope parameter:** Limit DOM queries to a container instead of full document
- **Batch reveals:** `data-batch-reveal` uses `ScrollTrigger.batch()` for large lists
- **CSS marquee:** Marquee uses CSS `@keyframes`, not GSAP tweens
- **Cleanup always:** Every init returns cleanup — never leak tweens or listeners

---

## Next steps

- [Dark Mode](/foundations/dark-mode/) — How tokens adapt to themes
- [Token Layers](/architecture/token-layers/) — The 4-layer architecture
- [GSAP Documentation](https://gsap.com/docs/) — Learn GSAP
