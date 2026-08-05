import type {
  PricingTier,
  CorporateService,
  CaseStudy,
  TrainingTrackInfo,
} from "@/lib/types";

export const pricingTiers: PricingTier[] = [
  {
    id: "lunch-learn",
    name: "Lunch & Learn",
    format: "lunch-learn",
    priceAUD: 1600,
    priceLabel: "from $1,600 AUD",
    duration: "1–2 hours",
    description:
      "High-impact introductory session. Perfect for teams that want to understand what AI can do without a full-day commitment.",
    highlights: [
      "AI essentials & live demos",
      "One tool deep-dive (Copilot, ChatGPT, or Gemini)",
      "Q&A with your team's real scenarios",
      "Take-home prompt cheat sheet",
    ],
    cta: "Book a Lunch & Learn",
    href: "/book?tier=lunch-learn",
  },
  {
    id: "half-day",
    name: "Half-Day Workshop",
    format: "half-day",
    priceAUD: 3000,
    priceLabel: "from $3,000 AUD",
    duration: "3–4 hours",
    description:
      "Deep-dive into a specific tool or job function. Hands-on exercises using your team's real work scenarios.",
    highlights: [
      "Everything in Lunch & Learn",
      "Role-specific breakouts (Marketing, Finance, Ops)",
      "Hands-on prompt engineering practice",
      "AI safety & privacy framework",
      "30-day follow-up Q&A access",
    ],
    cta: "Book a Half-Day Workshop",
    href: "/book?tier=half-day",
    featured: true,
  },
  {
    id: "full-day",
    name: "Full-Day Immersive",
    format: "full-day",
    priceAUD: 5000,
    priceLabel: "from $5,000 AUD",
    duration: "6–8 hours",
    description:
      "Comprehensive AI capability building. Combines strategic thinking with hands-on tool mastery across multiple platforms.",
    highlights: [
      "Everything in Half-Day Workshop",
      "Multi-tool comparison & strategy",
      "Custom AI workflows for your team",
      "AI policy & governance workshop",
      "Leadership AI readiness assessment",
      "60-day follow-up support & refresher",
    ],
    cta: "Book a Full-Day Workshop",
    href: "/book?tier=full-day",
  },
  {
    id: "online-course",
    name: "Online Course Subscription",
    format: "online-self-paced",
    priceAUD: 299,
    priceLabel: "$299 AUD / seat / year",
    duration: "Self-paced",
    description:
      "18-module online curriculum. Ideal for ongoing team upskilling alongside in-person workshops, or for distributed teams.",
    highlights: [
      "Full access to all 18 modules",
      "Interactive exercises & quizzes",
      "Progress tracking & certificates",
      "Team dashboard (10+ seats)",
      "Monthly content updates",
    ],
    cta: "Explore the Course",
    href: "/modules",
  },
];

export const corporateServices: CorporateService[] = [
  {
    id: "team-training",
    title: "Team Training & Workshops",
    icon: "Users",
    description:
      "Hands-on workshops tailored to your team's tools and workflows — from foundational AI skills to advanced prompting.",
    tracks: [
      { label: "AI Essentials (all tools)" },
      { label: "Microsoft Copilot Deep-Dive" },
      { label: "Google Gemini & Workspace" },
      { label: "ChatGPT & Custom GPTs" },
      { label: "Custom curriculum →", href: "/contact" },
    ],
  },
  {
    id: "role-specific",
    title: "Role-Specific Training",
    icon: "Target",
    description:
      "AI workshops tailored to job functions. Your marketing team learns different skills than your finance team.",
    tracks: [
      { label: "AI for Marketing & Content" },
      { label: "AI for PR & Communications" },
      { label: "AI for Financial Services" },
      { label: "AI for HR & People Operations" },
      { label: "AI for Your Role →", href: "/contact" },
    ],
  },
  {
    id: "executive-training",
    title: "Executive & Board Training",
    icon: "Briefcase",
    description:
      "Strategic briefings and hands-on labs for leaders. Understand AI's strategic implications — and use the tools yourself.",
    tracks: [
      { label: "Strategic Briefing (1–2 hrs)", href: "/book?tier=lunch-learn" },
      { label: "Hands-On Lab for Leaders", href: "/book?tier=half-day" },
      { label: "Full-Day Immersive", href: "/book?tier=full-day" },
      { label: "AI Governance Workshop" },
      { label: "Board AI Readiness Assessment" },
    ],
  },
  {
    id: "consulting",
    title: "Consulting & Pilot Programs",
    icon: "Lightbulb",
    description:
      "Need a bespoke solution? We partner with you on AI strategy, policy development, and pilot program design.",
    tracks: [
      { label: "AI Policy Development" },
      { label: "Pilot Program Design & Run" },
      { label: "AI Tool Selection & Procurement" },
      { label: "Change Management for AI" },
      { label: "ROI Measurement Framework" },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "placeholder-1",
    company: "[Your Client Here]",
    industry: "Professional Services",
    challenge:
      "Team of 45 used ChatGPT informally with inconsistent results. No shared prompting standards, privacy concerns unaddressed.",
    solution:
      "Half-day workshop covering AI essentials, prompt frameworks, and privacy guardrails. Monthly refresher via online course.",
    outcomes: [
      "85% of team reported confidence using AI daily",
      "Saved estimated 5 hrs/week per person on writing tasks",
      "Zero privacy incidents post-training",
      "Adopted team-wide prompt library",
    ],
    quote: {
      text: "The training was genuinely useful — not just theory. Our team walked out with skills they used the next day.",
      name: "[Name]",
      role: "Operations Director, [Company]",
    },
  },
];

export const trainingTracks: TrainingTrackInfo[] = [
  {
    id: "ai-essentials",
    label: "AI Essentials",
    description: "Foundational AI literacy: what generative AI is, how to prompt effectively, and how to stay safe.",
    tools: ["ChatGPT", "Claude", "Gemini"],
    audience: ["team", "individual"],
    durationOptions: ["lunch-learn", "half-day", "online-self-paced"],
  },
  {
    id: "microsoft-copilot",
    label: "Microsoft Copilot",
    description: "Master Copilot in M365: Excel, Teams, Word, PowerPoint, and Copilot Studio.",
    tools: ["Microsoft Copilot"],
    audience: ["team", "executive"],
    durationOptions: ["half-day", "full-day"],
  },
  {
    id: "google-ai",
    label: "Google AI",
    description: "Gemini, Workspace integration, NotebookLM for research and analysis.",
    tools: ["Gemini", "Google Workspace"],
    audience: ["team", "executive"],
    durationOptions: ["half-day", "full-day"],
  },
  {
    id: "openai",
    label: "OpenAI / ChatGPT",
    description: "ChatGPT, Custom GPTs, Deep Research, and the Agent workflow.",
    tools: ["ChatGPT"],
    audience: ["team", "executive"],
    durationOptions: ["half-day", "full-day"],
  },
  {
    id: "marketing",
    label: "AI for Marketing",
    description: "Campaign optimisation, AI video, content generation, and media insights.",
    tools: ["ChatGPT", "Claude", "Gemini"],
    audience: ["team"],
    durationOptions: ["half-day", "full-day"],
  },
  {
    id: "financial-services",
    label: "AI for Financial Services",
    description: "Data analysis, risk reporting, rapid report generation with AI guardrails.",
    tools: ["ChatGPT", "Claude"],
    audience: ["team", "executive"],
    durationOptions: ["half-day", "full-day"],
  },
];

export const clientLogos = [
  { name: "Company 1", src: "" },
  { name: "Company 2", src: "" },
  { name: "Company 3", src: "" },
  { name: "Company 4", src: "" },
  { name: "Company 5", src: "" },
  { name: "Company 6", src: "" },
];
