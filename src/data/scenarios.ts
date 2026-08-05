import type { Scenario } from "@/lib/types";

export const scenarios: Scenario[] = [
  // === Daily Life (3 scenarios) ===
  {
    id: "email-grammar",
    slug: "email-grammar",
    title: "Writing a Polite Email to a Landlord",
    category: "daily-life",
    categoryLabel: "Daily Life",
    problem:
      "You need to email your landlord about a maintenance issue in your apartment. You want to be polite but clear about what needs fixing, and you're not confident about your grammar.",
    fictionalData:
      "Your name is Priya. You live in Apartment 3B at Greenview Apartments. The kitchen sink has been leaking for two days, causing water damage to the cabinet underneath. You've been a tenant for 2 years and always pay rent on time. Your landlord's name is Mr. Chen.",
    badPrompt: "write email to landlord about sink leaking",
    betterPrompt:
      "Write a polite email from a tenant to their landlord about a maintenance issue. The kitchen sink has been leaking for 2 days and is causing water damage. The tenant has lived there for 2 years and has a good relationship with the landlord. The email should be friendly but clear about the urgency. Under 100 words.",
    practiceTask:
      "Using the fictional data above, write a prompt asking AI to draft this email. Make sure to include: the specific problem, how long it's been happening, the tenant's good history, and a polite tone.",
    verificationChecklist: [
      "Did I use the tenant's name and apartment number?",
      "Did I describe the problem clearly (kitchen sink, 2 days, water damage)?",
      "Did I mention the good tenant history?",
      "Is the tone respectful, not demanding?",
      "Did I specify the length (under 100 words)?",
    ],
    privacyWarning:
      "In real life, use fictional names or general descriptions. Instead of your real address, say 'a rental apartment.' Instead of your real landlord's name, say 'the landlord.' The AI doesn't need real identities to write a good email.",
    reflectionQuestion:
      "What details did you include in your prompt that made the AI's email sound more personal and effective?",
    transferTemplate:
      "Write a [tone] email to [recipient] about [issue description]. The issue started [timeframe]. My relationship with the recipient is [good/professional/new]. Include [key details]. Keep it under [X] words.",
    difficulty: "beginner",
  },
  {
    id: "event-planner",
    slug: "event-planner",
    title: "Planning a Birthday Party",
    category: "daily-life",
    categoryLabel: "Daily Life",
    problem:
      "You're planning a 60th birthday party for your mother. You need to figure out the guest list, food, decorations, and timeline — all within a budget.",
    fictionalData:
      "Your mother's name is Amina. She's turning 60. You have 25 guests (family and close friends). Your budget is $400. The party is at your home. You want a 'golden memories' theme with gold and white decorations. Your mother loves Nigerian and Italian food.",
    badPrompt: "help me plan a birthday party",
    betterPrompt:
      "Plan a 60th birthday party for my mother. 25 guests, $400 budget, at our home. Theme: 'Golden Memories' with gold and white decor. She loves Nigerian and Italian food. I need: a timeline (from 2 weeks before to day-of), menu suggestions that blend both cuisines, a decoration list, and a budget breakdown.",
    practiceTask:
      "Write a prompt asking AI to create a complete party plan. Include the number of guests, budget, location, theme, food preferences, and what specific outputs you need.",
    verificationChecklist: [
      "Did I include the guest count (25)?",
      "Did I include the budget ($400)?",
      "Did I mention the theme ('golden memories')?",
      "Did I specify the food preferences (Nigerian and Italian)?",
      "Did I ask for specific outputs (timeline, menu, decorations, budget)?",
    ],
    privacyWarning:
      "You don't need to share your mother's real name or your real address. Use general descriptions: 'a family home,' 'my mother,' 'a birthday party.' The AI helps with planning, not with personal identification.",
    reflectionQuestion:
      "How did adding specific details (theme, budget, food preferences) change the AI's suggestions compared to just asking for 'party ideas'?",
    transferTemplate:
      "Plan a [occasion] for [who]. [X] guests, $[Y] budget, at [location]. Theme: [theme]. Special requirements: [dietary, accessibility, cultural]. I need: [specific outputs — timeline, menu, budget, checklist].",
    difficulty: "beginner",
  },
  {
    id: "meal-planner-scenario",
    slug: "meal-planner-scenario",
    title: "Weekly Meal Planning for a Family",
    category: "daily-life",
    categoryLabel: "Daily Life",
    problem:
      "You need to plan a week of dinners for your family of four. Two adults and two children (ages 8 and 12). One adult is vegetarian. Budget is $120 for the week. You want healthy meals that kids will actually eat.",
    fictionalData:
      "Your family: you, your spouse, an 8-year-old (picky eater, loves pasta), and a 12-year-old (adventurous eater). One adult vegetarian. Budget: $120/week. You have a fully equipped kitchen. You prefer quick recipes (under 45 minutes).",
    badPrompt: "give me dinner ideas for the week",
    betterPrompt:
      "Create a 5-day dinner plan for a family of 4 (2 adults, 2 kids ages 8 and 12). One adult is vegetarian. Budget: $120 total for the week. Requirements: meals under 45 minutes, healthy, kid-friendly. The 8-year-old is picky but loves pasta. Include: a shopping list grouped by grocery store section, estimated cost per meal, and prep time for each recipe.",
    practiceTask:
      "Write a prompt for meal planning that includes: number of people, dietary requirements, budget, time constraints, kid preferences, and the specific format of the output you want.",
    verificationChecklist: [
      "Did I specify the number of people (4) and ages?",
      "Did I mention the vegetarian requirement?",
      "Did I include the budget ($120)?",
      "Did I specify time constraint (under 45 min)?",
      "Did I ask for a shopping list?",
    ],
    privacyWarning:
      "This is a fictional family. In real life, you don't need to share real names or personal health details beyond general dietary requirements (vegetarian, gluten-free, etc.).",
    reflectionQuestion:
      "What's the difference between asking for 'dinner ideas' versus asking for a complete meal plan with shopping list and budget?",
    transferTemplate:
      "Create a [X]-day meal plan for [number] people. Dietary needs: [list]. Budget: $[X]. Time per meal: under [X] minutes. Include: [specific outputs — shopping list, cost breakdown, prep times].",
    difficulty: "beginner",
  },

  // === Business (3 scenarios) ===
  {
    id: "social-media-post",
    slug: "social-media-post",
    title: "Creating Social Media Content for a Small Business",
    category: "business",
    categoryLabel: "Business",
    problem:
      "You run a small bakery and need to create engaging Instagram posts to attract customers. You want to promote your weekend special but you're not sure how to write compelling social media content.",
    fictionalData:
      "Your bakery is called 'Golden Crust Bakery.' Weekend special: sourdough loaves with rosemary and sea salt ($6 each). You also have a 'baker's dozen' deal: buy 12 pastries, get 2 free. Your shop is at 72 Market Street. You're open 7 AM to 3 PM. Your customers love your handmade, traditional methods.",
    badPrompt: "write instagram post for my bakery",
    betterPrompt:
      "Create an Instagram post for my small bakery called Golden Crust Bakery. Weekend special: rosemary sea salt sourdough ($6). Also running a 'baker's dozen' deal (12 pastries + 2 free). Our vibe is warm, rustic, handmade. Include: an attention-grabbing first line, 2-3 value points, a clear call to action to visit this weekend, and 4 relevant hashtags. Under 150 words.",
    practiceTask:
      "Using the fictional bakery details, write a detailed prompt for AI to create a social media post. Include the business name, what you're promoting, the vibe/style, and specific output requirements.",
    verificationChecklist: [
      "Did I include the business name and type?",
      "Did I specify what I'm promoting (sourdough + deal)?",
      "Did I describe the brand vibe (warm, rustic, handmade)?",
      "Did I ask for specific elements (hook, value points, CTA, hashtags)?",
      "Did I set a word limit?",
    ],
    privacyWarning:
      "When promoting a real business, it's fine to use your business name and public address since that's public information anyway. But never share customer data, sales figures, or financial information with AI.",
    reflectionQuestion:
      "How does specifying your brand's 'vibe' or personality change the AI's output?",
    transferTemplate:
      "Create a [platform] post for my [business type]. Business name: [name]. What I'm promoting: [product/offer]. Our brand vibe: [description]. Include: [specific elements — hook, points, CTA, hashtags]. Under [X] words.",
    difficulty: "beginner",
  },
  {
    id: "customer-response",
    slug: "customer-response",
    title: "Responding to a Customer Complaint",
    category: "business",
    categoryLabel: "Business",
    problem:
      "A customer left a negative review about slow service at your café. You need to respond publicly in a way that shows you care, explains the situation without being defensive, and offers to make it right.",
    fictionalData:
      "Your café is 'The Morning Cup.' A customer named Taylor wrote: 'Waited 35 minutes for a simple breakfast order on Saturday. Food was good when it arrived but the wait was unacceptable for a morning rush.' Your side: you were short-staffed that day due to an unexpected illness. You want to apologize and offer a discount.",
    badPrompt: "respond to this bad review",
    betterPrompt:
      "Help me write a public response to a customer who complained about slow service at my café. They waited 35 minutes on a busy Saturday. We were short-staffed due to illness. I want to: 1) apologize sincerely, 2) briefly explain without being defensive, 3) offer a 20% discount on their next visit. The tone should be warm and professional, not corporate. Under 100 words.",
    practiceTask:
      "Write a prompt for AI to draft a response to this negative review. Include the specific complaint, your side of the story, what you want to offer, and the tone you want.",
    verificationChecklist: [
      "Did I describe the customer's specific complaint?",
      "Did I explain my side briefly (short-staffed)?",
      "Did I specify what I want to offer (20% discount)?",
      "Did I set the tone (warm, professional)?",
      "Did I set a length limit?",
      "Did I avoid sharing the customer's real name or personal details?",
    ],
    privacyWarning:
      "When responding to real reviews, use general descriptions of the situation. Don't paste the customer's full name or order details into AI. The AI just needs the general issue and the tone you want.",
    reflectionQuestion:
      "What's the difference between a defensive response and an empathetic one? How did your prompt guide the AI toward empathy?",
    transferTemplate:
      "Help me respond to a customer who complained about [issue]. Their main point was: [summary]. My situation: [brief context]. I want to offer: [solution]. Tone: [warm/professional/apologetic]. Under [X] words. Do NOT sound [defensive/robotic/angry].",
    difficulty: "beginner",
  },
  {
    id: "menu-designer",
    slug: "menu-designer",
    title: "Writing Menu Descriptions for a Restaurant",
    category: "business",
    categoryLabel: "Business",
    problem:
      "You own a small family restaurant and need to update your menu with appealing descriptions. You want the dishes to sound delicious but not pretentious. Your customers are local families, not food critics.",
    fictionalData:
      "Your restaurant is 'Nana's Kitchen' serving comfort food. Dishes to describe: 1) Chicken Pot Pie (flaky crust, creamy chicken and vegetable filling), 2) BBQ Pulled Pork Sandwich (slow-cooked, tangy sauce, coleslaw), 3) Peach Cobbler (warm, cinnamon-spiced, vanilla ice cream). Your style is warm, homey, 'like grandma made it.'",
    badPrompt: "write menu descriptions for my restaurant",
    betterPrompt:
      "Write descriptions for 3 dishes on my family restaurant menu: Chicken Pot Pie (flaky crust, creamy filling), BBQ Pulled Pork Sandwich (slow-cooked, tangy sauce), and Peach Cobbler (warm, cinnamon, ice cream). Style: warm and homey, like grandma's cooking. No fancy food words. Each description 1-2 sentences that make your mouth water.",
    practiceTask:
      "Write a prompt to create menu descriptions for 3 dishes. Include the dish names, key ingredients, the restaurant's style, and how you want the descriptions to feel.",
    verificationChecklist: [
      "Did I list each dish with its key ingredients?",
      "Did I describe the restaurant's style (warm, homey, family)?",
      "Did I specify the length (1-2 sentences each)?",
      "Did I say what to avoid (fancy words, pretentious language)?",
      "Did I describe the tone I want (mouth-watering, comforting)?",
    ],
    privacyWarning:
      "Restaurant menus are public-facing. It's fine to use real dish names and ingredients. But don't share supplier details, pricing strategy, or proprietary recipes with AI.",
    reflectionQuestion:
      "How does specifying your audience (local families, not food critics) change how the AI writes descriptions?",
    transferTemplate:
      "Write descriptions for [X] dishes on my [cuisine/style] menu. Dishes: [list with key ingredients]. Restaurant style: [casual/fine-dining/family/homey]. Each description: [X] sentences. Tone: [mouth-watering/elegant/fun/comforting]. Avoid: [pretentious words/jargon].",
    difficulty: "beginner",
  },

  // === Study & Learning (1 scenario) ===
  {
    id: "study-helper",
    slug: "study-helper",
    title: "Using AI as a Study Partner",
    category: "study",
    categoryLabel: "Study",
    problem:
      "You're studying for a biology exam and struggling to understand photosynthesis. You've read the textbook but it's full of jargon. You need someone to explain it simply and quiz you to check your understanding.",
    fictionalData:
      "You're a high school student preparing for a biology exam. Topic: photosynthesis (light-dependent and light-independent reactions). You find the textbook confusing. You learn best with simple analogies and practice questions.",
    badPrompt: "explain photosynthesis",
    betterPrompt:
      "Explain photosynthesis to me like I'm a curious 10th grader who finds biology confusing. Break it into: 1) What it is in one simple sentence, 2) A real-world analogy I can remember, 3) The two main stages explained simply, 4) Why it matters. After explaining, ask me 3 questions to check if I understood. If I get one wrong, explain it differently — don't just repeat.",
    practiceTask:
      "Write a prompt asking AI to explain photosynthesis (or any topic you're learning). Include: your level, what makes it confusing, how you learn best, and a request for quiz questions.",
    verificationChecklist: [
      "Did I tell the AI my level (10th grader, beginner)?",
      "Did I say what makes the topic confusing?",
      "Did I specify how I learn (simple analogies, practice questions)?",
      "Did I ask the AI to quiz me?",
      "Did I ask it to explain differently if I get it wrong?",
    ],
    privacyWarning:
      "When using AI for studying, don't share your real name, school, grades, or any personal academic records. Describe the subject and your struggles in general terms.",
    reflectionQuestion:
      "How is asking AI to 'explain like I'm a 10th grader' different from just asking 'explain photosynthesis'? Why does this make the explanation more useful?",
    transferTemplate:
      "Explain [topic] to me like I'm a [level — beginner/student/curious learner]. I find [aspect] confusing. Break it into [X] parts. Use [analogies/stories/examples]. After explaining, ask me [X] questions to check my understanding. If I'm wrong, explain differently.",
    difficulty: "beginner",
  },

  // === Job Search (1 scenario) ===
  {
    id: "resume-builder",
    slug: "resume-builder",
    title: "Building a Resume from Your Experience",
    category: "job-search",
    categoryLabel: "Job Search",
    problem:
      "You need to update your resume for a job application. You have years of experience but struggle to describe your work in a way that sounds impressive and professional. You need help turning plain job duties into powerful resume bullets.",
    fictionalData:
      "You worked for 5 years as an Office Administrator at a mid-size company. Duties: managed office supplies and vendor relationships, scheduled meetings for 3 executives, handled customer phone calls and emails, trained 4 new employees on office procedures. You're applying for an Executive Assistant role.",
    badPrompt: "write resume bullets for office administrator",
    betterPrompt:
      "Help me write 5 resume bullet points for an Office Administrator applying for an Executive Assistant role. My experience: 5 years managing office operations, vendor relationships, executive scheduling for 3 managers, customer communications (50+ calls/emails daily), and onboarding 4 new hires. For each bullet: start with a strong action verb, include numbers where possible, and show impact. Target the Executive Assistant role.",
    practiceTask:
      "Write a prompt to turn job duties into resume bullets. Include: your role, years of experience, specific duties with numbers if possible, and the job you're targeting.",
    verificationChecklist: [
      "Did I include the job title and years of experience?",
      "Did I list specific duties with numbers (50+ calls, 3 executives, 4 hires)?",
      "Did I mention the target role (Executive Assistant)?",
      "Did I request action verbs and measurable impact?",
      "Did I remember that this is fictional data — I should NOT paste my real resume?",
    ],
    privacyWarning:
      "NEVER paste your real resume into AI. Instead, describe each role in general terms: '5 years in retail management' rather than pasting your actual employment history with dates and company names. AI can help you write better, but keep your identity private.",
    reflectionQuestion:
      "What's the difference between 'managed office supplies' and 'Optimized $15K annual office supply budget, reducing waste by 20%'? How does AI help you find those impact numbers?",
    transferTemplate:
      "Help me write [X] resume bullet points for a [job title] targeting a [target role] position. My experience: [X years] doing [key duties with numbers]. For each bullet: strong action verb, measurable impact, relevant to the target role.",
    difficulty: "beginner",
  },

  // === Workplace (1 scenario) ===
  {
    id: "meeting-summary",
    slug: "meeting-summary",
    title: "Summarizing Meeting Notes into Action Items",
    category: "workplace",
    categoryLabel: "Workplace",
    problem:
      "You took messy notes during a team meeting and need to turn them into a clean summary with clear action items. You want to send this to your team so everyone knows what was decided and who's doing what.",
    fictionalData:
      "Team meeting about the Q3 marketing plan. Topics discussed: social media budget increase from $500 to $800/month, new Instagram Reels strategy, email newsletter redesign, customer survey results (72% satisfaction). Action items: Marketing lead to draft new budget by Friday, Design team to mock up newsletter by next Wednesday, Intern to compile survey data into report by Monday.",
    badPrompt: "summarize my meeting notes",
    betterPrompt:
      "Turn these rough meeting notes into a clean professional summary. The meeting was about Q3 marketing planning. Include: 1) Key decisions made (budget increase, new strategies), 2) Important data points (72% customer satisfaction), 3) Action items with owner and deadline for each. Format: bullet points under clear headings. Tone: professional but friendly.",
    practiceTask:
      "Write a prompt asking AI to summarize meeting notes. Include: the meeting topic, key decisions, data points, action items, and the format you want the summary in.",
    verificationChecklist: [
      "Did I describe the meeting topic (Q3 marketing)?",
      "Did I include specific decisions (budget increase)?",
      "Did I include data (72% satisfaction)?",
      "Did I specify action items with owners and deadlines?",
      "Did I specify the format (bullet points, headings)?",
      "Did I avoid including real company names or confidential data?",
    ],
    privacyWarning:
      "When summarizing real meetings, describe topics in general terms. Don't paste real meeting transcripts with names, company strategies, or confidential financial data. AI just needs the topic structure to organize notes.",
    reflectionQuestion:
      "How does specifying the output format (bullet points, headings, owners + deadlines) make the summary more useful than just asking for a summary?",
    transferTemplate:
      "Turn these meeting notes into a professional summary. Meeting topic: [topic]. Include: key decisions, data points mentioned, action items with owner and deadline for each. Format: [bullet points/table/narrative]. Tone: [professional/friendly].",
    difficulty: "beginner",
  },

  // === Forms & Services (1 scenario) ===
  {
    id: "form-helper",
    slug: "form-helper",
    title: "Understanding a Government Form",
    category: "forms",
    categoryLabel: "Forms & Services",
    problem:
      "You received a government form about property tax assessment and find the language confusing. You need help understanding what the form is asking for, what documents you need, and how to fill it out correctly.",
    fictionalData:
      "You received a 'Property Tax Assessment Review Request' form from your local municipal office. The form asks for: property identification number, reason for review, supporting evidence, and a signature. You're not sure what counts as 'supporting evidence' or how to write a compelling reason for review.",
    badPrompt: "help me fill out tax form",
    betterPrompt:
      "Explain a standard property tax assessment review form in plain language. What does each section mean? What kind of 'supporting evidence' is typically accepted? Give me a template for writing a clear, respectful reason for review. Use simple English — no legal jargon. Note: this is for educational understanding, not legal advice.",
    practiceTask:
      "Write a prompt asking AI to explain a government form in plain language. Describe the form's purpose, specific sections you find confusing, and what kind of help you need.",
    verificationChecklist: [
      "Did I describe the form's purpose (property tax review)?",
      "Did I specify which sections are confusing?",
      "Did I ask for plain language, not legal jargon?",
      "Did I include a disclaimer that this is educational, not legal advice?",
      "Did I avoid pasting any real form numbers or personal details?",
    ],
    privacyWarning:
      "NEVER paste a real government form with your personal details into AI. Describe the form's purpose and which sections confuse you in general terms. For official forms, always verify AI's explanations with the issuing office.",
    reflectionQuestion:
      "Why is it important to add 'this is for educational understanding, not legal advice' when asking AI about government forms?",
    transferTemplate:
      "Explain a [type of form] in plain language. I'm confused about [specific sections]. What does [term] mean? What documents do I typically need? Give me a template for [writing the response/filling out the section]. Use simple English — no jargon. Note: this is for educational understanding, not [legal/financial/tax] advice.",
    difficulty: "beginner",
  },

  // === Money & Scam Awareness (1 scenario) ===
  {
    id: "scam-detector",
    slug: "scam-detector",
    title: "Spotting a Scam Message",
    category: "money",
    categoryLabel: "Money & Safety",
    problem:
      "You received a text message claiming to be from your bank, saying there's 'suspicious activity' on your account and you need to 'verify your identity' by clicking a link. The message looks official but something feels off. You want to learn how to identify scam messages.",
    fictionalData:
      'The text message says: "URGENT: Your account has been temporarily locked due to suspicious login attempt. Verify your identity immediately to restore access: http://secure-bank-verify.com/account." The sender is "BANK-ALERT." Your actual bank\'s name is "First Community Bank" — the message doesn\'t use the bank\'s real name. The URL is not your bank\'s actual website.',
    badPrompt: "is this message a scam?",
    betterPrompt:
      "I received this text message claiming to be from my bank. Analyze it for scam indicators: 1) Does it create false urgency? 2) Is the sender name legitimate? 3) Does the URL match the real bank website? 4) Would a real bank ask for identity verification via text link? Explain each red flag in plain language. I want to learn HOW to spot scams, not just get a yes/no answer.",
    practiceTask:
      "Describe a suspicious message you've seen (or use the fictional one above). Write a prompt asking AI to analyze it for scam indicators and explain what to look for.",
    verificationChecklist: [
      "Did I paste the message text (without any real personal links)?",
      "Did I ask the AI to identify specific red flags?",
      "Did I ask for explanations, not just yes/no?",
      "Did I avoid sharing any real account numbers or passwords?",
      "Did I avoid clicking any links in the actual message?",
    ],
    privacyWarning:
      "When checking if a message is a scam, paste only the message text. NEVER share account numbers, passwords, or click on links in suspicious messages. If you think your real account is compromised, contact your bank directly using their official phone number.",
    reflectionQuestion:
      "What are the 3 most common signs of a scam message? How would you explain them to an elderly family member?",
    transferTemplate:
      "Analyze this message for scam indicators. Message: [paste text]. Check for: urgency, sender legitimacy, URL accuracy, requests for personal info. Explain each red flag in simple terms. I want to learn how to identify scams myself.",
    difficulty: "beginner",
  },

  // === Translation (1 scenario) ===
  {
    id: "language-practice",
    slug: "language-practice",
    title: "Practicing a New Language with AI",
    category: "translation",
    categoryLabel: "Translation",
    problem:
      "You're learning Spanish and want to practice everyday conversations. You need someone patient who can correct your mistakes, explain grammar in simple terms, and help you build confidence speaking.",
    fictionalData:
      "You're a beginner Spanish learner. You know basic greetings and present tense. You struggle with past tense and gendered nouns. You want to practice ordering food at a restaurant and introducing yourself. Your goal is to have a basic conversation during an upcoming trip.",
    badPrompt: "teach me spanish",
    betterPrompt:
      "Act as a patient Spanish tutor for a beginner. I know basic greetings and present tense. I struggle with past tense and gendered nouns. Today, help me practice: 1) Ordering food at a restaurant (including asking about ingredients), 2) Introducing myself and saying where I'm from. Speak to me in simple Spanish first, then translate. Correct my mistakes gently and explain why. Keep corrections brief — don't overwhelm me.",
    practiceTask:
      "Write a prompt for AI to help you practice a language. Include: your level, what you know, what you struggle with, and the specific situation you want to practice.",
    verificationChecklist: [
      "Did I specify my level (beginner)?",
      "Did I mention what I already know?",
      "Did I mention what I struggle with?",
      "Did I specify the scenario (restaurant, introduction)?",
      "Did I ask for gentle corrections with explanations?",
      "Did I avoid sharing personal travel plans or passport details?",
    ],
    privacyWarning:
      "When practicing languages with AI, don't share your real travel dates, passport details, or exact location. Use general scenarios: 'ordering at a restaurant' rather than 'I'm going to Barcelona on June 15th.'",
    reflectionQuestion:
      "How does telling AI what you already know AND what you struggle with change the quality of the lesson?",
    transferTemplate:
      "Act as a patient [language] tutor for a [level] learner. I know [what I know]. I struggle with [what's hard]. Help me practice [scenario]. Speak to me in simple [language] first, then translate. Correct me gently and explain why. Keep it simple — don't overwhelm me.",
    difficulty: "beginner",
  },

  // === Health (1 scenario) ===
  {
    id: "health-questions",
    slug: "health-questions",
    title: "Preparing Questions for a Doctor Visit",
    category: "health",
    categoryLabel: "Health",
    problem:
      "You have a doctor's appointment coming up and want to prepare good questions. You've been experiencing symptoms but aren't sure how to describe them clearly. You want AI to help you organize your thoughts and prepare questions — NOT diagnose you.",
    fictionalData:
      "You've been experiencing frequent headaches for 3 weeks, mostly in the afternoon. You also feel unusually tired. You're 45 years old, generally healthy, no major medical history. You want to prepare questions about: possible causes, tests that might be needed, lifestyle changes that might help, and when to worry. This is fictional for practice — AI is NOT a doctor.",
    badPrompt: "why do i have headaches",
    betterPrompt:
      "Help me prepare questions for my doctor's appointment. I've had frequent afternoon headaches for 3 weeks and feel unusually tired. I'm 45, generally healthy. I want to organize: 1) A clear description of my symptoms to tell the doctor, 2) Questions about possible causes, tests, and lifestyle changes. IMPORTANT: This is for organizing my thoughts and preparing questions only. Do NOT provide a diagnosis or medical advice. AI is not a doctor.",
    practiceTask:
      "Write a prompt to organize questions for a doctor visit. Describe your symptoms (use fictional data), include your age and general health, and specify that AI should help organize, NOT diagnose.",
    verificationChecklist: [
      "Did I describe symptoms clearly (type, duration, timing)?",
      "Did I include basic health context (age, general health)?",
      "Did I explicitly say this is for organizing questions, not diagnosis?",
      "Did I include a clear disclaimer: AI is not a doctor?",
      "Did I avoid sharing real personal medical records or IDs?",
    ],
    privacyWarning:
      "In real life, describe symptoms with fictional details or general terms. NEVER share your real name, medical record numbers, or full medical history with AI. Use AI to help you prepare questions and organize thoughts — not for medical advice or diagnosis.",
    reflectionQuestion:
      "Why is it dangerous to ask AI 'why do I have headaches' instead of 'help me prepare questions about my headaches for my doctor'?",
    transferTemplate:
      "Help me prepare questions for my doctor's appointment. Symptoms: [type, duration, timing]. My context: [age, general health]. Organize: 1) Clear symptom description, 2) Questions about causes, tests, lifestyle. IMPORTANT: This is for organizing my thoughts. Do NOT provide diagnosis or medical advice. AI is not a doctor.",
    difficulty: "beginner",
  },

  // === Agriculture (1 scenario) ===
  {
    id: "farm-planning",
    slug: "farm-planning",
    title: "Planning Crop Rotation for a Small Farm",
    category: "agriculture",
    categoryLabel: "Agriculture",
    problem:
      "You manage a small family farm and want to plan crop rotation for the next growing season. You need help understanding what to plant after your current crops to maintain soil health. You need practical suggestions, but you know AI recommendations must be verified locally.",
    fictionalData:
      "You farm 5 acres in a warm, semi-arid climate. Current crops: maize, beans, and tomatoes. You're concerned about soil depletion after several seasons of maize. You have access to drip irrigation. Your local agricultural extension office is available for verification. This is a fictional scenario for planning practice.",
    badPrompt: "what should i plant after maize",
    betterPrompt:
      "Suggest crop rotation options for a 5-acre small farm in a warm, semi-arid climate. Current crops: maize, beans, and tomatoes. Concern: soil depletion after multiple maize seasons. I have drip irrigation. Suggest: 1) Good rotation crops that restore nitrogen, 2) Cover crop options, 3) Basic soil management practices. IMPORTANT: These are general suggestions. I will verify all recommendations with my local agricultural extension office before implementing. Local climate, soil conditions, and market demand must guide final decisions.",
    practiceTask:
      "Write a prompt about farm planning that: describes your farm (size, climate, current crops), asks for specific recommendations, and clearly states that you'll verify with local experts.",
    verificationChecklist: [
      "Did I describe the farm size (5 acres) and climate?",
      "Did I list current crops and the concern (soil depletion)?",
      "Did I ask for specific types of recommendations?",
      "Did I include a clear disclaimer about verifying locally?",
      "Did I avoid sharing real GPS coordinates or land titles?",
    ],
    privacyWarning:
      "When seeking agricultural advice from AI, describe your farm in general terms (size, climate, crops). NEVER share land titles, GPS coordinates, financial records, or government subsidy information. AI suggestions are general — your local extension office knows your specific conditions.",
    reflectionQuestion:
      "Why must AI farming suggestions be verified with local experts? What factors might AI miss about YOUR specific farm?",
    transferTemplate:
      "Suggest [topic] options for a [size] farm in a [climate type] climate. Current situation: [crops, soil, water access]. I need: [specific recommendations]. IMPORTANT: These are general suggestions for planning. I will verify all recommendations with my local agricultural extension office before implementing. Local conditions must guide final decisions.",
    difficulty: "intermediate",
  },
];
