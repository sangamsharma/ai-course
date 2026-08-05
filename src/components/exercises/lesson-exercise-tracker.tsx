"use client";

import { useProgress } from "@/hooks/use-progress";
import { ExerciseContainer } from "./exercise-container";
import type { Exercise } from "@/lib/types";

interface LessonExerciseTrackerProps {
  exercises: Exercise[];
  lessonId: string;
}

export function LessonExerciseTracker({ exercises, lessonId }: LessonExerciseTrackerProps) {
  const { markExerciseComplete, markLessonComplete, progress } = useProgress();
  const completedCount = exercises.filter((e) =>
    progress.completedExercises.includes(e.id)
  ).length;

  const handleExerciseComplete = (exerciseId: string, score?: number) => {
    markExerciseComplete(exerciseId, score);
    // Auto-mark lesson complete when all exercises done
    const newCompleted = new Set([...progress.completedExercises, exerciseId]);
    const allDone = exercises.every((e) => newCompleted.has(e.id));
    if (allDone) {
      markLessonComplete(lessonId);
    }
  };

  return (
    <div className="space-y-2">
      {exercises.length > 1 && (
        <p className="text-sm text-muted-foreground mb-4">
          {completedCount} of {exercises.length} exercises completed
        </p>
      )}
      {exercises.map((exercise) => (
        <ExerciseContainer
          key={exercise.id}
          exercise={exercise}
          onComplete={handleExerciseComplete}
        />
      ))}
    </div>
  );
}
