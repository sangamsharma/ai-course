import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { StaggerList, ScrollReveal, PulseButton, FloatingElement } from "@/components/shared/motion-components";
import { ModuleCard } from "@/components/course/module-card";
import { modules, courseStats } from "@/data/modules";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Users,
  Clock,
  BookOpen,
  Sparkles,
} from "lucide-react";

const totalHours = Math.floor(courseStats.totalMinutes / 60);
const totalMins = courseStats.totalMinutes % 60;

const features = [
  {
    icon: BookOpen,
    title: `${courseStats.totalModules} Full Modules — ${courseStats.totalLessons} Lessons`,
    description: "From AI basics to staying safe online — every lesson includes hands-on exercises with real scenarios.",
  },
  {
    icon: Clock,
    title: `~${totalHours} Hours, ${totalMins} Minutes Total`,
    description: "Bite-sized lessons (10-15 minutes each) that fit into your busy day. Self-paced, on your schedule.",
  },
  {
    icon: Users,
    title: "Zero Jargon, Zero Prerequisites",
    description: "Built for non-technical learners. If you can send an email, you can take this course. No coding required.",
  },
];

const toolsPreview = [
  { name: "ChatGPT", color: "bg-emerald-500", letter: "C" },
  { name: "Claude", color: "bg-amber-500", letter: "C" },
  { name: "Gemini", color: "bg-blue-500", letter: "G" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 text-center relative z-10">
          <AnimatedEntry>
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-1.5">
              ✨ No Technical Background Required
            </Badge>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
              AI Made{" "}
              <span className="text-primary">Simple</span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-muted-foreground">
                For Everyday Life & Small Business
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              A friendly, hands-on course teaching you to use{" "}
              <strong className="text-foreground">ChatGPT, Claude & Gemini</strong>{" "}
              for real tasks — writing emails, planning events, creating social media, and more.
            </p>
            <PulseButton>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/modules"
                  className={cn(buttonVariants({ variant: "default", size: "lg" }), "text-lg px-8 py-6 h-auto")}
                >
                  Start the Course <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/tools"
                  className={cn(buttonVariants({ variant: "outline", size: "lg" }), "text-lg px-8 py-6 h-auto")}
                >
                  Explore AI Tools
                </Link>
              </div>
            </PulseButton>
          </AnimatedEntry>

          {/* Tool badges */}
          <AnimatedEntry delay={0.2}>
            <div className="mt-12 flex items-center justify-center gap-3 flex-wrap">
              <span className="text-sm text-muted-foreground">Covers:</span>
              {toolsPreview.map((tool) => (
                <span
                  key={tool.name}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border shadow-sm text-sm font-medium"
                >
                  <span
                    className={`flex h-6 w-6 items-center justify-center rounded-full ${tool.color} text-white text-xs font-bold`}
                  >
                    {tool.letter}
                  </span>
                  {tool.name}
                </span>
              ))}
            </div>
          </AnimatedEntry>
        </div>

        {/* Decorative blobs */}
        <FloatingElement amplitude={12} duration={4}>
          <div className="absolute top-20 -left-20 w-80 h-80 bg-teal-100/40 rounded-full blur-3xl" />
        </FloatingElement>
        <FloatingElement amplitude={16} duration={5}>
          <div className="absolute bottom-10 -right-20 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        </FloatingElement>
      </section>

      {/* Features Row */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <StaggerList className="grid sm:grid-cols-3 gap-8" staggerDelay={0.1}>
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title}>
              <div className="text-center p-6 rounded-2xl bg-white border hover:shadow-md transition-shadow">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <feature.icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </StaggerList>
      </section>

      {/* Module Overview Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <AnimatedEntry>
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Course Curriculum
            </Badge>
            <h2 className="text-4xl font-bold mb-4">What You&apos;ll Learn</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              {courseStats.totalModules} modules designed to take you from curious beginner to confident AI user.
            </p>
          </div>
        </AnimatedEntry>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <AnimatedEntry key={mod.slug} delay={i * 0.08}>
              <ModuleCard
                module={mod}
                totalLessons={mod.lessons.length > 0 ? mod.lessons.length : 5}
              />
            </AnimatedEntry>
          ))}
        </div>

        <AnimatedEntry delay={0.4}>
          <div className="text-center mt-10">
            <Link
              href="/modules"
              className={cn(buttonVariants({ variant: "default", size: "lg" }))}
            >
              View All Modules <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </AnimatedEntry>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary/5 border-y py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedEntry>
            <h2 className="text-3xl font-bold mb-4">Ready to make AI work for you?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              No coding. No complex terms. Just practical skills you can use today.
            </p>
            <Link
              href="/modules"
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "text-lg px-8 py-6 h-auto")}
            >
              Begin Learning — It&apos;s Free <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </AnimatedEntry>
        </div>
      </section>
    </>
  );
}
