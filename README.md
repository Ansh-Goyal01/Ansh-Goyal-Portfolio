# 🚀 Ansh Goyal — 3D Portfolio

Interactive 3D developer portfolio with a keyboard where every keycap is a skill. Built with Next.js, React, TypeScript, GSAP, and Motion.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ansh-Goyal01/Ansh-Goyal-Portfolio)

![Portfolio Preview](./public/assets/projects-screenshots/research-agent/research-agent.png)

## ✨ Features

- **Interactive 3D Keyboard** — Custom Spline keyboard where each keycap represents a skill, revealing titles and descriptions on hover/press
- **Buttery Animations** — GSAP + Motion powered scroll, hover, and reveal animations
- **Space Theme** — Floating particles on a dark canvas for a cosmic vibe
- **Light & Dark Mode** — Full theme support with cheeky disclaimer toasts
- **Responsive** — Works across all screen sizes
- **Contact Form** — Email delivery via Resend
- **Analytics** _(optional)_ — Umami analytics integration

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 16, React 19, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI |
| **Animation** | GSAP, Motion |
| **3D** | Spline Runtime |
| **Email** | Resend |
| **Misc** | Lenis (smooth scroll), Zod, @teispace/next-themes |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm, pnpm, or yarn

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Ansh-Goyal01/Ansh-Goyal-Portfolio.git
    cd Ansh-Goyal-Portfolio
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Copy `.env.example` to `.env.local` and fill in the values:

    ```bash
    cp .env.example .env.local
    ```

    | Variable | Required | Description |
    |---|---|---|
    | `RESEND_API_KEY` | Yes | API key from [Resend](https://resend.com) for the contact form |
    | `NEXT_PUBLIC_WS_URL` | No | WebSocket server URL for realtime features (cursors, chat, presence) |
    | `UMAMI_DOMAIN` | No | Umami analytics script URL |
    | `UMAMI_SITE_ID` | No | Umami website ID |

4. **Run the development server:**

    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) and see the magic ✨

---

## 📁 Project Structure

All content is centralized in a few data files, making the site easy to keep up to date:

| File | What it drives |
|---|---|
| `src/data/config.ts` | Site title, description, author info, and social links |
| `src/data/projects.tsx` | Projects, screenshots, descriptions, and tech stacks |
| `src/data/constants.ts` | Skills list (3D keyboard keycaps) and work experience |
| `src/data/research.ts` | Research section (papers, status, summaries) |
| `public/Ansh_Goyal_Resume.pdf` | Résumé PDF served on the resume page |
| `public/assets/projects-screenshots/` | Project cover art (`research-agent/`, `metal-crack-detection/`, etc.) |

### Projects

- Research Agent — 11-agent autonomous RAG research pipeline
- Real-Time Metal Crack Detection on Edge — YOLOv8 on Raspberry Pi 5
- Dynamic Pricing Engine for Urban Parking
- Explainable AI Traffic Management System
- Bearing Anomaly Detection Research (IJPHM, submitted 2026)

---

## ⌨️ The 3D Keyboard

The keyboard's keycaps are individual objects baked into a Spline scene (`public/assets/skills-keyboard.spline`), each named to match an entry in the `SKILLS` record in `src/data/constants.ts`. Hovering or pressing a keycap looks up that name and displays the matching skill's label and description.

To change which skills appear:

1. Update the `label`, `icon`, `color`, and `shortDescription` fields on the relevant entries in `src/data/constants.ts`.
2. To change the physical keycap art/engravings themselves, open `public/assets/skills-keyboard.spline` in [Spline](https://spline.design/), edit the keycap object, re-export, and overwrite the file — object names must stay in sync with the `SkillNames` enum for the interactions to keep working.

---

## 🔌 Realtime Features (Optional)

The portfolio supports optional realtime features powered by a **separate backend API**:

- 🖱️ **Live cursors** — See other visitors' cursors in realtime
- 👥 **Online presence** — Shows who's currently on the site
- 💬 **Chat** — Live chat between visitors

These features activate automatically when the `NEXT_PUBLIC_WS_URL` environment variable is set. Without it, the portfolio works perfectly fine as a static site — no realtime features, no backend dependency.

---

## 🚀 Deployment

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Ansh-Goyal01/Ansh-Goyal-Portfolio)

This site is deployed on **Vercel**:

1. Push your code to GitHub
2. Connect the repository to [Vercel](https://vercel.com)
3. Add your environment variables in the Vercel dashboard
4. Vercel handles the rest — automatic deployments on every push

---

## ⚠️ Notes

- **Project screenshots** under `public/assets/projects-screenshots/` are generated cover art, not real UI screenshots — swap in real dashboards/demo GIFs as the projects get a UI.
- **`RESEND_API_KEY`** needs to be set in `.env.local` (or your Vercel env vars) for the contact form to actually send email.
- **`site` in `src/data/config.ts`** is a placeholder Vercel URL — update it once the final domain is live (affects SEO/OG tags).

## 📄 License

This project is available under the [MIT License](LICENSE).
