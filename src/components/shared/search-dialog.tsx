"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { modules } from "@/data/modules";
import { scenarios } from "@/data/scenarios";
import { promptTemplates } from "@/data/prompt-templates";
import { glossaryEntries } from "@/data/glossary";
import { Search, BookOpen, FileText, Lightbulb, Bookmark, ArrowRight, Loader2 } from "lucide-react";

interface SearchResult {
  type: "module" | "lesson" | "scenario" | "prompt" | "glossary";
  title: string;
  subtitle: string;
  href: string;
  match: string;
}

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const search = useCallback((q: string) => {
    if (q.length < 2) {
      setResults([]);
      return;
    }

    const lower = q.toLowerCase();
    const found: SearchResult[] = [];

    // Search modules
    for (const mod of modules) {
      if (mod.title.toLowerCase().includes(lower) || mod.description.toLowerCase().includes(lower)) {
        found.push({
          type: "module",
          title: mod.title,
          subtitle: `${mod.lessons.filter((l) => l.content.length > 0).length} lessons`,
          href: `/modules/${mod.slug}`,
          match: lower,
        });
      }
      // Search lessons within modules
      for (const lesson of mod.lessons) {
        if (lesson.content.length === 0) continue;
        if (
          lesson.title.toLowerCase().includes(lower) ||
          lesson.subtitle.toLowerCase().includes(lower)
        ) {
          found.push({
            type: "lesson",
            title: lesson.title,
            subtitle: `Module: ${mod.title}`,
            href: `/modules/${mod.slug}/${lesson.slug}`,
            match: lower,
          });
        }
      }
    }

    // Search scenarios
    for (const s of scenarios) {
      if (s.title.toLowerCase().includes(lower) || s.problem.toLowerCase().includes(lower)) {
        found.push({
          type: "scenario",
          title: s.title,
          subtitle: s.categoryLabel,
          href: `/scenarios/${s.slug}`,
          match: lower,
        });
      }
    }

    // Search prompts
    for (const p of promptTemplates) {
      if (
        p.title.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower) ||
        p.prompt.toLowerCase().includes(lower)
      ) {
        found.push({
          type: "prompt",
          title: p.title,
          subtitle: p.categoryLabel,
          href: `/prompts`,
          match: lower,
        });
      }
    }

    // Search glossary
    for (const g of glossaryEntries) {
      if (g.term.toLowerCase().includes(lower) || g.definition.toLowerCase().includes(lower)) {
        found.push({
          type: "glossary",
          title: g.term,
          subtitle: g.definition.slice(0, 80) + "...",
          href: `/glossary`,
          match: lower,
        });
      }
    }

    setResults(found.slice(0, 20));
  }, []);

  const handleSelect = (href: string) => {
    onClose();
    router.push(href);
  };

  const typeIcons: Record<string, React.ReactNode> = {
    module: <BookOpen className="h-4 w-4" />,
    lesson: <FileText className="h-4 w-4" />,
    scenario: <Lightbulb className="h-4 w-4" />,
    prompt: <Bookmark className="h-4 w-4" />,
    glossary: <Search className="h-4 w-4" />,
  };

  const typeLabels: Record<string, string> = {
    module: "Module",
    lesson: "Lesson",
    scenario: "Scenario",
    prompt: "Template",
    glossary: "Glossary",
  };

  return (
    <Dialog open={open} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-lg max-h-[80vh] flex flex-col p-0 gap-0">
        <DialogHeader className="p-4 pb-2">
          <DialogTitle className="sr-only">Search</DialogTitle>
        </DialogHeader>
        <div className="px-4 pb-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              placeholder="Search modules, lessons, prompts, glossary..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                search(e.target.value);
              }}
              className="pl-9"
              onKeyDown={(e) => {
                if (e.key === "Enter" && results.length > 0) {
                  handleSelect(results[0].href);
                }
              }}
            />
          </div>
        </div>

        {/* Results */}
        <div className="overflow-y-auto flex-1 px-4 pb-4">
          {query.length < 2 && (
            <p className="text-sm text-muted-foreground text-center py-8">
              Type at least 2 characters to search...
            </p>
          )}

          {query.length >= 2 && results.length === 0 && (
            <p className="text-sm text-muted-foreground text-center py-8">
              No results found for &quot;{query}&quot;
            </p>
          )}

          {results.length > 0 && (
            <div className="space-y-1">
              {results.map((r, i) => (
                <button
                  key={`${r.type}-${r.title}-${i}`}
                  onClick={() => handleSelect(r.href)}
                  className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors flex items-start gap-3 group"
                >
                  <span className="shrink-0 mt-0.5 text-muted-foreground group-hover:text-foreground">
                    {typeIcons[r.type]}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm group-hover:text-primary transition-colors truncate">
                        {r.title}
                      </span>
                      <Badge variant="outline" className="text-[10px] shrink-0">
                        {typeLabels[r.type]}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground truncate mt-0.5">{r.subtitle}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 mt-1 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="border-t p-3 text-center">
          <p className="text-[10px] text-muted-foreground">
            Press Enter to go to first result
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
