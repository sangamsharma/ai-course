import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { HoverCard } from "@/components/shared/motion-components";
import { pricingTiers, trainingTracks } from "@/data/corporate";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Users,
  Building2,
  GraduationCap,
} from "lucide-react";

export default function PricingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <AnimatedEntry>
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">Transparent Pricing</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            AI Training That Fits Your Budget
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From quick Lunch & Learns to comprehensive multi-day programs. All prices in AUD.
            Curriculum customisation and larger groups may incur additional fees.
          </p>
        </div>
      </AnimatedEntry>

      {/* Workshop Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {pricingTiers.map((tier, i) => (
          <AnimatedEntry key={tier.id} delay={i * 0.1}>
            <HoverCard tiltAmount={3}>
              <Card
                className={cn(
                  "h-full flex flex-col transition-all",
                  tier.featured && "border-primary ring-2 ring-primary/20 relative"
                )}
              >
              {tier.featured && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <CardDescription>{tier.duration}</CardDescription>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{tier.priceLabel}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <p className="text-sm text-muted-foreground mb-4">
                  {tier.description}
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {tier.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href={tier.href}
                  className={cn(
                    buttonVariants({
                      variant: tier.featured ? "default" : "outline",
                    }),
                    "w-full"
                  )}
                >
                  {tier.cta} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            </HoverCard>
          </AnimatedEntry>
        ))}
      </div>

      <Separator className="mb-16" />

      {/* Training Tracks */}
      <AnimatedEntry>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">Training Tracks</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose the track that matches your team&apos;s tools and goals.
          </p>
        </div>
      </AnimatedEntry>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {trainingTracks.map((track, i) => (
          <AnimatedEntry key={track.id} delay={i * 0.05}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-base">{track.label}</CardTitle>
                <CardDescription className="text-sm">{track.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {track.tools.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {track.durationOptions.map((d) => (
                    <Badge key={d} variant="outline" className="text-xs capitalize">
                      {d.replace(/-/g, " ")}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedEntry>
        ))}
      </div>

      {/* Custom CTA */}
      <AnimatedEntry>
        <div className="bg-muted/30 rounded-2xl border p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Need Something Custom?</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Multi-team programs, industry-specific curricula, or enterprise-wide AI
            transformation — we build training that fits.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/contact" className={cn(buttonVariants({ variant: "default" }))}>
              <Building2 className="mr-2 h-4 w-4" /> Get a Custom Quote
            </Link>
            <Link href="/book" className={cn(buttonVariants({ variant: "outline" }))}>
              Book a Briefing <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </AnimatedEntry>
    </div>
  );
}
