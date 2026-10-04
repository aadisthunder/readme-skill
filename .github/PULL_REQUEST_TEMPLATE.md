# Pull request

## What does this change?

<!-- One paragraph. Which template, skill, or doc, and what changed. -->

## Why?

<!-- The reader problem this solves. Link the issue if one exists. -->

## Type

- [ ] Template change (variant structure, tokens, sections)
- [ ] Skill change (procedure, rules, output contract)
- [ ] Docs / examples
- [ ] Tooling (scripts, workflows, lint)

## Checklist

- [ ] `node scripts/validate.mjs` passes.
- [ ] `npx --yes markdownlint-cli2 "**/*.md"` passes.
- [ ] Every relative link added resolves.
- [ ] No invented metrics: each number has a reproduce command or source.
- [ ] Tokens `{{LIKE_THIS}}` exist only under `templates/`.
- [ ] Screenshots attached for any visual change (before / after).

## Notes for reviewers

<!-- Anything ambiguous, or decisions you want a second opinion on. -->
