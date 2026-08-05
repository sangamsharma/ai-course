"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle } from "lucide-react";
import { useProgress } from "@/hooks/use-progress";

interface PrivacyWarningDialogProps {
  open: boolean;
  onAcknowledge: () => void;
}

export function PrivacyWarningDialog({ open, onAcknowledge }: PrivacyWarningDialogProps) {
  const { acknowledgePrivacy } = useProgress();

  const handleAcknowledge = () => {
    acknowledgePrivacy();
    onAcknowledge();
  };

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
              <Shield className="h-5 w-5" />
            </span>
            <DialogTitle className="text-xl">Stay Safe with AI</DialogTitle>
          </div>
          <DialogDescription className="text-base space-y-3">
            <p>Before you type anything, please remember:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                <span><strong>Do not enter</strong> passwords, ID numbers, bank details, private customer data, medical records, legal documents, or confidential work information.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>AI can be wrong.</strong> Always verify important facts, numbers, and claims before using them.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                <span><strong>Use general descriptions.</strong> Instead of pasting real documents, describe the situation in your own words.</span>
              </li>
            </ul>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleAcknowledge} className="w-full">
            I Understand — Let&apos;s Practice Safely
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
