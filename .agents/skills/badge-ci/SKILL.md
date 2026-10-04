---
name: badge-ci
description: Adds CI and dynamic badges to a project: detects the stack, wires a workflow (or the kit's reusable Node CI workflow), and produces exact shields.io badge snippets for tests, coverage, releases, stars, and last commit — including the pitfalls that make badges show "no status".
---

# badge-ci

Static badges say what you hope is true. Dynamic badges say what CI just proved.

## When to use

- A repo has tests but no visible CI, or a static "tests passing" badge.
- Someone asks for the green checkmark and the badge row.

## Step 1 — Detect the stack

```bash
cat package.json 2>/dev/null        # Node: scripts.test, packageManager
ls package-lock.json pnpm-lock.yaml yarn.lock 2>/dev/null
ls pyproject.toml requirements.txt go.mod Cargo.toml 2>/dev/null
cat .github/workflows/*.yml 2>/dev/null
```

Decision table:

| Stack | Workflow |
| :--- | :--- |
| Node with lockfile at root | Reuse [`reusable-node-ci.yml`](../../../.github/workflows/reusable-node-ci.yml) |
| Node monorepo | Copy the reusable workflow and set `working-directory` |
| Anything else | Write a minimal workflow: install → test → build |

## Step 2 — Wire the workflow

For Node repos, add a three-line caller:

```yaml
name: CI
on:
  push:
    branches: [main]
  pull_request:
jobs:
  test:
    uses: {{OWNER}}/{{REPO}}/.github/workflows/reusable-node-ci.yml@main
    with:
      node-version: "20"
      coverage: false
```

Rules:

- Run it on `pull_request` **and** on pushes to the default branch — badges
  only render for workflows that have run on the default branch at least once.
- Pin Node versions to what the project supports (`engines` in package.json).
- If coverage is enabled, a token is required (Codecov); without a token,
  upload the `coverage/` folder as an artifact instead and say so.

## Step 3 — Badge snippets

Replace `{{OWNER}}` / `{{REPO}}` and keep only badges that are true today.

| Badge | Snippet |
| :--- | :--- |
| CI status | `[![CI](https://github.com/{{OWNER}}/{{REPO}}/actions/workflows/ci.yml/badge.svg)](https://github.com/{{OWNER}}/{{REPO}}/actions/workflows/ci.yml)` |
| Coverage (Codecov) | `[![Coverage](https://codecov.io/gh/{{OWNER}}/{{REPO}}/branch/main/graph/badge.svg)](https://codecov.io/gh/{{OWNER}}/{{REPO}})` |
| Release | `[![Release](https://img.shields.io/github/v/release/{{OWNER}}/{{REPO}}?style=flat-square)](https://github.com/{{OWNER}}/{{REPO}}/releases)` |
| Stars | `![Stars](https://img.shields.io/github/stars/{{OWNER}}/{{REPO}}?style=flat-square)` |
| Last commit | `![Last commit](https://img.shields.io/github/last-commit/{{OWNER}}/{{REPO}}?style=flat-square)` |
| Issues | `![Issues](https://img.shields.io/github/issues/{{OWNER}}/{{REPO}}?style=flat-square)` |
| License | `![License](https://img.shields.io/github/license/{{OWNER}}/{{REPO}}?style=flat-square)` |
| npm version | `[![npm](https://img.shields.io/npm/v/{{PACKAGE}}?style=flat-square)](https://www.npmjs.com/package/{{PACKAGE}})` |
| PRs welcome | `![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)` |
| Star history (chart) | `<img src="https://api.star-history.com/svg?repos={{OWNER}}/{{REPO}}&type=Date" alt="Star history" width="500" />` |

Curate to **four or fewer above the fold**. Release, stars, and last-commit
badges belong near the bottom (community section) if used at all.

## Step 4 — Pitfalls

- **"no status" badge**: the workflow has never run on the default branch, or
  the file name in the badge URL does not match the workflow file.
- **Fork builds**: for forks, `pull_request` workflows need maintainer approval;
  do not expect green badges on external PRs without it.
- **Private repos**: shields.io cannot read private metrics; badges render as
  unknown.
- **Caching**: shields.io caches for a few minutes. Do not debug a badge that
  was just created until it has run once.
- **Version pins**: pin actions to major tags (`actions/checkout@v4`) and Node
  to supported versions; do not use `latest`.

## Verification

```bash
# Workflow syntax (local, if the CLI is available)
gh workflow list 2>/dev/null || true
# After pushing:
# 1. Actions tab: the workflow is green on main.
# 2. Open each badge URL in the browser — it must render, not 404.
# 3. README preview on GitHub shows the badges in one row on mobile.
```

## Output contract

1. The workflow file(s) created, with paths.
2. The badge block, ready to paste, capped at four above-the-fold badges.
3. A note for every dynamic badge that requires a token or a one-time setup.
4. Confirmation steps: push → Actions green → badge renders.
