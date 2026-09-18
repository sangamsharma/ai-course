import type { Module } from "@/lib/types";

export const moduleTravelExtras: Module = {
  id: "travel-extras",
  slug: "travel-extras",
  title: "More Topics: Travel Language Help",
  shortTitle: "Travel Extras",
  description: "Optional extra: get culturally-aware translations and phrase sheets for your next trip. (Itineraries and packing lists already live in Level 4.)",
  icon: "Plane",
  color: "blue",
  estimatedMinutes: 8,
  order: 21,
  lessons: [
    {
      id: "m09-language",
      slug: "language-help",
      moduleId: "travel-extras",
      title: "Language & Communication Help",
      subtitle: "Use AI for translations, phrase lists, and cultural communication tips",
      order: 1,
      estimatedMinutes: 8,
      content: [
        { type: "text", body: "AI is excellent at language assistance. It translates phrases with cultural context, creates cheat sheets of useful expressions, explains etiquette, and helps you practice pronunciation." },
        { type: "code-example", title: "Language Help Prompt:", code: `I'm traveling to [country] and don't speak [language]. Help me with:
1. 15 essential phrases with pronunciation guide
2. 5 polite customs I should know (greetings, tipping, gestures to avoid)
3. Common menu terms for reading restaurant menus
4. How to say: "[specific phrase you'll need]"`, language: "text" },
      ],
      exercises: [
        { type: "fill-in-blank", id: "m09-fib-lang", title: "Build a Language Helper Prompt", instruction: "Complete the template for a country you'd like to visit.", template: "I'm traveling to {{country}} and don't speak {{language}}. Create a phrase sheet with 10 essential phrases including pronunciation. Also tell me 3 cultural customs about {{customTopic}}.", blanks: [{ key: "country", answer: "Japan", hint: "Where to?" }, { key: "language", answer: "Japanese", hint: "Language?" }, { key: "customTopic", answer: "dining etiquette", hint: "Custom area?" }] },
      ],
      keyTakeaways: ["AI provides culturally-aware translations", "Create a phrase cheat sheet before you travel", "Save the phrase list offline — don't rely on having internet", "Try this out loud in Level 8's voice mode lesson for pronunciation practice"],
    },
  ],
};
