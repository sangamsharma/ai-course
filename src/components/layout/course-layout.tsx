import { type ReactNode } from "react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";

interface CourseLayoutProps {
  children: ReactNode;
}

export function CourseLayout({ children }: CourseLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Course Header */}
      <div className="border-b bg-white/50">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <Breadcrumbs />
        </div>
      </div>

      {/* Content */}
      <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
