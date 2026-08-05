import type { Module } from "@/lib/types";

export const module11: Module = {
  id: "job-search",
  slug: "job-search",
  title: "Job Search Accelerator",
  shortTitle: "Job Search",
  description: "Craft resumes, write cover letters, prepare for interviews, and plan career moves with AI assistance.",
  icon: "Briefcase",
  color: "violet",
  estimatedMinutes: 40,
  order: 11,
  lessons: [
    {
      id: "m11-resume",
      slug: "resumes-cvs",
      moduleId: "job-search",
      title: "Resumes & CVs That Stand Out",
      subtitle: "Use AI to tailor your resume for specific roles and highlight your achievements",
      order: 1,
      estimatedMinutes: 12,
      content: [
        { type: "text", body: "AI can transform a basic resume into a tailored application that speaks directly to the job you want. It can rephrase bullet points to show impact, suggest keywords from the job description, and format your experience to match what employers look for." },
        { type: "tip-box", variant: "warning", title: "Privacy First:", body: "Remove your name, address, phone number, and employer names before pasting into AI. Use '[Current Employer]', '[City]', and '[Name]' as placeholders. Add your real details back after AI helps with the content." },
        { type: "code-example", title: "Resume Improvement Prompt:", code: `Here are the bullet points from my current resume for a [job title] role. Help me make them stronger:
[Paste anonymized bullet points]
Also, here is the job description I'm applying for:
[Paste job description — remove company name if sensitive]
Please:
1. Rewrite each bullet to show impact with numbers/metrics where possible
2. Suggest 3 additional bullet points based on the job description
3. Identify keywords from the job description I should include
4. Note any skills gaps I should address`, language: "text" },
        { type: "bullet-list", title: "AI Resume Tips:", items: ["Use AI to tailor your base resume for each job application", "Ask AI to rewrite bullets using the STAR method (Situation, Task, Action, Result)", "Request 'action verbs' if your bullets feel repetitive", "Get a critique: 'What's missing from this resume for a [role] position?'"] },
      ],
      exercises: [
        { type: "prompt-playground", id: "m11-pp-resume", title: "Improve a Resume Bullet", instruction: "Write a prompt asking AI to improve a resume bullet point. Use a fictional or anonymized example.", promptHint: "Improve this resume bullet: 'Responsible for managing social media accounts.' Make it show impact with numbers.", sampleResponse: "'Grew social media following by 40% (2,000 to 2,800 followers) in 6 months through daily content creation and community engagement, resulting in 25% increase in website traffic from social channels.'", improvementTip: "Notice how the improved version adds specific numbers (40%, 2,000→2,800, 6 months, 25%) that demonstrate real impact." },
      ],
      keyTakeaways: ["Anonymize your resume before pasting into AI", "Ask AI to tailor your resume for each specific job description", "Use the STAR method and add measurable results to every bullet"],
    },
    {
      id: "m11-cover",
      slug: "cover-letters",
      moduleId: "job-search",
      title: "Cover Letters That Get Read",
      subtitle: "Write compelling cover letters that connect your experience to the employer's needs",
      order: 2,
      estimatedMinutes: 10,
      content: [
        { type: "text", body: "Cover letters are challenging, but AI excels at them. Give it the job description and your anonymized experience, and it'll draft a letter that connects your skills to their needs — which you then personalize with your voice." },
        { type: "code-example", title: "Cover Letter Prompt:", code: `Write a cover letter for a [job title] position at [industry type] company.
Job description key points: [paste key requirements — anonymized]
My background: [your skills and experience — anonymized]
Tone: [professional / warm / confident / humble]
Length: under [X] words
Structure: opening hook → why I'm interested → relevant experience → why I'd be a good fit → call to action`, language: "text" },
      ],
      exercises: [
        { type: "quiz", id: "m11-q1", question: "What should you do before pasting your resume into AI?", options: [{ id: "a", text: "Add more personal details", isCorrect: false }, { id: "b", text: "Remove identifying details like name, address, and employer names", isCorrect: true }, { id: "c", text: "Nothing — it's fine as is", isCorrect: false }, { id: "d", text: "Only share it on paid AI plans", isCorrect: false }], explanation: "Always anonymize your documents before sharing with AI. Use placeholders like '[Current Employer]' and add real details back after.", allowRetry: true },
      ],
      keyTakeaways: ["AI drafts cover letters that connect your skills to employer needs", "Always personalize AI-generated drafts with your authentic voice", "Anonymize documents before pasting into AI"],
    },
    {
      id: "m11-interview",
      slug: "interview-prep",
      moduleId: "job-search",
      title: "Interview Preparation",
      subtitle: "Practice interview questions, prepare your answers, and research companies",
      order: 3,
      estimatedMinutes: 10,
      content: [
        { type: "text", body: "AI is an excellent interview coach. It generates likely questions for your role, helps you structure answers using proven frameworks, and can even role-play as the interviewer. You can practice as many times as you want — without embarrassment." },
        { type: "code-example", title: "Interview Prep Prompt:", code: `I have an interview for a [job title] position at a [industry] company. The job description emphasizes: [key requirements]. Help me prepare:
1. Generate 10 likely interview questions (mix of behavioral and technical)
2. For each question, suggest a structure for answering (STAR method)
3. List 5 questions I should ask them
4. Role-play as the interviewer: ask me one question at a time. I'll respond, then you give feedback.`, language: "text" },
      ],
      exercises: [
        { type: "fill-in-blank", id: "m11-fib-interview", title: "Prepare Your Interview Prompt", instruction: "Fill in the template for a job you might apply for.", template: "I have an interview for a {{role}} position at a {{industry}} company. Key requirements: {{requirements}}. Generate 10 likely interview questions and suggest how to structure answers using the STAR method.", blanks: [{ key: "role", answer: "customer service", hint: "Job title?" }, { key: "industry", answer: "retail", hint: "Industry?" }, { key: "requirements", answer: "team leadership and problem solving", hint: "Top skills needed?" }] },
      ],
      keyTakeaways: ["AI generates realistic interview questions for your specific role", "Practice answers out loud — the AI can simulate the interviewer", "Prepare thoughtful questions to ask the employer"],
    },
  ],
};
