import type { Module } from "@/lib/types";

export const module02: Module = {
  id: "be-smart-stay-safe",
  slug: "be-smart-stay-safe",
  title: "Stay Safe, Spot Mistakes",
  shortTitle: "Stay Safe",
  description:
    "Learn what NOT to share with AI, understand privacy basics, spot AI mistakes, and use AI ethically — your safety toolkit for everything else in this course.",
  icon: "ShieldCheck",
  color: "rose",
  estimatedMinutes: 45,
  order: 2,
  lessons: [
    // Lesson 1: Privacy
    {
      id: "m6-privacy",
      slug: "privacy-basics",
      moduleId: "be-smart-stay-safe",
      title: "What NOT to Share with AI",
      subtitle: "Protect your personal information — know the boundaries",
      order: 1,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "AI tools are powerful, but they are not private diaries. Anything you type into ChatGPT, Claude, or Gemini may be reviewed by the companies to improve their services. That doesn't mean you shouldn't use them — it means you should be smart about what you share.",
        },
        {
          type: "bullet-list",
          title: "NEVER Share These with AI:",
          items: [
            "Passwords, PINs, or security codes of any kind",
            "Social Security Numbers, tax IDs, or national ID numbers",
            "Bank account numbers, credit card details, or financial account logins",
            "Your full home address or your children's full names and schools",
            "Private medical records with your full identity attached",
            "Confidential business documents — contracts, trade secrets, client lists",
            "Photos of your ID, passport, or driver's license",
          ],
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "The 'Public Library' Rule",
          body: "A good rule of thumb: only share with AI what you'd be comfortable typing on a public library computer where someone might look over your shoulder. If it's truly private or sensitive, leave it out. You can still get great help without sharing sensitive details.",
        },
        {
          type: "text",
          body: "For business use: describe problems in general terms. Instead of 'My client John Smith at Acme Corp is suing me,' say 'I need to draft a response to a client dispute about a contract. The key issues are...' The AI gets what it needs to help without the confidential details.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "m6-q1-privacy",
          question: "Which of these is SAFE to share with AI?",
          options: [
            { id: "a", text: "Your credit card number to check for fraud", isCorrect: false },
            { id: "b", text: "A general description of a work problem without names or company details", isCorrect: true },
            { id: "c", text: "Your full tax return to get filing advice", isCorrect: false },
            { id: "d", text: "Your child's school schedule and address", isCorrect: false },
          ],
          explanation:
            "General descriptions are safe — names, numbers, and specifics are not. You can say 'I'm a retail manager dealing with a scheduling conflict' without naming your store or employees. The AI can still help effectively.",
        },
        {
          type: "fill-in-blank",
          id: "m6-fib-privacy",
          title: "Rewrite These Prompts Safely",
          instruction: "Rewrite these prompts to remove sensitive information while keeping the AI's ability to help.",
          template:
            "Original: 'My employee {{name}} is underperforming and I want to write a warning letter. Their sales dropped from {{amount}} to {{amount2}}.'\n\nSafe version: 'Help me write a {{tone}} letter to an employee about {{issue}}. They previously performed at {{level}} but have recently {{problem}}. I want to {{goal}}.'",
          blanks: [
            { key: "tone", answer: "professional and constructive", hint: "What tone?" },
            { key: "issue", answer: "declining performance", hint: "General category of problem" },
            { key: "level", answer: "a high level", hint: "Previous performance (generalized)" },
            { key: "problem", answer: "fallen below expectations", hint: "Current situation (no numbers)" },
            { key: "goal", answer: "help them improve while documenting the concern", hint: "What outcome?" },
          ],
        },
      ],
      keyTakeaways: [
        "Treat AI like a public library computer — nothing truly private",
        "Describe problems in general terms, not with real names and numbers",
        "The AI can still help effectively without confidential details",
        "When in doubt, leave it out",
      ],
    },
    // Lesson 2: Spotting Mistakes
    {
      id: "m6-mistakes",
      slug: "spotting-mistakes",
      moduleId: "be-smart-stay-safe",
      title: "Spotting AI Mistakes (Hallucinations)",
      subtitle: "Learn to catch when AI confidently makes things up",
      order: 2,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "AI sometimes 'hallucinates' — it confidently states false information as if it were fact. It might invent a study that doesn't exist, quote a book incorrectly, give wrong dates, or create fake statistics. This isn't because AI is lying — it's because it predicts words based on patterns, not facts.",
        },
        {
          type: "bullet-list",
          title: "Common Situations Where AI Hallucinates:",
          items: [
            "Specific numbers and statistics — always verify against real sources",
            "Quotes from famous people or books — AI often invents or misattributes quotes",
            "Historical dates and events — especially for less well-known topics",
            "Legal and medical information — never rely on AI for critical decisions",
            "Product prices and availability — AI training data may be months old",
            "Personal details about real people — AI may fabricate biographies",
          ],
        },
        {
          type: "tip-box",
          variant: "warning",
          title: "Red Flags to Watch For",
          body: "Be suspicious when: 1) The AI sounds too confident about very specific numbers or facts, 2) You can't easily verify the claim with a quick Google search, 3) The information would require recent or real-time data, 4) The AI contradicts itself when asked the same question in different ways.",
        },
        {
          type: "code-example",
          title: "Fact-Check Prompt:",
          code: `I'm going to share some information an AI gave me. Please review it critically and identify any statements that might be inaccurate, made up, or need verification. Point out anything that seems too specific without a source.\n\n[Paste AI output here]`,
          language: "text",
        },
        {
          type: "text",
          body: "Yes, you can use AI to check AI! Run important outputs through a DIFFERENT AI tool (e.g., if ChatGPT wrote it, ask Claude to fact-check it). Different AIs have different training data and catch different errors.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "m6-q2-hallucination",
          question: "What's the best strategy to catch AI hallucinations?",
          options: [
            { id: "a", text: "Trust AI completely — it's usually right", isCorrect: false },
            { id: "b", text: "Cross-check with a different AI tool AND verify with real sources", isCorrect: true },
            { id: "c", text: "Only use AI for creative writing, never for facts", isCorrect: false },
            { id: "d", text: "Assume everything AI says is wrong", isCorrect: false },
          ],
          explanation:
            "The best strategy is cross-verification: use a different AI tool to review the first one's output, AND verify key claims with real-world sources (news, official websites, books). Two AIs can both be wrong, so a human fact-check is the final safeguard.",
        },
      ],
      keyTakeaways: [
        "AI confidently says false things — always verify important information",
        "Be especially skeptical of numbers, quotes, dates, and legal/medical claims",
        "Cross-check with a different AI tool + real-world sources",
        "The more important the decision, the more verification you need",
      ],
    },
    // Lesson 3: Ethics
    {
      id: "m6-ethics",
      slug: "ethical-use",
      moduleId: "be-smart-stay-safe",
      title: "Using AI Ethically",
      subtitle: "Be honest, fair, and responsible with AI — in business and in life",
      order: 3,
      estimatedMinutes: 8,
      content: [
        {
          type: "text",
          body: "With great power comes great responsibility. AI is a tool — like a calculator or a camera — and how you use it reflects your values. Using AI ethically means being honest about when you're using it, respecting others, and taking responsibility for what you create.",
        },
        {
          type: "bullet-list",
          title: "Ethical AI Use Guidelines:",
          items: [
            "BE HONEST — If AI helped create something important (a report, an application, published content), acknowledge it if asked. Don't claim AI work as purely your own in situations where that matters.",
            "DON'T DECEIVE — Never use AI to create fake reviews, impersonate real people, generate misleading information, or cheat on tests, applications, or certifications.",
            "RESPECT COPYRIGHT — AI can produce content similar to copyrighted material. If you're publishing commercially, verify you have the right to use what AI creates.",
            "CONSIDER IMPACT — Before using AI for something that affects others (hiring, grading, customer decisions), think about whether AI bias could harm someone unfairly.",
            "STAY HUMAN — AI should enhance your work, not replace your judgment. The final decision on important matters should always be yours.",
          ],
        },
        {
          type: "tip-box",
          variant: "important",
          title: "Business Transparency",
          body: "If you use AI to create customer-facing content (marketing materials, responses, product descriptions), that's generally fine and expected. But if AI makes decisions that affect customers (loan approvals, pricing, hiring), you should have human oversight. People deserve to be evaluated by people.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "m6-q3-ethics",
          question: "Which of these is an UNETHICAL use of AI?",
          options: [
            { id: "a", text: "Using AI to help draft a personal email you'll review before sending", isCorrect: false },
            { id: "b", text: "Using AI to generate fake positive reviews for your business", isCorrect: true },
            { id: "c", text: "Using AI to brainstorm ideas for your daughter's birthday party", isCorrect: false },
            { id: "d", text: "Using AI to summarize a long article you don't have time to read fully", isCorrect: false },
          ],
          explanation:
            "Creating fake reviews is deceptive and harms consumers who rely on honest feedback to make decisions. Using AI to draft, brainstorm, or summarize is fine — but deceiving others is not. The key question: 'Would I be comfortable telling people I used AI for this?'",
        },
      ],
      keyTakeaways: [
        "Be honest about AI use when it matters",
        "Never use AI to deceive, cheat, or impersonate",
        "Human oversight is essential for decisions that affect people",
        "Your values determine how you use AI — choose integrity",
      ],
    },
    // Lesson 4: Fact-Checking
    {
      id: "m6-factcheck",
      slug: "fact-checking",
      moduleId: "be-smart-stay-safe",
      title: "Fact-Checking AI Output",
      subtitle: "A simple system to verify AI information before you use it",
      order: 4,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "By now you know AI can make mistakes. Here's a simple, practical system to fact-check AI output before you act on it — whether it's an email, a business decision, or advice you're considering.",
        },
        {
          type: "bullet-list",
          title: "The 3-Step Fact-Check System:",
          items: [
            "Step 1: SENSE CHECK — Does this information feel right based on what you already know? If something seems off, it probably is.",
            "Step 2: SOURCE CHECK — Can you quickly verify the key facts with a Google search? For important numbers or claims, check at least 2 sources.",
            "Step 3: SECOND OPINION — For critical information (health, legal, financial), paste the AI output into a DIFFERENT AI tool and ask: 'Review this for accuracy. What might be wrong or misleading?'",
          ],
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Risk-Based Verification",
          body: "Match your verification effort to the risk: Low risk (party planning ideas) = quick sense check is enough. Medium risk (business proposal) = do all 3 steps. High risk (medical, legal, financial decision) = verify with a qualified human professional, not just AI.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "m6-q4-factcheck",
          question: "You received AI-generated investment advice. What level of verification is appropriate?",
          options: [
            { id: "a", text: "Trust it — AI is smart", isCorrect: false },
            { id: "b", text: "Do a quick Google search", isCorrect: false },
            { id: "c", text: "Verify with a qualified human financial advisor", isCorrect: true },
            { id: "d", text: "Ask the same AI to double-check itself", isCorrect: false },
          ],
          explanation:
            "For high-risk decisions (investments, health, legal matters), only a qualified human professional should give the final advice. AI can help you understand options, but real expertise — with accountability — is irreplaceable.",
        },
        {
          type: "prompt-playground",
          id: "m6-pp-verify-challenge",
          title: "Put the 3-Step Check to Work on a Real Example",
          instruction:
            "Here's something an AI actually said: \"According to a recent Harvard study, 87% of small businesses that use AI see a 40% increase in revenue within the first 3 months. The study surveyed 10,000 business owners across 50 countries.\" Apply the 3-step check (Sense Check → Source Check → Second Opinion) to this claim. Write down what you notice at each step, then decide: would you trust and repeat this claim, or not?",
          promptHint:
            "Sense Check: does this specific a number, from a single study, covering 50 countries, sound realistic? Source Check: is there a study name, journal, or link given anywhere? Second Opinion: what would you ask a different AI tool to check?",
          sampleResponse:
            "Sense Check: an 87% success rate and a precise '40% revenue increase' from one study is suspiciously exact — real research results are rarely this clean. Source Check: no journal name, no author, no link, no date is given anywhere in the claim — that's a red flag on its own. Second Opinion: I'd ask a different AI tool, 'Can you find the exact source for a Harvard study claiming 87% of small businesses using AI see a 40% revenue increase? Give me the study title, authors, and year, or tell me if you can't find one.' If it can't produce a real citation, treat the original claim as made up.",
          improvementTip:
            "This is a real example from the course's own verification-challenge library — it's specifically designed to sound convincing while being unsourced and almost certainly fabricated. Notice that you didn't need any special expertise to catch it — just the habit of asking 'where's this actually from?' before repeating a number.",
        },
      ],
      keyTakeaways: [
        "3-step system: Sense Check → Source Check → Second Opinion",
        "Match verification effort to risk level",
        "For high-risk decisions, consult a human professional",
        "Fact-checking is a habit — the more you do it, the faster it gets",
      ],
    },
    // Lesson 5: Good AI Habits
    {
      id: "m6-habits",
      slug: "good-ai-habits",
      moduleId: "be-smart-stay-safe",
      title: "Building Good AI Habits",
      subtitle: "Practical daily habits for using AI safely, effectively, and confidently",
      order: 5,
      estimatedMinutes: 8,
      content: [
        {
          type: "text",
          body: "You've now got the full safety toolkit: what not to share, how to spot mistakes, how to use AI honestly, and how to fact-check what it tells you. Let's end with 10 simple habits that will keep you safe, effective, and confident through everything still ahead in this course — 7 more Levels of real, practical AI skills.",
        },
        {
          type: "bullet-list",
          title: "10 Good AI Habits to Build:",
          items: [
            "1. READ BEFORE YOU SEND — Always review AI-generated text before using it. Read it out loud — if it doesn't sound like you, rewrite it.",
            "2. SAVE YOUR BEST PROMPTS — Keep a notes file of prompts that worked well. You'll build a personal library of proven templates.",
            "3. TRY MULTIPLE TOOLS — Different AIs excel at different tasks. When one gives a mediocre answer, try the same prompt on another.",
            "4. VERIFY BEFORE ACTING — For anything important, fact-check before you use AI output. 30 seconds of Googling can prevent costly mistakes.",
            "5. KEEP LEARNING — AI tools update constantly. Every few months, try new features — they keep getting better.",
            "6. PROTECT YOUR PRIVACY — Make the 'Public Library Rule' a habit. If it's sensitive, leave it out.",
            "7. USE AI FOR IDEAS, NOT FINAL DECISIONS — Let AI generate options, but make the final call yourself.",
            "8. TEACH OTHERS — Share what you've learned with family, friends, and colleagues. Teaching reinforces your own learning.",
            "9. STAY CURIOUS — The best AI users are curious experimenters. Try new prompts, new use cases, new approaches.",
            "10. ENJOY THE JOURNEY — AI is fun! Use it for creative projects, silly questions, and exploring ideas. Not everything needs to be productive.",
          ],
        },
        {
          type: "tip-box",
          variant: "example",
          title: "Level 2 down, 7 to go 🎉",
          body: "You now have a real safety toolkit: what to keep private, how to catch a made-up fact, how to use AI honestly, and a simple system to verify anything important. Keep these 10 habits in the back of your mind as you move on — every Level from here builds real, everyday skills on top of this foundation.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "m6-q5-habits",
          question: "What's the most important daily habit for using AI effectively?",
          options: [
            { id: "a", text: "Using the most expensive AI subscription", isCorrect: false },
            { id: "b", text: "Reviewing and personalizing AI output before using it", isCorrect: true },
            { id: "c", text: "Using AI for every single task without exception", isCorrect: false },
            { id: "d", text: "Only using one AI tool to keep things simple", isCorrect: false },
          ],
          explanation:
            "Always review and personalize AI output. AI gives you a draft — you make it yours. This habit ensures your communications sound human, your facts are correct, and your judgment stays in the driver's seat.",
        },
      ],
      keyTakeaways: [
        "Review everything before using it",
        "Save your best prompts — build your personal library",
        "Try different tools for different tasks",
        "Verify important information before acting",
        "Teach others — it reinforces your own learning",
        "Stay curious and have fun!",
      ],
    },
  ],
};
