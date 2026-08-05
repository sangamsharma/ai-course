import type { ModuleColor } from "@/lib/types";

export interface BrandConfig {
  /** Display name used in header, footer, and metadata */
  name: string;
  /** Short name for tight spaces */
  shortName: string;
  /** Site description for metadata */
  description: string;
  /** URL for the logo image. Falls back to text logo if empty. */
  logoUrl?: string;
  /** Favicon URL override */
  faviconUrl?: string;
  /** Primary brand color (hex) */
  primaryColor: string;
  /** Primary foreground color for text on primary */
  primaryForeground: string;
  /** Accent color for badges, highlights */
  accentColor: string;
  /** Font family for headings */
  headingFont: string;
  /** Module color palette override */
  moduleColors?: Partial<Record<ModuleColor, { base: string; light: string; text: string }>>;
  /** Contact email shown in footer */
  contactEmail?: string;
  /** Company/org name for copyright */
  companyName?: string;
  /** Custom footer links */
  footerLinks?: { group: string; links: { label: string; href: string }[] }[];
}

export const defaultBrand: BrandConfig = {
  name: "AI for Everyone",
  shortName: "AI4Everyone",
  description: "A friendly, interactive course teaching practical AI skills for everyday life.",
  primaryColor: "#7c3aed", // violet-600
  primaryForeground: "#ffffff",
  accentColor: "#f59e0b", // amber-500
  headingFont: "Playfair Display",
  contactEmail: "hello@aiforeveryone.courses",
  companyName: "AI for Everyone",
};
