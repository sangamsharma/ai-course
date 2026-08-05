"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedEntry } from "@/components/shared/animated-entry";
import { glossaryEntries } from "@/data/glossary";
import { Search, BookOpen, ArrowRight } from "lucide-react";

export default function GlossaryPage() {
  const [search, setSearch] = useState("");

  const filtered = glossaryEntries.filter(
    (e) =>
      e.term.toLowerCase().includes(search.toLowerCase()) ||
      e.definition.toLowerCase().includes(search.toLowerCase())
  );

  // Group by first letter
  const grouped: Record<string, typeof glossaryEntries> = {};
  filtered.forEach((entry) => {
    const letter = entry.term[0].toUpperCase();
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(entry);
  });

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <AnimatedEntry>
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">AI Glossary</h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Simple explanations of AI terms. No jargon — just plain English.
          </p>
        </div>
      </AnimatedEntry>

      <div className="relative max-w-md mx-auto mb-10">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder='Search terms... (e.g., "prompt", "hallucination")'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9"
        />
      </div>

      {Object.keys(grouped)
        .sort()
        .map((letter, gi) => (
          <AnimatedEntry key={letter} delay={gi * 0.05}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-4">{letter}</h2>
              <div className="space-y-3">
                {grouped[letter].map((entry) => (
                  <Card key={entry.term}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        {entry.term}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-base">{entry.definition}</p>
                      {entry.analogy && (
                        <div className="bg-muted/50 rounded-lg p-3 flex items-start gap-2">
                          <span className="text-sm shrink-0">💡</span>
                          <p className="text-sm text-muted-foreground italic">
                            {entry.analogy}
                          </p>
                        </div>
                      )}
                      {entry.seeAlso && entry.seeAlso.length > 0 && (
                        <div className="flex items-center gap-2 flex-wrap pt-1">
                          <span className="text-xs text-muted-foreground">See also:</span>
                          {entry.seeAlso.map((term) => (
                            <Badge key={term} variant="outline" className="text-xs">
                              {term}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </AnimatedEntry>
        ))}

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg text-muted-foreground">
            No terms match your search. Try a different word.
          </p>
        </div>
      )}
    </div>
  );
}
