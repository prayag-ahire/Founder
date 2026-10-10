# #Founder

A site for **Indian founders**: how to incorporate a startup in India, Pvt Ltd vs LLP, GST, DPIIT, and short founder stories.

Built with [Astro](https://astro.build). Backed by Karpav Technology.

## Run locally

```sh
npm install
npm run dev
```

## Before you deploy (SEO)

1. Set your real domain. Either export `PUBLIC_SITE_URL=https://your-domain.in` or change `site` in `astro.config.mjs`. Canonical URLs, Open Graph, and the sitemap all use this.
2. Change `email` in `src/lib/site.ts` to an inbox you read. The submit form opens a mailto draft.
3. After go-live, add the property in [Google Search Console](https://search.google.com/search-console), submit `https://your-domain.in/sitemap-index.xml`, and set country targeting to **India** if the option is available.
4. Ask to be indexed is not enough — the pages that should rank are `/guides/incorporate-in-india` and each `/faq/...` answer.

## Content

- `src/content/faqs` — one markdown file per question (best for Google)
- `src/content/startups` — Indian company case studies
- `src/content/stories` — founder narratives

## Commands

| Command           | Action                             |
| ----------------- | ---------------------------------- |
| `npm run dev`     | Local server at `localhost:4321`   |
| `npm run build`   | Production build to `./dist/`      |
| `npm run preview` | Preview the production build       |
