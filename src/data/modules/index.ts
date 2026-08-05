import type { Module } from "@/lib/types";
import { module01 } from "./module-01-ai-made-simple";
import { module02 } from "./module-02-art-of-asking";
import { module03 } from "./module-03-everyday-tasks";
import { module04 } from "./module-04-business";
import { module05 } from "./module-05-personal-documents";
import { module06 } from "./module-06-be-smart-safe";
import { module07 } from "./module-07-advanced-prompting";
import { module08 } from "./module-08-health-wellness";
import { module09 } from "./module-09-travel-planning";
import { module10 } from "./module-10-personal-finance";
import { module11 } from "./module-11-job-search";
import { module12 } from "./module-12-creative-projects";
import { module13 } from "./module-13-small-business-ops";
import { module14 } from "./module-14-digital-literacy";
import { module15 } from "./module-15-civic-participation";
import { module16 } from "./module-16-education-tutoring";
import { module17 } from "./module-17-legal-documents";
import { module18 } from "./module-18-senior-living";
import { module19 } from "./module-19-microsoft-copilot";

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
  module10,
  module11,
  module12,
  module13,
  module14,
  module15,
  module16,
  module17,
  module18,
  module19,
];

export const courseStats = {
  totalModules: modules.length,
  totalLessons: modules.reduce((sum, m) => sum + m.lessons.filter(l => l.content.length > 0).length, 0),
  totalMinutes: modules.reduce((sum, m) => sum + m.estimatedMinutes, 0),
};

export function getModule(slug: string): Module | undefined {
  return modules.find((m) => m.slug === slug);
}

export function getLesson(moduleSlug: string, lessonSlug: string) {
  const mod = getModule(moduleSlug);
  if (!mod) return undefined;
  return mod.lessons.find((l) => l.slug === lessonSlug);
}
