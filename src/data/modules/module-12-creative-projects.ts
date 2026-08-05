import type { Module } from "@/lib/types";

export const module12: Module = {
  id: "creative-projects",
  slug: "creative-projects",
  title: "Creative Projects & Hobbies",
  shortTitle: "Creative Projects",
  description: "Write stories, speeches, songs, and explore creative hobbies with AI as your co-creator and inspiration partner.",
  icon: "Palette",
  color: "amber",
  estimatedMinutes: 35,
  order: 12,
  lessons: [
    {
      id: "m12-writing",
      slug: "creative-writing",
      moduleId: "creative-projects",
      title: "Creative Writing with AI",
      subtitle: "Write stories, poems, and personal narratives with AI as your brainstorming partner",
      order: 1,
      estimatedMinutes: 12,
      content: [
        { type: "text", body: "AI is a powerful creative writing partner — not to replace your voice, but to spark ideas, overcome writer's block, suggest plot twists, and help you explore different styles. Think of it as a writing buddy who never gets tired of brainstorming." },
        { type: "code-example", title: "Story Starter Prompt:", code: `Help me write a short story. Here's the setup:
- Genre: [mystery / romance / sci-fi / slice of life / children's]
- Main character: [describe briefly — age, personality, situation]
- Setting: [where and when]
- Theme: [what's the story really about — love, loss, courage, change]
- Tone: [heartwarming / suspenseful / humorous / bittersweet]
- Length: approximately [X] words

First, brainstorm 3 possible openings. I'll pick one, then we'll develop it together section by section.`, language: "text" },
        { type: "bullet-list", title: "Creative Writing Tasks AI Excels At:", items: ["Generating story prompts and 'what if' scenarios", "Suggesting character names, backstories, and motivations", "Writing dialogue in different voices", "Describing settings with sensory details", "Overcoming writer's block with alternative directions", "Writing poems in specific forms (haiku, sonnet, free verse)"] },
      ],
      exercises: [
        { type: "prompt-playground", id: "m12-pp-story", title: "Start a Story", instruction: "Write a prompt to start a short story. Include genre, main character, setting, and tone.", promptHint: "Help me write a slice-of-life short story about an elderly woman who discovers online gaming. Setting: suburban Melbourne. Tone: heartwarming, gently humorous. ~500 words.", sampleResponse: "Three opening options: 1) 'Margaret's grandson had said something about 'raiding' and she'd pictured Vikings...' 2) 'At 73, Margaret discovered that her reflexes were still sharp — just not in the ways she expected...' 3) 'The headset arrived on a Tuesday, and by Friday, Margaret was leading a guild...'", improvementTip: "Giving the AI specific constraints (genre, character, setting, tone, length) produces focused creative suggestions instead of generic ones." },
      ],
      keyTakeaways: ["AI is a brainstorming partner, not a replacement for your creativity", "Give specific constraints (genre, tone, length) for better results", "Use AI to overcome writer's block and explore alternative directions"],
    },
    {
      id: "m12-speeches",
      slug: "speeches-toasts",
      moduleId: "creative-projects",
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
    {
      id: "m12-hobbies",
      slug: "creative-hobbies",
      moduleId: "creative-projects",
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
  ],
};
