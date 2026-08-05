"use client";

import { AnimatedEntry } from "@/components/shared/animated-entry";
import { BadgeCard } from "@/components/progress/badge-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useProgress } from "@/hooks/use-progress";
import { badges } from "@/data/badges";
import { modules } from "@/data/modules";
import { scenarios } from "@/data/scenarios";
import Link from "next/link";
import { Trophy, BookOpen, Target, Zap, ArrowRight, Sparkles, Download, FileJson, FileText } from "lucide-react";

export function ProgressDashboard() {
  const { progress, resetProgress } = useProgress();

  const totalLessons = modules.reduce((sum, m) => sum + m.lessons.filter((l) => l.content.length > 0).length, 0);
  const lessonProgress = totalLessons > 0 ? Math.round((progress.completedLessons.length / totalLessons) * 100) : 0;

  const earnedBadgeIds = new Set(progress.earnedBadges);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <AnimatedEntry>
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-3">
            <Trophy className="h-3.5 w-3.5 mr-1" /> Your Progress
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Your AI Journey</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Track what you&apos;ve learned and earned. All progress is saved on your device.
          </p>
        </div>
      </AnimatedEntry>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-4 gap-4 mb-8">
        {[
          { icon: BookOpen, label: "Lessons Done", value: `${progress.completedLessons.length}/${totalLessons}`, sub: `${lessonProgress}% complete` },
          { icon: Target, label: "Scenarios", value: String(progress.completedScenarios.length), sub: `${scenarios.length} available` },
          { icon: Zap, label: "Sandbox Uses", value: String(progress.sandboxSessions), sub: "Practice sessions" },
          { icon: Trophy, label: "Badges", value: `${progress.earnedBadges.length}/${badges.length}`, sub: "Earned" },
        ].map((stat, i) => (
          <AnimatedEntry key={stat.label} delay={i * 0.05}>
            <Card>
              <CardContent className="p-4 text-center">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary mb-2">
                  <stat.icon className="h-4 w-4" />
                </span>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                <p className="text-[10px] text-muted-foreground">{stat.sub}</p>
              </CardContent>
            </Card>
          </AnimatedEntry>
        ))}
      </div>

      {/* Overall Progress */}
      <AnimatedEntry delay={0.15}>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Overall Course Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={lessonProgress} />
            <p className="text-sm text-muted-foreground mt-2">
              {lessonProgress > 0
                ? `You've completed ${lessonProgress}% of all lessons. Keep going!`
                : "Start your first lesson to begin tracking progress."}
            </p>
          </CardContent>
        </Card>
      </AnimatedEntry>

      {/* Badges */}
      <AnimatedEntry delay={0.2}>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" /> Badges Earned
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {badges.map((badge) => (
                <BadgeCard key={badge.id} badge={badge} earned={earnedBadgeIds.has(badge.id)} />
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedEntry>

      {/* Next Steps */}
      <AnimatedEntry delay={0.25}>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/scenarios">
            <Button variant="default">
              Practice Scenarios <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/capstone">
            <Button variant="outline">
              <Sparkles className="mr-2 h-4 w-4" /> Start Capstone
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-center gap-4 mt-6">
          {/* Export buttons */}
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `ai-course-progress-${new Date().toISOString().split("T")[0]}.json`;
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              <FileJson className="mr-1.5 h-3.5 w-3.5" /> Export JSON
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                const rows = [
                  ["Metric", "Value"],
                  ["Lessons Completed", String(progress.completedLessons.length)],
                  ["Scenarios Completed", String(progress.completedScenarios.length)],
                  ["Badges Earned", String(progress.earnedBadges.length)],
                  ["Sandbox Sessions", String(progress.sandboxSessions)],
                  ["Capstone Done", progress.capstoneCompleted ? "Yes" : "No"],
                  ["Privacy Acknowledged", progress.privacyAcknowledged ? "Yes" : "No"],
                  ["Last Visited", progress.lastVisited],
                ];
                const csv = rows.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
                const blob = new Blob([csv], { type: "text/csv" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = `ai-course-progress-${new Date().toISOString().split("T")[0]}.csv`;
                a.click();
                URL.revokeObjectURL(url);
              }}
            >
              <FileText className="mr-1.5 h-3.5 w-3.5" /> Export CSV
            </Button>
          </div>
          <button onClick={resetProgress} className="text-xs text-muted-foreground hover:text-rose-500 transition-colors">
            Reset all progress
          </button>
        </div>
      </AnimatedEntry>
    </div>
  );
}
