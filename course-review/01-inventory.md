# Phase 0 — Content Inventory

All course content lives as typed TypeScript data in `src/data/modules/*.ts` (imported by `src/data/modules/index.ts`), rendered by `src/app/modules/[moduleSlug]/page.tsx`. One orphaned MDX file exists outside this system (see note at bottom). Supporting practice tools live in `src/app/(practice)/*` and pull from `src/data/scenarios.ts`, `verification-challenges.ts`, `tool-categories.ts`, `onboarding.ts`, `badges.ts`, `glossary.ts`, `safety-tips.ts`, `prompt-templates.ts`.

| # | Title | File(s) | Lessons | Est. time | Format | One-sentence summary |
|---|---|---|---|---|---|---|
| 1 | AI Made Simple | `module-01-ai-made-simple.ts` | 6 | 55 min | Reading + quizzes + 2 prompt-playgrounds | What AI is, the 3 free tools, first prompt, account setup, the 4-Round Method, 10 daily-use ideas. |
| 2 | The Art of Asking | `module-02-art-of-asking.ts` | 5 | 55 min | Reading + quizzes + fill-in-blank + prompt-playgrounds | The 5-part prompt formula, Persona Pattern, specificity, building templates, 7-step pipeline. |
| 3 | AI for Everyday Tasks | `module-03-everyday-tasks.ts` | 6 | 60 min | Reading + quizzes + prompt-playgrounds | Emails, summarize/translate, event planning, meal planning, travel, budgeting. |
| 4 | AI for Your Business | `module-04-business.ts` | 6 | 65 min | Reading + quizzes + fill-in-blank + prompt-playgrounds | Social posts, menus/flyers/guest lists, customer emails, proposals, marketing strategy, visuals. |
| 5 | AI for Personal Documents | `module-05-personal-documents.ts` | 4 | 50 min | Reading + quizzes + prompt-playgrounds | Resume/cover letters, formal letters, creative writing, learning with AI (Feynman technique). |
| 6 | Be Smart, Stay Safe | `module-06-be-smart-safe.ts` | 5 | 45 min | Reading + quizzes + fill-in-blank | Privacy rules, spotting hallucinations, ethics, 3-step fact-check, "good habits" + **course-completion messaging**. |
| 7 | Advanced Prompting Techniques | `module-07-advanced-prompting.ts` | 4 | 45 min | Reading + quiz + fill-in-blank + prompt-playgrounds | Chained prompts, few-shot prompting, chain-of-thought, advanced personas/expert panels. |
| 8 | AI for Health & Wellness | `module-08-health-wellness.ts` | 3 | 40 min | Reading + quizzes + prompt-playground | Meal planning (dup. of M3), doctor-visit prep, fitness plans — with medical disclaimers. |
| 9 | Travel Planning with AI | `module-09-travel-planning.ts` | 3 | 35 min | Reading + quiz + fill-in-blank + prompt-playground | Itineraries (dup. of M3), packing lists, language/culture help. |
| 10 | Personal Finance Assistant | `module-10-personal-finance.ts` | 3 | 40 min | Reading + quiz + fill-in-blank + prompt-playground | Budgeting (dup. of M3), comparing financial products, financial goals. |
| 11 | Job Search Accelerator | `module-11-job-search.ts` | 3 | 40 min | Reading + quiz + fill-in-blank + prompt-playground | Resumes (dup. of M5), cover letters, interview prep/roleplay. |
| 12 | Creative Projects & Hobbies | `module-12-creative-projects.ts` | 3 | 35 min | Reading + quiz + prompt-playground | Creative writing (dup. of M5), speeches/toasts, hobby projects. |
| 13 | Small Business Operations | `module-13-small-business-ops.ts` | 1 (stub) | 30 min (claimed) | **Empty — "Coming Soon"** | No content exists. |
| 14 | Digital Literacy & AI | `module-14-digital-literacy.ts` | 1 (stub) | 30 min (claimed) | **Empty — "Coming Soon"** | No content exists. |
| 15 | Civic Participation | `module-15-civic-participation.ts` | 1 (stub) | 30 min (claimed) | **Empty — "Coming Soon"** | No content exists. |
| 16 | Education & Tutoring | `module-16-education-tutoring.ts` | 1 (stub) | 30 min (claimed) | **Empty — "Coming Soon"** | No content exists. |
| 17 | Legal Document Basics | `module-17-legal-documents.ts` | 1 (stub) | 30 min (claimed) | **Empty — "Coming Soon"** | No content exists. |
| 18 | Senior Living with AI | `module-18-senior-living.ts` | 1 (stub) | 30 min (claimed) | **Empty — "Coming Soon"** | No content exists. |
| 19 | Microsoft 365 Copilot | `module-19-microsoft-copilot.ts` | 5 | 55 min | Reading + quizzes + prompt-playgrounds | Copilot licensing tiers, Chat homepage, Agents, Pages/Notebooks, Outlook/Teams integration — enterprise-focused. |

**Totals:** 19 modules listed in the catalog; **13 have real content** (330 min core + 255 min extension = ~585 min / ~9.75 hrs of actual lesson content), **6 are empty** (~180 min of claimed-but-nonexistent content).

## Supporting content (not modules, but load-bearing)

| File | Role | Count | Notes |
|---|---|---|---|
| `scenarios.ts` | Standalone real-world practice scenarios (bad prompt → better prompt → checklist → transfer template) | 14, across 10 categories | Well-built pattern; several categories have only 1 scenario (study, job-search, workplace, forms, money, translation, health, agriculture) |
| `verification-challenges.ts` | "Spot the AI mistake" game — hallucinated quotes, unsourced stats, medical/legal overreach, tone problems | 8 | Good difficulty spread (easy/medium/hard) |
| `tool-categories.ts` | 6 categories of AI tool (chat, search-grounded, office, translation, design, automation) with good-for/avoid/safety notes | 6 | Not linked from any module lesson |
| `safety-tips.ts` | Standalone safety-tip cards | 12 | Overlaps heavily with Module 6 content; used in a separate UI surface |
| `glossary.ts` | Plain-language term definitions with analogies | 14 terms | Does not cover Module 19's vocabulary (Agent, Notebook, Work/Web toggle, Pages) |
| `onboarding.ts` | Diagnostic-quiz routing logic | 10 routes | **References scenario slugs and in some cases module slugs that don't exist** — see `03-flow-audit.md` |
| `badges.ts` | 7 gamification badges tied to actions across the whole site | 7 | Fine as designed |
| `capstone-templates.ts` | 8-step generic capstone workflow | 8 steps | Generic wrapper, not tied to specific module content |
| `prompt-templates.ts` | Standalone prompt template library (569 lines) | Not fully read line-by-line for this audit; flagged for spot-check in `06-verify-list.md` | |
| `tools.ts` | Tool comparison data (ChatGPT, Claude, Gemini, Microsoft Copilot) incl. an `enterpriseCriteria` block (SOC2/HIPAA/GDPR/SSO/rate limits) | 4 tools | Version/pricing-specific claims are time-sensitive — see verify list. The enterprise-compliance block is out of place for the stated consumer audience. |
| `corporate.ts` / `corporate-research.ts` | B2B training offer content (pricing tiers, tracks, case studies) | — | Confirms the hybrid free/B2B business model; not audited in depth (out of scope: this is sales copy, not learner-facing course content) |
| `claude-tutorial-research.ts` / `microsoft-copilot-research.ts` | Research/notes files, apparently source material for Modules 1–6 and 19 | — | Not learner-facing; useful as a citation source when fact-checking (see verify list) |

## Orphaned / dead file

- `src/content/modules/ai-made-simple.mdx` — a partial MDX draft of Module 1, Lesson 1 only. Not imported or referenced anywhere in `src/app` (the site reads exclusively from `src/data/modules/index.ts`). This looks like a leftover from an earlier content pipeline (the README explicitly says "Content-as-data: Typed TypeScript data files," implying MDX was tried and abandoned). It should be deleted — it currently just sits in the repo as a source of confusion for anyone maintaining content, since it duplicates and slightly diverges from the real Lesson 1.

## What I did not do
Per instructions, no original files were modified, moved, or deleted. Everything above was produced by reading files only.
