# Bhagirathi Industries Pvt. Ltd. — Corporate Website

An enterprise-grade, export-ready corporate website for a premium manufacturer of packaged
drinking water, alkaline & mineral water, PET bottles and eco-friendly packaging.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **shadcn-style UI
primitives**, **Framer Motion**, and full SEO infrastructure.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
```

Requires Node 18.18+ (built and tested on Node 25).

---

## Tech stack

| Area          | Choice                                                              |
| ------------- | ------------------------------------------------------------------ |
| Framework     | Next.js 15, App Router, Server Components, SSG                      |
| Language      | TypeScript (strict)                                                 |
| Styling       | Tailwind CSS 3.4 + custom design tokens                             |
| UI primitives | shadcn-style (`Button`, `Badge`, `Accordion`) on Radix + CVA       |
| Motion        | Framer Motion (scroll reveals, counters, mega-nav, mobile menu)    |
| Icons         | lucide-react                                                       |
| Fonts         | Inter (body) + Sora (display) via `next/font`                      |
| SEO           | Per-page metadata, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`|

---

## Project structure

```
src/
  app/                       # App Router pages
    layout.tsx               # Root layout: fonts, metadata, Org JSON-LD, chrome
    page.tsx                 # Home
    products/                # Index + [slug] dynamic product detail (SSG)
    manufacturing/ oem-private-label/ quality-certifications/ sustainability/
    about/ knowledge-center/ alkaline-water-guide/ media/ testimonials/ careers/
    blog/                    # Index + [slug] article pages (SSG)
    contact/
    sitemap.ts robots.ts opengraph-image.tsx not-found.tsx globals.css
  components/
    layout/                  # SiteHeader (mega-nav), SiteFooter, WhatsappFloat
    ui/                      # Button, Badge, Accordion, Section, Reveal, Counter, Logo
    sections/                # HomeHero, ProductGallery
    shared/                  # PageHero, CtaBand, ProductCard, InquiryForm
  lib/
    site.ts                  # Brand, contact, navigation config (single source of truth)
    products.ts              # Typed, CMS-ready product catalogue
    content.ts               # Stats, certs, process, testimonials, articles, knowledge
    seo.ts                   # Metadata + JSON-LD helpers
    utils.ts                 # cn() + helpers
```

The **data layer** (`src/lib`) is intentionally separated from presentation so it can be swapped
for a headless CMS (Sanity, Contentful, Payload) with minimal component changes.

---

## Pages

Home · About · Products (+ 5 detail pages) · Manufacturing · OEM & Private Label ·
Quality & Certifications · Sustainability · Knowledge Center · Understanding Alkaline Water ·
Media & Recognition · Testimonials · Careers · Blog & News (+ articles) · Contact · 404.

---

## Content integrity (important)

This site was built to be **factual and honest**. Please note:

- **Alkaline water** content makes **no unsupported health claims**. The guide at
  `/alkaline-water-guide` clearly separates *established facts*, *ongoing research*, and *claims
  lacking strong scientific consensus*, and points to reputable sources (WHO, national authorities,
  peer-reviewed literature) rather than asserting benefits.
- **No fabricated media, awards, endorsements or testimonials.** Media cards, testimonials and case
  studies are **clearly marked placeholders**. The "Public Awareness & Industry Trends" section
  deliberately avoids fake celebrity/athlete endorsements.
- All statistics (litres/year, export destinations, sustainability targets, milestones) are marked
  **illustrative placeholders**.

---

## Before you go live — replace placeholders

1. **`src/lib/site.ts`** — company phone, WhatsApp number, email, address, map embed, social links,
   founding year, and the production `url` (used for canonical/OG/sitemap).
2. **`src/lib/content.ts`** — real stats, certifications held, testimonials, articles.
3. **`src/lib/products.ts`** — verified specs, sizes, standards and imagery per product.
4. **Images** — now self-hosted in `public/images/` (referenced as `/images/<name>.jpg`). Replace
   these placeholder photos with your own factory/product photography, keeping the same file names
   to avoid touching code. The home hero cycles through `bottling-line`, `bottles-rows`,
   `factory-interior`, `alkaline-pour` and `bottling-machinery` — swap those to change the slideshow.
5. **Certificate & brochure downloads** — wire the placeholder buttons to real PDFs.
6. **Forms** — `InquiryForm` is a front-end demo (validates + shows success). Connect it to a route
   handler / CRM / email service (e.g. Resend, a `/api/contact` route) for real submissions.
7. **Media / testimonials** — replace placeholder cards with genuine, consented content.

---

## SEO & performance

- Per-page `metadata` with canonical URLs, Open Graph and Twitter cards.
- Dynamically generated Open Graph image at `/opengraph-image`.
- `Organization`, `Product`, `BreadcrumbList`, `ContactPage` and `Article` JSON-LD.
- `sitemap.xml` and `robots.txt` generated from the data layer.
- `next/image` optimization (AVIF/WebP), `next/font`, SSG, security headers.
- WCAG-minded: skip link, focus states, reduced-motion support, semantic landmarks, alt text.

---

© 2026 Bhagirathi Industries Private Limited. Placeholder brand assets — replace with official
brand guidelines and logo before launch.
