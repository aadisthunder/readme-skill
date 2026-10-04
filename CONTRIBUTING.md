# Contributing to README Skill

Thank you for contributing to **README Skill**! This repository provides a unified, production-grade agent skill designed to help AI coding assistants craft authentic, high-converting, and beautiful READMEs.

## How You Can Help

- **Enhance Skill Workflows:** Improve the detection logic, tech-stack badge mappings, or architecture diagram generators in [SKILL.md](file:///.agents/skills/readme/SKILL.md).
- **Refine Prompt Guidance:** Add guardrails preventing agents from hallucinating commands or fake benchmark numbers.
- **Improve Documentation:** Clarify setup and installation guides for different agent ecosystems (Antigravity IDE, Claude Code, Cursor, Copilot).
- **Report Friction:** Share edge cases where the skill struggled with a unique repository layout or monorepo structure.

## Core Rules for Contributions

1. **Evidence-First Discipline:** The skill strictly enforces that agents only document what actually exists in a repository. No fabricated features, fake test counts, or unverified claims.
2. **Lean & Portable:** Keep the skill self-contained within `.agents/skills/readme/SKILL.md`. Avoid adding unnecessary heavy scripts or binary files.
3. **Accessibility & Clarity:** All badge templates, tables, and Mermaid snippets must be responsive, accessible (proper image alt text), and easy to scan.
4. **Token Efficiency:** Keep instructions crisp and well-structured so agents don't consume unnecessary context window tokens.

## Proposing Changes

1. Fork the repository and create your feature branch (`git checkout -b feat/enhance-skill`).
2. Make your targeted changes to [SKILL.md](file:///.agents/skills/readme/SKILL.md) or [README.md](file:///README.md).
3. Verify that the Markdown formatting renders cleanly.
4. Open a clear Pull Request detailing what was improved and why.
