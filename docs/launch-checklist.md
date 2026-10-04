# Open-source launch checklist

Everything from "code works" to "strangers can adopt it". Check only what is
true; every unchecked item is a known gap, not a failure.

## 1. Identity

- [ ] Repository name is pronounceable and searchable.
- [ ] Description is one sentence, no buzzwords, ends with a period.
- [ ] 8-14 topics covering language, framework, domain, and audience.
- [ ] Social preview uploaded (1280×640 PNG; text readable at 400px wide).
- [ ] Pinned repos on the profile match the story the README tells.

## 2. Documentation

- [ ] README passes the [`readme-forge`](../.agents/skills/readme-forge/SKILL.md) checklist.
- [ ] Quick start works from a clean clone — verified, not assumed.
- [ ] LICENSE present and linked from the README.
- [ ] CHANGELOG follows Keep a Changelog and has a first entry.
- [ ] Demo GIF recorded (10-20 seconds, under ~5 MB).
- [ ] Screenshots have captions and alt text.
- [ ] Deeper docs exist for anything the README cannot hold.

## 3. Community

- [ ] CONTRIBUTING.md with real setup and test commands.
- [ ] CODE_OF_CONDUCT.md with a real contact method.
- [ ] Issue templates: bug report and feature request.
- [ ] Pull request template with a test checklist.
- [ ] Discussions enabled (or a stated support channel).
- [ ] Five good-first-issues labelled and scoped to under two hours each.
- [ ] README support table: where to ask what.

## 4. Security

- [ ] SECURITY.md with a private reporting route.
- [ ] Secret scan run across history (`git grep` pass at minimum).
- [ ] Demo credentials labelled as demo-only, with a warning.
- [ ] Dependabot (or equivalent) enabled for dependency updates.
- [ ] Branch protection on `main`: reviews + status checks.

## 5. Automation

- [ ] CI runs tests on pull requests and on `main`.
- [ ] CI badge is live (see [dynamic badges](dynamic-badges.md)).
- [ ] Tests runnable with one documented command.
- [ ] Coverage reported or explicitly declared out of scope.
- [ ] Releases tagged (start at `v0.1.0`) with human-readable notes.
- [ ] Workflows pin action versions.

## 6. Launch day

- [ ] One-paragraph launch post drafted for each channel (no copy-paste spam).
- [ ] Demo video or GIF ready as the post's visual.
- [ ] "Watch → Releases" note in the README for update notifications.
- [ ] Star-history chart embedded after it stops looking flat.
- [ ] Relevant awesome-lists identified; submission criteria checked first.
- [ ] Cross-links between related repos added (portfolio effect).
- [ ] First-week plan: respond to every issue within 48 hours.

## 7. Follow-through

- [ ] Roadmap in the README reflects reality after week one.
- [ ] Stale promises removed; open issues groomed monthly.
- [ ] A `v0.2.0` scope written down where contributors can see it.

## Quick audit

The [`oss-launch`](../.agents/skills/oss-launch/SKILL.md) skill turns this list
into a weighted score out of 100 with a prioritized fix plan.
