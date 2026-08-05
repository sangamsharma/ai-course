# AI for Everyone — Interactive Practice Platform

A friendly, interactive platform for learning AI through doing. Built for non-technical users — elderly learners, small business owners, students, and everyday people who want to use AI safely and effectively.

## Tech Stack
- **Framework:** Next.js 16 + React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + shadcn/ui v4 (Base UI)
- **Animation:** Motion (Framer Motion)
- **State:** React Context + localStorage
- **Content:** Typed TypeScript data files (no CMS)

## Quick Start
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
npm run lint     # Lint check
```

## Features
- **6 Course Modules** (30 lessons with exercises)
- **Onboarding Diagnostic** — 4-step wizard routes learners to best content
- **Scenario Library** — 14 real-world scenarios across 10 categories
- **Prompt Builder** — 8-field guided form with live preview
- **Bad vs Better Trainer** — Compare weak and improved prompts
- **Practice Sandbox** — Safe practice area with privacy protection
- **Verification Challenge** — Spot AI issues game (8 challenges)
- **Tool Chooser** — Decision helper for picking the right AI tool
- **Capstone** — 8-step guided workflow for real situations
- **Progress Dashboard** — Stats, badges, completion tracking
- **Badge System** — 7 earnable badges
- **Safety Layer** — Privacy warnings, safety tips, per-scenario reminders

## Adding Content

### Adding a New Module
Create `src/data/modules/module-XX-name.ts` following the Module type, then import in `index.ts`.

### Adding a New Scenario
Add entry to `src/data/scenarios.ts` following the Scenario type.

### Adding a Verification Challenge
Add entry to `src/data/verification-challenges.ts` with AI response, issues, and correct answers.

## Architecture
- **No backend** — Static data, localStorage progress
- **No auth** — Fully client-side
- **Content-as-data** — Typed TS arrays
- **Privacy-first** — Fictional scenarios, no real data collected
- **Accessible** — 18px base font, WCAG AA, keyboard nav

## Env Vars
- `NEXT_PUBLIC_AI_API_KEY` — Optional. Enables live AI in sandbox. Default: static mock responses.

## License
MIT
