import { notFound } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { tools } from "@/data/tools";
import { cn } from "@/lib/utils";
import { ArrowLeft, ExternalLink, CheckCircle2, XCircle, Smartphone, Globe } from "lucide-react";

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ toolSlug: string }>;
}) {
  const { toolSlug } = await params;
  const tool = tools.find((t) => t.slug === toolSlug);

  if (!tool) notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link
        href="/tools"
        className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" /> Back to tools
      </Link>

      <AnimatedEntry>
        <div className="flex items-center gap-4 mb-6">
          <span
            className={cn(
              "flex h-16 w-16 items-center justify-center rounded-2xl text-white font-bold text-2xl",
              tool.color
            )}
          >
            {tool.name[0]}
          </span>
          <div>
            <Badge variant="secondary" className="mb-2">{tool.provider}</Badge>
            <h1 className="text-3xl sm:text-4xl font-bold">{tool.name}</h1>
            <p className="text-lg text-muted-foreground">{tool.tagline}</p>
          </div>
        </div>
      </AnimatedEntry>

      <AnimatedEntry delay={0.1}>
        <p className="text-lg leading-relaxed mb-8">{tool.description}</p>
      </AnimatedEntry>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <AnimatedEntry delay={0.15}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-emerald-500" /> Pros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tool.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    {pro}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimatedEntry>
        <AnimatedEntry delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <XCircle className="h-5 w-5 text-rose-500" /> Cons
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tool.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                    {con}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </AnimatedEntry>
      </div>

      <AnimatedEntry delay={0.25}>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Pricing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <Badge variant="outline" className="mb-1 bg-emerald-50">Free</Badge>
              <p className="text-sm">{tool.freeTier}</p>
            </div>
            {tool.paidTier && (
              <div>
                <Badge variant="outline" className="mb-1">Paid</Badge>
                <p className="text-sm">{tool.paidTier}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </AnimatedEntry>

      <AnimatedEntry delay={0.3}>
        <div className="flex flex-wrap gap-3">
          <Link
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Globe className="mr-2 h-4 w-4" /> Visit {tool.name}
            <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </Link>
          {tool.mobileApp && (
            <span className={cn(buttonVariants({ variant: "outline" }), "pointer-events-none")}>
              <Smartphone className="mr-2 h-4 w-4" /> Mobile App Available
            </span>
          )}
        </div>
      </AnimatedEntry>
    </div>
  );
}
