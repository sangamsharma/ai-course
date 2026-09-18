import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { corporateModules } from "@/data/corporate-modules";
import { moduleColorMap, moduleIconEmojis } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Clock, ArrowRight, Lock } from "lucide-react";

const comingSoon = [
  { title: "Claude Code for Teams", description: "AI-powered software development workflows with Claude Code — for engineering teams." },
  { title: "Codex for Teams", description: "Using OpenAI's Codex for engineering workflows — for engineering teams." },
];

export default function CorporatePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <AnimatedEntry>
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">Corporate Training</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Team AI Training</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In-depth, tool-specific training for teams — separate from the free individual course.
            Access requires an active organization plan.
          </p>
        </div>
      </AnimatedEntry>

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {corporateModules.map((mod, i) => {
          const colors = moduleColorMap[mod.color];
          const icon = moduleIconEmojis[mod.icon] || "📚";
          return (
            <AnimatedEntry key={mod.slug} delay={i * 0.08}>
              <Link href={`/corporate/${mod.slug}`} className="block">
                <Card className={cn("h-full transition-all hover:shadow-md", colors.border)}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={cn("flex h-10 w-10 items-center justify-center rounded-xl text-xl", colors.light)}>
                        {icon}
                      </span>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" /> {mod.estimatedMinutes} min
                      </Badge>
                    </div>
                    <CardTitle>{mod.title}</CardTitle>
                    <CardDescription>{mod.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                      Open track <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </AnimatedEntry>
          );
        })}

        {comingSoon.map((track, i) => (
          <AnimatedEntry key={track.title} delay={(corporateModules.length + i) * 0.08}>
            <Card className="h-full opacity-60">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-xl">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </span>
                  <Badge variant="outline" className="text-xs">Coming soon</Badge>
                </div>
                <CardTitle>{track.title}</CardTitle>
                <CardDescription>{track.description}</CardDescription>
              </CardHeader>
            </Card>
          </AnimatedEntry>
        ))}
      </div>

      <AnimatedEntry delay={0.4}>
        <div className="text-center p-8 rounded-2xl bg-primary/5 border">
          <h2 className="text-xl font-bold mb-2">Don't have access yet?</h2>
          <p className="text-muted-foreground mb-6">
            Corporate training is available to teams with an active plan.
          </p>
          <Link
            href="/for-business"
            className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
          >
            Learn about team plans <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </AnimatedEntry>
    </div>
  );
}
