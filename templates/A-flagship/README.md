<!--
TEMPLATE — Variant A: Flagship

WHAT IT IS
  A visual, product-led README. The reader understands the project in about
  20 seconds: banner, GIF, screenshots, comparison, quick start.

USE IT WHEN
  - The project has a UI, a live demo, or a visual output (web app, dashboard, game, theme).
  - You optimize for stars, sign-ups, or demo clicks.

AVOID IT WHEN
  - The project is a library, CLI, or API with no screenshots (use Variant B).
  - The project is tiny and a long page would look padded (use Variant C).

HOW TO USE
  1. Copy this file over your repository's README.md.
  2. Replace every {{TOKEN}} (list: templates/README.md#tokens).
  3. Replace or delete every guidance comment like this one.
  4. Keep the order: hero -> what/why -> demo -> features -> compare -> quick start
     -> advanced details -> roadmap -> FAQ -> contributing -> license.
  5. Verify every link and screenshot path with `node scripts/validate.mjs`
     from the kit, or manually before pushing.
-->

<p align="center">
  <img src="{{LOGO_PATH}}" alt="{{PROJECT_NAME}} logo" width="110" />
</p>

<h1 align="center">{{PROJECT_NAME}}</h1>

<p align="center">
  <strong>{{TAGLINE}}</strong><br />
  {{FEATURE_1}} · {{FEATURE_2}} · {{FEATURE_3}} · {{FEATURE_4}}
</p>

<p align="center">
  <!-- Badge rule: at most four above the fold, all of them real. -->
  <a href="{{LIVE_DEMO_URL}}">
    <img src="https://img.shields.io/badge/Live_Demo-open-7c3aed?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live demo" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-{{LICENSE}}-22c55e?style=for-the-badge" alt="License: {{LICENSE}}" />
  </a>
  <a href="{{CI_URL}}">
    <img src="{{CI_BADGE_URL}}" alt="CI status" />
  </a>
</p>

<p align="center">
  <a href="#what-is-{{PROJECT_SLUG}}">What it is</a> •
  <a href="#features">Features</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#quick-start">Quick start</a> •
  <a href="#faq">FAQ</a>
</p>

---

## What is {{PROJECT_NAME}}?

<!-- Two short paragraphs maximum. Paragraph 1: what it does and for whom.
     Paragraph 2: the one architectural idea that makes it interesting. -->

{{SHORT_DESCRIPTION}}

<!-- Example structure to keep in mind:
     "{{PROJECT_NAME}} is a <category> for <audience>. It <does the main job>
     in <unusual way>, so you get <benefit> without <cost>." -->

### Why {{PROJECT_NAME}}?

- **{{BENEFIT_1_TITLE}}** — {{BENEFIT_1}}
- **{{BENEFIT_2_TITLE}}** — {{BENEFIT_2}}
- **{{BENEFIT_3_TITLE}}** — {{BENEFIT_3}}

---

## Demo

<!-- The GIF is the single highest-converting asset in a README.
     Record 10-20 seconds, loop it, keep it under ~5 MB. -->

![{{PROJECT_NAME}} demo]({{GIF_PATH}})

---

## Screenshots

<!-- Captions beat bare images: tell the reader what to notice. -->

| | |
| :---: | :---: |
| ![{{SCREENSHOT_1_ALT}}]({{SCREENSHOT_1}}) | ![{{SCREENSHOT_2_ALT}}]({{SCREENSHOT_2}}) |
| {{SCREENSHOT_1_CAPTION}} | {{SCREENSHOT_2_CAPTION}} |
| ![{{SCREENSHOT_3_ALT}}]({{SCREENSHOT_3}}) | ![{{SCREENSHOT_4_ALT}}]({{SCREENSHOT_4}}) |
| {{SCREENSHOT_3_CAPTION}} | {{SCREENSHOT_4_CAPTION}} |

---

## Features

<!-- Two-column HTML grid keeps four features above the fold on desktop.
     Each card: emoji + name, one sentence, two or three bullets. -->

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>⚡ {{FEATURE_CARD_1_TITLE}}</h3>
      {{FEATURE_CARD_1_DESCRIPTION}}
      <ul>
        <li>{{FEATURE_CARD_1_BULLET_1}}</li>
        <li>{{FEATURE_CARD_1_BULLET_2}}</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>🔒 {{FEATURE_CARD_2_TITLE}}</h3>
      {{FEATURE_CARD_2_DESCRIPTION}}
      <ul>
        <li>{{FEATURE_CARD_2_BULLET_1}}</li>
        <li>{{FEATURE_CARD_2_BULLET_2}}</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>🧩 {{FEATURE_CARD_3_TITLE}}</h3>
      {{FEATURE_CARD_3_DESCRIPTION}}
      <ul>
        <li>{{FEATURE_CARD_3_BULLET_1}}</li>
        <li>{{FEATURE_CARD_3_BULLET_2}}</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>🚀 {{FEATURE_CARD_4_TITLE}}</h3>
      {{FEATURE_CARD_4_DESCRIPTION}}
      <ul>
        <li>{{FEATURE_CARD_4_BULLET_1}}</li>
        <li>{{FEATURE_CARD_4_BULLET_2}}</li>
      </ul>
    </td>
  </tr>
</table>

---

## How it compares

<!-- Honest comparison tables win trust. Do not invent competitor weaknesses;
     compare on axes you can defend: setup, cost, data ownership, offline use. -->

| | {{PROJECT_NAME}} | {{ALTERNATIVE_1}} | {{ALTERNATIVE_2}} |
| :--- | :---: | :---: | :---: |
| Time to first result | | | |
| Cost | | | |
| Your data stays with you | | | |
| Works offline | | | |
| Self-hostable | | | |

---

## Quick start

<!-- Three commands maximum here. Everything else goes in the collapsible. -->

```bash
{{QUICKSTART_COMMAND_1}}
{{QUICKSTART_COMMAND_2}}
{{QUICKSTART_COMMAND_3}}
```

Open {{QUICKSTART_RESULT_URL}}.

<details>
<summary><strong>Full setup (environment variables, seed data, troubleshooting)</strong></summary>

### Environment

| Variable | Required | Default | Notes |
| :--- | :---: | :--- | :--- |
| {{ENV_VAR_1}} | Yes | — | {{ENV_VAR_1_NOTE}} |
| {{ENV_VAR_2}} | No | {{ENV_VAR_2_DEFAULT}} | {{ENV_VAR_2_NOTE}} |

### Optional next steps

- {{OPTIONAL_STEP_1}}
- {{OPTIONAL_STEP_2}}

</details>

---

## Roadmap

- [x] {{ROADMAP_DONE_1}}
- [x] {{ROADMAP_DONE_2}}
- [ ] {{ROADMAP_PLANNED_1}}
- [ ] {{ROADMAP_PLANNED_2}}
- [ ] {{ROADMAP_PLANNED_3}}

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

<details>
<summary><strong>{{FAQ_QUESTION_3}}</strong></summary>

{{FAQ_ANSWER_3}}

</details>

---

## Contributing

Contributions are welcome — read [CONTRIBUTING.md](CONTRIBUTING.md) first.

1. Fork the repository.
2. Create a branch: `git checkout -b feature/short-name`.
3. Run the checks: {{TEST_COMMAND}}.
4. Open a pull request.

## License

Released under the {{LICENSE}} license — see [LICENSE](LICENSE).

<p align="center">
  <sub>If {{PROJECT_NAME}} saved you time, a ⭐ helps other people find it.</sub>
</p>
