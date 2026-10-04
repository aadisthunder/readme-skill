#!/usr/bin/env node
/**
 * Kit validation for README Forge.
 *
 * Checks:
 *  1. Every .agents/skills/<name>/SKILL.md has frontmatter with a matching
 *     `name` and a non-empty `description`.
 *  2. Token discipline: `{{TOKENS}}` are allowed only in files under
 *     `templates/`. Everywhere else they are an authoring mistake. Mentions
 *     inside code spans and fenced blocks are ignored, because skills and
 *     docs legitimately explain tokens by quoting them.
 *  3. Relative links resolve to real files (root docs, docs/, profile/,
 *     templates/README.md). Links inside portable files — `examples/**` and
 *     `templates/<variant>/README.md` — are skipped on purpose: those files
 *     target other repositories whose assets do not exist here.
 *  4. Fenced code blocks are balanced (even number of ``` fences per file).
 *  5. README.md contains the required sections: quick start, contributing,
 *     license.
 *
 * Run: node scripts/validate.mjs
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SKIP_DIRS = new Set(["node_modules", ".git", ".freebuff"]);
const errors = [];
const notes = [];
let filesChecked = 0;
let linksChecked = 0;

const rel = (p) => relative(ROOT, p).replaceAll("\\", "/");

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const allFiles = walk(ROOT);
const mdFiles = allFiles.filter((f) => f.endsWith(".md"));

/* 1. Skill frontmatter -------------------------------------------------- */
for (const file of allFiles) {
  const norm = rel(file);
  const match = norm.match(/^\.agents\/skills\/([^/]+)\/SKILL\.md$/);
  if (!match) continue;
  const expectedName = match[1];
  const text = readFileSync(file, "utf8");
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) {
    errors.push(`${norm}: missing YAML frontmatter`);
    continue;
  }
  const name = fm[1].match(/^name:\s*(.+)$/m)?.[1]?.trim();
  const desc = fm[1].match(/^description:\s*(.+)$/m)?.[1]?.trim();
  if (name !== expectedName) {
    errors.push(`${norm}: frontmatter name "${name}" must match folder "${expectedName}"`);
  }
  if (!desc || desc.length < 20) {
    errors.push(`${norm}: frontmatter description is missing or too short`);
  }
}

/* 2-5. Markdown checks -------------------------------------------------- */
const LINK_RE = /\]\(\s*([^)\s]+?)(?:\s+"[^"]*")?\s*\)/g;

for (const file of mdFiles) {
  const norm = rel(file);
  const text = readFileSync(file, "utf8");
  filesChecked++;

  // 2. Token discipline. Ignore token mentions quoted in code spans/blocks.
  const proseOnly = text.replace(/```[\s\S]*?```/g, "").replace(/`[^`]*`/g, "");
  if (!norm.startsWith("templates/") && /\{\{[A-Z0-9_]+\}\}/.test(proseOnly)) {
    const token = proseOnly.match(/\{\{[A-Z0-9_]+\}\}/)[0];
    errors.push(`${norm}: unresolved template token ${token} (tokens belong in templates/ only)`);
  }

  // 3. Relative links. Portable files are checked only for structure.
  //    Links inside code spans/blocks are illustrative, not real references.
  const linkSource = proseOnly;
  const isPortable =
    norm.startsWith("examples/") || /^templates\/[^/]+\/README\.md$/.test(norm);
  if (!isPortable) {
    for (const m of linkSource.matchAll(LINK_RE)) {
      let target = m[1];
      if (/^(https?:|mailto:|tel:|#)/i.test(target)) continue;
      if (target.includes("{{")) continue;
      target = target.split("#")[0].split("?")[0];
      if (!target) continue;
      const abs = resolve(dirname(file), target);
      linksChecked++;
      if (!existsSync(abs)) {
        errors.push(`${norm}: broken relative link -> ${m[1]}`);
      }
    }
  } else {
    notes.push(`${norm}: relative links not verified (portable file — targets live in another repository)`);
  }

  // 4. Fence balance
  const fences = text.match(/^```/gm) ?? [];
  if (fences.length % 2 !== 0) {
    errors.push(`${norm}: unbalanced code fences (${fences.length} found)`);
  }
}

/* 5. Required README sections ------------------------------------------- */
if (existsSync(join(ROOT, "README.md"))) {
  const readme = readFileSync(join(ROOT, "README.md"), "utf8").toLowerCase();
  for (const section of ["quick start", "contributing", "license"]) {
    if (!readme.includes(section)) {
      errors.push(`README.md: missing required section "${section}"`);
    }
  }
}

/* Report ---------------------------------------------------------------- */
console.log(`Checked ${filesChecked} Markdown files, ${linksChecked} relative links.`);
for (const note of notes) console.log(`note: ${note}`);

if (errors.length) {
  console.error(`\n${errors.length} problem(s) found:\n`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}

console.log("\n✓ Kit validation passed.");
