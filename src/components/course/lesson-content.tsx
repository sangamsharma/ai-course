import type { LessonContent } from "@/lib/types";
import { TipBox } from "@/components/shared/tip-box";
import { Separator } from "@/components/ui/separator";

interface LessonContentRendererProps {
  content: LessonContent[];
}

export function LessonContentRenderer({ content }: LessonContentRendererProps) {
  return (
    <div className="space-y-5">
      {content.map((block, i) => {
        switch (block.type) {
          case "text":
            return (
              <p key={i} className="text-lg leading-relaxed text-foreground">
                {block.body}
              </p>
            );

          case "image":
            return (
              <figure key={i} className="my-8">
                <img
                  src={block.src}
                  alt={block.alt}
                  className="rounded-xl w-full max-w-2xl"
                />
                {block.caption && (
                  <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "tip-box":
            return (
              <TipBox key={i} variant={block.variant} title={block.title}>
                {block.body}
              </TipBox>
            );

          case "code-example":
            return (
              <div key={i} className="my-6">
                {block.title && (
                  <p className="text-sm font-semibold text-muted-foreground mb-2">
                    {block.title}
                  </p>
                )}
                <div className="bg-muted rounded-xl p-5 border overflow-x-auto">
                  <pre className="text-base whitespace-pre-wrap font-sans text-foreground leading-relaxed">
                    {block.code}
                  </pre>
                </div>
              </div>
            );

          case "bullet-list":
            return (
              <div key={i} className="my-4">
                {block.title && (
                  <p className="font-semibold text-lg mb-3">{block.title}</p>
                )}
                <ul className="space-y-2">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-base">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
