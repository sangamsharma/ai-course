"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TipBox } from "@/components/shared/tip-box";
import { PrivacyWarningDialog } from "@/components/shared/privacy-warning-dialog";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { useProgress } from "@/hooks/use-progress";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { Scenario } from "@/lib/types";
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  Copy,
  Play,
  Shield,
  FileText,
  Check,
} from "lucide-react";

interface ScenarioDetailProps {
  scenario: Scenario;
}

export function ScenarioDetail({ scenario }: ScenarioDetailProps) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const { progress, completeScenario, acknowledgePrivacy } = useProgress();
  const isCompleted = progress.completedScenarios.includes(scenario.id);

  const handleStartPractice = () => {
    if (!progress.privacyAcknowledged) {
      setShowPrivacy(true);
    }
  };

  const handleAcknowledge = () => {
    setShowPrivacy(false);
    completeScenario(scenario.id);
  };

  return (
    <>
      <PrivacyWarningDialog open={showPrivacy} onAcknowledge={handleAcknowledge} />

      <div className="max-w-3xl mx-auto px-6 py-8">
        <Link
          href="/scenarios"
          className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to scenarios
        </Link>

        <AnimatedEntry>
          <div className="flex items-start gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{scenario.categoryLabel}</Badge>
                <Badge variant="outline">{scenario.difficulty}</Badge>
                {isCompleted && (
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                    <CheckCircle2 className="h-3 w-3 mr-1" /> Completed
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold">{scenario.title}</h1>
            </div>
          </div>
        </AnimatedEntry>

        {/* Problem */}
        <AnimatedEntry delay={0.1}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" /> The Situation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed">{scenario.problem}</p>
            </CardContent>
          </Card>
        </AnimatedEntry>

        {/* Fictional Data */}
        <AnimatedEntry delay={0.15}>
          <Card className="mb-6 bg-muted/30">
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500" /> Fictional Data You Can Use
              </CardTitle>
              <CardDescription>Practice with this data — no real information needed</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed">{scenario.fictionalData}</p>
            </CardContent>
          </Card>
        </AnimatedEntry>

        {/* Bad vs Better Prompt */}
        <AnimatedEntry delay={0.2}>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <Card className="border-rose-200 bg-rose-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-rose-700">❌ Weak Prompt</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm whitespace-pre-wrap font-sans text-rose-900">{scenario.badPrompt}</pre>
              </CardContent>
            </Card>
            <Card className="border-emerald-200 bg-emerald-50/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-base text-emerald-700">✅ Better Prompt</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-sm whitespace-pre-wrap font-sans text-emerald-900">{scenario.betterPrompt}</pre>
              </CardContent>
            </Card>
          </div>
        </AnimatedEntry>

        {/* Practice Task */}
        <AnimatedEntry delay={0.25}>
          <Card className="mb-6 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Play className="h-5 w-5 text-primary" /> Your Turn
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-base">{scenario.practiceTask}</p>
              <div className="flex gap-3">
                <Link
                  href="/playground"
                  className={cn(buttonVariants({ variant: "default" }))}
                  onClick={handleStartPractice}
                >
                  Try in Sandbox <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
                <Link
                  href="/prompt-builder"
                  className={cn(buttonVariants({ variant: "outline" }))}
                >
                  Open Prompt Builder
                </Link>
              </div>
            </CardContent>
          </Card>
        </AnimatedEntry>

        {/* Verification Checklist */}
        <AnimatedEntry delay={0.3}>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" /> Verify Your Prompt
              </CardTitle>
              <CardDescription>Check these before using your prompt for real</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {scenario.verificationChecklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimatedEntry>

        {/* Privacy Warning */}
        <AnimatedEntry delay={0.35}>
          <TipBox variant="warning" title="Privacy Reminder">
            {scenario.privacyWarning}
          </TipBox>
        </AnimatedEntry>

        {/* Transfer Template */}
        <AnimatedEntry delay={0.4}>
          <Card className="mb-6">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Copy className="h-5 w-5 text-primary" /> Reuse This Pattern
                  </CardTitle>
                  <CardDescription>Copy this template and fill in your own details next time</CardDescription>
                </div>
                <CopyButton text={scenario.transferTemplate} />
              </div>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted rounded-lg p-4 text-sm whitespace-pre-wrap font-sans leading-relaxed">
                {scenario.transferTemplate}
              </pre>
            </CardContent>
          </Card>
        </AnimatedEntry>

        {/* Reflection */}
        <AnimatedEntry delay={0.45}>
          <Card className="border-amber-200 bg-amber-50/50">
            <CardHeader>
              <CardTitle className="text-base text-amber-800 flex items-center gap-2">
                <Lightbulb className="h-4 w-4" /> Reflection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-amber-900">{scenario.reflectionQuestion}</p>
            </CardContent>
          </Card>
        </AnimatedEntry>
      </div>
    </>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleCopy}
      className="shrink-0"
      aria-label={copied ? "Copied" : "Copy to clipboard"}
    >
      {copied ? (
        <Check className="h-4 w-4 text-emerald-500" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  );
}
