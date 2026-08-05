import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { SectionTitle } from "@/components/shared/section-title";
import { tools, enterpriseCriteria } from "@/data/tools";
import { cn } from "@/lib/utils";
import {
  ExternalLink,
  Smartphone,
  Globe,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <AnimatedEntry>
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Your AI Toolbox</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet ChatGPT, Claude, and Gemini — three powerful, free AI assistants that can help with everyday tasks.
          </p>
        </div>
      </AnimatedEntry>

      <SectionTitle title="Compare AI Tools" description="All three are free to use. Pick the right tool for each task." />

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {tools.map((tool, i) => (
          <AnimatedEntry key={tool.slug} delay={i * 0.1}>
            <Link href={`/tools/${tool.slug}`} className="group block h-full">
              <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-xl text-white font-bold text-lg",
                        tool.color
                      )}
                    >
                      {tool.name[0]}
                    </span>
                    <div>
                      <CardTitle className="text-xl">{tool.name}</CardTitle>
                      <span className="text-xs text-muted-foreground">{tool.provider}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{tool.tagline}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground line-clamp-3">{tool.description}</p>
                    <div className="pt-2 flex items-center gap-1 text-primary font-medium text-sm">
                      Learn more <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </AnimatedEntry>
        ))}
      </div>

      {/* Quick comparison */}
      <AnimatedEntry delay={0.3}>
        <div className="bg-muted/30 rounded-2xl border p-6 sm:p-8">
          <h2 className="text-2xl font-bold mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm sm:text-base">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-semibold">Feature</th>
                  {tools.map((t) => (
                    <th key={t.slug} className="text-left py-2 px-4 font-semibold">
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Free Tier", values: tools.map((t) => t.freeTier.split(" — ")[0]) },
                  { label: "Best For", values: tools.map((t) => t.bestFor[0]) },
                  { label: "Mobile App", values: tools.map((t) => (t.mobileApp ? "✅ Yes" : "❌ No")) },
                  { label: "Image Generation", values: ["❌ Free tier", "❌ No", "✅ Yes"] },
                  { label: "Web Browsing", values: ["✅ Yes", "❌ No", "✅ Yes"] },
                  { label: "Long Documents", values: ["Good", "Excellent", "Good"] },
                ].map((row) => (
                  <tr key={row.label} className="border-b">
                    <td className="py-3 pr-4 font-medium text-muted-foreground">{row.label}</td>
                    {row.values.map((val, i) => (
                      <td key={i} className="py-3 px-4">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedEntry>

      <AnimatedEntry delay={0.4}>
        <div className="bg-muted/30 rounded-2xl border p-6 sm:p-8 mt-12">
          <h2 className="text-2xl font-bold mb-2">Enterprise Readiness</h2>
          <p className="text-sm text-muted-foreground mb-6">
            For corporate clients evaluating AI tools for team deployment — compliance, security, and admin controls matter.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2 pr-4 font-semibold">Criterion</th>
                  {tools.map((t) => (
                    <th key={t.slug} className="text-left py-2 px-4 font-semibold">
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "SOC 2 Compliant", key: "soc2" as const },
                  { label: "HIPAA Eligible", key: "hipaa" as const },
                  { label: "GDPR Compliant", key: "gdpr" as const },
                  { label: "SSO / SAML", key: "ssoSAML" as const },
                  { label: "Admin Console", key: "adminConsole" as const },
                  { label: "Fine-Tuning", key: "fineTuning" as const },
                  { label: "API Rate Limits", key: "apiRateLimits" as const },
                  { label: "Data Retention", key: "dataRetention" as const },
                  { label: "Data Sovereignty", key: "dataSovereignty" as const },
                ].map((row) => (
                  <tr key={row.key} className="border-b">
                    <td className="py-3 pr-4 font-medium text-muted-foreground">{row.label}</td>
                    {tools.map((t) => {
                      const crit = enterpriseCriteria[t.slug];
                      const val = crit?.[row.key];
                      const display =
                        typeof val === "boolean"
                          ? val
                            ? "✅"
                            : "❌"
                          : val || "—";
                      return (
                        <td key={t.slug} className="py-3 px-4 text-xs sm:text-sm">
                          {display}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </AnimatedEntry>

      <AnimatedEntry delay={0.5}>
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Try them all — they&apos;re free! Each one has its strengths.
          </p>
          <Link href="/modules/ai-made-simple/meet-the-tools" className={cn(buttonVariants({ variant: "default" }))}>
            Learn Setup → <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </AnimatedEntry>
    </div>
  );
}
