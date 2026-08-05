import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { cn } from "@/lib/utils";
import { ArrowRight, Pen, MessageSquare, Lightbulb } from "lucide-react";

const practiceAreas = [
  {
    title: "Module 1: AI Made Simple",
    description: "Practice explaining AI to a 10-year-old, set up your AI accounts, and test your knowledge with quizzes.",
    icon: "✨",
    href: "/modules/ai-made-simple",
    exercises: "4 lessons with exercises",
  },
  {
    title: "Prompt Playground",
    description: "Free-form practice writing prompts and seeing example responses. Try different scenarios.",
    icon: "✏️",
    href: "/playground",
    exercises: "3 practice scenarios",
  },
  {
    title: "Template Library",
    description: "Browse our collection of ready-to-use prompt templates. Copy, customize, and use for real tasks.",
    icon: "📋",
    href: "/prompts",
    exercises: "10+ templates",
  },
  {
    title: "Module 2: The Art of Asking",
    description: "Coming soon — master prompt formulas, persona patterns, and specificity techniques.",
    icon: "💬",
    href: "/modules/the-art-of-asking",
    exercises: "Coming soon",
  },
  {
    title: "Module 3: AI for Everyday Tasks",
    description: "Coming soon — practice writing emails, summarizing articles, and planning events.",
    icon: "📧",
    href: "/modules/ai-for-everyday-tasks",
    exercises: "Coming soon",
  },
  {
    title: "Module 4: AI for Your Business",
    description: "Coming soon — create social media posts, menu cards, and customer communications.",
    icon: "💼",
    href: "/modules/ai-for-your-business",
    exercises: "Coming soon",
  },
];

export default function PracticePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <AnimatedEntry>
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <Lightbulb className="h-3.5 w-3.5 mr-1" /> Hands-On Practice
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Practice Exercises</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            The best way to learn AI is by doing. Complete these exercises to build real skills.
          </p>
        </div>
      </AnimatedEntry>

      <div className="grid sm:grid-cols-2 gap-4">
        {practiceAreas.map((area, i) => (
          <AnimatedEntry key={area.title} delay={i * 0.06}>
            <Link href={area.href} className="block group">
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{area.icon}</span>
                    <Badge variant="outline" className="text-xs">
                      {area.exercises}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {area.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardHeader>
              </Card>
            </Link>
          </AnimatedEntry>
        ))}
      </div>

      <AnimatedEntry delay={0.4}>
        <div className="text-center mt-12 p-8 rounded-2xl bg-primary/5 border">
          <h2 className="text-2xl font-bold mb-3">Ready to start?</h2>
          <p className="text-muted-foreground mb-6">
            Begin with Module 1 — it&apos;s the easiest and most important.
          </p>
          <Link
            href="/modules/ai-made-simple"
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          >
            Go to Module 1 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </AnimatedEntry>
    </div>
  );
}
