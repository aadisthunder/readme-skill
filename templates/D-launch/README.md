<!--
TEMPLATE — Variant D: Launch

WHAT IT IS
  The launch-day README: story, animated proof, measurable claims, community
  sections, and growth assets at the bottom. Built for the project you push
  hardest — the one you want on GitHub Trending and in a portfolio.

USE IT WHEN
  - You are launching publicly (Show HN, Product Hunt, Reddit, LinkedIn, X).
  - The project has metrics you can prove from a test suite or benchmark.
  - You want contributors, not just visitors.

AVOID IT WHEN
  - You cannot back claims with a reproduce command. Then use Variant A.

HOW TO USE
  1. Copy over README.md. 2. Replace tokens. 3. Delete guidance comments.
  4. The Proof section must be runnable: command -> output -> number in table.
  5. Record the GIF before launch; it is your thumbnail everywhere.
-->

<p align="center">
  <img src="{{LOGO_PATH}}" alt="{{PROJECT_NAME}} logo" width="100" />
</p>

<h1 align="center">{{PROJECT_NAME}} — {{ONE_LINE_PROMISE}}</h1>

<p align="center">
  <a href="#quick-start">Quick start</a> •
  <a href="#how-it-works">How it works</a> •
  <a href="#proof">Proof</a> •
  <a href="#roadmap">Roadmap</a> •
  <a href="#community">Community</a>
</p>

<p align="center">
  <a href="{{LIVE_DEMO_URL}}"><img src="https://img.shields.io/badge/Live_Demo-try_it_now-7c3aed?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live demo" /></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-{{LICENSE}}-22c55e?style=for-the-badge" alt="License: {{LICENSE}}" /></a>
  <a href="{{CI_URL}}"><img src="{{CI_BADGE_URL}}" alt="CI status" /></a>
</p>

<p align="center">
  🌐 <a href="docs/i18n/README.hi.md">हिन्दी</a> ·
  <a href="docs/i18n/README.es.md">Español</a> ·
  <a href="docs/i18n/README.ja.md">日本語</a>
</p>

<!-- Translation row: add it only when the translations actually exist.
     Delete the row, not just the links, until then. -->

---

## The problem

{{PROBLEM_STATEMENT}}

## The idea

{{IDEA_STATEMENT}}

<!-- Two sentences each. If the product is the punchline, do not bury it. -->

## Why I built this

{{FOUNDER_STORY}}

---

## Demo

<table align="center">
<tr>
<td align="center">
  <img src="{{GIF_PATH}}" alt="{{PROJECT_NAME}} demo" width="480" />
  <br /><sub>{{GIF_CAPTION}}</sub>
</td>
<td align="center">
  <a href="https://star-history.com/#{{OWNER}}/{{REPO}}&Date">
    <img src="https://api.star-history.com/svg?repos={{OWNER}}/{{REPO}}&type=Date" alt="Star history" width="480" />
  </a>
  <br /><sub>Star history — delete this cell until the chart is non-trivial.</sub>
</td>
</tr>
</table>

---

## How it works

```mermaid
flowchart LR
  A[{{INPUT}}] --> B[{{CORE_STEP}}] --> C[{{OUTPUT}}]
  C --> D[{{MEASUREMENT}}] --> B
```

---

## Proof

<!-- No invented numbers. Every row: metric, value, and the command that reproduces it. -->

| Metric | Value | Reproduce with |
| :--- | :--- | :--- |
| {{METRIC_1}} | **{{VALUE_1}}** | `{{REPRODUCE_1}}` |
| {{METRIC_2}} | **{{VALUE_2}}** | `{{REPRODUCE_2}}` |

---

## How it compares

| | {{PROJECT_NAME}} | {{ALTERNATIVE_1}} | {{ALTERNATIVE_2}} |
| :--- | :---: | :---: | :---: |
| {{AXIS_1}} | | | |
| {{AXIS_2}} | | | |
| {{AXIS_3}} | | | |

---

## Quick start

```bash
{{QUICKSTART_COMMAND_1}}
{{QUICKSTART_COMMAND_2}}
{{QUICKSTART_COMMAND_3}}
```

<!-- Give launch visitors the 90-second tour right here, not in a wiki. -->

**The 90-second tour:** {{TOUR_STEPS}}

---

## Roadmap

- [x] {{ROADMAP_DONE_1}}
- [x] {{ROADMAP_DONE_2}}
- [ ] {{ROADMAP_NEXT_1}}
- [ ] {{ROADMAP_NEXT_2}}
- [ ] {{ROADMAP_NEXT_3}}

---

## Community

<!-- Modeled on Supabase's support table: tell people where to go for what. -->

| Channel | Best for |
| :--- | :--- |
| [GitHub Discussions]({{DISCUSSIONS_URL}}) | Questions, ideas, showing what you built |
| [GitHub Issues]({{ISSUES_URL}}) | Bugs and concrete feature requests |
| [Good first issues]({{GOOD_FIRST_ISSUES_URL}}) | Your first contribution |

### Contributors

<!-- Use the all-contributors bot, or a manual wall like this: -->
<a href="{{CONTRIBUTORS_URL}}"><img src="{{CONTRIBUTORS_IMAGE_URL}}" alt="Contributors" /></a>

---

## FAQ

<details>
<summary><strong>{{FAQ_QUESTION_1}}</strong></summary>

{{FAQ_ANSWER_1}}

</details>

<details>
<summary><strong>{{FAQ_QUESTION_2}}</strong></summary>

{{FAQ_ANSWER_2}}

</details>

---

## Contributing

Contributions are welcome — start with [CONTRIBUTING.md](CONTRIBUTING.md) or a
[good first issue]({{GOOD_FIRST_ISSUES_URL}}).

## License

Released under the {{LICENSE}} license — see [LICENSE](LICENSE).

<p align="center">
  <sub>If {{PROJECT_NAME}} is useful to you, a ⭐ is the cheapest way to say thanks.</sub>
</p>
