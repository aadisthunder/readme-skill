<!--
DRAFT — Variant A (Flagship) applied to College-ERP.
Copy this file over the repository's README.md. Facts checked 2026-10-04
against github.com/aadisthunder/College-ERP.
Security note added on purpose: the current README presents admin/1234 as
normal login, which invites real deployment. Keep the warning.
-->

<p align="center">
  <img src="public/assets/logo.png" alt="College ERP emblem" width="110" />
</p>

<h1 align="center">College ERP</h1>

<p align="center">
  <strong>A zero-backend academic ERP for students and faculty — attendance, timetables, notices, and exam records that work entirely in the browser.</strong><br />
  Attendance Tracking · Timetable Schedules · Notice Board · Role-Based Access · PDF Report Generation
</p>

<p align="center">
  <a href="https://college-erp-aadi.web.app">
    <img src="https://img.shields.io/badge/Live_Demo-open_the_portal-2563eb?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live demo" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-16a34a?style=for-the-badge" alt="License: MIT" />
  </a>
  <img src="https://img.shields.io/badge/Backend-none-4f46e5?style=for-the-badge" alt="No backend required" />
</p>

<p align="center">
  <a href="#what-is-college-erp">What it is</a> •
  <a href="#features">Features</a> •
  <a href="#screenshots">Screenshots</a> •
  <a href="#quick-start">Quick start</a> •
  <a href="#faq">FAQ</a>
</p>

---

## What is College ERP?

College ERP is an institutional web portal for small colleges that need an
academic dashboard without running a server, a database, or an admin team.
Authentication, student profiles, attendance, timetables, notices, and marks
live in the browser's `localStorage` and travel with the person using that
browser.

The interesting design decision is what is missing: no backend. That removes
hosting cost, DevOps, and data-residency questions — and it is also the
project's biggest limitation, stated honestly below.

> **Demo only — not for production student data.** Sign-in is client-side and
> every record is visible to anyone with access to the same browser. Treat
> this as a complete front-end reference implementation to learn from or fork.

### Why College ERP?

- **Zero infrastructure** — Firebase Hosting serves static files; nothing else to run.
- **Role-based from the start** — Faculty and Student views share one dashboard engine with different permissions.
- **Real documents, not just screens** — attendance summaries and marksheets export as PDFs via `jsPDF`.
- **Complete working system** — auth, records, timetable authoring, notices, and reports, not a UI shell.

---

## Demo

<!-- TODO: record a 15-second GIF of the attendance flow and place it above
     the screenshots — it converts better than any static image. -->

## Screenshots

| | |
| :---: | :---: |
| ![Institutional landing portal](screenshots/screenshot-home.png) | ![Student and faculty ERP dashboard](screenshots/screenshot-dashboard.png) |
| Landing portal with department, admissions, and campus sections | Role-aware dashboard: attendance, timetable, notices, results |
| ![Authentication and login portal](screenshots/screenshot-login.png) | **Pre-seeded demo** — `admin` / `1234` (faculty) · `student` / `1234` |
| Unified authentication for faculty and students | Try the live demo: [college-erp-aadi.web.app](https://college-erp-aadi.web.app) |

---

## Features

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>🧑‍🏫 Faculty &amp; Admin</h3>
      <ul>
        <li>Mark, edit, and update daily attendance across batches</li>
        <li>Create and reorder timetable slots with rooms and timings</li>
        <li>Publish institutional notices and exam dates</li>
        <li>Enter continuous assessment and exam marks</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>🎓 Students</h3>
      <ul>
        <li>Attendance percentage with present/absent ratios and warnings</li>
        <li>Daily timetable with subject and faculty details</li>
        <li>Notice board, hostel, fees, and admission information</li>
        <li>Marksheets and academic records exported as PDF</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>⚡ No backend</h3>
      <ul>
        <li>State persisted in <code>localStorage</code></li>
        <li>Deploys as static files on Firebase Hosting</li>
        <li>Opens from a local file for instant testing</li>
      </ul>
    </td>
    <td width="50%" valign="top">
      <h3>🖨️ Reports</h3>
      <ul>
        <li>jsPDF-generated academic records</li>
        <li>Attendance summaries with warning indicators</li>
        <li>Print-ready layouts for departmental use</li>
      </ul>
    </td>
  </tr>
</table>

### Capability comparison

| Feature / Action | Faculty | Student |
| :--- | :---: | :---: |
| Mark & edit student attendance | Full access | View only |
| Create & reorder timetable slots | Full access | View only |
| Publish official notices | Full access | View only |
| Enter examination marks | Full access | View only |
| Download PDF reports | Yes | Yes |
| Self-register new accounts | Pre-seeded | Default role |

---

## Try it in 60 seconds

The live site is pre-seeded — no sign-up needed:

| Role | Username | Password |
| :--- | :--- | :--- |
| Faculty / Admin | `admin` | `1234` |
| Student | `student` | `1234` |

New accounts created through the registration form get the Student role.

---

## Quick start

```bash
git clone https://github.com/aadisthunder/College-ERP.git
cd College-ERP
npx serve public        # or just open public/index.html
```

Open `http://localhost:3000`.

<details>
<summary><strong>Deploy to Firebase Hosting</strong></summary>

The repository ships with `firebase.json` and `.firebaserc` ready:

```bash
npm install -g firebase-tools
firebase login
firebase deploy --only hosting
```

</details>

<details>
<summary><strong>Project layout</strong></summary>

```text
College-ERP/
├── public/
│   ├── assets/          # logos, banners, icons
│   ├── css/             # auth, landing, dashboard styles
│   ├── js/              # auth/session, dashboard routing, attendance
│   ├── index.html       # institutional landing page
│   ├── auth.html        # unified modal authentication
│   ├── dashboard.html   # student & faculty ERP dashboard
│   └── register.html    # registration form
├── screenshots/         # documentation images
├── firebase.json
└── README.md
```

</details>

---

## Roadmap

- [x] Role-based dashboards, attendance, timetable, notices, PDF exports
- [ ] Optional Firestore adapter so records can sync across devices
- [ ] CSV import for existing student rosters and attendance sheets
- [ ] Installable PWA with offline mode
- [ ] Dark theme and print stylesheet for reports

---

## FAQ

<details>
<summary><strong>Is the data shared between devices?</strong></summary>

No. Everything is stored in the browser's `localStorage` for the device and
browser you use. Two devices, two separate datasets. That is the zero-backend
trade-off.

</details>

<details>
<summary><strong>Is this safe for real student records?</strong></summary>

No — and that is stated plainly on purpose. There is no server-side
authorization, no encryption at rest, and the demo credentials are public.
Use it as a front-end reference, a college project, or a starting point for a
Firebase-backed fork.

</details>

<details>
<summary><strong>How do I reset the demo data?</strong></summary>

Clear site data for the page in your browser settings (Application → Local
Storage in DevTools), then reload. The pre-seeded accounts return.

</details>

---

## Contributing

Contributions are welcome — read [CONTRIBUTING.md](CONTRIBUTING.md) first.
Fork, branch, run the app locally, and open a pull request with screenshots of
the change.

## License

Released under the MIT license — see [LICENSE](LICENSE).

<p align="center">
  <sub>If this project helped you build something, a ⭐ helps other students find it.</sub>
</p>
