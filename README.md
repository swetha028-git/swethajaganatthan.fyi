# Swetha — personal site

Minimal static site built with [Astro](https://astro.build). Content lives in Markdown and JSON under `src/content/` so you can update the site without touching layout code.

See **`src/content/EDITING.md`** for copy-paste templates.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321). Stop the server with `Ctrl+C`.

Production build:

```bash
npm run build
npm run preview
```

## Add a writing

1. Create a new file in `src/content/writings/`, for example `my-new-post.md`.
2. Use this front matter at the top:

```md
---
title: Post title
date: 2025-10-13
summary: Optional
---

Body in Markdown.
```

3. Save. The home page list and `/writings/my-new-post/` are created automatically.

## Add a podcast or video

1. Open `src/content/media.json`.
2. Add a new object to the `items` array (see the sample entries).
3. Save. It appears on the home page, newest first by `date`.

Optional: set `"embedOnMediaPage": true` for YouTube `video` or `talk` links to show an embed on [/media/](http://localhost:4321/media/).

## Edit the About note

Edit `src/content/about.md` in Markdown. No front matter required.

## Edit intro, links, or location

Edit `src/content/site.json`:

- `intro` — one line under your name
- `links` — email, LinkedIn, X, or any links you add
- `location` — footer text

## Edit from your phone (GitHub)

1. Push this repo to GitHub (see Deploy below).
2. In the GitHub app or mobile browser, open the repo → **Browse files**.
3. Tap the file (e.g. `src/content/site.json`) → **Edit** (pencil).
4. Make changes, commit to `main`. Your host rebuilds the site on every push.

## Deploy (free, auto on git push)

Replace `YOUR_SITE_URL` in `astro.config.mjs` with your real URL (e.g. `https://swetha.netlify.app`).

### Netlify (simplest)

1. Push the repo to GitHub.
2. [Netlify](https://www.netlify.com/) → **Add new site** → **Import from Git**.
3. Build command: `npm run build` (already in `netlify.toml`). Publish directory: `dist`.
4. Deploy. Every push to `main` redeploys.

### Cloudflare Pages

1. Push to GitHub.
2. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → connect the repo.
3. Framework preset: **Astro**. Build command: `npm run build`. Output: `dist`.
4. Save. Auto-deploy on push.

### GitHub Pages

1. Push to GitHub (`main` or `master`).
2. Repo **Settings** → **Pages** → **Source**: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` runs on each push. Enable Pages when prompted.

## RSS

Writings feed: `/rss.xml` (after deploy, use your full domain).

## Decap CMS (`/admin`)

Not included. A browser-based editor needs OAuth (Netlify Identity, GitHub backend, or similar) and extra config. For a small personal site, editing Markdown/JSON in GitHub—or locally—is simpler and more reliable. If you later want `/admin`, [Decap CMS](https://decapcms.org/) can be added on top of this repo.

## Project layout

```
src/content/site.json       # name, intro, links, location
src/content/about.md        # About section
src/content/writings/*.md   # one file per post
src/content/media.json      # podcasts & videos list
src/styles/global.css       # all styles (colors, typography)
src/pages/                  # routes (rarely need edits)
```
