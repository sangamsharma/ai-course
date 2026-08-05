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
  totalModules: 19,
  totalEstimatedMinutes: 575, // ~9.5 hours (6 complete modules + 12 in development)
  difficulty: "Beginner" as const,
  prerequisites: "None — just basic computer skills and curiosity!",
} as const;
