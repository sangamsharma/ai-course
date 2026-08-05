import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
}

export function SectionTitle({
  title,
  description,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-10", className)}>
      <h2 className="text-3xl font-bold text-foreground">{title}</h2>
      {description && (
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
          {description}
        </p>
      )}
      <Separator className="mt-6" />
    </div>
  );
}
