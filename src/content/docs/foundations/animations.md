---
title: Animations
description: GSAP-based animation system with accessibility-first motion control.
---

AtomChat Design System includes a professional animation system powered by GSAP with full accessibility support.

## Overview

The `@atomchat.io/animations` package provides:

- **GSAP-powered animations**: Professional-grade animation engine
- **ScrollTrigger effects**: Scroll-based animations
- **Motion preferences**: Respects `prefers-reduced-motion`
- **Three-level control**: OS, site, and element-level motion control
- **Type-safe**: Full TypeScript definitions

## Installation

```bash
pnpm add @atomchat.io/animations gsap
```

:::tip[Peer Dependency]
GSAP is a peer dependency. Make sure to install both packages.
:::

## Quick Start

### Initialize Animations

```typescript
import { initAllAnimations } from '@atomchat.io/animations';

// Initialize on page load
initAllAnimations();
```

### Add Animation Attributes

```html
<!-- Fade in animation -->
<div data-animate="fade-in" data-delay="0.2s">
  Content fades in on load
</div>

<!-- Scroll-triggered animation -->
<section data-scroll-trigger="fade-up">
  Appears when scrolling into view
</section>
```

## Animation Types

### Fade Animations

```html
<!-- Fade in -->
<div data-animate="fade-in">Fade in</div>

<!-- Fade up -->
<div data-animate="fade-up">Fade up from below</div>

<!-- Fade down -->
<div data-animate="fade-down">Fade down from above</div>

<!-- Fade left -->
<div data-animate="fade-left">Fade from left</div>

<!-- Fade right -->
<div data-animate="fade-right">Fade from right</div>
```

### Scale Animations

```html
<!-- Scale in -->
<div data-animate="scale-in">Scale from center</div>

<!-- Scale up -->
<div data-animate="scale-up">Scale up</div>
```

### Slide Animations

```html
<!-- Slide left -->
<div data-animate="slide-left">Slide in from right</div>

<!-- Slide right -->
<div data-animate="slide-right">Slide in from left</div>
```

## Animation Options

### Delay

Add a delay before animation starts:

```html
<div data-animate="fade-in" data-delay="0.5s">
  Animates after 0.5 seconds
</div>
```

### Duration

Control animation duration:

```html
<div data-animate="fade-in" data-duration="1s">
  Takes 1 second to complete
</div>
```

### Easing

Specify easing function:

```html
<div data-animate="fade-in" data-ease="power2.out">
  Uses power2.out easing
</div>
```

**Common easing values:**
- `power1.out`, `power2.out`, `power3.out`, `power4.out`
- `elastic.out`
- `back.out`
- `bounce.out`

## Scroll-Triggered Animations

### Basic Scroll Animation

```html
<section data-scroll-trigger="fade-up">
  Animates when scrolling into view
</section>
```

### Scroll Configuration

```html
<section
  data-scroll-trigger="fade-up"
  data-scroll-start="top 80%"
  data-scroll-end="bottom 20%">
  Custom scroll trigger points
</section>
```

### Parallax Effect

```html
<div data-parallax="0.5">
  Moves at 50% of scroll speed
</div>
```

## Motion Preferences

AtomChat animations respect user motion preferences at **three levels**:

### Level 1: OS Preference

Automatically detected via `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  /* Animations disabled or simplified */
}
```

### Level 2: Site-Wide Control

Set on the `<html>` element:

```html
<!-- Reduce all animations -->
<html data-motion="reduced">

<!-- Disable all animations -->
<html data-motion="none">

<!-- Full animations (default) -->
<html data-motion="full">
```

### Level 3: Element-Level Control

Override for specific elements:

```html
<!-- Disable animation for this element only -->
<div data-animate="fade-in" data-motion="none">
  No animation
</div>

<!-- Reduce animation for this element -->
<div data-animate="fade-in" data-motion="reduced">
  Simplified animation
</div>
```

## Toggle Motion Preference

```javascript
// Toggle motion preference
function toggleMotion() {
  const html = document.documentElement;
  const current = html.getAttribute('data-motion') || 'full';

  const next = {
    'full': 'reduced',
    'reduced': 'none',
    'none': 'full'
  }[current];

  html.setAttribute('data-motion', next);
}
```

## Custom Animations

### Using GSAP Directly

```typescript
import { gsap } from '@atomchat.io/animations';

// Custom animation
gsap.to('.element', {
  opacity: 1,
  x: 0,
  duration: 1,
  ease: 'power2.out'
});
```

### ScrollTrigger

```typescript
import { gsap, ScrollTrigger } from '@atomchat.io/animations';

gsap.to('.element', {
  scrollTrigger: {
    trigger: '.element',
    start: 'top center',
    end: 'bottom center',
    scrub: true
  },
  opacity: 1,
  y: 0
});
```

### Timeline

```typescript
import { gsap } from '@atomchat.io/animations';

const tl = gsap.timeline();

tl.to('.header', { opacity: 1, duration: 0.5 })
  .to('.nav', { x: 0, duration: 0.5 })
  .to('.content', { y: 0, duration: 0.5 });
```

## Animation Patterns

### Staggered Animations

```html
<div class="cards">
  <div class="card" data-animate="fade-up" data-delay="0s">Card 1</div>
  <div class="card" data-animate="fade-up" data-delay="0.1s">Card 2</div>
  <div class="card" data-animate="fade-up" data-delay="0.2s">Card 3</div>
</div>
```

**Or with JavaScript:**

```typescript
import { gsap } from '@atomchat.io/animations';

gsap.from('.card', {
  opacity: 0,
  y: 50,
  duration: 0.6,
  stagger: 0.1,
  ease: 'power2.out'
});
```

### Reveal on Scroll

```html
<section class="reveal">
  <h2 data-scroll-trigger="fade-up">Title</h2>
  <p data-scroll-trigger="fade-up" data-delay="0.2s">Content</p>
  <button data-scroll-trigger="fade-up" data-delay="0.4s">CTA</button>
</section>
```

### Hero Animation

```html
<div class="hero">
  <h1 data-animate="fade-down">Welcome</h1>
  <p data-animate="fade-up" data-delay="0.3s">Tagline</p>
  <button data-animate="scale-in" data-delay="0.6s">Get Started</button>
</div>
```

## Performance Best Practices

1. **Use transforms**: Animate `transform` and `opacity` for best performance
2. **Avoid layout thrashing**: Don't animate `width`, `height`, `top`, `left`
3. **Use will-change**: Add `will-change: transform` to animated elements
4. **Batch animations**: Use timelines for multiple simultaneous animations
5. **Clean up**: Kill animations when elements are removed

```css
/* Optimize animated elements */
.animated-element {
  will-change: transform, opacity;
}
```

## Accessibility

### Reduced Motion

When `prefers-reduced-motion: reduce` is detected:

- **Fade animations**: Duration reduced to 0.01s (instant)
- **Movement animations**: Replaced with simple fade
- **Parallax effects**: Disabled
- **Scroll effects**: Simplified

### Keyboard Navigation

Animations don't interfere with keyboard navigation. Focus states are always visible.

### Screen Readers

Animations are visual only and don't affect screen reader announcements.

## API Reference

### initAllAnimations()

Initialize all animations on the page.

```typescript
import { initAllAnimations } from '@atomchat.io/animations';

initAllAnimations(options?: {
  respectMotion?: boolean;  // Default: true
  autoStart?: boolean;      // Default: true
});
```

### createScrollAnimation()

Create a scroll-triggered animation.

```typescript
import { createScrollAnimation } from '@atomchat.io/animations';

createScrollAnimation(selector: string, options: {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean;
  animation: gsap.TweenVars;
});
```

### createFadeIn()

Create a fade-in animation.

```typescript
import { createFadeIn } from '@atomchat.io/animations';

createFadeIn(selector: string, options?: {
  duration?: number;
  delay?: number;
  ease?: string;
});
```

## Examples

### Full Page Example

```html
<!DOCTYPE html>
<html lang="en" data-motion="full">
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atomchat.io/tokens@1.0.0/build/css/tokens.css">
</head>
<body>
  <header data-animate="fade-down">
    <h1>My Site</h1>
  </header>

  <section data-scroll-trigger="fade-up">
    <h2>About</h2>
    <p>Content here</p>
  </section>

  <script type="module">
    import { initAllAnimations } from '@atomchat.io/animations';
    initAllAnimations();
  </script>
</body>
</html>
```

## Next Steps

- [Architecture: Packages](/architecture/packages/) - Deep dive into the animations package
- [Quick Start](/getting-started/quick-start/) - Build animated components
- [GSAP Documentation](https://gsap.com/docs/) - Learn more about GSAP
