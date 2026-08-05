import { notFound } from "next/navigation";
import { ScenarioDetail } from "@/components/practice/scenario-detail";
import { scenarios } from "@/data/scenarios";

export default async function ScenarioDetailPage({
  params,
}: {
  params: Promise<{ scenarioSlug: string }>;
}) {
  const { scenarioSlug } = await params;
  const scenario = scenarios.find((s) => s.slug === scenarioSlug);
  if (!scenario) notFound();

  return <ScenarioDetail scenario={scenario} />;
}
