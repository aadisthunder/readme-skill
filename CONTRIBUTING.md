# Contributing

Thanks for helping make project READMEs better. This repository ships
templates, agent skills, and small scripts — the review bar is quality of
thinking, not lines of code.

## Ways to contribute

- **Improve a variant** — sharper structure, better examples, clearer tokens.
- **Add evidence** — a pattern from a README that works, with a link.
- **Extend a skill** — a missing step, a guardrail, a verification command.
- **Fix docs** — typos, broken links, unclear instructions are real bugs here.
- **Report friction** — say which template was confusing while you used it.

## Before you start

- For anything larger than a typo, open an issue first and describe the
  outcome you want. This avoids two people rewriting the same template.
- One idea per pull request.

## House rules

1. **No invented metrics or claims.** If a template shows a number, it must
   come with a reproduce command.
2. **Templates use `{{TOKENS}}`; everything else must not.** The validator
   enforces this.
3. **Examples are real.** Files under `examples/` must describe repositories
   that exist and facts that are true at the time of writing.
4. **Skills are procedures, not essays.** Steps must be executable and the
   output contract must say exactly what the agent returns.
5. **Keep above-the-fold discipline.** Name, one-liner, at most four badges.
6. **Accessibility is not optional.** Alt text on every image, real text in
   headings, sufficient contrast in SVG assets.

## Local checks

```bash
# Structural validation (tokens, links, fences, skill frontmatter)
node scripts/validate.mjs

# Markdown hygiene
npx --yes markdownlint-cli2
```

Both must pass. CI runs exactly these two commands.

## Editing skills

A skill lives at `.agents/skills/<name>/SKILL.md` and starts with:

```yaml
---
name: <folder-name>
description: One sentence: what it does, what it produces, when to use it.
---
```

Then, in order: *when to use*, *inputs/evidence*, *procedure*, *rules*,
*verification*, *output contract*. Keep it under ~150 lines.

## Pull request process

1. Fork, then branch: `git checkout -b improve/engineering-variant`.
2. Make the change and run both local checks.
3. Open a PR using the template. Fill in what changed and why.
4. Expect review comments about evidence, not style preference.

## Code of conduct

By participating you agree to the [Code of Conduct](CODE_OF_CONDUCT.md).
