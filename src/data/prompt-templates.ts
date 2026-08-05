import type { PromptTemplate } from "@/lib/types";

export const promptTemplates: PromptTemplate[] = [
  {
    id: "email-follow-up",
    slug: "email-follow-up",
    title: "Professional Follow-Up Email",
    description: "A polite follow-up email template you can customize for any situation.",
    category: "email",
    categoryLabel: "Email",
    prompt: `Write a polite follow-up email about [topic].
The recipient is [name/role].
It's been [X days] since our last contact.
Tone: friendly but professional.
Keep it under 100 words.`,
    usageTip: "Replace the bracketed text with your specific details. The more context you give, the better the email will sound.",
    moduleRef: "ai-for-everyday-tasks",
    difficulty: "beginner",
  },
  {
    id: "social-media-post",
    slug: "social-media-post",
    title: "Social Media Post",
    description: "Create an engaging social media post for your business.",
    category: "social-media",
    categoryLabel: "Social Media",
    prompt: `Create a [platform] post for my [business type] business.
Topic: [what you're posting about]
Include: a catchy opening, 2-3 key points, and a call to action.
Tone: [friendly/professional/playful]
Add 3 relevant hashtags.`,
    usageTip: "Specify which platform (Instagram, Facebook, LinkedIn) as each has a different style. Add emojis if appropriate for your audience.",
    moduleRef: "ai-for-your-business",
    difficulty: "beginner",
  },
  {
    id: "resume-bullet",
    slug: "resume-bullet",
    title: "Resume Bullet Points",
    description: "Turn your job duties into impressive resume bullet points.",
    category: "writing",
    categoryLabel: "Writing",
    prompt: `Help me write 5 resume bullet points for my role as [job title] at [company type].
My main responsibilities were:
1. [responsibility 1]
2. [responsibility 2]
3. [responsibility 3]
Make each bullet start with a strong action verb and include measurable results where possible.`,
    usageTip: "Be as specific as possible about your achievements. Instead of 'managed social media,' say 'grew Instagram following from 500 to 2,000 in 6 months.'",
    moduleRef: "ai-for-personal-documents",
    difficulty: "beginner",
  },
  {
    id: "menu-card",
    slug: "menu-card",
    title: "Restaurant Menu Card",
    description: "Design a menu card layout and descriptions for food items.",
    category: "business",
    categoryLabel: "Business",
    prompt: `Help me write descriptions for my [cuisine type] restaurant menu.
I need descriptions for these dishes:
1. [dish 1 name] — [key ingredients]
2. [dish 2 name] — [key ingredients]
3. [dish 3 name] — [key ingredients]
Make each description 1-2 sentences that sound appetizing and include the key ingredients naturally.`,
    usageTip: "If using Gemini, you can also ask it to suggest visual layout ideas for the menu card design.",
    moduleRef: "ai-for-your-business",
    difficulty: "beginner",
  },
  {
    id: "event-planning",
    slug: "event-planning",
    title: "Event Planning Checklist",
    description: "Create a detailed checklist for planning any event.",
    category: "planning",
    categoryLabel: "Planning",
    prompt: `Create a detailed planning checklist for a [type of event].
The event is for [number] guests on [date].
Budget: [amount]
Venue: [indoor/outdoor/not yet decided]
Include: timeline, supplies needed, food & drinks, decorations, and a day-of schedule.`,
    usageTip: "Ask the AI to break the checklist into phases: 2 weeks before, 1 week before, day before, and day of event.",
    moduleRef: "ai-for-everyday-tasks",
    difficulty: "beginner",
  },
  {
    id: "summarize-article",
    slug: "summarize-article",
    title: "Summarize Any Article",
    description: "Get the key points from any article in plain English.",
    category: "summarize",
    categoryLabel: "Summarize",
    prompt: `Summarize the following article in 5 bullet points. Use simple, everyday language that anyone can understand. Include the main argument and the most important facts.

[Paste article text here]`,
    usageTip: "You can paste the entire article text, or with ChatGPT/Gemini, you can share the URL directly.",
    moduleRef: "ai-for-everyday-tasks",
    difficulty: "beginner",
  },
  {
    id: "customer-complaint",
    slug: "customer-complaint",
    title: "Responding to Customer Complaints",
    description: "Draft a professional, empathetic response to an unhappy customer.",
    category: "business",
    categoryLabel: "Business",
    prompt: `Help me respond to a customer who is unhappy about [issue].
Their main concern is: [describe the complaint]
I want to: [offer solution — refund/replacement/apology]
Tone: empathetic and professional, not defensive.
Keep it short — under 100 words.`,
    usageTip: "Always personalize the AI's draft with your own voice. The AI gives you a starting point — you make it sound like you.",
    moduleRef: "ai-for-your-business",
    difficulty: "intermediate",
  },
  {
    id: "trip-itinerary",
    slug: "trip-itinerary",
    title: "Travel Itinerary Planner",
    description: "Plan a complete day-by-day trip itinerary.",
    category: "planning",
    categoryLabel: "Planning",
    prompt: `Plan a [number]-day trip to [destination] for [type of traveler — family/couple/solo].
Budget: [low/mid/high]
Interests: [food, history, nature, shopping, etc.]
For each day, suggest: morning activity, lunch spot, afternoon activity, dinner recommendation.`,
    usageTip: "Use Claude for detailed trip planning — it handles long, structured responses well. Use Gemini if you want image suggestions for destinations.",
    moduleRef: "ai-for-everyday-tasks",
    difficulty: "beginner",
  },
  {
    id: "cover-letter",
    slug: "cover-letter",
    title: "Cover Letter Draft",
    description: "Write a tailored cover letter for a job application.",
    category: "writing",
    categoryLabel: "Writing",
    prompt: `Write a cover letter for a [job title] position at [company name].
About me: [2-3 sentences about your experience and skills]
Why I'm interested: [1-2 sentences about why you want this job]
Tone: professional but enthusiastic.
Keep it to 3 short paragraphs.`,
    usageTip: "Use the AI draft as a starting point. Add personal details and your own voice — employers can tell when a letter is fully AI-written.",
    moduleRef: "ai-for-personal-documents",
    difficulty: "intermediate",
  },
  {
    id: "travel-plan",
    slug: "travel-plan",
    title: "Travel Itinerary Planner",
    description: "Plan a complete day-by-day trip with budget, activities, and local tips.",
    category: "planning",
    categoryLabel: "Planning",
    prompt: `Plan a [X]-day trip to [destination] for [traveler type — couple/solo/family].
Budget: [low / mid / luxury] — approximately $[X].
Interests: [history, food, nature, shopping, relaxation].
Travel style: [fast-paced / relaxed / mix].
Include: day-by-day itinerary, estimated costs, 5 restaurant recommendations, packing list, and tips for first-time visitors.`,
    usageTip: "Claude is best for detailed itineraries. ChatGPT is great for brainstorming destinations. Gemini can help with visual research.",
    moduleRef: "ai-for-everyday-tasks",
    difficulty: "beginner",
  },
  {
    id: "meal-plan",
    slug: "meal-plan",
    title: "Weekly Meal Planner",
    description: "Create a personalized meal plan with dietary needs and a shopping list.",
    category: "planning",
    categoryLabel: "Planning",
    prompt: `Create a [X]-day meal plan for [number] people.
Dietary needs: [vegetarian, gluten-free, diabetic-friendly, etc.].
Cuisine preferences: [Italian, Asian, comfort food, etc.].
Budget: approximately $[X] for the week.
Time per meal: under [X] minutes.
Include: breakfast, lunch, dinner, snacks, and a shopping list grouped by grocery store section.`,
    usageTip: "List what's already in your fridge to reduce waste — AI will suggest meals using those ingredients first.",
    moduleRef: "ai-for-everyday-tasks",
    difficulty: "beginner",
  },
  {
    id: "wedding-speech",
    slug: "wedding-speech",
    title: "Wedding Speech Writer",
    description: "Craft a heartfelt or funny wedding speech that hits the right notes.",
    category: "creative",
    categoryLabel: "Creative",
    prompt: `Write a [best man/maid of honor/father of the bride] speech for a wedding.
About the couple: [names, how they met, what makes them special].
Include: [X] funny stories and [X] heartfelt moments.
Tone: [balance humor with heart / mostly funny / mostly sentimental].
Length: about [X] minutes when spoken.
Audience: [formal family gathering / casual friends / mixed ages].`,
    usageTip: "Provide real stories and memories — the AI will structure them beautifully. Practice the delivery out loud to make it sound natural.",
    moduleRef: "ai-for-personal-documents",
    difficulty: "beginner",
  },
  {
    id: "learning-tutor",
    slug: "learning-tutor",
    title: "Personal AI Tutor",
    description: "Learn any subject with AI as your patient, adaptive teacher.",
    category: "other",
    categoryLabel: "Learning",
    prompt: `I want to learn about [topic]. I'm a complete beginner.
Explain it like I'm [age/background].
Break it into [X] simple lessons.
For each lesson, give me: a simple explanation, a real-world example, and something I can try myself.
After explaining, ask me questions to check my understanding.
If I get something wrong, explain it differently — don't just repeat.`,
    usageTip: "Use the Feynman Technique: let AI explain, then you explain back, then AI corrects you. Active learning sticks better than passive reading.",
    moduleRef: "ai-for-personal-documents",
    difficulty: "beginner",
  },
  {
    id: "social-media-calendar",
    slug: "social-media-calendar",
    title: "Monthly Content Calendar",
    description: "Plan a full month of social media content for your business.",
    category: "business",
    categoryLabel: "Business",
    prompt: `Create a [X]-week social media content calendar for my [business type].
My business: [what you do, who your customers are].
Platforms: [Instagram, Facebook, LinkedIn, etc.].
Goal: [get more customers / promote a product / increase awareness].
Budget for ads: $[X].
Include: post ideas for each day, caption templates, hashtag suggestions, and any campaign or promotion themes.`,
    usageTip: "Combine with the social media post template — use this for planning, then use the post template for writing each individual post.",
    moduleRef: "ai-for-your-business",
    difficulty: "intermediate",
  },
  {
    id: "guest-list",
    slug: "guest-list",
    title: "Guest List Organizer",
    description: "Organize and manage a guest list for any event.",
    category: "planning",
    categoryLabel: "Planning",
    prompt: `Help me organize a guest list for my [event type].
I need to track: guest names, contact info, RSVP status, dietary restrictions, and plus-ones.
Suggest a simple format I can use (table or list).
Also suggest: how to group guests for seating, and a timeline for sending invitations.`,
    usageTip: "Ask the AI to output the guest list as a table format that you can copy into Excel or Google Sheets.",
    moduleRef: "ai-for-your-business",
    difficulty: "beginner",
  },

  // === NEW: Sabrina Ramonov Library-inspired Templates ===

  // --- Business & Sales ---
  {
    id: "sales-proposal",
    slug: "sales-proposal",
    title: "SaaS Sales Proposal",
    description: "Create a professional sales proposal for software or service offerings.",
    category: "business",
    categoryLabel: "Business",
    prompt: `Create a comprehensive sales proposal for my [product/service]. Include: Executive Summary, Problem Statement, Proposed Solution, Implementation Timeline (with phases), Pricing Structure, Expected ROI with metrics, Case Studies or testimonials, Terms and Conditions, and Contact Information. Research industry benchmarks for pricing and ROI claims. Tone: professional but conversational.`,
    usageTip: "Fill in your product name, target industry, and any existing customer results. The AI will structure it professionally — you just add your specifics.",
    difficulty: "intermediate",
  },
  {
    id: "lead-magnet",
    slug: "lead-magnet",
    title: "Lead Magnet Creator",
    description: "Design a free resource that attracts potential customers to your business.",
    category: "business",
    categoryLabel: "Business",
    prompt: `Help me create a lead magnet for my [business type]. My target audience is [describe customers]. I want to offer something free that demonstrates my expertise and solves a specific problem. Suggest: 3 lead magnet ideas (e.g., checklist, template, mini-course, ebook, calculator), the best one with a detailed outline, a landing page headline, and 3 email follow-up messages to nurture leads after they download.`,
    usageTip: "The best lead magnets solve one specific problem quickly. Don't try to cover everything — focus on one pain point your customers feel daily.",
    difficulty: "intermediate",
  },
  {
    id: "elevator-pitch",
    slug: "elevator-pitch",
    title: "Elevator Pitch & Funding Ask",
    description: "Craft a compelling 60-second pitch for investors or partners.",
    category: "business",
    categoryLabel: "Business",
    prompt: `Write a 60-second elevator pitch for my [business/idea]. Include: the problem I solve, my solution, why it's different, traction so far (even if small), the size of the opportunity, and a clear ask (funding amount, partnership, meeting). Make it memorable — use a hook, a surprising stat, or a relatable story. Then give me a 30-second version and a 3-sentence version for written use.`,
    usageTip: "Practice the pitch out loud and time yourself. The 60-second version should feel natural, not rushed. Cut anything that isn't essential.",
    difficulty: "intermediate",
  },
  {
    id: "grant-proposal",
    slug: "grant-proposal",
    title: "Grant Proposal Writer",
    description: "Draft a compelling grant proposal for nonprofit or business funding.",
    category: "business",
    categoryLabel: "Business",
    prompt: `Help me write a grant proposal for [project/organization]. Include: Executive Summary, Need Statement (with supporting data), Project Description and Goals, Budget Overview, Expected Outcomes and Impact, Organization Background, and Sustainability Plan. Use clear, persuasive language. Research common grant requirements in [sector]. IMPORTANT: Provide a template structure I can customize — do not fabricate statistics.`,
    usageTip: "For the Need Statement, the AI can help you structure your argument, but use real local data from your own research. Grant reviewers can spot made-up statistics.",
    difficulty: "intermediate",
  },

  // --- Social Media & Content ---
  {
    id: "facebook-post",
    slug: "facebook-post",
    title: "Facebook Post Creator",
    description: "Create engaging Facebook posts with hooks, body, and call-to-action.",
    category: "social-media",
    categoryLabel: "Social Media",
    prompt: `Create a Facebook post for my [business/page]. Topic: [what to post about]. Requirements: craft an attention-grabbing opening line, develop 2-3 value points in the body, end with a clear call-to-action (comment, like, share, click link). Tone: [casual/professional/humorous]. Suggest visual elements: images, emojis, or hashtags to boost engagement.`,
    usageTip: "Facebook's algorithm favors posts that spark conversation. Ask a question in your CTA to encourage comments — it dramatically increases reach.",
    difficulty: "beginner",
  },
  {
    id: "instagram-reels",
    slug: "instagram-reels",
    title: "Instagram Reels Strategy",
    description: "Plan a series of short-form video content for Instagram growth.",
    category: "social-media",
    categoryLabel: "Social Media",
    prompt: `Create a 4-week Instagram Reels content plan for my [business/niche]. For each week, suggest: 3 Reel topics with hooks, visual style recommendations, trending audio suggestions, and caption templates. Include: strategies for the first 3 seconds (hook), educational content ideas, behind-the-scenes content, and user-generated content prompts. Target: growing from [current followers] to [goal].`,
    usageTip: "The first 3 seconds determine whether someone keeps watching. Start with a bold statement, a surprising fact, or a question that creates curiosity.",
    difficulty: "intermediate",
  },
  {
    id: "content-calendar-monthly",
    slug: "content-calendar-monthly",
    title: "Monthly Content Calendar",
    description: "Plan a full month of content across all your marketing channels.",
    category: "social-media",
    categoryLabel: "Social Media",
    prompt: `Create a 30-day content calendar for my [business]. Include: daily post topics for [platforms], content themes for each week, suggested post formats (image, video, carousel, text), caption templates for key posts, hashtag groups, and recommended posting times. Align content with [upcoming promotions/holidays/events]. Balance: 40% educational, 30% entertaining, 20% promotional, 10% user-generated or community content.`,
    usageTip: "Batch-create your content one week ahead. Use AI to draft all captions in one session, then schedule them. Consistency matters more than perfection.",
    difficulty: "intermediate",
  },

  // --- Career & Professional ---
  {
    id: "career-transition",
    slug: "career-transition",
    title: "Career Transition Guide",
    description: "Plan a complete career change with skills mapping and action steps.",
    category: "writing",
    categoryLabel: "Writing",
    prompt: `Help me plan a career transition from [current role] to [target role/industry]. Include: transferable skills mapping (what I already have vs. what I need), recommended learning path (courses, certifications), networking strategy, resume reframing tips (how to position past experience for the new role), a 90-day transition timeline, and salary expectations research. Acknowledge emotional aspects: dealing with uncertainty, imposter syndrome, and motivation.`,
    usageTip: "Be honest about your current skills — the AI can't map what you don't tell it. List even 'soft' skills like communication, problem-solving, and leadership.",
    difficulty: "intermediate",
  },
  {
    id: "linkedin-optimization",
    slug: "linkedin-optimization",
    title: "LinkedIn Profile Optimizer",
    description: "Rewrite your LinkedIn profile to attract recruiters and opportunities.",
    category: "writing",
    categoryLabel: "Writing",
    prompt: `Optimize my LinkedIn profile for [target role/industry]. Rewrite: headline (under 220 characters, keyword-rich), About section (tell my story in 3 short paragraphs with a hook), Experience section (turn duties into achievement-focused bullets with metrics), and Skills section (prioritize most relevant skills). Suggest: a professional background photo concept, content I should post to build authority, and people/types of companies I should connect with.`,
    usageTip: "LinkedIn is a search engine — include keywords recruiters search for in your headline and About section. Look at job descriptions for your target role to find the right terms.",
    difficulty: "beginner",
  },
  {
    id: "interview-preparation",
    slug: "interview-preparation",
    title: "Interview Preparation Coach",
    description: "Prepare for job interviews with tailored questions and STAR answers.",
    category: "writing",
    categoryLabel: "Writing",
    prompt: `Help me prepare for an interview for a [job title] position at [company type]. Generate: 10 likely interview questions (mix of behavioral, technical, and company-fit), STAR-method answer templates for 5 key behavioral questions based on my background, 5 questions I should ask THEM (to show insight and interest), tips for virtual vs. in-person, and a pre-interview research checklist. Include: how to handle salary questions and what to say about weaknesses.`,
    usageTip: "Practice your answers out loud — not just in your head. Record yourself on your phone and watch it back. AI gives you the words; practice gives you the delivery.",
    difficulty: "intermediate",
  },

  // --- Education & Study ---
  {
    id: "course-creator",
    slug: "course-creator",
    title: "Online Course Creator",
    description: "Design a complete online course from outline to marketing.",
    category: "other",
    categoryLabel: "Learning",
    prompt: `Help me design an online course about [topic]. Include: course title and subtitle options, learning outcomes (what students will achieve), module-by-module breakdown (6-10 modules), lesson outlines for each module, exercise and assignment ideas, suggested video length per lesson, pricing strategy, platform recommendations, and a launch marketing plan. Target audience: [describe learners]. Prerequisites: [any required knowledge].`,
    usageTip: "Start with the learning outcomes — every module and lesson should directly support one of them. If a lesson doesn't serve an outcome, cut it.",
    difficulty: "intermediate",
  },
  {
    id: "study-guide",
    slug: "study-guide",
    title: "Personalized Study Guide",
    description: "Create a study plan for any exam or certification.",
    category: "other",
    categoryLabel: "Learning",
    prompt: `Create a study guide for [exam/certification name]. Include: exam overview (format, sections, passing score), topic weightings (what % each section counts), recommended study resources (books, courses, practice tests), a weekly study schedule for [X] weeks, key concepts flashcards outline, common mistake areas, and test-taking strategies. Adapt for my learning style: [visual/reading/practice-based]. I have [X] hours per week to study.`,
    usageTip: "The AI can estimate topic weightings but verify them against the official exam guide. Use AI for the study plan structure; use official materials for the content.",
    difficulty: "beginner",
  },

  // --- Health & Wellness ---
  {
    id: "fitness-plan",
    slug: "fitness-plan",
    title: "Personalized Fitness Plan",
    description: "Create a workout and nutrition plan tailored to your goals.",
    category: "personal",
    categoryLabel: "Personal",
    prompt: `Create a [X]-day fitness training plan for a [beginner/intermediate/advanced] exerciser. Goals: [weight loss/muscle gain/endurance/general health]. Equipment available: [gym/home/bodyweight only]. Session length: [X] minutes. Injuries or limitations: [list any]. Include: warm-up, main workout, cool-down stretches, nutrition guidance (general principles, not medical advice), progress tracking methods, and motivation tips. Emphasize proper form and gradual progression.`,
    usageTip: "This is for planning and motivation. AI is NOT a certified personal trainer — consult a professional before starting any new exercise program, especially if you have health conditions.",
    difficulty: "beginner",
  },
  {
    id: "mindfulness-guide",
    slug: "mindfulness-guide",
    title: "Daily Mindfulness Guide",
    description: "Create a personalized mindfulness and stress-management routine.",
    category: "personal",
    categoryLabel: "Personal",
    prompt: `Create a daily mindfulness and stress-management guide tailored for someone who [describe your situation: busy parent, stressed professional, student, retiree]. Include: morning routine (5-10 minutes), midday reset practice, evening wind-down, weekend reflection prompts, breathing exercises (with simple instructions), and strategies for managing [specific stressors]. Keep techniques simple and practical — something anyone can do without special equipment or training.`,
    usageTip: "Describe your actual daily schedule and real stressors. The more honest you are, the more practical and useful the guide will be.",
    difficulty: "beginner",
  },

  // --- Finance ---
  {
    id: "financial-literacy-course",
    slug: "financial-literacy-course",
    title: "Financial Literacy Course Creator",
    description: "Design a personal finance education curriculum.",
    category: "personal",
    categoryLabel: "Personal",
    prompt: `Design a financial literacy curriculum for [audience: beginners/young adults/small business owners/retirees]. Modules should cover: budgeting fundamentals, understanding credit and debt, saving strategies, investing basics, tax essentials, insurance overview, and retirement planning. For each module: learning objectives, key concepts explained simply, practical exercise, and common mistakes to avoid. Use plain language — no financial jargon without explanation.`,
    usageTip: "AI can explain financial concepts clearly, but for specific investment advice, tax planning, or major financial decisions, consult a qualified human advisor.",
    difficulty: "intermediate",
  },
  {
    id: "budget-planner",
    slug: "budget-planner",
    title: "Budget Analysis & Planning",
    description: "Analyze your spending patterns and create a practical budget.",
    category: "personal",
    categoryLabel: "Personal",
    prompt: `Help me create a practical monthly budget. My monthly income is approximately $[X]. Fixed expenses: [list categories with approximate amounts — rent, utilities, loans, insurance]. Variable expenses: [list categories — groceries, transport, entertainment]. Financial goals: [saving for X, paying off Y by Z date]. Suggest: category-specific budget targets, areas where I can likely reduce spending, a simple tracking method, and a monthly review checklist. Use the 50/30/20 rule as a starting framework.`,
    usageTip: "Use rounded numbers and general categories. NEVER share actual account numbers, passwords, or bank details with AI.",
    difficulty: "beginner",
  },

  // --- Creative ---
  {
    id: "comic-book-creator",
    slug: "comic-book-creator",
    title: "Comic Book / Graphic Novel Creator",
    description: "Develop a comic book concept from plot to panel descriptions.",
    category: "creative",
    categoryLabel: "Creative",
    prompt: `Help me develop a comic book concept. Genre: [superhero/slice-of-life/fantasy/sci-fi/memoir]. My idea: [one-sentence premise]. Develop: protagonist profile (motivations, flaws, arc), antagonist and central conflict, 3-act plot outline, setting and world-building notes, tone and art style suggestions, and a sample page script (panel-by-panel descriptions with dialogue). Target audience: [age group]. Length: [one-shot / miniseries / ongoing].`,
    usageTip: "Start with the protagonist's emotional journey — plot follows character. Describe what the artist would draw in each panel, not just the dialogue.",
    difficulty: "intermediate",
  },
  {
    id: "song-lyrics",
    slug: "song-lyrics",
    title: "Song Lyrics Co-Writer",
    description: "Write song lyrics with AI as your creative partner.",
    category: "creative",
    categoryLabel: "Creative",
    prompt: `Help me write song lyrics. Genre: [pop/rock/folk/hip-hop/R&B/country]. Theme: [love/loss/hope/social commentary/personal story]. Mood: [uplifting/melancholic/angry/nostalgic]. Structure: [verse-chorus-verse-chorus-bridge-chorus]. Include: a memorable hook/chorus, verses that tell a story, a bridge that shifts perspective, and suggestions for rhythm and melody style. Reference artists I like: [name 2-3 for style inspiration].`,
    usageTip: "AI gives you a first draft. Rewrite lines that don't feel like YOU. The best songs come from your personal experience — AI just helps structure it.",
    difficulty: "intermediate",
  },

  // --- Content Creation ---
  {
    id: "video-script",
    slug: "video-script",
    title: "Video Script Writer",
    description: "Write engaging scripts for YouTube, TikTok, or promotional videos.",
    category: "creative",
    categoryLabel: "Creative",
    prompt: `Write a video script for [platform: YouTube/TikTok/Instagram]. Topic: [subject]. Video length: [X minutes]. Target audience: [describe viewers]. Structure: hook (first 5 seconds — must grab attention), intro (what the video covers), main content (3-5 key points with visual suggestions), B-roll ideas, a mid-video engagement prompt, and a strong call-to-action. Include: on-screen text suggestions, transition ideas, and thumbnail concept. Tone: [educational/entertaining/inspirational].`,
    usageTip: "The first 5 seconds determine if viewers stay or scroll. Start with the most interesting part — don't waste time with 'Hey guys, welcome back to my channel.'",
    difficulty: "intermediate",
  },
  {
    id: "documentary-script",
    slug: "documentary-script",
    title: "Documentary Script Outline",
    description: "Structure a documentary from concept to scene breakdown.",
    category: "creative",
    categoryLabel: "Creative",
    prompt: `Create a documentary script outline about [topic/subject]. Structure: logline (one-sentence summary), central question or argument, 3-act narrative arc, key interviewees or characters, visual style and tone, archival footage needs, suggested narration excerpts, and a scene-by-scene breakdown. Consider: how to build tension, when to reveal key information, and how to end with emotional impact. Target length: [X] minutes.`,
    usageTip: "Documentaries are about conflict and transformation. What changed? Who was affected? Structure your story around a central question that gets answered by the end.",
    difficulty: "intermediate",
  },

  // --- Marketing ---
  {
    id: "marketing-strategy-full",
    slug: "marketing-strategy-full",
    title: "Complete Marketing Strategy",
    description: "Build a comprehensive marketing plan with channels and metrics.",
    category: "business",
    categoryLabel: "Business",
    prompt: `Create a comprehensive marketing strategy for my [business type]. Include: target audience personas (2-3 detailed profiles), unique value proposition, channel strategy (which platforms and why), content themes and calendar, budget allocation by channel, key performance indicators (KPIs) to track, competitor analysis framework, customer journey map (awareness → purchase → retention), and a 90-day implementation timeline. My current situation: [describe where you are now]. My goal: [specific outcome].`,
    usageTip: "Start with one or two channels and do them well. The best strategy document is useless if you can't execute it. AI gives you the plan; you need to do the work.",
    difficulty: "intermediate",
  },
  {
    id: "brand-identity",
    slug: "brand-identity",
    title: "Brand Identity Builder",
    description: "Define your brand's voice, values, visuals, and messaging.",
    category: "business",
    categoryLabel: "Business",
    prompt: `Help me define my brand identity for [business/project name]. Develop: brand values (3-5 core principles), brand voice and tone guidelines (with do's and don'ts examples), target audience emotional connection points, key messaging pillars (3-4 core messages), visual identity direction (color palette suggestions, typography style, imagery style), a brand story (origin narrative), and tagline options (10-15 options with rationale). Differentiate from competitors in [industry].`,
    usageTip: "Your brand is what people say about you when you're not in the room. Focus on how you want customers to FEEL, not just what you want them to know.",
    difficulty: "intermediate",
  },

  // --- Operations ---
  {
    id: "employee-survey",
    slug: "employee-survey",
    title: "Employee Satisfaction Survey",
    description: "Design a survey to measure team morale and gather honest feedback.",
    category: "business",
    categoryLabel: "Business",
    prompt: `Design an employee satisfaction survey for my [company/team of X people]. Include: 20-25 questions covering job satisfaction, work-life balance, management quality, career development, compensation satisfaction, workplace culture, and open-ended improvement suggestions. Mix of: Likert scale (1-5), multiple choice, and open-ended questions. Include: instructions for anonymity, suggested survey cadence, and how to analyze results. Tone: professional but warm — encourage honesty.`,
    usageTip: "The most important part is what you DO with the results. If employees take time to give feedback and nothing changes, future surveys will be ignored. Commit to acting on at least one finding.",
    difficulty: "intermediate",
  },
  {
    id: "project-management-course",
    slug: "project-management-course",
    title: "Project Management Course Creator",
    description: "Design a training program on project management fundamentals.",
    category: "other",
    categoryLabel: "Learning",
    prompt: `Create a 30-day project management course outline for [audience: beginners/team leads/new managers]. Modules: project initiation and scoping, stakeholder management, timeline and milestone planning, budget basics, risk assessment, team communication, tracking and reporting, and project closure. For each module: learning objectives, key frameworks explained (Agile, Waterfall, Kanban), practical exercise, template or tool recommendation, and common pitfalls. Include a capstone project.`,
    usageTip: "Project management is about people, not just processes. The best frameworks fail without clear communication. Emphasize the human side in every module.",
    difficulty: "intermediate",
  },

  // --- Real Estate ---
  {
    id: "real-estate-video-script",
    slug: "real-estate-video-script",
    title: "Real Estate Video Script",
    description: "Write property showcase scripts that sell homes faster.",
    category: "business",
    categoryLabel: "Business",
    prompt: `Write a video script showcasing a [property type: house/apartment/commercial space] for sale or rent. Property highlights: [3-5 key features]. Location benefits: [neighborhood, schools, transport, amenities]. Structure: exterior walk-up and first impression, key room highlights (kitchen, living, primary bedroom), unique selling points, neighborhood context, and closing with clear call-to-action. Include: camera movement suggestions, lighting notes, and background music recommendations. Duration: [X] minutes.`,
    usageTip: "Don't just list features — tell a story about living there. 'Imagine waking up to this view' sells better than '3-bedroom, 2-bath.'",
    difficulty: "beginner",
  },
  {
    id: "gcao-framework",
    slug: "gcao-framework",
    title: "GCAO Bulletproof Prompting Framework",
    description: "Goal, Context, Action, Output Format — the 4-part framework that turns generic prompts into tailored, high-quality results. Taught by Carter Sira (Productive Dude).",
    category: "business",
    categoryLabel: "Business",
    prompt: `Use the GCAO framework to structure your prompt:

GOAL: What do you want to achieve?
[Example: Create a social media strategy for my small bakery]

CONTEXT: What background info does the AI need?
[Example: I run a neighborhood bakery in Melbourne with 3 staff. We post on Instagram and Facebook. Our customers love our sourdough and custom cakes. We get most business through word-of-mouth and want to grow online.]

ACTION: What exactly should the AI do?
[Example: Analyze my situation. Research bakery social media trends. Create a 30-day content calendar with post ideas, captions, and hashtags.]

OUTPUT FORMAT: How should results be structured?
[Example: A table with columns: Date, Platform, Content Type, Caption, Hashtags, and Expected Engagement.]`,
    usageTip: "The GCAO framework works for ANY task — emails, business plans, creative projects, research. The extra 60 seconds writing a good prompt saves 30 minutes of back-and-forth. Use it as project instructions in Claude Projects for consistent results every time.",
    moduleRef: "art-of-asking",
    difficulty: "beginner",
  },
];
