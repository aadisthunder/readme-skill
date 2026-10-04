---
name: oss-launch
description: Audits a repository for open-source launch readiness with a weighted score across license, README, docs, community, security, automation, and discoverability; then generates the missing launch assets (topics, social preview spec, changelog, release plan, good-first-issue plan) as files.
---

# oss-launch

Score a repository honestly, then fix the gaps in priority order.

## When to use

- A repo is public (or about to be) and the goal is adoption: stars, users,
  contributors.
- Someone asks "what am I missing before I launch this?".

## Scoring model (100 points)

| Category | Weight | Full points mean |
| :--- | ---: | :--- |
| README | 20 | Passes the `readme-forge` checklist; quick start works from a clean clone |
| License | 10 | LICENSE file present and referenced from README |
| Community files | 15 | CONTRIBUTING + CODE_OF_CONDUCT + issue/PR templates |
| Security | 15 | SECURITY.md, no committed secrets, honest demo-credential disclaimer |
| Automation | 15 | CI on pull requests, tests runnable with one command, live status badge |
| Discoverability | 15 | 8-14 repo topics, description, social preview (1280×640), releases tagged |
| Docs | 10 | Deeper docs for anything the README cannot hold (architecture, deploy, FAQ) |

Scoring rules: score only what you can verify in the repo or on GitHub.
Unknown = mark as `unknown`, never as failure or success.

## Step 1 — Evidence pass

```bash
ls -la
cat README.md LICENSE 2>/dev/null
ls .github .github/workflows .github/ISSUE_TEMPLATE 2>/dev/null
cat package.json 2>/dev/null
git log --oneline -10
git tag --sort=-creatordate | head -5
```

Check on GitHub (read-only): repo description, topics, releases, social
preview upload, README above the fold on mobile.

Red flags to grep for before launch:

```bash
git grep -nE "(api[_-]?key|secret|token|password)\\s*[:=]\\s*['\"]" -- ':!*.md' || true
git grep -nE "admin|1234|demo password" -- README.md || true
```

Hard-coded credentials in a README are fine only when flagged as demo-only
with a security note. Never present them as production access.

## Step 2 — Report format

```markdown
| Category | Score | Max | Evidence | Fix |
| :--- | ---: | ---: | :--- | :--- |
| README | 14 | 20 | no quick start verification | add tested commands |
...

**Score: 61/100** — biggest gaps: Automation, Discoverability.
```

Then a prioritized fix plan with effort tags:

| Priority | Fix | Effort | Impact |
| :--- | :--- | :--- | :--- |
| P0 | Add LICENSE | S | Unblocks all reuse |
| P1 | CI running tests | M | Proof for contributors |

## Step 3 — Generate the missing assets

Produce these as real files in the repo (skip what exists):

1. **CONTRIBUTING.md** — real setup commands, real test commands, PR rules.
2. **CODE_OF_CONDUCT.md** — Contributor Covenant v2.1 with a real contact method.
3. **SECURITY.md** — reporting channel, scope, response expectations.
4. **Issue templates** — bug report (steps, expected/actual, version) and
   feature request (problem, proposal, alternatives).
5. **PR template** — what/why checklist, "tests pass", "docs updated".
6. **CHANGELOG.md** — Keep a Changelog format, seeded with the current state.
7. **GitHub topics** — 8-14 lowercase keywords a stranger would search:
   language, framework, domain, audience, integration. Output them as a
   copy-paste list.
8. **Social preview spec** — 1280×640 PNG, project name readable at 400px
   wide, dark and light variants if the repo has both.
9. **Release plan** — first tag (`v0.1.0`), release title, notes skeleton,
   assets to attach, and the follow-up `v0.2.0` scope.
10. **Good-first-issue plan** — 5 concrete issues with file pointers, each
    scoped to under two hours of work.

## Step 4 — Verification

- [ ] Every generated file is linked from the README where relevant.
- [ ] The fix plan can be executed without secrets the owner does not have.
- [ ] No asset overclaims: the social preview matches the README's promise.
- [ ] Re-run the score after fixes; report the delta.

## Output contract

1. The scored audit table + total + top three gaps.
2. Prioritized fix plan (P0/P1/P2, effort, impact).
3. The generated files, each listed with its path.
4. A "next 30 minutes" list: the smallest set of actions that moves the score
   the most.
