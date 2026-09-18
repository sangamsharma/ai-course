import type { Module } from "@/lib/types";

export const module03: Module = {
  id: "the-art-of-asking",
  slug: "the-art-of-asking",
  title: "Ask Better, Every Time",
  shortTitle: "Prompting",
  description:
    "Master the skill of writing effective prompts. Learn the 5-part formula, the Persona Pattern, how to build reusable templates, and how to learn anything by teaching it back.",
  icon: "MessageSquare",
  color: "blue",
  estimatedMinutes: 55,
  order: 3,
  lessons: [
    // === Lesson 1: Good vs Bad Prompts ===
    {
      id: "m2-good-vs-bad",
      slug: "good-vs-bad-prompts",
      moduleId: "the-art-of-asking",
      title: "Good vs Bad Prompts",
      subtitle: "See the difference a well-written prompt makes — and learn the simple formula",
      order: 1,
      estimatedMinutes: 12,
      content: [
        {
          type: "text",
          body: "The quality of what you get from AI depends almost entirely on the quality of what you put in. Think of it like giving directions: 'Go somewhere nice for dinner' will get you a very different result than 'Find me a quiet Italian restaurant for 4 people, under $30 per person, open tonight, within 15 minutes of downtown.'",
        },
        {
          type: "tip-box",
          variant: "example",
          title: "Bad Prompt Example",
          body: '"Write something about my business." — This is too vague. The AI has no idea what kind of business, what format, how long, or who will read it. You\'ll get something generic and useless.',
        },
        {
          type: "tip-box",
          variant: "example",
          title: "Good Prompt Example",
          body: '"Write a 150-word Instagram post for my family-run bakery. Today\'s special: blueberry lavender scones. Use a warm, friendly tone. Include 3 relevant hashtags and a call to action asking people to visit before 2 PM." — This gives the AI everything it needs: format, length, topic, tone, extras, and a goal.',
        },
        {
          type: "text",
          body: "Here's the simple formula we introduced in Level 1, expanded with more detail:",
        },
        {
          type: "bullet-list",
          title: "The Complete Prompt Formula (5 Parts)",
          items: [
            "ROLE — Who is the AI? ('Act as a professional email writer…')",
            "TASK — What do you need? ('Write a follow-up email…')",
            "CONTEXT — What's the situation? ('I met the client at a conference last week…')",
            "CONSTRAINTS — What are the rules? ('Under 100 words, professional but warm tone, no jargon…')",
            "FORMAT — How should it look? ('Use short paragraphs. Start with a greeting. End with a call to action…')",
          ],
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Remember the 80/20 Rule",
          body: "You don't always need all 5 parts. For quick questions, just the TASK is fine. For important outputs (emails, documents, posts), use at least 3 parts. The more important the output, the more parts you should include.",
        },
      ],
      exercises: [
        {
          type: "before-after",
          id: "m2-ba-bad-good",
          title: "Spot the Difference",
          description: "Here are two prompts asking for the same thing. Click 'After' to see why the second one works much better.",
          beforeContent: "Write an email about my sale this weekend.",
          afterContent:
            "Act as a friendly store manager. Write a short email (under 80 words) announcing a weekend sale to my loyal customers. The sale is 20% off all items, this Saturday and Sunday only. Use a warm, excited tone. Start with 'Dear valued customer' and end with 'See you this weekend!'",
          whatImproved: [
            "Added a ROLE (friendly store manager) so the tone matches",
            "Specified LENGTH (under 80 words) to keep it concise",
            "Added CONTEXT (20% off, Sat-Sun only) for specific details",
            "Chose TONE (warm, excited) to match the occasion",
            "Defined FORMAT (greeting + closing) for structure",
          ],
        },
        {
          type: "quiz",
          id: "m2-q1-formula",
          question: "Which of the 5 prompt parts tells the AI HOW to present the information?",
          options: [
            { id: "a", text: "Role", isCorrect: false },
            { id: "b", text: "Task", isCorrect: false },
            { id: "c", text: "Format", isCorrect: true },
            { id: "d", text: "Context", isCorrect: false },
          ],
          explanation:
            "FORMAT tells the AI how to structure the output — like bullet points, paragraphs, tables, or a specific template. ROLE is who the AI should act as, TASK is what to do, and CONTEXT is the background situation.",
        },
      ],
      keyTakeaways: [
        "Bad prompts are vague — good prompts are specific",
        "Use the 5-part formula: Role + Task + Context + Constraints + Format",
        "For important tasks, use at least 3 of the 5 parts",
        "The more effort you put into your prompt, the better the result",
      ],
    },
    // === Lesson 2: Persona Pattern ===
    {
      id: "m2-persona",
      slug: "persona-pattern",
      moduleId: "the-art-of-asking",
      title: "The Persona Pattern",
      subtitle: "Make AI act as any expert you need — from a financial advisor to a travel planner",
      order: 2,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "One of the most powerful prompting techniques is the Persona Pattern. You tell the AI to 'act as' a specific role, and it will respond with the knowledge, tone, and perspective of that role. It's like having a team of experts on call, 24/7.",
        },
        {
          type: "bullet-list",
          title: "Examples of Personas You Can Use:",
          items: [
            "'Act as a professional email writer who specializes in warm, friendly business communication.'",
            "'Act as a travel agent with 20 years of experience planning family vacations in Southeast Asia.'",
            "'Act as a career coach helping a 50-year-old professional transition to a new industry.'",
            "'Act as a nutritionist creating a meal plan for someone with diabetes and high blood pressure.'",
            "'Act as a patient math tutor explaining fractions to a 10-year-old who finds math boring.'",
          ],
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Why This Works So Well",
          body: "When you give AI a persona, you're giving it a frame of reference. Instead of searching its entire knowledge base, it narrows its focus to what that specific expert would know and how they would communicate. This dramatically improves relevance and quality.",
        },
        {
          type: "text",
          body: "The Persona Pattern works for literally any situation. Need legal-sounding language? 'Act as a lawyer.' Need a creative slogan? 'Act as an advertising copywriter.' Need a simple explanation? 'Act as a kindergarten teacher explaining a complex topic to a 5-year-old.'",
        },
        {
          type: "tip-box",
          variant: "important",
          title: "Important Reminder",
          body: "The Persona Pattern makes AI responses more useful, but it doesn't make the AI a real expert. Always verify important information — especially for medical, legal, or financial matters.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m2-pp-persona",
          title: "Try the Persona Pattern",
          instruction:
            "Think of a problem you have right now. It could be planning something, writing something, or getting advice. Write a prompt using the Persona Pattern: 'Act as a [role]...' and describe what you need.",
          promptHint:
            "Act as an experienced event planner. Help me plan a 25th wedding anniversary party for my parents. We have 40 guests, a budget of $2,000, and the venue is our backyard...",
          sampleResponse:
            "🎉 25th Anniversary: Backyard Celebration Plan\n\nTheme: 'Silver & Sweet' — Silver decor accents (25th = silver) with warm string lights for a romantic evening feel.\n\nLayout: Set up 5 round tables of 8 guests each. Rent tablecloths ($80), chair covers ($120), and string lights ($150). Set up a small dance area near the speakers.\n\nMenu (budget ~$800):\n• Appetizer buffet: cheese boards, bruschetta, stuffed mushrooms\n• Main: BBQ station with grilled chicken, vegetables, and salads\n• Cake: Two-tier anniversary cake ($150)\n• Drinks: Signature silver cocktail + wine + non-alcoholic options\n\nEntertainment: Create a slideshow of photos from their 25 years together. Set up a 'memory jar' where guests write favorite memories.\n\nTimeline:\n• 3 weeks before: Order rentals, send invites\n• 1 week before: Confirm all vendors, prep playlist\n• Day before: Set up tables and lights\n• Day of: Food prep starts at noon, guests arrive at 5 PM",
          improvementTip:
            "Notice how specific the response is because you provided: the event type, guest count, budget, venue, and occasion. The AI even knew 25th = silver theme! More context = more personalized results.",
        },
        {
          type: "quiz",
          id: "m2-q2-persona",
          question: "What is the main benefit of using the Persona Pattern?",
          options: [
            { id: "a", text: "It makes the AI respond faster", isCorrect: false },
            { id: "b", text: "It narrows the AI's focus to a specific expert's knowledge and communication style", isCorrect: true },
            { id: "c", text: "It lets the AI access the internet for real-time information", isCorrect: false },
            { id: "d", text: "It guarantees 100% accurate information", isCorrect: false },
          ],
          explanation:
            "The Persona Pattern gives the AI a specific frame of reference, which helps it filter its vast knowledge to what's relevant and communicate in the right style. But remember — it doesn't make the AI a real expert or guarantee accuracy.",
        },
      ],
      keyTakeaways: [
        "The Persona Pattern: 'Act as a [role]' dramatically improves AI responses",
        "Works for any profession, communication style, or audience",
        "Combines well with the 5-part formula for maximum effect",
        "Always verify important outputs — AI is a tool, not a certified expert",
      ],
    },
    // === Lesson 3: Be Specific ===
    {
      id: "m2-specificity",
      slug: "be-specific",
      moduleId: "the-art-of-asking",
      title: "Be Specific, Get Better Results",
      subtitle: "Learn how adding constraints, format, and audience details transforms AI output",
      order: 3,
      estimatedMinutes: 12,
      content: [
        {
          type: "text",
          body: "The most common mistake beginners make is being too vague. AI is eager to help, but without enough guidance, it has to guess what you want. Every specific detail you add — length, tone, audience, format, style — narrows down the possibilities and gets you closer to what you actually need.",
        },
        {
          type: "tip-box",
          variant: "example",
          title: "Vague → Specific: The Transformation",
          body: "VAGUE: 'Give me some dinner ideas.'\n\nSPECIFIC: 'Suggest 5 healthy dinner recipes that: take under 30 minutes to prepare, use ingredients available at a regular grocery store, are under 500 calories per serving, are kid-friendly (no spicy food), and include at least one vegetarian option.'\n\nThe second prompt gets you exactly what you need. The first one is a coin toss.",
        },
        {
          type: "bullet-list",
          title: "Key Details to Always Consider Adding:",
          items: [
            "LENGTH — 'Under 100 words', '3 paragraphs', '10 bullet points'",
            "TONE — 'Professional', 'Friendly', 'Encouraging', 'Formal', 'Playful'",
            "AUDIENCE — 'For my boss', 'For my 8-year-old daughter', 'For my elderly parents'",
            "FORMAT — 'As bullet points', 'In a table', 'As a numbered list', 'As a letter'",
            "CONSTRAINTS — 'No jargon', 'No emojis', 'Use British English', 'Avoid mentioning prices'",
            "PURPOSE — 'To persuade', 'To inform', 'To entertain', 'To teach'",
          ],
        },
        {
          type: "text",
          body: "This is a big step up in how you use AI — moving from basic requests to creating templates you can reuse. A template is a set of instructions you can use over and over for similar tasks — that's exactly what the next two lessons are about.",
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Pro Strategy: Save Your Best Prompts",
          body: "When you create a prompt that works really well, save it! Use a notes app, a Google Doc, or our Prompt Template Library. Over time, you'll build a personal collection of perfect prompts for every situation — no need to reinvent the wheel each time.",
        },
      ],
      exercises: [
        {
          type: "fill-in-blank",
          id: "m2-fib-specific",
          title: "Make This Prompt Specific",
          instruction: "Fill in the blanks to turn a vague prompt into a specific one. Use the 5-part formula as your guide.",
          template:
            'I need a {{what}} for {{who}}. It should be {{how_long}} and use a {{tone}} tone. The purpose is to {{purpose}}. Format it as {{format}}.',
          blanks: [
            { key: "what", answer: "product description", hint: "What are you creating? (email, post, list...)" },
            { key: "who", answer: "new customers", hint: "Who will read this?" },
            { key: "how_long", answer: "3 short paragraphs", hint: "How long should it be?" },
            { key: "tone", answer: "friendly and excited", hint: "What feeling should it convey?" },
            { key: "purpose", answer: "encourage them to visit our website", hint: "What action should they take?" },
            { key: "format", answer: "bullet points with a heading", hint: "How should it look on the page?" },
          ],
        },
        {
          type: "quiz",
          id: "m2-q3-specific",
          question: "Which of these is the MOST specific prompt?",
          options: [
            { id: "a", text: '"Write a blog post about healthy eating."', isCorrect: false },
            { id: "b", text: '"Write a blog post about healthy eating for beginners, with 5 tips."', isCorrect: false },
            { id: "c", text: '"Write a 500-word blog post about 5 easy healthy eating tips for busy parents. Use a friendly, encouraging tone. Include a brief introduction, one tip per section with a heading, and a conclusion."', isCorrect: true },
            { id: "d", text: '"Write a really good blog post about eating healthy food that people will like."', isCorrect: false },
          ],
          explanation:
            "Option C is the most specific — it includes length (500 words), audience (busy parents), structure (intro + 5 sections + conclusion), tone (friendly, encouraging), and format (headings per tip). Every extra detail helps the AI deliver what you actually want.",
        },
      ],
      keyTakeaways: [
        "Specificity is the #1 factor in prompt quality",
        "Add details about length, tone, audience, format, and purpose",
        "Save your best prompts as reusable templates",
      ],
    },
    // === Lesson 4: Prompt Templates ===
    {
      id: "m2-templates",
      slug: "prompt-templates",
      moduleId: "the-art-of-asking",
      title: "Build Your Own Prompt Templates",
      subtitle: "Create reusable templates so you never start from scratch again",
      order: 4,
      estimatedMinutes: 12,
      content: [
        {
          type: "text",
          body: "The real power move in AI is creating your own prompt templates — a reusable framework you fill in with specifics each time. Think of it like a form: you create it once with all the right structure, then just change the details for each use.",
        },
        {
          type: "code-example",
          title: "Template Example: Customer Email",
          code: `Act as a [role: customer service representative].
Write a [type: response] email to a customer about [topic].
The customer's concern is: [brief description].
My proposed solution is: [what you'll do].
Tone: [empathetic, professional, warm].
Length: under [X] words.
Format: Start with a thank you, address their concern, offer solution, end with an invitation to reply.`,
          language: "text",
        },
        {
          type: "text",
          body: "To use this template, just fill in the bracketed parts and send it to the AI. Takes 30 seconds instead of 5 minutes of writing a new prompt each time.",
        },
        {
          type: "bullet-list",
          title: "Templates Worth Creating Today:",
          items: [
            "Email response template (for common customer or colleague situations)",
            "Social media post template (for daily business posting)",
            "Meeting summary template (paste notes → get clean summary)",
            "Event planning template (for birthdays, dinners, gatherings)",
            "Learning template ('Explain [topic] to me like I'm a beginner in [field]')",
          ],
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "This Is a Real Skill Level-Up",
          body: "Once you have 5-10 personal templates saved, you're no longer writing prompts from scratch — you're just filling in blanks. This is how professionals use AI efficiently. (Later, in Level 6, you'll learn how to save this kind of context permanently so you don't even need to paste a template each time.)",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m2-pp-template",
          title: "Create Your First Template",
          instruction:
            "Think of something you do regularly — writing emails, planning meals, posting online. Create a template for it using the 5-part formula. Use [brackets] for parts you'll fill in each time.",
          promptHint:
            "Act as a [role]. Help me [task]. Context: [situation]. Requirements: [length, tone, format]. Additional: [any extras]...",
          sampleResponse:
            "Act as a professional social media manager. Create a [platform] post for my [business type] business about [topic/offer]. Context: [any background, like 'we're running a weekend promotion']. Requirements: under [X] words, [tone] tone. Include [X] relevant hashtags and a call to action. Format: Hook in first line, 2-3 value points, CTA at the end.",
          improvementTip:
            "Great templates have clear placeholders you can fill in quickly. Save this in a notes app or Google Doc — next time you need a social media post, you'll be done in 30 seconds.",
        },
      ],
      keyTakeaways: [
        "Templates save time — create once, use forever",
        "Build templates for tasks you do weekly",
        "Use [brackets] for parts you change each time",
      ],
    },
    // === Lesson 5: Learning With AI (moved from the old Personal Documents module) ===
    {
      id: "m5-learning",
      slug: "learning-and-research",
      moduleId: "the-art-of-asking",
      title: "Learn Anything by Teaching It Back",
      subtitle: "Use AI as a personal tutor — and the one technique that makes it actually stick",
      order: 5,
      estimatedMinutes: 12,
      content: [
        {
          type: "text",
          body: "AI can be your personal tutor for almost any subject. It explains concepts in simple terms, creates practice exercises, answers follow-up questions endlessly, and adapts to your learning style. It's like having a patient teacher available 24/7 — and it pairs perfectly with the specific, templated prompts you just practiced.",
        },
        {
          type: "code-example",
          title: "Learning Prompt:",
          code: `I want to learn about [topic]. I'm a complete beginner.
Explain it to me like I'm [age/background — e.g., 'a curious 12-year-old' or 'someone who's never used a computer'].
Break it into [X] simple lessons.
For each lesson, include: a simple explanation, a real-world example, and one thing I can try myself.
After explaining, ask me 3 questions to check my understanding.`,
          language: "text",
        },
        {
          type: "bullet-list",
          title: "Things AI Can Teach You:",
          items: [
            "Languages — practice conversations, grammar explanations, vocabulary",
            "History — explain events, connect causes and effects, suggest books",
            "Science — from basic biology to understanding medical reports",
            "Technology — how computers, internet, and apps work",
            "Cooking techniques and food science",
            "Gardening for your specific climate and space",
            "Music theory and instrument basics",
            "Personal finance and investing fundamentals",
          ],
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Learning Strategy: The Feynman Technique with AI",
          body: "Step 1: Ask AI to explain a topic simply. Step 2: In your own words, try to explain it back to the AI. Step 3: Ask AI to point out what you got wrong or missed. Step 4: Repeat with the corrected understanding. This active learning method is proven to be one of the most effective ways to truly understand something — and it only works if you actually do Step 2, not just read about it.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "m5-q4-learning",
          question: "What's the Feynman Technique for learning with AI?",
          options: [
            { id: "a", text: "Reading AI explanations multiple times until memorized", isCorrect: false },
            { id: "b", text: "Ask AI to explain → you explain back → AI corrects you → repeat", isCorrect: true },
            { id: "c", text: "Taking notes while AI lectures for an hour", isCorrect: false },
            { id: "d", text: "Only learning one fact per day", isCorrect: false },
          ],
          explanation:
            "The Feynman Technique: learn → teach back → get corrected → repeat. By trying to explain what you learned, you discover gaps in your understanding. AI is perfect for this because it's endlessly patient and can check your explanations instantly.",
        },
        {
          type: "prompt-playground",
          id: "m5-pp-feynman",
          title: "Actually Do It: Explain Something Back",
          instruction:
            "Pick something you're a little fuzzy on — a topic from work, the news, or even something earlier in this course. First, ask AI to explain it simply. Then, in your own words (don't copy AI's wording), explain it back in 2-3 sentences and ask AI to correct anything you got wrong. Paste your own explanation here, not the AI's.",
          promptHint:
            "After AI explains [topic] to you, try: 'Here's my understanding in my own words: [your explanation]. Did I get anything wrong or miss anything important?'",
          sampleResponse:
            "Topic: how compound interest works. My explanation: 'Compound interest means you earn interest not just on the money you put in, but also on the interest you already earned — so it grows faster over time, like a snowball.' AI's correction: 'That's exactly right! One thing to add: the longer the money sits, the bigger the snowball effect — which is why starting early matters more than the amount you start with.'",
          improvementTip:
            "Notice that the value here isn't the AI's explanation — it's the moment you tried to say it back in your own words and found out what you'd actually understood versus what you'd only read. That gap is exactly what this technique is designed to catch.",
        },
      ],
      keyTakeaways: [
        "AI is a 24/7 personal tutor for almost any subject",
        "Explain concepts simply, create practice exercises, answer endless questions",
        "Use the Feynman Technique: learn → teach back → get corrected → repeat",
        "The teach-back step is the one that actually makes it stick — don't skip it",
      ],
    },
  ],
};
