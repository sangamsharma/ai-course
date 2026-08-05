"use client";

import type { Exercise } from "@/lib/types";
import { PromptPlayground } from "./prompt-playground";
import { Quiz } from "./quiz";
import { FillInBlank } from "./fill-in-blank";
import { BeforeAfter } from "./before-after";
import { CopyPasteTemplate } from "./copy-paste-template";

interface ExerciseContainerProps {
  exercise: Exercise;
  onComplete?: (exerciseId: string, score?: number) => void;
}

export function ExerciseContainer({ exercise, onComplete }: ExerciseContainerProps) {
  const handleComplete = () => {
    onComplete?.(exercise.id);
  };

  switch (exercise.type) {
    case "prompt-playground":
      return (
        <PromptPlayground
          title={exercise.title}
          instruction={exercise.instruction}
          promptHint={exercise.promptHint}
          sampleResponse={exercise.sampleResponse}
          improvementTip={exercise.improvementTip}
          onComplete={handleComplete}
        />
      );

    case "quiz":
      return (
        <Quiz
          question={exercise.question}
          options={exercise.options}
          explanation={exercise.explanation}
          allowRetry={exercise.allowRetry}
          onComplete={handleComplete}
        />
      );

    case "fill-in-blank":
      return (
        <FillInBlank
          title={exercise.title}
          instruction={exercise.instruction}
          template={exercise.template}
          blanks={exercise.blanks}
          onComplete={handleComplete}
        />
      );

    case "before-after":
      return (
        <BeforeAfter
          title={exercise.title}
          description={exercise.description}
          beforeContent={exercise.beforeContent}
          afterContent={exercise.afterContent}
          whatImproved={exercise.whatImproved}
        />
      );

    default:
      return null;
  }
}
