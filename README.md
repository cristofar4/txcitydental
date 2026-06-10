# Texas City Dental — Luxury Practice Website

A premium, high-converting website for **Texas City Dental** (Texas City Family
Dental) — a full redesign built to look and feel like a $15,000+ custom dental
site, with luxury healthcare branding, smooth animation, and conversion-focused
UX throughout.

> 3448 Palmer Hwy, Texas City, TX 77590 · (409) 419-2222

---

## ✨ Highlights

- **8 fully designed pages** — Home, About, Services, Smile Gallery, Meet the
  Doctors, Patient Reviews, Contact, and a multi-step Appointment Booking flow.
- **Futuristic luxury identity** — dark **aurora** hero gradients, glassmorphism,
  neon glow, gradient hairline borders, film grain, an azure → electric-cyan →
  iris palette, and a Fraunces / Plus Jakarta Sans type pairing.
- **Cinematic motion** — scroll-progress bar, smooth page transitions, scroll
  **parallax**, 3D **tilt** cards, **magnetic** buttons, word-by-word **text
  reveals**, marquees, animated counters, a draggable **before/after smile
  slider**, a filterable gallery, and an autoplaying testimonials carousel —
  all gated behind `prefers-reduced-motion`.
- **Real photography, gracefully** — images load straight from Unsplash's CDN
  via a custom `next/image` loader, each layered over a branded gradient
  fallback so the layout looks intentional even if a photo is unavailable
  (see [Photography](#-photography)).
- **Modern 3-step appointment wizard** — service → schedule → details, with
  inline validation, a deep-link `?doctor=` prefill, and a polished success
  state.
- **SEO + accessibility first** — `Dentist` / `FAQPage` / `WebSite` JSON-LD,
  dynamic OG image, sitemap, robots, semantic landmarks, skip link, keyboard
  support, focus-visible rings, and reduced-motion handling.
- **Deploy-ready** — includes a Render Blueprint (`render.yaml`) for one-click
  hosting.

## 🧰 Tech Stack

| Tool | Version | Notes |
| --- | --- | --- |
| [Next.js](https://nextjs.org) | 16 (App Router, Turbopack) | Static-first rendering |
| [React](https://react.dev) | 19 | |
| [TypeScript](https://www.typescriptlang.org) | 5 | `strict` mode |
| [Tailwind CSS](https://tailwindcss.com) | 4 | CSS-first `@theme` config |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animations |
| [lucide-react](https://lucide.dev) | UI icons (dental glyphs are custom SVG) |

## 🚀 Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server → http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # run ESLint
```

> Requires Node 18.18+ (developed on Node 22). Fonts are fetched at build time
> via `next/font`, so the first build needs network access.

## 📁 Project Structure

```
src/
├── app/                      # App Router pages + route metadata
│   ├── layout.tsx            # Root shell: fonts, header, footer, sticky CTA, JSON-LD
│   ├── globals.css           # Tailwind v4 theme, tokens, animations, utilities
│   ├── page.tsx              # Home
│   ├── about/ services/ …    # One folder per page
│   ├── opengraph-image.tsx   # Dynamic social share image
│   ├── icon.svg              # Favicon (tooth mark)
│   ├── sitemap.ts robots.ts  # SEO routing
│   └── not-found.tsx         # Custom 404
├── components/
│   ├── layout/               # Header, Footer, StickyCTA
│   ├── sections/             # PageHero, CTASection
│   ├── home/                 # Hero, Welcome, WhyChooseUs, Process, Stats
│   ├── cards/                # ServiceCard, DoctorCard
│   ├── gallery/              # BeforeAfter slider, GalleryGrid
│   ├── reviews/ faq/ forms/  # Carousel, accordion, booking + contact forms
│   ├── services/ contact/    # ServiceDetail, GoogleMap
│   ├── art/                  # SmileArt, Portrait, dental icons (all SVG)
│   ├── brand/ seo/ ui/       # Logo, structured data, design primitives
└── lib/
    ├── site.ts               # ⭐ Single source of truth: name, address, phone, hours
    ├── accents.ts            # Accent gradient palette
    ├── utils.ts              # cn() class merger
    └── data/                 # services, doctors, testimonials, faqs, gallery
```

## ✏️ Editing Content

All copy and business data live in plain TypeScript modules — no CMS required.

- **Business info (NAP), hours, stats, social links** → `src/lib/site.ts`
  *(reused by the header, footer, contact page, and structured data)*
- **Services** → `src/lib/data/services.ts`
- **Doctors** → `src/lib/data/doctors.ts`
- **Reviews** → `src/lib/data/testimonials.ts`
- **FAQs** → `src/lib/data/faqs.ts`
- **Smile gallery cases** → `src/lib/data/gallery.ts`

> The doctor bios, credentials, reviews, and pricing notes are professionally
> written **placeholders** for the redesign — replace them with the practice's
> verified details before launch.

## 🖼 Photography

Photography is centralized in **`src/lib/images.ts`** (curated Unsplash photo
IDs) and rendered through **`src/components/media/Photo.tsx`**, which:

- serves responsive images directly from Unsplash's CDN via a custom loader
  (no build-time fetch, so the build never depends on image hosts), and
- always renders a **branded gradient fallback** behind every image, shown while
  loading or if an image fails — so the design never looks broken.

> Images load wherever the deployment has normal outbound network access
> (e.g. Render, Vercel). Some locked-down build sandboxes block external image
> hosts; that only affects local previews, not your live site.

**To use your own photos:** drop files in `public/` and replace the URLs in
`src/lib/images.ts` (e.g. `"/photos/team.jpg"`), or swap in different Unsplash
photo IDs. The procedural **before/after smile slider** stays SVG-based (real
paired clinical photos aren't on stock sites) but accepts `beforeImg`/`afterImg`
in `src/lib/data/gallery.ts` if you have them.

## 🎨 Design System

Defined CSS-first in `globals.css` via Tailwind v4 `@theme`:

- **Brand azure** `brand-50 … brand-950` (primary `brand-600` `#2167d6`)
- **Champagne gold** `gold-200 … gold-600` — restrained luxury accent
- **Deep navies** `ink` / `midnight` for dark sections and the footer
- **Type** — `Fraunces` (display serif) + `Plus Jakarta Sans` (UI/body)
- **Motion tokens** — `animate-float`, `animate-marquee`, `animate-blob`, etc.

## 🔍 SEO & Accessibility

- Per-page `<title>`/description metadata + canonical URLs
- `Dentist`, `FAQPage`, and `WebSite` JSON-LD structured data
- Dynamic Open Graph image and Twitter card
- `sitemap.xml` + `robots.txt`
- Semantic landmarks, a "Skip to content" link, labelled controls, keyboard-
  operable slider/carousel/accordion, visible focus states, and full
  `prefers-reduced-motion` support

## 📌 Notes

- The appointment and contact forms are **front-end demos** — wire them to your
  scheduling provider or an API route / form service to capture submissions.
- The Google Map uses the keyless embed (renders client-side, no API key).

---

Built with care for Texas City Dental.
