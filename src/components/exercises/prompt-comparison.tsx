"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { scenarios } from "@/data/scenarios";
import type { Scenario } from "@/lib/types";
import { ArrowRight, Lightbulb, Eye, CheckCircle2 } from "lucide-react";

export function PromptComparison() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [userGuess, setUserGuess] = useState("");

  const scenario = scenarios[currentIndex];
  if (!scenario) return null;

  const handleNext = () => {
    setCurrentIndex((i) => (i + 1) % scenarios.length);
    setRevealed(false);
    setUserGuess("");
  };

  const improvements = [
    "Clearer task — specifies exactly what to do",
    "More context — gives the AI background information",
    "Audience/tone specified — tells AI how to communicate",
    "Output format — defines structure (bullet points, length, etc.)",
    "Safety/verification step — includes what to check",
  ];

  return (
    <div className="max-w-3xl mx-auto px-6 py-8">
      <AnimatedEntry>
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-3">🔄 Trainer</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Bad Prompt → Better Prompt</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See real examples of weak prompts and learn what makes the improved version stronger.
            Click through to train your prompting instincts.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Scenario {currentIndex + 1} of {scenarios.length}
          </p>
        </div>
      </AnimatedEntry>

      <AnimatedEntry>
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">{scenario.title}</CardTitle>
            <CardDescription>{scenario.problem}</CardDescription>
          </CardHeader>
        </Card>
      </AnimatedEntry>

      {/* Step 1: Show weak prompt */}
      <AnimatedEntry delay={0.1}>
        <Card className="mb-4 border-rose-200 bg-rose-50/50">
          <CardHeader className="pb-2">
            <CardTitle className="text-base text-rose-700">❌ Weak Prompt</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="text-base whitespace-pre-wrap font-sans text-rose-900 bg-white/50 rounded-lg p-4">
              {scenario.badPrompt}
            </pre>
            <div className="mt-4">
              <p className="text-sm font-medium text-rose-800 mb-2">What&apos;s missing? Think about it, then reveal:</p>
              <input
                type="text"
                placeholder="Type your guess... (or just click Reveal)"
                value={userGuess}
                onChange={(e) => setUserGuess(e.target.value)}
                className="w-full p-2 text-sm border rounded-lg mb-2 bg-white"
              />
              <Button onClick={() => setRevealed(true)} variant="outline" size="sm">
                <Eye className="mr-1.5 h-3.5 w-3.5" /> Reveal the Better Version
              </Button>
            </div>
          </CardContent>
        </Card>
      </AnimatedEntry>

      {/* Step 2: Show better prompt after reveal */}
      {revealed && (
        <>
          <AnimatedEntry>
            <Card className="mb-4 border-emerald-200 bg-emerald-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-emerald-700">✅ Better Prompt</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-base whitespace-pre-wrap font-sans text-emerald-900 bg-white/50 rounded-lg p-4">
                  {scenario.betterPrompt}
                </pre>
              </CardContent>
            </Card>
          </AnimatedEntry>

          <AnimatedEntry delay={0.1}>
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-blue-800 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" /> What Improved
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {improvements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-blue-900">
                      <CheckCircle2 className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedEntry>
        </>
      )}

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={handleNext}>
          Skip to Next →
        </Button>
        {revealed && (
          <Button onClick={handleNext}>
            Next Example <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
}
