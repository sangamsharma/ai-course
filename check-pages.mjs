import { chromium } from "playwright";

const PAGES = [
  "/",
  "/modules",
  "/modules/ai-made-simple/what-is-ai",
  "/scenarios",
  "/scenarios/email-grammar",
  "/onboarding",
  "/prompt-builder",
  "/bad-vs-good",
  "/playground",
  "/verification",
  "/tool-chooser",
  "/progress",
  "/capstone",
  "/about",
  "/glossary",
  "/tools",
  "/prompts",
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

for (const path of PAGES) {
  const page = await context.newPage();
  try {
    console.log(`\n=== ${path} ===`);
    await page.goto(`http://localhost:3001${path}`, {
      waitUntil: "networkidle",
      timeout: 15000,
    });

    // Wait for React to hydrate
    await page.waitForTimeout(2000);

    // Check what's in <main>
    const mainText = await page.locator("main").innerText().catch(() => "(no main element)");
    const mainLength = mainText.length;
    const lines = mainText.split("\n").slice(0, 15);

    console.log(`  main text length: ${mainLength} chars`);
    console.log(`  first 15 lines: ${lines.join(" | ")}`);

    // Check for error messages
    const errors = await page.locator('[data-dgst]').count();
    if (errors > 0) {
      console.log(`  ⚠️ ${errors} SSR error bailouts detected`);
      const firstError = await page.locator('[data-dgst]').first().getAttribute("data-msg");
      if (firstError) console.log(`  Error: ${firstError.substring(0, 100)}`);
    }

    // Check console errors
    const consoleErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text().substring(0, 100));
    });

    // Take screenshot
    const safeName = path.replace(/\//g, "-").replace(/^-/, "") || "home";
    await page.screenshot({ path: `screenshots/${safeName}.png`, fullPage: false });
    console.log(`  📸 screenshot: screenshots/${safeName}.png`);

    if (mainLength < 20) {
      console.log(`  🔴 PAGE APPEARS EMPTY`);
    } else {
      console.log(`  ✅ Content found`);
    }

    await page.close();
  } catch (err) {
    console.log(`  ❌ ERROR: ${err.message?.substring(0, 150)}`);
    await page.close();
  }
}

await browser.close();
console.log("\n=== Done ===");
