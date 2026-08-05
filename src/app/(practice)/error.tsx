"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function PracticeError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Practice area error:", error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 mb-4">
          <AlertTriangle className="h-7 w-7 text-amber-600" />
        </span>
        <h2 className="text-xl font-bold mb-2">Practice area unavailable</h2>
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
          Something went wrong loading this exercise. Your progress is safe — try again.
        </p>
        <Button onClick={reset} variant="default">
          <RefreshCw className="mr-2 h-4 w-4" /> Try again
        </Button>
      </div>
    </div>
  );
}
