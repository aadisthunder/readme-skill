# What the best READMEs actually do

Research notes behind the four variants. Every claim links to a project you
can open and check. Patterns are ordered by how often they appear in
high-performing repositories.

## The ten patterns

### 1. One decisive artifact above the fold

A banner, an animated demo, or a hero image that states the product. The reader
should not need to scroll to know whether this is for them.

- [claude-mem](https://github.com/thedotmack/claude-mem) (trending #1 on
  GitHub, October 2026): light/dark logo via `<picture>`, then a GIF and a
  star-history chart side by side.
- [Supabase](https://github.com/supabase/supabase): dual light/dark wordmark,
  then a full dashboard screenshot.
- [Oh My Zsh](https://github.com/ohmyzsh/ohmyzsh): a single centered banner.

### 2. Curated badges, never a wall

Four badges above the fold maximum: what it is, whether it works, whether you
may use it, how to get it.

- claude-mem: license, version, Node requirement, "mentioned in awesome".
- Oh My Zsh: CI, OpenSSF best practices, community links.
- Supabase: no badge wall at all — the product screenshot carries the weight.

A wall of 12 shields reads as decoration; two real ones read as proof.

### 3. Proof you can reproduce

The strongest new pattern of the last two years: metrics next to the command
that produces them.

- claude-mem links to a documented architecture with real components.
- [pragati](https://github.com/aadisthunder/pragati): "Scenarios: 30,
  Adaptation accuracy: 100% — run `npm --prefix server test` to reproduce."
  No number on the page is invented.
- [gofiber/fiber](https://github.com/gofiber/fiber): benchmark charts with
  methodology.

### 4. Collapsible depth

Long content is not the problem; long *default* content is. `<details>` keeps
the default view short while keeping documentation complete.

- Oh My Zsh: the entire table of contents inside `<details>`.
- [release-it](https://github.com/release-it/release-it), [MananTank/radioactive-state](https://github.com/MananTank/radioactive-state):
  expandable usage and FAQ sections.

### 5. Comparison and capability tables

Tables answer "is this for me?" faster than prose.

- pragati: *Typical AI tutor vs Pragati* on five axes.
- [College-ERP](https://github.com/aadisthunder/College-ERP): Faculty vs
  Student capability matrix.
- Oh My Zsh: OS compatibility table.

### 6. Diagrams as first-class content

Mermaid renders natively on GitHub. Flowcharts explain architecture; sequence
diagrams explain lifecycles; ER diagrams explain data models.

- [dutrevis/spark-resources-metrics-plugin](https://github.com/dutrevis/spark-resources-metrics-plugin):
  interactive Mermaid architecture diagram.
- pragati: flow loop plus a subgraph architecture diagram.
- [Tauri](https://github.com/tauri-apps/tauri) / [VS Code](https://github.com/microsoft/vscode):
  architecture documents linked from the README.

### 7. The module map

One table mapping paths to responsibilities. New contributors stop asking
"where do I change this?"

- [Redis](https://github.com/redis/redis), [Tauri](https://github.com/tauri-apps/tauri):
  source maps in architecture docs.
- Suggested by [awesome-readme](https://github.com/matiassingers/awesome-readme)
  in its Architecture Examples section.

### 8. Demo GIFs, not just screenshots

A 15-second GIF is the closest thing to handing someone the product.

- [httpie](https://github.com/httpie/httpie), [tui.editor](https://github.com/nhn/tui.editor),
  [alichtman/shallow-backup](https://github.com/alichtman/shallow-backup):
  GIF-first demos.
- Recording tools worth knowing: [ScreenToGif](https://github.com/NickeManarin/ScreenToGif)
  (Windows), [vhs](https://github.com/charmbracelet/vhs) (terminal),
  [Gifski](https://gif.ski/).

### 9. A real community section

Tell people where to go for what. [Supabase](https://github.com/supabase/supabase)
invented the pattern: a table of channels with "best for" notes.

### 10. Personality — in the right dose

Oh My Zsh opens with a joke and keeps selling with it; shadcn/ui says nothing
extra and still converts. Choose one voice and commit:

- Warm: Oh My Zsh, [doomemacs](https://github.com/doomemacs/doomemacs).
- Flat and confident: [shadcn/ui](https://github.com/shadcn-ui/ui).
- First-person builder: pragati's "For judges and recruiters" section.

## Anti-patterns

| Anti-pattern | Why it hurts |
| :--- | :--- |
| Badge walls | Signal becomes noise; slow page loads |
| Invented stats | One skeptical reader disproves it; trust gone |
| "Blazingly fast" with no benchmark | Reads as a placeholder |
| 30-step setup with no quick path | Visitors leave before step 4 |
| Screenshots without captions | The reader does not know what to look at |
| Dead live-demo links | Converts worse than no link at all |
| Emoji in every heading | Clutter on non-GitHub surfaces (npm, docs sites) |
| Stale "now" sections | Signals abandonment |

## Sources

- [awesome-readme](https://github.com/matiassingers/awesome-readme) — the
  curated list of READMEs and their distinguishing elements.
- [Make a README](https://www.makeareadme.com/) — baseline structure guide.
- [Standard Readme](https://github.com/RichardLitt/standard-readme) — a
  specification for library-style READMEs.
- Repository pages linked above, reviewed October 2026.
