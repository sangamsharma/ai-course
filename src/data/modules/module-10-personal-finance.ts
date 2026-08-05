import type { Module } from "@/lib/types";

export const module10: Module = {
  id: "personal-finance",
  slug: "personal-finance",
  title: "Personal Finance Assistant",
  shortTitle: "Personal Finance",
  description: "Use AI to understand bills, compare products, create budgets, and make informed money decisions — without sharing sensitive data.",
  icon: "DollarSign",
  color: "emerald",
  estimatedMinutes: 40,
  order: 10,
  lessons: [
    {
      id: "m10-budget",
      slug: "budgeting",
      moduleId: "personal-finance",
      title: "Budgeting & Expense Tracking",
      subtitle: "Create personalized budgets and spending plans with AI guidance",
      order: 1,
      estimatedMinutes: 12,
      content: [
        { type: "text", body: "AI can help you create a realistic budget, suggest spending categories, identify potential savings, and explain financial concepts in plain English. It's like a patient financial coach — but it's not a certified financial advisor." },
        { type: "tip-box", variant: "warning", title: "Critical: Never Share Financial Data", body: "NEVER paste bank statements, credit card numbers, account details, or tax file numbers into AI. Describe your situation in general terms using approximate numbers proportional to your real situation." },
        { type: "code-example", title: "Budget Planning Prompt:", code: `Help me create a monthly budget. My general situation (all approximate):
- Monthly income after tax: ~$[X]
- Fixed expenses: rent ~$[X], utilities ~$[X], transport ~$[X]
- Variable: groceries ~$[X], eating out ~$[X], entertainment ~$[X]
- Goals: [save for deposit / pay debt / build emergency fund]
- Concern: [I feel like money disappears each month]
Give me: a budget breakdown by category, 3 areas to cut back without feeling deprived, and a realistic monthly savings target.`, language: "text" },
      ],
      exercises: [
        { type: "prompt-playground", id: "m10-pp-budget", title: "Create Your Budget Prompt", instruction: "Write a budget planning prompt using approximate numbers. Remember — never use real account details.", promptHint: "Monthly income ~$4500. Rent $1800, utilities $250, transport $200, groceries $600. Goal: save $10,000 emergency fund. Where can I cut back?", sampleResponse: "50/30/20 framework: 50% needs ($2,250), 30% wants ($1,350), 20% savings ($900). To reach $10,000 at $900/month = ~11 months. Reduce eating out by $200/month to save $1,100/month = ~9 months.", improvementTip: "The AI applied a standard budget framework and showed exactly how long your goal would take. All numbers are estimates." },
      ],
      keyTakeaways: ["AI helps create budget frameworks and spot saving opportunities", "Use approximate numbers — never share real financial data", "Treat AI financial suggestions as educational, not professional advice"],
    },
    {
      id: "m10-compare",
      slug: "comparing-products",
      moduleId: "personal-finance",
      title: "Comparing Financial Products",
      subtitle: "Use AI to understand and compare insurance, loans, credit cards, and plans",
      order: 2,
      estimatedMinutes: 10,
      content: [
        { type: "text", body: "Comparing financial products is confusing. AI can explain terms, highlight hidden fees, and help you ask the right questions. It won't tell you what to pick, but it will help you make an informed decision." },
        { type: "code-example", title: "Product Comparison Prompt:", code: `I'm comparing two [product types]. Help me understand the differences:
Option A: [features, price, terms — no brand name]
Option B: [features, price, terms — no brand name]
Explain: key differences in plain English, hidden fees to watch for, questions to ask before choosing. Do NOT recommend one. Just help me understand.`, language: "text" },
      ],
      exercises: [
        { type: "quiz", id: "m10-q1", question: "When using AI for financial help, what must you NEVER share?", options: [{ id: "a", text: "Your monthly income range", isCorrect: false }, { id: "b", text: "Bank account numbers and tax file number", isCorrect: true }, { id: "c", text: "Your savings goals", isCorrect: false }, { id: "d", text: "Approximate grocery spending", isCorrect: false }], explanation: "Never share account numbers, tax IDs, passwords, or any data that could access your financial accounts.", allowRetry: true },
      ],
      keyTakeaways: ["AI explains complex financial terms in plain language", "Use AI to prepare questions before talking to banks or brokers", "Never share account numbers, tax IDs, or real financial documents"],
    },
    {
      id: "m10-goals",
      slug: "financial-goals",
      moduleId: "personal-finance",
      title: "Setting Financial Goals",
      subtitle: "Create savings plans and learn investment concepts with AI guidance",
      order: 3,
      estimatedMinutes: 10,
      content: [
        { type: "text", body: "AI can break down big financial goals into monthly targets, calculate savings timelines, and explain investment concepts. It's a planning assistant — not a replacement for professional financial advice." },
        { type: "bullet-list", title: "Financial Topics AI Can Explain:", items: ["Superannuation / retirement account basics", "Compound interest — how it works and why it matters", "Different savings account types explained", "How tax brackets work (in general terms)", "Debt payoff strategies (snowball vs avalanche)", "First home buyer programs (general information only)"] },
      ],
      exercises: [
        { type: "fill-in-blank", id: "m10-fib-goals", title: "Set a Savings Goal", instruction: "Use the template to plan a savings goal.", template: "I want to save ${{amount}} for a {{goal}} in {{timeframe}} months. My monthly income is approximately ${{income}}. After fixed expenses I have about ${{leftover}} left. Help me create a realistic savings plan.", blanks: [{ key: "amount", answer: "5000", hint: "How much?" }, { key: "goal", answer: "holiday", hint: "What for?" }, { key: "timeframe", answer: "12", hint: "Months?" }, { key: "income", answer: "4000", hint: "Monthly?" }, { key: "leftover", answer: "800", hint: "After bills?" }] },
      ],
      keyTakeaways: ["Break big goals into monthly targets with AI's help", "Use AI to understand financial concepts before consulting professionals", "All AI financial calculations are estimates — verify independently"],
    },
  ],
};
