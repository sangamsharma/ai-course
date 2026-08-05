"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, XCircle, Lightbulb, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuizProps {
  question: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  explanation: string;
  allowRetry?: boolean;
  onComplete?: () => void;
}

export function Quiz({
  question,
  options,
  explanation,
  allowRetry = true,
  onComplete,
}: QuizProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (!selectedId) return;
    const option = options.find((o) => o.id === selectedId);
    const correct = option?.isCorrect ?? false;
    setIsCorrect(correct);
    setSubmitted(true);
    if (correct) onComplete?.();
  };

  const handleRetry = () => {
    setSelectedId(null);
    setSubmitted(false);
    setIsCorrect(false);
  };

  return (
    <Card className={cn("my-8", isCorrect ? "border-emerald-200" : "border-primary/20")}>
      <CardHeader>
        <div className="flex items-center gap-2 mb-1">
          <Badge variant="secondary">📝 Quiz</Badge>
          {submitted && (
            <Badge
              variant="outline"
              className={cn(isCorrect ? "border-emerald-300 text-emerald-700" : "border-rose-300 text-rose-700")}
            >
              {isCorrect ? "Correct!" : "Not quite"}
            </Badge>
          )}
        </div>
        <CardTitle className="text-lg">{question}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <RadioGroup value={selectedId ?? ""} onValueChange={setSelectedId} disabled={submitted}>
          {options.map((option) => {
            const isSelected = selectedId === option.id;
            const showCorrect = submitted && option.isCorrect;
            const showWrong = submitted && isSelected && !option.isCorrect;

            return (
              <label
                key={option.id}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all",
                  showCorrect && "border-emerald-300 bg-emerald-50",
                  showWrong && "border-rose-300 bg-rose-50",
                  !submitted && isSelected && "border-primary/30 bg-primary/5",
                  !submitted && "hover:border-primary/20 hover:bg-muted/50",
                  submitted && !showCorrect && !showWrong && "opacity-60"
                )}
              >
                <RadioGroupItem value={option.id} id={option.id} />
                <span className="text-base flex-1">{option.text}</span>
                {showCorrect && <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />}
                {showWrong && <XCircle className="h-5 w-5 text-rose-500 shrink-0" />}
              </label>
            );
          })}
        </RadioGroup>

        {!submitted ? (
          <Button onClick={handleSubmit} disabled={!selectedId} className="w-full sm:w-auto">
            Check Answer
          </Button>
        ) : (
          <div className="space-y-3 animate-in fade-in-50">
            <div className="flex items-start gap-3 rounded-lg bg-blue-50 border border-blue-200 p-4">
              <Lightbulb className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-blue-900 text-base mb-1">Explanation</p>
                <p className="text-blue-800 text-base">{explanation}</p>
              </div>
            </div>
            {!isCorrect && allowRetry && (
              <Button variant="outline" size="sm" onClick={handleRetry}>
                <RotateCcw className="mr-1.5 h-3.5 w-3.5" /> Try Again
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
