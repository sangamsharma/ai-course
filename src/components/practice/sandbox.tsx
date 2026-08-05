"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { PrivacyWarningDialog } from "@/components/shared/privacy-warning-dialog";
import { useProgress } from "@/hooks/use-progress";
import { scenarios } from "@/data/scenarios";
import { Send, Copy, Check, Shield, Sparkles, BookOpen, Loader2, AlertTriangle, Zap } from "lucide-react";

interface ApiResponse {
  response: string;
  mode: "live" | "mock";
  model?: string;
  remaining?: number;
  error?: string;
}

export function Sandbox() {
  const { progress, acknowledgePrivacy, incrementSandboxSessions } = useProgress();
  const [showPrivacy, setShowPrivacy] = useState(!progress.privacyAcknowledged);
  const [selectedScenario, setSelectedScenario] = useState<string>("");
  const [freeInput, setFreeInput] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState("");
  const [improvement, setImprovement] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [mode, setMode] = useState<"live" | "mock" | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);

  const handleAcknowledge = () => {
    acknowledgePrivacy();
    setShowPrivacy(false);
  };

  const handleSubmit = async () => {
    if (!freeInput.trim()) return;
    incrementSandboxSessions();
    setLoading(true);
    setApiError("");
    setResponse("");
    setImprovement("");

    try {
      const res = await fetch("/api/sandbox", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: freeInput }),
      });

      const data: ApiResponse = await res.json();

      if (!res.ok || data.error) {
        setApiError(data.error || `Request failed (${res.status})`);
        setLoading(false);
        return;
      }

      setResponse(data.response);
      setMode(data.mode);
      setRemaining(data.remaining ?? null);

      // Set improvement tip based on mode
      if (data.mode === "live") {
        setImprovement(
          "Real AI response from Claude. Review the output carefully — verify facts, check tone, and ensure no sensitive info was shared."
        );
      } else {
        setImprovement(
          "Tip: Your prompt should include: a clear task, context, audience/tone, format, and verification steps. The more specific you are, the better the AI's response will be."
        );
      }
    } catch {
      setApiError("Network error. Check your connection and try again.");
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFreeInput("");
    setResponse("");
    setImprovement("");
    setApiError("");
    setMode(null);
    setRemaining(null);
  };

  const handleCopy = async () => {
    if (!response) return;
    await navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <PrivacyWarningDialog open={showPrivacy} onAcknowledge={handleAcknowledge} />

      <div className="max-w-3xl mx-auto px-6 py-8">
        <AnimatedEntry>
          <div className="text-center mb-8">
            <Badge variant="secondary" className="mb-3">
              <Sparkles className="h-3.5 w-3.5 mr-1" /> Practice Sandbox
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">Safe Practice Area</h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Practice writing prompts with real AI powered by Claude.
              Use fictional scenarios — this is a safe space to learn and improve.
            </p>
            <div className="flex items-center justify-center gap-4 mt-2 text-sm text-muted-foreground">
              <span>Sessions: {progress.sandboxSessions}</span>
              {remaining !== null && (
                <span className="flex items-center gap-1">
                  <Zap className="h-3 w-3" /> {remaining} requests remaining
                </span>
              )}
            </div>
          </div>
        </AnimatedEntry>

        {/* Privacy Banner */}
        <AnimatedEntry delay={0.1}>
          <Card className="border-amber-200 bg-amber-50/50 mb-6">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-amber-900 text-sm">Privacy Reminder</p>
                  <p className="text-sm text-amber-800">
                    Do not enter passwords, ID numbers, bank details, private customer data, medical
                    records, legal documents, or confidential work information. Use fictional
                    scenarios or general descriptions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedEntry>

        {/* API Error */}
        {apiError && (
          <AnimatedEntry>
            <Card className="border-rose-200 bg-rose-50/50 mb-6">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-semibold text-rose-900 text-sm">Error</p>
                    <p className="text-sm text-rose-800">{apiError}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedEntry>
        )}

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Scenario Picker */}
          <AnimatedEntry delay={0.15}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-4 w-4" /> Pick a Scenario
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select
                  value={selectedScenario}
                  onValueChange={(v) => {
                    setSelectedScenario(v ?? "");
                    if (v) {
                      const scenario = scenarios.find((s) => s.slug === v);
                      if (scenario) {
                        setFreeInput(scenario.betterPrompt);
                      }
                    }
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a practice scenario..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Free practice (no scenario)</SelectItem>
                    {scenarios.map((s) => (
                      <SelectItem key={s.slug} value={s.slug}>
                        {s.categoryLabel}: {s.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {selectedScenario && (
                  <p className="text-xs text-muted-foreground mt-2">
                    {scenarios.find((s) => s.slug === selectedScenario)?.practiceTask}
                  </p>
                )}
              </CardContent>
            </Card>
          </AnimatedEntry>

          {/* Input */}
          <AnimatedEntry delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  Write Your Prompt
                  {mode === "live" && (
                    <Badge variant="secondary" className="text-xs">
                      <Zap className="h-3 w-3 mr-1" /> Live AI
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Describe what you want the AI to do... Use fictional details. For example: 'Write a friendly email inviting my neighbors to a block party this Saturday...'"
                  value={freeInput}
                  onChange={(e) => {
                    setFreeInput(e.target.value);
                    if (submitted) setSubmitted(false);
                  }}
                  rows={5}
                  disabled={loading}
                />
                {!submitted ? (
                  <Button onClick={handleSubmit} disabled={!freeInput.trim() || loading} className="mt-3 w-full">
                    {loading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="mr-2 h-4 w-4" />
                    )}
                    {loading ? "Getting Response..." : "Send to AI"}
                  </Button>
                ) : (
                  <Button onClick={handleReset} variant="outline" className="mt-3 w-full">
                    Try Another Prompt
                  </Button>
                )}
              </CardContent>
            </Card>
          </AnimatedEntry>
        </div>

        {/* Response */}
        {submitted && response && (
          <AnimatedEntry>
            <Card className="mt-6 border-primary/20">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {mode === "live" ? "🤖 AI Response" : "✨ Practice Response"}
                  </CardTitle>
                  {mode === "live" && (
                    <Badge variant="secondary" className="text-xs">
                      Claude
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted rounded-xl p-5">
                  <pre className="text-base whitespace-pre-wrap font-sans leading-relaxed">
                    {response}
                  </pre>
                </div>
                {improvement && (
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm font-medium text-blue-800">💡 {improvement}</p>
                  </div>
                )}
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleCopy}>
                    {copied ? (
                      <><Check className="mr-1.5 h-3.5 w-3.5" /> Copied!</>
                    ) : (
                      <><Copy className="mr-1.5 h-3.5 w-3.5" /> Copy Response</>
                    )}
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
