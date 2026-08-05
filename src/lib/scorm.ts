/**
 * SCORM 1.2 Package Exporter
 *
 * Generates a zip file containing a SCORM-compliant course package
 * that can be uploaded to any SCORM 1.2-compatible LMS.
 */

import JSZip from "jszip";
import type { Module, Lesson } from "@/lib/types";

interface ScormOptions {
  courseTitle: string;
  courseDescription: string;
  modules: Module[];
  identifier?: string;
}

export async function generateScormPackage(options: ScormOptions): Promise<Blob> {
  const zip = new JSZip();
  const identifier = options.identifier || `ai4e-${Date.now()}`;

  // imsmanifest.xml — the SCORM manifest
  const manifest = buildManifest(options, identifier);
  zip.file("imsmanifest.xml", manifest);

  // Shared SCORM API wrapper (JavaScript)
  zip.file("shared/scorm-api.js", SCORM_API_JS);

  // HTML wrapper for each lesson
  for (const mod of options.modules) {
    for (const lesson of mod.lessons) {
      if (lesson.content.length === 0) continue;
      const html = buildLessonHtml(mod, lesson, identifier);
      zip.file(`lessons/${mod.slug}/${lesson.slug}.html`, html);
    }
  }

  // Course entry point
  const indexHtml = buildIndexHtml(options);
  zip.file("index.html", indexHtml);

  return zip.generateAsync({ type: "blob" });
}

function buildManifest(opts: ScormOptions, identifier: string): string {
  let items = "";
  for (const mod of opts.modules) {
    items += `    <item identifier="${identifier}-${mod.slug}" identifierref="res-${mod.slug}">\n      <title>${escapeXml(mod.title)}</title>\n`;
    for (const lesson of mod.lessons) {
      if (lesson.content.length === 0) continue;
      items += `      <item identifier="${identifier}-${mod.slug}-${lesson.slug}" identifierref="res-${mod.slug}-${lesson.slug}">\n        <title>${escapeXml(lesson.title)}</title>\n      </item>\n`;
    }
    items += "    </item>\n";
  }

  let resources = "";
  for (const mod of opts.modules) {
    const hasContent = mod.lessons.some((l) => l.content.length > 0);
    if (!hasContent) continue;
    resources += `    <resource identifier="res-${mod.slug}" type="webcontent" adlcp:scormtype="asset" href="index.html">\n      <file href="index.html"/>\n      <file href="shared/scorm-api.js"/>\n    </resource>\n`;
    for (const lesson of mod.lessons) {
      if (lesson.content.length === 0) continue;
      resources += `    <resource identifier="res-${mod.slug}-${lesson.slug}" type="webcontent" adlcp:scormtype="sco" href="lessons/${mod.slug}/${lesson.slug}.html">\n      <file href="lessons/${mod.slug}/${lesson.slug}.html"/>\n      <file href="shared/scorm-api.js"/>\n    </resource>\n`;
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<manifest identifier="${identifier}" version="1.0"
  xmlns="http://www.imsproject.org/xsd/imscp_rootv1p1p2"
  xmlns:adlcp="http://www.adlnet.org/xsd/adlcp_rootv1p2"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.imsproject.org/xsd/imscp_rootv1p1p2 imscp_rootv1p1p2.xsd
                      http://www.adlnet.org/xsd/adlcp_rootv1p2 adlcp_rootv1p2.xsd">
  <organizations default="${identifier}-org">
    <organization identifier="${identifier}-org">
      <title>${escapeXml(opts.courseTitle)}</title>
${items}    </organization>
  </organizations>
  <resources>
${resources}  </resources>
</manifest>`;
}

function buildIndexHtml(opts: ScormOptions): string {
  const modLinks = opts.modules
    .filter((m) => m.lessons.some((l) => l.content.length > 0))
    .map(
      (m) =>
        `<li><strong>${escapeXml(m.title)}</strong><ul>${m.lessons
          .filter((l) => l.content.length > 0)
          .map((l) => `<li><a href="lessons/${m.slug}/${l.slug}.html">${escapeXml(l.title)}</a></li>`)
          .join("")}</ul></li>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>${escapeXml(opts.courseTitle)}</title></head>
<body>
<h1>${escapeXml(opts.courseTitle)}</h1>
<p>${escapeXml(opts.courseDescription)}</p>
<ul>${modLinks}</ul>
<script src="shared/scorm-api.js"></script>
</body>
</html>`;
}

function buildLessonHtml(mod: Module, lesson: Lesson, identifier: string): string {
  const contentHtml = lesson.content
    .map((block) => {
      switch (block.type) {
        case "text":
          return `<p>${escapeXml(block.body)}</p>`;
        case "bullet-list":
          return `<ul>${block.items.map((i) => `<li>${escapeXml(i)}</li>`).join("")}</ul>`;
        case "code-example":
          return `<pre><code>${escapeXml(block.code)}</code></pre>`;
        case "tip-box":
          return `<blockquote><strong>${escapeXml(block.title)}</strong><p>${escapeXml(block.body)}</p></blockquote>`;
        default:
          return "";
      }
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${escapeXml(lesson.title)}</title>
  <script src="../../shared/scorm-api.js"></script>
  <script>
    window.onload = function() {
      if (typeof scormInit === 'function') scormInit();
      if (typeof scormSetComplete === 'function') setTimeout(scormSetComplete, 5000);
    };
    window.onunload = function() {
      if (typeof scormFinish === 'function') scormFinish();
    };
  </script>
</head>
<body>
  <h1>${escapeXml(mod.title)}: ${escapeXml(lesson.title)}</h1>
  ${contentHtml}
  ${lesson.keyTakeaways.length > 0 ? `<h3>Key Takeaways</h3><ul>${lesson.keyTakeaways.map((t) => `<li>${escapeXml(t)}</li>`).join("")}</ul>` : ""}
</body>
</html>`;
}

function escapeXml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const SCORM_API_JS = `
var scorm = { completed: false, score: 0 };
function scormInit() {
  try { if (window.API) { window.API.LMSInitialize(""); } } catch(e) {}
}
function scormSetComplete() {
  if (scorm.completed) return;
  scorm.completed = true;
  try { if (window.API) { window.API.LMSSetValue("cmi.core.lesson_status", "completed"); window.API.LMSCommit(""); } } catch(e) {}
}
function scormFinish() {
  try { if (window.API) { window.API.LMSFinish(""); } } catch(e) {}
}
`;
