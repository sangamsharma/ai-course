// English locale — all user-facing strings live here.
// To add a language: copy this file, translate values, add to locales array.

const en = {
  nav: {
    course: "Course",
    scenarios: "Scenarios",
    aiTools: "AI Tools",
    templates: "Templates",
    glossary: "Glossary",
    forBusiness: "For Business",
    startLearning: "Start Learning →",
    search: "Search",
  },
  home: {
    badge: "Free Online Course",
    headline: "AI Made Simple — For Everyday Life",
    subtitle:
      "Learn to use ChatGPT, Claude, and Gemini for real tasks: emails, planning, business, and more. No technical background needed.",
    startCta: "Start Learning (It's Free)",
    exploreModules: "Explore Modules",
    features: {
      practical: { title: "100% Practical", desc: "No theory dumps. Every lesson teaches something you'll use this week." },
      safe: { title: "Safety First", desc: "Privacy and fact-checking woven into every lesson. Learn to use AI responsibly." },
      selfPaced: { title: "Self-Paced", desc: "~9.5 hours of content. Work through modules at your own speed, on any device." },
    },
  },
  modules: {
    heading: "Course Modules",
    subtitle: "18 modules, from AI basics to advanced real-world use. Pick what matters to you.",
    comingSoon: "Coming Soon",
    minutes: "min",
    lessons: "lessons",
  },
  business: {
    heading: "AI Training Built for Business",
    subtitle:
      "Practical workshops that turn AI curiosity into measurable results. In-person or remote, tailored to your tools and team.",
    bookBriefing: "Book a Briefing",
    viewPricing: "View Pricing",
  },
  pricing: {
    heading: "Transparent Pricing",
    subtitle: "From quick sessions to comprehensive programs. All prices in AUD.",
    customQuote: "Need something custom?",
    customDesc: "Multi-team programs, industry-specific curricula, or enterprise-wide AI transformation.",
    getQuote: "Get a Custom Quote",
  },
  contact: {
    heading: "Let's Talk AI Training",
    subtitle: "Tell us about your team, your tools, and your goals. We'll respond within one business day.",
    name: "Name",
    email: "Email",
    company: "Company / Organisation",
    interest: "Training Interest",
    message: "Message",
    send: "Send Message",
    sending: "Sending...",
    sent: "Message Sent!",
    sentDesc: "Thanks for reaching out. We typically respond within one business day.",
  },
  progress: {
    heading: "Your AI Journey",
    subtitle: "Track what you've learned and earned. All progress saved on your device.",
    lessonsDone: "Lessons Done",
    scenarios: "Scenarios",
    sandbox: "Sandbox Uses",
    badges: "Badges",
    overallProgress: "Overall Course Progress",
    exportJson: "Export JSON",
    exportCsv: "Export CSV",
    reset: "Reset all progress",
  },
  certificate: {
    title: "Certificate of Completion",
    completed: "has successfully completed the",
    course: "course, demonstrating practical AI skills for everyday life and work.",
    lessons: "Lessons",
    badgesEarned: "Badges",
    completedOn: "Completed on",
    print: "Print Certificate",
    savePdf: "Save as PDF",
  },
  sandbox: {
    heading: "Safe Practice Area",
    subtitle: "Practice writing prompts with real AI. Use fictional scenarios.",
    privacyReminder: "Do not enter passwords, IDs, bank details, or confidential information.",
    pickScenario: "Pick a Scenario",
    writePrompt: "Write Your Prompt",
    sendToAi: "Send to AI",
    gettingResponse: "Getting Response...",
    tryAnother: "Try Another Prompt",
    aiResponse: "AI Response",
    sessions: "Sessions",
    remaining: "requests remaining",
  },
  footer: {
    tagline: "A friendly, jargon-free course teaching practical AI skills for everyday life and small business.",
    madeWith: "Made with",
    forLearners: "for learners everywhere",
    allRightsReserved: "All rights reserved.",
  },
  generic: {
    backToModules: "Back to all modules",
    backToScenarios: "Back to scenarios",
    startModule: "Start Module",
    finishModule: "Finish Module",
    nextLesson: "Next Lesson",
    previousLesson: "Previous",
    practiceExercises: "Practice Exercises",
    keyTakeaways: "Key Takeaways",
    completed: "Completed",
    errorTitle: "Something went wrong",
    errorRetry: "Try again",
    loading: "Loading...",
    copy: "Copy",
    copied: "Copied!",
    searchPlaceholder: "Search modules, lessons, prompts...",
    noResults: "No results found",
    typeToSearch: "Type at least 2 characters to search...",
  },
} as const;

export type Locale = typeof en;
export type LocaleKey = keyof typeof en;

const locales: Record<string, Locale> = { en };

export function getLocale(lang = "en"): Locale {
  return locales[lang] || locales.en;
}

export function t(lang: string | undefined, path: string): string {
  const locale = getLocale(lang);
  const keys = path.split(".");
  let val: unknown = locale;
  for (const key of keys) {
    if (val && typeof val === "object" && key in val) {
      val = (val as Record<string, unknown>)[key];
    } else {
      return path; // fallback: return the key path
    }
  }
  return typeof val === "string" ? val : path;
}

export const supportedLocales = Object.keys(locales);
