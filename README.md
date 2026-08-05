# AI for Everyone — Interactive Practice Platform

A friendly, interactive platform for learning AI through doing. Built for non-technical users — elderly learners, small business owners, students, and everyday people who want to use AI safely and effectively.

**Live:** https://ai-course-nine-sand.vercel.app

## Tech Stack
- **Framework:** Next.js 16 + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui v4 (Base UI)
- **Animation:** Motion (Framer Motion)
- **Auth:** Auth.js v5 (Google OAuth + Resend magic link)
- **Database:** PostgreSQL on Neon + Prisma 7
- **Payments:** Stripe (B2B subscriptions)

## Quick Start
```bash
cp .env.example .env   # Edit with your credentials
npm install
npx prisma generate
npx prisma db push
npm run dev             # http://localhost:3000
```

## Features
- **19 Course Modules** — AI basics, prompting, everyday tasks, business, health, travel, finance, job search, legal, senior living, creative projects, and more
- **Onboarding Diagnostic** — 4-step wizard routes learners to best content
- **Scenario Library** — Real-world scenarios across 10 categories
- **Prompt Builder** — Guided form with live preview
- **Bad vs Better Trainer** — Compare weak and improved prompts
- **Practice Sandbox** — Safe practice area with privacy protection
- **Verification Challenge** — Spot AI issues game
- **Tool Chooser** — Decision helper for picking the right AI tool
- **Capstone** — Guided workflow for real situations
- **Progress Dashboard** — Stats, badges, completion tracking
- **Badge System** — 7 earnable badges
- **B2B Teams** — Organization management, invitations, team dashboards
- **Safety Layer** — Privacy warnings, safety tips, per-scenario reminders

## Architecture
- **Auth.js v5** — JWT sessions, Prisma adapter, Google + Resend providers
- **Prisma 7** — PostgreSQL via Neon, `@prisma/adapter-pg` driver adapter
- **Middleware** — Cookie-based route protection for admin/company routes
- **Content-as-data** — Typed TypeScript data files (19 modules, scenarios, tools, badges)
- **Privacy-first** — Fictional scenarios, no real data collected
- **Accessible** — 18px base font, WCAG AA, keyboard nav, reduced motion

## Env Vars
```
DATABASE_URL          # PostgreSQL connection string (Neon)
AUTH_SECRET           # Auth.js secret (generate with: npx auth secret)
AUTH_GOOGLE_ID        # Google OAuth client ID
AUTH_GOOGLE_SECRET    # Google OAuth client secret
AUTH_RESEND_KEY       # Resend API key for magic link email
```

## Adding Content

### Adding a New Module
Create `src/data/modules/module-XX-name.ts` following the Module type, then import in `index.ts`.

### Adding a New Scenario
Add entry to `src/data/scenarios.ts` following the Scenario type.

### Adding a Verification Challenge
Add entry to `src/data/verification-challenges.ts` with AI response, issues, and correct answers.

## Deploy
Deployed on Vercel with Neon PostgreSQL. Env vars set via Vercel dashboard or CLI:
```bash
vercel --prod \
  --env DATABASE_URL=... \
  --env AUTH_SECRET=... \
  --env AUTH_GOOGLE_ID=... \
  --env AUTH_GOOGLE_SECRET=... \
  --env AUTH_RESEND_KEY=...
```

## License
MIT
