import type { Module } from "@/lib/types";

export const module09: Module = {
  id: "travel-planning",
  slug: "travel-planning",
  title: "Travel Planning with AI",
  shortTitle: "Travel Planning",
  description: "Plan entire trips — itineraries, budgets, packing lists, language help, and local tips — all personalized to your style.",
  icon: "Plane",
  color: "blue",
  estimatedMinutes: 35,
  order: 9,
  lessons: [
    {
      id: "m09-itinerary",
      slug: "trip-itineraries",
      moduleId: "travel-planning",
      title: "Building Trip Itineraries",
      subtitle: "Create day-by-day travel plans matching your interests, pace, and budget",
      order: 1,
      estimatedMinutes: 12,
      content: [
        { type: "text", body: "AI is a game-changer for travel planning. Instead of spending hours reading blogs and reviews, get a personalized day-by-day itinerary in seconds. The more details you share about your travel style, the better the plan." },
        { type: "code-example", title: "Itinerary Prompt Template:", code: `Plan a [X]-day trip to [destination] for [who's traveling].
- When: [month/season] — consider weather and crowds
- Budget: approximately $[X] AUD total
- Travel style: [budget / mid-range / luxury / family]
- Interests: [food, history, nature, relaxation, culture]
- Pace: [packed / relaxed / mix]
- Must-do: [2-3 non-negotiable activities]
Give me: day-by-day itinerary with morning/afternoon/evening, estimated daily costs, 3 restaurant recommendations, and local tips.`, language: "text" },
        { type: "tip-box", variant: "tip", title: "Pro Tip: Verify Before You Go", body: "Use AI for ideas and planning, but always verify opening hours, prices, and availability on official websites. Book flights and hotels directly or through trusted platforms." },
      ],
      exercises: [
        { type: "prompt-playground", id: "m09-pp-trip", title: "Plan Your Dream Trip", instruction: "Write a prompt for a trip you'd love to take. Include destination, budget, travel style, and interests.", promptHint: "Plan a 5-day trip to Kyoto for 2 adults. October. Mid-range ($2,500 excluding flights). Interests: temples, food markets, nature walks. Relaxed pace.", sampleResponse: "Day 1: Morning — Arrive, explore neighborhood. Afternoon — Fushimi Inari shrine. Evening — Nishiki Market food tour. Day 2: Morning — Arashiyama bamboo grove...", improvementTip: "Including season, budget, and pace gives the AI enough context for realistic, actionable suggestions." },
      ],
      keyTakeaways: ["AI creates personalized itineraries based on your travel style", "Include budget, interests, and pace for best results", "Always verify details on official websites before traveling"],
    },
    {
      id: "m09-packing",
      slug: "packing-lists",
      moduleId: "travel-planning",
      title: "Smart Packing Lists",
      subtitle: "Generate packing checklists customized to destination, season, and activities",
      order: 2,
      estimatedMinutes: 8,
      content: [
        { type: "text", body: "AI generates detailed packing lists based on your destination's weather, planned activities, and trip length. No more overpacking or forgetting essentials." },
        { type: "code-example", title: "Packing List Prompt:", code: "Create a packing list for a [X]-day trip to [destination] in [month]. Activities: [list]. Weather: [temp range, rain likelihood]. Include: clothing (with quantities), toiletries, electronics, documents, health items, and destination-specific essentials (adapters, dress codes). I'm using [carry-on / checked luggage].", language: "text" },
      ],
      exercises: [
        { type: "quiz", id: "m09-q1", question: "What details should a good travel packing prompt include?", options: [{ id: "a", text: "Just the destination name", isCorrect: false }, { id: "b", text: "Destination, dates, weather, activities, and luggage type", isCorrect: true }, { id: "c", text: "Your home address", isCorrect: false }, { id: "d", text: "Only the airline name", isCorrect: false }], explanation: "The more relevant details — destination, season, activities, weather, luggage limits — the more useful your packing list.", allowRetry: true },
      ],
      keyTakeaways: ["AI packing lists save time and prevent overpacking", "Include weather, activities, and luggage limits", "Double-check destination-specific items (adapters, dress codes)"],
    },
    {
      id: "m09-language",
      slug: "language-help",
      moduleId: "travel-planning",
      title: "Language & Communication Help",
      subtitle: "Use AI for translations, phrase lists, and cultural communication tips",
      order: 3,
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
      keyTakeaways: ["AI provides culturally-aware translations", "Create a phrase cheat sheet before you travel", "Save the phrase list offline — don't rely on having internet"],
    },
  ],
};
