import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { getCorporateModule } from "@/data/corporate-modules";
import { cn } from "@/lib/utils";
import { moduleColorMap, moduleIconEmojis } from "@/lib/constants";
import { Clock, ArrowLeft, ArrowRight, Play } from "lucide-react";

export default async function CorporateModulePage({
  params,
}: {
  params: Promise<{ moduleSlug: string }>;
}) {
  const { moduleSlug } = await params;
  const mod = getCorporateModule(moduleSlug);

  if (!mod) notFound();

  const colors = moduleColorMap[mod.color];
  const icon = moduleIconEmojis[mod.icon] || "📚";

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/corporate"
        className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Back to corporate training
      </Link>

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
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary">
                <Clock className="h-3 w-3 mr-1" /> {mod.estimatedMinutes} minutes
              </Badge>
              <Badge variant="outline">Corporate</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-2">{mod.title}</h1>
            <p className="text-lg text-muted-foreground">{mod.description}</p>
          </div>
        </div>
      </AnimatedEntry>

      <div className="space-y-4">
        {mod.lessons.map((lesson, i) => (
          <AnimatedEntry key={lesson.slug} delay={i * 0.06}>
            <Link href={`/corporate/${mod.slug}/${lesson.slug}`} className="block">
              <Card className={cn("transition-all duration-200 hover:shadow-md", colors.border)}>
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
                        {lesson.order}
                      </span>
                      <div>
                        <CardTitle className="text-lg">{lesson.title}</CardTitle>
                        <CardDescription className="text-sm">{lesson.subtitle}</CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" /> {lesson.estimatedMinutes} min
                      </span>
                      <span className={cn("text-sm", colors.text)}>
                        <Play className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          </AnimatedEntry>
        ))}
      </div>

      <div className="mt-12 flex justify-between">
        <Link href="/corporate" className={cn(buttonVariants({ variant: "outline" }))}>
          <ArrowLeft className="mr-2 h-4 w-4" /> All Corporate Tracks
        </Link>
        {mod.lessons.length > 0 && (
          <Link
            href={`/corporate/${mod.slug}/${mod.lessons[0].slug}`}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Start Track <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
