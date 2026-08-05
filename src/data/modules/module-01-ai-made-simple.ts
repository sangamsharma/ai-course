import type { Module } from "@/lib/types";

export const module01: Module = {
  id: "ai-made-simple",
  slug: "ai-made-simple",
  title: "AI Made Simple",
  shortTitle: "AI Basics",
  description:
    "Discover what AI really is (no jargon!), meet ChatGPT, Claude, and Gemini, and write your very first prompts.",
  icon: "Sparkles",
  color: "teal",
  estimatedMinutes: 55,
  order: 1,
  lessons: [
    {
      id: "what-is-ai",
      slug: "what-is-ai",
      moduleId: "ai-made-simple",
      title: "What is AI, Really?",
      subtitle: "No jargon, just the basics you need to know",
      order: 1,
      estimatedMinutes: 8,
      content: [
        {
          type: "text",
          body: "AI stands for Artificial Intelligence. But forget the sci-fi movies — today's AI is more like a super-helpful assistant that can read, write, and think along with you. It's a tool, not a robot takeover.",
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Think of it this way",
          body: "If Google searches the internet to find existing information, AI creates new information based on what it has learned. Google finds a recipe; AI writes you a custom recipe using ingredients you tell it about.",
        },
        {
          type: "text",
          body: "Modern AI tools like ChatGPT, Claude, and Gemini are called 'Large Language Models' or LLMs. They've read millions of books, articles, and websites to learn how language works. When you ask them something, they predict the best response — word by word.",
        },
        {
          type: "bullet-list",
          title: "Here's what AI can help you with today:",
          items: [
            "Answering questions in plain English",
            "Writing and editing emails, letters, and documents",
            "Summarizing long articles or meeting notes",
            "Creating social media posts and marketing content",
            "Helping plan events, trips, and schedules",
            "Translating between languages",
            "Brainstorming ideas for your business",
          ],
        },
        {
          type: "tip-box",
          variant: "important",
          title: "Key point to remember",
          body: "AI is a helper, not a replacement for your judgment. Always review what AI produces before you use it — especially for important documents or business decisions.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "q1-what-is-ai",
          question: "What is the best way to think about today's AI tools?",
          options: [
            { id: "a", text: "A robot that can do everything for you", isCorrect: false },
            { id: "b", text: "A super-helpful assistant that helps with reading and writing", isCorrect: true },
            { id: "c", text: "A replacement for human thinking and judgment", isCorrect: false },
            { id: "d", text: "Just a fancy search engine", isCorrect: false },
          ],
          explanation:
            "AI is best thought of as a helpful assistant — it's great at reading, writing, and brainstorming, but you should always review its output and use your own judgment.",
        },
      ],
      keyTakeaways: [
        "AI is a tool that helps with reading, writing, and thinking tasks",
        "It learns from books and websites, not from thinking like a human",
        "Always review AI output — especially for important tasks",
      ],
    },
    {
      id: "meet-the-tools",
      slug: "meet-the-tools",
      moduleId: "ai-made-simple",
      title: "Meet Your AI Assistants",
      subtitle: "ChatGPT, Claude, and Gemini — what's the difference?",
      order: 2,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "There are three main AI assistants available for free today: ChatGPT (by OpenAI), Claude (by Anthropic), and Gemini (by Google). All three can help you with writing, brainstorming, and answering questions. Here's how they compare:",
        },
        {
          type: "bullet-list",
          title: "ChatGPT (chat.openai.com)",
          items: [
            "Made by OpenAI — the most popular AI assistant",
            "Free version is powerful enough for most tasks",
            "Great at creative writing, explaining concepts, and general help",
            "Easy to use — just type and chat",
            "Available on web and mobile app",
          ],
        },
        {
          type: "bullet-list",
          title: "Claude (claude.ai)",
          items: [
            "Made by Anthropic — designed to be helpful and safe",
            "Free version handles long documents really well",
            "Excellent at writing with natural, human-like tone",
            "Great for detailed analysis and thoughtful responses",
            "Available on web and mobile app",
          ],
        },
        {
          type: "bullet-list",
          title: "Gemini (gemini.google.com)",
          items: [
            "Made by Google — integrates with Google apps",
            "Free with a Google account",
            "Good at generating images and creative content",
            "Connects with Gmail, Docs, and other Google services",
            "Available on web and mobile app",
          ],
        },
        {
          type: "tip-box",
          variant: "example",
          title: "Real-world example",
          body: "Maria runs a small bakery. She uses ChatGPT to write Instagram posts about her daily specials, Claude to draft professional emails to suppliers, and Gemini to brainstorm new pastry ideas. She switches between them based on what she needs!",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "q2-which-tool",
          question: "Which AI tool is best for integrating with Gmail and Google Docs?",
          options: [
            { id: "a", text: "ChatGPT", isCorrect: false },
            { id: "b", text: "Claude", isCorrect: false },
            { id: "c", text: "Gemini", isCorrect: true },
            { id: "d", text: "All of them equally", isCorrect: false },
          ],
          explanation:
            "Gemini is made by Google and integrates naturally with Google apps like Gmail, Docs, and Drive. ChatGPT and Claude are separate services.",
        },
      ],
      keyTakeaways: [
        "ChatGPT, Claude, and Gemini are all free and easy to use",
        "Each has its strengths — try them all to find your favorite",
        "You can switch between tools for different tasks",
      ],
    },
    {
      id: "your-first-prompt",
      slug: "your-first-prompt",
      moduleId: "ai-made-simple",
      title: "Write Your First Prompt",
      subtitle: "Start talking to AI — it's easier than you think",
      order: 3,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "A 'prompt' is simply what you say to an AI. Just like you'd ask a friend for help, you type your request and the AI responds. There's no special code or format — plain English works great.",
        },
        {
          type: "text",
          body: "Let's start with the simplest prompt possible. Open any AI tool (ChatGPT, Claude, or Gemini) and try typing:",
        },
        {
          type: "code-example",
          title: "Your first prompt — try this!",
          code: 'Explain what artificial intelligence is in 3 simple sentences, like you\'re talking to someone who has never used a computer before.',
          language: "text",
        },
        {
          type: "text",
          body: "See how the AI responds in clear, simple language? That's because you told it HOW to explain (in 3 sentences) and WHO it's talking to (a complete beginner). These two ingredients — format and audience — are the secret to great prompts.",
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "The Simple Prompt Formula",
          body: "Good prompts have 3 parts: (1) What you want, (2) How you want it (format, length, tone), and (3) Who it's for. Example: 'Write a short, friendly email (what + how) inviting my neighbors to a barbecue this Saturday (who).'",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "pp1-first-prompt",
          title: "Try It Yourself!",
          instruction:
            "Write a prompt asking AI to explain something you know well (like your job or hobby) to a 10-year-old child. Use the formula: WHAT you want + HOW you want it + WHO it's for.",
          promptHint:
            "Explain what a [your job/hobby] does in 4 short sentences, simple enough for a 10-year-old to understand...",
          sampleResponse:
            "A baker is like a scientist who makes delicious magic! They mix flour, water, and special ingredients together. Then they put it in a hot oven where it transforms into bread, cookies, or cakes. Finally, they share these yummy creations with people who come to their shop!",
          improvementTip:
            "Great job! Notice how specifying '4 short sentences' and 'for a 10-year-old' gave you a clear, simple explanation. These details are what make prompts effective.",
        },
        {
          type: "quiz",
          id: "q3-prompt-formula",
          question: "What are the 3 key parts of a good prompt?",
          options: [
            { id: "a", text: "Subject, verb, and object", isCorrect: false },
            { id: "b", text: "What you want, how you want it, who it's for", isCorrect: true },
            { id: "c", text: "Introduction, body, conclusion", isCorrect: false },
            { id: "d", text: "Question, answer, explanation", isCorrect: false },
          ],
          explanation:
            "The simple formula is: WHAT you want the AI to do + HOW you want it done (format, length, tone) + WHO the audience is. This gives the AI everything it needs to give you a great response.",
        },
      ],
      keyTakeaways: [
        "A prompt is just plain English — no special code needed",
        "Use the formula: What + How + Who",
        "The more specific you are, the better the response",
      ],
    },
    {
      id: "setting-up-accounts",
      slug: "setting-up-accounts",
      moduleId: "ai-made-simple",
      title: "Setting Up Your AI Accounts",
      subtitle: "Get ready to use all three tools — for free",
      order: 4,
      estimatedMinutes: 7,
      content: [
        {
          type: "text",
          body: "All three major AI tools offer free versions that are more than enough for everyday use. Setting up an account takes about 2 minutes each. Here's what you need:",
        },
        {
          type: "bullet-list",
          title: "ChatGPT Setup:",
          items: [
            "Go to chat.openai.com",
            "Click 'Sign Up' and use your email or Google account",
            "Verify your email — you're in!",
            "Free tier includes GPT-4o mini (plenty for most tasks)",
          ],
        },
        {
          type: "bullet-list",
          title: "Claude Setup:",
          items: [
            "Go to claude.ai",
            "Click 'Sign Up' and use your email or Google account",
            "Verify your email — you're in!",
            "Free tier gives you plenty of daily usage",
          ],
        },
        {
          type: "bullet-list",
          title: "Gemini Setup:",
          items: [
            "Go to gemini.google.com",
            "Sign in with your Google account (or create one for free)",
            "That's it — no separate signup needed!",
            "Free with any Google account",
          ],
        },
        {
          type: "tip-box",
          variant: "warning",
          title: "Important Safety Note",
          body: "Never share personal information like your address, phone number, bank details, or passwords with any AI tool. Treat AI like you would a public library computer — your conversations are not completely private.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "q4-setup",
          question: "Which AI tool doesn't need a separate signup if you already have a Google account?",
          options: [
            { id: "a", text: "ChatGPT", isCorrect: false },
            { id: "b", text: "Claude", isCorrect: false },
            { id: "c", text: "Gemini", isCorrect: true },
            { id: "d", text: "None — they all need separate accounts", isCorrect: false },
          ],
          explanation:
            "Gemini works directly with your Google account — no extra signup needed. Both ChatGPT and Claude require creating separate accounts (though you can use Google to sign up for them too).",
        },
      ],
      keyTakeaways: [
        "All three tools have generous free tiers",
        "Setup takes about 2 minutes per tool",
        "Never share personal or financial information with AI",
      ],
    },
    // === Lesson 5: Your First Real AI Task ===
    {
      id: "first-real-task",
      slug: "first-real-task",
      moduleId: "ai-made-simple",
      title: "Your First Real AI Task",
      subtitle: "Follow this step-by-step guide to solve an actual problem with AI — right now",
      order: 5,
      estimatedMinutes: 12,
      content: [
        {
          type: "text",
          body: "Reading about AI is one thing. Using it to solve a REAL problem you have RIGHT NOW is where the magic happens. In this lesson, we're going to walk through a complete AI task together — from fuzzy idea to finished result. By the end, you'll have created something useful.",
        },
        {
          type: "tip-box",
          variant: "important",
          title: "Do This Now — Don't Just Read",
          body: "Open ChatGPT (chat.openai.com), Claude (claude.ai), or Gemini (gemini.google.com) in another tab. This lesson is designed to be done WITH the AI tool open. Reading without doing = forgetting. Doing = learning.",
        },
        {
          type: "text",
          body: "We're going to write a short, friendly email inviting friends to a weekend gathering. This is a real task you might actually need. We'll do it in 4 rounds, each one making the result better.",
        },
        {
          type: "bullet-list",
          title: "Round 1 — The Basic Ask (30 seconds)",
          items: [
            "Open your AI tool and type: 'Write an email inviting friends to a barbecue this Saturday at 3 PM at my place.'",
            "Read the result. It's okay, right? But kind of generic. It doesn't sound like YOU.",
            "Notice: the AI guessed the tone, the length, and the details. It did its best with very little information.",
          ],
        },
        {
          type: "bullet-list",
          title: "Round 2 — Add Your Voice (30 seconds)",
          items: [
            "Now add more detail: 'Write a warm, casual email inviting close friends to a backyard barbecue this Saturday at 3 PM. It's a potluck — I'll provide burgers and drinks, guests can bring sides or desserts. Mention that kids are welcome and there'll be lawn games. My name is [Your Name].'",
            "Compare this result with Round 1. Notice how much more personal and useful it is?",
            "The AI now has context: the event type, the vibe, what to bring, who's invited. Each detail made the output more useful.",
          ],
        },
        {
          type: "bullet-list",
          title: "Round 3 — Fix What You Don't Like (30 seconds)",
          items: [
            "Read Round 2's result again. Is there a sentence that sounds too formal? A phrase you'd never actually say? Tell the AI: 'Make it more casual — like I'm texting a friend, not writing a formal invitation. Remove any corporate-sounding language.'",
            "This is a KEY skill: you don't have to accept the first response. You can ask the AI to adjust ANYTHING — tone, length, formality, details.",
            "The AI doesn't get offended when you ask for changes. Iterate until it sounds right.",
          ],
        },
        {
          type: "bullet-list",
          title: "Round 4 — Polish and Use (30 seconds)",
          items: [
            "Final check: read the email out loud. Does it sound like something you'd actually say? If yes, you're done. If not, tell the AI one more adjustment: 'Make the opening line more exciting' or 'Add a P.S. reminding people to RSVP by Friday.'",
            "Copy the final version. You just created a personalized, useful email in about 2 minutes — faster and better than writing it from scratch.",
            "This 4-round process (Basic → Add Context → Fix Tone → Polish) works for ANY AI task, not just emails.",
          ],
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "The 4-Round Method (Use This for Everything)",
          body: "Round 1: Give the basic task. Round 2: Add context, detail, and your voice. Round 3: Fix what you don't like (tone, length, wording). Round 4: Final polish. Most people stop at Round 1 and wonder why AI output is generic. The magic happens in Rounds 2-4.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m1-pp-real-task",
          title: "Apply the 4-Round Method to YOUR Problem",
          instruction:
            "Think of a real task you need to do — an email, a message, a plan, a list. Apply the 4-round method: 1) Basic ask, 2) Add your details and voice, 3) Fix what you don't like, 4) Polish. Write your Round 4 prompt here.",
          promptHint:
            "I need to [describe your real task]. Context: [who it's for, any important details]. My style is [casual/professional/warm/direct]. Make sure it [specific thing you want]...",
          sampleResponse:
            "Subject: Backyard BBQ this Saturday! 🌞🍔\n\nHey friends!\n\nThe weather's gorgeous and the grill is ready — let's do a backyard barbecue this Saturday at 3 PM!\n\nI'll handle burgers, hot dogs, and drinks. If you want to bring a side dish or dessert, awesome — but absolutely not required. Just bring yourselves!\n\nKids are more than welcome — we'll have cornhole, frisbee, and maybe an epic water balloon fight if it gets hot.\n\nLet me know by Friday if you can make it so I can plan the food.\n\nCan't wait to see everyone!\n\n[Your Name]\n\nP.S. Bring a swimsuit if you want to cool off in the sprinkler. 😄",
          improvementTip:
            "Notice the difference from a generic 'You are cordially invited...' This email sounds like a real person wrote it because you specified: warm and casual tone, potluck details, kids welcome, lawn games, and an RSVP deadline. Each detail made it more useful.",
        },
        {
          type: "quiz",
          id: "m1-q-rounds",
          question: "What's the biggest mistake beginners make when using AI?",
          options: [
            { id: "a", text: "Using the wrong AI tool", isCorrect: false },
            { id: "b", text: "Stopping at the first response instead of iterating", isCorrect: true },
            { id: "c", text: "Writing prompts that are too long", isCorrect: false },
            { id: "d", text: "Not using enough technical language", isCorrect: false },
          ],
          explanation:
            "Most people type one prompt, get one response, and accept it. But AI improves dramatically when you iterate: ask for changes in tone, add missing details, remove what you don't like. The 4-Round Method (Basic → Context → Fix → Polish) turns generic output into something genuinely useful.",
        },
      ],
      keyTakeaways: [
        "The 4-Round Method: Basic → Add Context → Fix Tone → Polish",
        "Always iterate — never accept the first draft",
        "Tell AI what to change ('make it more casual', 'remove corporate language')",
        "Read AI output out loud — if it doesn't sound like you, keep refining",
      ],
    },
    // === Lesson 6: AI in Your Daily Life ===
    {
      id: "ai-daily-life",
      slug: "ai-daily-life",
      moduleId: "ai-made-simple",
      title: "AI in Your Daily Life — 10 Ways to Use It Today",
      subtitle: "Practical, immediately useful ways AI can help with things you already do",
      order: 6,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "You now know what AI is, how to access it, and how to write effective prompts. But WHEN should you use it? Here are 10 real situations where AI can help you TODAY — each with a ready-to-use prompt. Pick 2-3 that matter to you and try them now.",
        },
        {
          type: "bullet-list",
          title: "1. Rewrite Something to Sound Better",
          items: [
            "Scenario: You wrote a message but it doesn't feel right — too formal, too casual, or just awkward.",
            "Try: 'Rewrite this to sound warmer and more friendly: [paste your text]'",
            "Also works for: making something more professional, shorter, simpler, or funnier.",
          ],
        },
        {
          type: "bullet-list",
          title: "2. Explain Something Confusing",
          items: [
            "Scenario: You received a letter, email, or document full of jargon you don't understand.",
            "Try: 'Explain this in plain English, like you're talking to a friend: [paste confusing text]'",
            "Also works for: medical reports, legal notices, terms of service, technical manuals.",
          ],
        },
        {
          type: "bullet-list",
          title: "3. Plan Your Week",
          items: [
            "Scenario: You have too many tasks floating in your head and need structure.",
            "Try: 'Help me plan my week. I need to: [list tasks]. I have about [X] hours available. Prioritize the most important ones and suggest a daily schedule.'",
            "Also works for: meal planning, trip planning, project timelines.",
          ],
        },
        {
          type: "bullet-list",
          title: "4. Get Gift Ideas",
          items: [
            "Scenario: You need a gift for someone but have no idea what to get.",
            "Try: 'Suggest 10 gift ideas for my [relationship: mother/friend/colleague] who loves [hobbies/interests]. Budget: $[X]. They already have [items they own].'",
            "Also works for: birthday, anniversary, holiday, thank-you gifts.",
          ],
        },
        {
          type: "bullet-list",
          title: "5. Prepare for a Conversation",
          items: [
            "Scenario: You need to have a difficult conversation — asking for a raise, giving feedback, or addressing a conflict.",
            "Try: 'Help me prepare for a conversation where I need to [describe the situation]. Suggest: key points to mention, phrases to use, what to avoid saying, and how to open the conversation.'",
            "Also works for: interview preparation, parent-teacher meetings, negotiating.",
          ],
        },
        {
          type: "bullet-list",
          title: "6. Summarize a Long Article or Video",
          items: [
            "Scenario: Someone sent you a long article or video and you don't have time to go through it all.",
            "Try: 'Summarize this in 5 bullet points: [paste text or describe video]. Include only the most important points.'",
            "Also works for: meeting notes, research papers, news articles, podcast episodes.",
          ],
        },
        {
          type: "bullet-list",
          title: "7. Write a Difficult Message",
          items: [
            "Scenario: You need to say no, complain, or set a boundary — but you want to do it respectfully.",
            "Try: 'Help me write a polite but firm message to [person] about [situation]. I want to say no without damaging the relationship. Tone: respectful and clear.'",
            "Also works for: complaints, declining invitations, setting boundaries, giving negative feedback.",
          ],
        },
        {
          type: "bullet-list",
          title: "8. Learn Something New",
          items: [
            "Scenario: You're curious about a topic but don't know where to start.",
            "Try: 'I want to learn about [topic]. I'm a complete beginner. Explain the basics in 5 simple points. Then suggest 3 things I can do to learn more.'",
            "Also works for: history, science, technology, health topics, finance, any subject.",
          ],
        },
        {
          type: "bullet-list",
          title: "9. Make a Decision",
          items: [
            "Scenario: You're stuck between options and can't decide.",
            "Try: 'Help me decide between [Option A] and [Option B]. Compare: cost, time required, pros and cons, and which is better for my situation: [describe your situation]. Don't decide for me — just help me think it through.'",
            "Also works for: job offers, purchases, travel plans, major life decisions.",
          ],
        },
        {
          type: "bullet-list",
          title: "10. Get Unstuck Creatively",
          items: [
            "Scenario: You're working on something creative — writing, designing, planning — and hit a wall.",
            "Try: 'I'm stuck on [creative task]. Here's what I have so far: [describe]. Suggest 5 fresh ideas or approaches I haven't thought of. Be creative and unexpected.'",
            "Also works for: naming things, brainstorming, designing layouts, writing headlines, planning events.",
          ],
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "The Best Way to Learn AI",
          body: "Don't try all 10 at once. Pick ONE scenario that matters to you right now. Try it. See what happens. Then try another tomorrow. Small, daily practice builds skill faster than binge-reading. In a week, you'll naturally reach for AI whenever you face one of these situations.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "m1-q-daily",
          question: "What's the best way to build AI skills for daily life?",
          options: [
            { id: "a", text: "Read about all 10 scenarios before trying any", isCorrect: false },
            { id: "b", text: "Pick one real scenario you need right now and try it today", isCorrect: true },
            { id: "c", text: "Wait until you have a really important task to use AI", isCorrect: false },
            { id: "d", text: "Memorize all the prompts in this lesson", isCorrect: false },
          ],
          explanation:
            "Small, daily practice works better than reading everything at once. Pick ONE scenario from this lesson that solves a real problem you have today. Try it. Learn from the result. Tomorrow, try another. This habit — using AI regularly for real tasks — is how you get genuinely good at it.",
        },
      ],
      keyTakeaways: [
        "AI helps with real daily tasks — not just abstract 'tech' things",
        "Start with one scenario today, not all 10 at once",
        "The 4-Round Method works for all these scenarios",
        "Build the habit: when you face a writing/planning/decision task, ask 'Could AI help with this?'",
      ],
    },
  ],
};
