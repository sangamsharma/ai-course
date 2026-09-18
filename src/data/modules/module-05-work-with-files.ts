import type { Module } from "@/lib/types";

export const module05: Module = {
  id: "work-with-your-files",
  slug: "work-with-your-files",
  title: "Work With Your Own Files",
  shortTitle: "Your Files",
  description:
    "Upload or photograph a real letter, bill, or PDF and get AI to explain it, summarize it, or compare it to another document — one of the most useful things AI can do for you.",
  icon: "FileText",
  color: "amber",
  estimatedMinutes: 34,
  order: 5,
  lessons: [
    {
      id: "m5w-upload",
      slug: "upload-and-ask",
      moduleId: "work-with-your-files",
      title: "Upload a Photo or PDF and Ask About It",
      subtitle: "You don't have to type out what's confusing you — just show AI the document",
      order: 1,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "So far, everything you've typed to AI has been in words. But ChatGPT, Claude, and Gemini can all also look at a photo or a file you give them — a PDF, a screenshot, or a picture you take with your phone — and answer questions about it. This is one of the single most useful things AI can do for everyday life: no more staring at a confusing letter wondering what it actually means.",
        },
        {
          type: "bullet-list",
          title: "Look for an attach or upload button",
          items: [
            "In each tool, there's a small icon near where you type — usually a paperclip, a plus sign, or a photo icon — that lets you add a file or photo instead of (or alongside) typing.",
            "On a phone, this usually lets you take a photo right there or choose one from your camera roll.",
            "On a computer, it usually opens a file picker so you can choose a PDF, screenshot, or image from your files.",
            "The exact icon and wording changes from time to time as these tools update — if you can't find it, try typing 'how do I upload a file' directly into the chat and asking the AI to walk you through it.",
          ],
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Try it right now",
          body: "Find any letter, bill, or form sitting nearby — even junk mail works for practice. Take a photo of it (or find a PDF you already have), upload it, and type: 'What is this document, and what is it asking me to do?'",
        },
        {
          type: "tip-box",
          variant: "warning",
          title: "Cover anything truly sensitive first",
          body: "Before you upload a photo of a real document, check it for account numbers, passwords, or ID numbers — cover them with your finger or crop them out first, the same 'Public Library Rule' from Level 2 applies here too.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m5w-pp-upload",
          title: "Upload Something Real and Ask About It",
          instruction:
            "Find a real letter, bill, form, or menu near you right now. Upload a photo or file of it to your AI tool, cover any sensitive numbers first, and ask it to explain what it is in plain English.",
          promptHint:
            "Here's a [type of document]. What is this, in plain English? What is it asking me to do, and is there a deadline?",
          sampleResponse:
            "This looks like a utility bill from [company]. It's asking you to pay $[amount] by [date] for your electricity usage in [month]. There's also a note that your rate is increasing next quarter — you may want to check if a different plan would save you money.",
          improvementTip:
            "Notice you didn't have to type out the whole document by hand — you just showed it to AI. That's the whole point of this lesson: any time you'd normally have to retype something confusing, try uploading it instead.",
        },
      ],
      keyTakeaways: [
        "ChatGPT, Claude, and Gemini can all read photos and files you upload, not just typed text",
        "Look for a paperclip, plus, or photo icon near the text box",
        "Cover sensitive numbers before uploading a real document",
        "This works for letters, bills, forms, menus, screenshots — almost anything you can photograph",
      ],
    },
    {
      id: "m5w-summarize-doc",
      slug: "summarize-a-document",
      moduleId: "work-with-your-files",
      title: "Turn a Messy Document into a Clear Summary",
      subtitle: "Long, dense, or confusing? Get the short version — and ask follow-up questions",
      order: 2,
      estimatedMinutes: 12,
      content: [
        {
          type: "text",
          body: "Once you've uploaded a document, you're not limited to one question. You can ask AI to summarize it, then keep asking follow-up questions about the same document — without re-explaining what it is each time.",
        },
        {
          type: "code-example",
          title: "Document Summary Prompt:",
          code: `Here's a [type of document]. Summarize it in plain English:
1. What is this document?
2. What does it want me to do, and by when?
3. Are there any fees, deadlines, or consequences I should know about?
4. What questions should I ask before I respond to it?`,
          language: "text",
        },
        {
          type: "text",
          body: "Once you have the summary, keep going in the same conversation — you don't need to upload the document again. Try: 'What does the term [confusing word from the document] actually mean?' or 'If I don't respond by the deadline, what happens?'",
        },
        {
          type: "tip-box",
          variant: "example",
          title: "Real example",
          body: "Someone uploaded a photo of a property tax reassessment notice and asked for a plain-English summary. AI explained: the notice was informing them their property's assessed value had increased, which would raise their tax bill; they had 30 days to file an appeal if they disagreed; and it listed exactly what evidence (recent comparable sales) they'd need to include in an appeal. They asked three follow-up questions in the same chat without re-uploading anything.",
        },
        {
          type: "tip-box",
          variant: "important",
          title: "Still verify anything official",
          body: "A plain-English summary helps you understand a document — it doesn't replace reading the real thing carefully, or checking with the actual organization that sent it, before you act on anything with real money, legal, or medical consequences (Level 2's 3-step fact-check applies here too).",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m5w-pp-summarize",
          title: "Summarize, Then Ask a Follow-Up",
          instruction:
            "Using the same or a new uploaded document, ask AI for a plain-English summary using the 4-question prompt above. Then, without uploading anything again, ask one follow-up question about a specific word or section that's still unclear to you.",
          promptHint:
            "Follow-up: 'What does [term] mean in this context?' or 'What happens if I miss the deadline mentioned above?'",
          sampleResponse:
            "Follow-up: 'What does \"assessed value\" mean?' AI: 'Assessed value is the dollar figure your local government uses to calculate your property tax — it's not necessarily the same as what your home would actually sell for on the market. Your tax bill is a percentage of this assessed value, so if it goes up, your tax bill usually goes up too.'",
          improvementTip:
            "The follow-up question didn't need any context restated — the AI remembered the document from earlier in the same conversation. That's the habit worth building: keep asking in the same chat instead of starting over.",
        },
        {
          type: "quiz",
          id: "m5w-q-followup",
          question: "After AI summarizes a document you uploaded, what's the best way to ask a follow-up question about it?",
          options: [
            { id: "a", text: "Upload the document again and re-explain everything", isCorrect: false },
            { id: "b", text: "Just ask the follow-up question in the same conversation", isCorrect: true },
            { id: "c", text: "Start a brand-new conversation", isCorrect: false },
            { id: "d", text: "You can't ask follow-up questions about an uploaded document", isCorrect: false },
          ],
          explanation:
            "AI remembers the document and the conversation so far within the same chat — you can keep asking questions about it without uploading it again or repeating context.",
        },
      ],
      keyTakeaways: [
        "Ask for a plain-English summary, then keep asking follow-up questions in the same conversation",
        "You don't need to re-upload the document for each new question",
        "A summary helps you understand something — it doesn't replace verifying anything with real consequences",
      ],
    },
    {
      id: "m5w-compare-docs",
      slug: "compare-documents",
      moduleId: "work-with-your-files",
      title: "Compare Two Documents Side by Side",
      subtitle: "Two quotes, two offers, two plans — let AI line up the differences for you",
      order: 3,
      estimatedMinutes: 10,
      content: [
        {
          type: "text",
          body: "Once you're comfortable uploading one document, the next useful trick is uploading two and asking AI to compare them. This works great for insurance quotes, job offers, phone plans, or any time you're choosing between two options on paper.",
        },
        {
          type: "code-example",
          title: "Document Comparison Prompt:",
          code: `Here are two [type of documents — e.g. insurance quotes]. Compare them side by side:
1. What are the key differences in price and coverage/terms?
2. What does Option A include that Option B doesn't, and vice versa?
3. What questions should I ask before choosing?
Do NOT tell me which to pick — just help me understand the differences clearly.`,
          language: "text",
        },
        {
          type: "tip-box",
          variant: "tip",
          title: "Ask for a table",
          body: "Add 'Format the comparison as a table' to your prompt — a side-by-side table is often much easier to scan than paragraphs when you're comparing several things at once.",
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m5w-pp-compare",
          title: "Compare Two Real (or Practice) Documents",
          instruction:
            "Find two similar documents you can compare — two bills, two quotes, two subscription plans, or two menus. Upload both and ask AI to compare them as a table, without recommending one over the other.",
          promptHint:
            "Here are two [phone/insurance/service] plans. Compare price, what's included, and any fine print, as a table. Don't recommend one — just help me see the differences.",
          sampleResponse:
            "| | Plan A | Plan B |\n|---|---|---|\n| Monthly price | $45 | $38 |\n| Data included | 20GB | 15GB |\n| Contract length | 24 months | No contract |\n| Early exit fee | $150 | None |\n\nPlan A costs more per month but has more data. Plan B is cheaper and has no lock-in contract, which matters if you might switch providers soon. Questions worth asking: does Plan A's data limit actually match how much you use, and does Plan B's price ever increase after an introductory period?",
          improvementTip:
            "Notice the response stayed neutral — it laid out the differences and even suggested questions to ask, without picking a winner for you. That's exactly what you asked for, and it's a good habit to keep: use AI to understand your options, keep the actual decision for yourself.",
        },
      ],
      keyTakeaways: [
        "You can upload two documents in the same conversation and ask AI to compare them",
        "Ask for a table format when comparing several things at once",
        "Tell AI not to decide for you — ask it to lay out the differences and the questions worth asking",
      ],
    },
    {
      id: "m5w-capstone",
      slug: "level-5-capstone",
      moduleId: "work-with-your-files",
      title: "Level 5 Capstone: Explain a Real Document",
      subtitle: "Put it all together with something real from your own life",
      order: 4,
      estimatedMinutes: 2,
      content: [
        {
          type: "text",
          body: "You've now learned to upload a document, get a plain-English summary, ask follow-up questions in the same conversation, and compare two documents side by side. This capstone is just one thing: do it for real, with something that actually matters to you.",
        },
        {
          type: "bullet-list",
          title: "Your capstone task",
          items: [
            "Find one real document you've been putting off dealing with — a bill, a letter, a form, a notice.",
            "Upload it (covering any sensitive numbers first) and ask for a plain-English summary.",
            "Ask at least one follow-up question about something in it you still don't understand.",
            "Decide your next real-world step — and if it involves money, health, or anything legal, verify it with the actual source or a human professional before acting, per Level 2.",
          ],
        },
      ],
      exercises: [
        {
          type: "prompt-playground",
          id: "m5w-pp-capstone",
          title: "Your Real Document",
          instruction: "Describe the real document you worked through and the one thing you learned or decided as a result.",
          promptHint: "I uploaded [type of document]. AI told me [summary]. My next step is [action].",
          sampleResponse: "I uploaded a confusing letter about a change to my health insurance plan. AI explained it meant my monthly premium was going up but my deductible was going down. My next step is calling my provider to ask how that nets out for my actual usage before I decide whether to switch plans.",
          improvementTip: "This is the whole point of Level 5: turning something you'd normally avoid or struggle through alone into something you can handle in a few minutes.",
        },
      ],
      keyTakeaways: [
        "Upload, summarize, ask follow-ups, compare — you now have the full toolkit for working with your own documents",
        "Use it on something real, not just a practice example",
      ],
    },
  ],
};
