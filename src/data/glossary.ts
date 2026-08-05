import type { GlossaryEntry } from "@/lib/types";

export const glossaryEntries: GlossaryEntry[] = [
  {
    term: "AI (Artificial Intelligence)",
    definition:
      "Computer systems that can perform tasks that normally require human intelligence — like understanding language, recognizing patterns, or making decisions. Think of it as a smart assistant, not a robot takeover.",
    analogy: "Like a calculator for words — it helps you process information faster, but you're still in control.",
    seeAlso: ["LLM", "Machine Learning"],
  },
  {
    term: "Prompt",
    definition:
      "The text you type or say to an AI to ask it to do something. It's like giving instructions to a helper. A good prompt tells the AI WHAT you want, HOW you want it, and WHO it's for.",
    analogy: "Like ordering at a restaurant — the more specific you are ('I'd like a medium-rare steak with steamed vegetables, no salt'), the better your result.",
    seeAlso: ["Prompt Engineering", "Context"],
  },
  {
    term: "LLM (Large Language Model)",
    definition:
      "The type of AI that powers ChatGPT, Claude, and Gemini. It's been trained on millions of books, articles, and websites to understand and generate human-like text. Despite the complex name, it's just a very well-read text predictor.",
    analogy: "Like a librarian who has read every book in the library and can summarize, combine, and explain information from all of them.",
    seeAlso: ["AI (Artificial Intelligence)", "Training Data"],
  },
  {
    term: "Prompt Engineering",
    definition:
      "The skill of writing effective prompts to get the best results from AI. It's not coding — it's learning how to communicate clearly and specifically with AI tools.",
    analogy: "Like learning to give good directions — 'turn left at the big red building' is better than 'go that way.'",
    seeAlso: ["Prompt", "Context"],
  },
  {
    term: "Hallucination",
    definition:
      "When AI confidently makes up false information. It might invent a fact, quote, or statistic that sounds real but isn't. Always fact-check important AI outputs.",
    analogy: "Like a very confident tour guide who sometimes points at a random building and says 'that's where the president was born' — they sound sure, but they might be wrong.",
    seeAlso: ["Fact-Checking", "Limitations"],
  },
  {
    term: "Context",
    definition:
      "The background information you give to AI to help it understand your situation. More context = better responses. Context includes who you are, what you need, and any relevant details.",
    analogy: "Like telling a doctor your full symptoms and medical history — without it, they can only guess.",
    seeAlso: ["Prompt", "Prompt Engineering"],
  },
  {
    term: "Token",
    definition:
      "How AI measures text length. Roughly, 1 token = ¾ of a word. AI tools have token limits — like a word count limit for both your input and the AI's response.",
    analogy: "Like text message character limits — you can send long messages, but there's a maximum length.",
  },
  {
    term: "ChatGPT",
    definition:
      "An AI assistant made by OpenAI. The most popular AI tool, great for creative writing, answering questions, and general help. Free version available at chat.openai.com.",
    seeAlso: ["Claude", "Gemini", "LLM (Large Language Model)"],
  },
  {
    term: "Claude",
    definition:
      "An AI assistant made by Anthropic. Known for thoughtful, safe responses and excellent writing quality. Great with long documents. Free version at claude.ai.",
    seeAlso: ["ChatGPT", "Gemini", "LLM (Large Language Model)"],
  },
  {
    term: "Gemini",
    definition:
      "Google's AI assistant. Integrates with Gmail, Docs, and other Google apps. Good for creative and visual tasks. Free with any Google account at gemini.google.com.",
    seeAlso: ["ChatGPT", "Claude", "LLM (Large Language Model)"],
  },
  {
    term: "Training Data",
    definition:
      "The books, articles, and websites that an AI learns from. AI doesn't 'know' things — it learns patterns from its training data. This is why AI can sometimes be outdated or biased.",
    analogy: "Like a student who only studied from textbooks published before 2020 — they might not know about recent events.",
    seeAlso: ["LLM (Large Language Model)", "Hallucination"],
  },
  {
    term: "Machine Learning",
    definition:
      "A method where computers learn patterns from data instead of being explicitly programmed. It's the technology behind modern AI tools.",
    analogy: "Like learning to cook by tasting hundreds of dishes rather than following a single recipe book.",
    seeAlso: ["AI (Artificial Intelligence)", "Training Data"],
  },
  {
    term: "Bias",
    definition:
      "When AI produces unfair or skewed results because of patterns in its training data. AI can reflect and amplify human biases if not carefully designed.",
    analogy: "Like a hiring manager who grew up in one small town — they might have assumptions about people from other places without realizing it.",
    seeAlso: ["Training Data", "Limitations"],
  },
  {
    term: "Fact-Checking",
    definition:
      "The habit of verifying AI-generated information against reliable sources. Always check important facts, numbers, and claims before using AI output for serious purposes.",
    analogy: "Like checking a Wikipedia article's sources before citing it in a school paper.",
    seeAlso: ["Hallucination", "Limitations"],
  },
  {
    term: "Persona Pattern",
    definition:
      "A prompting technique where you ask AI to respond as a specific person or role (e.g., 'Act as a financial advisor' or 'Explain this like you're talking to a 10-year-old').",
    analogy: "Like asking a friend 'if you were a doctor, what would you say about this symptom?'",
    seeAlso: ["Prompt Engineering", "Prompt"],
  },
];
