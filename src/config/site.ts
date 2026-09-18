export const siteConfig = {
  name: "AI for Everyone",
  shortName: "AI4Everyone",
  description:
    "A friendly, interactive course teaching practical AI skills to non-technical learners. Master ChatGPT, Claude, and Gemini for everyday tasks — no jargon, just results.",
  url: "https://aiforeveryone.courses",
  ogImage: "/images/og-image.svg",
  author: "AI for Everyone",
  links: {
    github: "https://github.com",
  },
} as const;

export const courseConfig = {
  totalModules: 9,
  totalEstimatedMinutes: 509, // ~8.5 hours across 9 sequential Levels (plus optional "More Topics" extras)
  difficulty: "Beginner" as const,
  prerequisites: "None — just basic computer skills and curiosity!",
} as const;
