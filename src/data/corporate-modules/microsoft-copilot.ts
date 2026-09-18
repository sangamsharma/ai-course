import type { Module } from "@/lib/types";

export const microsoftCopilotModule: Module = {
  id: "microsoft-copilot",
  slug: "microsoft-copilot",
  title: "Microsoft 365 Copilot",
  shortTitle: "MS 365 Copilot",
  description: "Master Microsoft's AI assistant built into Word, Excel, Outlook, and Teams. Learn to use agents, Copilot Pages, Notebooks, and work-data grounding for enterprise productivity.",
  icon: "Sparkles",
  color: "violet",
  estimatedMinutes: 55,
  order: 1,
  lessons: [
    {
      id: "m19-subscription",
      slug: "subscription-setup",
      moduleId: "microsoft-copilot",
      title: "Understanding Copilot Tiers & Setup",
      subtitle: "Free vs Copilot Chat vs Full M365 Copilot — which features do you have?",
      order: 1,
      estimatedMinutes: 12,
      content: [
        { type: "text", body: "Microsoft 365 Copilot comes in different tiers, and it's easy to get confused. This lesson clarifies exactly what you get at each level, how to identify your subscription, and how to get started." },
        { type: "bullet-list", title: "Three Copilot Tiers:", items: [
          "Free: Basic chat at copilot.microsoft.com. Web-grounded only. No work data access. Good for testing.",
          "Copilot Chat (Baseline): Included in ALL business/enterprise M365 accounts at no extra cost. Enterprise data protection. Copilot in Word, Excel, PowerPoint, OneNote (limited). The shield icon means your data is NOT used to train AI models.",
          "Microsoft 365 Copilot (Full): $30 USD/user/month add-on. Everything in Chat PLUS: Copilot in Outlook & Teams, full app features, work data grounding (emails, docs, meetings, chats), pre-built agents, custom agents via Agent Builder, Copilot Pages, Copilot Notebooks.",
        ]},
        { type: "tip-box", variant: "tip", title: "How to Check Your Tier:", body: "Go to office.com, sign in with your work account. If you see a Work/Web toggle switch at the top of Copilot, you have at least Copilot Chat. If you see agents listed on the left sidebar, you likely have the full license. When in doubt, ask your IT department." },
        { type: "code-example", title: "Quick Setup Steps:", code: `1. Go to office.com and sign in with your work email
2. Click "Copilot" in the left sidebar (or the Copilot icon)
3. Verify the shield icon — enterprise data protection active
4. Check for Work/Web toggle — confirms business account
5. Look for "Agents" in the left sidebar — confirms full license
6. Bookmark this page — it's your AI command center`, language: "text" },
      ],
      exercises: [
        { type: "quiz", id: "m19-q1", question: "What does the shield icon in Microsoft 365 Copilot mean?", options: [
          { id: "a", text: "The app is secure from viruses", isCorrect: false },
          { id: "b", text: "Enterprise data protection — your data is NOT used to train AI models", isCorrect: true },
          { id: "c", text: "You have the most expensive plan", isCorrect: false },
          { id: "d", text: "Two-factor authentication is enabled", isCorrect: false },
        ], explanation: "The shield icon indicates enterprise data protection. Your prompts and data are kept secure and will not be used to train Microsoft's AI models. This is included in all business and enterprise accounts.", allowRetry: true },
      ],
      keyTakeaways: ["Three tiers: Free, Copilot Chat (baseline), Full M365 Copilot", "Shield icon = enterprise data protection active", "Work/Web toggle confirms business/enterprise account", "Full license required for agents, Outlook integration, work data grounding"],
    },
    {
      id: "m19-chat",
      slug: "copilot-chat-basics",
      moduleId: "microsoft-copilot",
      title: "Copilot Chat: Your AI Command Center",
      subtitle: "Prompt gallery, personas, work data grounding, and the Work/Web toggle",
      order: 2,
      estimatedMinutes: 12,
      content: [
        { type: "text", body: "The Copilot chat homepage is much more than a prompt box. It's an AI command center that connects to your organization's files, emails, and meetings. Understanding the homepage features will save you hours every week." },
        { type: "bullet-list", title: "Homepage Features:", items: [
          "Prompt box: Type or dictate your request. Use the mic button for voice input.",
          "Prompt gallery: Pre-written prompts that automatically pull from YOUR files and meetings. 'Help me prepare for a 1-on-1' pulls relevant emails, docs, and meeting history.",
          "Work/Web toggle: 'Work' grounds responses in your organization's data (emails, docs, meetings). 'Web' searches the internet. Use Work for internal tasks, Web for general research.",
          "Agent selector: Type @ to call specific agents (Career Coach, Researcher, Analyst). Or let Copilot suggest the right agent automatically.",
          "Chat history: All conversations saved in the left sidebar. Search across past chats.",
        ]},
        { type: "tip-box", variant: "example", title: "Prompt Gallery in Action:", body: "Instead of writing a prompt from scratch, click 'Help me prepare for a 1-on-1' in the prompt gallery. Copilot will pull your recent emails with that person, shared documents, and meeting notes — then give you a briefing in seconds. What used to take 30 minutes now takes 5 seconds." },
        { type: "code-example", title: "Persona + Context Prompt Pattern:", code: `"You are my [role/advisor] with [X] years of experience.
Help me [specific goal].
Ask me questions I haven't considered.
[Your actual request]."

Example:
"You are my career advisor with over 20 years of experience.
Help me identify the challenges and opportunities in making a career shift.
Ask me questions that I have not considered to help me identify what my goals should be.
Help me find and apply for jobs in the forestry service."`, language: "text" },
      ],
      exercises: [
        { type: "prompt-playground", id: "m19-pp-persona", title: "Write a Persona Prompt", instruction: "Think of a work task. Write a prompt using the Persona + Context pattern: give Copilot a role, instructions, context, then your actual request.", promptHint: "You are my executive assistant with 15 years of experience. Help me prepare my weekly team update. Pull from my calendar and recent emails. Create a structured summary organized by project.", sampleResponse: "The persona pattern transforms generic AI responses into engaged coaching conversations. The key: give Copilot a specific role BEFORE your request, not after. This works because the AI adopts the persona's expertise and approach for the entire conversation.", improvementTip: "The more specific the role, the more tailored the response. 'You are a financial analyst specializing in SaaS metrics' gets better results than 'You are a helpful assistant.'" },
      ],
      keyTakeaways: ["Prompt gallery saves 30 minutes of prep in 5 seconds — use it", "Work/Web toggle: Work for internal data, Web for general research", "Persona + Context pattern transforms generic answers into coaching conversations", "@mention agents in chat for specialized tasks"],
    },
    {
      id: "m19-agents",
      slug: "copilot-agents",
      moduleId: "microsoft-copilot",
      title: "Working with Copilot Agents",
      subtitle: "Pre-built agents for specialized tasks — Career Coach, Researcher, Analyst, Facilitator",
      order: 3,
      estimatedMinutes: 12,
      content: [
        { type: "text", body: "Agents are the most powerful feature of Microsoft 365 Copilot. An agent is a specialized AI assistant designed for a specific job — it already knows the context, the parameters, and the workflow. Instead of writing long prompts to explain what you need, you just select the right agent and ask your question." },
        { type: "bullet-list", title: "Key Pre-Built Agents:", items: [
          "Career Coach: Guides professional development, explores career opportunities, gives actionable advice. Asks you questions to clarify goals before answering.",
          "Researcher: Combines web search with your work data for comprehensive research briefings. Takes a few minutes for deep results (not instant chat). Can create Copilot Pages from findings.",
          "Analyst: Specialized in data analysis, trend identification, and structured comparisons. Great for reviewing spreadsheets and reports.",
          "Facilitator: Takes meeting notes automatically in Teams, captures action items with owners, schedules follow-up meetings. Replaces separate notetaker tools.",
          "Visual Creator: Generates images and visual content for presentations, social media, and documents.",
        ]},
        { type: "tip-box", variant: "important", title: "How to Use Agents:", body: "1) Click 'All Agents' in the left sidebar. 2) Browse Microsoft-built agents or third-party agents. 3) Click 'Add' on agents you want. 4) Select the agent (instead of 'New Chat') when you need its expertise. 5) Or type @agent-name in any chat to call that agent. Some agents require the full M365 Copilot license." },
        { type: "tip-box", variant: "example", title: "Career Coach Example:", body: "Without an agent: You write a long prompt explaining your career situation. Copilot gives a generic answer. You refine. Back and forth. With Career Coach agent: Select the agent, ask your question. The agent already knows its role — it asks you clarifying questions, does specialized research, and guides you through the process like a real coach." },
      ],
      exercises: [
        { type: "quiz", id: "m19-q2", question: "What is the main advantage of using a Copilot agent over regular chat?", options: [
          { id: "a", text: "Agents are faster at typing", isCorrect: false },
          { id: "b", text: "Agents come pre-configured with specialized context and parameters for specific tasks", isCorrect: true },
          { id: "c", text: "Agents work without internet", isCorrect: false },
          { id: "d", text: "Agents are always free", isCorrect: false },
        ], explanation: "Agents are pre-configured with specialized knowledge, parameters, and workflows for specific jobs. This means you get focused, high-quality results without having to write elaborate prompts explaining what you need.", allowRetry: true },
      ],
      keyTakeaways: ["Agents = specialized AI for specific jobs — no long prompts needed", "Pre-built agents: Career Coach, Researcher, Analyst, Facilitator, Visual Creator", "Add agents to your sidebar for quick access", "Use @agent-name in chat to call agents inline", "Agents ask clarifying questions — they coach, don't just answer"],
    },
    {
      id: "m19-pages",
      slug: "pages-notebooks",
      moduleId: "microsoft-copilot",
      title: "Copilot Pages & Notebooks",
      subtitle: "Collaborative AI workspaces — turn chat results into shared, editable documents",
      order: 4,
      estimatedMinutes: 10,
      content: [
        { type: "text", body: "Copilot Pages and Notebooks are two powerful features that turn AI chat from a solo activity into a collaborative workspace. Pages are like an AI-powered Canva — you turn chat results into editable, shareable documents. Notebooks are centralized project hubs where you attach files and have focused AI conversations about that specific project." },
        { type: "bullet-list", title: "Copilot Pages:", items: [
          "Turn any Copilot chat response into an editable page",
          "Click the three dots on any response → 'Edit in Pages' or 'Add to new page'",
          "Add notes, iterate, and collaborate with team members directly on the page",
          "Share pages within your organization",
          "Like Canva but powered by AI and grounded in your work data",
        ]},
        { type: "bullet-list", title: "Copilot Notebooks:", items: [
          "Access via the 9-dot app launcher → Copilot Notebooks",
          "Attach files (Word, PowerPoint, PDFs) as permanent context for a project",
          "All chats within a notebook reference ONLY the attached files — focused, relevant answers",
          "Overview tab summarizes all notebook contents",
          "Create new documents, study guides, and briefings from notebook data",
          "Share notebooks with team members for collaborative project work",
        ]},
        { type: "tip-box", variant: "example", title: "Notebook Use Case: Client Research", body: "Create a notebook for each client. Attach their proposals, meeting slides, and past emails. Now every Copilot chat in that notebook draws from those files — you get client-specific answers without re-explaining context every time. Share the notebook with your team so everyone has the same AI-powered research assistant." },
      ],
      exercises: [
        { type: "prompt-playground", id: "m19-pp-notebook", title: "Design a Notebook", instruction: "Think of a project you work on regularly. What files would you attach to a Copilot Notebook? Write a prompt you'd use inside that notebook.", promptHint: "I'm creating a notebook for our Q3 product launch. Files attached: launch plan, competitor analysis, customer feedback summary. Prompt: 'Based on our launch plan and competitor analysis, identify the 3 biggest risks to our Q3 timeline and suggest mitigation strategies for each.'", sampleResponse: "A well-designed notebook eliminates the need to re-explain your project every time you chat with Copilot. The AI draws from attached files for every answer, giving you focused, project-specific responses.", improvementTip: "Attach 3-5 key files per notebook — enough for context, not so many that answers become unfocused. Update files as your project evolves." },
      ],
      keyTakeaways: ["Pages = turn chat results into editable, shareable documents", "Notebooks = project workspaces with attached files as permanent context", "Share both Pages and Notebooks with your team", "Notebooks eliminate re-explaining context — files ARE the context"],
    },
    {
      id: "m19-outlook-teams",
      slug: "outlook-teams",
      moduleId: "microsoft-copilot",
      title: "Copilot in Outlook & Teams",
      subtitle: "AI email management and automated meeting facilitation",
      order: 5,
      estimatedMinutes: 10,
      content: [
        { type: "text", body: "Copilot in Outlook and Teams is where the biggest time savings happen. Instead of hours managing email and taking meeting notes, Copilot handles the repetitive work so you can focus on decisions and relationships." },
        { type: "bullet-list", title: "Copilot in Outlook:", items: [
          "Priority Inbox: Copilot surfaces your most important emails first — it learns what matters",
          "AI Drafting: Reply in your tone and style. Copilot drafts the response, you review and send",
          "Email Summaries: Long email thread? Copilot summarizes key points and decisions",
          "Schedule for Later: Write an email now, have Copilot send it at the right time",
          "Meeting Scheduling: 'Find a time next week when everyone is free for 30 minutes' — across calendars",
        ]},
        { type: "bullet-list", title: "Copilot in Teams (Facilitator Agent):", items: [
          "Automatic meeting notes: No separate notetaker tool needed",
          "Captures action items with owners assigned",
          "Schedules follow-up meetings automatically",
          "Summarizes meetings for late arrivals or people who couldn't attend",
          "Transcribes and timestamps key decisions for easy reference",
          "Works during the meeting — notes appear in real-time in the meeting chat",
        ]},
        { type: "tip-box", variant: "tip", title: "Pro Tip: The Facilitator is Included", body: "You don't need a separate AI notetaker tool (like Fireflies or Otter). The Facilitator agent is built into Teams when you have the full M365 Copilot license. One less SaaS subscription to pay for." },
      ],
      exercises: [
        { type: "quiz", id: "m19-q3", question: "Which Copilot feature eliminates the need for a separate AI meeting notetaker?", options: [
          { id: "a", text: "Researcher agent", isCorrect: false },
          { id: "b", text: "Copilot Pages", isCorrect: false },
          { id: "c", text: "Facilitator agent in Teams", isCorrect: true },
          { id: "d", text: "Prompt gallery", isCorrect: false },
        ], explanation: "The Facilitator agent in Teams automatically takes meeting notes, captures action items, schedules follow-ups, and summarizes for absentees — replacing standalone notetaker tools.", allowRetry: true },
      ],
      keyTakeaways: ["Outlook: AI prioritizes inbox, drafts replies, summarizes threads", "Teams Facilitator: automated meeting notes with action items and follow-ups", "Facilitator replaces separate notetaker tools — included in M365 Copilot", "Review AI-generated emails before sending — you stay in control"],
    },
  ],
};
