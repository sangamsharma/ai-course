"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { promptTemplates } from "@/data/prompt-templates";
import { cn } from "@/lib/utils";
import { Search, Copy, Check, ArrowRight, Filter } from "lucide-react";
import type { PromptCategory } from "@/lib/types";

const categories: { value: PromptCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "email", label: "Email" },
  { value: "social-media", label: "Social Media" },
  { value: "writing", label: "Writing" },
  { value: "planning", label: "Planning" },
  { value: "business", label: "Business" },
  { value: "summarize", label: "Summarize" },
  { value: "creative", label: "Creative" },
];

export default function PromptsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<PromptCategory | "all">("all");

  const filtered = promptTemplates.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.prompt.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || p.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <AnimatedEntry>
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Prompt Template Library</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready-to-use prompt templates for everyday tasks. Copy, customize, and use — no experience needed.
          </p>
        </div>
      </AnimatedEntry>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8 max-w-2xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search prompts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Category Chips */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            aria-pressed={category === cat.value}
            className={cn(
              "px-3 py-1.5 rounded-full text-sm font-medium transition-all border",
              category === cat.value
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-background text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Results */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((template, i) => (
          <AnimatedEntry key={template.slug} delay={i * 0.04}>
            <Card className="h-full transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">{template.categoryLabel}</Badge>
                  <Badge variant="outline" className="text-xs">
                    {template.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{template.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{template.description}</p>
              </CardHeader>
              <CardContent>
                <div className="bg-muted rounded-lg p-3 text-xs font-mono text-muted-foreground mb-3 line-clamp-3">
                  {template.prompt}
                </div>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  💡 {template.usageTip.substring(0, 80)}...
                </p>
              </CardContent>
            </Card>
          </AnimatedEntry>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">No templates found. Try a different search or category.</p>
        </div>
      )}
    </div>
  );
}
