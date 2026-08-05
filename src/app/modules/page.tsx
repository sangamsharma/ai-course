import { SectionTitle } from "@/components/shared/section-title";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { ModuleCard } from "@/components/course/module-card";
import { modules } from "@/data/modules";
import { BookOpen } from "lucide-react";

export default function ModulesPage() {
  const totalLessons = modules.reduce(
    (sum, m) => sum + (m.lessons.length > 0 ? m.lessons.length : 5),
    0
  );
  const totalMinutes = modules.reduce((sum, m) => sum + m.estimatedMinutes, 0);
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <AnimatedEntry>
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Course Curriculum</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Six hands-on modules designed for absolute beginners. Each lesson takes just 10-15 minutes.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" /> {totalLessons} lessons
            </span>
            <span>
              ~{hours > 0 ? `${hours}h ` : ""}{mins}min total
            </span>
          </div>
        </div>
      </AnimatedEntry>

      <SectionTitle title="All Modules" description="Start from the beginning or jump to what you need most." />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {modules.map((mod, i) => (
          <AnimatedEntry key={mod.slug} delay={i * 0.08}>
            <ModuleCard
              module={mod}
              totalLessons={mod.lessons.length > 0 ? mod.lessons.length : 5}
            />
          </AnimatedEntry>
        ))}
      </div>
    </div>
  );
}
