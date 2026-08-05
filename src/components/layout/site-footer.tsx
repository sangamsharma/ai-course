import Link from "next/link";
import { Sparkles, Heart } from "lucide-react";
import { defaultBrand } from "@/lib/brand";

const footerLinks = {
  Course: [
    { label: "Modules", href: "/modules" },
    { label: "AI Tools", href: "/tools" },
    { label: "Templates", href: "/prompts" },
    { label: "Glossary", href: "/glossary" },
  ],
  Practice: [
    { label: "Onboarding", href: "/onboarding" },
    { label: "Scenarios", href: "/scenarios" },
    { label: "Prompt Builder", href: "/prompt-builder" },
    { label: "Sandbox", href: "/playground" },
    { label: "Progress", href: "/progress" },
  ],
  Business: [
    { label: "For Business", href: "/for-business" },
    { label: "Pricing", href: "/pricing" },
    { label: "Book a Briefing", href: "/book" },
    { label: "Contact", href: "/contact" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 font-bold text-xl text-foreground mb-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="font-heading">{defaultBrand.name}</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              A friendly, jargon-free course teaching practical AI skills for everyday life
              and small business. No technical background needed.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-semibold text-sm text-foreground mb-3 uppercase tracking-wider">
                {heading}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {defaultBrand.companyName || defaultBrand.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" /> for learners everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
