# Kart Swiss Covering - Project Instructions

This project is a high-end, dark-mode landing page for an automotive covering atelier. It is built with a specific focus on UI/UX perfection, motion design, and technical precision. The brand voice uses "Nous" (We) to reflect a professional team environment.

## Tech Stack
- **Framework:** React 19 (TypeScript)
- **Styling:** Tailwind CSS v4 (Vite plugin `@tailwindcss/vite`)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM (Multi-page architecture)
- **SEO:** React Helmet Async (Dynamic metadata)

## Design System
- **Colors:**
  - Background: `#0A0A0A` (Dark)
  - Surface: `#111111` (Cards/Sections)
  - Accent: `#86EF21` (Lime Green)
  - Border: `#222222`
- **Typography:**
  - Titles: **Anton** (Display, Uppercase, Tracking Tight)
  - UI/Body: **Inter** (Sans-serif)
  - Hero Leading: Increased to `0.95` for professional breathing room.
  - Section Labels: `font-sans font-bold tracking-[0.3em] uppercase` with neon color.
- **Buttons (CTA):**
  - Primary: `font-sans font-black tracking-tight uppercase` with `shadow-[0_0_30px_rgba(163,255,0,0.1)]` glow.
  - All CTAs must use `<Link>` from React Router for navigation.
- **Special Effects:**
  - `text-outline`: `-webkit-text-stroke: 0.4px white; color: transparent;`
  - `backdrop-blur-xl`: Used for navigation and overlays.
  - `.reveal`: CSS utility class (`opacity: 0`) applied to all `whileInView` containers to prevent flash-before-animate.

## Assets & Branding
- **Official Logo:** Located at `src/assets/logo.webp` and `public/logo.png`. Used in Navbar (h-10/12) and Footer (h-16).
- **Favicon:** Uses `public/favicon.png` (PNG format).
- **Backgrounds:** Use high-quality local WebP assets (e.g., `src/assets/hero-mustang.webp`, `src/assets/range-rover.webp`, `src/assets/wrap-detail.webp`, `src/assets/branded-van.webp`) with grayscale treatment and ~30-40% opacity.
- **Image Treatment:** Large images must be optimized (resampled to ~1500px wide) to prevent GPU lag during scroll-driven animations.
- **Image Framing:** 
  - Hero Mustang: `object-right` to focus on the vehicle.
  - Branded Van (Services 03): `object-[center_85%]` to prioritize branding visibility.
  - General: `object-cover`.

## SEO Standards
- **Language:** Primary project language is **French (fr)**.
- **Metadata:** Each page MUST use `<Helmet>` to define unique titles, descriptions, and canonical links.
- **OpenGraph:** Always include OG tags for social sharing.

## Animation Standards
All animations must follow the "Signature Hero" feel established in `src/constants/animations.ts`.
- **Master Easing:** `[0.16, 1, 0.3, 1]` (Precise start, smooth deceleration).
- **Stagger:** Always use `staggerChildren` (default `0.1s`) for content reveals.
- **Motion:** Standard vertical slide of `30px` (y: 30 -> 0) with `opacity` (0 -> 1).
- **Typography Reveals:** Use `TRANSITION_VARIANTS.blurText` for major H1/H2 headers to achieve a premium de-blur effect without performance cost.
- **Page Transitions:** Duration `0.5s`, exit movement `y: -20`, initial `y: 20`. Ensure the `transition` object is nested within the `animate` and `exit` states in the variant.
- **Scroll Reveal Pattern:** Every `whileInView` element MUST:
  1. Use `initial="hidden"` and `whileInView="visible"` with `viewport={{ once: true }}`.
  2. Include the `reveal` CSS class in its `className` to guarantee CSS-level invisibility before JS hydrates.
  3. Use `TRANSITION_VARIANTS.container` (for parent wrappers) or `TRANSITION_VARIANTS.item` (for children/standalone elements).

## Architecture
- `src/components/`: Reusable UI sections (Hero, ServicesPreview, Services, QualityCommitment, Transformations, Process, CTA, Marquee, Navbar, Footer).
- `src/pages/`: Dedicated page components (Home, ServicesPage, PresentationPage, ContactPage).
- `src/constants/`: Centralized animation variants (`animations.ts`) and business logic.
- `src/App.tsx`: Routing and global providers.

## Page Structure

### Homepage (`/`)
Hero → Marquee → ServicesPreview → QualityCommitment → Transformations → Process → CTA

### Services (`/services`)
Sub-Hero → Services Cards → Deep Dive (Films) → Advantages (3 cards) → FAQ (6 accordion items) → CTA Bar

### Présentation (`/presentation`)
Sub-Hero → À Propos (Founder Story) → Mission & Vision (Split Layout) → Parcours Timeline (4 milestones) → Visual Showcase → Values (6 cards) → CTA Band

### Contact (`/contact`)
Sub-Hero → Contact Info + Hours + Form

## Hero Heights & Titles
- **Homepage:** `min-h-[80vh]` on mobile, `min-h-[85vh]` on desktop.
- **Contact Page:** `min-h-[25vh]` on mobile for better form visibility.
- **Other Subpages:** `min-h-[80vh]` on mobile, `min-h-[70vh]` on desktop, with `pt-48 pb-24`.
- **Title Consistency:** Major titles on subpages should follow a consistent 3-line layout where possible for visual harmony.

## Section Rhythm
- **Standard Section Padding:** `py-32` for major sections, `py-24` for CTA bars.
- **Section Headers:** Always include a neon label (`— SECTION NAME`) + large display title + optional description paragraph.
- **Grid Line Effect:** Use `gap-px bg-border` on parent grid with `bg-dark` on children for 1px divider lines.

## Mobile Navigation
- **Implementation:** Full-screen dark overlay menu with `AnimatePresence`.
- **Animations:** 
  - Overlay: Slide-down from `-100%` with stagger.
  - Links: Vertical slide up (`y: 20 -> 0`) with neon accents on hover.
  - Interaction: Hamburger/X toggle with `z-index` management (header at 60, overlay at 55).

## Footer Navigation
- Uses React Router `<Link>` components (NOT anchor `<a>` tags) to ensure navigation works from all pages.

## Development Guidelines
- **Surgical Edits:** Maintain existing design patterns and animation curves.
- **Image Treatment:** Use optimized WebP images (~1500px) and avoid expensive filters (blur) on large bitmaps during scroll animations.
- **Responsiveness:** Ensure giant display typography scales correctly on mobile (usually `text-[3.375rem]` as fallback for `text-[7rem]` with `text-base md:text-lg` for subtitles).
- **Animation Visibility:** Always use the `.reveal` CSS class on `whileInView` elements to prevent the flash-before-animate bug.
- **Navigation:** All CTA buttons and footer links MUST use `<Link to="/path">` from React Router, never `<a href="#">`.
