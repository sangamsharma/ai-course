import type { Module } from "@/lib/types";

export const module16: Module = {
  id: "education-tutoring",
  slug: "education-tutoring",
  title: "Education & Tutoring",
  shortTitle: "Education & Tutoring",
  description: "Use AI as a personal tutor for any subject. Learn languages, math, science, and more at your own pace.",
  icon: "GraduationCap",
  color: "teal" as const,
  estimatedMinutes: 30,
  order: 16,
  lessons: [
    {
      id: "m16-intro",
      slug: "introduction",
      moduleId: "education-tutoring",
      title: "Introduction",
      subtitle: "Coming soon",
      order: 1,
      estimatedMinutes: 10,
      content: [],
      exercises: [],
      keyTakeaways: [],
    },
  ],
};
