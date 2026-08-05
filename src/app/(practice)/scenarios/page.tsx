"use client";

import { useState } from "react";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { SectionTitle } from "@/components/shared/section-title";
import { ScenarioCard } from "@/components/practice/scenario-card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { scenarios } from "@/data/scenarios";
import { cn } from "@/lib/utils";
import { Search, BookOpen, Sparkles } from "lucide-react";
import Link from "next/link";
import type { ScenarioCategory } from "@/lib/types";

const categories: { value: ScenarioCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "daily-life", label: "Daily Life" },
  { value: "study", label: "Study" },
  { value: "job-search", label: "Job Search" },
  { value: "business", label: "Business" },
  { value: "workplace", label: "Workplace" },
  { value: "forms", label: "Forms" },
  { value: "translation", label: "Translation" },
  { value: "health", label: "Health" },
  { value: "money", label: "Money & Safety" },
  { value: "agriculture", label: "Agriculture" },
];

export default function ScenariosPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ScenarioCategory | "all">("all");

  const filtered = scenarios.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.problem.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "all" || s.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <AnimatedEntry>
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="h-3.5 w-3.5 mr-1" /> {scenarios.length} Practice Scenarios
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Scenario Library</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn by doing. Each scenario gives you a real-world problem, practice data, and a
            reusable template — so you can practise AI safely before applying it to your own life.
          </p>
        </div>
      </AnimatedEntry>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6 max-w-2xl mx-auto">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search scenarios..."
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
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((scenario, i) => (
            <AnimatedEntry key={scenario.slug} delay={i * 0.04}>
              <ScenarioCard scenario={scenario} />
            </AnimatedEntry>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-lg text-muted-foreground">No scenarios match your search. Try a different category.</p>
        </div>
      )}

      <AnimatedEntry delay={0.4}>
        <div className="text-center mt-12 p-8 rounded-2xl bg-primary/5 border">
          <h2 className="text-2xl font-bold mb-3">New to AI?</h2>
          <p className="text-muted-foreground mb-6">
            Take our quick diagnostic to find the best scenarios for you.
          </p>
          <Link
            href="/onboarding"
            className={cn(buttonVariants({ variant: "default" }))}
          >
            Start Onboarding →
          </Link>
        </div>
      </AnimatedEntry>
    </div>
  );
}

import { buttonVariants } from "@/components/ui/button";
