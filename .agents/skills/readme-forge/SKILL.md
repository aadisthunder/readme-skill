---
name: readme-forge
description: Generates or upgrades a repository README using four selectable variants (Flagship, Engineering, Minimal, Launch). It gathers evidence from the actual repository, fills the matching template, verifies every claim with a command, and outputs a diff-ready README plus a fill report.
---

# readme-forge

Turn a repository into a README a stranger can trust in 30 seconds.

## When to use

- A repo has no README, a stale README, or a README that reads like a
  feature dump.
- Someone asks to "make this project look professional".
- A project is about to be launched, submitted, or shown in a portfolio.

## Non-negotiables

1. **Never invent a fact.** No metric, badge, test count, or URL goes in
   unless it was verified from the repository or a command's output.
2. **Fill from evidence, not imagination.** Read the code before writing prose.
3. **One variant per repository.** Mixing variants produces a padded README.
4. **Delete guidance comments after filling**, or keep them deliberately as
   HTML comments for future maintainers.
5. **Every image has alt text.** Every relative link resolves.

## Step 1 — Evidence pass

Run these and record what you find (skip what does not exist):

```bash
# Identity and entry points
cat README.md            # existing claims to verify or keep
cat package.json         # name, description, scripts, engines
ls -la                   # top-level layout

# Real capabilities
cat .github/workflows/*.yml   # what CI actually runs
find . -maxdepth 2 -name "*.test.*" -o -name "*.spec.*" | head -20
cat LICENSE              # exact license

# Real assets
find . -iname "*.png" -o -iname "*.gif" -o -iname "*.svg" | head -30
```

Then verify every claim you plan to make:

```bash
npm test                 # or the repo's actual test command
npm run build --if-present
```

Record: project name, tagline, license, test command + output, live URL
(only if confirmed reachable), screenshot/GIF paths, tech stack with versions,
install commands that actually work from a clean clone.

## Step 2 — Choose the variant

| Signal in the repo | Variant | Template |
| :--- | :--- | :--- |
| Screenshots, UI, live demo | **A — Flagship** | [`templates/A-flagship/README.md`](../../../templates/A-flagship/README.md) |
| Engines, SDKs, pipelines, tests as a selling point | **B — Engineering** | [`templates/B-engineering/README.md`](../../../templates/B-engineering/README.md) |
| Small library, strong external docs | **C — Minimal** | [`templates/C-minimal/README.md`](../../../templates/C-minimal/README.md) |
| Public launch, story, community growth | **D — Launch** | [`templates/D-launch/README.md`](../../../templates/D-launch/README.md) |

If the user did not specify, propose two variants with one-line reasons and let
them choose. Default to A for products, B for code.

## Step 3 — Fill pass

1. Copy the template to the repo as `README.md` (never edit the template itself).
2. Replace every `{{TOKEN}}` using the evidence table from Step 1.
3. Write prose in this order: what it is → why it matters → how to try it.
4. Keep sections the reader needs; delete sections the repo cannot support
   (no benchmarks → no benchmark table; no GIF → static screenshot).
5. Keep the quick start to at most three commands; collapse the rest.

## Step 4 — Verification pass

```bash
# From the README Forge kit (checks links, tokens, fences):
node scripts/validate.mjs

# Markdown hygiene:
npx --yes markdownlint-cli2 "README.md"
```

Checklist:

- [ ] Every relative link resolves in the target repo.
- [ ] Every badge URL returns an image (curl or browser).
- [ ] Every command in the README was executed and passed.
- [ ] No `{{TOKEN}}` remains.
- [ ] Above the fold fits one screen: name, one-liner, ≤ 4 badges, nav links.
- [ ] No emoji in headings unless the project's voice already uses them.
- [ ] The README does not claim anything the tests do not demonstrate.

## Step 5 — Output contract

Return, in this order:

1. **The README** — the complete file, ready to commit.
2. **A fill report** — table of `Token` → `Value` → `Source of truth`
   (file path, command output, or "user provided").
3. **Claims verified** — each factual claim with the command that proves it.
4. **Claims removed** — anything the evidence did not support (say why).
5. **Follow-ups** — the three highest-value additions (demo GIF, CI badge,
   CONTRIBUTING, launch assets).

## Anti-patterns

- Feature lists with no user benefit ("uses Redux" vs "your work survives reloads").
- Badge walls (> 4 above the fold).
- Screenshots without captions, or screenshots of code.
- Setup instructions that skip the environment variables step.
- Marketing superlatives ("blazingly fast") without a measurement.
