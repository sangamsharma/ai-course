import type { Module } from "@/lib/types";
import { microsoftCopilotModule } from "./microsoft-copilot";

/**
 * Corporate training tracks — separate from the free/individual course in
 * src/data/modules/. Reachable only through the gated /corporate route tree
 * (see src/app/corporate/layout.tsx). More tracks (Claude Code, Codex) land
 * here later.
 */
export const corporateModules: Module[] = [microsoftCopilotModule];

export function getCorporateModule(slug: string): Module | undefined {
  return corporateModules.find((m) => m.slug === slug);
}

export function getCorporateLesson(moduleSlug: string, lessonSlug: string) {
  const mod = getCorporateModule(moduleSlug);
  if (!mod) return undefined;
  return mod.lessons.find((l) => l.slug === lessonSlug);
}
