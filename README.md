# Handoff: The Beaten Trail — Site Redesign
**Design System v1.0 · April 2026**

---

## Overview

This package contains the complete design system and visual language for the full redesign of **thebeatentrail.net** — an outdoor/off-road site serving ATV, UTV, and side-by-side riders. The scope covers a new homepage (with hero carousel), inner pages, navigation, article cards, and all core UI components.

The existing production site must remain untouched. This redesign is to be built as a **new Next.js (React) project** from scratch, then merged into the production repo when complete.

---

## About the Design Files

The file `design-system.html` in this package is a **design reference created in HTML** — it is a living style guide and prototype showing the intended look, feel, typography, color, spacing, motion, and components. It is **not production code to copy directly**.

Your task is to **recreate these designs in a new Next.js (React) app** using modern best practices: the App Router, CSS Modules or Tailwind CSS (whichever you prefer), and Framer Motion for page transitions and scroll animations.

Open `design-system.html` in a browser to interact with it directly. Every section is live and interactive.

---

## Fidelity

**High-fidelity.** The design system defines exact colors, typography, spacing, motion curves, and component states. Implement pixel-accurately. All token values are listed below and also defined as CSS custom properties inside `design-system.html`.

---

## Design Direction: "Trail Authority"

Industrial-editorial precision meets rugged outdoors. The aesthetic is:
- **Deep black** backgrounds — never pure #000, always #080808
- **Single amber accent** — `oklch(0.72 0.18 52)` — used only for CTAs, active states, and accent lines
- **Barlow Condensed** for all display/headline/UI — bold, uppercase, mechanical
- **Barlow** for all body copy — clean, legible, never light weight below 18px
- **Zero border radius** everywhere — sharp edges only
- **1px hairline rules** as structure — animated amber shimmer lines for emphasis
- **Motion that feels mechanical** — expo easing, staggered reveals, directional page wipes

---

## Design Tokens

Implement these as CSS custom properties in a global stylesheet or Tailwind config. They are the single source of truth.

### Colors
```css
--color-black:        #080808;   /* Page background */
--color-surface-1:    #111111;   /* Cards, nav bg */
--color-surface-2:    #1A1A1A;   /* Inputs, modals */
--color-surface-3:    #242424;   /* Hover states */
--color-line:         #2E2E2E;   /* Borders, dividers */
--color-line-subtle:  #1E1E1E;
--color-white:        #F4F2EE;   /* Primary text */
--color-grey-1:       #C8C6C2;   /* Body text */
--color-grey-2:       #8A8884;   /* Meta, secondary labels */
--color-grey-3:       #555350;   /* Placeholders */
--color-accent:       oklch(0.72 0.18 52);         /* Trail Amber — CTAs, focus, active */
--color-accent-dim:   oklch(0.72 0.18 52 / 0.15);  /* Tag backgrounds */
--color-accent-line:  oklch(0.72 0.18 52 / 0.6);   /* Hover borders, animated rules */
```

### Typography
```css
--font-display: 'Barlow Condensed', sans-serif;
--font-body:    'Barlow', sans-serif;

/* Scale */
--text-xs:   0.8125rem;  /* 13px — labels, overlines, monospace meta */
--text-sm:   0.9375rem;  /* 15px — captions, card excerpts, button text */
--text-base: 1rem;       /* 16px — standard body */
--text-md:   1.125rem;   /* 18px */
--text-lg:   1.375rem;   /* 22px */
--text-xl:   1.75rem;    /* 28px — H3, card titles */
--text-2xl:  2.5rem;     /* 40px — H2 */
--text-3xl:  3.5rem;     /* 56px — H1 */
--text-4xl:  5rem;       /* 80px — Display */
--text-hero: 8rem;       /* 128px — Hero (clamp for responsive) */
```

### Typography Roles
| Role | Font | Size | Weight | Transform | Tracking |
|------|------|------|--------|-----------|----------|
| Hero | Barlow Condensed | clamp(3rem, 8vw, 8rem) | 900 | uppercase | -0.01em |
| Display | Barlow Condensed | clamp(2.5rem, 6vw, 5rem) | 800 | uppercase | 0.01em |
| H1 | Barlow Condensed | clamp(2rem, 4vw, 3.5rem) | 700 | uppercase | 0.02em |
| H2 | Barlow Condensed | clamp(1.75rem, 3vw, 2.5rem) | 700 | uppercase | 0.03em |
| H3 | Barlow Condensed | 1.75rem | 600 | uppercase | 0.04em |
| Overline | Barlow | 0.8125rem | 600 | uppercase | 0.22em | amber color |
| Body Large | Barlow | 1.375rem | 400 | none | normal |
| Body | Barlow | 1rem | 400 | none | normal |
| Caption/Meta | Barlow | 0.9375rem | 400 | none | normal | grey-1 |
| Label/UI | Barlow | 0.8125rem | 600 | uppercase | 0.14em | grey-2 |
| Button | Barlow Condensed | 0.9375rem | 700 | uppercase | 0.14em |

### Spacing (4px base unit)
```css
--space-1:  0.25rem;   /* 4px */
--space-2:  0.5rem;    /* 8px */
--space-3:  0.75rem;   /* 12px */
--space-4:  1rem;      /* 16px */
--space-6:  1.5rem;    /* 24px */
--space-8:  2rem;      /* 32px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-24: 6rem;      /* 96px */
--space-32: 8rem;      /* 128px */
```

### Border & Radius
```css
--radius-none: 0;          /* Default everywhere — sharp edges */
--radius-sm:   2px;        /* Exceptional use only */
--border-hair:   1px solid #2E2E2E;
--border-accent: 1px solid oklch(0.72 0.18 52 / 0.6);
```

### Motion
```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);   /* Entrances, reveals */
--ease-in-expo:  cubic-bezier(0.7, 0, 0.84, 0);   /* Exits, dismissals */
--ease-snappy:   cubic-bezier(0.25, 0.1, 0.25, 1); /* Hover, micro-interactions */

--dur-fast:   180ms;   /* Hover, color, border changes */
--dur-base:   320ms;   /* Cards, dropdowns */
--dur-slow:   550ms;   /* Reveal animations */
--dur-page:   700ms;   /* Page transitions */
```

---

## Screens & Pages to Build

### 1. Homepage (`/`)

**Layout:**
- Full-viewport sticky nav (64px tall, `--color-black` bg, `1px` bottom border)
- Full-bleed hero carousel immediately below nav — aspect ratio 16:5 on desktop, 16:9 on mobile
- 3-column article card grid (2-col tablet, 1-col mobile) — max-width 1200px centered
- Featured/category sections below cards
- Footer

**Nav Bar:**
- Logo: `THE BEATEN TRAIL.` — Barlow Condensed 900, uppercase, 18px — period in amber
- Nav links: Reviews · Trails · Builds · Videos — Barlow 500, 15px, uppercase, letter-spacing 0.1em, grey-2 default, white + amber underline on active/hover
- Right: Primary CTA button — `Subscribe`
- Mobile: hamburger → full-height slide-in drawer from right, `--color-surface-1` bg

**Hero Carousel:**
- Full-bleed image behind gradient overlay: `linear-gradient(to right, rgba(8,8,8,0.85) 35%, rgba(8,8,8,0.1))`
- Left-aligned content: overline → hero headline → body sentence → 2 buttons
- Bottom: pill-style dot indicators — inactive `24px wide × 2px tall`, active `40px wide × 2px tall amber` — width animates on transition
- Bottom-right: prev/next arrow buttons — `36×36px`, 1px border, semi-transparent dark bg with backdrop-filter blur
- Auto-advance: 6 seconds, pause on hover
- Transition: crossfade or horizontal slide — 700ms ease-out-expo
- 4 slides max, updated 2×/month by content team (CMS-driven)
- Image spec: 1920×720px, JPG/WebP, ≤400KB

**Article Cards:**
- `--color-surface-1` background, `1px --color-line` border
- On hover: border transitions to `--color-accent-line`, translateY(-2px) — 320ms ease-out-expo
- Image: 16:9 aspect ratio placeholder/img, `--color-surface-3` bg
- Body: overline tag + date meta, headline (H3 style), excerpt (body, grey-1), read-more ghost button
- Footer: read time left, arrow link right — separated by `1px --color-line` top border

### 2. Article / Post Page (`/[category]/[slug]`)
- Full-width hero image with title overlay
- Constrained content width (720px max) centered
- Sidebar on desktop: related articles, tags, newsletter CTA
- Rich text body: body font, 1rem, grey-1, lh 1.7
- Previous/Next article navigation at bottom

### 3. Category Pages (`/reviews`, `/trails`, `/builds`, `/videos`)
- Page hero: full-width dark banner, H1 title, overline category label
- Filterable card grid matching homepage card style
- Pagination or infinite scroll

### 4. About / Static Pages
- Minimal — centered content, max-width 720px
- Hero text treatment only, no carousel

---

## Interactions & Animations

### Page Transitions (Framer Motion)
Use `AnimatePresence` with a horizontal wipe or fade-up pattern:
```jsx
// Page enters: opacity 0→1, y 20→0, 700ms ease-out-expo
// Page exits: opacity 1→0, 180ms ease-in-expo
```

### Scroll Reveal
Elements fade up on enter viewport:
```jsx
// opacity: 0→1, y: 20→0
// duration: 550ms, ease: [0.16, 1, 0.3, 1]
// stagger children: 100ms delay increments
```

### Animated Amber Rule
A horizontal hairline with a moving amber shimmer — use for section separators and emphasis:
```css
background: linear-gradient(90deg, transparent, oklch(0.72 0.18 52), transparent);
background-size: 200% 100%;
animation: shimmer 2.5s ease-in-out infinite;

@keyframes shimmer {
  0%   { background-position: -200% 0; }
  100% { background-position:  200% 0; }
}
```

### Button States
- Primary: amber bg, black text → lighter amber + glow shadow on hover
- Secondary: transparent, `--color-line` border → `--color-accent-line` border + amber text on hover
- Ghost: no border, grey text → white text + amber underline scales in from left on hover
- All: `translateY(1px)` on active/click

---

## Responsive Behavior

| Breakpoint | Columns | Page Margin | Nav |
|------------|---------|-------------|-----|
| Mobile `< 600px` | 1 | 16px | Hamburger drawer |
| Tablet `600–1024px` | 2 | 32px | Condensed horizontal |
| Desktop `> 1024px` | 3–4 | Max-width 1200px centered | Full nav + CTA |

- Hero headline: `clamp(2.5rem, 6vw, 5.5rem)` — never wraps awkwardly on mobile
- Carousel: maintains aspect ratio, content overlay stacks vertically on mobile
- Cards: full-width on mobile, 2-up on tablet, 3-up on desktop
- Touch targets: minimum 44×44px for all interactive elements

---

## Google Fonts

Load in `<head>` or via Next.js `next/font/google`:
```
Barlow Condensed: weights 300, 400, 600, 700, 800, 900 (+ italic 700)
Barlow: weights 300, 400, 500, 600
```

---

## Assets

- **Logo:** The existing site logo is black — on the dark background of this redesign, use a **white or light version** of the logo, or the text treatment `THE BEATEN TRAIL.` (period in amber) as fallback until the asset is provided
- **Hero/Carousel images:** Placeholders only in this design — client will supply 1920×720px JPG/WebP images
- **Card images:** Placeholders — will be CMS-supplied per article

---

## Project Setup Notes

1. Scaffold: `npx create-next-app@latest thebeatentrail-v2 --typescript --app --tailwind` (or CSS Modules if preferred)
2. Install Framer Motion: `npm install framer-motion`
3. Install Google Fonts via `next/font/google` — Barlow + Barlow Condensed
4. Define all tokens as CSS custom properties in `globals.css`
5. Build in this order: Design tokens → Layout shell + Nav → Hero Carousel → Card component → Homepage assembly → Inner pages

---

## Files in This Package

| File | Purpose |
|------|---------|
| `design-system.html` | **Open in browser** — live interactive style guide. All colors, type, spacing, motion, components, and carousel are shown with working interactions. This is your primary reference. |
| `README.md` | This document |

---

## Questions?

All design decisions are documented in `design-system.html`. If something is ambiguous, the HTML source of that file contains the exact CSS values used — treat those as ground truth.
