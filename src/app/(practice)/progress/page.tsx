"use client";

import { ProgressDashboard } from "@/components/progress/progress-dashboard";
import { ProgressProviderWrapper } from "@/components/shared/progress-provider-wrapper";

export default function ProgressPage() {
  return (
    <ProgressProviderWrapper>
      <ProgressDashboard />
    </ProgressProviderWrapper>
  );
}
