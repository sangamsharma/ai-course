import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-6 py-20">
      <AnimatedEntry>
        <div className="text-center mb-8">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-4">
            <Shield className="h-7 w-7 text-primary" />
          </span>
          <h1 className="text-3xl font-bold mb-2">Sign In</h1>
          <p className="text-muted-foreground">
            Access your team dashboard and training progress.
          </p>
        </div>
      </AnimatedEntry>

      <AnimatedEntry delay={0.1}>
        <Card>
          <CardHeader>
            <CardTitle>Authentication</CardTitle>
            <CardDescription>
              Sign-in will be available once an authentication provider is configured.
              For now, explore the free course content.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button disabled className="w-full" variant="outline">
              Continue with Google (coming soon)
            </Button>
            <Button disabled className="w-full" variant="outline">
              Continue with Email (coming soon)
            </Button>
            <div className="text-center pt-2">
              <Link href="/modules" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                Continue as guest <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </AnimatedEntry>
    </div>
  );
}
