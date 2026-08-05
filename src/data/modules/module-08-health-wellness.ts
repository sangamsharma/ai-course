import type { Module } from "@/lib/types";

export const module08: Module = {
  id: "health-wellness",
  slug: "health-wellness",
  title: "AI for Health & Wellness",
  shortTitle: "Health & Wellness",
  description: "Use AI to plan meals, understand health info, create fitness routines, and prepare for doctor visits — with strict safety guardrails.",
  icon: "Heart",
  color: "rose",
  estimatedMinutes: 40,
  order: 8,
  lessons: [
    {
      id: "m08-meals",
      slug: "meal-planning",
      moduleId: "health-wellness",
      title: "Meal Planning & Recipe Help",
      subtitle: "Plan weekly meals, adapt recipes for dietary needs, and reduce food waste",
      order: 1,
      estimatedMinutes: 12,
      content: [
        { type: "text", body: "AI is excellent at meal planning. It can create weekly menus based on your dietary needs, suggest recipes from ingredients you already have, scale recipes up or down, and adapt any recipe for allergies or preferences — all in seconds." },
        { type: "tip-box", variant: "warning", title: "Medical Disclaimer", body: "AI is NOT a doctor, dietitian, or nutritionist. Use AI for meal ideas and recipe help, but consult a qualified professional for medical dietary advice. Never follow AI-generated health advice without checking with your doctor." },
        { type: "code-example", title: "Meal Plan Prompt:", code: `Create a 5-day meal plan for my household:
- People: [number], dietary needs: [vegetarian/gluten-free/etc.]
- Budget: approximately $[X] per week
- Cooking time: under [X] minutes per meal
- Cuisine preferences: [list types]
- Include: breakfast, lunch, dinner, and 2 snacks
- Add a shopping list grouped by supermarket section`, language: "text" },
        { type: "bullet-list", title: "What AI Can Help With:", items: ["Generate recipes from ingredients you already have", "Adapt any recipe for dietary restrictions", "Scale recipes up for guests or down for one person", "Suggest healthy substitutions for ingredients", "Create themed meal plans (budget, high-protein, kid-friendly)"] },
      ],
      exercises: [
        { type: "prompt-playground", id: "m08-pp-meal", title: "Plan Your Meals", instruction: "Write a prompt to plan 3 days of meals for your household. Include dietary needs, preferences, and time constraints.", promptHint: "Create a 3-day meal plan for 2 adults. One vegetarian, one eats everything. Budget: $100. Time: 30 min per meal max.", sampleResponse: "Day 1: Breakfast — Avocado toast with optional egg. Lunch — Black bean tacos. Dinner — One-pot mushroom pasta + side salad. Shopping list: avocados, black beans, tortillas, mushrooms, pasta...", improvementTip: "Being specific about dietary needs and time constraints gives you a realistic plan you'll actually follow." },
      ],
      keyTakeaways: ["AI is great for meal ideas — not medical nutrition advice", "Specify dietary needs, budget, and time to get practical plans", "Use AI to reduce food waste by cooking from what you have"],
    },
    {
      id: "m08-doctor",
      slug: "doctor-visit-prep",
      moduleId: "health-wellness",
      title: "Preparing for Doctor Visits",
      subtitle: "Use AI to organize symptoms, prepare questions, and understand medical information",
      order: 2,
      estimatedMinutes: 10,
      content: [
        { type: "text", body: "Doctor visits can be stressful. AI can help you prepare by organizing your concerns, suggesting questions to ask, and explaining medical terms in plain language. It does NOT replace medical advice." },
        { type: "code-example", title: "Doctor Visit Prep Prompt:", code: `I have a doctor's appointment about [general symptom/concern]. Help me prepare:
1. List what information the doctor will likely need (symptoms, timeline, triggers)
2. Suggest 5 questions I should ask
3. Explain any related medical terms in simple language
Do NOT suggest diagnoses. Just help me organize my thoughts for the appointment.`, language: "text" },
        { type: "tip-box", variant: "important", title: "Critical Safety Rule:", body: "Never share real medical records, test results with identifiers, or insurance numbers with AI. Describe symptoms and situations in general terms. AI is for preparation and education, not diagnosis." },
      ],
      exercises: [
        { type: "quiz", id: "m08-q1", question: "What should you NEVER share with AI when preparing for a doctor visit?", options: [{ id: "a", text: "General symptoms you're experiencing", isCorrect: false }, { id: "b", text: "Your real medical records with personal identifiers", isCorrect: true }, { id: "c", text: "Questions you want to ask the doctor", isCorrect: false }, { id: "d", text: "How long you've had symptoms (approximately)", isCorrect: false }], explanation: "Never share real medical records, test results with identifiers, or insurance numbers with AI. Describe your situation in general terms.", allowRetry: true },
      ],
      keyTakeaways: ["AI helps organize thoughts before medical appointments", "Prepare questions in advance to make the most of your visit", "Use AI to explain medical terms in plain language", "Never share real medical records or identifiers with AI"],
    },
    {
      id: "m08-fitness",
      slug: "fitness-routines",
      moduleId: "health-wellness",
      title: "Fitness & Movement Plans",
      subtitle: "Create personalized workout routines based on your fitness level and goals",
      order: 3,
      estimatedMinutes: 10,
      content: [
        { type: "text", body: "Whether you're starting from zero or training for a goal, AI can design workout plans that fit your life. Tell it your fitness level, available equipment, time constraints, and any limitations — it'll create a plan you can actually stick to." },
        { type: "code-example", title: "Fitness Plan Prompt:", code: `Create a [X]-week workout plan for a [beginner/intermediate] person.
- Goal: [lose weight / build strength / improve flexibility]
- Equipment: [none / dumbbells / gym access]
- Time: [X] minutes, [X] days per week
- Limitations: [back pain / knee issues / etc.]
Include warm-up, main workout, and cool-down.
Reminder: I will consult a doctor before starting any new exercise.`, language: "text" },
      ],
      exercises: [
        { type: "quiz", id: "m08-q2", question: "Before following an AI-generated fitness plan, you should:", options: [{ id: "a", text: "Post it on social media", isCorrect: false }, { id: "b", text: "Consult a doctor first", isCorrect: true }, { id: "c", text: "Start at maximum intensity to test it", isCorrect: false }, { id: "d", text: "Skip the warm-up to save time", isCorrect: false }], explanation: "Always consult a doctor before starting any new exercise program, especially with existing health conditions.", allowRetry: true },
      ],
      keyTakeaways: ["AI creates personalized workout plans for your situation", "Include limitations and health considerations in your prompt", "Consult a doctor before starting any new fitness routine"],
    },
  ],
};
