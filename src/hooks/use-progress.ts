"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import type {
  UserProgressExtended,
  OnboardingAnswers,
  BadgeId,
} from "@/lib/types";

const STORAGE_KEY = "ai4e-progress";

const DEFAULT_PROGRESS: UserProgressExtended = {
  completedLessons: [],
  quizScores: {},
  completedExercises: [],
  lastVisited: new Date().toISOString(),
  onboardingCompleted: false,
  earnedBadges: [],
  completedScenarios: [],
  completedChallenges: [],
  sandboxSessions: 0,
  capstoneCompleted: false,
  privacyAcknowledged: false,
  lowBandwidth: false,
};

interface ProgressContextType {
  progress: UserProgressExtended;
  isOnboarded: boolean;
  markLessonComplete: (lessonId: string) => void;
  markExerciseComplete: (exerciseId: string, score?: number) => void;
  completeOnboarding: (answers: OnboardingAnswers) => void;
  completeScenario: (scenarioId: string) => void;
  completeChallenge: (challengeId: string) => void;
  incrementSandboxSessions: () => void;
  acknowledgePrivacy: () => void;
  setLowBandwidth: (value: boolean) => void;
  earnBadge: (badgeId: BadgeId) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressContextType | null>(null);

function loadProgress(): UserProgressExtended {
  if (typeof window === "undefined") return { ...DEFAULT_PROGRESS };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROGRESS };
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_PROGRESS, ...parsed };
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<UserProgressExtended>(DEFAULT_PROGRESS);

  // Hydrate from localStorage on mount
  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  // Persist to localStorage on change
  const persist = useCallback((next: UserProgressExtended) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...next, lastVisited: new Date().toISOString() }));
      } catch {
        // localStorage full or unavailable — silently degrade
      }
    }
  }, []);

  const update = useCallback(
    (patch: Partial<UserProgressExtended>) => {
      setProgress((prev) => {
        const next = { ...prev, ...patch, lastVisited: new Date().toISOString() };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const markLessonComplete = useCallback(
    (lessonId: string) => {
      update({
        completedLessons: progress.completedLessons.includes(lessonId)
          ? progress.completedLessons
          : [...progress.completedLessons, lessonId],
      });
    },
    [progress.completedLessons, update]
  );

  const markExerciseComplete = useCallback(
    (exerciseId: string, score?: number) => {
      const nextCompleted = progress.completedExercises.includes(exerciseId)
        ? progress.completedExercises
        : [...progress.completedExercises, exerciseId];
      const nextScores = score !== undefined
        ? { ...progress.quizScores, [exerciseId]: score }
        : progress.quizScores;
      update({ completedExercises: nextCompleted, quizScores: nextScores });
    },
    [progress.completedExercises, progress.quizScores, update]
  );

  const completeOnboarding = useCallback(
    (answers: OnboardingAnswers) => {
      update({ onboardingCompleted: true, onboardingAnswers: answers });
    },
    [update]
  );

  const completeScenario = useCallback(
    (scenarioId: string) => {
      if (progress.completedScenarios.includes(scenarioId)) return;
      update({ completedScenarios: [...progress.completedScenarios, scenarioId] });
    },
    [progress.completedScenarios, update]
  );

  const completeChallenge = useCallback(
    (challengeId: string) => {
      if (progress.completedChallenges.includes(challengeId)) return;
      update({ completedChallenges: [...progress.completedChallenges, challengeId] });
    },
    [progress.completedChallenges, update]
  );

  const incrementSandboxSessions = useCallback(() => {
    update({ sandboxSessions: progress.sandboxSessions + 1 });
  }, [progress.sandboxSessions, update]);

  const acknowledgePrivacy = useCallback(() => {
    update({ privacyAcknowledged: true });
  }, [update]);

  const setLowBandwidth = useCallback(
    (value: boolean) => {
      update({ lowBandwidth: value });
    },
    [update]
  );

  const earnBadge = useCallback(
    (badgeId: BadgeId) => {
      if (progress.earnedBadges.includes(badgeId)) return;
      update({ earnedBadges: [...progress.earnedBadges, badgeId] });
    },
    [progress.earnedBadges, update]
  );

  const resetProgress = useCallback(() => {
    const fresh = { ...DEFAULT_PROGRESS };
    setProgress(fresh);
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  const isOnboarded = progress.onboardingCompleted;

  const ctxValue: ProgressContextType = {
    progress,
    isOnboarded,
    markLessonComplete,
    markExerciseComplete,
    completeOnboarding,
    completeScenario,
    completeChallenge,
    incrementSandboxSessions,
    acknowledgePrivacy,
    setLowBandwidth,
    earnBadge,
    resetProgress,
  };

  return ProgressContext.Provider({
    value: ctxValue,
    children,
  });
}

function getDefaultProgress(): ProgressContextType {
  const noop = () => {};
  return {
    progress: { ...DEFAULT_PROGRESS },
    isOnboarded: false,
    markLessonComplete: noop,
    markExerciseComplete: noop,
    completeOnboarding: noop,
    completeScenario: noop,
    completeChallenge: noop,
    incrementSandboxSessions: noop,
    acknowledgePrivacy: noop,
    setLowBandwidth: noop,
    earnBadge: noop,
    resetProgress: noop,
  };
}

export function useProgress(): ProgressContextType {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    if (typeof window !== "undefined") {
      console.warn("useProgress used outside ProgressProvider — using default (no-op) state");
    }
    return getDefaultProgress();
  }
  return ctx;
}
