# Kart Swiss Covering - Project Context

Kart Swiss Covering is a French, dark-mode landing website for an automotive covering atelier. The site uses a premium motion-heavy visual language with lime accents, black surfaces, large display typography, and local WebP imagery.

## Stack
- React 19 with TypeScript and Vite.
- Tailwind CSS v4 via `@tailwindcss/vite`.
- Framer Motion for page, scroll, and menu animations.
- React Router DOM for multi-page routing.
- React Helmet Async for per-page SEO metadata.
- Lucide React for icons.

## Project Structure
- `src/App.tsx`: Router, route transitions, global layout with `Navbar`, `Footer`, and page routes.
- `src/pages/`: Route-level pages: `Home`, `ServicesPage`, `PresentationPage`, `ContactPage`.
- `src/components/`: Reusable page sections and layout components such as `Hero`, `ServicesPreview`, `Services`, `QualityCommitment`, `Transformations`, `Process`, `CTA`, `Marquee`, `Navbar`, and `Footer`.
- `src/constants/animations.ts`: Shared Framer Motion variants. Prefer using these instead of local one-off variants for standard reveals.
- `src/index.css`: Tailwind theme tokens, base styles, and shared utilities such as `.reveal` and gradient text.
- `src/assets/`: Local WebP images and logos used by sections.
- `public/`: Static public assets such as favicon and public logo.

## Page Flow
- `/`: `Hero` -> `Marquee` -> `ServicesPreview` -> `QualityCommitment` -> `Transformations` -> `Process` -> `CTA`.
- `/services`: sub-hero, services, film/protection details, advantages, FAQ, CTA.
- `/presentation`: sub-hero, about/story, mission and vision, timeline, visual showcase, values, CTA.
- `/contact`: sub-hero, contact details, hours, contact form.

## Durable Conventions
- The primary language is French (`fr`); keep copy and SEO metadata in French.
- CTAs and internal navigation should use React Router `<Link>` instead of plain anchors.
- Major titles use the display font and uppercase styling; UI/body text uses the sans font.
- Scroll reveal elements should use `initial="hidden"`, `whileInView="visible"`, `viewport={{ once: true }}`, and the `.reveal` class when hidden before hydration matters.
- Standard reveal behavior should come from `TRANSITION_VARIANTS.container`, `item`, `card`, or `blurText`.
- Avoid `transition-all` on `motion.*` elements because it can conflict with Framer Motion properties such as `opacity`, `filter`, `scale`, and `transform`.
- Keep large bitmap effects lightweight; avoid expensive filters on large images during scroll.
