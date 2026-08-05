"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { toolCategories } from "@/data/tool-categories";
import { tools } from "@/data/tools";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HelpCircle, CheckCircle2, AlertTriangle, ArrowRight, Lightbulb, ExternalLink } from "lucide-react";

export default function ToolChooserPage() {
  const [selected, setSelected] = useState<string | null>(null);

  const category = toolCategories.find((c) => c.id === selected);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <AnimatedEntry>
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-3">
            <HelpCircle className="h-3.5 w-3.5 mr-1" /> Decision Helper
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Which AI Tool Should I Use?</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tell us what you&apos;re trying to do, and we&apos;ll suggest the right type of AI tool — with safety notes for each.
          </p>
        </div>
      </AnimatedEntry>

      {/* Question */}
      {!selected && (
        <AnimatedEntry>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl text-center">What are you trying to do?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-3">
                {toolCategories.map((cat, i) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelected(cat.id)}
                    className="p-4 rounded-xl border text-left transition-all hover:border-primary/50 hover:bg-primary/5"
                  >
                    <p className="font-semibold text-base">{cat.label}</p>
                    <p className="text-sm text-muted-foreground mt-1">{cat.description}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedEntry>
      )}

      {/* Detail */}
      {category && (
        <>
          <AnimatedEntry>
            <div className="mb-6">
              <button onClick={() => setSelected(null)} className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block">
                ← Choose a different category
              </button>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{category.label}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-base flex items-center gap-2 mb-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" /> What It&apos;s Good For
                    </h3>
                    <ul className="space-y-1">
                      {category.whatItsGoodFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-base flex items-center gap-2 mb-2">
                      <AlertTriangle className="h-4 w-4 text-rose-500" /> What to Avoid
                    </h3>
                    <ul className="space-y-1">
                      {category.whatToAvoid.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-xl">
                    <h3 className="font-semibold text-sm flex items-center gap-2 mb-1">
                      <Lightbulb className="h-4 w-4 text-amber-500" /> Example Task
                    </h3>
                    <p className="text-sm">{category.exampleTask}</p>
                  </div>
                  <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl">
                    <p className="text-sm text-rose-800 font-medium">⚠️ {category.safetyNote}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedEntry>

          {/* Suggested Tools */}
          {category.suggestedTools.length > 0 && (
            <AnimatedEntry delay={0.1}>
              <div className="grid sm:grid-cols-2 gap-4">
                {category.suggestedTools.map((slug) => {
                  const tool = tools.find((t) => t.slug === slug);
                  if (!tool) return null;
                  return (
                    <Link key={slug} href={`/tools/${slug}`} className="group">
                      <Card className="h-full transition-all hover:shadow-md">
                        <CardContent className="p-4 flex items-center gap-3">
                          <span className={cn("flex h-8 w-8 items-center justify-center rounded-lg text-white text-sm font-bold", tool.color)}>
                            {tool.name[0]}
                          </span>
                          <div className="flex-1">
                            <p className="font-semibold text-sm group-hover:text-primary transition-colors">{tool.name}</p>
                            <p className="text-xs text-muted-foreground">{tool.tagline}</p>
                          </div>
                          <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </AnimatedEntry>
          )}
        </>
      )}
    </div>
  );
}
