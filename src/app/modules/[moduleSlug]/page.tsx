import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { EmptyState } from "@/components/shared/empty-state";
import { getModule } from "@/data/modules";
import { cn } from "@/lib/utils";
import { moduleColorMap, moduleIconEmojis } from "@/lib/constants";
import { Clock, ArrowLeft, ArrowRight, Play, Sparkles } from "lucide-react";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ moduleSlug: string }>;
}) {
  const { moduleSlug } = await params;
  const mod = getModule(moduleSlug);

  if (!mod) notFound();

  const colors = moduleColorMap[mod.color];
  const icon = moduleIconEmojis[mod.icon] || "📚";
  const isStub = mod.lessons.length === 0;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Link */}
      <Link
        href="/modules"
        className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Back to all modules
      </Link>

      {/* Module Header */}
      <AnimatedEntry>
        <div className="flex items-start gap-5 mb-8">
          <span
            className={cn(
              "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl",
              colors.light
            )}
          >
            {icon}
          </span>
          <div>
            <Badge variant="secondary" className="mb-2">
              <Clock className="h-3 w-3 mr-1" /> {mod.estimatedMinutes} minutes
            </Badge>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{mod.title}</h1>
            <p className="text-lg text-muted-foreground">{mod.description}</p>
          </div>
        </div>
      </AnimatedEntry>

      {/* Lessons List */}
      {isStub ? (
        <EmptyState
          icon="🚧"
          title="Coming Soon"
          description="This module is being written. Check back soon for lessons!"
          action={{ label: "Go to Module 1", href: "/modules/ai-made-simple" }}
        />
      ) : (
        <div className="space-y-4">
          {mod.lessons.map((lesson, i) => {
            const hasContent = lesson.content.length > 0;
            return (
              <AnimatedEntry key={lesson.slug} delay={i * 0.06}>
                <Link
                  href={hasContent ? `/modules/${mod.slug}/${lesson.slug}` : "#"}
                  className={cn(
                    "block",
                    !hasContent && "pointer-events-none"
                  )}
                >
                  <Card
                    className={cn(
                      "transition-all duration-200 hover:shadow-md",
                      colors.border,
                      !hasContent && "opacity-50"
                    )}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <span
                            className={cn(
                              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                              colors.light,
                              colors.text
                            )}
                          >
                            {hasContent ? lesson.order : "—"}
                          </span>
                          <div>
                            <CardTitle className="text-lg">
                              {lesson.title}
                              {!hasContent && (
                                <Badge variant="outline" className="ml-2 align-middle">
                                  Coming Soon
                                </Badge>
                              )}
                            </CardTitle>
                            <CardDescription className="text-sm">
                              {hasContent ? lesson.subtitle : "Content coming soon"}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 shrink-0">
                          {hasContent && (
                            <>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" /> {lesson.estimatedMinutes} min
                              </span>
                              <span className={cn("text-sm", colors.text)}>
                                <Play className="h-4 w-4" />
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </Link>
              </AnimatedEntry>
            );
          })}
        </div>
      )}

      {/* Navigation */}
      <div className="mt-12 flex justify-between">
        <Link
          href="/modules"
          className={cn(buttonVariants({ variant: "outline" }))}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> All Modules
        </Link>
        {mod.lessons.length > 0 && mod.lessons[0].content.length > 0 && (
          <Link
            href={`/modules/${mod.slug}/${mod.lessons[0].slug}`}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Start Module <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
