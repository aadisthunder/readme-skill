# README variants

Four templates, each optimized for a different reader and a different job.
Choose by what the reader must do next — not by how fancy the file looks.

| Variant | Reader | Job to be done | Signature sections | Avoid when |
| :--- | :--- | :--- | :--- | :--- |
| [**A — Flagship**](A-flagship/README.md) | Visitor deciding whether to try it | Click the live demo, understand in 20 seconds | Banner, GIF, screenshot gallery, feature grid, comparison table | No UI or screenshots to show |
| [**B — Engineering**](B-engineering/README.md) | Engineer reviewing the internals | Trust the architecture and the tests | Flow + sequence + ER diagrams, module map, decisions & trade-offs, reproducible test table | Audience is non-technical |
| [**C — Minimal**](C-minimal/README.md) | Developer who already knows what they want | Install it, use it, leave | One image, three commands, links | You must teach a concept first |
| [**D — Launch**](D-launch/README.md) | Launch-day crowd, contributors, recruiters | Star, try, contribute | Story, animated proof, metrics with reproduce commands, community table, roadmap | Claims cannot be proven by a command |

## Choosing in one line

- Visual product → **A**
- Engine, SDK, infrastructure → **B**
- Library with great external docs → **C**
- Public launch, portfolio centerpiece → **D**

When in doubt, default to **A** for products and **B** for code.

## Tokens

Replace every `{{TOKEN}}` before publishing. Tokens follow the pattern
`{{UPPER_SNAKE_CASE}}`; some appear inside URLs, some inside tables.

| Token group | Examples | Notes |
| :--- | :--- | :--- |
| Identity | `{{PROJECT_NAME}}`, `{{TAGLINE}}`, `{{SHORT_DESCRIPTION}}` | One sentence, no buzzwords |
| Links | `{{LIVE_DEMO_URL}}`, `{{CI_URL}}`, `{{DOCS_URL}}` | Every URL must resolve before merge |
| Assets | `{{LOGO_PATH}}`, `{{GIF_PATH}}`, `{{SCREENSHOT_*}}` | Repo-relative paths; alt text mandatory |
| Badges | `{{CI_BADGE_URL}}`, `{{COVERAGE_BADGE_URL}}` | See [docs/dynamic-badges.md](../docs/dynamic-badges.md) |
| Content | `{{BENEFIT_*}}`, `{{FEATURE_CARD_*}}`, `{{FAQ_*}}` | Real facts only — no invented metrics |

## House rules (all variants)

1. **No invented numbers.** Every metric needs a reproduce command next to it.
2. **≤ 4 badges above the fold.** Curate; a wall of badges reads as noise.
3. **Alt text on every image.** It is accessibility, and it survives broken links.
4. **Quick start ≤ 3 commands.** Everything else goes into a collapsed section.
5. **Link-check before pushing.** Anchors, images, and LICENSE links included.
6. **Guidance comments are invisible on GitHub but must be deleted** (or left as
   HTML comments for future maintainers — never as visible text).

## Related

- [Variant guide (when / why)](../docs/variants.md)
- [Pattern research (what the best READMEs do)](../docs/patterns.md)
- [Launch checklist](../docs/launch-checklist.md)
- Skill: [`readme-forge`](../.agents/skills/readme-forge/SKILL.md) — fills a template from real repository evidence
