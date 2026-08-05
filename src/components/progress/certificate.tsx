"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Printer } from "lucide-react";

interface CertificateProps {
  name: string;
  courseName: string;
  completedDate: string;
  badgeCount: number;
  lessonCount: number;
}

export function Certificate({ name, courseName, completedDate, badgeCount, lessonCount }: CertificateProps) {
  const certRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = async () => {
    // Use print-to-PDF approach — simple and works everywhere
    window.print();
  };

  return (
    <>
      {/* Print-only styles */}
      <style jsx global>{`
        @media print {
          body * { visibility: hidden; }
          #certificate-print, #certificate-print * { visibility: visible; }
          #certificate-print { position: absolute; left: 0; top: 0; width: 100%; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="space-y-6">
        {/* Actions */}
        <div className="no-print flex justify-center gap-3">
          <Button onClick={handlePrint} variant="default">
            <Printer className="mr-2 h-4 w-4" /> Print Certificate
          </Button>
          <Button onClick={handleDownload} variant="outline">
            <Download className="mr-2 h-4 w-4" /> Save as PDF
          </Button>
        </div>

        {/* Certificate */}
        <div
          ref={certRef}
          id="certificate-print"
          className="max-w-2xl mx-auto border-4 border-double border-primary/30 rounded-2xl p-8 sm:p-12 bg-white"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Certificate of Completion
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-2">
              AI for Everyone
            </h2>
            <div className="w-24 h-0.5 bg-primary/30 mx-auto my-4" />
            <p className="text-lg text-muted-foreground">
              This certifies that
            </p>
          </div>

          {/* Name */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold font-heading border-b-2 border-primary/20 pb-3 inline-block px-8">
              {name || "[Your Name]"}
            </h1>
          </div>

          {/* Body */}
          <div className="text-center mb-8 space-y-2">
            <p className="text-lg leading-relaxed max-w-md mx-auto">
              has successfully completed the{" "}
              <strong>{courseName}</strong> course,
              demonstrating practical AI skills for everyday life and work.
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{lessonCount}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Lessons</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">{badgeCount}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Badges</p>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center border-t pt-6">
            <p className="text-sm text-muted-foreground">
              Completed on {completedDate}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              AI for Everyone — aiforeveryone.courses
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
