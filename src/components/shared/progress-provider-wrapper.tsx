"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

const ProgressProvider = dynamic(
  () =>
    import("@/hooks/use-progress").then((mod) => ({
      default: mod.ProgressProvider,
    })),
  { ssr: false }
);

export function ProgressProviderWrapper({ children }: { children: ReactNode }) {
  return <ProgressProvider>{children}</ProgressProvider>;
}
