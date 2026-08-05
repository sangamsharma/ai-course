import { promises as fs } from "fs";
import path from "path";
import type { Module } from "@/lib/types";

/**
 * MDX Content Loader
 *
 * Loads module content from .mdx files in src/content/modules/.
 * Falls back to the TypeScript data files for modules without MDX files.
 *
 * MDX file structure:
 * ---
 * id: "module-slug"
 * title: "Module Title"
 * description: "Module description"
 * icon: "Sparkles"
 * color: "violet"
 * order: 7
 * estimatedMinutes: 45
 * ---
 *
 * # Lesson 1: Lesson Title
 * subtitle: Lesson subtitle
 * order: 1
 * estimatedMinutes: 12
 *
 * ... lesson content in markdown ...
 *
 * ## Exercise: quiz
 * id: mXX-q1
 * question: What is...
 * ...
 *
 * ## Key Takeaways
 * - Takeaway 1
 * - Takeaway 2
 */

const CONTENT_DIR = path.join(process.cwd(), "src/content/modules");

export interface MdxModuleMeta {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  color: string;
  order: number;
  estimatedMinutes: number;
}

/**
 * Check if MDX content exists for a module.
 */
export async function hasMdxContent(moduleSlug: string): Promise<boolean> {
  try {
    await fs.access(path.join(CONTENT_DIR, `${moduleSlug}.mdx`));
    return true;
  } catch {
    return false;
  }
}

/**
 * List all available MDX module files.
 */
export async function listMdxModules(): Promise<string[]> {
  try {
    const files = await fs.readdir(CONTENT_DIR);
    return files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(".mdx", ""));
  } catch {
    return []; // directory doesn't exist yet
  }
}

/**
 * Read raw MDX content for a module.
 */
export async function readMdxModule(moduleSlug: string): Promise<string | null> {
  try {
    return await fs.readFile(path.join(CONTENT_DIR, `${moduleSlug}.mdx`), "utf-8");
  } catch {
    return null;
  }
}

/**
 * Create the content directory if it doesn't exist.
 */
export async function ensureContentDir(): Promise<void> {
  try {
    await fs.mkdir(CONTENT_DIR, { recursive: true });
  } catch {
    // already exists
  }
}
