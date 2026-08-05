"use client";

import { useState, useEffect } from "react";
import { X, Shield, AlertTriangle, Heart, Users, Calendar, Eye, Search, Globe, Zap, Scale, Sprout, GraduationCap } from "lucide-react";
import type { SafetyTip } from "@/lib/types";
import { safetyTips } from "@/data/safety-tips";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  AlertTriangle,
  Heart,
  Users,
  Calendar,
  Eye,
  Search,
  Globe,
  Zap,
  Scale,
  Sprout,
  GraduationCap,
};

export function SafetyBanner() {
  const [dismissed, setDismissed] = useState(false);
  const [tipIndex, setTipIndex] = useState(0);

  // Rotate tips every 30 seconds
  useEffect(() => {
    if (dismissed) return;
    const interval = setInterval(() => {
      setTipIndex((i) => (i + 1) % safetyTips.length);
    }, 30000);
    return () => clearInterval(interval);
  }, [dismissed]);

  if (dismissed) return null;

  const tip = safetyTips[tipIndex];
  const Icon = iconMap[tip.icon] || Shield;

  return (
    <div className="bg-muted/50 border-b px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-100 text-rose-600">
          <Icon className="h-4 w-4" />
        </span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">{tip.title}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{tip.body}</p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 text-muted-foreground hover:text-foreground p-1 rounded"
          aria-label="Dismiss safety tip"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
