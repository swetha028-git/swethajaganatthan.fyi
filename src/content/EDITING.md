# Quick editing guide

You never need to touch page layout code. Edit the files below only.

| What you want to change | File |
| --- | --- |
| Name, one-line intro, contact links, footer location | `src/content/site.json` |
| About section (Markdown) | `src/content/about.md` |
| A blog post | Add a `.md` file in `src/content/writings/` |
| Podcast / video / talk | `src/content/media.json` → `items` array |

## New writing (copy this template)

Create `src/content/writings/my-post-slug.md`:

```md
---
title: Your post title
date: 2025-10-13
summary: Optional short line for RSS and search engines
---

Your essay in Markdown here.

```

The URL will be `/writings/my-post-slug/` (from the filename).

## New media entry (copy into `items` in `media.json`)

```json
{
  "title": "Episode title",
  "url": "https://…",
  "type": "podcast",
  "date": "2025-10-13",
  "note": "Optional one-line note on the home page",
  "embedOnMediaPage": false
}
```

`type` must be one of: `podcast`, `video`, `talk`, `interview`.

Set `"embedOnMediaPage": true` on a YouTube `video` or `talk` to show a small player on `/media/`.

## New contact link

Add an object to the `links` array in `site.json`:

```json
{
  "label": "GitHub",
  "url": "https://github.com/swetha028-git"
}
```
