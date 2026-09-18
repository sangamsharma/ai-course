import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { signIn } from "@/lib/auth";
import { Shield, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

const googleConfigured = Boolean(process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET);

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>;
}) {
  const { callbackUrl } = await searchParams;
  const redirectTo = callbackUrl || "/progress";

  async function signInWithGoogle() {
    "use server";
    await signIn("google", { redirectTo });
  }

  async function signInWithEmail(formData: FormData) {
    "use server";
    const email = formData.get("email") as string;
    await signIn("resend", { email, redirectTo });
  }

  return (
    <div className="max-w-md mx-auto px-6 py-20">
      <AnimatedEntry>
        <div className="text-center mb-8">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mb-4">
            <Shield className="h-7 w-7 text-primary" />
          </span>
          <h1 className="text-3xl font-bold mb-2">Sign In</h1>
          <p className="text-muted-foreground">
            Access your team dashboard, training progress, and corporate training.
          </p>
        </div>
      </AnimatedEntry>

      <AnimatedEntry delay={0.1}>
        <Card>
          <CardHeader>
            <CardTitle>Sign in to continue</CardTitle>
            <CardDescription>Use Google, or get a one-click sign-in link by email.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {googleConfigured && (
              <form action={signInWithGoogle}>
                <Button type="submit" className="w-full" variant="outline">
                  Continue with Google
                </Button>
              </form>
            )}

            <form action={signInWithEmail} className="space-y-2">
              <Input type="email" name="email" placeholder="you@example.com" required />
              <Button type="submit" className="w-full">
                <Mail className="mr-2 h-4 w-4" /> Continue with Email
              </Button>
            </form>

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
