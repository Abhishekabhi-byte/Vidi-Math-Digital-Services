# Vidi Meth Digital Services — Website

A modern, animated Next.js (App Router) website for Vidi Meth Digital Services (OPC) Private Limited, built with TypeScript, Tailwind CSS v4, and Framer Motion.

## Pages
- `/` — Home (hero with animated division network, business development, growth areas, why choose us, divisions preview, services, testimonials)
- `/about` — About Us
- `/services` — Our Services
- `/divisions` — Our Divisions (VM Academy, VillageMyCity, Gojobin, LoanVidhi, VmHomeMart)
- `/faq` — FAQs (animated accordion)
- `/contact` — Contact Us (working validated contact form + map embed)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. The app uses local system font stacks, so `npm run build` does not need to fetch Google Fonts.

## Build for production

```bash
npm run build
npm start
```

## Structure
- `app/` — routes (App Router)
- `components/` — Header, Footer, NetworkOrbit (signature animated diagram), Reveal (scroll animations), FaqAccordion, ContactForm
- `data/content.ts` — all site copy and structured content in one place, so edits don't require touching JSX
