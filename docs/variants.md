# Choosing a variant

The variant is not a style preference — it is a claim about what the reader
needs to do next.

## Decision tree

```text
Is there a UI or visual output?
├── Yes → Is the project launching publicly soon?
│         ├── Yes → D — Launch
│         └── No  → A — Flagship
└── No  → Does the project have real internals (engine, pipeline, protocol)?
          ├── Yes → B — Engineering
          └── No  → Is there excellent external documentation?
                    ├── Yes → C — Minimal
                    └── No  → A — Flagship (module map + screenshots of output)
```

## What each variant commits to

| | A — Flagship | B — Engineering | C — Minimal | D — Launch |
| :--- | :--- | :--- | :--- | :--- |
| Reader spends | 20 seconds | 5 minutes | 30 seconds | 2 minutes + follows |
| Required assets | GIF + 2-4 screenshots | diagrams, test output | 1 image, docs link | GIF + metrics + story |
| Required honesty | captions match reality | commands reproduce numbers | links resolve | claims measurable |
| Main failure mode | feature dump | wall of text | too little context | marketing without proof |
| Length | medium | long | short | medium-long |

## Upgrade paths

Variants convert into each other without rewrites:

- **C → A** when the project grows a UI: add hero, GIF, gallery, comparison.
- **A → D** at launch: prepend the story, add proof table, community table,
  roadmap.
- **B → A** if the audience becomes non-technical: keep the diagrams, cut the
  decision tables, add screenshots.
- **Any → B** when reviewers ask "how does it work and what does it cost?".

## Worked examples in this repository

| Example | Variant | Why that repo gets that variant |
| :--- | :--- | :--- |
| [`examples/college-erp/README.md`](../examples/college-erp/README.md) | A — Flagship | Visual web app, role-based demo, live site |
| [`examples/bravo/README.md`](../examples/bravo/README.md) | B — Engineering | Client-side agent engine, config-heavy, tests exist |
| [`examples/pragati/README.md`](../examples/pragati/README.md) | D — Launch | Flagship launch candidate with provable metrics |

## Minimal variant, by example

When a library has first-class docs elsewhere, the whole README can be this:

```markdown
# project-name

One sentence that says what it does and for whom.

![demo](docs/demo.png)

[![CI](badge-url)](workflow-url) [![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

## Install

    npm install project-name

## Usage

    npx project-name --help

## Docs

- [Guide](https://docs.example.com)
- [Examples](https://docs.example.com/examples)

## License

MIT
```

If that is enough, ship it. Padding a complete README makes it worse.
