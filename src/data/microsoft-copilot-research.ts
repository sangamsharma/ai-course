/**
 * Microsoft 365 Copilot Research  --  synthesized from 7 YouTube training videos + Microsoft Learn
 *
 * Sources:
 * - "Microsoft 365 Copilot Complete Training Course" (Nick, Microsoft official, 14 sections)
 * - "Microsoft Copilot Tutorial" (Sheree Brock, 60K+ trained, Fortune 500 consultant)
 * - "Copilot Agents Full Training Course" (Nick, Microsoft official, 11 sections)
 * - "Advanced Copilot Features Beyond Basic Use" (David, hands-on tutorial)
 * - "Copilot Studio Foundations" (Harden Rasheed, Microsoft MVP)
 * - Microsoft Learn: Introduction to Microsoft 365 Copilot module
 */

export const microsoftCopilotFindings = {
  /** Copilot Subscription Tiers (from official Microsoft training) */
  subscriptionTiers: {
    free: {
      name: "Copilot (Free)",
      features: ["Basic chat at copilot.microsoft.com", "Limited prompts", "No work data grounding", "No agents"],
      bestFor: "Personal use, testing",
    },
    businessChat: {
      name: "Microsoft 365 Copilot Chat (Baseline)",
      features: [
        "Secure AI chat with enterprise data protection",
        "Copilot in Word, Excel, PowerPoint, OneNote (limited)",
        "Web grounding",
        "Work/Web toggle",
        "Shield icon  --  data NOT used to train AI models",
      ],
      bestFor: "Organizations wanting basic AI chat with data protection",
    },
    fullLicense: {
      name: "Microsoft 365 Copilot (Full)",
      features: [
        "Everything in Copilot Chat",
        "Copilot in Outlook and Teams",
        "Full features in Word, Excel, PowerPoint",
        "Work data grounding (email, chats, documents, meetings, co-workers)",
        "Agents  --  pre-built + custom (Copilot Studio, Agent Builder)",
        "Copilot Pages (collaborative canvas)",
        "Copilot Notebooks (centralized project data)",
        "Researcher agent & Analyst agent",
        "Facilitator agent (meeting notes, action items, follow-ups)",
        "Prompt gallery pulling from YOUR files",
      ],
      bestFor: "Full enterprise AI integration across M365 ecosystem",
      pricing: "$30 USD/user/month (business/enterprise add-on)",
    },
  },

  /** Key Features by Category */
  featuresByCategory: {
    agents: {
      description: "AI assistants specialized for specific jobs  --  work independently or across apps",
      keyPoints: [
        "Pre-built agents by Microsoft: Career Coach, Visual Creator, Researcher, Analyst, Facilitator",
        "Third-party agents: built by developers to support their apps (Jira, Salesforce, etc.)",
        "Custom agents: built via Copilot Studio or Agent Builder  --  NO coding required",
        "Agents in Teams: use agents during meetings, in group chats",
        "@mention agents in Copilot chat or let Copilot suggest which agent to use",
        "Agents provide focused context  --  no need to write long prompt engineering every time",
      ],
      quote: 'You are just giving it a task to do and it is going to automatically do it for you. -- Sheree Brock',
    },
    workDataGrounding: {
      description: "Copilot accesses YOUR organization's private data securely",
      keyPoints: [
        "Pulls from your emails, Teams chats, shared documents, calendar, contacts",
        "Enterprise data protection: NOT used to train AI models",
        "Work/Web toggle: choose between internet search or internal data",
        "Prompt gallery prompts automatically reference your files and meetings",
        "'Help me prepare for a 1-on-1' -> pulls relevant emails, files, meeting history",
      ],
      quote: 'Instead of spending 30 minutes preparing for a meeting, I can prepare within 5 seconds. -- Sheree Brock',
    },
    pages: {
      description: "Collaborative canvas for AI-generated content  --  think Canva meets Copilot",
      keyPoints: [
        "Turn Copilot chat results into editable, shareable pages",
        "Add notes, iterate, collaborate with team members",
        "One-click 'Edit in Pages' from any Copilot output",
        "Shared within your organization",
      ],
    },
    notebooks: {
      description: "Centralized project workspace with attached files and focused chat",
      keyPoints: [
        "Attach files (Word, PowerPoint, PDFs) as permanent context",
        "All chats within a notebook reference ONLY those files",
        "Share notebooks with team for collaborative project work",
        "Overview summary of all notebook contents",
        "Create new documents, study guides, briefings from notebook data",
      ],
    },
    outlookIntegration: {
      description: "AI email management that saves hours per week",
      keyPoints: [
        "Prioritize inbox  --  Copilot surfaces most important emails first",
        "Draft replies in your tone and style",
        "Schedule emails for later",
        "Email summaries for long threads",
        "Meeting scheduling across participants' calendars",
      ],
    },
    teamsFacilitator: {
      description: "Built-in meeting assistant  --  no separate notetaker needed",
      keyPoints: [
        "Takes meeting notes automatically",
        "Captures action items with owners",
        "Schedules follow-up meetings",
        "Summarizes meetings for late arrivals or absentees",
        "Transcribes and timestamps key decisions",
      ],
    },
    researcher: {
      description: "Deep research agent  --  combines web + work data for comprehensive briefings",
      keyPoints: [
        "Multi-source research across web AND your organization's files",
        "Generates structured briefings with citations",
        "Can create Copilot Pages from research results",
        "Takes a few minutes for comprehensive results (not instant chat)",
      ],
    },
  },

  /** Agent Building: Copilot Studio vs Agent Builder */
  agentBuilding: {
    copilotStudio: {
      name: "Copilot Studio",
      bestFor: "Power users, complex agents with multi-step logic",
      skillLevel: "Intermediate  --  no coding required but more configuration",
      capabilities: ["Custom knowledge sources", "Action flows", "Conditional logic", "Multi-channel deployment"],
    },
    agentBuilder: {
      name: "Copilot Agent Builder",
      bestFor: "Quick agents, simple use cases, beginners",
      skillLevel: "Beginner  --  describe what you want in natural language",
      capabilities: ["Natural language agent creation", "File/knowledge source attachment", "Quick deployment to Teams or Copilot"],
      quote: 'I believe that anybody who can use an agent in Copilot can also build an agent. -- Nick (Microsoft)',
    },
  },

  /** Prompt Engineering in Copilot  --  Persona + Context Pattern */
  promptPatterns: {
    personaContext: {
      name: "Persona + Context + Ask",
      example: `"You are my career advisor with over 20 years of experience. Help me identify the challenges and opportunities in making a career shift. Ask me questions that I've not considered to help me identify what my goals should be. Help me find and apply for jobs in the forestry service."`,
      why: "Gives Copilot a specific role, instructions, context  --  transforms generic answer into engaged coaching conversation",
    },
  },

  /** Corporate Training Curriculum Structure (from researched courses) */
  corporateCurriculumStructure: {
    microsoftOfficial: [
      "1. Understanding subscription tiers & feature availability",
      "2. Copilot chat with enterprise data protection",
      "3. Copilot in Word, Excel, PowerPoint, Outlook, Teams",
      "4. Work data grounding & Web grounding",
      "5. Prompt gallery & writing effective prompts",
      "6. Pre-built agents  --  Career Coach, Researcher, Analyst, Facilitator",
      "7. Third-party agents in Teams",
      "8. Copilot Pages  --  collaborative AI canvas",
      "9. Copilot Notebooks  --  project workspaces",
      "10. Outlook email management with Copilot",
      "11. Teams meeting facilitation",
      "12. Building custom agents with Agent Builder (no-code)",
      "13. Building custom agents with Copilot Studio (low-code)",
      "14. Enterprise deployment & governance",
    ],
  },

  /** Key Stats for Corporate Training */
  corporateStats: {
    enterpriseDataProtection: "Shield icon  --  Copilot chat with enterprise data protection is included in ALL business/enterprise accounts at no extra cost",
    pricing: "Full Copilot: $30 USD/user/month (on top of M365 business/enterprise subscription)",
    integrationScope: "Word, Excel, PowerPoint, Outlook, Teams, OneNote, Loop, Whiteboard",
    timeSavings: {
      meetingPrep: "30 minutes -> 5 seconds (via prompt gallery referencing your files)",
      emailManagement: "Hours/week -> minutes (prioritization + AI drafting)",
      meetingNotes: "Manual notetaking -> automated with action items",
    },
    agentTypes: "Pre-built (Microsoft), Third-party (partners), Custom (no-code/low-code)",
  },
};
