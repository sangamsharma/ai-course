"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { useProgress } from "@/hooks/use-progress";
import { verificationChallenges } from "@/data/verification-challenges";
import type { VerificationIssue } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Search, CheckCircle2, XCircle, Lightbulb, Trophy, ArrowRight } from "lucide-react";

const issueLabels: Record<VerificationIssue, string> = {
  "unsupported-claim": "Unsupported claim (no evidence)",
  "missing-source": "Missing source/citation",
  "hallucinated-quote": "Made-up quote",
  "unsafe-advice": "Unsafe or dangerous advice",
  "privacy-risk": "Privacy risk (asks for sensitive info)",
  "medical-overreach": "Medical advice overreach",
  "legal-overreach": "Legal advice overreach",
  "too-generic": "Too generic / no real help",
  "inappropriate-tone": "Culturally inappropriate tone",
};

export default function VerificationPage() {
  const { progress, completeChallenge, earnBadge } = useProgress();
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<Set<VerificationIssue>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<{ correct: number; total: number; missed: VerificationIssue[] } | null>(null);

  const challenge = verificationChallenges[current];
  if (!challenge) return null;

  const handleToggle = (issue: VerificationIssue) => {
    if (submitted) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(issue)) next.delete(issue);
      else next.add(issue);
      return next;
    });
  };

  const handleSubmit = () => {
    const correctSet = new Set(challenge.correctIssues);
    const found = challenge.correctIssues.filter((i) => selected.has(i));
    const missed = challenge.correctIssues.filter((i) => !selected.has(i));
    const falsePositives = [...selected].filter((i) => !correctSet.has(i));
    const totalCorrect = found.length;
    const penalty = falsePositives.length;
    const finalScore = Math.max(0, totalCorrect - penalty);

    setScore({ correct: finalScore, total: correctSet.size, missed });
    setSubmitted(true);

    if (finalScore >= correctSet.size * 0.5) {
      completeChallenge(challenge.id);
      if (progress.completedChallenges.length + 1 >= 3) {
        earnBadge("fact-checker");
      }
    }
  };

  const handleNext = () => {
    setCurrent((c) => (c + 1) % verificationChallenges.length);
    setSelected(new Set());
    setSubmitted(false);
    setScore(null);
  };

  const diffColor = { easy: "bg-emerald-100 text-emerald-700", medium: "bg-amber-100 text-amber-700", hard: "bg-rose-100 text-rose-700" };

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <AnimatedEntry>
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-3">
            <Search className="h-3.5 w-3.5 mr-1" /> Fact Check Challenge
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Spot the Issues</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Read the AI response below and check every issue you can find. You&apos;ll get scored on what you catch.
          </p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <Badge className={diffColor[challenge.difficulty]}>{challenge.difficulty}</Badge>
            <span className="text-sm text-muted-foreground">
              Challenge {current + 1} of {verificationChallenges.length}
            </span>
            {score && (
              <Badge variant="outline" className="text-xs">
                Score: {score.correct}/{score.total}
              </Badge>
            )}
          </div>
        </div>
      </AnimatedEntry>

      {/* AI Response to inspect */}
      <AnimatedEntry delay={0.1}>
        <Card className="mb-6 border-primary/20">
          <CardHeader>
            <CardTitle className="text-base">AI Response — Inspect carefully:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-xl p-5">
              <p className="text-base leading-relaxed whitespace-pre-wrap">{challenge.aiResponse}</p>
            </div>
          </CardContent>
        </Card>
      </AnimatedEntry>

      {/* Issue Checklist */}
      <AnimatedEntry delay={0.15}>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-base">Check all issues you find:</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-2">
              {(Object.entries(issueLabels) as [VerificationIssue, string][]).map(([key, label]) => {
                const isCorrect = challenge.correctIssues.includes(key);
                const isSelected = selected.has(key);
                const showResult = submitted;
                return (
                  <label
                    key={key}
                    className={cn(
                      "flex items-start gap-2 p-2 rounded-lg border cursor-pointer transition-all text-sm",
                      submitted && isCorrect && isSelected && "border-emerald-300 bg-emerald-50",
                      submitted && isCorrect && !isSelected && "border-rose-300 bg-rose-50",
                      submitted && !isCorrect && isSelected && "border-amber-300 bg-amber-50",
                      !submitted && isSelected && "border-primary/30 bg-primary/5",
                      !submitted && "hover:border-primary/20"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => handleToggle(key)}
                      disabled={submitted}
                      className="mt-0.5"
                    />
                    <span className="flex-1">{label}</span>
                    {submitted && isCorrect && isSelected && <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />}
                    {submitted && isCorrect && !isSelected && <XCircle className="h-4 w-4 text-rose-500 shrink-0" />}
                  </label>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </AnimatedEntry>

      {/* Results */}
      {submitted && score && (
        <AnimatedEntry>
          <Card className={cn("mb-6", score.correct >= challenge.correctIssues.length * 0.5 ? "border-emerald-200" : "border-rose-200")}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {score.correct >= challenge.correctIssues.length * 0.5 ? (
                  <><Trophy className="h-5 w-5 text-emerald-500" /> Well done!</>
                ) : (
                  <><Lightbulb className="h-5 w-5 text-amber-500" /> Keep practicing!</>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">{challenge.explanation}</p>
              {score.missed.length > 0 && (
                <div className="p-3 rounded-lg bg-rose-50 border border-rose-200">
                  <p className="text-sm font-medium text-rose-700">You missed:</p>
                  <ul className="text-sm text-rose-600 list-disc list-inside">
                    {score.missed.map((m) => <li key={m}>{issueLabels[m]}</li>)}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        </AnimatedEntry>
      )}

      {/* Navigation */}
      <div className="flex justify-between">
        {!submitted ? (
          <Button onClick={handleSubmit} disabled={selected.size === 0}>
            Check My Answers
          </Button>
        ) : (
          <Button onClick={handleNext}>
            Next Challenge <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
