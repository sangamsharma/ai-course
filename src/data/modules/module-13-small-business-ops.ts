import type { Module } from "@/lib/types";

export const module13: Module = {
  id: "small-business-ops",
  slug: "small-business-ops",
  title: "Small Business Operations",
  shortTitle: "Small Business Operations",
  description: "Streamline inventory, customer communication, scheduling, and basic bookkeeping with AI tools.",
  icon: "Store",
  color: "violet" as const,
  estimatedMinutes: 30,
  order: 13,
  lessons: [
    {
      id: "m13-intro",
      slug: "introduction",
      moduleId: "small-business-ops",
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
