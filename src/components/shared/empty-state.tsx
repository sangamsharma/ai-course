import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface EmptyStateProps {
  icon?: string;
  title: string;
  description: string;
  action?: {
    label: string;
    href: string;
  };
  children?: ReactNode;
}

export function EmptyState({
  icon = "📚",
  title,
  description,
  action,
  children,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <span className="text-6xl mb-6" aria-hidden="true">
        {icon}
      </span>
      <h2 className="text-2xl font-bold text-foreground mb-3">{title}</h2>
      <p className="text-muted-foreground max-w-md mb-8 text-lg">
        {description}
      </p>
      {action && (
        <Link
          href={action.href}
          className={cn(buttonVariants({ variant: "default", size: "lg" }))}
        >
          {action.label}
        </Link>
      )}
      {children}
    </div>
  );
}
