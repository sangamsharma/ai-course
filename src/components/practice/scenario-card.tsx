import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Scenario } from "@/lib/types";
import { ArrowRight, Clock } from "lucide-react";

interface ScenarioCardProps {
  scenario: Scenario;
}

export function ScenarioCard({ scenario }: ScenarioCardProps) {
  return (
    <Link href={`/scenarios/${scenario.slug}`} className="group block">
      <Card className="h-full transition-all hover:shadow-md hover:-translate-y-0.5">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between gap-2 mb-2">
            <Badge variant="secondary" className="text-xs">
              {scenario.categoryLabel}
            </Badge>
            <Badge variant="outline" className="text-xs gap-1">
              <Clock className="h-3 w-3" />
              {scenario.difficulty}
            </Badge>
          </div>
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {scenario.title}
          </CardTitle>
          <CardDescription className="text-sm line-clamp-2">
            {scenario.problem}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-1.5 transition-all">
            View scenario <ArrowRight className="h-3 w-3" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
