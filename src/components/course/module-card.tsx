import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress, ProgressIndicator, ProgressTrack } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import type { Module } from "@/lib/types";
import { moduleColorMap, moduleIcons } from "@/lib/constants";
import {
  Sparkles,
  Clock,
  BookOpen,
} from "lucide-react";

interface ModuleCardProps {
  module: Module;
  progress?: number; // 0-100
  completedLessons?: number;
  totalLessons?: number;
}

export function ModuleCard({ module, progress = 0, completedLessons, totalLessons }: ModuleCardProps) {
  const colors = moduleColorMap[module.color];
  const Icon = moduleIcons[module.icon] || Sparkles;
  const lessonCount = totalLessons ?? module.lessons.length;
  const isStub = module.lessons.length === 0;

  return (
    <Link href={`/modules/${module.slug}`} className="group block">
      <Card
        className={cn(
          "h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          colors.border,
          isStub && "opacity-60"
        )}
      >
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <span
              className={cn(
                "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                colors.bg,
                colors.text
              )}
            >
              <Icon className="h-6 w-6" />
            </span>
            <div className="flex gap-1.5 flex-wrap justify-end">
              {isStub ? (
                <Badge variant="outline">Coming Soon</Badge>
              ) : (
                <Badge variant="secondary" className="text-xs">
                  <Clock className="h-3 w-3 mr-1" />
                  {module.estimatedMinutes} min
                </Badge>
              )}
            </div>
          </div>
          <CardTitle className="text-xl mt-3 group-hover:text-primary transition-colors">
            {module.title}
          </CardTitle>
          <CardDescription className="text-base">{module.description}</CardDescription>
        </CardHeader>

        <CardContent>
          {/* Progress bar */}
          {!isStub && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">
                  {completedLessons !== undefined ? (
                    <>{completedLessons} of {lessonCount} lessons</>
                  ) : (
                    <>{lessonCount} lessons</>
                  )}
                </span>
                {progress > 0 && (
                  <span className={cn("font-semibold", colors.text)}>{Math.round(progress)}%</span>
                )}
              </div>
              <Progress value={progress}>
                <ProgressTrack className="h-2">
                  <ProgressIndicator className={colors.progress} />
                </ProgressTrack>
              </Progress>
            </div>
          )}
          {isStub && (
            <p className="text-sm text-muted-foreground italic">
              Content coming soon — check back later!
            </p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
}
