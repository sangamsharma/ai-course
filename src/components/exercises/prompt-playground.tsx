"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Lightbulb, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PromptPlaygroundProps {
  title: string;
  instruction: string;
  promptHint: string;
  sampleResponse: string;
  improvementTip: string;
  onComplete?: () => void;
}

export function PromptPlayground({
  title,
  instruction,
  promptHint,
  sampleResponse,
  improvementTip,
  onComplete,
}: PromptPlaygroundProps) {
  const [input, setInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = () => {
    if (input.trim().length > 0) {
      setSubmitted(true);
      onComplete?.();
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(sampleResponse);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="my-8 border-primary/20">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="secondary">✏️ Practice</Badge>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-muted-foreground text-base">{instruction}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Input Area */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            Write your prompt:
          </label>
          <Textarea
            placeholder={promptHint}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-[100px] text-base"
            disabled={submitted}
          />
          {!submitted && (
            <Button
              onClick={handleSubmit}
              disabled={input.trim().length === 0}
              className="w-full sm:w-auto"
            >
              <Send className="mr-2 h-4 w-4" /> Submit Your Prompt
            </Button>
          )}
        </div>

        {/* Simulated AI Response */}
        {submitted && (
          <div className="space-y-4 animate-in fade-in-50 slide-in-from-top-2">
            <div className="rounded-xl bg-muted/50 border p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                  AI
                </span>
                <span className="text-sm font-medium text-muted-foreground">
                  Here&apos;s what a good prompt might produce:
                </span>
              </div>
              <div className="text-base leading-relaxed whitespace-pre-wrap">
                {sampleResponse}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="mt-3"
                onClick={handleCopy}
              >
                {copied ? (
                  <>
                    <Check className="mr-1.5 h-3.5 w-3.5" /> Copied!
                  </>
                ) : (
                  <>
                    <Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Response
                  </>
                )}
              </Button>
            </div>

            {/* Improvement Tip */}
            <div className="flex items-start gap-3 rounded-lg bg-amber-50 border border-amber-200 p-4">
              <Lightbulb className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 text-base mb-1">
                  Improvement Tip
                </p>
                <p className="text-amber-800 text-base">{improvementTip}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
