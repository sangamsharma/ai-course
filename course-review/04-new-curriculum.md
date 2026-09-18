# Phase 3 — Redesign

## 3a. Decision per existing module

| # | Module | Decision | Reason (tied to audit evidence) |
|---|---|---|---|
| 1 | AI Made Simple | **Revise** | Content is excellent; needs restructuring so the 4-Round Method (currently Lesson 5) delivers a real win inside 15 minutes, and account setup is trimmed to one tool instead of three. See `02-module-audit.md` Module 1, "Time to first win." |
| 2 | The Art of Asking | **Split** | Lessons 1–4 (formula, persona, specificity, templates) keep their place early. Lesson 5 (7-Step Pipeline) is too advanced for this position — move it to the new advanced-prompting level. |
| 3 | AI for Everyday Tasks | **Revise + Merge** | Core content is strong (`02-module-audit.md`: "most practicality-dense module"). Merge with the non-duplicate lessons from Modules 8/9/10 rather than leaving three modules re-teaching the same base task. |
| 4 | AI for Your Business | **Keep, with a privacy addition** | Content and examples are strong; add a business-specific privacy note (currently missing per Module 4 audit). Merge with Module 11's non-duplicate content. |
| 5 | AI for Personal Documents | **Revise + Merge** | Strongest safety-in-context module outside Module 6; keep as-is except merge with Modules 11/12's non-duplicate lessons and turn the Feynman Technique into an actual exercise instead of a paragraph. |
| 6 | Be Smart, Stay Safe | **Revise + Move earlier** | Content is the best in the course, but (a) the "you've completed the course" bug must be removed immediately regardless of any other redesign work, and (b) it should not be the *last* thing a learner sees before doing five modules of real tasks — move to right after Module 1. |
| 7 | Advanced Prompting Techniques | **Move, keep as-is** | Genuinely good, new content; the problem is entirely positional (see difficulty-curve finding), not quality. Move to a late "level up" track, explicitly optional/advanced rather than sequential. |
| 8 | AI for Health & Wellness | **Split** | Cut `meal-planning` (duplicate of Module 3); keep `doctor-visit-prep` and `fitness-routines` as an optional specialist add-on. |
| 9 | Travel Planning with AI | **Split** | Cut `trip-itineraries` (duplicate of Module 3); keep `packing-lists` and `language-help`, merged into the everyday-tasks travel content. |
| 10 | Personal Finance Assistant | **Split** | Cut `budgeting` (duplicate of Module 3); keep `comparing-products` and `financial-goals`, merged into the everyday-tasks finance content. |
| 11 | Job Search Accelerator | **Split + Merge** | Cut `resumes-cvs` and `cover-letters` (duplicates of Module 5, though port Module 11's better anonymization wording back); keep `interview-prep` (genuinely good, novel roleplay idea) merged into the new Work & Business level. |
| 12 | Creative Projects & Hobbies | **Split + Merge** | Cut `creative-writing` (duplicate of Module 5); keep `speeches-toasts` and `creative-hobbies`, merged into the new Creative & Multimodal level. |
| 13 | Small Business Operations | **Cut from catalog until written** | Zero content exists. Do not leave a clickable dead end live for this exact audience — either write it for real or remove the entry. |
| 14 | Digital Literacy & AI | **Cut from catalog until written** | Same as above. |
| 15 | Civic Participation | **Cut from catalog until written** | Same as above. |
| 16 | Education & Tutoring | **Cut from catalog until written** | Same as above; note real overlap with Module 5's `learning-and-research` — if written later, build on that rather than duplicating it. |
| 17 | Legal Document Basics | **Cut from catalog until written** | Same as above. |
| 18 | Senior Living with AI | **Cut from catalog until written** | Same as above — and the highest-priority one to actually write, given this course's stated audience explicitly includes elderly learners (`PRODUCT.md`). |
| 19 | Microsoft 365 Copilot | **Move to a separate track, gated** | Content is competent but built for a different learner and breaks brand voice (`02-module-audit.md`). Keep it, but move it out of the main numbered path entirely, behind a "does your employer give you Microsoft 365 Copilot?" gate, and out of the headline "N modules" count for the individual-learner product. |

## 3b. New curriculum structure

Nine sequential **Levels** (replacing the old flat 19-module list) plus a small set of **Specialist Tracks** — optional, non-sequential, reusing the genuinely new content that survived the cuts above. This keeps essentially all of the good material and removes essentially none of it; the changes are reordering, merging, trimming duplicates, and adding two new levels to close the two real content gaps found in Phase 2 (working with your own files, and saved instructions/Projects/Gems).

Each entry below is a **Level** (equivalent to the old "module" grain). Sub-lessons within each Level are listed under "Step-by-step exercise" as the level's lesson sequence; existing lesson content is reused wherever marked **Reused**.

---

### Level 1 — Your First Win With AI
**Status:** Revised (from Module 1)
**Tool-agnostic:** Yes — learner picks one of ChatGPT / Claude / Gemini and uses it throughout.
**Learning outcome:** By the end, you can open an AI chat tool, ask it something, tell it what to change, and walk away with one real result you'll actually use.
**Prerequisites:** None.
**Estimated time:** 35 minutes (down from 55 — trimmed to fit "win in 15 minutes" plus a short second half).
**Real-life scenario:** You need to write an email or message today and you're not sure how to start it.
**Step-by-step exercise:**
1. What AI chat actually is, in one page (**Reused**, `what-is-ai`, trimmed).
2. Pick ONE tool and open it — not three (**Revised** from `meet-the-tools` + `setting-up-accounts`: present all three briefly, but instruct the learner to choose one now and try the others later).
3. Your first real win: the 4-Round Method, applied to something you actually need this week (**Reused and promoted**, from `first-real-task` — moved up so it lands by minute 15, not minute 35).
4. Ten everyday uses to try this week — pick one more (**Reused**, `ai-daily-life`).
**Starter prompt:** `Write a [type] message to [who]. It's about [what happened]. I want it to sound [tone]. Keep it under [X] words.`
**Make it your own:** `Write a ____ message to ____. It's about ____. I want it to sound ____. Keep it under ____ words.`
**What good output looks like:** You read it out loud and it sounds like something you'd actually send — not generic, not robotic.
**Common mistakes:** Accepting the first draft without asking for a single change (the #1 beginner mistake, per the existing `m1-q-rounds` quiz explanation — keep this framing, it's good).
**Level-up challenge:** Do the same task in a second tool and compare which result you prefer.
**Quick check:** Did you produce one thing today you will actually use, not just a practice example?

---

### Level 2 — Stay Safe, Spot Mistakes
**Status:** Moved and revised (from Module 6, minus `good-ai-habits`)
**Tool-agnostic:** Yes
**Learning outcome:** By the end, you can describe what's safe to share with AI, catch a made-up "fact," and know when a task is too high-stakes for AI alone.
**Prerequisites:** Level 1.
**Estimated time:** 30 minutes.
**Real-life scenario:** You want to ask AI about a bill, a health worry, or a legal letter, and you're not sure what's safe to type.
**Step-by-step exercise:**
1. What not to share — the Public Library Rule (**Reused**, `privacy-basics`).
2. Spotting AI mistakes/hallucinations (**Reused**, `spotting-mistakes`).
3. The 3-step fact-check: Sense Check → Source Check → Second Opinion (**Reused**, `fact-checking`).
4. Using AI honestly (**Reused**, `ethical-use`).
5. **New exercise:** apply the 3-step check to one of the `verification-challenges.ts` examples, live — this closes the "Assessment" gap found in the Module 6 audit (currently the challenges exist but aren't linked to the lesson).
**Starter prompt:** `I'm going to share something an AI told me. Point out anything that sounds too specific to be true, or that needs a source: [paste text]`
**Make it your own:** `I'm going to share ____. Point out anything that ____.`
**What good output looks like:** You can name at least one specific reason to doubt a claim (missing source, oddly specific number, quote you can't find elsewhere).
**Common mistakes:** Trusting a confident tone as a sign of accuracy — call this out explicitly, it's the core misconception this level fixes.
**Level-up challenge:** Take a real AI answer you got in Level 1 and run the 3-step check on it.
**Quick check:** Given a new (unfamiliar) AI response, can you name one red flag in under a minute?
**Note:** `good-ai-habits`'s content is not deleted — its 10 habits become a single reusable checklist shown at the end of every Level's capstone from here on, rather than a one-off lesson. Remove the "Congratulations, you've completed the full course" copy entirely; replace with "You've finished Level 2 of 9."

---

### Level 3 — Ask Better, Every Time
**Status:** Reused (from Module 2, minus the 7-Step Pipeline)
**Tool-agnostic:** Yes
**Learning outcome:** By the end, you can write a prompt using Role + Task + Context + Constraints + Format, and you have at least one saved template you'll reuse.
**Prerequisites:** Levels 1–2.
**Estimated time:** 45 minutes.
**Real-life scenario:** You keep needing similar things from AI (emails, posts, plans) and want to stop starting from scratch every time.
**Step-by-step exercise:**
1. Good vs bad prompts, the 5-part formula (**Reused**, `good-vs-bad-prompts`).
2. The Persona Pattern (**Reused**, `persona-pattern`).
3. Be specific (**Reused**, `be-specific` — define "system prompt" plainly the first time it's used, or drop the term and just say "template," closing the Module 2 accessibility gap).
4. Build your own templates (**Reused**, `prompt-templates` — add a "save it now" step: actually write the template into a notes app during the lesson, not just read about doing so).
**Starter prompt:** `Act as a [role]. Help me [task]. Context: [situation]. Requirements: [length, tone, format].`
**Make it your own:** `Act as a ____. Help me ____. Context: ____. Requirements: ____.`
**What good output looks like:** The response sounds like it came from the specific role you named, not a generic assistant.
**Common mistakes:** Vague requests ("write something about my business") — show the before/after from `m2-ba-bad-good` as the model example.
**Level-up challenge:** Build a template for the task you do most often, and use it three times this week.
**Quick check:** Can you name the 5 parts of the formula from memory, and use at least 3 of them in a real prompt?

---

### Level 4 — Everyday Writing, Planning & Money
**Status:** Merged (Module 3 core + non-duplicate lessons from Modules 9 and 10)
**Tool-agnostic:** Yes
**Learning outcome:** By the end, you can use AI for the five things you're most likely to need this month: emails, summaries, event/trip planning, meal planning, and a simple budget.
**Prerequisites:** Levels 1–3.
**Estimated time:** 70 minutes.
**Real-life scenario:** Any real task on your to-do list this week — an email, a trip, a dinner plan, a budget question.
**Step-by-step exercise:**
1. Emails and messages that sound like you (**Reused**, `writing-emails`).
2. Summarize and translate anything (**Reused**, `summarize-and-translate`).
3. Plan any event or list, including packing lists (**Reused + Merged**, `planning-events` + `packing-lists` from old Module 9).
4. Meal plans and shopping lists (**Reused**, `recipes-and-shopping` — with the medical disclaimer ported in from old Module 8's cut lesson).
5. A simple budget in plain English, plus comparing financial products and setting goals (**Reused + Merged**, `personal-finance` + `comparing-products` + `financial-goals` from old Module 10).
**Starter prompt:** `Help me plan/summarize/budget for [thing]. Key details: [specifics]. I need: [specific output — a list, a table, a plan].`
**Make it your own:** `Help me ____ for ____. Key details: ____. I need: ____.`
**What good output looks like:** A concrete, usable artifact (a shopping list, a 3-line summary, a weekly budget) — not just advice.
**Common mistakes:** Sharing real account numbers or full addresses "just to be safe" — explicit callback to Level 2.
**Level-up challenge:** Chain two of these together (e.g., plan a trip, then get a packing list from that same conversation without restating context).
**Quick check:** Pick one real task from your actual to-do list this week and complete it using AI before moving on.

---

### Level 5 — Work With Your Own Files *(New)*
**Status:** New
**Tool-agnostic:** Mostly — upload mechanics differ slightly per tool; note where.
**Learning outcome:** By the end, you can upload or photograph a real document (a letter, bill, PDF, or photo) and get AI to explain it, summarize it, or answer a question about it.
**Prerequisites:** Levels 1–2 (safety first — this level handles real documents).
**Estimated time:** 30 minutes.
**Real-life scenario:** You got a confusing letter, bill, or form and want to understand it before deciding what to do.
**Step-by-step exercise:**
1. Upload a photo or PDF and ask a question about it — cover the attach/upload button in each of the three tools.
2. Turn a messy document (or a photo of one) into a plain-English summary.
3. Ask a follow-up question about the same document without re-explaining it.
**Starter prompt:** `Here's a [type of document]. Explain what it's asking for in plain English. What do I need to do, and by when?`
**Make it your own:** `Here's a ____. Explain ____. What do I need to do, and by when?`
**What good output looks like:** You can restate, in your own words, what the document wants from you — and you know what you still need to verify with a human (see Level 2).
**Common mistakes:** Uploading a document with sensitive identifiers (account numbers, SSNs) still visible — cover a "cover it with your finger or crop it out first" tip for photos.
**Level-up challenge:** Upload two related documents (e.g., two insurance quotes) and ask AI to compare them side by side.
**Quick check:** Find one real letter or bill sitting in your house right now and get an explanation of it.

---

### Level 6 — Make AI Remember You *(New)*
**Status:** New
**Tool-agnostic:** No — this is inherently tool-specific; teach whichever tool the learner picked in Level 1, note the others exist.
**Learning outcome:** By the end, you can set up your AI tool so it already knows your basic context (your name, your situation, your preferences) without you retyping it every time.
**Prerequisites:** Levels 1, 3.
**Estimated time:** 20 minutes.
**Real-life scenario:** You're tired of re-explaining who you are and what you need every single conversation.
**Step-by-step exercise:**
1. Find and set up your tool's "remember this" feature (ChatGPT Custom Instructions/Memory, Claude Projects, or Gemini's saved info — **verify exact current feature names before publishing**, see `06-verify-list.md`).
2. Write 3–5 sentences of context about yourself once, and save it.
3. Ask a normal question and notice the difference versus Level 1's cold-start version.
**Starter prompt:** `Please remember: I'm [brief context about your life/work]. When I ask for help, assume this unless I say otherwise.`
**Make it your own:** `Please remember: I'm ____. When I ask for help, assume ____.`
**What good output looks like:** A new conversation already reflects something you told it once, without repeating it.
**Common mistakes:** Saving sensitive details (address, health conditions, financial specifics) into permanent memory — explicit callback to Level 2's Public Library Rule.
**Level-up challenge:** Save one of your Level 3 templates as a permanent instruction instead of a copy-paste template.
**Quick check:** Start a brand-new conversation and confirm it remembers what you told it to.

---

### Level 7 — Work & Small Business Tasks
**Status:** Merged (Module 4 core + non-duplicate lessons from Module 11)
**Tool-agnostic:** Yes
**Learning outcome:** By the end, you can produce a social post, a customer email, a proposal, and prep for a job interview.
**Prerequisites:** Levels 1–3; Level 5 recommended if the task involves an existing document.
**Estimated time:** 75 minutes.
**Real-life scenario:** Running a small business, or looking for a new job.
**Step-by-step exercise:**
1. Social posts and ads (**Reused**, `social-media-posts`).
2. Menus, flyers, and guest lists (**Reused**, `menus-and-lists`).
3. Customer emails and reviews, with a privacy note added (**Reused + Revised**, `customer-communication`).
4. Proposals and quotes (**Reused**, `simple-proposals`).
5. Resume, cover letter, and interview prep (**Reused + Merged**, `resume-writing` [Module 5, with Module 11's better anonymization wording] + `interview-prep` [Module 11's roleplay exercise]).
**Starter prompt:** `Act as a [role]. Write a [deliverable] for [audience/purpose]. Details: [specifics]. Tone: [tone]. Length: under [X] words.`
**Make it your own:** `Act as a ____. Write a ____ for ____. Details: ____. Tone: ____. Length: ____.`
**What good output looks like:** Something you could send today with only light personal editing.
**Common mistakes:** Pasting a real resume or client name into AI unedited — explicit callback to Level 2 and Level 5.
**Level-up challenge:** Have AI roleplay as a skeptical customer or interviewer and respond to your draft before you use it for real.
**Quick check:** Produce one real business or job-search deliverable you will actually use this week.

---

### Level 8 — Creative & Multimodal
**Status:** Merged (Module 5's creative writing + Module 12's non-duplicate lessons + two new lessons)
**Tool-agnostic:** No — image generation and voice mode differ meaningfully by tool.
**Learning outcome:** By the end, you can write something personal (a story, speech, or poem), generate one image for a real purpose, and try voice mode instead of typing.
**Prerequisites:** Levels 1–3.
**Estimated time:** 45 minutes.
**Real-life scenario:** A birthday, a wedding, a grandchild's bedtime story, or just wanting to try something new.
**Step-by-step exercise:**
1. Stories, speeches, and creative writing (**Reused + Merged**, `creative-writing` [Module 5] + `speeches-toasts` + `creative-hobbies` [Module 12]).
2. Try voice mode — talk instead of type (**New**).
3. Generate an image for something real, e.g., a party invite or a business flyer (**New**, expanded from the one-line tip in old Module 4's `ai-for-visuals`).
**Starter prompt (writing):** `Write a [type] for [occasion]. About: [person/topic]. Style: [tone]. Include: [specific memories/details].`
**Make it your own:** `Write a ____ for ____. About: ____. Style: ____. Include: ____.`
**What good output looks like:** For writing — it sounds personal, not generic (the wedding-speech and bedtime-story examples in the existing content are strong models to keep). For image generation — the image is usable for its stated purpose without needing a designer.
**Common mistakes:** Expecting the first image or draft to be final — reinforce the 4-Round Method from Level 1 here too.
**Level-up challenge:** Use voice mode to have a full back-and-forth conversation refining a creative piece, hands-free.
**Quick check:** Create one thing (a card, a short story, an image) for a specific real person or event.

---

### Level 9 — Advanced Prompting for Bigger Projects
**Status:** Moved (from Module 7, plus the 7-Step Pipeline moved here from Module 2) — explicitly optional/advanced, not required to "complete" the course
**Tool-agnostic:** Yes
**Learning outcome:** By the end, you can break a big project into steps, keep AI consistent across multiple outputs, and get AI to show its reasoning before you trust an answer.
**Prerequisites:** Level 3 (the basic formula and persona pattern).
**Estimated time:** 55 minutes.
**Real-life scenario:** A project too big for one prompt — planning a fundraiser, launching something, making a high-stakes comparison.
**Step-by-step exercise:**
1. Chained prompts and multi-step workflows (**Reused**, `chained-prompts`).
2. Few-shot prompting (**Reused**, `few-shot-prompting`).
3. Chain-of-thought — make AI show its work (**Reused**, `chain-of-thought`).
4. Advanced personas and expert panels (**Reused**, `advanced-personas`).
5. The 7-Step Pipeline (**Moved here**, `ai-pipeline`, from old Module 2).
**Starter prompt:** `Compare [option A] and [option B]. Think step by step: 1) [factor], 2) [factor], 3) [factor]. Give your recommendation with reasoning.`
**Make it your own:** `Compare ____ and ____. Think step by step: 1) ____, 2) ____. Give your recommendation with reasoning.`
**What good output looks like:** You can follow the reasoning and would notice if a step were wrong — not just a confident-sounding conclusion.
**Common mistakes:** Skipping straight to a final answer on a genuinely complex decision (financial, medical, legal) instead of asking for step-by-step reasoning you can inspect.
**Level-up challenge:** Run a real, multi-part project of your own through the full 7-step pipeline.
**Quick check:** Take a real decision you're weighing and get AI to reason through it step by step, then decide if you agree with its logic.

---

## Specialist Tracks (optional, non-sequential — not part of the main 9 Levels)

These reuse the genuinely new lessons that survived the cuts in 3a, without pretending they're flagship modules. Each is short (10–20 minutes), reachable from a "more topics" area rather than the main path.

- **Health & Wellness Extras** — `doctor-visit-prep`, `fitness-routines` (from old Module 8). *Status: Reused.*
- **Travel Extras** — `language-help` (from old Module 9; itineraries and packing already merged into Level 4). *Status: Reused.*
- **Job Search Deep-Dive** — pointer to Level 7's interview-prep section; nothing left over once duplicates are cut. *Status: Merged into Level 7, track retired.*
- **Microsoft 365 Copilot for Work Teams** — all of old Module 19, unchanged in content, but re-labeled and gated behind "Does your employer provide Microsoft 365 Copilot?" *Status: Moved, gated, not counted in the individual-learner course length.*

## Modules requiring real work before they can exist
Small Business Operations, Digital Literacy & AI, Civic Participation, Education & Tutoring, Legal Document Basics, Senior Living with AI (old Modules 13–18) are not part of the new structure above because there is nothing to redesign — they contain no content. If the business wants to keep these titles, they need to be written from scratch using the same lesson pattern as Levels 1–9 (content → hands-on exercise → real-world example → quiz), not restored as-is.
