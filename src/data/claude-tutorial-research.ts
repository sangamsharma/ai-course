/**
 * Claude Tutorial Research — synthesized from "Ultimate Claude Tutorial for 2026"
 * by Carter Sira (Productive Dude), YouTube ~2.5 hrs
 *
 * Key teaching frameworks and techniques to incorporate into our training modules.
 */

export const claudeTutorialFindings = {
  /** The GCAO Prompting Framework taught in the tutorial */
  gcaoFramework: {
    name: "GCAO — Bulletproof Prompting Sequence",
    description: "A 4-part framework that converts generic prompts into specific, high-quality results.",
    steps: {
      G: {
        label: "Goal",
        question: "What do you want to achieve?",
        example: "My goal is to create YouTube videos that will perform well for my channel.",
      },
      C: {
        label: "Context",
        question: "What background information does the AI need?",
        example: "The analytics from my past videos are attached as context. Here's a link to my channel.",
      },
      A: {
        label: "Action",
        question: "What exactly should the AI do?",
        example: "Analyze my past video stats. Research my niche. Share 3 videos that would perform well.",
      },
      O: {
        label: "Output Format",
        question: "How should the results be structured?",
        example: "A bullet list with: title, length, target audience, and brief summary.",
      },
    },
    contrastExample: {
      bad: "Give me ideas to grow my YouTube channel.",
      good: `Goal: Create YouTube videos that will perform well for my channel.
Context: Analytics from my past videos are attached. My channel is [name], I focus on [niche].
Action: Analyze past video stats. Research my niche using web search. Share 3 videos that would perform well based on trends and past success.
Output Format: Bullet list with title, length, target audience, and brief summary of why it would work.`,
    },
  },

  /** Privacy & Security Best Practices */
  privacySettings: {
    criticalActions: [
      "Turn OFF 'Help improve Claude' (training data opt-out) — do this during signup or in Settings > Privacy",
      "Turn off location sharing if privacy-sensitive (Settings > Privacy)",
      "Use incognito mode (ghost icon) for sensitive conversations — not saved, not used for training",
      "Export your data anytime via Settings > Privacy > Export Data",
      "Review and manage memory preferences regularly",
      "For teams: use Projects with shared context rather than sharing account credentials",
    ],
    enterpriseNote: "For organization accounts, use the Organization ID for centralized billing and admin controls.",
  },

  /** Key Features by Skill Level */
  featuresByLevel: {
    beginner: [
      "Chat basics — type prompts, get responses",
      "Model selector — Sonnet (default, good) vs Haiku (faster, cheaper)",
      "Web search toggle — keep enabled for current information",
      "Writing styles — Normal / Concise / Explanatory / Formal / Custom",
      "Voice mode — talk back-and-forth on mobile",
      "Incognito mode — private conversations",
      "Star and rename chats for organization",
    ],
    intermediate: [
      "GCAO prompting framework for consistent results",
      "Projects — siloed memory, custom instructions, file context",
      "Project file uploads — CSV, PDF, images as context",
      "Project sharing — invite team members for collaborative AI workspace",
      "Artifacts — build mini apps, prototypes, games, interactive tools",
      "Inline visualizations — data dashboards inside chat",
      "Custom writing styles — train Claude to write like you",
      "Deep search across past chats (enable in Settings)",
      "Import memories from ChatGPT/other AI providers",
    ],
    advanced: [
      "Claude Desktop / Co-work — computer control, file system access",
      "Scheduled tasks — automated daily workflows (file cleanup, reports)",
      "Dispatch — phone-to-desktop remote control",
      "MCP Connectors — Notion, Gmail, Google Calendar, GitHub, Netlify, iMessage",
      "Skills (DBS Framework) — Direction + Blueprints + Solutions",
      "Claude Code (GUI) — local/SSH/cloud environments, plugins, effort levels",
      "Claude Code (Terminal) — /model, /effort, /btw, full CLI control",
      "Cloud environments — remote code execution on Anthropic servers",
      "GitHub + Netlify CI/CD — code → deploy from phone",
      "Scheduled remote tasks — daily AI workflows without computer running",
    ],
  },

  /** DBS Framework for Building Claude Skills */
  dbsFramework: {
    name: "DBS — Direction, Blueprints, Solutions",
    description: "Framework for creating reusable, reliable Claude skills that produce consistent results.",
    components: {
      D: {
        label: "Direction (skill.md)",
        content: "Name, description, step-by-step workflow, rules, and guidelines for the skill.",
      },
      B: {
        label: "Blueprints (references/)",
        content: "Examples, references, style guides, and context files that tailor outputs.",
      },
      S: {
        label: "Solutions (scripts/)",
        content: "Code programs that enhance the skill — things Claude can't do well on its own get automated via scripts.",
      },
    },
    exampleUseCase: "Recipe generator skill: Direction = Q&A questionnaire flow. Blueprints = cuisine style guides, dietary reference. Solutions = nutrition calculator script.",
  },

  /** Team/Enterprise Features */
  enterpriseFeatures: [
    "Organization ID — centralized admin for team accounts",
    "Project sharing — invite team members to collaborative AI workspaces",
    "Shared project instructions — consistent AI behavior across team",
    "Shared file context — upload brand guides, policies, templates once",
    "Connector permissions — granular control over what tools each connector can use",
    "Claude Code cloud environments — consistent dev environments across team",
    "Scheduled remote tasks — team-wide automated workflows",
    "GitHub integration — code review, PR summaries, automated fixes",
  ],

  /** Key Quotes / Teaching Moments */
  teachingPoints: [
    {
      topic: "Why upgrade from Free",
      point: "Free plan is for testing. Pro ($20/mo) for serious work. Max for heavy users. Think of Claude as an extra employee — it's cheap compared to hiring.",
    },
    {
      topic: "Prompt quality directly impacts results",
      point: "Generic prompts → generic answers. GCAO prompts → tailored, actionable results. The extra 60 seconds writing a good prompt saves 30 minutes of back-and-forth.",
    },
    {
      topic: "Projects > One-off chats",
      point: "Projects give Claude persistent memory, file context, and instructions. Every chat in a project benefits from accumulated context. Share projects with your team.",
    },
    {
      topic: "Skills = repeatable excellence",
      point: "A skill is a Standard Operating Procedure for Claude. It follows the same process every time. Much like training a new employee — consistent, reliable, improvable.",
    },
    {
      topic: "The 70% rule",
      point: "AI gets you 70% there on the first pass. The remaining 30% needs human oversight, editing, and iteration. Expect this and plan for it.",
    },
  ],
};
