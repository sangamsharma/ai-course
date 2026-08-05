"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { useProgress } from "@/hooks/use-progress";
import { cn } from "@/lib/utils";
import {
  helpOptions,
  confidenceOptions,
  learningStyleOptions,
  deviceOptions,
  getSuggestedRoute,
} from "@/data/onboarding";
import type { HelpNeeded, ConfidenceLevel, LearningStyle, DeviceConstraint } from "@/lib/types";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  BookOpen,
  Pen,
  Calendar,
  Briefcase,
  Palette,
  Users,
  GraduationCap,
  Smartphone,
  Monitor,
  Tablet,
  ChevronRight,
} from "lucide-react";

const TOTAL_STEPS = 4;

export function OnboardingWizard() {
  const { progress, completeOnboarding } = useProgress();
  const [step, setStep] = useState(1);
  const [helpNeeded, setHelpNeeded] = useState<HelpNeeded[]>([]);
  const [confidence, setConfidence] = useState<ConfidenceLevel | null>(null);
  const [learningStyle, setLearningStyle] = useState<LearningStyle | null>(null);
  const [device, setDevice] = useState<DeviceConstraint | null>(null);
  const [completed, setCompleted] = useState(false);

  const canNext = () => {
    if (step === 1) return helpNeeded.length > 0;
    if (step === 2) return confidence !== null;
    if (step === 3) return learningStyle !== null;
    if (step === 4) return device !== null;
    return false;
  };

  const handleFinish = () => {
    if (confidence && learningStyle && device) {
      completeOnboarding({ helpNeeded, confidence, learningStyle, device });
      setCompleted(true);
    }
  };

  // Already onboarded
  if (progress.onboardingCompleted && !completed) {
    const route = getSuggestedRoute({
      helpNeeded: progress.onboardingAnswers?.helpNeeded,
      confidence: progress.onboardingAnswers?.confidence,
    });
    return (
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        <AnimatedEntry>
          <span className="text-6xl mb-6 block">✅</span>
          <h1 className="text-3xl font-bold mb-4">You&apos;re All Set!</h1>
          <p className="text-lg text-muted-foreground mb-8">
            {route.message}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/scenarios" className={cn(buttonVariants({ variant: "default" }))}>
              Browse Scenarios →
            </Link>
            <Link href="/modules" className={cn(buttonVariants({ variant: "outline" }))}>
              Go to Course
            </Link>
          </div>
        </AnimatedEntry>
      </div>
    );
  }

  // Completion screen
  if (completed) {
    const route = getSuggestedRoute({ helpNeeded, confidence });
    return (
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        <AnimatedEntry>
          <span className="text-6xl mb-6 block">🎉</span>
          <h1 className="text-3xl font-bold mb-4">Your Path is Ready!</h1>
          <p className="text-lg text-muted-foreground mb-8">{route.message}</p>
          <div className="grid sm:grid-cols-2 gap-4 text-left mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">📚 Suggested Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  {route.suggestedModuleSlugs.map((slug) => (
                    <li key={slug}>
                      <Link href={`/modules/${slug}`} className="text-primary hover:underline flex items-center gap-1">
                        <ChevronRight className="h-3 w-3" /> {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">🎯 Suggested Scenarios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  {route.suggestedScenarios.map((slug) => (
                    <li key={slug}>
                      <Link href={`/scenarios/${slug}`} className="text-primary hover:underline flex items-center gap-1">
                        <ChevronRight className="h-3 w-3" /> {slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <Link href="/scenarios" className={cn(buttonVariants({ variant: "default" }))}>
            Start Practicing →
          </Link>
        </AnimatedEntry>
      </div>
    );
  }

  // Steps
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <AnimatedEntry>
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">
            Step {step} of {TOTAL_STEPS}
          </Badge>
          <Progress value={(step / TOTAL_STEPS) * 100} className="max-w-xs mx-auto" />
          <h1 className="text-3xl font-bold mt-4">Find Your Path</h1>
          <p className="text-muted-foreground mt-2">Tell us about yourself so we can suggest the best starting point.</p>
        </div>
      </AnimatedEntry>

      {/* Step 1: What help do you need? */}
      {step === 1 && (
        <AnimatedEntry>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">What would you like AI to help with?</CardTitle>
              <CardDescription>Select all that apply</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3">
                {helpOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() =>
                      setHelpNeeded((prev) =>
                        prev.includes(opt.value)
                          ? prev.filter((h) => h !== opt.value)
                          : [...prev, opt.value]
                      )
                    }
                    className={cn(
                      "p-4 rounded-xl border text-left transition-all",
                      helpNeeded.includes(opt.value)
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    <p className="font-medium text-sm">{opt.label}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedEntry>
      )}

      {/* Step 2: Confidence */}
      {step === 2 && (
        <AnimatedEntry>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">How confident are you with AI?</CardTitle>
              <CardDescription>Be honest — there's no wrong answer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {confidenceOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setConfidence(opt.value)}
                    className={cn(
                      "w-full p-4 rounded-xl border text-left transition-all flex items-center gap-4",
                      confidence === opt.value
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    <div>
                      <p className="font-semibold">{opt.label}</p>
                      <p className="text-sm text-muted-foreground">{opt.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedEntry>
      )}

      {/* Step 3: Learning Style */}
      {step === 3 && (
        <AnimatedEntry>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">How do you prefer to learn?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {learningStyleOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setLearningStyle(opt.value)}
                    className={cn(
                      "w-full p-4 rounded-xl border text-left transition-all flex items-center gap-4",
                      learningStyle === opt.value
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    <div>
                      <p className="font-semibold">{opt.label}</p>
                      <p className="text-sm text-muted-foreground">{opt.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedEntry>
      )}

      {/* Step 4: Device */}
      {step === 4 && (
        <AnimatedEntry>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">What device will you mostly use?</CardTitle>
              <CardDescription>This helps us optimize your experience</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {deviceOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setDevice(opt.value)}
                    className={cn(
                      "w-full p-4 rounded-xl border text-left transition-all flex items-center gap-4",
                      device === opt.value
                        ? "border-primary bg-primary/5 ring-1 ring-primary"
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    <div>
                      <p className="font-semibold">{opt.label}</p>
                      <p className="text-sm text-muted-foreground">{opt.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedEntry>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between mt-6">
        <Button
          variant="outline"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        {step < TOTAL_STEPS ? (
          <Button onClick={() => setStep((s) => s + 1)} disabled={!canNext()}>
            Next <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <Button onClick={handleFinish}>
            <Sparkles className="mr-2 h-4 w-4" /> Show My Path
          </Button>
        )}
      </div>
    </div>
  );
}
