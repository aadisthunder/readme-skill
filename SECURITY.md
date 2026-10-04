# Security Policy

## Scope

This repository ships documentation, README templates, agent skills, and small
Node scripts. It does not run a service, collect data, or execute with elevated
privileges.

In scope:

- The validation script (`scripts/validate.mjs`) — path handling, file writes,
  or execution of untrusted input.
- CI workflows in `.github/workflows/` — anything that could leak secrets or
  run untrusted code with more permissions than needed.
- Templates or skills that instruct a user to do something unsafe (for example,
  committing secrets, disabling TLS checks, or pasting keys into a README).

Out of scope:

- Vulnerabilities in projects that adopt these templates. Adopters own their
  own policy; the `oss-launch` skill generates one for them.
- Social engineering against repository maintainers.

## Reporting a vulnerability

Please **do not open a public issue** for security problems.

1. Use GitHub's private reporting: repository → **Security** tab →
   **Report a vulnerability**.
2. Include: the affected file, a minimal reproduction, the impact you believe
   it has, and any suggested fix.

If private reporting is unavailable, open an issue that says only *"security
report — please contact me"* and a maintainer will reach out.

## What to expect

- Acknowledgment of your report, best effort, within a few days.
- An assessment with one of: confirmed, not reproducible, out of scope.
- Credit in the fix's changelog entry if you want it.

## For people using these templates

The READMEs in `examples/` describe real applications with demo credentials.
Those credentials are intentionally public and scoped to demo data. Never
deploy an example project with demo credentials facing the public internet
without replacing them — the `oss-launch` skill's evidence pass flags exactly
this class of issue.
