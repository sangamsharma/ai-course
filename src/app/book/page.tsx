"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { pricingTiers } from "@/data/corporate";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { TrainingFormat } from "@/lib/types";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  Monitor,
  ArrowRight,
  CheckCircle2,
  Building2,
} from "lucide-react";

export default function BookPage() {
  const [format, setFormat] = useState<TrainingFormat | "">("");
  const [step, setStep] = useState<1 | 2>(1);

  const selectedTier = pricingTiers.find((t) => t.format === format);

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <AnimatedEntry>
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4">Book a Session</Badge>
          <h1 className="text-4xl font-bold mb-3">Book a Training Briefing</h1>
          <p className="text-lg text-muted-foreground">
            Start with a free 15-minute call. We&apos;ll understand your needs and propose a
            training program that fits your team and budget.
          </p>
        </div>
      </AnimatedEntry>

      {step === 1 && (
        <AnimatedEntry delay={0.1}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" /> Step 1: Choose Format
              </CardTitle>
              <CardDescription>
                Select the training format that best matches your needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {pricingTiers.filter(t => t.format !== "online-self-paced").map((tier) => (
                  <button
                    key={tier.id}
                    onClick={() => setFormat(tier.format)}
                    className={cn(
                      "text-left p-4 rounded-xl border-2 transition-all",
                      format === tier.format
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{tier.duration}</p>
                    <p className="text-sm font-medium">{tier.priceLabel}</p>
                  </button>
                ))}
              </div>

              <Button
                onClick={() => setStep(2)}
                disabled={!format}
                className="w-full"
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </AnimatedEntry>
      )}

      {step === 2 && selectedTier && (
        <AnimatedEntry delay={0.1}>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" /> Step 2: Book Your Call
              </CardTitle>
              <CardDescription>
                We&apos;ll confirm availability and tailor the session to your team. No payment required to book.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Selected tier summary */}
              <div className="bg-muted/30 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="font-bold">{selectedTier.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedTier.duration} · {selectedTier.priceLabel}
                  </p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setStep(1)}>
                  Change
                </Button>
              </div>

              {/* Delivery preference */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="border rounded-xl p-4 text-center hover:border-primary/30 transition-colors cursor-pointer">
                  <MapPin className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="font-bold">In-Person</p>
                  <p className="text-sm text-muted-foreground">We come to your office</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Sydney, Melbourne, Canberra
                  </p>
                </div>
                <div className="border rounded-xl p-4 text-center hover:border-primary/30 transition-colors cursor-pointer">
                  <Monitor className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <p className="font-bold">Remote</p>
                  <p className="text-sm text-muted-foreground">Via your platform of choice</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Teams, Zoom, Google Meet
                  </p>
                </div>
              </div>

              {/* What's included */}
              <div className="bg-muted/30 rounded-xl p-4">
                <h4 className="font-semibold mb-3">What&apos;s included:</h4>
                <ul className="space-y-2">
                  {selectedTier.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA to contact form */}
              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <Building2 className="h-10 w-10 mx-auto mb-3 text-primary" />
                <h3 className="text-lg font-bold mb-2">Ready to book?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Fill out the contact form with your preferred format and we&apos;ll
                  confirm a date within one business day.
                </p>
                <Link
                  href={`/contact?format=${selectedTier.format}`}
                  className={cn(buttonVariants({ variant: "default" }))}
                >
                  Go to Contact Form <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <Button variant="ghost" onClick={() => setStep(1)} className="w-full">
                ← Back to format selection
              </Button>
            </CardContent>
          </Card>
        </AnimatedEntry>
      )}
    </div>
  );
}
