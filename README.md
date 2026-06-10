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
- **Luxury blue-and-white identity** — a refined azure + champagne-gold palette,
  a Fraunces/​Plus Jakarta Sans type pairing, soft shadows, and glassmorphism.
- **Interactive, animated UI** — scroll reveals, a draggable **before/after
  smile slider**, a filterable smile gallery, an autoplaying testimonials
  carousel, animated counters, an accessible FAQ accordion, and a sticky mobile
  booking bar.
- **Self-contained visual system** — every illustration (hero smile, doctor
  portraits, before/after cases, service icons, brand mark) is hand-built with
  SVG + gradients. Nothing depends on external image hosts, so the site always
  renders, loads instantly, and stays perfectly on-brand. Real photography can
  be dropped in at any time (see [Adding photos](#-adding-real-photography)).
- **Modern 3-step appointment wizard** — service → schedule → details, with
  inline validation, a deep-link `?doctor=` prefill, and a polished success
  state.
- **SEO + accessibility first** — `Dentist` / `FAQPage` / `WebSite` JSON-LD,
  dynamic OG image, sitemap, robots, semantic landmarks, skip link, keyboard
  support, focus-visible rings, and `prefers-reduced-motion` handling.

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

## 🖼 Adding Real Photography

The site ships with a custom SVG/gradient art system so it looks polished with
zero image dependencies. To use real photos instead:

1. Drop images into `public/` (e.g. `public/doctors/dr-mangla.jpg`).
2. Reference them in the data files:
   - Doctors: set `photo: "/doctors/dr-mangla.jpg"` in `doctors.ts`
   - Gallery: set `beforeImg` / `afterImg` in `gallery.ts`
3. For remote images, the Unsplash hostnames are already allow-listed in
   `next.config.ts` — add others under `images.remotePatterns` as needed.

The `DoctorCard` and `BeforeAfter` components automatically prefer a real image
when one is provided and fall back to the branded artwork otherwise.

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
