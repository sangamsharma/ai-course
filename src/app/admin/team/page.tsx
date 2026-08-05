import { TeamDashboard } from "@/components/progress/team-dashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team Dashboard",
  description: "Monitor learner progress across your organisation.",
};

export default function TeamDashboardPage() {
  return <TeamDashboard />;
}
