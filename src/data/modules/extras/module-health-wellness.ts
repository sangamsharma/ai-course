import type { Module } from "@/lib/types";

export const moduleHealthWellness: Module = {
  id: "health-wellness-extras",
  slug: "health-wellness-extras",
  title: "More Topics: Health & Wellness",
  shortTitle: "Health & Wellness",
  description: "Optional extras: prepare for doctor visits and build fitness routines with AI — with strict safety guardrails. (Meal planning already lives in Level 4.)",
  icon: "Heart",
  color: "rose",
  estimatedMinutes: 20,
  order: 20,
  lessons: [
    {
      id: "m08-doctor",
      slug: "doctor-visit-prep",
      moduleId: "health-wellness-extras",
      title: "Preparing for Doctor Visits",
      subtitle: "Use AI to organize symptoms, prepare questions, and understand medical information",
      order: 1,
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
      moduleId: "health-wellness-extras",
      title: "Fitness & Movement Plans",
      subtitle: "Create personalized workout routines based on your fitness level and goals",
      order: 2,
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
