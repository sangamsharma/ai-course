import type { Module } from "@/lib/types";

export const module03: Module = {
  id: "ai-for-everyday-tasks",
  slug: "ai-for-everyday-tasks",
  title: "AI for Everyday Tasks",
  shortTitle: "Daily AI",
  description:
    "Use AI for emails, summaries, translations, meal planning, travel research, and personal finance — the things you do every day, made easier.",
  icon: "Pen",
  color: "emerald",
  estimatedMinutes: 60,
  order: 3,
  lessons: [
    // Lesson 1: Writing Emails
    {
      id: "m3-emails",
      slug: "writing-emails",
      moduleId: "ai-for-everyday-tasks",
      title: "Writing Emails with Perfect Grammar & Tone",
      subtitle: "Never stress about email wording again — AI handles grammar, tone, and structure",
      order: 1,
      estimatedMinutes: 12,
      content: [
        {
          type: "text",
          body: "Email is the #1 daily task that AI can help with. Whether it's a professional message to a client, a friendly note to a neighbor, or a complaint that needs the right tone — AI can draft it in seconds, with perfect grammar and exactly the right feeling.",
        },
        {
          type: "bullet-list",
          title: "Common Email Types AI Excels At:",
          items: [
            "Follow-up emails after meetings or conversations",
            "Polite reminders about unpaid invoices or deadlines",
            "Introduction emails to new contacts or potential clients",
            "Thank-you notes after interviews, gifts, or favors",
            "Complaint emails that are firm but professional",
            "Invitations for events, parties, or gatherings",
            "Status updates to teams, clients, or family members",
          ],
        },
        {
          type: "code-example",
          title: "Email Prompt Template:",
          code: `Write a [type] email to [recipient].
Context: [what happened, what you need].
Tone: [friendly / professional / urgent / apologetic].
Length: under [X] words.
Include: [specific points to mention].
Format: Start with a greeting, body, and closing.`,
          language: "text",
        },
        {
          type: "tip-box",
          variant: "example",
          title: "Real Example: Turning a Rough Draft into a Professional Email",
          body: "Rough draft: \"hey just checking in about the thing we talked about at the meeting let me know when u have time\"\n\nAI-polished version:\n\n\"Hi Mark,\n\nGreat meeting you at the Small Business Expo on Tuesday! I wanted to follow up on our conversation about potentially collaborating on the holiday catering project.\n\nWhen you have a moment, I'd love to schedule a quick 15-minute call to discuss next steps. Would Thursday or Friday work for you?\n\nBest regards,\n[Your Name]\"",
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Tone Matching Trick",
          body: "If you're responding to someone's email, paste their message into the AI and say: 'Match the tone and formality level of this email in my response.' The AI will analyze their writing style and mirror it — perfect for professional correspondence.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m3-pp-email",
          title: "Fix This Email",
          instruction:
            "Imagine you need to send a polite complaint about a damaged product. Using the email template above, write a prompt for AI to draft this email. Make it firm but polite.",
          promptHint:
            "Write a complaint email to an online store. I received a coffee maker that arrived with a cracked glass carafe. I want a replacement, not a refund. Order #8842. Tone: polite but firm. Under 100 words...",
          sampleResponse:
            "Subject: Replacement Request — Order #8842 (Damaged on Arrival)\n\nDear Customer Service Team,\n\nI received my order #8842 (Coffee Maker) today, but unfortunately the glass carafe arrived cracked. The box appears undamaged, so it may have been a packing issue.\n\nI'd prefer a replacement carafe rather than a refund — the coffee maker itself looks great and I'm excited to use it. Could you please advise on the next steps for a replacement?\n\nI've attached a photo of the damage for your reference.\n\nThank you for your help!\nBest regards,\n[Your Name]",
          improvementTip:
            "Notice how specifying 'replacement not refund' and providing the order number makes this email immediately actionable. The AI even added good ideas like mentioning the box was undamaged and attaching a photo — which makes the complaint more credible.",
        },
        {
          type: "quiz",
          id: "m3-q1-email",
          question: "What's the best way to get AI to match someone else's email tone?",
          options: [
            { id: "a", text: "Guess the tone and describe it yourself", isCorrect: false },
            { id: "b", text: "Paste their email and ask AI to match the tone", isCorrect: true },
            { id: "c", text: "Always use the same tone for every email", isCorrect: false },
            { id: "d", text: "Use only one-word tone descriptions like 'nice' or 'formal'", isCorrect: false },
          ],
          explanation:
            "Pasting the original email and asking AI to match its tone is the most reliable method. The AI analyzes the actual writing style (word choice, sentence length, formality) and mirrors it perfectly — no guessing needed.",
        },
      ],
      keyTakeaways: [
        "AI handles grammar, tone, and structure — you just provide the facts",
        "Paste the original email to match tone for responses",
        "Always review and personalize AI drafts before sending",
        "Save your email template for one-click drafts next time",
      ],
    },
    // Lesson 2: Summarize & Translate
    {
      id: "m3-summarize",
      slug: "summarize-and-translate",
      moduleId: "ai-for-everyday-tasks",
      title: "Summarize & Translate Anything",
      subtitle: "Digest long articles, reports, and conversations in seconds — in any language",
      order: 2,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "AI is incredibly good at two things humans find tedious: summarizing long texts and translating between languages. Whether it's a 50-page report, a rambling meeting transcript, or an article in a language you don't speak — AI handles it in seconds.",
        },
        {
          type: "bullet-list",
          title: "What AI Can Summarize for You:",
          items: [
            "Long articles and blog posts → key points in bullet form",
            "Meeting transcripts → action items and decisions",
            "Legal documents and contracts → plain English summary",
            "Research papers → main findings in simple language",
            "Recipe collections → ingredient lists and common steps",
            "Customer reviews → overall sentiment and common themes",
          ],
        },
        {
          type: "code-example",
          title: "Summarization Prompt:",
          code: `Summarize the following text in [X] bullet points. Use simple, everyday language. Include only the most important facts and conclusions. Skip minor details and repetition.\n\n[Paste text here]`,
          language: "text",
        },
        {
          type: "code-example",
          title: "Translation Prompt:",
          code: `Translate the following text from [source language] to [target language]. Keep the original tone and meaning. If there are idioms or cultural references, adapt them to make sense in [target language].\n\n[Paste text here]`,
          language: "text",
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Pro Tip: Claude for Long Documents",
          body: "Claude is especially good with very long documents — it can handle up to 200,000 words at once (that's a whole book!). For summarizing long reports, contracts, or research papers, Claude is often the best choice.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "m3-q2-summarize",
          question: "Which AI tool is best for summarizing very long documents like contracts or books?",
          options: [
            { id: "a", text: "ChatGPT", isCorrect: false },
            { id: "b", text: "Claude", isCorrect: true },
            { id: "c", text: "Gemini", isCorrect: false },
            { id: "d", text: "All are equally good with long documents", isCorrect: false },
          ],
          explanation:
            "Claude can handle up to 200,000 words at once — far more than the other tools. For long contracts, reports, or books, Claude is usually the best choice. ChatGPT and Gemini work well for shorter texts.",
        },
      ],
      keyTakeaways: [
        "AI summarizes long texts into key points in seconds",
        "Translation works between most languages with good accuracy",
        "Claude is best for very long documents (books, contracts)",
        "Always review AI translations for nuance — especially with idioms",
      ],
    },
    // Lesson 3: Planning Events
    {
      id: "m3-planning",
      slug: "planning-events",
      moduleId: "ai-for-everyday-tasks",
      title: "Planning Events & Making Lists",
      subtitle: "From birthday parties to business meetings — AI is your personal event planner",
      order: 3,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "Event planning is a perfect AI use case: lots of details, many moving parts, and a clear structure. AI can create complete plans with timelines, checklists, and budgets — you just fill in the specifics.",
        },
        {
          type: "code-example",
          title: "Event Planning Prompt:",
          code: `Help me plan a [event type] for [number] guests on [date].
Budget: [amount].
Venue: [location type].
Key requirements: [any must-haves — dietary, accessibility, theme].
Please provide:
1. A timeline (from 3 weeks before to day-of)
2. A supply checklist
3. Menu suggestions
4. A budget breakdown
5. Any tips for making it special`,
          language: "text",
        },
        {
          type: "text",
          body: "This also works for any kind of list-making: grocery lists from recipes, packing lists for trips, to-do lists for projects, or gift lists for holidays. Just tell the AI what you need and any constraints.",
        },
        {
          type: "tip-box",
          variant: "example",
          title: "Real Example: Kids' Birthday Party",
          body: "A parent asked AI to plan a dinosaur-themed 6th birthday for 15 kids, budget $300. The AI suggested: dig-for-fossils activity (sandbox + plastic dinosaurs, $25), dino egg hunt (plastic eggs + candy, $30), volcano cake (baking supplies, $35), dino-mite juice station (punch + labels, $20), complete timeline from invites to cleanup — all within budget. The parent just had to execute.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m3-pp-event",
          title: "Plan Your Next Event",
          instruction:
            "Think of an upcoming event in your life — a dinner, a meeting, a celebration. Write a detailed prompt for AI to plan it, including budget, guests, and any special requirements.",
          promptHint:
            "Help me plan a graduation dinner for my daughter. 12 family members, budget $400, at our home. She's graduating from nursing school — theme should celebrate that...",
          sampleResponse:
            "🎓 Nursing School Graduation Dinner Plan\n\nTheme: 'Future Healer' — White, navy, and gold decor with subtle medical-themed touches (stethoscope as napkin rings, pill-bottle flower vases filled with white tulips).\n\nBudget Breakdown ($400):\n• Decorations: $60 (balloons, tablecloth, flowers, photo banner)\n• Food: $200 (catered or home-cooked main + sides)\n• Cake: $50 (custom graduation cake)\n• Drinks: $50 (sparkling cider, wine for adults, soft drinks)\n• Misc: $40 (thank-you cards, photo props)\n\nTimeline:\n• 3 weeks before: Send invites, order cake\n• 1 week before: Buy decorations, confirm guest count\n• Day before: Clean house, prep food, set up tables\n• Day of: Decorate (2 hours before), final food prep, greet guests!\n\nSpecial Touches:\n• 'Advice for the Nurse' cards — guests write tips, compiled into a keepsake book\n• Slideshow of her nursing school journey\n• Signature cocktail: 'The Night Shift' (blue curaçao + lemonade)",
          improvementTip:
            "Notice how specifying the profession (nursing), occasion (graduation), and location (home) gave you a personalized, creative plan. The AI even invented themed details like 'Advice for the Nurse' cards — something you might not have thought of!",
        },
      ],
      keyTakeaways: [
        "AI creates complete event plans with timelines, budgets, and checklists",
        "The more details you provide (theme, guests, budget), the more useful the plan",
        "Works for any list-making task — groceries, packing, to-dos, gifts",
        "You make the decisions; AI organizes everything",
      ],
    },
    // Lesson 4: Meal Planning
    {
      id: "m3-recipes",
      slug: "recipes-and-shopping",
      moduleId: "ai-for-everyday-tasks",
      title: "Meal Planning & Shopping Lists",
      subtitle: "Weekly meal plans, dietary-specific recipes, and automatic shopping lists",
      order: 4,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "Meal planning is one of the most practical, time-saving uses of AI. Tell it what you like, what you have, your dietary needs, and your budget — it creates a complete plan with recipes and a shopping list.",
        },
        {
          type: "code-example",
          title: "Meal Planning Prompt:",
          code: `Create a [X]-day meal plan for [number] people.
Dietary requirements: [vegetarian, gluten-free, diabetic-friendly, etc.].
Cuisine preferences: [Italian, Asian, comfort food, etc.].
Budget: approximately $[X] for the week.
Cooking skill level: [beginner / intermediate].
Time per meal: under [X] minutes.
Include: breakfast, lunch, dinner, and snacks.
Also create: a complete shopping list grouped by grocery store section.`,
          language: "text",
        },
        {
          type: "text",
          body: "You can also use AI to work with what you already have. Just list the ingredients in your fridge and pantry, and ask: 'What meals can I make with these ingredients?' AI will suggest combinations you might not have thought of — reducing food waste and saving money.",
        },
        {
          type: "tip-box",
          variant: "example",
          title: "Real Example: Feeding a Diabetic Parent",
          body: "A caregiver asked AI: 'Create a 5-day meal plan for my 72-year-old mother who has type 2 diabetes, high blood pressure, and is a picky eater. She prefers simple, familiar foods. Budget: $80/week. Include a shopping list.' The AI created a plan with oatmeal breakfasts, soup-and-salad lunches, simple protein dinners (baked chicken, fish, lentil soup), and diabetic-friendly snacks — all with portion sizes and a grocery list organized by aisle.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "m3-q3-meals",
          question: "What's the best way to reduce food waste using AI?",
          options: [
            { id: "a", text: "Ask AI for the cheapest recipes online", isCorrect: false },
            { id: "b", text: "List what's in your fridge and ask AI what meals you can make", isCorrect: true },
            { id: "c", text: "Always buy new ingredients for every recipe", isCorrect: false },
            { id: "d", text: "Only cook recipes AI suggests", isCorrect: false },
          ],
          explanation:
            "Listing what you already have and asking AI to suggest meals uses what would otherwise go to waste. It's a practical way to save money and reduce waste — and you might discover new recipe combinations.",
        },
      ],
      keyTakeaways: [
        "AI creates complete meal plans with dietary and budget constraints",
        "List your ingredients for 'what can I cook' suggestions",
        "Include a shopping list organized by grocery aisle",
        "Claude is particularly good at detailed, structured meal plans",
      ],
    },
    // Lesson 5: Travel Planning
    {
      id: "m3-travel",
      slug: "travel-planning",
      moduleId: "ai-for-everyday-tasks",
      title: "Travel & Vacation Planning",
      subtitle: "Plan complete trips — itineraries, budgets, packing lists, and local tips",
      order: 5,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "AI is a fantastic travel planning assistant. It can suggest destinations based on your preferences, create day-by-day itineraries, estimate costs, and even recommend local restaurants and hidden gems. Think of it as a travel agent available 24/7.",
        },
        {
          type: "code-example",
          title: "Travel Planning Prompt:",
          code: `Plan a [X]-day trip to [destination] for [traveler type].
Budget: [low / mid / luxury] — approximately $[X].
Interests: [history, food, nature, shopping, relaxation, adventure].
Travel style: [fast-paced / relaxed / mix].
Please include:
1. Day-by-day itinerary with morning, afternoon, and evening activities
2. Estimated cost breakdown (flights, hotels, food, activities)
3. 5 local restaurant recommendations
4. Packing list for [season]
5. Any tips or warnings for first-time visitors`,
          language: "text",
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Use Claude for Detailed Itineraries",
          body: "Claude excels at structured, detailed travel plans. Its ability to handle long, organized outputs makes it perfect for multi-day itineraries. ChatGPT is great for brainstorming destinations if you're not sure where to go. Gemini can help with visual research if you want to see pictures of destinations.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m3-pp-travel",
          title: "Plan a Dream Trip",
          instruction:
            "Think of a place you'd love to visit. Write a detailed travel planning prompt — include your interests, budget, and travel style.",
          promptHint:
            "Plan a 5-day trip to Kyoto, Japan for a couple in their 60s. Mid-range budget ($3,000). Interests: gardens, temples, traditional culture, good food (not too adventurous). Relaxed pace with plenty of rest time...",
          sampleResponse:
            "🌸 5-Day Kyoto Itinerary for Relaxed Travelers\n\nDay 1 — Arrival & Settle In: Afternoon arrival at Kansai Airport. Take the comfortable limousine bus to your hotel (recommend: Hotel Granvia Kyoto near the station for easy access). Evening: gentle stroll through the atmospheric Gion district. Dinner at a traditional teahouse serving kaiseki (multi-course Japanese dinner).\n\nDay 2 — Eastern Kyoto: Morning (9 AM, after rush hour): visit Kiyomizu-dera Temple (arrive early for fewer crowds, take your time on the wooden terrace). Lunch: traditional tofu restaurant nearby. Afternoon: explore the Philosopher's Path (flat, shaded walk along a canal — beautiful and easy). Evening: relaxed dinner at a family-run restaurant in the Higashiyama area.\n\nDay 3 — Gardens Day: Morning: Ryoan-ji Temple (famous Zen rock garden — benches available for resting). Lunch: simple Japanese set meal. Afternoon: Kinkaku-ji (Golden Pavilion) — mostly flat, stunning photo opportunities. Evening: Nishiki Market for food sampling (go around 4 PM when less crowded).\n\nDay 4 — Arashiyama: Morning: bamboo grove (go by 8 AM to avoid crowds). Lunch: riverside restaurant. Afternoon: Tenryu-ji Temple garden. Optional: romantic rickshaw ride through the district. Evening: special anniversary dinner at a rooftop restaurant.\n\nDay 5 — Cultural Morning & Departure: Morning: tea ceremony experience (45 minutes, seated). Last souvenir shopping at the station. Afternoon departure.\n\nBudget: Flights ~$1,200, Hotel 4 nights ~$800, Food ~$400, Activities ~$300, Transport ~$200, Misc ~$100",
          improvementTip:
            "Specifying your age, pace preference (relaxed), and specific interests (gardens, temples) created a perfectly tailored plan. The AI even considered practical details like avoiding rush hour, finding benches for resting, and suggesting less-crowded times.",
        },
      ],
      keyTakeaways: [
        "AI is your 24/7 travel agent — detailed itineraries in seconds",
        "Specify interests, budget, pace, and mobility needs for best results",
        "Different tools excel at different travel tasks (Claude = details, ChatGPT = ideas, Gemini = visuals)",
        "Always verify prices and availability — AI data may not be real-time",
      ],
    },
    // Lesson 6: Personal Finance
    {
      id: "m3-finance",
      slug: "personal-finance",
      moduleId: "ai-for-everyday-tasks",
      title: "Personal Finance & Budgeting",
      subtitle: "Create budgets, track expenses, and get simple financial guidance",
      order: 6,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "AI can help you organize your finances, create budgets, and understand money matters in plain English. It won't replace a financial advisor, but it's excellent for budgeting, expense tracking, and explaining financial concepts simply.",
        },
        {
          type: "code-example",
          title: "Budget Planning Prompt:",
          code: `Help me create a monthly budget. My monthly income is $[X]. My fixed expenses are: [list them]. My financial goals are: [saving for X, paying off Y]. Please create: a simple budget breakdown by category, suggestions for reducing expenses, and a savings plan to reach my goals. Use simple language — no financial jargon.`,
          language: "text",
        },
        {
          type: "tip-box",
          variant: "warning",
          title: "Important Safety Note",
          body: "NEVER share actual account numbers, passwords, social security numbers, or credit card details with AI. Use rounded numbers and general categories. AI is for planning and education, not for accessing your actual accounts.",
        },
        {
          type: "text",
          body: "AI is also great for: comparing costs ('Should I buy or lease a car?'), explaining financial terms ('What's a 401k in simple terms?'), calculating loan payments, and creating savings plans for specific goals like a vacation or new appliance.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "m3-q4-finance",
          question: "What should you NEVER share with AI when asking about finances?",
          options: [
            { id: "a", text: "Your monthly income amount", isCorrect: false },
            { id: "b", text: "Account numbers, passwords, or social security numbers", isCorrect: true },
            { id: "c", text: "Your financial goals", isCorrect: false },
            { id: "d", text: "Your monthly expense categories", isCorrect: false },
          ],
          explanation:
            "Account numbers, passwords, and SSNs should never be shared with any AI tool. Use rounded/general numbers for income and expenses — AI is for planning, not for accessing your actual accounts.",
        },
      ],
      keyTakeaways: [
        "AI helps with budgeting, expense tracking, and financial education",
        "Use rounded numbers — never share account details or passwords",
        "AI explains financial concepts in plain English, not jargon",
        "For serious financial decisions, consult a human professional",
      ],
    },
  ],
};
