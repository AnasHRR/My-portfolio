# Anas Lagziri — Portfolio

Portfolio professionnel de **Anas Lagziri**, Développeur Web Full Stack (Fès, Maroc).

Built with **Next.js (App Router) · React · TypeScript · Tailwind CSS v4 · Drizzle ORM · PostgreSQL**.

## Features

- Premium dark/light design system (CSS variables + Tailwind theme tokens)
- FR / EN language switch (persisted in `localStorage`)
- Sticky glass navbar, active-section indicator, scroll progress, mobile drawer
- Scroll-reveal animations that respect `prefers-reduced-motion`
- Featured project presentation (ElectraTech) + project cards
- Experience / education timelines, soft skills, languages, interests
- Contact form with shared client/server validation, honeypot and rate limiting,
  persisted to PostgreSQL (`contact_messages`)
- SEO: metadata, Open Graph, JSON-LD (`Person`), `robots.txt`, `sitemap.xml`, favicon
- Accessible: skip link, semantic headings, ARIA labels, focus styles

## Structure

```
src/
├── app/
│   ├── api/contact/route.ts   # POST – stores messages in PostgreSQL
│   ├── layout.tsx             # fonts, metadata, theme init script
│   ├── page.tsx               # Home page composition
│   ├── robots.ts / sitemap.ts
│   └── globals.css            # design tokens, utilities, animations
├── components/
│   ├── layout/                # Navbar, Footer, SkipLink
│   ├── sections/              # Hero, About, Skills, Projects, Experience, Education, Profile, Contact
│   ├── providers/             # SiteProvider (locale + theme)
│   └── ui/                    # Button, Icons, Reveal, SectionHeading, TechLogo
├── data/                      # profile, skills, projects, experience/education/soft skills
├── lib/                       # i18n dictionary, contact validation
└── db/                        # Drizzle client + schema
```

## Placeholders to replace

- `public/cv/Anas-Lagziri-CV.pdf` — replace with the latest CV.
- `src/data/profile.ts` → `socials[].url` — add real GitHub / LinkedIn / Instagram URLs (hidden until provided).
- `src/data/projects.ts` → `githubUrl` / `liveUrl` — add real repository and demo links.
- `public/images/hero-visual.jpg` — swap for a real profile photo if desired.
- `NEXT_PUBLIC_SITE_URL` — set to the production domain for canonical / OG URLs.

## Scripts

```bash
npm run dev      # development
npm run build    # production build
npm run start    # production server
npx drizzle-kit push   # apply schema to the database
```
