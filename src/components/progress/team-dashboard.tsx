"use client";

import { useProgress } from "@/hooks/use-progress";
import { modules } from "@/data/modules";
import { scenarios } from "@/data/scenarios";
import { badges } from "@/data/badges";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import {
  Users,
  BookOpen,
  Trophy,
  TrendingUp,
  Target,
  Zap,
  BarChart3,
} from "lucide-react";

// Mock team data — replace with real API call
const MOCK_TEAM = [
  { id: "1", name: "Alice Chen", lessonsCompleted: 24, scenariosDone: 8, badgesEarned: 3, lastActive: "2026-07-03", progress: 72 },
  { id: "2", name: "Ben Okonkwo", lessonsCompleted: 18, scenariosDone: 5, badgesEarned: 2, lastActive: "2026-07-04", progress: 55 },
  { id: "3", name: "Carla Rossi", lessonsCompleted: 32, scenariosDone: 12, badgesEarned: 5, lastActive: "2026-07-04", progress: 94 },
  { id: "4", name: "Dev Patel", lessonsCompleted: 6, scenariosDone: 1, badgesEarned: 1, lastActive: "2026-06-28", progress: 18 },
  { id: "5", name: "Emma Wilson", lessonsCompleted: 15, scenariosDone: 4, badgesEarned: 2, lastActive: "2026-07-02", progress: 45 },
];

const totalLessons = modules.reduce((sum, m) => sum + m.lessons.filter((l) => l.content.length > 0).length, 0);

export function TeamDashboard() {
  const { progress } = useProgress();

  const avgProgress = Math.round(
    MOCK_TEAM.reduce((s, m) => s + m.progress, 0) / MOCK_TEAM.length
  );
  const totalCompleted = MOCK_TEAM.reduce((s, m) => s + m.lessonsCompleted, 0);
  const totalBadges = MOCK_TEAM.reduce((s, m) => s + m.badgesEarned, 0);
  const activeThisWeek = MOCK_TEAM.filter((m) => {
    const d = new Date(m.lastActive);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return d >= weekAgo;
  }).length;

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <AnimatedEntry>
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-3">Admin Dashboard</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Team Training Overview</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Monitor learner progress, completion rates, and engagement across your organisation.
          </p>
        </div>
      </AnimatedEntry>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { icon: Users, label: "Team Members", value: String(MOCK_TEAM.length), sub: `${activeThisWeek} active this week` },
          { icon: BarChart3, label: "Avg Progress", value: `${avgProgress}%`, sub: `Across all learners` },
          { icon: BookOpen, label: "Lessons Done", value: String(totalCompleted), sub: `${totalLessons} total available` },
          { icon: Trophy, label: "Badges Earned", value: String(totalBadges), sub: `${badges.length} available` },
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

      {/* Team table */}
      <AnimatedEntry delay={0.15}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" /> Learner Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b text-left">
                    <th className="py-3 pr-4 font-semibold">Name</th>
                    <th className="py-3 px-4 font-semibold">Progress</th>
                    <th className="py-3 px-4 font-semibold hidden sm:table-cell">Lessons</th>
                    <th className="py-3 px-4 font-semibold hidden sm:table-cell">Scenarios</th>
                    <th className="py-3 px-4 font-semibold">Badges</th>
                    <th className="py-3 pl-4 font-semibold hidden md:table-cell">Last Active</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_TEAM.map((member) => (
                    <tr key={member.id} className="border-b">
                      <td className="py-3 pr-4 font-medium">{member.name}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Progress value={member.progress} className="w-20" />
                          <span className="text-xs text-muted-foreground">{member.progress}%</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-muted-foreground hidden sm:table-cell">{member.lessonsCompleted}</td>
                      <td className="py-3 px-4 text-muted-foreground hidden sm:table-cell">{member.scenariosDone}</td>
                      <td className="py-3 px-4">{member.badgesEarned}/{badges.length}</td>
                      <td className="py-3 pl-4 text-muted-foreground hidden md:table-cell">{member.lastActive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </AnimatedEntry>

      {/* Badge distribution */}
      <AnimatedEntry delay={0.2}>
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-500" /> Badge Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {badges.map((badge) => {
                const count = MOCK_TEAM.filter((m) => m.badgesEarned >= badges.indexOf(badge) + 1).length;
                return (
                  <div key={badge.id} className="text-center p-3 rounded-xl bg-muted/30">
                    <p className="text-2xl mb-1">{badge.icon}</p>
                    <p className="text-sm font-medium">{badge.name}</p>
                    <p className="text-xs text-muted-foreground">{count} of {MOCK_TEAM.length} earned</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </AnimatedEntry>
    </div>
  );
}
