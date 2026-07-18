# NCR Classes — website

React + Vite + Tailwind. Deploys to Vercel.

## Run it locally (PowerShell)

```powershell
cd "C:\Claude\Code\NCR Website"
npm install
npm run dev
```

Opens on http://localhost:5173

## The four things to change first

All of them live in **`src/data/site.js`**:

| What | Why it matters |
|---|---|
| `phone` | Your WhatsApp number. Country code, no `+`, no spaces. Nothing works until this is right. |
| `stats` | Four real numbers. They count up on scroll. |
| `quotes` | Three real testimonials. First name + role + locality is enough. |
| `OPENINGS` | Live assignments on the tutor page. Keep 6–10 and refresh weekly. |

Two more, in `src/pages/Home.jsx`: the parent-cost FAQ, and anything about
what you charge.

## Photos

Drop `hero.jpg` and `teacher.jpg` into `public/images/`. See the README
in that folder for what to shoot. Until the files exist, the site shows a
hatched placeholder with the instructions written on it — nothing looks broken.

## Where form submissions go

`CONFIG.endpoint` in `src/data/site.js` controls this.

- `"/api/lead"` — posts to the serverless function in `api/lead.js`.
  Out of the box that just logs. Open the file and uncomment either the
  Airtable or the Google Sheet block to actually store leads.
- `""` — WhatsApp-only. Nothing is stored; the form still hands off to WhatsApp.

Either way the user always gets the "Send on WhatsApp" button with their whole
requirement pre-filled, so **you never lose a lead even if the backend is down.**

Note: `api/lead.js` only runs on Vercel. In `npm run dev` the POST will fail
silently and fall through to the WhatsApp hand-off. That's expected.

## Deploy

```powershell
git init
git add .
git commit -m "NCR Classes site"
git remote add origin https://github.com/<you>/ncr-classes.git
git push -u origin main
```

Then import the repo at vercel.com. Framework preset: **Vite**. No env vars
needed unless you wire up Airtable or Sheets.

`vercel.json` already handles SPA routing, so `/find-a-tutor` won't 404 on refresh.

## Structure

```
src/
  data/site.js         ← edit this
  lib/wa.js            WhatsApp link + reference number helpers
  components/
    Header, Footer, PageHead
    LeadForm           validation, POST, success state, WhatsApp hand-off
    Field              Field / Input / Select / CheckRow
    Reveal             fade-up on scroll
    CountUp            animated stat numbers
    PhotoSlot          image with instruction fallback
    Steps
  pages/
    Home, FindTutor, JoinTutor, ForSchools
  index.css            the whole design system
api/lead.js            Vercel serverless endpoint
public/images/         your photos go here
```

## A note on Tailwind

Tailwind is installed and configured, but most of the styling lives in
`src/index.css` as design tokens and component classes. The animations
(hand-drawn underline, drifting blobs, marquee, floating cards) are far
cleaner in plain CSS than in utility classes. Use Tailwind utilities for
one-off spacing tweaks; edit `index.css` for anything structural.
