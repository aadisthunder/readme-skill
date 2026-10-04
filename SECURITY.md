# Security Policy

## Scope

This repository distributes open-source AI agent skills and documentation for project README creation. It contains purely static Markdown files and configuration schemas. It does not run standalone servers, process private user data, or require elevated system privileges.

### In Scope
- Skill instructions and prompt workflows within `.agents/skills/readme/SKILL.md` that could instruct agents to run hazardous commands, disable TLS verification, or inadvertently expose secrets.
- Documentation or recommendations that advise unsafe secret-handling patterns.

### Out of Scope
- Code, environments, or repositories maintained by users who apply this skill to their projects. Adopters are responsible for their own repository security posture.

## Reporting a Vulnerability

If you discover a security concern or potentially risky agent instruction within this repository:

1. **GitHub Security Advisories (Preferred):** Navigate to the repository's **Security** tab and click **Report a vulnerability**.
2. **Details to Provide:**
   - The file and section containing the issue.
   - A description of the potential risk or unsafe behavior.
   - Suggested remediation or safer alternative instructions.

Please do not open public GitHub issues for security vulnerabilities. We will review and address valid reports promptly.
