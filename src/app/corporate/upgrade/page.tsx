import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { cn } from "@/lib/utils";
import { Lock, ArrowRight } from "lucide-react";

export default function CorporateUpgradePage() {
  return (
    <div className="max-w-md mx-auto px-6 py-20">
      <AnimatedEntry>
        <div className="text-center mb-8">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-4">
            <Lock className="h-7 w-7 text-primary" />
          </span>
          <h1 className="text-3xl font-bold mb-2">Corporate Access Needed</h1>
          <p className="text-muted-foreground">
            You're signed in, but your account isn't linked to an organization with an active
            corporate training plan yet.
          </p>
        </div>
      </AnimatedEntry>

      <AnimatedEntry delay={0.1}>
        <Card>
          <CardHeader>
            <CardTitle>Two ways to get access</CardTitle>
            <CardDescription>
              If your employer already has a plan, ask your admin to invite you. Otherwise, talk to us
              about setting one up.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link href="/for-business" className={cn(buttonVariants({ variant: "default" }), "w-full")}>
              Explore Team Plans <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/contact" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
              Contact Us
            </Link>
            <div className="text-center pt-2">
              <Link href="/modules" className="text-sm text-primary hover:underline">
                Or keep going with the free individual course
              </Link>
            </div>
          </CardContent>
        </Card>
      </AnimatedEntry>
    </div>
  );
}
