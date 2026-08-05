import type { Module } from "@/lib/types";

export const module04: Module = {
  id: "ai-for-your-business",
  slug: "ai-for-your-business",
  title: "AI for Your Business",
  shortTitle: "Business AI",
  description:
    "Create social media content, design menus and flyers, write customer emails, draft proposals, plan marketing strategy, and use AI for visuals — all tailored to your business.",
  icon: "Briefcase",
  color: "violet",
  estimatedMinutes: 65,
  order: 4,
  lessons: [
    // Lesson 1: Social Media
    {
      id: "m4-social",
      slug: "social-media-posts",
      moduleId: "ai-for-your-business",
      title: "Social Media Posts & Advertisements",
      subtitle: "Create engaging posts and ads for any platform in minutes — no marketing degree needed",
      order: 1,
      estimatedMinutes: 12,
      content: [
        {
          type: "text",
          body: "Social media is the #1 marketing channel for most small businesses — but creating fresh content every day is exhausting. AI can generate post ideas, write captions, suggest hashtags, and even help you plan a content calendar for the entire month.",
        },
        {
          type: "code-example",
          title: "Social Media Post Prompt:",
          code: `Create a [platform] post for my [business type] business.
Business details: [what you do, where, your style/vibe].
Today's topic: [new product, promotion, tip, behind-the-scenes].
Tone: [friendly / professional / playful / luxurious].
Include:
1. An attention-grabbing first line
2. 2-3 value points or details
3. A clear call to action
4. [X] relevant hashtags
Length: under [X] words.`,
          language: "text",
        },
        {
          type: "bullet-list",
          title: "Content Ideas AI Can Generate:",
          items: [
            "Product showcases with compelling descriptions",
            "Customer testimonial posts (paste the testimonial, get a post)",
            "Behind-the-scenes content ('A day at our bakery')",
            "Tips and advice related to your industry",
            "Holiday and seasonal promotion posts",
            "Before/After transformation posts (for service businesses)",
          ],
        },
        {
          type: "tip-box",
          variant: "example",
          title: "Real Example: Local Florist",
          body: "A florist used AI to write: '🌸 Peony season is HERE and we couldn't be more excited! These blush-pink beauties just arrived from our local grower and they're absolutely stunning. Limited stock — they sell out every year. Visit us at 123 Main Street or order online for same-day delivery. 💐 #LocalFlowers #PeonySeason #ShopSmall #FloristLife'. The post took 30 seconds to generate and got 3x their normal engagement.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m4-pp-social",
          title: "Create a Post for Your Business",
          instruction:
            "If you have a business (or imagine one you'd like to start), write a prompt to create a social media post. Include your business type, platform, and what you're promoting.",
          promptHint:
            "Create an Instagram post for my small coffee shop. We just launched a new lavender honey latte. Our vibe is cozy, neighborhood-friendly, with rustic decor...",
          sampleResponse:
            "☕ NEW on the menu: Lavender Honey Latte 🍯\n\nWe've been secretly testing this one for weeks, and it's finally ready for you. Local wildflower honey, a hint of calming lavender, and our signature double-shot espresso — topped with a sprinkle of dried lavender.\n\nIt tastes like a warm hug in a mug. Come try it today!\n\n📍 The Daily Grind, 456 Oak Street\n🕗 Open 7 AM – 6 PM daily\n\n#LocalCoffee #LatteArt #SmallBizLove #CoffeeShopVibes #NewMenuAlert",
          improvementTip:
            "The prompt worked well because you included: business type (coffee shop), product details (lavender honey latte), vibe (cozy, rustic), and platform (Instagram). Each detail made the output more specific and on-brand.",
        },
        {
          type: "quiz",
          id: "m4-q1-social",
          question: "What 4 elements should a good social media AI prompt include?",
          options: [
            { id: "a", text: "Platform, business type, topic, and tone", isCorrect: true },
            { id: "b", text: "Just the product name and price", isCorrect: false },
            { id: "c", text: "A long story about your business history", isCorrect: false },
            { id: "d", text: "Only hashtags and emojis", isCorrect: false },
          ],
          explanation:
            "A good social media prompt needs: platform (Instagram/LinkedIn/Facebook), business type, specific topic or product, and tone. These 4 elements give the AI enough context to create something authentic and effective.",
        },
      ],
      keyTakeaways: [
        "AI generates complete social media posts in seconds",
        "Include platform, business type, topic, and tone for best results",
        "Use AI to plan a full month of content in one sitting",
        "Always review and add your personal touch before posting",
      ],
    },
    // Lesson 2: Menus & Flyers
    {
      id: "m4-menus",
      slug: "menus-and-lists",
      moduleId: "ai-for-your-business",
      title: "Menu Cards, Flyers & Guest Lists",
      subtitle: "Design restaurant menus, event flyers, and organized guest lists with AI help",
      order: 2,
      estimatedMinutes: 12,
      content: [
        {
          type: "text",
          body: "For restaurants, cafes, event planners, and hospitality businesses, AI is a game-changer. It can write mouth-watering menu descriptions, suggest layout ideas for flyers, organize guest lists, and even help with table arrangements.",
        },
        {
          type: "code-example",
          title: "Menu Description Prompt:",
          code: `Help me write descriptions for my [cuisine type] menu. Here are the dishes:
1. [Dish name] — [key ingredients, cooking method]
2. [Dish name] — [key ingredients, cooking method]
(continue for all dishes)

For each description:
- 1-2 sentences that sound delicious and welcoming
- Mention 1-2 key ingredients naturally
- Match the tone: [casual/fine dining/family-style]
- No pretentious food jargon — keep it warm and inviting`,
          language: "text",
        },
        {
          type: "code-example",
          title: "Guest List Organizer Prompt:",
          code: `Help me organize a guest list for my [event type].
I have [number] guests. I need to track:
- Guest names and contact info
- RSVP status
- Dietary restrictions
- Plus-one names
- Seating preferences (who should sit together/separate)

Create a simple table format I can use to track all this. Also suggest table groupings for [number] tables of [size].`,
          language: "text",
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Combine AI with Canva",
          body: "Use AI to write the content (descriptions, headings, bullet points), then paste it into Canva's templates to create beautiful designs. AI writes the words — Canva makes them look professional. Gemini is particularly good for this since it connects with Google apps and can generate visuals.",
        },
      ],
      exercises: [
        {
          type: "fill-in-blank",
          id: "m4-fib-menu",
          title: "Write a Menu Description",
          instruction: "Fill in this template to create an AI prompt for menu descriptions.",
          template:
            "Write {{how_many}} descriptions for my {{cuisine}} restaurant. Dishes: {{dish1}} ({{ingredients1}}), {{dish2}} ({{ingredients2}}). Tone: {{tone}}. Make each description {{length}} sentences that sound {{feeling}}.",
          blanks: [
            { key: "how_many", answer: "3", hint: "How many dishes?" },
            { key: "cuisine", answer: "Italian family-style", hint: "What type of food?" },
            { key: "dish1", answer: "Nonna's Lasagna", hint: "First dish name" },
            { key: "ingredients1", answer: "homemade pasta, beef ragu, three cheeses", hint: "Key ingredients" },
            { key: "dish2", answer: "Lemon Ricotta Cake", hint: "Second dish name" },
            { key: "ingredients2", answer: "fresh ricotta, lemon zest, almond flour", hint: "Second dish ingredients" },
            { key: "tone", answer: "warm and welcoming", hint: "What feeling?" },
            { key: "length", answer: "2", hint: "How many sentences?" },
            { key: "feeling", answer: "like grandma is cooking for you", hint: "Overall vibe" },
          ],
        },
      ],
      keyTakeaways: [
        "AI writes delicious menu descriptions that sell more dishes",
        "Organize guest lists, seating charts, and RSVPs with AI templates",
        "Combine AI writing with Canva for professional designs",
        "Gemini is great for visual business content creation",
      ],
    },
    // Lesson 3: Customer Communication
    {
      id: "m4-customer",
      slug: "customer-communication",
      moduleId: "ai-for-your-business",
      title: "Customer Emails & Communication",
      subtitle: "Handle complaints, thank-you notes, and follow-ups professionally every time",
      order: 3,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "Customer communication can be stressful — especially complaints. AI helps you respond professionally, empathetically, and consistently, even when you're tired or frustrated. It's like having a calm, professional assistant who always knows the right thing to say.",
        },
        {
          type: "code-example",
          title: "Customer Response Prompt:",
          code: `I need to respond to a customer who [situation].
Their message was: [paste customer message].
I want to: [offer solution — refund, replacement, apology, explanation].
Tone: [empathetic and professional].
Key points to include: [any specific policies or offers].
Length: under [X] words.
Do NOT sound: [defensive / angry / robotic].`,
          language: "text",
        },
        {
          type: "bullet-list",
          title: "Business Communication AI Can Handle:",
          items: [
            "Customer complaint responses (firm but polite)",
            "Thank-you notes after purchases or referrals",
            "Appointment reminders and confirmations",
            "Newsletter content and announcements",
            "Responses to online reviews (positive and negative)",
            "Payment and invoice follow-ups",
          ],
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Save Templates for Consistency",
          body: "Create 3-5 templates for your most common customer situations (complaint, thank you, follow-up, welcome, goodbye). This ensures every customer gets a consistent, professional experience — no matter who on your team is responding.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m4-pp-customer",
          title: "Respond to a Complaint",
          instruction:
            "Imagine a customer left a negative review about slow service. Write a prompt for AI to help you craft a professional, empathetic public response.",
          promptHint:
            "Help me respond to a customer review. They said: 'Waited 45 minutes for our food on a Saturday night. The food was good but the wait ruined the experience.' I want to apologize sincerely, explain it was unusually busy, and offer a discount on their next visit...",
          sampleResponse:
            "Dear [Customer Name],\n\nThank you for taking the time to share your experience, and I'm truly sorry about the long wait on Saturday. You're right — 45 minutes is not acceptable, even on a busy night. We had an unexpected staffing shortage that evening, but that's our responsibility to manage, not yours.\n\nI'm glad you enjoyed the food once it arrived, but I want to make this right. I'd like to offer you a 20% discount on your next visit — just mention this message when you come in. We've also adjusted our weekend staffing to prevent this from happening again.\n\nThank you for your honesty — it helps us improve. We hope to serve you (much faster!) soon.\n\nWarmly,\n[Your Name]\n[Restaurant Name]",
          improvementTip:
            "This response works because it: 1) acknowledges the specific complaint (not generic), 2) explains without being defensive, 3) offers a concrete solution (20% off), 4) shows action taken (adjusted staffing), and 5) maintains warmth throughout. Good prompts produce responses that sound human, not corporate.",
        },
      ],
      keyTakeaways: [
        "AI helps you stay calm and professional in difficult customer situations",
        "Paste the actual customer message for the most relevant response",
        "Create templates for common situations — consistency builds trust",
        "Always personalize AI drafts — add your genuine voice",
      ],
    },
    // Lesson 4: Proposals & Quotes
    {
      id: "m4-proposals",
      slug: "simple-proposals",
      moduleId: "ai-for-your-business",
      title: "Simple Proposals & Quotes",
      subtitle: "Create professional-looking proposals and quotes without hiring a writer",
      order: 4,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "Writing proposals and quotes is time-consuming, but essential for winning business. AI can create professional, structured proposals that clearly communicate what you'll deliver, when, and at what cost.",
        },
        {
          type: "code-example",
          title: "Business Proposal Prompt:",
          code: `Create a professional proposal for [your service] for [client name/type].
Project scope: [what you'll do, deliverables, timeline].
Budget: [total or hourly rate, payment terms].
Key selling points: [why you're the right choice — experience, unique approach, past results].
Format: include an introduction, scope of work, timeline, pricing, and next steps.
Tone: professional but warm. Keep it under [X] words.`,
          language: "text",
        },
        {
          type: "text",
          body: "This works for any service business — construction quotes, catering proposals, cleaning service estimates, photography packages, consulting proposals, and more. Just fill in your specifics.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "m4-q4-proposals",
          question: "What sections should a good business proposal include?",
          options: [
            { id: "a", text: "Just the price and your contact info", isCorrect: false },
            { id: "b", text: "Introduction, scope of work, timeline, pricing, and next steps", isCorrect: true },
            { id: "c", text: "A long company history and list of all your past clients", isCorrect: false },
            { id: "d", text: "Only the deliverables with no pricing", isCorrect: false },
          ],
          explanation:
            "A complete proposal includes: introduction (who you are), scope of work (what you'll do), timeline (when), pricing (how much), and next steps (how to proceed). This structure is clear, professional, and makes it easy for clients to say yes.",
        },
      ],
      keyTakeaways: [
        "AI creates structured, professional proposals in minutes",
        "Include scope, timeline, pricing, and next steps",
        "Works for any service business — just customize the details",
        "Save your proposal template for future clients",
      ],
    },
    // Lesson 5: Marketing Strategy
    {
      id: "m4-strategy",
      slug: "marketing-strategy",
      moduleId: "ai-for-your-business",
      title: "Marketing Strategy & Content Calendar",
      subtitle: "Plan a full month of marketing in one AI-powered session",
      order: 5,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "AI can help you think strategically about your marketing — not just write individual posts. Use it to brainstorm campaign ideas, plan content calendars, and get fresh perspectives on reaching new customers.",
        },
        {
          type: "code-example",
          title: "Marketing Strategy Prompt:",
          code: `Help me create a [X]-week marketing plan for my [business type].
My business: [brief description — what you do, where, who your customers are].
Current marketing channels: [social media, email, local ads, etc.].
Goal: [get more customers, promote a new product, increase awareness].
Budget: $[X] for marketing this month.
Please provide:
1. A weekly content calendar with post ideas
2. 3 campaign or promotion ideas
3. Suggestions for reaching new customers
4. Any low-cost or free marketing tactics I might be missing`,
          language: "text",
        },
        {
          type: "tip-box",
          variant: "example",
          title: "Real Example: Month-Long Plan for a Hair Salon",
          body: "A salon owner asked AI for a monthly marketing plan with a $200 budget. The AI created: Week 1 (Transformation Tuesday — before/after client photos), Week 2 (Product Spotlight — styling products with demos), Week 3 (Client Appreciation — referral discount program), Week 4 (Book Ahead — early-bird holiday booking incentive). Each week had specific post ideas, captions, and hashtags. The plan was complete, actionable, and on-brand.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m4-pp-strategy",
          title: "Create a Mini Marketing Plan",
          instruction:
            "For your business (or any business you know well), write a prompt asking AI to create a 2-week marketing content calendar.",
          promptHint:
            "Create a 2-week marketing plan for a family-owned pizza restaurant. We want to promote our new gluten-free crust and increase weekday dinner traffic. Budget: $150 for Instagram/Facebook ads. Our customers love our authentic Italian recipes and family atmosphere...",
          sampleResponse:
            "🍕 2-Week Marketing Plan: Bella's Pizzeria\n\nWEEK 1 — Gluten-Free Launch:\n• Monday: 'Guess what's coming?' teaser post + story poll\n• Tuesday: OFFICIAL LAUNCH post — photo of GF pizza, description, 'First 20 customers try it FREE'\n• Wednesday: Behind-the-scenes video of chef making GF dough\n• Thursday: Customer testimonial (real quote from a GF customer)\n• Friday: 'Date Night Deal' — 2 GF pizzas + 2 drinks = $30 (promote for weekend)\n• Saturday: Boosted ad targeting local 'gluten-free' interest ($75 ad spend)\n• Sunday: 'Sunday Family Dinner' post — family-sized GF options\n\nWEEK 2 — Weekday Traffic:\n• Monday: 'Meatless Monday' special — $5 off GF veggie pizzas\n• Tuesday: 'Two-for-Tuesday' — buy one pizza, get second 50% off (Mon-Thu only)\n• Wednesday: Instagram Reel — fast-motion pizza making to music\n• Thursday: 'Throwback Thursday' — family photos, origin story of the restaurant\n• Friday-Sunday: Second boosted ad ($75) targeting families within 5 miles\n\nSuccess metrics: Track coupon code usage, weekday vs previous month sales, new followers gained.",
          improvementTip:
            "This prompt produced a complete, actionable plan because you specified: the business type, the specific goal (gluten-free launch + weekday traffic), the budget, and the brand identity (family-owned, authentic). Each detail made the plan more targeted.",
        },
      ],
      keyTakeaways: [
        "AI helps you think strategically, not just tactically",
        "Plan a full month of content in one session",
        "Include your goal, budget, and customer insights in the prompt",
        "Combine AI strategy with AI content creation for maximum efficiency",
      ],
    },
    // Lesson 6: AI for Visuals
    {
      id: "m4-visuals",
      slug: "ai-for-visuals",
      moduleId: "ai-for-your-business",
      title: "AI for Visuals — Canva, Images & Design",
      subtitle: "Create stunning visuals for your business without a designer",
      order: 6,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "AI tools can now help with the visual side of your business — generating images, suggesting designs, and writing image prompts for tools like Canva, Midjourney, and DALL-E. Even if you're not artistic, you can create professional-looking visuals for your business.",
        },
        {
          type: "bullet-list",
          title: "Visual Content AI Can Help With:",
          items: [
            "Social media graphics and post templates (use Canva AI)",
            "Logo ideas and brand color suggestions",
            "Product photos with AI-generated backgrounds",
            "Menu and flyer designs (AI content + Canva layout)",
            "Instagram/Facebook story templates",
            "Business card and letterhead designs",
            "Restaurant menu layout suggestions",
          ],
        },
        {
          type: "code-example",
          title: "Image Generation Prompt (for Canva, DALL-E, Gemini):",
          code: `A professional product photo of [item] on a [surface/background]. [Lighting description]. [Style/mood]. Clean, high-quality, suitable for [use — social media/website/menu].`,
          language: "text",
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "The AI + Canva Workflow",
          body: "Step 1: Use AI (ChatGPT or Claude) to write all your text — descriptions, headings, taglines. Step 2: Use Canva's AI features (Magic Design) — paste your text and it suggests templates. Step 3: Use Gemini or ChatGPT to generate images if needed. Step 4: Assemble everything in Canva. You've just created professional marketing materials without hiring a designer.",
        },
      ],
      exercises: [
        {
          type: "quiz",
          id: "m4-q6-visuals",
          question: "What's the recommended workflow for creating business marketing materials with AI?",
          options: [
            { id: "a", text: "Hire a professional designer for everything", isCorrect: false },
            { id: "b", text: "Use AI for text → Canva for design → AI for images if needed", isCorrect: true },
            { id: "c", text: "Only use AI-generated images, no text", isCorrect: false },
            { id: "d", text: "Copy designs from competitors exactly", isCorrect: false },
          ],
          explanation:
            "The best workflow: AI writes the content, Canva provides the design templates, and AI generates images if needed. This combines the strengths of each tool and lets you create professional materials without any design experience.",
        },
      ],
      keyTakeaways: [
        "AI helps with both text AND visual content for your business",
        "Combine AI writing + Canva design for professional results",
        "Gemini and ChatGPT can generate images with text prompts",
        "You don't need design skills to create great-looking materials",
      ],
    },
  ],
};
