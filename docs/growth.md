# Growth plan for this repository

Concrete assets to use when this kit goes public. Nothing here is generated
automatically — it is a checklist with copy-paste material.

## Repository topics

Paste into **Settings → General → Topics** (lowercase, hyphenated):

```text
readme
readme-template
documentation
open-source
developer-tools
markdown
github
agent-skills
ai-agents
launch-checklist
portfolio
awesome-list
```

Pick 10-14; drop `awesome-list` unless you actually curate one.

## First release — v0.1.0

1. Tag it:

   ```bash
   git tag -a v0.1.0 -m "README Forge v0.1.0 — four variants, four skills, one launch kit"
   git push origin v0.1.0
   ```

2. Create the release from the tag, title `v0.1.0`, and use the
   [0.1.0 section of the changelog](../CHANGELOG.md) as the body.
3. Attach the exported social preview PNG (see [assets/README.md](../assets/README.md)).
4. Mark it "latest" and tell people to **Watch → Releases** for updates.

## Labels to create

| Label | Color | Use |
| :--- | :--- | :--- |
| `good first issue` | `#7057ff` | Scoped, mentored tasks |
| `help wanted` | `#008672` | Larger contributions |
| `docs` | `#0075ca` | Documentation-only |
| `skill` | `#5319e7` | Agent skill changes |
| `variant` | `#d4c5f9` | Template changes |

## Good first issues (five, each under two hours)

1. **Add a Variant E skeleton for API/reference documentation.**
   Create `templates/E-reference/README.md` (endpoint table, auth section,
   error codes) and register it in `templates/README.md` and
   `docs/variants.md`. Mentioned in the roadmap.
2. **Pin `markdownlint-cli2` in CI once a version is verified locally.**
   The workflow carries a comment about this; replace the unpinned
   `npx --yes markdownlint-cli2` with the tested version.
3. **Add a Windows-native export path for the social preview.**
   `assets/README.md` currently shows `svgexport` and browser instructions;
   add a PowerShell or cmd workflow and verify the output is 1280×640.
4. **Write a Hindi version of the profile hub.**
   Create `profile/README.hi.md` translating `profile/README.md`, link the two
   files to each other, and keep the facts identical.
5. **Add a scaled-down validator test fixture.**
   Add fixtures under `scripts/fixtures/` (broken link, unbalanced fence,
   stray token) plus a runner so contributors can test validator changes
   without the interactive walkthrough.

## Discussion seeds

Open these once Discussions is enabled (the issue chooser already links to it):

- "Which variant do you actually use, and what did you delete from it?"
- "Show your README before/after using the kit" (ask people to link the diff).
- "What should Variant E be? Docs site, API reference, or CLI manual?"

## First-week cadence

- Reply to every issue within 48 hours; a fast first response is the strongest
  contributor signal you can send.
- Keep the README roadmap honest — strike anything not shipped.
- Ask the first three contributors to open a good first issue themselves; it
  converts users into maintainers faster than any badge.
