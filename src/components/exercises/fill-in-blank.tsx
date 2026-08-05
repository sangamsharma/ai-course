"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface FillInBlankProps {
  title: string;
  instruction: string;
  template: string;
  blanks: { key: string; answer: string; hint?: string }[];
  onComplete?: () => void;
}

export function FillInBlank({
  title,
  instruction,
  template,
  blanks,
  onComplete,
}: FillInBlankProps) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showHints, setShowHints] = useState<Record<string, boolean>>({});

  const allCorrect = blanks.every(
    (b) => answers[b.key]?.trim().toLowerCase() === b.answer.toLowerCase()
  );

  const handleSubmit = () => {
    setSubmitted(true);
    if (allCorrect) onComplete?.();
  };

  // Render template with input placeholders
  const renderTemplate = () => {
    const parts = template.split(/\{\{(\w+)\}\}/g);
    return parts.map((part, i) => {
      if (i % 2 === 1) {
        // This is a blank key
        const blank = blanks.find((b) => b.key === part);
        if (!blank) return <span key={i}>[unknown]</span>;

        const userAnswer = answers[part] || "";
        const isCorrect =
          submitted &&
          userAnswer.trim().toLowerCase() === blank.answer.toLowerCase();

        return (
          <span key={i} className="inline-flex items-center gap-1 mx-1">
            {submitted ? (
              <span
                className={cn(
                  "inline-flex items-center gap-1 px-2 py-0.5 rounded font-medium border",
                  isCorrect
                    ? "bg-emerald-50 border-emerald-300 text-emerald-700"
                    : "bg-rose-50 border-rose-300 text-rose-700"
                )}
              >
                {userAnswer || "(empty)"}
                {isCorrect ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                ) : (
                  <>
                    <XCircle className="h-4 w-4 text-rose-500" />
                    <span className="text-xs text-muted-foreground ml-1">
                      answer: {blank.answer}
                    </span>
                  </>
                )}
              </span>
            ) : (
              <Input
                value={userAnswer}
                onChange={(e) =>
                  setAnswers((prev) => ({ ...prev, [part]: e.target.value }))
                }
                placeholder={showHints[part] ? blank.hint : "..."}
                className="inline-block w-32 h-8 text-sm align-baseline"
              />
            )}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  return (
    <Card className="my-8">
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="secondary">✍️ Fill in the Blanks</Badge>
          {submitted && (
            <Badge
              variant="outline"
              className={
                allCorrect
                  ? "border-emerald-300 text-emerald-700"
                  : "border-rose-300 text-rose-700"
              }
            >
              {allCorrect ? "All Correct!" : "Keep trying"}
            </Badge>
          )}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <p className="text-muted-foreground text-base">{instruction}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-muted/50 rounded-xl p-5 border leading-relaxed text-lg">
          {renderTemplate()}
        </div>

        {!submitted && (
          <div className="flex gap-2">
            <Button onClick={handleSubmit} disabled={blanks.some((b) => !answers[b.key])}>
              Check Answers
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                const newHints: Record<string, boolean> = {};
                blanks.forEach((b) => {
                  newHints[b.key] = !showHints[b.key];
                });
                setShowHints(newHints);
              }}
            >
              <Eye className="mr-1.5 h-3.5 w-3.5" />{" "}
              {Object.values(showHints).some(Boolean) ? "Hide Hints" : "Show Hints"}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
