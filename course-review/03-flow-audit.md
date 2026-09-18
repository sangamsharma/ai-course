# Phase 2 — Flow Audit

## Dependency map

| Module | Explicitly assumes | Actually assumes (evidence) | Problem? |
|---|---|---|---|
| 1. AI Made Simple | Nothing | Nothing | Correct entry point. |
| 2. The Art of Asking | Module 1 concepts | Explicitly says "the simple formula we introduced in Module 1" (`m2-good-vs-bad`) | None — correctly sequenced. |
| 3. Everyday Tasks | Modules 1–2 | Uses the formula and templates without re-teaching them | None. |
| 4. Your Business | Modules 1–3 | Uses "the 5-part formula" by name without re-explaining | None. |
| 5. Personal Documents | Modules 1–2 | Same pattern | None. |
| 6. Be Smart, Stay Safe | Modules 1–5 (references privacy/accuracy across all prior topics) | Sound in isolation, but its closing lesson **asserts the course is over** — see below | **Yes — critical.** |
| 7. Advanced Prompting | Module 2 (persona, formula) | Explicitly says "You've learned basic personas (Module 2). Now take it further" (`m07-persona`) | **Yes — ordering.** Correctly built *on* Module 2, but placed 5 modules later with 4 unrelated topic modules and a "the end" message in between. A learner who reaches Module 7 has had persona-pattern content dormant for a long stretch. |
| 8–12 (Health, Travel, Finance, Job Search, Creative) | Modules 1–2 fundamentals | Uses the formula/templates correctly, but re-teaches topics from Modules 3 and 5 instead of building on them | **Yes — redundancy, not a hard break, but wasted structure.** See Redundancy section below. |
| 13–18 | N/A — no content | N/A | Not a dependency issue; a content-existence issue (see `02-module-audit.md`). |
| 19. Microsoft 365 Copilot | **An employer-provisioned Microsoft 365 Copilot license, IT department support, and a work account** | Never taught, never checked, never available to most of the stated audience (individual, non-technical, free-tier per `PRODUCT.md`) | **Yes — the clearest hard dependency violation in the course.** This module relies on infrastructure the course neither teaches nor can assume its target learner has. |

## The Module 6 problem, precisely

`module-06-be-smart-safe.ts`, lesson `m6-habits`:
- Tip-box titled **"You Did It! 🎉"**, body: *"You started this course curious but uncertain. Now you have... Welcome to the AI-powered future — you're ready for it!"*
- Preceding text: *"Congratulations! You've completed the full course."*

This is not a tone issue — it is a **structural dead end**. Modules 7–19 exist in `src/data/modules/index.ts` and are reachable via `/modules`, but nothing in the learner-facing content acknowledges them. A learner who trusts the course's own words has no reason to believe there's more. Combined with the badge system (`badges.ts`'s `ready-for-real-use` badge is tied to completing a capstone, not a specific module count), there's no in-product signal correcting this either.

## Difficulty curve

Rough 1–5 difficulty rating per module, based on the conceptual complexity of what's taught (not reading level, which is uniformly easy — see Module Audit):

```
Module:      1   2   3   4   5   6   7   8   9  10  11  12  13-18  19
Difficulty:  1   2   2   3   2   2   4   2   2   2   3   2   n/a    4
             └─ gentle, sensible ramp ─┘   ▲                        ▲
                                     spike after         second spike,
                                     "course complete"    different skillset
                                     message + long gap    entirely (enterprise)
                                     since prerequisite
                                     (Module 2)
```

- **Modules 1–6:** a genuinely well-shaped gentle curve (1→2→2→3→2→2). This is good design and should be preserved.
- **Module 7:** a real difficulty spike (chain-of-thought, few-shot, chaining, expert panels are qualitatively harder than anything in Modules 3–6) arriving right after the course told the learner they'd finished, and five modules removed from Module 2, its actual prerequisite.
- **Modules 8–12:** a *backwards step* — difficulty drops back down to Module-3 level right after Module 7's spike, and largely re-teaches Module 3/5 content rather than building on Module 7's advanced techniques. A learner who did push through Module 7 gets no chance to apply chaining or few-shot prompting to the health/travel/finance/job-search/creative topics that follow.
- **Module 19:** a second, unrelated spike — not just conceptually harder, but requiring different tools/infrastructure than everything before it.

**Verdict:** the curve for the intended six-module course (1–6) is good. Everything appended after it (7–19) was not planned against that curve.

## Redundancy

Five topics are taught twice with minimal added depth. In each pair, the second occurrence's *unique* lessons are noted — those are worth keeping; the duplicate lesson is not.

| Topic | First taught | Taught again | What's actually new the second time |
|---|---|---|---|
| Meal planning | M3 `recipes-and-shopping` | M8 `meal-planning` | A medical disclaimer (portable to M3 instead) |
| Travel itineraries | M3 `travel-planning` | M9 `trip-itineraries` | Nothing new in this lesson; M9's *other* lessons (packing lists, language help) are new |
| Budgeting | M3 `personal-finance` | M10 `budgeting` | Nothing new in this lesson; M10's *other* lessons (comparing products, financial goals) are new |
| Resume writing | M5 `resume-writing` | M11 `resumes-cvs` | A better, more specific anonymization warning (worth porting back); M11's *other* lessons (cover letters, interview roleplay) are new |
| Creative writing | M5 `creative-writing` | M12 `creative-writing` | Nothing new in this lesson; M12's *other* lessons (speeches, hobbies) are new |

Net effect: roughly 5 lessons' worth of the ~35 lessons in Modules 7–12 are pure duplication. That's a meaningful chunk of "9.75 hours of content" that isn't actually 9.75 hours of new learning.

## Gap analysis against the everyday-use benchmark

| Level | Coverage | Evidence |
|---|---|---|
| L1 — First contact | **Covered well** | Module 1 entirely. |
| L2 — Everyday writing & communication | **Covered well** | M1 L5–6, M3 `writing-emails`, M4 `customer-communication`. |
| L3 — Understanding & learning | **Covered well** | M5 `learning-and-research` (Feynman technique), `study-helper` scenario. |
| L4 — Planning & personal organization | **Covered well** | M3 (events, meals, travel, finance) + M9/M10 extensions. |
| L5 — Working with your own content (upload PDFs/screenshots/photos, ask questions, extract tables, compare documents) | **Missing** | No lesson anywhere teaches file or photo upload. `tools.ts` mentions "file uploads" as a free-tier feature in passing (ChatGPT, Claude entries) but it is never taught as a skill. This is a significant miss for this specific audience — "take a photo of a confusing bill or letter and ask AI to explain it" is one of the highest-value, lowest-effort things a non-technical or elderly user can do, and it appears nowhere. |
| L6 — Better prompting as a skill | **Covered well for the basics, missing the persistence layer** | Role/examples/format/iterating/templates are well covered (M2, M7). But "saved instructions, projects, or custom assistants" (ChatGPT Custom Instructions/Projects, Claude Projects, Gemini Gems) — the features that stop a user from re-explaining their context every single time — are never mentioned anywhere in the course. |
| L7 — Work & small-business tasks | **Covered well** | M4 in full; M11 adds interview prep; M13 (stub) would have added more but doesn't exist. |
| L8 — Creative & multimodal | **Covered weakly** | Creative *writing* is well covered (M5, M12). Image generation is mentioned only as a one-line workflow tip in M4 `ai-for-visuals`, never a hands-on lesson. Voice mode is **never mentioned once** in 19 modules, despite being arguably the single most accessible feature for an elderly or low-typing-confidence learner. Mobile "photo of a menu/label/error message" use is never covered (overlaps the L5 gap). |
| L9 — Workflows & automation | **Covered weakly, and arguably correctly so** | `tool-categories.ts` describes an "automation-ai" category, but no lesson teaches it hands-on. Given the stated audience (elderly, non-technical), I would not flag this as a priority gap to fix — Zapier-style chaining is likely out of scope for this course's purpose. Recommend leaving as an optional add-on rather than treating it as a core gap. |
| L10 — Agents & what's next | **Covered inconsistently** | Module 19 covers agents in real depth, but only inside the enterprise Copilot context — there is no equivalent "what is a ChatGPT GPT / Claude Project / Gemini Gem, and what can these actually do today" lesson for the core three tools this course is nominally about. |
| Cross-cutting: verifying facts, privacy, bias, over-reliance, knowing when to use a human | **Covered well** | Module 6 + scenario-level `privacyWarning` fields + `verification-challenges.ts` together form a genuinely strong safety layer. This is one of the course's clear strengths — see `00-summary.md`. |

## Drop-off risk

Ranked by how likely a real beginner in the stated audience is to quit at that point:

1. **Immediately after Module 6** — the course tells them they're done. Highest-probability drop-off point in the entire course, and it's self-inflicted.
2. **Clicking into "Senior Living with AI" or "Small Business Operations"** from the module catalog — these are the titles most likely to attract this exact audience's first click after the core six, and both are a "🚧 Coming Soon" dead end. A curious learner who clicks one of these before finishing the core six may bounce off the whole product on the strength of that one bad click.
3. **The onboarding diagnostic quiz itself** — if the broken scenario-slug references (see below) cause a visibly broken or empty recommendation, this happens in the learner's very first 2 minutes on the product, before any trust has been built.
4. **Module 4 → 5 transition for a non-business learner** — a learner who came in via the "planning" or "learning" onboarding path (not "business") hits an entire 65-minute business module with no signposting that it's optional/skippable if irrelevant to them. Minor compared to 1–3, but real.
5. **Module 19 for anyone without a work M365 account** — low risk of drop-off *from the whole product*, since it's reachable only by continuing past Module 6, but a real risk of confusion/frustration for the few who do reach it without the right license.

## The broken onboarding routes (data-integrity bug, not a design opinion)

`src/data/onboarding.ts`'s `onboardingRoutes` array references these scenario slugs in `suggestedScenarios`:

```
cover-letter-draft, travel-itinerary, explain-complex, bedtime-story,
wedding-speech, first-prompt, explain-simple, summarize-article,
verification-check, tool-chooser-scenario, general-assistant
```

`src/data/scenarios.ts` contains exactly 14 scenarios, with these slugs:

```
email-grammar, event-planner, meal-planner-scenario, social-media-post,
customer-response, menu-designer, study-helper, resume-builder,
meeting-summary, form-helper, scam-detector, language-practice,
health-questions, farm-planning
```

**None of the eleven referenced slugs above exist.** Every onboarding route except the "business" one (which correctly references `social-media-post`, `customer-response`, `menu-designer`) recommends at least one nonexistent scenario. This is a straightforward data bug, verifiable by comparing the two files directly — it is not a matter of instructional-design opinion, and it should be the very first thing fixed, since `PRODUCT.md` names the onboarding quiz as the **primary CTA** of the entire site.
