import type { Module } from "@/lib/types";
import { module01 } from "./module-01-first-win";
import { module02 } from "./module-02-stay-safe";
import { module03 } from "./module-03-art-of-asking";
import { module04 } from "./module-04-everyday-tasks";
import { module05 } from "./module-05-work-with-files";
import { module06 } from "./module-06-remember-you";
import { module07 } from "./module-07-your-business";
import { module08 } from "./module-08-creative-multimodal";
import { module09 } from "./module-09-advanced-prompting";
import { moduleHealthWellness } from "./extras/module-health-wellness";
import { moduleTravelExtras } from "./extras/module-travel-extras";

/** The 9 core Levels, in sequential learning order. */
export const modules: Module[] = [
  module01,
  module02,
  module03,
  module04,
  module05,
  module06,
  module07,
  module08,
  module09,
];

/**
 * Optional, non-sequential specialist topics. Kept out of `modules` (and out of
 * `courseStats`) so the core 9-Level count and progress math stay accurate —
 * render these from a separate "More Topics" section, not the main Level grid.
 */
export const extraModules: Module[] = [moduleHealthWellness, moduleTravelExtras];

export const courseStats = {
  totalModules: modules.length,
  totalLessons: modules.reduce((sum, m) => sum + m.lessons.filter(l => l.content.length > 0).length, 0),
  totalMinutes: modules.reduce((sum, m) => sum + m.estimatedMinutes, 0),
};

export function getModule(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug) ?? extraModules.find((m) => m.slug === slug);
}

export function getLesson(moduleSlug: string, lessonSlug: string) {
  const mod = getModule(moduleSlug);
  if (!mod) return undefined;
  return mod.lessons.find((l) => l.slug === lessonSlug);
}
