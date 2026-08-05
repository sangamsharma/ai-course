"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { SearchDialog } from "@/components/shared/search-dialog";
import { useBrand } from "@/components/shared/brand-provider";
import { cn } from "@/lib/utils";
import { Menu, Sparkles, X, Search } from "lucide-react";

const navLinks = [
  { href: "/modules", label: "Course" },
  { href: "/scenarios", label: "Scenarios" },
  { href: "/tools", label: "AI Tools" },
  { href: "/prompts", label: "Templates" },
  { href: "/glossary", label: "Glossary" },
  { href: "/for-business", label: "For Business" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const brand = useBrand();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 font-bold text-xl text-foreground hover:opacity-80 transition-opacity"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="hidden sm:inline font-heading">{brand.shortName}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(true)}
            className="ml-1"
            aria-label="Search"
          >
            <Search className="h-4 w-4" />
          </Button>
          <Link
            href="/modules"
            className={cn(buttonVariants({ variant: "default", size: "sm" }), "ml-1")}
          >
            Start Learning →
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileOpen && (
        <nav aria-label="Mobile main navigation" className="md:hidden border-t bg-background px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-base font-medium transition-colors",
                  isActive
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/modules"
            onClick={() => setMobileOpen(false)}
            className={cn(buttonVariants({ variant: "default" }), "mt-2 justify-center")}
          >
            Start Learning →
          </Link>
        </nav>
      )}

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
