import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { cn } from "@/lib/utils";
import { ArrowRight, Heart, Users, Sparkles, Globe } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Built for Everyone",
    description:
      "We believe AI literacy shouldn't require a computer science degree. This course is designed for small business owners, retirees, parents, and anyone curious about what AI can do for them.",
  },
  {
    icon: Sparkles,
    title: "Practical, Not Theoretical",
    description:
      "Every lesson teaches something you can use today — writing an email, planning an event, creating a social media post. No abstract concepts, just real-world skills.",
  },
  {
    icon: Heart,
    title: "Patient & Encouraging",
    description:
      "We remember what it's like to be a beginner. Our lessons are friendly, jargon-free, and full of encouragement. There are no stupid questions.",
  },
  {
    icon: Globe,
    title: "Free & Accessible",
    description:
      "All course content is free forever. All three AI tools we teach (ChatGPT, Claude, Gemini) have free tiers. Learning AI shouldn't cost anything.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <AnimatedEntry>
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">About the Course</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">AI for Everyone</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A friendly, hands-on course that makes AI accessible to everyone — regardless of age, background, or technical experience.
          </p>
        </div>
      </AnimatedEntry>

      <AnimatedEntry delay={0.1}>
        <div className="prose-custom space-y-4 mb-14">
          <h2 className="text-2xl font-bold">Why This Course Exists</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            AI is changing how we work, communicate, and solve problems. But most AI
            education is built for programmers and tech professionals. Everyone else is
            left behind — small business owners who could use AI for marketing,
            retirees who want help writing letters, parents planning events, and
            everyday people who just want to be more productive.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            <strong>AI for Everyone</strong> fills that gap. In about 8-9 hours (broken
            into bite-sized 8-15 minute lessons across 9 Levels), you&apos;ll go from AI
            beginner to confident user. No coding. No jargon. Just practical skills.
          </p>
        </div>
      </AnimatedEntry>

      <AnimatedEntry delay={0.2}>
        <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {values.map((v, i) => (
            <div key={v.title} className="p-6 rounded-2xl bg-white border">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <v.icon className="h-5 w-5" />
              </span>
              <h3 className="font-bold text-lg mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </AnimatedEntry>

      <AnimatedEntry delay={0.3}>
        <h2 className="text-2xl font-bold mb-6 text-center">What You&apos;ll Learn</h2>
        <div className="grid sm:grid-cols-2 gap-3 mb-14">
          {[
            "What AI is — in plain English",
            "How to use ChatGPT, Claude & Gemini",
            "Writing effective prompts",
            "Email writing with perfect grammar",
            "Social media & marketing content",
            "Resume & document creation",
            "Event planning & organization",
            "Privacy & safety with AI",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>
      </AnimatedEntry>

      <AnimatedEntry delay={0.4}>
        <div className="text-center p-8 rounded-2xl bg-primary/5 border">
          <h2 className="text-2xl font-bold mb-3">Start Learning Today</h2>
          <p className="text-muted-foreground mb-6">
            Free. Self-paced. No experience required.
          </p>
          <Link
            href="/modules"
            className={cn(buttonVariants({ variant: "default", size: "lg" }))}
          >
            Begin the Course <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </AnimatedEntry>
    </div>
  );
}
