import type { Module } from "@/lib/types";

export const module05: Module = {
  id: "ai-for-personal-documents",
  slug: "ai-for-personal-documents",
  title: "AI for Personal Documents",
  shortTitle: "Documents",
  description:
    "Create professional resumes, cover letters, fill out forms, write letters, explore creative writing, and use AI as a personal tutor for learning new skills.",
  icon: "FileText",
  color: "amber",
  estimatedMinutes: 50,
  order: 5,
  lessons: [
    // Lesson 1: Resume & Cover Letter
    {
      id: "m5-resume",
      slug: "resume-writing",
      moduleId: "ai-for-personal-documents",
      title: "Resume & Cover Letter Writing",
      subtitle: "Turn your work history into a compelling resume and tailored cover letter",
      order: 1,
      estimatedMinutes: 12,
      content: [
        {
          type: "text",
          body: "Writing about yourself is hard. AI makes it easy by transforming your raw experience into polished, professional documents. You provide the facts — AI handles the phrasing, formatting, and persuasive language.",
        },
        {
          type: "code-example",
          title: "Resume Bullet Point Prompt:",
          code: `Help me write resume bullet points for my role as [job title] at [company name/type].
My responsibilities included:
1. [responsibility]
2. [responsibility]
3. [responsibility]
(continue)

For each bullet:
- Start with a strong action verb (managed, created, led, improved, reduced)
- Include numbers or measurable results where possible
- Keep each bullet to 1-2 lines
- Target the role of [job you're applying for]`,
          language: "text",
        },
        {
          type: "code-example",
          title: "Cover Letter Prompt:",
          code: `Write a cover letter for a [job title] position at [company name].
About me: [2-3 sentences — experience, skills, achievements].
Why this company: [what you admire about them].
Why I'm a good fit: [how your skills match their needs].
Tone: professional but warm. Keep to 3 short paragraphs.
Format: greeting, introduction, body, closing.`,
          language: "text",
        },
        {
          type: "tip-box",
          variant: "important",
          title: "Critical Reminder",
          body: "AI drafts are a starting point, not a final product. Always: 1) Fact-check every detail — AI can invent achievements you never had. 2) Add your personal voice — employers can spot generic AI-written applications. 3) Customize for each application — a tailored resume gets more interviews.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m5-pp-resume",
          title: "Transform Your Experience into Resume Bullets",
          instruction:
            "Think of your current or most recent job. List 3 responsibilities in plain language, then write a prompt asking AI to turn them into powerful resume bullets.",
          promptHint:
            "Turn these job duties into resume bullet points for a [job title] role: 1) Answered phone calls and emails from customers. 2) Organized the office filing system. 3) Helped train new employees...",
          sampleResponse:
            "• Managed high-volume customer communications, handling 50+ daily phone calls and emails with 98% satisfaction rating\n• Redesigned and digitized office filing system, reducing document retrieval time by 60% and saving 5 hours per week\n• Developed and delivered onboarding training program for 12 new hires, reducing their ramp-up time from 4 weeks to 2 weeks\n\nNotice how 'answered phone calls' became 'Managed high-volume customer communications' — the AI adds professional language and quantified impact while keeping the truth intact.",
          improvementTip:
            "The key to great resume bullets is quantifying your impact. Always add numbers when you can: how many customers, how much time saved, how much money earned or saved. AI helps you phrase it professionally.",
        },
        {
          type: "quiz",
          id: "m5-q1-resume",
          question: "What's the #1 thing to do after AI drafts your resume?",
          options: [
            { id: "a", text: "Send it immediately to save time", isCorrect: false },
            { id: "b", text: "Fact-check every detail and add your personal voice", isCorrect: true },
            { id: "c", text: "Use the same version for every job application", isCorrect: false },
            { id: "d", text: "Remove all numbers and metrics to keep it simple", isCorrect: false },
          ],
          explanation:
            "Always fact-check and personalize AI drafts. AI can invent achievements or use generic language. Your resume needs to be truthful and sound like you. Also customize for each job — different roles value different skills.",
        },
      ],
      keyTakeaways: [
        "AI transforms plain job duties into powerful, professional resume bullets",
        "Add numbers and measurable results — they make bullets convincing",
        "Always fact-check and personalize AI drafts",
        "Customize your resume for each job application",
      ],
    },
    // Lesson 2: Letters & Forms
    {
      id: "m5-letters",
      slug: "letters-and-forms",
      moduleId: "ai-for-personal-documents",
      title: "Letters, Forms & Applications",
      subtitle: "Handle official paperwork, personal letters, and applications with confidence",
      order: 2,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "Official forms and formal letters can be intimidating. AI helps you understand what's being asked, draft appropriate responses, and maintain the right tone for official correspondence.",
        },
        {
          type: "bullet-list",
          title: "Documents AI Can Help Draft:",
          items: [
            "Rental applications and reference letters",
            "Insurance claim letters and forms",
            "Medical appointment request letters",
            "School application essays and forms",
            "Complaint letters to companies or government offices",
            "Thank-you letters after interviews or events",
            "Personal recommendation letters for friends or colleagues",
          ],
        },
        {
          type: "code-example",
          title: "Formal Letter Prompt:",
          code: `Help me write a formal letter to [recipient/organization].
Purpose: [what you're requesting or explaining].
Key facts: [dates, reference numbers, amounts, names].
My desired outcome: [what you want them to do].
Tone: [formal and polite / firm / apologetic].
Include: my contact information, a clear subject line, and a professional closing.`,
          language: "text",
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Privacy Reminder",
          body: "When filling out forms with AI help, describe the information CATEGORIES you need to provide (e.g., 'a paragraph about my employment history in retail'), not the actual sensitive data (SSN, bank details, exact address). Fill those in yourself after AI drafts the rest.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m5-pp-letter",
          title: "Draft a Formal Letter",
          instruction:
            "Think of a situation where you needed to write a formal letter. Write a prompt for AI to draft it — include the purpose, key facts, and desired outcome.",
          promptHint:
            "Write a letter to my landlord requesting permission to have a small pet dog in my apartment. I've been a tenant for 3 years, always paid rent on time, and the dog is a small, trained, hypoallergenic breed. I'm willing to pay an additional pet deposit...",
          sampleResponse:
            "[Your Name]\n[Your Address]\n[City, State ZIP]\n[Email]\n[Phone]\n[Date]\n\n[Landlord Name]\n[Management Company]\n[Address]\n\nSubject: Request for Pet Authorization — Unit #[X]\n\nDear [Landlord Name],\n\nI am writing to formally request permission to keep a small dog in my apartment. As you know, I have been a tenant at [Building Name] for three years, during which time I have maintained the property in excellent condition and have always paid rent on or before the due date.\n\nThe dog is a 3-year-old Cavalier King Charles Spaniel — a small breed (13-18 lbs) that is known for being quiet, gentle, and hypoallergenic. She is fully house-trained, spayed, and up to date on all vaccinations. I am happy to provide veterinary records upon request.\n\nI understand this would require an amendment to my lease agreement and am prepared to pay an additional pet deposit of $[amount] as well as any monthly pet rent. I am also willing to have the apartment professionally cleaned upon move-out.\n\nThank you for considering my request. I am available to discuss this at your convenience.\n\nSincerely,\n[Your Name]",
          improvementTip:
            "This letter works because it addresses the landlord's likely concerns (damage, noise, allergies) proactively and offers solutions (deposit, professional cleaning). Good prompts help AI anticipate objections and address them.",
        },
      ],
      keyTakeaways: [
        "AI helps with any formal letter — just provide the facts and purpose",
        "Anticipate the recipient's concerns and address them in your prompt",
        "Never put sensitive personal data (SSN, bank info) in AI prompts",
        "AI ensures proper formatting and professional tone for official correspondence",
      ],
    },
    // Lesson 3: Creative Writing
    {
      id: "m5-creative",
      slug: "creative-writing",
      moduleId: "ai-for-personal-documents",
      title: "Creative Writing & Storytelling",
      subtitle: "Write stories, poems, speeches, and creative projects with AI as your co-writer",
      order: 3,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "AI isn't just for business — it's a fantastic creative partner. Whether you want to write a bedtime story for your grandchild, a speech for a wedding, a poem for a special occasion, or just explore creative ideas, AI helps bring your imagination to life.",
        },
        {
          type: "bullet-list",
          title: "Creative Projects AI Can Co-Create:",
          items: [
            "Bedtime stories personalized with your child's name and interests",
            "Wedding speeches and toasts (funny, heartfelt, or both)",
            "Poems for birthdays, anniversaries, or memorials",
            "Family history stories based on facts you provide",
            "Song lyrics for fun or special occasions",
            "Creative writing practice — prompts, story starters, dialogue help",
          ],
        },
        {
          type: "code-example",
          title: "Creative Writing Prompt:",
          code: `Write a [type: story/poem/speech] for [occasion/purpose].
About: [topic, person, theme].
Style: [funny / heartfelt / adventurous / whimsical].
Key elements to include: [names, places, memories, inside jokes].
Length: [short — under 200 words / medium / long].
Audience: [who will read or hear this].`,
          language: "text",
        },
        {
          type: "tip-box",
          variant: "example",
          title: "Real Example: Wedding Speech",
          body: "A best man asked AI for help with a wedding speech. He provided: groom's name, how they met (college roommates), 3 funny stories, 2 heartfelt moments, bride's name, and the instruction to 'balance humor with heart, 3 minutes long.' The AI drafted a speech that had the room laughing and crying — the best man just personalized it and practiced the delivery.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m5-pp-creative",
          title: "Write a Personalized Story",
          instruction:
            "Think of someone in your life — a child, a friend, a partner. Write a prompt for AI to create a short, personalized story or letter for them.",
          promptHint:
            "Write a short bedtime story for my 7-year-old niece Emma who loves space, dinosaurs, and the color purple. Include a friendly dinosaur named Sparkles who travels to different planets. Make it adventurous but not scary. Include a lesson about being brave...",
          sampleResponse:
            "🌟 Sparkles and the Purple Planet 🌟\n\nEmma loved two things more than anything in the whole universe: dinosaurs and outer space. Every night before bed, she'd look out her window at the stars and wonder what was out there.\n\nOne ordinary Tuesday, something extraordinary happened. A soft purple glow appeared in Emma's backyard. When she peeked outside, there stood a dinosaur — but not just any dinosaur. This one was covered in sparkly purple scales and wore a tiny silver helmet!\n\n'I'm Sparkles,' said the dinosaur with a friendly grin. 'I need your help. My home, the Purple Planet, has lost its color! Without purple, everything is just... beige.'\n\nEmma wasn't scared. She was BRAVE. 'Let's go!' she said.\n\nThey climbed into Sparkles' rocket ship (which looked exactly like a giant dinosaur egg) and zoomed past the Moon, past Mars, past Jupiter with its swirly storms, until they reached a small planet that was... completely beige.\n\n'Oh no,' whispered Emma. 'What happened?'\n\n'The Color Stealer came,' Sparkles said sadly. 'He takes colors from planets that stop believing in magic.'\n\nEmma thought hard. Then she smiled. 'Well, I believe in magic. And I bet if we remind the planet how special it is, the color will come back!'\n\nShe told the planet about all the wonderful purple things she knew: lavender flowers that smell like calm, sunsets that paint the sky, her favorite purple sweater, and the joy of a brand-new purple crayon.\n\nSlowly... a whisper of purple returned. Then a glow. Then — BURST! The planet bloomed with the most beautiful purple Emma had ever seen.\n\nThe Color Stealer peeked out from behind a rock, looking surprised. But instead of being angry, he started to smile. 'No one has ever reminded a planet to believe in itself before,' he said softly.\n\nEmma learned that day that bravery isn't about not being scared — it's about believing in good things even when they're hard to see.\n\nThat night, when Emma climbed back into her bed, she noticed a tiny purple scale on her pillow, glowing softly. A reminder that magic is real — if you choose to see it.\n\nThe End. 🌙💜",
          improvementTip:
            "This story works because you provided: the child's name (Emma), age (7), interests (space, dinosaurs, purple), and a value you wanted to teach (bravery). The AI wove all of these into a cohesive, magical story. The more personal details you provide, the more magical the result.",
        },
      ],
      keyTakeaways: [
        "AI is a fantastic creative co-writer for stories, poems, and speeches",
        "Include names, interests, and memories for deeply personal results",
        "Specify tone (funny/heartfelt/adventurous) and audience for best fit",
        "You provide the heart and details — AI handles the craft",
      ],
    },
    // Lesson 4: Learning with AI
    {
      id: "m5-learning",
      slug: "learning-and-research",
      moduleId: "ai-for-personal-documents",
      title: "Learning & Research with AI",
      subtitle: "Use AI as a personal tutor to learn anything — at your own pace, in your own way",
      order: 4,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "AI can be your personal tutor for almost any subject. It explains concepts in simple terms, creates practice exercises, answers follow-up questions endlessly, and adapts to your learning style. It's like having a patient teacher available 24/7.",
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
          title: "Learning Strategy: Feynman Technique with AI",
          body: "Step 1: Ask AI to explain a topic simply. Step 2: In your own words, try to explain it back to the AI. Step 3: Ask AI to point out what you got wrong or missed. Step 4: Repeat with the corrected understanding. This active learning method is proven to be one of the most effective ways to truly understand something.",
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
      ],
      keyTakeaways: [
        "AI is a 24/7 personal tutor for almost any subject",
        "Explain concepts simply, create practice exercises, answer endless questions",
        "Use the Feynman Technique: learn → teach back → get corrected → repeat",
        "The more you interact (not just read), the more you learn",
      ],
    },
  ],
};
