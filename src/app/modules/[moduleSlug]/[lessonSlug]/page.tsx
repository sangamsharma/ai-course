import { notFound } from "next/navigation";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { EmptyState } from "@/components/shared/empty-state";
import { LessonContentRenderer } from "@/components/course/lesson-content";
import { LessonExerciseTracker } from "@/components/exercises/lesson-exercise-tracker";
import { getModule, getLesson } from "@/data/modules";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Clock, CheckCircle2, Lightbulb } from "lucide-react";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ moduleSlug: string; lessonSlug: string }>;
}) {
  const { moduleSlug, lessonSlug } = await params;
  const mod = getModule(moduleSlug);
  if (!mod) notFound();

  const lesson = getLesson(moduleSlug, lessonSlug);
  if (!lesson) notFound();

  const isStub = lesson.content.length === 0;

  // Find prev/next lesson
  const lessonIndex = mod.lessons.findIndex((l) => l.slug === lessonSlug);
  const prevLesson = lessonIndex > 0 ? mod.lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex < mod.lessons.length - 1 ? mod.lessons[lessonIndex + 1] : null;

  if (isStub) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12">
        <EmptyState
          icon="🚧"
          title="Lesson Coming Soon"
          description="This lesson is still being prepared. Check back soon!"
          action={{ label: `Back to ${mod.title}`, href: `/modules/${mod.slug}` }}
        />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Breadcrumb + Back */}
      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8 flex-wrap">
        <Link
          href={`/modules/${mod.slug}`}
          className="hover:text-foreground transition-colors flex items-center gap-1"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> {mod.title}
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{lesson.title}</span>
      </div>

      {/* Lesson Header */}
      <AnimatedEntry>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <Badge variant="secondary">
              Lesson {lesson.order} of {mod.lessons.length}
            </Badge>
            <Badge variant="outline" className="text-xs">
              <Clock className="h-3 w-3 mr-1" /> {lesson.estimatedMinutes} min
            </Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{lesson.title}</h1>
          <p className="text-lg text-muted-foreground">{lesson.subtitle}</p>
        </div>
        <Separator />
      </AnimatedEntry>

      {/* Lesson Content */}
      <AnimatedEntry delay={0.1}>
        <div className="mt-8">
          <LessonContentRenderer content={lesson.content} />
        </div>
      </AnimatedEntry>

      {/* Exercises */}
      {lesson.exercises.length > 0 && (
        <AnimatedEntry delay={0.2}>
          <div className="mt-10">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="h-5 w-5 text-amber-500" />
              <h2 className="text-2xl font-bold">Practice Exercises</h2>
            </div>
            <LessonExerciseTracker
              exercises={lesson.exercises}
              lessonId={lesson.id}
            />
          </div>
        </AnimatedEntry>
      )}

      {/* Key Takeaways */}
      {lesson.keyTakeaways.length > 0 && (
        <AnimatedEntry delay={0.3}>
          <div className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" /> Key Takeaways
            </h3>
            <ul className="space-y-2">
              {lesson.keyTakeaways.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-base">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedEntry>
      )}

      {/* Previous / Next Navigation */}
      <AnimatedEntry delay={0.4}>
        <div className="mt-12 flex items-center justify-between gap-4">
          {prevLesson ? (
            <Link
              href={`/modules/${mod.slug}/${prevLesson.slug}`}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Previous
            </Link>
          ) : (
            <div />
          )}
          {nextLesson ? (
            <Link
              href={`/modules/${mod.slug}/${nextLesson.slug}`}
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Next Lesson <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          ) : (
            <Link
              href="/modules"
              className={cn(buttonVariants({ variant: "default" }))}
            >
              Finish Module <CheckCircle2 className="ml-2 h-4 w-4" />
            </Link>
          )}
        </div>
      </AnimatedEntry>
    </div>
  );
}
