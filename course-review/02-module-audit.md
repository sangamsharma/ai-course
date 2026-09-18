# Phase 1 — Module-by-Module Audit

**Scoring key:** 1 = fails the criterion, 3 = adequate with real gaps, 5 = excellent, nothing better needed. Every score cites the file/section that justifies it.

**Note on depth:** Modules 1–6 (the original core course) and Module 19 (the newest, most divergent module) get full 8-criterion scoring with evidence, because they carry the most weight in the redesign decision. Modules 7–12 (later additions, largely single-topic extensions) get a tighter pass focused on what's new versus what duplicates. Modules 13–18 contain **zero lesson content** (`content: [], exercises: [], keyTakeaways: []` in every file) — scoring them on accessibility, hands-on ratio, etc. would mean inventing evidence that doesn't exist, so they are recorded once, plainly, as unscoreable.

---

## Module 1 — AI Made Simple

| Criterion | Score | Evidence |
|---|---|---|
| Beginner accessibility | 5 | `what-is-ai` lesson opens "forget the sci-fi movies," defines LLM inline the first time it's used ("called 'Large Language Models' or LLMs"). No unexplained jargon anywhere in the module. |
| Practicality | 5 | Lesson 5 (`first-real-task`) is a complete, real task (a BBQ invite email) worked through 4 times, not an abstract exercise. |
| Realism & accuracy | 4 | Setup steps for chat.openai.com/claude.ai/gemini.google.com are plausible and current in spirit, but "GPT-4o mini" (line 241) and the specific per-tool feature claims will age — see `06-verify-list.md`. Docked one point for currency risk, not present-day wrongness. |
| Hands-on ratio | 3 | 6 lessons, 8 exercises total, but only 2 of those 8 are prompt-playgrounds requiring the learner to write and actually try a prompt (`your-first-prompt`, `first-real-task`); the other 6 are single-question multiple-choice quizzes that test reading comprehension, not doing. That's roughly one genuine "do this" moment per three lessons — below the 50% target. |
| Time to first win | 2 | The first prompt-playground with a real, keepable result is Lesson 5 (`first-real-task`, order 5, estimatedMinutes 12), preceded by four lessons totaling 8+10+10+7 = 35 minutes. A learner following the course sequentially does not reach a real "I made something I'll keep" moment until roughly the 35–40 minute mark — well past the 15-minute target. Lesson 3's prompt-playground (order 3, ~28 min in) is closer but its stated task ("explain your job/hobby to a 10-year-old") is a demo, not something most learners will actually use afterward. |
| Clarity of instructions | 5 | Lesson 5's four rounds give literal copy-pasteable prompt text at every step ("Open your AI tool and type: ..."), with an explicit success signal each round ("Compare this result with Round 1. Notice..."). A learner alone could not get lost. |
| Safe & responsible use | 4 | `setting-up-accounts` includes a clear "Public Library Rule" precursor warning about not sharing personal info. Good, but it's the only safety mention in the whole module — the deeper safety content is deferred entirely to Module 6, five modules later (see `03-flow-audit.md`). |
| Assessment | 3 | Every lesson ends in a quiz, but quizzes check recall of the lesson text, not whether the learner's own prompt worked. `sampleResponse` fields exist as a reference but there's no checklist step asking the learner to compare their own output against it. |

**Genuinely good — keep:** The 4-Round Method (`first-real-task`) is the best single piece of instructional design in the whole course. The "10 Ways to Use It Today" lesson (`ai-daily-life`) is a strong, practical closer with ready-to-use prompts for each.

**Top 3 problems:**
1. First genuine "keep this" win lands at ~35 minutes, not inside 15.
2. Safety content (what not to share) is a single line here, then absent until Module 6 — a learner doing real tasks in Modules 1–5 has no fact-checking or privacy framework yet.
3. Tool setup (`setting-up-accounts`) asks a beginner to create *three* separate accounts before they've done anything — for a nervous first-timer this is more friction than value; most people only need one tool to start.

**Time-sensitive claims to re-verify:** GPT-4o mini as ChatGPT's free-tier model; "Free tier gives you plenty of daily usage" for Claude (no specific limit stated, but Claude's free limits have changed repeatedly); Gemini "free with any Google account" framing.

---

## Module 2 — The Art of Asking

| Criterion | Score | Evidence |
|---|---|---|
| Beginner accessibility | 4 | "System prompts" is introduced in `be-specific` ("Level 2 of prompt mastery... creating 'system prompts'") without a plain-English definition or a glossary entry — `glossary.ts` has no "system prompt" term. Everything else in the module is well-explained. |
| Practicality | 5 | Every technique (formula, persona, specificity, templates) is taught via a real anchor task (email, event, social post) — no abstract theory-only content. |
| Realism & accuracy | 5 | Nothing tool-specific or version-specific is claimed; the formula-based content will not age. |
| Hands-on ratio | 4 | 5 lessons, includes a before/after exercise, a fill-in-blank, two prompt-playgrounds, and one quiz — the best ratio of doing-to-reading in the course. |
| Time to first win | n/a (mid-course module) | Not applicable in isolation — see flow audit for its position. |
| Clarity of instructions | 5 | `ai-pipeline` lesson's worked example (customer appreciation event, all 7 steps shown) is a model of clear instruction. |
| Safe & responsible use | 3 | Only mentioned as a one-line reminder in `persona-pattern` ("Always verify important information"). No new ground covered; relies entirely on Module 6, which comes 4 modules later. |
| Assessment | 3 | Same recall-quiz pattern as Module 1; the fill-in-blank exercise (`be-specific`) is a better assessment because it requires constructing something, not just recognizing an answer. |

**Genuinely good — keep:** The 5-part formula (Role/Task/Context/Constraints/Format) and the Persona Pattern are clear, well-taught, and reused correctly by later modules (Module 7 explicitly says "You've learned basic personas (Module 2). Now take it further").

**Top 3 problems:**
1. The 7-Step Pipeline (`ai-pipeline`) is a professional-workflow concept (define → decompose → generate → critique → iterate → assemble → automate) taught at the same difficulty level as basic formula-building — it's a genuine difficulty spike inside a beginner module (see difficulty curve in `03-flow-audit.md`).
2. "System prompt" terminology introduced without definition.
3. No exercise asks the learner to actually save a template somewhere (a notes app, a doc) even though the module repeatedly tells them to — the habit is described, never practiced.

**Time-sensitive claims:** None specific to this module.

---

## Module 3 — AI for Everyday Tasks

| Criterion | Score | Evidence |
|---|---|---|
| Beginner accessibility | 5 | No unexplained jargon; every technique tied to a plain scenario (landlord email, dinner ideas, trip to Kyoto). |
| Practicality | 5 | This is the most practicality-dense module in the course — six lessons, six distinct daily tasks, all directly matching `PRODUCT.md`'s "writing, planning, learning, organizing" job-to-be-done. |
| Realism & accuracy | 3 | `personal-finance` lesson's advice is sound and appropriately hedged, but `summarize-and-translate` and `travel-planning` both claim "Claude can handle up to 200,000 words at once" as a settled fact repeated verbatim in two places (also in `tools.ts`) — a specific, checkable, version-dependent number that needs re-verification before publishing (see verify list). |
| Hands-on ratio | 3 | 6 lessons, but 3 of the 6 (summarize/translate, planning, meal planning in part) end in only a quiz — no prompt-playground — meaning the learner reads a template and multiple-choices their way through rather than typing anything. |
| Time to first win | n/a | Mid-course. |
| Clarity of instructions | 5 | `writing-emails`'s before/after (rough draft → AI-polished version) is an excellent success example a learner can pattern-match against. |
| Safe & responsible use | 4 | `personal-finance` has a strong, specific warning ("NEVER share actual account numbers..."). Good risk-matching to the specific task rather than a generic warning. |
| Assessment | 3 | Standard recall quizzes; no lesson asks the learner to run their own version through a checklist. |

**Genuinely good — keep:** `writing-emails` (the tone-matching trick is a genuinely useful, non-obvious tip) and the finance safety warning are strong as-is.

**Top 3 problems:**
1. Half the lessons have no hands-on prompt exercise, only a quiz.
2. The "200,000 words" Claude claim is stated as settled fact in two lessons plus `tools.ts` — if it's wrong or outdated, the error propagates three places at once.
3. This module's content (meal planning, travel, budgeting) is substantially re-taught in Modules 8, 9, and 10 later in the course — see redundancy findings in `03-flow-audit.md`.

**Time-sensitive claims:** Claude's context-window size ("200,000 words"); "GPT-4o mini" reference pattern consistency with Module 1.

---

## Module 4 — AI for Your Business

| Criterion | Score | Evidence |
|---|---|---|
| Beginner accessibility | 5 | Written for a non-marketer small-business owner throughout; no jargon beyond what's defined ("CTA" is used once without expansion in the social-media prompt template, a minor miss). |
| Practicality | 5 | Every lesson anchors to a believable small business (bakery, florist, salon, pizzeria) with specific, usable numbers. |
| Realism & accuracy | 4 | Sound overall; the Canva-AI workflow tip (`ai-for-visuals`) names real, currently-existing tools appropriately without overclaiming what they do. |
| Hands-on ratio | 3 | 6 lessons, only 2 prompt-playgrounds (social media, customer response) — proposals, marketing strategy, and visuals end in quiz or fill-in-blank only. |
| Time to first win | n/a | Mid-course. |
| Clarity of instructions | 4 | Templates are copy-pasteable and clear; the "Guest List Organizer Prompt" example is good but never shows a worked sample output the way other lessons do. |
| Safe & responsible use | 3 | No business-specific privacy guidance here (e.g., not sharing supplier pricing or contracts) even though this is exactly the module where a small-business owner is most likely to paste something sensitive. Module 6 covers this generically, later, not here. |
| Assessment | 3 | Standard recall quizzes. |

**Genuinely good — keep:** The real-world examples (florist post that got 3x engagement, salon's month-long plan) are specific and credible rather than generic marketing hype — this matches the brand's "no hype" positioning well.

**Top 3 problems:**
1. No task-specific privacy guidance despite being the highest-privacy-risk module (proposals, quotes, customer data) in the course.
2. Proposals and marketing-strategy lessons have no hands-on exercise, only recall checks.
3. This module and Module 11 (Job Search) and Module 13 (stub, "Small Business Operations") clearly should live under one umbrella but currently don't reference each other at all.

**Time-sensitive claims:** None beyond general tool-capability claims already logged.

---

## Module 5 — AI for Personal Documents

| Criterion | Score | Evidence |
|---|---|---|
| Beginner accessibility | 5 | Clear throughout; "STAR method" isn't used here (that appears in Module 11) so no gap. |
| Practicality | 5 | Resume, formal letters, creative writing, and Feynman-technique learning are all things this exact audience does. |
| Realism & accuracy | 5 | The "Critical Reminder" in `resume-writing` (AI can invent achievements you never had — fact-check everything) is exactly the right caution at exactly the right place. |
| Hands-on ratio | 4 | 4 lessons, 3 prompt-playgrounds — the best doing-ratio outside Module 2. |
| Time to first win | n/a | Mid-course. |
| Clarity of instructions | 5 | The wedding-speech and bedtime-story worked examples are vivid enough that a learner immediately understands what "good" looks like. |
| Safe & responsible use | 5 | `letters-and-forms` gives a specific, correctly-scoped privacy tip (describe categories, not real SSN/bank data); `resume-writing` gives a specific fact-check instruction. Best-integrated safety-in-context of any topic module. |
| Assessment | 3 | Standard recall quizzes; the Feynman-technique lesson (`learning-and-research`) is the one place in the whole course that teaches a genuine two-way, iterative check-your-understanding method, but it's taught only in prose — no exercise actually has the learner practice explaining something back. |

**Genuinely good — keep:** This is the strongest single module in the course on the safety-in-context and clarity criteria. The Feynman Technique framing is a good, underused idea that deserves to be an exercise, not just a paragraph.

**Top 3 problems:**
1. Feynman Technique is described but never practiced — a missed opportunity for the single most effective exercise type in the module.
2. This module's resume content and creative-writing content are re-taught nearly identically in Modules 11 and 12.
3. No lesson here (or anywhere in the course) teaches uploading an actual document (a real letter, form, or PDF) — everything is "describe your situation," never "attach the file and ask about it." See Gap Analysis in `03-flow-audit.md`.

**Time-sensitive claims:** None specific.

---

## Module 6 — Be Smart, Stay Safe

| Criterion | Score | Evidence |
|---|---|---|
| Beginner accessibility | 5 | "Hallucination" is defined plainly and memorably ("AI sometimes 'hallucinates'... this isn't because AI is lying") before being used. |
| Practicality | 5 | The 3-step fact-check system and the "Public Library Rule" are both immediately usable heuristics, not abstract ethics. |
| Realism & accuracy | 5 | Correctly risk-grades verification effort (low/medium/high stakes) rather than giving one-size-fits-all advice — this is more nuanced than most public AI-safety guidance. |
| Hands-on ratio | 2 | 5 lessons, only one exercise requires construction (the `m6-fib-privacy` fill-in-blank rewriting an unsafe prompt into a safe one) — the rest are quizzes. For a module about behavior change, this is too passive; there's no exercise where the learner actually catches a hallucination in a realistic AI response (that exists — in `verification-challenges.ts` — but it's a separate, unlinked feature, not part of this module). |
| Time to first win | n/a | Late-course module. |
| Clarity of instructions | 5 | Every rule comes with a concrete example ("Instead of 'My client John Smith at Acme Corp is suing me,' say..."). |
| Safe & responsible use | 5 | This is the safety module — by definition it should score highest here, and it earns it. |
| Assessment | 2 | No practical check that the learner can actually spot a hallucination or unsafe prompt in a new example — `m6-q2-hallucination` and similar are all recall quizzes about the concept, not application to a fresh case. |

**Genuinely good — keep:** The "Public Library Rule" and the 3-step fact-check system (Sense Check → Source Check → Second Opinion) are the two best mental models in the entire course. Keep both verbatim.

**Top 3 problems:**
1. **`m6-habits`'s content says "Congratulations! You've completed the full course"** and the tip-box is titled "You Did It! 🎉" — this is a critical bug, not a style note. It directly contradicts the existence of Modules 7–19 and is the single highest-impact fix in this whole audit (see `00-summary.md` Problem 1).
2. Positioned as the *last* module, meaning every real task practiced in Modules 1–5 (resumes, business proposals, budgets, customer emails) happens before the learner has the fact-checking and privacy framework this module teaches — backwards from a safety-first design.
3. Weakest hands-on ratio in the core six modules for a module whose entire purpose is behavior change, not information recall.

**Time-sensitive claims:** None specific — this module is written to age well (no version numbers, no pricing).

---

## Modules 7–12 — Condensed audit (later additions)

These six modules are competently written in the same voice as Modules 1–6, with correct disclaimers where needed (medical, legal, financial). The audit below focuses on what differs from the core six, since the base criteria (accessibility, clarity of instructions, tone) are consistently met at the same level as Modules 1–5.

**Module 7 — Advanced Prompting Techniques.** Genuinely new, valuable content (chaining, few-shot, chain-of-thought, expert-panel personas) not taught elsewhere. **Problem:** difficulty jumps sharply above every module since Module 2 (see difficulty curve, `03-flow-audit.md`) and it sits *after* Module 6's "course complete" messaging, so almost no learner will reach it. Hands-on ratio is moderate (4 lessons, 1 quiz + 1 fill-in-blank + 1 prompt-playground + 1 quiz).

**Module 8 — AI for Health & Wellness.** `meal-planning` (Lesson 1) duplicates Module 3's `recipes-and-shopping` almost line-for-line in structure (same prompt template shape, same "shopping list by aisle" phrasing) — its only addition is a medical disclaimer, which could have been added to Module 3 instead. `doctor-visit-prep` and `fitness-routines` are genuinely new and appropriately cautious (both explicitly say "consult a doctor," "AI is NOT a doctor").

**Module 9 — Travel Planning with AI.** `trip-itineraries` (Lesson 1) duplicates Module 3's `travel-planning` lesson closely (same prompt template structure, same "verify before you go" tip, AUD currency swapped in). `packing-lists` and `language-help` are genuinely new and useful, and not taught anywhere else.

**Module 10 — Personal Finance Assistant.** `budgeting` (Lesson 1) duplicates Module 3's `personal-finance` lesson almost exactly (same 50/30/20-style framing, same "never share account numbers" warning, same rounded-numbers advice). `comparing-products` and `financial-goals` are genuinely new.

**Module 11 — Job Search Accelerator.** `resumes-cvs` (Lesson 1) duplicates Module 5's `resume-writing` closely (same STAR-adjacent bullet-improvement pattern, same "anonymize before pasting" warning — though Module 11's anonymization warning is *more specific and better* than Module 5's, and should be the version kept). `cover-letters` overlaps Module 5's cover-letter prompt template. `interview-prep`, including the AI-roleplays-the-interviewer idea, is genuinely new and one of the better exercise concepts in the later modules.

**Module 12 — Creative Projects & Hobbies.** `creative-writing` (Lesson 1) duplicates Module 5's `creative-writing` lesson (same "brainstorming partner, not replacement for your voice" framing). `speeches-toasts` and `creative-hobbies` are genuinely new, though `creative-hobbies`'s agriculture/gardening content overlaps conceptually with the standalone `farm-planning` scenario in `scenarios.ts` without cross-referencing it.

**Pattern across all six:** each module's *first* lesson tends to be the duplicate one, and the later lessons in each module tend to be the genuinely new material. This is consistent with each module being built as "take an existing topic, stretch it into 3 lessons by adding two new angles" rather than being planned as a non-overlapping curriculum from the start.

---

## Modules 13–18 — Not scoreable

`module-13-small-business-ops.ts` through `module-18-senior-living.ts` each contain exactly one lesson with `content: []`, `exercises: []`, `keyTakeaways: []`, and a `subtitle: "Coming Soon"`. There is nothing to audit against any of the eight criteria — beginner accessibility, practicality, etc. all require content to exist first. Recorded here as: **0/8 criteria measurable, 0 minutes of real content despite `estimatedMinutes: 30` being set on each module object** (this number is used in `courseStats` in a way that is *correctly excluded* from the public lesson count — see `01-inventory.md` — but the module-level `estimatedMinutes` still overstates the catalog).

The only defensible audit note is a **process** one: these titles (especially Small Business Operations and Senior Living with AI) target this course's stated core audience more directly than most of Modules 7–12 do, which makes their emptiness a worse loss than if a peripheral topic had been left unbuilt.

---

## Module 19 — Microsoft 365 Copilot

| Criterion | Score | Evidence |
|---|---|---|
| Beginner accessibility | 2 | `subscription-setup` opens by asking the learner to distinguish "Copilot Chat (Baseline)" from "Microsoft 365 Copilot (Full)" and check for a "shield icon" — this is IT-department vocabulary, not "patient friend" vocabulary. None of these terms (Agent, Notebook, Work/Web toggle, Pages, shield icon) are in `glossary.ts`. |
| Practicality | 3 | Practical *if* the learner has a work M365 Copilot seat; the module never asks whether they do. For a learner without one, none of it is actionable — contrast with every other module, where the free tier is enough to do everything taught. |
| Realism & accuracy | 2 | Highly specific, fast-changing claims stated as settled fact: "$30 USD/user/month," specific agent names ("Career Coach," "Researcher," "Analyst," "Facilitator," "Visual Creator"), specific UI navigation ("Click 'All Agents' in the left sidebar"). Microsoft's Copilot packaging and UI have changed multiple times in the product's history; every one of these needs re-verification before publishing (see `06-verify-list.md`). |
| Hands-on ratio | 3 | 5 lessons, 3 prompt-playgrounds — reasonable ratio, but the "hands-on" exercises assume access to a live M365 tenant, which most individual learners will not have to actually try them on. |
| Time to first win | n/a | Assumes a licensed work account exists before lesson 1 even begins — there is no "win" possible without that precondition being met, and the module never checks for it. |
| Clarity of instructions | 4 | Instructions are clear and well-structured *for someone with the right license* — e.g., the tier-checking steps in `subscription-setup` are genuinely useful for someone confused about what they have. |
| Safe & responsible use | 3 | `outlook-teams`'s "Review AI-generated emails before sending — you stay in control" is good, consistent with the rest of the course's philosophy. No content here about work-data privacy risk, which is arguably the single biggest safety issue in an enterprise AI context (what happens when Copilot surfaces something from a colleague's private files). |
| Assessment | 3 | Standard recall quizzes, same pattern as the rest of the course. |

**Genuinely good — keep (if kept as a separate track):** The tier-explanation content (`subscription-setup`) is a real service to a confused employee, and the Notebooks-for-client-research example is a concrete, well-explained use case.

**Top 3 problems:**
1. Wrong audience for this course as defined in `PRODUCT.md` — assumes employer-provisioned licensing, IT support, and enterprise vocabulary that contradicts "elderly learners" and "non-technical adults 30-60" with no mention of a workplace M365 deployment.
2. Breaks brand voice — "shield icon," "Agent Builder," "SaaS subscription" are precisely the "cold enterprise energy" and "platform speak" `PRODUCT.md`'s anti-references explicitly rule out.
3. High density of specific, fast-changing product claims (pricing, agent names, UI navigation) with no in-course caveat that these may have changed — the highest fact-check burden per minute of any module in the course.

**Time-sensitive claims:** Nearly the entire module — see `06-verify-list.md` for the full itemized list.
