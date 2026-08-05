"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { PrivacyWarningDialog } from "@/components/shared/privacy-warning-dialog";
import { useProgress } from "@/hooks/use-progress";
import { ProgressProviderWrapper } from "@/components/shared/progress-provider-wrapper";
import { Certificate } from "@/components/progress/certificate";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Trophy, ArrowRight, ArrowLeft, Shield, CheckCircle2, Lightbulb, Sparkles, Copy, Check, FileText } from "lucide-react";

const steps = [
  { num: 1, title: "Describe Your Situation", desc: "Tell us what you need help with — without any private details." },
  { num: 2, title: "Choose Your Goal", desc: "What outcome do you want from AI?" },
  { num: 3, title: "Safety Check", desc: "Identify what information is safe to share." },
  { num: 4, title: "Build Your Prompt", desc: "Create a clear, specific prompt for your situation." },
  { num: 5, title: "See AI Help", desc: "Preview what AI could produce for you." },
  { num: 6, title: "Verify Output", desc: "Check the output before using it." },
  { num: 7, title: "Action Plan", desc: "Turn the AI output into concrete next steps." },
  { num: 8, title: "Save & Reflect", desc: "Save your workflow and review what you learned." },
];

export default function CapstonePage() {
  const { progress, completeOnboarding, earnBadge, acknowledgePrivacy } = useProgress();
  const [step, setStep] = useState(1);
  const [situation, setSituation] = useState("");
  const [goal, setGoal] = useState("");
  const [safeInfo, setSafeInfo] = useState("");
  const [builtPrompt, setBuiltPrompt] = useState("");
  const [completed, setCompleted] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleStart = () => {
    if (!progress.privacyAcknowledged) {
      setShowPrivacy(true);
    }
  };

  const handleAcknowledge = () => {
    acknowledgePrivacy();
    setShowPrivacy(false);
  };

  const handleFinish = () => {
    setCompleted(true);
    earnBadge("ready-for-real-use");
    completeOnboarding(progress.onboardingAnswers || { helpNeeded: ["other"], confidence: "low", learningStyle: "doing", device: "any" });
  };

  const handleCopy = async () => {
    const workflow = `Situation: ${situation}\n\nGoal: ${goal}\n\nSafe Info: ${safeInfo}\n\nPrompt: ${builtPrompt}`;
    await navigator.clipboard.writeText(workflow);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (completed) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <AnimatedEntry>
          <div className="text-center mb-10">
            <span className="text-6xl mb-6 block">🏆</span>
            <Badge variant="secondary" className="mb-4">Capstone Complete</Badge>
            <h1 className="text-3xl font-bold mb-4">You&apos;re Ready for Real Use!</h1>
            <p className="text-lg text-muted-foreground mb-8">
              You&apos;ve completed the full AI practice journey: from learning the basics
              to applying AI to your own real-world situation. You have the skills to use AI safely, effectively, and confidently.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Link href="/progress" className={cn(buttonVariants({ variant: "default" }))}>
                <Trophy className="mr-2 h-4 w-4" /> View Your Badges
              </Link>
              <Link href="/scenarios" className={cn(buttonVariants({ variant: "outline" }))}>
                Practice More Scenarios
              </Link>
            </div>
          </div>
        </AnimatedEntry>

        {/* Certificate */}
        <AnimatedEntry delay={0.2}>
          <Certificate
            name=""
            courseName="AI for Everyone"
            completedDate={new Date().toLocaleDateString("en-AU", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
            badgeCount={progress.earnedBadges.length}
            lessonCount={progress.completedLessons.length}
          />
        </AnimatedEntry>
      </div>
    );
  }

  return (
    <>
      <PrivacyWarningDialog open={showPrivacy} onAcknowledge={handleAcknowledge} />

      <div className="max-w-2xl mx-auto px-6 py-8">
        <AnimatedEntry>
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-3">
              <Trophy className="h-3.5 w-3.5 mr-1" /> Capstone
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Bring Your Own Situation</h1>
            <p className="text-muted-foreground">
              Apply everything you&apos;ve learned to a real situation in your life.
              Follow the 8 steps to go from problem to solution — safely.
            </p>
          </div>
        </AnimatedEntry>

        {/* Step Progress */}
        <div className="flex flex-wrap gap-1 mb-8 justify-center">
          {steps.map((s) => (
            <span
              key={s.num}
              className={cn(
                "flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
                step === s.num ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
              )}
            >
              {step > s.num ? <CheckCircle2 className="h-3 w-3" /> : s.num}. {s.title}
            </span>
          ))}
        </div>

        {/* Step content */}
        {step === 1 && (
          <AnimatedEntry>
            <Card>
              <CardHeader>
                <CardTitle>Describe Your Situation</CardTitle>
                <CardDescription>What do you need AI help with? DO NOT include private details — describe in general terms.</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea rows={4} placeholder="e.g., I need to write a polite email to my child's school about an upcoming absence for a family event..."
                  value={situation} onChange={(e) => setSituation(e.target.value)} />
                <Button onClick={() => setStep(2)} disabled={!situation.trim()} className="mt-4">
                  Next <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </AnimatedEntry>
        )}

        {step === 2 && (
          <AnimatedEntry>
            <Card>
              <CardHeader><CardTitle>Choose Your Goal</CardTitle></CardHeader>
              <CardContent>
                <Textarea rows={3} placeholder="e.g., I want AI to draft the email, suggest the right tone, and help me check grammar..."
                  value={goal} onChange={(e) => setGoal(e.target.value)} />
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" onClick={() => setStep(1)}><ArrowLeft className="mr-2 h-4 w-4" /> Back</Button>
                  <Button onClick={() => setStep(3)} disabled={!goal.trim()}>Next <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedEntry>
        )}

        {step === 3 && (
          <AnimatedEntry>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5 text-rose-500" /> Safety Check</CardTitle>
                <CardDescription>List ONLY the information that is safe to share. Remove names, addresses, IDs, and anything private.</CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea rows={3} placeholder="e.g., A parent writing to a school about a planned absence. General dates. No real names or addresses."
                  value={safeInfo} onChange={(e) => setSafeInfo(e.target.value)} />
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" onClick={() => setStep(2)}><ArrowLeft className="mr-2 h-4 w-4" /> Back</Button>
                  <Button onClick={() => setStep(4)} disabled={!safeInfo.trim()}>Next <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedEntry>
        )}

        {step === 4 && (
          <AnimatedEntry>
            <Card>
              <CardHeader><CardTitle>Build Your Prompt</CardTitle></CardHeader>
              <CardContent>
                <Textarea rows={5} placeholder="Combine your situation, goal, and safe info into a clear prompt..."
                  value={builtPrompt} onChange={(e) => setBuiltPrompt(e.target.value)} />
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" onClick={() => setStep(3)}><ArrowLeft className="mr-2 h-4 w-4" /> Back</Button>
                  <Button onClick={() => setStep(5)} disabled={!builtPrompt.trim()}>Next <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedEntry>
        )}

        {step === 5 && (
          <AnimatedEntry>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Sparkles className="h-5 w-5 text-primary" /> AI Response Preview</CardTitle>
                <CardDescription>This is a preview of what your prompt could produce. In real life, paste this prompt into ChatGPT, Claude, or Gemini.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-xl p-5">
                  <p className="text-base leading-relaxed">Your prompt will generate a personalized response based on the situation you described. When you use a real AI tool, the response will be tailored to your specific words and context.</p>
                  <p className="text-sm text-muted-foreground mt-3">Try pasting your prompt into an AI tool now, or continue to verify and plan.</p>
                </div>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" onClick={() => setStep(4)}><ArrowLeft className="mr-2 h-4 w-4" /> Back</Button>
                  <Button onClick={() => setStep(6)}>Next <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedEntry>
        )}

        {step === 6 && (
          <AnimatedEntry>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-500" /> Verify Before Using</CardTitle>
                <CardDescription>Before you use any AI output, go through this checklist.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    "Does the AI output include any made-up facts, numbers, or quotes?",
                    "Did I accidentally include any private or sensitive information?",
                    "Does the tone match my situation and audience?",
                    "Would I feel comfortable if someone else read this?",
                    "Have I verified any specific claims with a trusted source?",
                  ].map((q, i) => (
                    <label key={i} className="flex items-start gap-2 text-sm cursor-pointer">
                      <input type="checkbox" className="mt-0.5" />
                      <span>{q}</span>
                    </label>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" onClick={() => setStep(5)}><ArrowLeft className="mr-2 h-4 w-4" /> Back</Button>
                  <Button onClick={() => setStep(7)}>Next <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedEntry>
        )}

        {step === 7 && (
          <AnimatedEntry>
            <Card>
              <CardHeader><CardTitle>Action Plan</CardTitle></CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Save your complete workflow so you can reuse it.</p>
                <pre className="bg-muted rounded-lg p-4 text-sm whitespace-pre-wrap font-sans leading-relaxed">
                  Situation: {situation}{"\n\n"}Goal: {goal}{"\n\n"}Safe Info: {safeInfo}{"\n\n"}Prompt: {builtPrompt}
                </pre>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" onClick={() => setStep(6)}><ArrowLeft className="mr-2 h-4 w-4" /> Back</Button>
                  <Button variant="outline" size="sm" onClick={handleCopy}>
                    {copied ? <><Check className="mr-1.5 h-3.5 w-3.5" /> Copied!</> : <><Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Workflow</>}
                  </Button>
                  <Button onClick={() => setStep(8)}>Next <ArrowRight className="ml-2 h-4 w-4" /></Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedEntry>
        )}

        {step === 8 && (
          <AnimatedEntry>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Trophy className="h-5 w-5 text-amber-500" /> Save & Finish</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <Lightbulb className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-amber-800">What did you learn from this process? You now have a reusable workflow for any future AI task: describe → goal → safety → prompt → verify → act.</p>
                  </div>
                  <Button onClick={handleFinish} className="w-full">
                    <Trophy className="mr-2 h-4 w-4" /> Complete Capstone & Earn Badge
                  </Button>
                  <Button variant="outline" onClick={() => setStep(7)} className="w-full">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
                  </Button>
                </div>
              </CardContent>
            </Card>
          </AnimatedEntry>
        )}
      </div>
    </>
  );
}
