"use client";

import { ReactNode } from "react";
import { SafetyBanner } from "@/components/shared/safety-banner";

export default function PracticeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SafetyBanner />
      <div className="min-h-screen">{children}</div>
    </>
  );
}
