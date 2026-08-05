"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { useProgress } from "@/hooks/use-progress";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Copy, Check, Sparkles, Play } from "lucide-react";

const fields = [
  { key: "task", label: "Task", placeholder: "What do you want the AI to do? e.g., Write an email, plan an event, explain a topic...", explanation: "The clearer your task, the more useful the response. Be specific: 'Write a thank-you email' is better than 'Help me with email.'", type: "textarea" },
  { key: "context", label: "Context", placeholder: "What background should the AI know? e.g., I'm a small business owner, this is for my team...", explanation: "Context helps the AI understand your situation. Include: who you are, what you do, and any relevant background. No need to share real names or private details.", type: "textarea" },
  { key: "audience", label: "Audience", placeholder: "Who will read or use this? e.g., my boss, my 8-year-old daughter, the general public...", explanation: "The audience determines the reading level, tone, and what to explain vs assume. A response for a child is very different from one for a CEO.", type: "text" },
  { key: "tone", label: "Tone", placeholder: "What feeling should the response have? e.g., warm and friendly, professional, casual, urgent...", explanation: "Tone is how the message 'sounds.' Professional for work, warm for friends, simple for kids. The right tone builds trust and connection.", type: "text" },
  { key: "constraints", label: "Constraints", placeholder: "Any rules or limits? e.g., under 100 words, no jargon, avoid mentioning prices...", explanation: "Constraints prevent the AI from going off-track. Tell it what NOT to do — no jargon, no emojis, stay under a word limit, avoid certain topics.", type: "textarea" },
  { key: "format", label: "Output Format", placeholder: "How should the response look? e.g., bullet points, a letter, a table, 3 paragraphs...", explanation: "The format controls the structure. Bullet points for clarity, paragraphs for flow, tables for comparison. Choosing the right format makes output immediately usable.", type: "text" },
  { key: "verify", label: "What to Verify", placeholder: "What should be fact-checked? e.g., check prices are current, verify the dates, confirm the policy...", explanation: "Always tell yourself what to verify before using AI output. This builds the verification habit — the most important safety skill.", type: "textarea" },
  { key: "exclude", label: "What NOT to Include", placeholder: "What should NOT be in the response? e.g., don't mention specific prices, don't give medical advice...", explanation: "Explicitly telling AI what to avoid prevents unwanted content. This is especially important for safety boundaries.", type: "text" },
];

export function PromptBuilderForm() {
  const [fieldValues, setFieldValues] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [buildCount, setBuildCount] = useState(0);
  const { earnBadge, completeScenario } = useProgress();

  const compiledPrompt = Object.entries(fieldValues)
    .filter(([, v]) => v.trim())
    .map(([key, value]) => {
      const field = fields.find((f) => f.key === key);
      return `${field?.label}: ${value}`;
    })
    .join("\n\n");

  const hasContent = Object.values(fieldValues).some((v) => v.trim());

  const handleCopy = async () => {
    if (!compiledPrompt) return;
    await navigator.clipboard.writeText(compiledPrompt);
    setCopied(true);
    setBuildCount((c) => {
      const next = c + 1;
      if (next >= 3) earnBadge("better-prompter");
      return next;
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <AnimatedEntry>
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-3">
            <Sparkles className="h-3.5 w-3.5 mr-1" /> Guided Builder
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Prompt Builder</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Fill in the fields below to build a clear, effective prompt.
            Each field explains why it matters — you&apos;ll learn as you build.
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Builds completed: {buildCount} / 3 for &quot;Better Prompter&quot; badge
          </p>
        </div>
      </AnimatedEntry>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Form Fields */}
        <div className="lg:col-span-3 space-y-4">
          {fields.map((field, i) => (
            <AnimatedEntry key={field.key} delay={i * 0.03}>
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{field.label}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {field.type === "textarea" ? (
                    <Textarea
                      placeholder={field.placeholder}
                      value={fieldValues[field.key] || ""}
                      onChange={(e) =>
                        setFieldValues((prev) => ({ ...prev, [field.key]: e.target.value }))
                      }
                      rows={2}
                    />
                  ) : (
                    <Input
                      placeholder={field.placeholder}
                      value={fieldValues[field.key] || ""}
                      onChange={(e) =>
                        setFieldValues((prev) => ({ ...prev, [field.key]: e.target.value }))
                      }
                    />
                  )}
                  <details className="mt-2 text-xs text-muted-foreground">
                    <summary className="cursor-pointer py-1 hover:text-foreground transition-colors">
                      Why this matters
                    </summary>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1 pl-1">
                      {field.explanation}
                    </p>
                  </details>
                </CardContent>
              </Card>
            </AnimatedEntry>
          ))}
        </div>

        {/* Live Preview */}
        <div className="lg:col-span-2">
          <div className="sticky top-20">
            <AnimatedEntry delay={0.2}>
              <Card className="border-primary/20">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" /> Your Prompt
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {hasContent ? (
                    <>
                      <pre className="bg-muted rounded-lg p-4 text-sm whitespace-pre-wrap font-sans leading-relaxed max-h-96 overflow-y-auto">
                        {compiledPrompt}
                      </pre>
                      <div className="flex gap-2">
                        <Button onClick={handleCopy} disabled={!hasContent} size="sm" className="w-full">
                          {copied ? (
                            <><Check className="mr-1.5 h-3.5 w-3.5" /> Copied!</>
                          ) : (
                            <><Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Prompt</>
                          )}
                        </Button>
                        <Link
                          href="/playground"
                          className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full")}
                        >
                          <Play className="mr-1.5 h-3.5 w-3.5" /> Test in Sandbox
                        </Link>
                      </div>
                    </>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <p className="text-sm">Start filling in fields on the left to build your prompt.</p>
                      <p className="text-xs mt-2">Your prompt will appear here in real time.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </AnimatedEntry>
          </div>
        </div>
      </div>
    </div>
  );
}
