import type { Module } from "@/lib/types";

export const module06: Module = {
  id: "make-ai-remember-you",
  slug: "make-ai-remember-you",
  title: "Make AI Remember You",
  shortTitle: "Remember You",
  description:
    "Stop re-explaining who you are every single conversation — set up your AI tool to remember your context, and turn your best template into a permanent instruction.",
  icon: "Brain",
  color: "violet",
  estimatedMinutes: 28,
  order: 6,
  lessons: [
    {
      id: "m6r-setup",
      slug: "set-up-saved-instructions",
      moduleId: "make-ai-remember-you",
      title: "Set Up Your Tool's 'Remember This' Feature",
      subtitle: "ChatGPT Memory/Custom Instructions, Claude Projects, or Gemini's saved info",
      order: 1,
      estimatedMinutes: 15,
      content: [
        {
          type: "text",
          body: "By now you've probably noticed a pattern: you often start a new conversation by re-explaining who you are, what you do, or what you need. Every major AI tool has a way to save some of that context permanently, so it's already there the next time you show up. The exact name and location of this feature changes as tools update — but the idea is the same everywhere: tell it once, have it remembered.",
        },
        {
          type: "bullet-list",
          title: "Where to look, tool by tool",
          items: [
            "ChatGPT: look in Settings for 'Custom Instructions' (a short form asking what it should know about you and how you'd like it to respond) and/or 'Memory' (things it remembers automatically from past chats, which you can view and edit).",
            "Claude: look for 'Projects' — a space where you can save background context and files that apply to everything you discuss inside that project, without repeating it each time.",
            "Gemini: look for saved personal context or 'Gems' — a way to set up a version of Gemini that already knows a certain role or set of facts about you.",
            "These feature names and exact steps change fairly often — if you can't find it, the fastest path is to ask your tool directly: 'How do I save information about myself so I don't have to repeat it every conversation?'",
          ],
        },
        {
          type: "tip-box",
          variant: "warning",
          title: "Only save what you'd be comfortable saving permanently",
          body: "Saved memory sticks around across conversations, so the Level 2 privacy rules matter even more here. Save things like 'I run a small landscaping business' or 'I'm learning Spanish, beginner level' — not your address, health conditions, or financial specifics.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m6r-pp-setup",
          title: "Write Your Saved Context",
          instruction:
            "Find your tool's saved-instructions/memory/Projects feature and write 3-5 sentences of context about yourself to save there — general enough to be safe, specific enough to be useful.",
          promptHint:
            "Please remember: I'm [brief context about your life/work/goals]. When I ask for help, assume this unless I say otherwise. My tone preference is [casual/professional/etc].",
          sampleResponse:
            "I'm a part-time bookkeeper for two small local businesses and I'm also planning my daughter's wedding this year. When I ask for writing help, keep it friendly and simple — I'm not a professional writer. For anything involving numbers, always show your working so I can double-check it.",
          improvementTip:
            "Notice this doesn't include any account numbers, addresses, or full names — just enough general context to make every future conversation faster and more relevant.",
        },
        {
          type: "quiz",
          id: "m6r-q-what-to-save",
          question: "Which of these is safe and useful to save in a tool's permanent memory?",
          options: [
            { id: "a", text: "\"I'm a beginner learning to cook, prefer simple recipes\"", isCorrect: true },
            { id: "b", text: "Your bank account number, \"so it doesn't have to ask again\"", isCorrect: false },
            { id: "c", text: "Your home address and daily schedule", isCorrect: false },
            { id: "d", text: "A family member's medical diagnosis", isCorrect: false },
          ],
          explanation:
            "Saved memory is genuinely convenient for general, low-sensitivity context — your interests, your role, your preferred tone. The same 'never share this' list from Level 2 still applies to anything permanent, if not more so.",
        },
      ],
      keyTakeaways: [
        "Every major AI tool has some way to save context so you stop repeating yourself",
        "Feature names change often — ask the tool directly if you can't find it",
        "Only save general, low-sensitivity context, never sensitive personal details",
      ],
    },
    {
      id: "m6r-template-to-instruction",
      slug: "save-a-template-permanently",
      moduleId: "make-ai-remember-you",
      title: "Turn a Template Into a Permanent Instruction",
      subtitle: "You built templates in Level 3 — now stop pasting them in every time",
      order: 2,
      estimatedMinutes: 11,
      content: [
        {
          type: "text",
          body: "Back in Level 3, you built a personal prompt template for something you do regularly. That template still works fine as a copy-paste — but if it's something you use constantly, it's worth promoting it into a saved instruction, so you don't even need to paste it anymore.",
        },
        {
          type: "text",
          body: "The idea is simple: take the reusable parts of your template — the role, the tone, the format you always want — and save those permanently. Keep only the parts that change each time (the actual topic, the specific details) as something you still type fresh.",
        },
        {
          type: "tip-box",
          variant: "example",
          title: "Before and after",
          body: "Before (pasted every time): 'Act as a professional social media manager. Create an Instagram post for my coffee shop. Tone: warm, cozy. Include 3 hashtags and a call to action.'\n\nAfter (saved once): 'Whenever I ask you to write a social media post, assume it's for my coffee shop, keep the tone warm and cozy, and always include 3 hashtags and a call to action.' Now you can just say: 'Write a post about our new seasonal latte' — and get the same quality result in one line.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m6r-pp-promote",
          title: "Promote Your Template",
          instruction:
            "Take the template you built in Level 3 (or a new one, if you skipped ahead). Rewrite it as a saved instruction — the reusable parts phrased as a permanent rule, not a one-off request — and save it in your tool.",
          promptHint:
            "Whenever I ask you to [type of task], assume [context that's always true]. Keep the tone [your preferred tone]. Format it as [your preferred format], unless I say otherwise.",
          sampleResponse:
            "Whenever I ask you to help with a customer email, assume it's for my small pottery studio, keep the tone warm but professional, and always end with an invitation to reply with any questions. Keep responses under 120 words unless I ask for more detail.",
          improvementTip:
            "Test it: start a brand-new conversation and just ask for 'a customer email about a delayed order,' with none of the usual context. If your saved instruction is working, you should get something close to what you'd have gotten by typing the full template.",
        },
      ],
      keyTakeaways: [
        "Anything you paste as a template every single time is a candidate for a permanent saved instruction",
        "Keep only what changes each time as fresh typing — save everything constant",
        "Test a saved instruction in a brand-new conversation to confirm it's actually working",
      ],
    },
  ],
};
