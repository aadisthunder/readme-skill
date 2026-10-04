---
name: profile-readme
description: Builds or refreshes a GitHub profile README as a build-in-public hub with curated badges, live stats cards, featured project cards sourced from real repositories, a now section, and an accessibility pass.
---

# profile-readme

The profile README is a landing page, not a résumé dump. One screen should
answer: who is this, what did they build, how do I reach them.

## When to use

- A profile README repo exists but is a plain list of links.
- Someone wants a portfolio-quality GitHub front page.

## Evidence pass

Pull only real facts:

```bash
gh api user --jq '{name,bio,company,location,blog}' 2>/dev/null
gh repo list --limit 30 --json name,description,language,stargazerCount,homepageUrl,isFork \
  --jq '[.[] | select(.isFork|not)] | sort_by(-.stargazerCount)' 2>/dev/null
```

If `gh` is unavailable, read the profile page and the repos directly.
Never invent project descriptions — copy the repo's own one-liner or the
README's first sentence, shortened.

## Structure (top to bottom)

1. **Hero** — name, one-line role, one-line focus. No quotes, no "passionate".
2. **Badges** — at most six, all meaningful: LinkedIn, email or site, X,
   YouTube, RSS, sponsor. No visitor counters, no "Profile views" badges.
3. **Stats cards** — three maximum, one row:
   - `https://github-readme-stats.vercel.app/api?username={{USERNAME}}&show_icons=true&hide_border=true&theme=transparent`
   - `https://github-readme-stats.vercel.app/api/top-langs/?username={{USERNAME}}&layout=compact&hide_border=true&theme=transparent`
   - `https://streak-stats.demolab.com?user={{USERNAME}}&hide_border=true&theme=transparent`
4. **Featured projects** — 3-6 cards, best work first. Each card: name, one
   sentence, tech tags, live link. Use a table for a tidy two-column grid.
5. **Now** — date-stamped ("October 2026"): what you are building, learning,
   and publishing. Stale "now" sections cost more than they add.
6. **Connect** — the same links as the badges, in text, because text is
   searchable and clickable everywhere.

## Rules

- Mobile first: cards must stack cleanly under 400px width.
- Alt text on every image; stats cards get `alt="GitHub stats for {{USERNAME}}"`.
- No auto-playing typing SVGs, no snake-eats-contributions, no GIF walls —
  they date the profile and slow the page.
- One personality line is fine; three is a speech.
- Keep the whole page under two screens.

## Output contract

1. The complete profile `README.md`, filled with verified facts only.
2. A short "what I left out and why" list (invented metrics, dead links,
   unmaintained repos).
3. Instructions to publish: create a public repo named exactly after the
   username, add `README.md` at the root, push.
4. Optional follow-ups: pinned repos matching the featured cards, and a
   `profile/` banner asset if one exists in the repo.

## Verification checklist

- [ ] Every link resolves and goes where the label says.
- [ ] Featured projects match the pinned repositories.
- [ ] Stats cards load with the username spelled exactly as on GitHub.
- [ ] The page reads correctly in dark and light themes.
- [ ] No emoji-only headings; screen readers must get real text.
