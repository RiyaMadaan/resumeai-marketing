# ResumeAI — Marketing Website

**Don't fill forms. Tell your story.**

The public marketing site for ResumeAI, an AI-powered resume builder. This
repository contains the website only — the product itself lives in
[resumeai-app](https://github.com/RiyaMadaan/resumeai-app).

## What's here

A single-page marketing site: hero, the problem it solves, how it works,
features, a product demo, resume templates, pricing, FAQ and a closing CTA.
There is no authentication, no API and no user data — every "Create My Resume"
and "Log in" button links out to the application.

## Tech stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router (home + 404)

## Getting started

```bash
npm install
cp .env.example .env    # PowerShell: Copy-Item .env.example .env
npm run dev             # http://localhost:5174
```

> The app's dev server also defaults to port 5173, so run the marketing site on
> a different port (`npm run dev -- --port 5174`) if you're running both.

## Environment variables

| Variable       | Purpose                                                         |
| -------------- | --------------------------------------------------------------- |
| `VITE_APP_URL` | Where the ResumeAI application is deployed. CTAs link here.       |

Defaults to `http://localhost:5173` when unset, so local development works with
no configuration. Set it to the deployed app URL in production, e.g.:

```
VITE_APP_URL=https://app.resumeai.example.com
```

There are no secrets in this repository, and none belong here — it is a fully
static site.

## Commands

| Command           | What it does                       |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Start the Vite dev server          |
| `npm run build`   | Type-check and build to `dist/`    |
| `npm run preview` | Preview the production build       |

## Deployment

`npm run build` emits a static bundle to `dist/` — deploy it to any static host
(Vercel, Netlify, Cloudflare Pages, S3 + CloudFront).

Two things to configure on the host:

1. **`VITE_APP_URL`** as a build-time environment variable, so the CTAs point at
   the real application.
2. **SPA fallback** — rewrite unknown paths to `/index.html` so the 404 page
   renders through the router rather than the host's own error page.
