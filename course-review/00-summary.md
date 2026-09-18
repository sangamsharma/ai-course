# Course Audit — Executive Summary

**Course:** AI for Everyone (working title per README; no on-site brand name found — see assumptions)
**Location audited:** `E:\ClaudeCode\AI-Agency-Root\workspaces\ai-course`
**Audited:** 2026-09-10

## Assumed context (fields not supplied — see full list at end of 00-summary)
- Why it exists: hybrid — free consumer product + paid B2B/team training (Stripe subscriptions, `for-business` page, `corporate.ts` all present).
- Target learner: per `PRODUCT.md` — elderly learners (60+, low tech experience) and non-technical adults (30–60) who've used ChatGPT once or twice. Equal split, both need jargon-free, practical, non-condescending teaching.
- Delivery: self-paced web, bite-sized lessons (8–12 min), reading + interactive exercises, no video.
- Tools: ChatGPT, Claude, Gemini (free tiers) for the core course; Microsoft 365 Copilot is bolted on as Module 19 for a different (corporate) audience — see Problem 3 below.

## Overall verdict

**The first six modules are genuinely good and should not be rewritten from scratch.** The voice is warm, the "4-Round Method" and prompt formula are sound teaching, and the safety module (Module 6) is one of the better beginner AI-safety treatments I've reviewed. But the course as a whole is not one coherent product — it's the good six-module course it was designed to be, plus thirteen modules bolted on afterward without anyone checking them against the original design, the original audience, or each other. The result actively misleads learners about how much course there is, sends them into dead ends, and loses its own thread on who it's for.

This is fixable without a rewrite. Most of the fix is subtraction, reordering, and closing loops — not new writing.

## Top 5 problems (in order of severity)

1. **The course tells learners they're finished at Module 6 — then has 13 more modules.** `module-06-be-smart-safe.ts` lesson `m6-habits` literally says *"Congratulations! You've completed the full course. Let's end with 10 simple habits..."* and the badge copy reinforces it ("You Did It! 🎉 ... Welcome to the AI-powered future"). Modules 7–19 exist in the codebase and are linked from `/modules`, but the content itself tells a completing learner there's nothing left. This is the single biggest reason a real learner would never reach Module 19 (the module the business is presumably paying to have built) or the genuinely useful Advanced Prompting module (7).

2. **Six of nineteen modules (32%) have zero content.** Modules 13–18 (Small Business Operations, Digital Literacy & AI, Civic Participation, Education & Tutoring, Legal Document Basics, Senior Living with AI) are literally `content: [], exercises: [], keyTakeaways: []` with a single "Coming Soon" lesson. Worse: **"Senior Living with AI" and "Small Business Operations" are the two titles most likely to attract clicks from this exact audience** (per `PRODUCT.md`: elderly learners, small-business owners), and both are dead ends showing a 🚧 emoji. `README.md` advertises "19 Course Modules" as a feature — a third of that count doesn't exist. If this course is sold or used as a lead magnet, this is a false-advertising problem, not just a content gap.

3. **The course doesn't know who it's for by the end.** Modules 1–18 consistently target an individual, non-technical, free-tier user — exactly `PRODUCT.md`'s stated audience. Module 19 (Microsoft 365 Copilot) assumes the opposite: a corporate employee with an IT department, an employer-provisioned $30/user/month license, "Agent Builder," and "shield icons." Nothing in Modules 1–18 or the onboarding flow prepares anyone for this, and nothing tells a learner Module 19 requires a work account they may not have. It reads like a different product's content was appended to this one.

4. **The onboarding "diagnostic quiz" — the site's stated #1 conversion action — recommends content that doesn't exist.** `src/data/onboarding.ts` routes learners to scenario slugs like `cover-letter-draft`, `travel-itinerary`, `bedtime-story`, `wedding-speech`, `first-prompt`, `verification-check`, and others. None of these exist in `src/data/scenarios.ts` (14 scenarios, none with those slugs). A learner's very first personalized recommendation is broken.

5. **Five topics are taught twice with little or no added depth**, inflating the module count without adding value: meal planning (Module 3 vs Module 8), travel itineraries (Module 3 vs Module 9), budgeting (Module 3 vs Module 10), resume writing (Module 5 vs Module 11), and creative writing (Module 5 vs Module 12). In each case the prompt templates and even example phrasing are near-identical. This is consistent with Modules 7–12 having been generated in a separate pass without cross-checking Modules 1–6.

## Top 5 strengths (keep these)

1. **Module 1's "4-Round Method"** (basic ask → add context → fix tone → polish) is a genuinely good, memorable, transferable technique — better than most published beginner prompting guides. Keep it as the spine of the whole course.
2. **Module 6's safety content** (the "Public Library Rule" for privacy, the 3-step fact-check system, hallucination-spotting, ethics) is clear, non-alarmist, and correctly risk-graded (low-stakes vs. medical/legal/financial). This is the module to be proudest of.
3. **`scenarios.ts`** — the bad-prompt/better-prompt/verification-checklist/privacy-warning/transfer-template structure per scenario is an excellent instructional pattern, better than the exercise structure used inside the lessons themselves. It just isn't reused consistently.
4. **`glossary.ts`** — plain-language definitions with analogies for every piece of jargon actually used in Modules 1–12. This is exactly the "define it once, simply" discipline the brand voice calls for.
5. **Brand voice and tone** in Modules 1–6 and 7–12 is consistently warm, non-condescending, and practical — it matches `PRODUCT.md`'s "patient friend, not a lecture hall" positioning almost every time (Module 19 is the exception).

## Recommended next 3 actions

1. **Fix the "you're done" bug and the dead-end stubs before anything else.** Remove the "Congratulations, you've completed the full course" copy from Module 6, and either hide Modules 13–18 from the public catalog or mark them honestly as "not yet available" without a clickable dead end. This is a few hours of work with outsized impact on completion and trust.
2. **Decide, explicitly, whether Microsoft 365 Copilot is part of this course or a separate product.** If it's a B2B upsell, gate it behind a "does your employer give you Copilot?" question and keep it out of the individual-learner path entirely, including out of the "19 modules" headline count.
3. **Run the redesign in `04-new-curriculum.md`**, which reorders existing good material (moves safety earlier, moves Advanced Prompting to right after core prompting, merges the five duplicate-topic pairs) and fills the two real content gaps found in Phase 2: working with your own files/photos (Level 5) and "make AI remember you" — saved instructions/Projects/Gems (Level 6). Almost none of this requires new content for Levels 1–4 and 7–9; it requires reordering and trimming.

## Assumptions made (context fields left blank by the user)
- **Course name/brand:** No name is shown in the UI copy I read (`page.tsx`, layout) beyond generic course language; README calls it "AI for Everyone." I use that name in this report but flag it as unconfirmed.
- **"Anything already suspected wrong":** Not provided — I found the problems above from the files directly, with no prior hint from the user about what to look for.
- **Delivery cadence:** Assumed self-paced (no evidence of a fixed daily-release schedule in the code).

## Questions whose answers would change my recommendations
1. Is Microsoft 365 Copilot (Module 19) meant to be part of the same course, or a separate paid B2B product? This determines whether I recommend cutting it from the main catalog or just re-labeling it.
2. Are Modules 13–18 actually planned to be written, or were they scaffolded and abandoned? If they're truly coming, hiding them is enough; if not, they should be deleted, not hidden.
3. Is there a hard requirement to keep exactly "19 modules" for marketing reasons? That would change my recommendation to merge duplicate topics.
4. Does the onboarding wizard actually get tested end-to-end anywhere (e.g., Playwright)? The broken scenario-slug references suggest not, and that's worth confirming before the fix ships.
