import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TipBoxProps {
  variant: "tip" | "warning" | "important" | "example";
  title: string;
  children: ReactNode;
  className?: string;
}

const variantStyles: Record<TipBoxProps["variant"], string> = {
  tip: "border-teal-200 bg-teal-50 text-teal-900",
  warning: "border-amber-200 bg-amber-50 text-amber-900",
  important: "border-rose-200 bg-rose-50 text-rose-900",
  example: "border-blue-200 bg-blue-50 text-blue-900",
};

const variantIcons: Record<TipBoxProps["variant"], string> = {
  tip: "💡",
  warning: "⚠️",
  important: "❗",
  example: "📝",
};

export function TipBox({
  variant,
  title,
  children,
  className,
}: TipBoxProps) {
  return (
    <div
      className={cn(
        "my-6 rounded-xl border p-5 text-lg",
        variantStyles[variant],
        className
      )}
      role="note"
    >
      <div className="flex items-start gap-3">
        <span className="text-2xl shrink-0" aria-hidden="true">
          {variantIcons[variant]}
        </span>
        <div>
          <p className="font-semibold mb-1">{title}</p>
          <div className="text-base opacity-90">{children}</div>
        </div>
      </div>
    </div>
  );
}
