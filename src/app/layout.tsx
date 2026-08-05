import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { BrandProvider } from "@/components/shared/brand-provider";
import { PageTransition } from "@/components/shared/motion-components";
import { Analytics } from "@/components/shared/analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI for Everyone — Learn ChatGPT, Claude & Gemini",
    template: "%s | AI for Everyone",
  },
  description:
    "A friendly, interactive course teaching practical AI skills for everyday life. Master ChatGPT, Claude, and Gemini — no technical background needed.",
  keywords: [
    "AI course",
    "ChatGPT tutorial",
    "Claude AI",
    "Gemini",
    "AI for beginners",
    "prompt engineering",
    "AI for business",
    "AI for elderly",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        {/* Skip to content link for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>

        <BrandProvider>
          <TooltipProvider>
            <SiteHeader />
            <main className="flex-1" id="main-content">
              <PageTransition>{children}</PageTransition>
            </main>
            <SiteFooter />
          </TooltipProvider>
        </BrandProvider>
        <Analytics />
      </body>
    </html>
  );
}
