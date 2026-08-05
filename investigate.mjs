import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });

// Capture ALL console messages
const logs = [];
page.on("console", msg => logs.push(`[${msg.type()}] ${msg.text().substring(0, 200)}`));
page.on("pageerror", err => logs.push(`[PAGE ERROR] ${err.message.substring(0, 200)}`));

// Test 4 key pages
const TEST_PAGES = ["/modules", "/scenarios", "/onboarding", "/prompt-builder"];

for (const path of TEST_PAGES) {
  console.log(`\n${"=".repeat(60)}`);
  console.log(`TESTING: ${path}`);
  console.log(`${"=".repeat(60)}`);

  logs.length = 0;

  try {
    await page.goto(`http://localhost:3000${path}`, { waitUntil: "networkidle", timeout: 20000 });
    await page.waitForTimeout(3000); // Wait for full hydration

    // 1. Check console errors
    const errors = logs.filter(l => l.includes("[error]") || l.includes("[PAGE ERROR]") || l.includes("[warning]"));
    if (errors.length > 0) {
      console.log("\n  CONSOLE ERRORS:");
      errors.forEach(e => console.log(`    ${e}`));
    } else {
      console.log("\n  No console errors or warnings");
    }

    // 2. Check if <main> exists and has children
    const mainExists = await page.locator("main").count();
    console.log(`\n  <main> elements: ${mainExists}`);

    const mainChildren = await page.locator("main > *").count();
    console.log(`  <main> direct children: ${mainChildren}`);

    // 3. Check for SSR bailout markers
    const bailouts = await page.locator('[data-dgst]').count();
    console.log(`  SSR bailout markers: ${bailouts}`);

    // 4. Check for visible text (not just innerText)
    const visibleText = await page.locator("main").innerText().catch(() => "(none)");
    console.log(`  Main text length: ${visibleText.length} chars`);
    console.log(`  First 100 chars: "${visibleText.substring(0, 100)}"`);

    // 5. Check for elements with opacity:0 or display:none on main
    const mainBox = await page.locator("main").boundingBox();
    if (mainBox) {
      console.log(`  <main> bounding box: ${mainBox.width}x${mainBox.height} at (${mainBox.x}, ${mainBox.y})`);
      if (mainBox.height < 10) {
        console.log("  🔴 <main> height is nearly zero — visually empty!");
      }
    } else {
      console.log("  🔴 <main> has no bounding box — not rendered!");
    }

    // 6. Check opacity/display on main
    const mainOpacity = await page.locator("main").evaluate(el => window.getComputedStyle(el).opacity);
    const mainDisplay = await page.locator("main").evaluate(el => window.getComputedStyle(el).display);
    console.log(`  <main> CSS: opacity=${mainOpacity}, display=${mainDisplay}`);

    // 7. Check the entire body height
    const bodyHeight = await page.evaluate(() => document.body.scrollHeight);
    console.log(`  Body scroll height: ${bodyHeight}px`);

    // 8. Screenshot
    await page.screenshot({ path: `screenshots/debug-${path.replace(/\//g, "-").replace(/^-/, "")}.png`, fullPage: true });
    console.log(`  Screenshot saved`);

    // 9. Check for error boundaries
    const errorTexts = await page.locator('text=/error|Error|unexpected|failed/i').count();
    if (errorTexts > 0) {
      const errorContent = await page.locator('text=/error|Error|unexpected|failed/i').allInnerTexts();
      console.log(`  ⚠️ Error text found on page:`);
      errorContent.forEach(t => console.log(`    "${t.substring(0, 200)}"`));
    }

    // 10. Dump the actual HTML of <main>
    const mainHTML = await page.locator("main").innerHTML().catch(() => "(none)");
    console.log(`\n  <main> HTML preview (first 500 chars):`);
    console.log(`    ${mainHTML.substring(0, 500)}`);

  } catch (err) {
    console.log(`  ❌ FAILED: ${err.message?.substring(0, 200)}`);
  }
}

await browser.close();
console.log("\n\n=== INVESTIGATION COMPLETE ===");
