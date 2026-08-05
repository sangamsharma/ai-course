import type { Module } from "@/lib/types";

export const module07: Module = {
  id: "advanced-prompting",
  slug: "advanced-prompting",
  title: "Advanced Prompting Techniques",
  shortTitle: "Advanced Prompting",
  description: "Chain prompts together, use multi-step reasoning, and master advanced strategies like few-shot learning and chain-of-thought.",
  icon: "Zap",
  color: "violet",
  estimatedMinutes: 45,
  order: 7,
  lessons: [
    {
      id: "m07-chained",
      slug: "chained-prompts",
      moduleId: "advanced-prompting",
      title: "Chained Prompts & Multi-Step Workflows",
      subtitle: "Break big tasks into smaller steps — each AI output feeds the next prompt",
      order: 1,
      estimatedMinutes: 12,
      content: [
        { type: "text", body: "Most people use AI one prompt at a time. But the real power comes from chaining prompts — using the output of one prompt as input for the next. This turns AI from a Q&A machine into a thinking partner that works through problems step by step." },
        { type: "code-example", title: "Chained Prompt Workflow Example:", code: `# Step 1: Brainstorm
Prompt: "List 5 creative themes for a community fundraiser event. For each theme, write one sentence describing the vibe."
[AI gives 5 themes]
# Step 2: Choose & Expand
Prompt: "Take theme #3 (the garden party) and expand it. What activities, food, and decorations would work? Write a detailed plan."
[AI gives detailed plan]
# Step 3: Create Assets
Prompt: "Using the garden party plan above, write: 1) A flyer description, 2) A social media post, 3) A volunteer sign-up email"
# Step 4: Refine
For each output, ask: "Make this more [concise/persuasive/warm]. Adjust for [audience]."`, language: "text" },
        { type: "bullet-list", title: "When to Chain Prompts:", items: ["Big projects with multiple deliverables", "When you need to make decisions between steps", "Content that needs consistency across pieces", "Research tasks where each answer raises new questions", "Planning events, launches, or complex projects"] },
        { type: "tip-box", variant: "tip", title: "Pro Tip: Save Your Chains", body: "When you find a prompt chain that works, save it as a template. Next time you face a similar task, you have a proven workflow ready to go." },
      ],
      exercises: [
        { type: "quiz", id: "m07-q1", question: "What is the main benefit of chaining prompts instead of using one big prompt?", options: [{ id: "a", text: "It's faster to type short prompts", isCorrect: false }, { id: "b", text: "Each step can be reviewed and adjusted before continuing", isCorrect: true }, { id: "c", text: "AI tools charge less for short prompts", isCorrect: false }, { id: "d", text: "Chained prompts don't need fact-checking", isCorrect: false }], explanation: "Chaining lets you review and adjust the output at each step before feeding it to the next. This gives you more control and better final results.", allowRetry: true },
        { type: "prompt-playground", id: "m07-pp-chain", title: "Build a 3-Step Chain", instruction: "Think of a task you do regularly (planning a trip, writing a report, organizing an event). Write out 3 chained prompts where each prompt builds on the previous output.", promptHint: "Step 1: Gather options/ideas → Step 2: Pick and expand the best one → Step 3: Create the final deliverable", sampleResponse: "Step 1: 'List 5 weekend getaway destinations within 3 hours of Sydney. For each, note the vibe and 2 key attractions.' Step 2: 'For the Blue Mountains option, plan a 2-day itinerary including hiking, food, and accommodation.' Step 3: 'Turn that itinerary into a shareable weekend guide with emoji, tips, and a packing list.'", improvementTip: "Notice how each step gets more specific. Step 1 is broad exploration, Step 2 narrows focus, Step 3 produces the final asset." },
      ],
      keyTakeaways: ["Chain prompts to tackle complex, multi-step tasks", "Review each AI output before feeding it to the next step", "Save successful prompt chains as reusable templates", "The 5-part formula still applies to each individual prompt in the chain"],
    },
    {
      id: "m07-fewshot",
      slug: "few-shot-prompting",
      moduleId: "advanced-prompting",
      title: "Few-Shot Prompting: Teaching by Example",
      subtitle: "Show AI exactly what you want by giving it examples before your request",
      order: 2,
      estimatedMinutes: 12,
      content: [
        { type: "text", body: "Few-shot prompting is a simple but powerful technique: you give the AI 2-3 examples of what you want BEFORE your actual request. The AI picks up the pattern from your examples and applies it to your new input. It's like saying 'do it like this, this, and this — now do it for this.'" },
        { type: "code-example", title: "Few-Shot Prompt Template:", code: `I'll show you 3 examples of how I want responses formatted. Then give you a new one to respond to in the same style.

Example 1:
Customer: "My order hasn't arrived yet"
Response: "I'm sorry about the delay, [Name]. Let me check that for you right now. Your order #____ was shipped on [date] and is currently [status]. I'll [action] to make this right. Could you confirm your delivery address while I look into this?"

Example 2:
Customer: "This product is defective"
Response: "That's frustrating — I understand. To get this sorted quickly, could you share a photo of the issue? I'll process a replacement or full refund, whichever you prefer. No need to return the defective item."

Example 3:
Customer: "Do you ship internationally?"
Response: "Great question! We currently ship to [list countries]. Shipping takes [X-Y] business days and costs [Z]. Would you like me to check rates for your specific country?"

Now respond to this customer inquiry in the same warm, solution-focused style:
Customer: "[your actual customer message here]"`, language: "text" },
        { type: "tip-box", variant: "example", title: "Where Few-Shot Works Best:", body: "Customer service responses, email templates, social media posts, product descriptions, report summaries, data formatting, and any task where consistency matters across multiple outputs." },
      ],
      exercises: [
        { type: "fill-in-blank", id: "m07-fib-fewshot", title: "Complete the Few-Shot Template", instruction: "Fill in the blanks to create a few-shot prompt for writing thank-you notes.", template: "Example 1: Thank a {{relation1}} for a {{gift1}}. Response: 'Dear {{name1}}, thank you so much for the thoughtful {{gift1}}! {{detail1}}. It was so kind of you.'\n\nExample 2: Thank a {{relation2}} for {{reason2}}. Response: 'Dear {{name2}}, I'm so grateful for your {{reason2}}. {{detail2}}. It meant the world to me.'\n\nNow write a thank-you note to my {{relation3}} for {{reason3}}.", blanks: [{ key: "relation1", answer: "friend", hint: "Who is the first thank-you for?" }, { key: "gift1", answer: "birthday present", hint: "What did they give?" }, { key: "name1", answer: "Sarah", hint: "Recipient's name" }] },
      ],
      keyTakeaways: ["Few-shot prompting shows AI the pattern you want through examples", "2-3 examples are usually enough for the AI to understand", "Keep examples consistent in format and tone", "Ideal for tasks requiring uniform output style"],
    },
    {
      id: "m07-cot",
      slug: "chain-of-thought",
      moduleId: "advanced-prompting",
      title: "Chain-of-Thought: Make AI Show Its Work",
      subtitle: "Ask AI to explain its reasoning step by step for more accurate and trustworthy answers",
      order: 3,
      estimatedMinutes: 10,
      content: [
        { type: "text", body: "Chain-of-thought (CoT) prompting is asking the AI to 'think step by step' before answering. This dramatically improves accuracy for reasoning tasks — math, logic, analysis, comparisons, and decisions. Instead of jumping to a conclusion, the AI walks through its reasoning, and you can spot errors before acting on the output." },
        { type: "code-example", title: "Standard vs Chain-of-Thought:", code: `❌ Standard: "Is it cheaper to fly or drive from Melbourne to Sydney for a family of 4?"
✅ Chain-of-Thought: "Compare flying vs driving from Melbourne to Sydney for a family of 4. Think step by step:
1. Calculate driving costs (fuel for ~880km, any tolls, potential overnight stay)
2. Calculate flying costs (4 return tickets, airport transfers, baggage)
3. Compare total time (driving: ~9hrs + stops; flying: ~1.5hrs + airport time)
4. Consider convenience factors (luggage flexibility, schedule freedom)
5. Give your final recommendation with reasoning"`, language: "text" },
        { type: "tip-box", variant: "important", title: "When to Use CoT:", body: "Math problems, budget comparisons, decision-making with multiple factors, pros/cons analysis, troubleshooting steps, and any situation where the reasoning matters as much as the answer." },
      ],
      exercises: [
        { type: "quiz", id: "m07-q2", question: "Adding 'think step by step' to a prompt is called:", options: [{ id: "a", text: "Few-shot prompting", isCorrect: false }, { id: "b", text: "Chain-of-thought prompting", isCorrect: true }, { id: "c", text: "Zero-shot prompting", isCorrect: false }, { id: "d", text: "Persona prompting", isCorrect: false }], explanation: "Chain-of-thought prompting asks the AI to break down its reasoning into steps, improving accuracy on complex tasks.", allowRetry: true },
      ],
      keyTakeaways: ["Add 'think step by step' or numbered steps to improve accuracy on reasoning tasks", "Chain-of-thought lets you verify the AI's logic before trusting the answer", "Essential for financial, legal, and business decisions", "Combines well with chained prompts for complex problem-solving"],
    },
    {
      id: "m07-persona",
      slug: "advanced-personas",
      moduleId: "advanced-prompting",
      title: "Advanced Personas & Role-Playing",
      subtitle: "Go beyond basic personas — create expert panels, devil's advocates, and simulated audiences",
      order: 4,
      estimatedMinutes: 11,
      content: [
        { type: "text", body: "You've learned basic personas (Module 2). Now take it further: create multiple personas in the same conversation, have them debate each other, or simulate how different audiences would react to your content. This turns AI into a powerful thinking tool for testing ideas before they go live." },
        { type: "code-example", title: "Expert Panel Prompt:", code: `I want you to act as a panel of 3 experts reviewing my business idea. Respond as each expert in turn:

Expert 1 — A Financial Advisor: Focus on costs, revenue potential, funding needs, and financial risks.
Expert 2 — A Marketing Director: Focus on target audience, positioning, messaging, and competitive landscape.
Expert 3 — A Customer: Focus on user experience, pain points, value perception, and what would make you buy or not buy.

My business idea: [describe your idea briefly].

Each expert, give your honest assessment in 2-3 sentences. Then have them briefly discuss where they agree and disagree.`, language: "text" },
      ],
      exercises: [
        { type: "prompt-playground", id: "m07-pp-panel", title: "Create an Expert Panel", instruction: "Think of a decision you're facing. Create a prompt for an expert panel of 2-3 roles that would help you think through it.", promptHint: "I want to decide whether to [decision]. Create a panel of [roles] to advise me.", sampleResponse: "For deciding whether to start a side business: Expert 1 — Accountant (tax implications, startup costs), Expert 2 — Someone who did it (time management tips, realistic expectations), Expert 3 — Potential customer (would they pay for this?).", improvementTip: "The more specific the expert roles, the more useful the feedback. Name real concerns each expert would have." },
      ],
      keyTakeaways: ["Use multiple personas to stress-test ideas from different angles", "Panel prompts give you diverse perspectives in one conversation", "Devil's advocate personas help find flaws before they cost you", "Simulated audiences let you test messages before sending them"],
    },
  ],
};
