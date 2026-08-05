import { NextRequest, NextResponse } from "next/server";

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const ANTHROPIC_BASE_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-sonnet-4-6";

// Simple in-memory rate limiter (resets on cold start)
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20; // requests per window
const RATE_WINDOW_MS = 60_000; // 1 minute

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// PII detection patterns — reject prompts containing these
const PII_PATTERNS = [
  /\b\d{3}[-.\s]?\d{2}[-.\s]?\d{4}\b/, // SSN-like
  /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/, // credit card
  /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/, // email (only when combined with sensitive context)
];

const BLOCKED_TERMS = [
  "password",
  "hack into",
  "bypass security",
  "steal credentials",
  "malware",
  "ransomware",
  "exploit vulnerability",
  "create phishing",
  "generate fake id",
  "deepfake",
  "cp ",
  "child pornography",
  "how to make a bomb",
  "how to manufacture",
];

function hasBlockedContent(prompt: string): string | null {
  const lower = prompt.toLowerCase();
  for (const term of BLOCKED_TERMS) {
    if (lower.includes(term)) return `Prompt contains blocked content: "${term}"`;
  }
  for (const pattern of PII_PATTERNS) {
    if (pattern.test(prompt)) return "Prompt may contain personal identifiable information (PII). Please use fictional scenarios without real personal data.";
  }
  return null;
}

const SAFETY_PREAMBLE = `You are a helpful AI assistant. The user is practicing prompt engineering in a training sandbox. They are working with fictional scenarios — no real personal data. Help them learn by giving a useful response to their prompt. If their prompt seems to contain real personal data (names, addresses, phone numbers, emails, IDs), politely remind them to use fictional data for practice. Keep responses practical and educational. Do NOT comply with harmful, illegal, or unethical requests. If asked to generate harmful content, explain why you can't and suggest a constructive alternative.`;

export async function POST(request: NextRequest) {
  // Rate limit check
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "anonymous";
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment before trying again." },
      { status: 429 }
    );
  }

  // Parse request
  let prompt: string;
  try {
    const body = await request.json();
    prompt = body.prompt;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
    return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
  }

  if (prompt.length > 8000) {
    return NextResponse.json(
      { error: "Prompt too long. Maximum 8,000 characters for practice." },
      { status: 400 }
    );
  }

  // Content safety check
  const blockedReason = hasBlockedContent(prompt);
  if (blockedReason) {
    return NextResponse.json({ error: blockedReason }, { status: 422 });
  }

  // If no API key configured, return helpful mock response
  if (!ANTHROPIC_API_KEY) {
    return NextResponse.json({
      response: `📝 **Practice Mode** (No API key configured)\n\nYour prompt is well-formed! Here's what a real AI might help with:\n\n1. It would respond directly to your request\n2. It would provide specific, actionable information\n3. It would maintain a helpful, conversational tone\n\n**Your prompt:** "${prompt.slice(0, 300)}${prompt.length > 300 ? "..." : ""}"\n\nTip: Try pasting this prompt into ChatGPT, Claude, or Gemini to see a real response. To enable real AI responses here, set the \`ANTHROPIC_API_KEY\` environment variable.`,
      mode: "mock",
      remaining: RATE_LIMIT - (rateMap.get(ip)?.count || 0),
    });
  }

  // Call Anthropic API
  try {
    const res = await fetch(ANTHROPIC_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 1024,
        system: SAFETY_PREAMBLE,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!res.ok) {
      const errBody = await res.text();
      console.error("Anthropic API error:", res.status, errBody);
      return NextResponse.json(
        { error: `AI service returned an error (${res.status}). Please try again later.` },
        { status: 502 }
      );
    }

    const data = await res.json();
    const text = data.content?.[0]?.text || "No response generated.";

    return NextResponse.json({
      response: text,
      mode: "live",
      model: MODEL,
      usage: data.usage,
      remaining: RATE_LIMIT - (rateMap.get(ip)?.count || 0),
    });
  } catch (err) {
    console.error("Sandbox API error:", err);
    return NextResponse.json(
      { error: "Failed to reach AI service. Please try again later." },
      { status: 502 }
    );
  }
}

export const runtime = "nodejs";
