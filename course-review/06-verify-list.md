# Phase 3 deliverable — Verify List

Every time-sensitive claim, tool feature, UI step, or pricing/free-tier detail found in the course that should be checked against current official sources before anything is published or re-published. Grouped by file. None of these are flagged as *wrong* — they are flagged as *checkable facts that can go stale*, per the audit rules.

## Module 1 — `module-01-ai-made-simple.ts`
- "Free tier includes GPT-4o mini (plenty for most tasks)" — ChatGPT's free-tier default model changes periodically; verify current model name.
- "Free tier gives you plenty of daily usage" (Claude) — no specific number given, but Claude's free-tier message limits have changed multiple times; consider whether to state a number at all given how fast it moves.
- "Free with a Google account" / "no separate signup needed" (Gemini) — verify Gemini's current signup/access flow hasn't changed.
- All three sign-up URLs (chat.openai.com, claude.ai, gemini.google.com) — verify still correct and not redirecting.

## Module 3 — `module-03-everyday-tasks.ts`
- "Claude is especially good with very long documents — it can handle up to 200,000 words at once (that's a whole book!)" (`summarize-and-translate`) — specific context-window claim, repeated in `travel-planning`'s tip box and in `tools.ts`. Verify current context-window size for whichever Claude model is actually offered on the free tier at publish time (word estimate vs. token count is also worth double-checking — tokens and words are not 1:1, see `glossary.ts`'s own token definition).

## Module 19 — `module-19-microsoft-copilot.ts` (highest-density verify burden in the course)
- "$30 USD/user/month" for full Microsoft 365 Copilot add-on.
- Three-tier structure claimed: Free / Copilot Chat (Baseline) / Full M365 Copilot — verify Microsoft hasn't repackaged these tiers.
- "Shield icon" as the specific UI indicator of enterprise data protection — verify this exact visual indicator still exists and means this.
- "Work/Web toggle" as a specific, named UI control.
- Named pre-built agents: Career Coach, Researcher, Analyst, Facilitator, Visual Creator — verify these specific agents still exist under these names.
- Specific navigation instructions ("Click 'All Agents' in the left sidebar," "9-dot app launcher → Copilot Notebooks") — Microsoft's UI for this product has changed repeatedly; re-walk every step before publishing.
- "Copilot Pages" and "Copilot Notebooks" as current, correctly-named features.
- Claim that the Facilitator agent replaces standalone meeting-notetaker tools "like Fireflies or Otter" — verify these are still the right comparison products to name, and that naming competitors here is legally/editorially fine.

## `src/data/tools.ts` (used by `/tools` pages, referenced by multiple modules)
- ChatGPT: "GPT-4o mini" free tier; enterprise data: SOC2/HIPAA/GDPR = true, SSO/SAML = true, admin console = true, rate limits ("500 req/min free, 3,500 req/min enterprise"), data retention ("30 days default, zero-retention option for enterprise"), data sovereignty regions, fine-tuning = true.
- Claude: tagline "now with desktop Co-work, Code, and Skills"; "Claude Sonnet 4.6" as free tier, "Opus 4.6" and "Max ($100+/mo)" as paid tiers; Pro price "$20/mo"; enterprise data: SOC2/HIPAA/GDPR = true, SSO = true, data retention claims, "US only, AWS GovCloud available," fine-tuning = false.
- Gemini: "Gemini 2.0 Flash" as free tier; "Gemini Advanced ($19.99/month)... Gemini Ultra, 2TB Google Drive storage"; enterprise data: HIPAA = **false** (flagged specifically because it's the one "false" in an otherwise all-true grid — worth double-checking this wasn't a copy-paste oversight rather than a real product distinction), rate limit numbers, data sovereignty claims.
- **General note:** this `enterpriseCriteria` block (SOC2/HIPAA/GDPR/SSO/rate-limits/data-sovereignty/fine-tuning) is detailed enough to belong in enterprise procurement material, not a consumer-facing tools comparison for the stated audience (elderly/non-technical individuals). Recommend either verifying it to enterprise-sales-grade accuracy (if it's meant for the B2B side of the product) or removing it from the consumer-facing tool comparison entirely — right now it's unclear which audience it's serving, and it's the single highest-liability content block in the data files if wrong (compliance claims made to a business customer).
- Microsoft Copilot entry (`tools.ts`, lines ~5–42): "$30 USD/user/mo" full license price; "Copilot Chat (free)... web grounding only" description — cross-check against Module 19's version of the same facts for internal consistency as well as external accuracy.

## Glossary — `glossary.ts`
- "Token... roughly, 1 token = ¾ of a word" — a commonly cited approximation; verify it's still the figure worth using or whether a different rule of thumb is now more standard.

## Cross-file consistency (not external facts, but internal ones worth reconciling)
- Claude's context-window claim appears in three places (Module 3 twice, `tools.ts` once) — if it's updated in one place, update all three, or better, state it in only one place and reference it from the others.
- ChatGPT's free-tier model name ("GPT-4o mini") appears in Module 1 and should be checked against whatever `tools.ts` states, to make sure they don't silently drift apart over time.

## Structural/data items to verify against the live product (not factual claims, but claims about what the product does)
- `onboarding.ts`'s `suggestedScenarios` and `suggestedModuleSlugs` — confirmed broken against `scenarios.ts` as of this audit (see `03-flow-audit.md`); re-verify after the fix ships that every referenced slug actually resolves.
- `README.md`'s "19 Course Modules" claim — becomes inaccurate the moment Modules 13–18 are removed/hidden per the redesign recommendation; update alongside that change.
- `src/app/modules/page.tsx`'s hard-coded copy "Six hands-on modules designed for absolute beginners" — already inaccurate today (19 modules exist in the data file); needs to be either computed from `modules.length` or rewritten to not state a specific number that will drift again.

## Not verified in this pass (out of scope, but flagged for a follow-up)
- `src/data/prompt-templates.ts` (569 lines) was not read line-by-line for this audit given its size relative to the course content proper; recommend a dedicated pass checking it for the same category of tool-version/pricing claims found elsewhere, plus a check for duplication against the module-level prompt templates already audited.
- `src/data/corporate.ts` and `corporate-research.ts` (B2B sales content) were identified but not audited for accuracy — they are sales copy, not learner-facing course content, and were treated as out of scope for an instructional-design review. If pricing or claims in that file are learner-facing anywhere (e.g., a pricing page), they should get the same fact-check treatment as everything above.
