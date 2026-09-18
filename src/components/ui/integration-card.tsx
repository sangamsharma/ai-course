"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { Sparkles, Mail, FileText, Bot } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface VisualContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface IntegrationCardProps {
  visual: React.ReactNode;
  title: string;
  description: string;
  url: string;
  cta?: string;
}

interface IntegrationItem {
  id: string;
  render: () => React.ReactNode;
  x: number;
  y: number;
  path: string;
  delay: number;
}

// Anthropic's real Claude logomark
const ClaudeMark = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none" className={className}>
    <path
      d="M5.488 18.62L11.004 15.54L11.088 15.26L11.004 15.12H10.724L9.8 15.064L6.664 14.98L3.92 14.84L1.26 14.7L0.588 14.56L0 13.72L0.056 13.3L0.616 12.936L1.428 12.992L3.192 13.132L5.852 13.3L7.784 13.412L10.64 13.748H11.088L11.144 13.552L11.004 13.44L10.892 13.328L8.12 11.48L5.152 9.52L3.584 8.372L2.744 7.812L2.324 7.252L2.156 6.076L2.912 5.236L3.948 5.32L4.2 5.376L5.236 6.188L7.476 7.896L10.36 10.08L10.78 10.416L10.948 10.304L10.976 10.22L10.78 9.912L9.24 7L7.56 4.088L6.804 2.884L6.608 2.156C6.524 1.876 6.496 1.596 6.496 1.316L7.336 0.14L7.84 0L9.016 0.168L9.464 0.56L10.192 2.24L11.34 4.844L13.16 8.372L13.72 9.436L14 10.388L14.084 10.668H14.28V10.528L14.42 8.512L14.7 6.076L14.98 2.94L15.064 2.044L15.512 0.98L16.352 0.42L17.08 0.728L17.64 1.54L17.556 2.044L17.248 4.2L16.52 7.588L16.1 9.884H16.352L16.632 9.576L17.78 8.064L19.712 5.656L20.552 4.676L21.56 3.64L22.204 3.136H23.408L24.276 4.452L23.884 5.824L22.652 7.392L21.616 8.708L20.132 10.696L19.236 12.292L19.32 12.404H19.516L22.876 11.676L24.668 11.368L26.796 11.004L27.776 11.452L27.888 11.9L27.496 12.852L25.2 13.412L22.512 13.972L18.508 14.896L18.452 14.924L18.508 15.008L20.3 15.176L21.084 15.232H22.988L26.516 15.512L27.44 16.072L27.972 16.828L27.888 17.388L26.46 18.116L24.556 17.668L20.076 16.604L18.564 16.24H18.34V16.352L19.628 17.612L21.952 19.712L24.92 22.428L25.06 23.1L24.696 23.66L24.304 23.604L21.728 21.644L20.72 20.804L18.48 18.9H18.34V19.096L18.844 19.852L21.588 23.968L21.728 25.228L21.532 25.62L20.804 25.9L20.048 25.732L18.424 23.492L16.744 20.972L15.428 18.676L15.288 18.788L14.476 27.244L14.112 27.664L13.272 28L12.572 27.44L12.18 26.6L12.572 24.864L13.02 22.624L13.384 20.832L13.72 18.62L13.916 17.892V17.836H13.72L12.04 20.16L9.52 23.604L7.504 25.732L7.028 25.928L6.188 25.508L6.272 24.724L6.72 24.08L9.52 20.496L11.2 18.284L12.32 16.996L12.292 16.856H12.208L4.816 21.672L3.5 21.84L2.94 21.28L2.996 20.44L3.276 20.16L5.516 18.62H5.488Z"
      fill="currentColor"
    />
  </svg>
);

const ToolBadge = ({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) => (
  <span
    className={cn(
      "flex h-6 w-6 items-center justify-center rounded-full text-white sm:h-8 sm:w-8",
      color,
    )}
  >
    {children}
  </span>
);

const TaskBadge = ({ children }: { children: React.ReactNode }) => (
  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground/10 text-foreground sm:h-8 sm:w-8">
    {children}
  </span>
);

// Center is 282, 205 — nodes are the everyday AI tools + tasks this course teaches
const integrations: IntegrationItem[] = [
  {
    id: "chatgpt",
    render: () => (
      <ToolBadge color="bg-emerald-500">
        <Bot className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
      </ToolBadge>
    ),
    x: 110,
    y: 90,
    path: "M 270 205 V 105 Q 270 90 255 90 H 110",
    delay: 0.1,
  },
  {
    id: "claude",
    render: () => (
      <ToolBadge color="bg-amber-500">
        <ClaudeMark className="h-3 w-3 sm:h-4 sm:w-4" />
      </ToolBadge>
    ),
    x: 360,
    y: 70,
    path: "M 294 205 V 85 Q 294 70 309 70 H 360",
    delay: 0.2,
  },
  {
    id: "gemini",
    render: () => (
      <ToolBadge color="bg-blue-500">
        <Sparkles className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
      </ToolBadge>
    ),
    x: 160,
    y: 205,
    path: "M 250 205 H 160",
    delay: 0.3,
  },
  {
    id: "files",
    render: () => (
      <TaskBadge>
        <FileText className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
      </TaskBadge>
    ),
    x: 480,
    y: 205,
    path: "M 314 205 H 480",
    delay: 0.4,
  },
  {
    id: "email",
    render: () => (
      <TaskBadge>
        <Mail className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
      </TaskBadge>
    ),
    x: 282,
    y: 360,
    path: "M 282 205 V 360",
    delay: 0.6,
  },
  {
    id: "docs",
    render: () => (
      <TaskBadge>
        <FileText className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
      </TaskBadge>
    ),
    x: 460,
    y: 340,
    path: "M 314 215 V 325 Q 314 340 329 340 H 460",
    delay: 0.7,
  },
];

const AnimatedPath = ({ d, id }: { d: string; id: string }) => {
  return (
    <>
      <path d={d} stroke="currentColor" strokeWidth="1" fill="none" className="text-border" />
      <motion.path
        d={d}
        stroke={`url(#${id})`}
        strokeWidth="2"
        fill="none"
        strokeDasharray="40 160"
        initial={{ strokeDashoffset: 200 }}
        animate={{ strokeDashoffset: -200 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: Math.random() * 2,
        }}
      />
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </>
  );
};

export function Integration() {
  const containerId = useId();

  return (
    <div className="relative h-full w-full">
      {/* SVG Lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 564 410"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {integrations.map((integration) => (
          <AnimatedPath key={integration.id} d={integration.path} id={`${containerId}-${integration.id}`} />
        ))}
      </svg>

      {/* Center Logo */}
      <div className="absolute top-1/2 left-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-background p-0.5 shadow-md sm:rounded-2xl sm:p-2 sm:shadow-xl">
        <div className="rounded-lg border p-1 sm:rounded-xl sm:p-2.5">
          <Sparkles className="size-5 text-primary sm:size-9" />
        </div>
        <motion.div
          className="absolute inset-0 rounded-lg border-2 border-primary/10 sm:rounded-2xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>

      {/* Peripheral Icons */}
      {integrations.map((integration) => (
        <motion.div
          key={integration.id}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: integration.delay }}
          style={{
            left: `${(integration.x / 564) * 100}%`,
            top: `${(integration.y / 410) * 100}%`,
          }}
          className="absolute z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-background shadow-sm sm:h-12 sm:w-12 sm:rounded-xl md:h-13.5 md:w-13.5"
        >
          {integration.render()}
        </motion.div>
      ))}
    </div>
  );
}

export function VisualContainer({ children, className }: VisualContainerProps) {
  return (
    <div
      className={cn(
        "relative flex aspect-564/460 w-full items-center justify-center overflow-hidden rounded-none bg-muted p-8 sm:aspect-564/410 dark:bg-muted/50",
        className,
      )}
    >
      {/* Dots Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Gradient Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-background/60 from-10% via-transparent to-90% to-background/60" />
      <div className="relative z-10 flex h-full w-full items-center justify-center">{children}</div>
    </div>
  );
}

export function IntegrationCard({ visual, title, description, url, cta = "Learn more" }: IntegrationCardProps) {
  return (
    <Card className="mx-auto flex w-full flex-col gap-0 overflow-hidden rounded-2xl border p-0 ring-0 sm:max-w-141">
      <VisualContainer>{visual}</VisualContainer>

      <CardContent className="flex flex-col gap-6 p-6 sm:gap-8 sm:p-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-medium tracking-tight sm:text-2xl">{title}</h3>
          <p className="text-base leading-relaxed text-muted-foreground">{description}</p>
        </div>
        <Button className="h-10 w-fit rounded-full px-5" render={<a href={url} />}>
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
}

export function IntegrationCardDemo() {
  return (
    <div className="flex w-full min-h-96 items-center justify-center p-4 sm:p-6">
      <IntegrationCard
        visual={<Integration />}
        title="Works With the AI Tools You Already Have"
        description="ChatGPT, Claude, or Gemini — this course shows you how to use them for real, everyday tasks like email and documents."
        url="/tools"
      />
    </div>
  );
}

export default IntegrationCardDemo;
