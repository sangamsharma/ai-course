import type { OnboardingRoute, HelpNeeded, ConfidenceLevel, LearningStyle, DeviceConstraint } from "@/lib/types";

export const helpOptions: { value: HelpNeeded; label: string; icon: string }[] = [
  { value: "writing", label: "Writing & Communication", icon: "Pen" },
  { value: "planning", label: "Planning & Organizing", icon: "Calendar" },
  { value: "learning", label: "Learning & Studying", icon: "BookOpen" },
  { value: "business", label: "Business & Work", icon: "Briefcase" },
  { value: "creative", label: "Creative Projects", icon: "Palette" },
  { value: "other", label: "Just Curious / Other", icon: "Sparkles" },
];

export const confidenceOptions: { value: ConfidenceLevel; label: string; description: string }[] = [
  { value: "very-low", label: "Brand New", description: "I've never used AI before" },
  { value: "low", label: "Tried a Few Times", description: "I've experimented with ChatGPT or similar a few times" },
  { value: "medium", label: "Comfortable", description: "I use AI regularly for some tasks" },
  { value: "high", label: "Very Confident", description: "I use AI daily and want to refine my skills" },
];

export const learningStyleOptions: { value: LearningStyle; label: string; description: string }[] = [
  { value: "reading", label: "Show Me Examples", description: "I learn best by seeing real examples" },
  { value: "doing", label: "Let Me Practice", description: "I learn by trying things myself" },
  { value: "watching", label: "Guide Me Step by Step", description: "I prefer following a clear sequence" },
  { value: "mixed", label: "Mix It Up", description: "I like a combination of approaches" },
];

export const deviceOptions: { value: DeviceConstraint; label: string; description: string }[] = [
  { value: "phone-only", label: "Phone Only", description: "I'll be using my smartphone" },
  { value: "tablet", label: "Tablet", description: "I'll be using a tablet or iPad" },
  { value: "desktop", label: "Desktop or Laptop", description: "I'll be using a computer" },
  { value: "any", label: "Any Device", description: "I switch between devices" },
];

export const onboardingRoutes: OnboardingRoute[] = [
  {
    answers: { helpNeeded: ["writing"] },
    suggestedModuleSlugs: ["ai-made-simple", "ai-for-everyday-tasks"],
    suggestedScenarios: ["email-grammar", "resume-builder", "meeting-summary"],
    message: "You'll benefit most from our writing-focused lessons. Start with Level 1 to learn the basics, then explore everyday writing tasks in Level 4.",
  },
  {
    answers: { helpNeeded: ["planning"] },
    suggestedModuleSlugs: ["ai-made-simple", "ai-for-everyday-tasks"],
    suggestedScenarios: ["event-planner", "meal-planner-scenario"],
    message: "AI is fantastic for planning and organization. Level 4 teaches you how to create event plans, meal plans, trip itineraries, and a simple budget in minutes.",
  },
  {
    answers: { helpNeeded: ["learning"] },
    suggestedModuleSlugs: ["ai-made-simple", "the-art-of-asking", "work-with-your-files"],
    suggestedScenarios: ["study-helper", "language-practice"],
    message: "AI makes a great study companion. Level 3 teaches the Feynman Technique — using AI as a patient tutor that explains things and checks your understanding.",
  },
  {
    answers: { helpNeeded: ["business"] },
    suggestedModuleSlugs: ["ai-made-simple", "ai-for-your-business", "the-art-of-asking"],
    suggestedScenarios: ["social-media-post", "customer-response", "menu-designer"],
    message: "For business owners, AI can save hours every week on marketing, customer communication, and planning. Start here to get practical skills you can use today.",
  },
  {
    answers: { helpNeeded: ["creative"] },
    suggestedModuleSlugs: ["ai-made-simple", "the-art-of-asking", "creative-and-multimodal"],
    suggestedScenarios: ["social-media-post"],
    message: "AI is a wonderful creative partner. Level 8 teaches you to write stories, speeches, and poems, try voice mode, and generate images with AI as your co-creator.",
  },
  {
    answers: { helpNeeded: ["other"] },
    suggestedModuleSlugs: ["ai-made-simple", "the-art-of-asking"],
    suggestedScenarios: [],
    message: "Welcome! Start with the basics and discover how AI can help with whatever matters most to you. There's something here for everyone.",
  },
  {
    answers: { confidence: "very-low" },
    suggestedModuleSlugs: ["ai-made-simple"],
    suggestedScenarios: ["email-grammar"],
    message: "No worries at all — this course is built exactly for you. We'll start from the very beginning with simple explanations and friendly practice exercises.",
  },
  {
    answers: { confidence: "low" },
    suggestedModuleSlugs: ["ai-made-simple", "the-art-of-asking"],
    suggestedScenarios: ["email-grammar", "meeting-summary"],
    message: "You've got some experience, which is a great foundation. Let's build on that with better prompting techniques and practical scenarios.",
  },
  {
    answers: { confidence: "medium" },
    suggestedModuleSlugs: ["the-art-of-asking", "ai-for-everyday-tasks", "ai-for-your-business"],
    suggestedScenarios: ["customer-response", "social-media-post", "resume-builder"],
    message: "You're comfortable with AI — let's take it to the next level. These modules will help you use AI more strategically and efficiently.",
  },
  {
    answers: { confidence: "high" },
    suggestedModuleSlugs: ["the-art-of-asking", "ai-for-your-business", "advanced-prompting"],
    suggestedScenarios: ["farm-planning"],
    message: "You're already skilled. Level 9's advanced prompting techniques, plus verification skills and real business scenarios, are where you'll get the most value.",
  },
];

export function getSuggestedRoute(answers: { helpNeeded?: HelpNeeded[]; confidence?: ConfidenceLevel | null }): OnboardingRoute {
  // Find best match based on answers
  let bestMatch = onboardingRoutes[5]; // default: "other"

  // Match by help needed first
  if (answers.helpNeeded && answers.helpNeeded.length > 0) {
    const match = onboardingRoutes.find(
      (r) => r.answers.helpNeeded && r.answers.helpNeeded.some((h) => answers.helpNeeded!.includes(h))
    );
    if (match) bestMatch = match;
  }

  // Refine by confidence
  if (answers.confidence) {
    const confMatch = onboardingRoutes.find((r) => r.answers.confidence === answers.confidence);
    if (confMatch) {
      // Merge suggestions from help-needed and confidence match
      bestMatch = {
        ...bestMatch,
        ...confMatch,
        suggestedModuleSlugs: [...new Set([...bestMatch.suggestedModuleSlugs, ...confMatch.suggestedModuleSlugs])],
        suggestedScenarios: [...new Set([...bestMatch.suggestedScenarios, ...confMatch.suggestedScenarios])],
      };
    }
  }

  return bestMatch;
}
