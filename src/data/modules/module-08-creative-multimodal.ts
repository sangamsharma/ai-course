import type { Module } from "@/lib/types";

export const module08: Module = {
  id: "creative-and-multimodal",
  slug: "creative-and-multimodal",
  title: "Creative & Multimodal",
  shortTitle: "Creative & Multimodal",
  description:
    "Write stories, speeches, and poems with AI as your co-writer, explore creative hobbies, talk to AI instead of typing, and generate an image for something real.",
  icon: "Palette",
  color: "amber",
  estimatedMinutes: 52,
  order: 8,
  lessons: [
    // Lesson 1: Creative Writing (moved from the old Personal Documents module)
    {
      id: "m5-creative",
      slug: "creative-writing",
      moduleId: "creative-and-multimodal",
      title: "Creative Writing & Storytelling",
      subtitle: "Write stories, poems, speeches, and creative projects with AI as your co-writer",
      order: 1,
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
            "🌟 Sparkles and the Purple Planet 🌟\n\nEmma loved two things more than anything in the whole universe: dinosaurs and outer space. Every night before bed, she'd look out her window at the stars and wonder what was out there.\n\nOne ordinary Tuesday, something extraordinary happened. A soft purple glow appeared in Emma's backyard. When she peeked outside, there stood a dinosaur — but not just any dinosaur. This one was covered in sparkly purple scales and wore a tiny silver helmet!\n\n'I'm Sparkles,' said the dinosaur with a friendly grin. 'I need your help. My home, the Purple Planet, has lost its color! Without purple, everything is just... beige.'\n\nEmma wasn't scared. She was BRAVE. 'Let's go!' she said.\n\n...and after a journey past the Moon, Mars, and Jupiter, Emma reminded the Purple Planet of everything special about the color purple — lavender flowers, sunsets, her favorite sweater — until the color burst back to life.\n\nEmma learned that day that bravery isn't about not being scared — it's about believing in good things even when they're hard to see.\n\nThe End. 🌙💜",
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
    // Lesson 2: Speeches & Toasts (moved from the old Creative Projects module)
    {
      id: "m12-speeches",
      slug: "speeches-toasts",
      moduleId: "creative-and-multimodal",
      title: "Speeches, Toasts & Special Occasions",
      subtitle: "Craft memorable speeches for weddings, birthdays, farewells, and presentations",
      order: 2,
      estimatedMinutes: 10,
      content: [
        { type: "text", body: "Writing a speech is nerve-wracking. AI can help you structure your thoughts, find the right tone, and suggest stories to include. You provide the personal memories and details — AI helps shape them into something memorable." },
        { type: "code-example", title: "Speech Writing Prompt:", code: `Help me write a [type] speech for [occasion].
- Speaker: [your relationship to the occasion — best friend, parent, colleague]
- Audience: [who will be there — mixed ages, formal, casual]
- Key memories/stories: [2-3 personal anecdotes — anonymized]
- Tone: [warm / funny / inspiring / sentimental]
- Length: [X] minutes (approximately [Y] words)
- Avoid: [inside jokes, sensitive topics, etc.]
Structure: opening hook → 2-3 stories/points → heartfelt message → toast/closing`, language: "text" },
      ],
      exercises: [
        { type: "quiz", id: "m12-q1", question: "What's the best way to use AI for a personal speech?", options: [{ id: "a", text: "Let AI write the whole thing without any input from you", isCorrect: false }, { id: "b", text: "Provide your personal stories and let AI help structure and polish them", isCorrect: true }, { id: "c", text: "Copy a famous speech and change the names", isCorrect: false }, { id: "d", text: "Speeches should never use AI help", isCorrect: false }], explanation: "The best approach: you provide the authentic personal content (memories, stories, feelings), and AI helps structure it into an effective speech.", allowRetry: true },
      ],
      keyTakeaways: ["You bring the personal content — AI helps structure and polish", "Specify audience and tone to match the occasion", "Always read AI-generated speeches aloud and adjust to sound like you"],
    },
    // Lesson 3: Creative Hobbies (moved from the old Creative Projects module)
    {
      id: "m12-hobbies",
      slug: "creative-hobbies",
      moduleId: "creative-and-multimodal",
      title: "AI-Powered Hobbies & Projects",
      subtitle: "Explore new hobbies, plan DIY projects, and learn creative skills with AI guidance",
      order: 3,
      estimatedMinutes: 10,
      content: [
        { type: "text", body: "AI can help you discover and pursue creative hobbies — from gardening and home DIY to photography, painting, knitting, and music. It can explain techniques, suggest beginner projects, troubleshoot problems, and recommend resources." },
        { type: "bullet-list", title: "Hobbies AI Can Help With:", items: ["Gardening: plant care guides, garden layout planning, pest identification tips (always verify with local experts)", "Home DIY: project planning, materials lists, step-by-step instructions, safety reminders", "Photography: composition tips, camera settings explained in plain English, editing workflow suggestions", "Cooking & baking: recipe development, technique explanations, ingredient substitutions", "Music: chord progressions, song structure, lyric brainstorming, music theory basics", "Crafts: knitting patterns, sewing projects, upcycling ideas, material suggestions"] },
        { type: "tip-box", variant: "tip", title: "Learning Accelerator:", body: "Use AI alongside YouTube tutorials. Ask AI to explain the parts you didn't understand, suggest alternative methods, or troubleshoot when something goes wrong. It's like having a patient teacher available 24/7." },
      ],
      exercises: [
        { type: "prompt-playground", id: "m12-pp-hobby", title: "Explore a Hobby", instruction: "Pick a hobby you'd like to try (or already enjoy) and ask AI to help you with a specific project or skill.", promptHint: "I want to start container gardening on my apartment balcony. I get 4 hours of morning sun. Help me pick 5 beginner-friendly plants, create a care schedule, and suggest pots and soil.", sampleResponse: "5 beginner-friendly options: 1) Cherry tomatoes — need full sun, rewarding. 2) Basil — easy, loves sun, useful. 3) Lettuce — quick growing, partial shade ok. 4) Marigolds — pest-repellent, colorful. 5) Mint — hardy but keep in its own pot (spreads aggressively). Care schedule: water daily in summer, fertilize every 2 weeks...", improvementTip: "The more specific you are about your space, light, and experience level, the more practical the advice." },
      ],
      keyTakeaways: ["AI helps you discover and start new hobbies with confidence", "Combine AI guidance with YouTube tutorials and local expert advice", "Be specific about your space, tools, and experience level"],
    },
    // Lesson 4: Voice Mode (new)
    {
      id: "m8m-voice",
      slug: "try-voice-mode",
      moduleId: "creative-and-multimodal",
      title: "Try Voice Mode — Talk Instead of Type",
      subtitle: "If typing is slow or tiring, this might be the easiest lesson in the whole course",
      order: 4,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "Everything you've done so far has involved typing. But ChatGPT, Claude, and Gemini all offer some form of voice mode — you talk, the AI talks back. If typing is slow, tiring, or just not your favorite thing, this lesson might change how you use AI more than anything else in the course.",
        },
        {
          type: "bullet-list",
          title: "Where to find it",
          items: [
            "On the mobile app for each tool, look for a headphone, microphone, or waveform icon near the text box — that's usually voice mode.",
            "Tap it, and you can start talking naturally, the same way you'd talk to a person, and hear a spoken response back.",
            "You can usually interrupt or ask follow-up questions out loud, the same way you would in Level 5's document conversations — no need to start over.",
            "Exactly which tools offer voice mode, and how good it is, changes often — if it's not obvious in your app, search 'voice mode' or 'voice chat' in the app's help or settings.",
          ],
        },
        {
          type: "tip-box",
          variant: "example",
          title: "When voice mode shines",
          body: "Cooking with messy hands and want a recipe read out loud, step by step? Walking and want to talk through a decision? Find typing physically tiring? Want to practice a language out loud (Level 4's letters lesson, but spoken)? All of these are much more natural in voice mode than typing.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m8m-pp-voice",
          title: "Have a Spoken Conversation",
          instruction:
            "Open voice mode in your chosen tool and have an actual spoken back-and-forth about something real — a decision you're weighing, a recipe you want walked through, or just a question you're curious about. Afterward, write a sentence or two about how it compared to typing.",
          promptHint: "(Spoken, not typed) — try something like: 'Walk me through how to fold a fitted sheet, one step at a time, and wait for me to say ready before the next step.'",
          sampleResponse:
            "I asked it to talk me through a stretching routine while I actually did the stretches, since I couldn't look at my phone. It felt much more natural than reading steps off a screen, and I could ask 'wait, which side first?' without breaking my stretch.",
          improvementTip: "Notice whether voice mode felt faster, slower, more natural, or more awkward than typing for this particular task — some tasks (cooking, exercising, driving) are genuinely better suited to voice; others (anything you need to copy-paste afterward) are still better typed.",
        },
      ],
      keyTakeaways: [
        "Voice mode lets you talk to AI and hear it talk back, instead of typing",
        "Look for a microphone or headphone icon in the mobile app",
        "Great for hands-busy moments — cooking, walking, exercising",
      ],
    },
    // Lesson 5: Generate an Image (new, doubles as Level 8 capstone)
    {
      id: "m8m-image",
      slug: "generate-an-image",
      moduleId: "creative-and-multimodal",
      title: "Generate an Image for Something Real",
      subtitle: "Level 8 capstone — create one usable image for a real card, post, or flyer",
      order: 5,
      estimatedMinutes: 12,
      content: [
        {
          type: "text",
          body: "Most AI chat tools can also create images from a written description, not just text. You don't need any design skill — you just describe what you want, the same way you've been writing prompts all course.",
        },
        {
          type: "code-example",
          title: "Image Prompt Template:",
          code: `An image of [subject]. Style: [photo-realistic / watercolor / cartoon / minimalist]. Setting: [background/location]. Mood: [warm / playful / elegant]. Suitable for [use — a birthday card, a flyer, a social media post].`,
          language: "text",
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Iterate the same way you learned in Level 1",
          body: "Your first image almost never looks exactly right — that's normal. Use the same 4-Round instinct from Level 1: ask for changes ('make the background simpler', 'more cartoon-like', 'remove the text') instead of starting over from scratch.",
        },
        {
          type: "tip-box",
          variant: "important",
          title: "A few honesty rules",
          body: "Don't use AI to create a realistic image of a real person without their consent, and don't use an AI image to make something look like it's a real photo when it isn't, if that could mislead someone. For a birthday card or a flyer, none of this is a concern — it matters most when an image could be mistaken for something real.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m8m-pp-capstone",
          title: "Level 8 Capstone: Make Something You'll Actually Use",
          instruction:
            "Think of one real, upcoming reason to make something — a birthday card, an invitation, a flyer, a social post. Write an image prompt for it, iterate at least once based on the first result, and describe your final version here.",
          promptHint:
            "An image of [subject] for [occasion]. Style: [x]. Mood: [x]. Suitable for [a printed card / a social post / a flyer]. Then iterate: 'Make it more [x]' or 'Simplify the background.'",
          sampleResponse:
            "An image of a golden retriever puppy wearing a small party hat, sitting next to a birthday cake with candles, warm watercolor style, soft pastel background, suitable for a printed birthday card. Round 2: 'Make the puppy bigger and centered, and remove the text from the cake so I can add my own.' The final version became the actual card I printed for my nephew's birthday.",
          improvementTip:
            "This is your Level 8 capstone — the goal isn't a perfect image, it's using the full creative toolkit (writing, voice, and image generation) on one real thing you needed anyway.",
        },
      ],
      keyTakeaways: [
        "Describing an image works just like describing any other prompt — subject, style, mood, purpose",
        "Iterate instead of expecting the first result to be perfect",
        "Don't use AI images to misrepresent a real person or pass off a fake as real",
      ],
    },
  ],
};
