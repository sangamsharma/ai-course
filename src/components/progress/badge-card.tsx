import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Badge as BadgeType } from "@/lib/types";
import { Lock, CheckCircle2 } from "lucide-react";

const badgeIcons: Record<string, string> = {
  Rocket: "\u{1F680}",
  PenLine: "\u{270F}\u{FE0F}",
  ShieldCheck: "\u{1F6E1}\u{FE0F}",
  SearchCheck: "\u{1F50D}",
  Briefcase: "\u{1F4BC}",
  Home: "\u{1F3E0}",
  Trophy: "\u{1F3C6}",
};

interface BadgeCardProps {
  badge: BadgeType;
  earned: boolean;
}

export function BadgeCard({ badge, earned }: BadgeCardProps) {
  return (
    <Card className={cn("text-center transition-all", earned ? "border-primary/30 bg-primary/5" : "opacity-50")}>
      <CardContent className="p-6">
        <span className="text-4xl mb-3 block">
          {badgeIcons[badge.icon] || "\u{1F3C5}"}
        </span>
        <h3 className="font-bold text-base mb-1">{badge.name}</h3>
        <p className="text-xs text-muted-foreground mb-3">{badge.description}</p>
        {earned ? (
          <span className="inline-flex items-center gap-1 text-xs text-emerald-600 font-medium">
            <CheckCircle2 className="h-3.5 w-3.5" /> Earned
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
            <Lock className="h-3.5 w-3.5" /> {badge.condition}
          </span>
        )}
      </CardContent>
    </Card>
  );
}
