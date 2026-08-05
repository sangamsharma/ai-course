/**
 * Corporate AI Training Research — synthesized from:
 * - AI Training Company (AITC) competitor analysis
 * - AIM Faculty Guide (80-year RTO)
 * - EY AI Academy launch (March 2026)
 * - Telstra workforce AI program (22,000+ employees)
 * - IDC 2026 Global IT Skills Survey
 * - Gartner 5-Step Human-AI Workforce Journey
 * - Various Australian training providers
 */

// === CORPORATE TRAINING FRAMEWORKS ===

export const corporateFrameworks = {
  /** IDC's 6 Best Practices for Foundational AI Training (June 2026) */
  idcSixPractices: [
    "Executive sponsorship — visible CEO/COO support signals AI as strategic priority",
    "Role-based tailoring — leaders need strategy, technical teams need implementation, all need basics",
    "Embed governance — fairness, transparency, privacy woven through entire curriculum",
    "Reinforce & measure — periodic refreshers, knowledge checks, behavioral tracking beyond completion rates",
    "Multi-format learning — self-paced, live workshops, microlearning, hands-on labs, in-app guidance",
    "Champions network — peer-led sharing of prompts, patterns, and lessons learned",
  ],

  /** Gartner's Human-AI Workforce Journey */
  gartnerFiveSteps: [
    "Define AI-driven talent strategy aligned to ambition (cautious / opportunistic / first)",
    "Measure workforce AI-readiness with data-driven skills assessments",
    "Design human-AI work dynamic (redesign workflows, not just add AI)",
    "Scale human readiness with outcome-focused pilots",
    "Evolve agility through continuous iteration",
  ],

  /** D2L AI Upskilling Adoption Ladder (bottom-up) */
  d2lAdoptionLadder: [
    "Spark — identify and empower early champions",
    "Connect — build peer learning communities",
    "Pilot & Share — run small experiments, measure results",
    "Scale & Amplify — use evidence to gain executive buy-in",
    "Institutionalize — embed AI learning into core systems",
  ],
};

// === KEY STATISTICS ===

export const corporateStats = {
  /** IDC 2026 */
  readyForAI: "33% of leaders say they're fully ready to incorporate AI into daily work",
  aiTopSkill: "93% of IT leaders rank AI as the most important enterprise skill",
  formalTraining: "Only 1/3 of Australian office workers have received formal AI training from employer",
  dailyUsers: "2/3 of Australian office workers use AI; daily users save 4+ hrs/week",
  trainingImpact:
    ">5 hrs training = 79% regular AI users; no training = 18% regular users",
  enterpriseScale:
    "3,600+ people trained at one Australian org via EY; confidence rose 2.6→3.9",
  telstraScale: "22,000+ employees completed AI courses; 18,000+ Copilot licenses",
  suntorpReskill: "100+ reskilled via 13-14 week immersive program; 93% retention; 60% in new AI roles",
};

// === TOPICS ENTERPRISES WANT (beyond basic prompting) ===

export const enterpriseTopics = {
  executive: [
    "AI strategy & governance frameworks",
    "Risk management & compliance (Australian AI Safety Standard)",
    "ROI measurement & value realization",
    "Board-level AI literacy & oversight",
    "Workforce planning for AI transformation",
  ],
  manager: [
    "Leading AI-enabled teams",
    "Change management for AI adoption",
    "AI opportunity identification in workflows",
    "Performance measurement with AI tools",
    "Building AI policies & team guidelines",
  ],
  specialist: [
    "Agentic AI & autonomous workflow design",
    "Custom GPTs & AI agents for specific functions",
    "AI-assisted data analysis & reporting",
    "Prompt engineering for complex business tasks",
    "AI safety testing & red-teaming",
  ],
  allStaff: [
    "What AI is/isn't — foundation literacy",
    "Effective prompting for daily work",
    "Privacy & data protection with AI",
    "Fact-checking & hallucination awareness",
    "When NOT to use AI (legal, medical, confidential)",
  ],
};

// === PRICING MODELS OBSERVED ===

export const pricingBenchmarks = {
  workshops: {
    lunchLearn: { range: "$800–$1,600 AUD", duration: "1–2 hours", providers: ["AITC", "PM-Partners"] },
    halfDay: { range: "$1,150–$3,000 AUD", duration: "3–4 hours", providers: ["AITC", "AIM", "PM-Partners"] },
    fullDay: { range: "$1,150–$5,000 AUD", duration: "6–8 hours", providers: ["AITC", "AIM", "PM-Partners"] },
    multiDay: { range: "$2,200–$5,000+ AUD", duration: "2–5 days", providers: ["AIM", "UWA"] },
  },
  onlineSubscriptions: {
    perSeat: "$299–$795 AUD/year",
    enterpriseUnlimited: "Custom quote (typically $15K–$50K+ AUD/year)",
  },
  customPrograms: {
    enterpriseWide: "Custom quote ($50K–$500K+ depending on org size & scope)",
    trainTheTrainer: "Custom quote",
  },
};

// === AUSTRALIAN COMPETITORS (corporate AI training) ===

export const auCompetitors = [
  {
    name: "AI Training Company (AITC)",
    url: "https://www.aitrainingcompany.com.au",
    strength: "Pure B2B focus, role-specific tracks, tool-specific training, transparent pricing",
    weakness: "No online self-serve platform, no LMS/scalable digital product",
    pricing: "Lunch & Learn from $1,600, Half-Day from $3,000, Full-Day from $5,000",
  },
  {
    name: "PM-Partners",
    url: "https://www.pm-partners.com.au",
    strength: "Established training org, government & enterprise clients, certification-backed courses",
    weakness: "AI is new addition to portfolio, not core expertise",
    pricing: "From ~$795 + GST for one-day workshops",
  },
  {
    name: "AIM (Australian Institute of Management)",
    url: "https://www.aim.com.au",
    strength: "80-year brand, RTO accredited, microcredentials & diplomas, 18 AI courses",
    weakness: "Traditional education model, less agile, higher price points",
    pricing: "$1,150–$2,200 per short course",
  },
  {
    name: "EY AI Academy",
    url: "https://www.ey.com/au",
    strength: "150+ modules, 350+ use cases, enterprise-scale delivery, governance focus",
    weakness: "Consulting-first model, likely premium pricing, less accessible to SMEs",
    pricing: "Custom quote (enterprise consulting scale)",
  },
  {
    name: "TAFE Queensland",
    url: "https://tafeqld.edu.au",
    strength: "Accredited diploma, government-backed, practical focus",
    weakness: "Geographic limitation, vocational rather than executive focus",
    pricing: "Government-subsidized; varies by state",
  },
];

// === OUR POSITIONING OPPORTUNITY ===

export const ourOpportunity = {
  gap: "No provider offers BOTH self-serve online courses AND in-person corporate workshops with white-label LMS",
  advantage: "We have the online platform built (18 modules, real AI sandbox, progress tracking). Add corporate workshops + team dashboard = unique hybrid.",
  targetPricing: {
    onlinePerSeat: "$299 AUD / seat / year",
    workshopHalfDay: "$2,500 AUD",
    workshopFullDay: "$4,500 AUD",
    enterpriseUnlimited: "Custom quote",
  },
};
