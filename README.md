# Master Wash NJ — Website

Premium, mobile-first website for **Master Wash NJ** — mobile auto detailing serving New Jersey & Pennsylvania.

## Tech stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion.

## Features

- **Bilingual EN / ES** (defaults to English) with a language toggle.
- **Video hero** background (responsive: landscape on desktop, portrait on mobile) with the brand logo, glow and scroll parallax.
- **Dynamic pricing** by vehicle size, full services catalog and add-ons.
- **Real-work gallery** (photos + short clips) and Instagram link.
- **Quick-book modal** → Square booking (with UTM tracking).
- **Quote / contact form** via Netlify Forms.
- **SEO**: metadata, Open Graph / Twitter, sitemap, robots, JSON-LD (local business), per-page canonicals.
- **Security headers** (CSP, X-Frame-Options, HSTS, etc.) set in `next.config.ts`.
- Fully responsive, accessible and `prefers-reduced-motion` aware.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Deploy (Netlify)

Configured for Netlify with the official Next.js runtime (see `netlify.toml`).

1. Push this repo to **GitHub**.
2. In Netlify: **Add new site → Import an existing project → GitHub** → select this repo.
3. Netlify auto-detects Next.js and **redeploys on every push** to the main branch.
4. Add your custom domain in **Netlify → Domain management**.

> The quote form uses **Netlify Forms** — a hidden form lives in `public/__forms.html`; submissions appear in the Netlify dashboard under **Forms**.

## Where to edit content

| What | File |
|------|------|
| Business content (services, prices, gallery, FAQ) | `src/lib/data.ts` |
| Site config (name, phone, email, Instagram, URL) | `src/lib/site.ts` |
| UI text (EN / ES) | `src/lib/i18n.ts` |
| Images & videos | `public/img/` |

---

© Master Wash NJ · Mobile Auto Detailing · New Jersey & Pennsylvania
