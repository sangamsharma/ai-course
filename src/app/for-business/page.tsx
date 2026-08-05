import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { SectionTitle } from "@/components/shared/section-title";
import { corporateServices, caseStudies, clientLogos } from "@/data/corporate";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Users,
  Target,
  Briefcase,
  Lightbulb,
  ArrowRight,
  Quote,
  Building2,
  Shield,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  Target,
  Briefcase,
  Lightbulb,
};

export default function ForBusinessPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Hero */}
      <AnimatedEntry>
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">For Business</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            AI Training Built for Business, Not Buzz
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Practical, hands-on workshops that turn your team&apos;s AI curiosity into
            measurable business results. We make complex AI concepts simple — so your
            people can use AI effectively and responsibly every single day.
          </p>
          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            <Link href="/book" className={cn(buttonVariants({ variant: "default", size: "lg" }))}>
              Book a Briefing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/pricing" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              View Pricing
            </Link>
          </div>
        </div>
      </AnimatedEntry>

      {/* Three Pillars */}
      <AnimatedEntry delay={0.1}>
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: GraduationCap,
              title: "Translate Complexity into Clarity",
              body: "We don't just teach what the buttons do. We translate complex AI concepts into clear, practical language everyone can apply.",
            },
            {
              icon: Sparkles,
              title: "Focus on Application, Not Theory",
              body: "Your team learns by doing. Hands-on workshops use real-world examples so skills are not just learned — they're retained.",
            },
            {
              icon: Shield,
              title: "Embed Safety from Day One",
              body: "Responsible AI isn't an afterthought. We integrate practical ethics and safety principles into every program we deliver.",
            },
          ].map((pillar, i) => (
            <Card key={i} className="border-none bg-muted/30">
              <CardContent className="pt-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                  <pillar.icon className="h-5 w-5" />
                </span>
                <h3 className="font-bold text-lg mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </AnimatedEntry>

      <Separator className="mb-16" />

      {/* Services */}
      <SectionTitle
        title="Here&apos;s How We Help"
        description="From foundational AI literacy to executive strategy — training tailored to how your organisation actually works."
      />

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {corporateServices.map((service, i) => {
          const Icon = iconMap[service.icon] || Lightbulb;
          return (
            <AnimatedEntry key={service.id} delay={i * 0.1}>
              <Card className="h-full">
                <CardHeader>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                    <Icon className="h-6 w-6" />
                  </span>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5">
                    {service.tracks.map((track) => (
                      <li key={track.label} className="text-sm">
                        {track.href ? (
                          <Link
                            href={track.href}
                            className="text-primary hover:underline inline-flex items-center gap-1"
                          >
                            {track.label} <ArrowRight className="h-3 w-3" />
                          </Link>
                        ) : (
                          <span className="text-muted-foreground">{track.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedEntry>
          );
        })}
      </div>

      <Separator className="mb-16" />

      {/* Case Studies */}
      {caseStudies.length > 0 && (
        <>
          <AnimatedEntry>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Client Success Stories</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Real results from real teams. Here&apos;s what AI training looks like in practice.
              </p>
            </div>
          </AnimatedEntry>

          {caseStudies.map((cs, i) => (
            <AnimatedEntry key={cs.id} delay={i * 0.15}>
              <Card className="mb-8 overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <Badge variant="secondary" className="mb-3">{cs.industry}</Badge>
                      <h3 className="text-2xl font-bold mb-2">{cs.company}</h3>
                      <blockquote className="border-l-2 border-primary/30 pl-4 italic text-muted-foreground text-sm">
                        <Quote className="h-4 w-4 inline-block text-primary/40 mr-1 -mt-1" />
                        {cs.quote.text}
                        <footer className="not-italic mt-2 text-xs font-medium">
                          — {cs.quote.name}, {cs.quote.role}
                        </footer>
                      </blockquote>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wider mb-2 text-muted-foreground">
                        Challenge
                      </h4>
                      <p className="text-sm leading-relaxed">{cs.challenge}</p>
                      <h4 className="font-semibold text-sm uppercase tracking-wider mt-4 mb-2 text-muted-foreground">
                        Solution
                      </h4>
                      <p className="text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm uppercase tracking-wider mb-2 text-muted-foreground">
                        Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {cs.outcomes.map((o, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedEntry>
          ))}
        </>
      )}

      {/* Client Logos (placeholder until real logos added) */}
      {clientLogos.length > 0 && clientLogos[0].src && (
        <AnimatedEntry>
          <div className="text-center mb-16">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6">
              Trusted by Teams At
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale">
              {clientLogos.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 object-contain"
                />
              ))}
            </div>
          </div>
        </AnimatedEntry>
      )}

      {/* Bottom CTA */}
      <AnimatedEntry>
        <div className="bg-primary/5 rounded-2xl border border-primary/10 p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Let&apos;s Cut Through the Noise</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            We can tailor training to your team, help you figure out your AI policy, or get
            you started on a pilot program. Start with a conversation.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/book" className={cn(buttonVariants({ variant: "default", size: "lg" }))}>
              <Building2 className="mr-2 h-4 w-4" /> Book a Briefing
            </Link>
            <Link href="/contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              Get in Touch
            </Link>
          </div>
        </div>
      </AnimatedEntry>
    </div>
  );
}
