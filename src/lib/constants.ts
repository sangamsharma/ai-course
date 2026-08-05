import type { ModuleColor } from "@/lib/types";
import {
  Sparkles,
  MessageSquare,
  Pen,
  Briefcase,
  FileText,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

/** Unified color map for module theming across cards, detail pages, and progress indicators. */
export const moduleColorMap: Record<
  ModuleColor,
  { bg: string; text: string; progress: string; border: string; light: string }
> = {
  teal: {
    bg: "bg-teal-50",
    text: "text-teal-700",
    progress: "bg-teal-500",
    border: "border-teal-200",
    light: "bg-teal-50",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    progress: "bg-blue-500",
    border: "border-blue-200",
    light: "bg-blue-50",
  },
  emerald: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    progress: "bg-emerald-500",
    border: "border-emerald-200",
    light: "bg-emerald-50",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-700",
    progress: "bg-violet-500",
    border: "border-violet-200",
    light: "bg-violet-50",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-700",
    progress: "bg-amber-500",
    border: "border-amber-200",
    light: "bg-amber-50",
  },
  rose: {
    bg: "bg-rose-50",
    text: "text-rose-700",
    progress: "bg-rose-500",
    border: "border-rose-200",
    light: "bg-rose-50",
  },
};

/** Map of lucide-react icon names to their components. */
export const moduleIcons: Record<string, LucideIcon> = {
  Sparkles,
  MessageSquare,
  Pen,
  Briefcase,
  FileText,
  ShieldCheck,
};

/** Emoji fallbacks for module icons (used in module detail page header). */
export const moduleIconEmojis: Record<string, string> = {
  Sparkles: "✨",
  MessageSquare: "💬",
  Pen: "✏️",
  Briefcase: "💼",
  FileText: "📄",
  ShieldCheck: "🛡️",
};
