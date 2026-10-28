# Fora launch page

Pre-launch landing page for Fora Daily Health Boost Super Greens+ Gummies, in English (`/`) and German (`/de/`). Plain HTML, CSS and JS served as static files. The HTML is **pre-rendered by a small script** and the generated files are committed, so nothing is built on the server. Sign-ups go to Klaviyo.

## How it is organised

```
src/                 page templates (structure) with {{keys}} where text goes
  index.html  legal.html  404.html
  legal/             legal text per language: privacy.en/.de, terms.en/.de, impressum.de
  partials/          analytics.html (consent-gated tracking IDs), redirect.html (browser-language redirect)
i18n/en.json         every page string, English   (key -> text)
i18n/de.json         every page string, German
js/lang/en.js, de.js strings used by the scripts: plans and prices, form messages, drawer labels, cookie banner
tools/build.py       renders src/ + i18n/ into the final pages (see below)

index.html  legal/*.html                generated, English
de/index.html  de/legal/*.html          generated, German (incl. Impressum)
404.html  sitemap.xml  robots.txt       generated
css/styles.css  js/*.js  assets/        edited by hand
```

## Day to day

1. Change copy in `i18n/en.json` / `i18n/de.json`, structure in `src/*.html`, legal text in `src/legal/`, plans and prices in `js/lang/*.js`.
2. Run the build. It regenerates every page and stamps CSS/JS links with a fresh `?v=` so browsers never mix old and new files:

```bash
python3 tools/build.py
```

3. Preview, commit and push. **Do not edit the generated HTML files directly**; the next build overwrites them.

The build warns if a German key is missing (it then falls back to English) and fails on an unknown `{{key}}`. The checkout is an in-page view of the home page (`#checkout`), so it lives in `src/index.html`.

## Languages

- URLs: `/` English, `/de/` German, linked with `hreflang` tags and listed in `sitemap.xml` (site URL set in `tools/build.py`, `SITE`).
- First visit to `/`: browsers set to German (de, de-AT, de-CH...) are sent to `/de/`. The `EN | DE` switch in the footer stores the visitor's choice, which then always wins.
- German uses the euro sign with the same figures as the pound prices (`29,99 €`). To change the format edit `money` in `js/lang/de.js`; plan prices are also listed in `js/lang/*.js` and `i18n/*.json`, keep them in sync.
- Klaviyo gets a `language` property (`en` or `de`) with every sign-up.
- Marketing copy uses informal "du", the legal pages use "Sie". The German text is a first draft: have a native speaker proofread it, and check health claims per market.

## Analytics and cookies

Google Analytics 4, PostHog (EU cloud, heatmaps only, session recording off) and the Meta Pixel are wired in `src/partials/analytics.html`, but they **only load after the visitor accepts** the cookie banner (`js/common.js`). Paste Fora's IDs into `window.FORA_TRACKING` at the top of that file (`GA_ID`, `META_PIXEL_ID`, `POSTHOG_KEY`), then rebuild. An empty ID means that tool never loads. Declining keeps everything off and removes the cookies. "Cookie settings" in the footer lets people change their mind. The privacy pages describe this.

## Klaviyo

`js/config.js` holds the public key and list ID. `DRY_RUN: true` logs payloads to the console instead of sending them. Profile data: email, first name, and properties `plan`, `plan_name`, `quantity`, `plan_total`, `source` and `language`; plus a `Joined Waitlist` event.

## Fonts

Headings use **New Kansas Bold** from the Adobe Fonts kit `sdf4idw` (same kit as the Shopify theme). Add the live domain (and `localhost`) under Adobe Fonts > Web Projects > the kit > Domains. Body text is self-hosted Archivo. Adobe Fonts is listed in the privacy pages.

## Content still to supply

Customer reviews are placeholders (`js/lang/*.js`), some label claims are marked TBC, and the legal pages need approval by the client and their legal adviser.

## Run locally

```bash
python3 -m http.server 8095
```

Open http://localhost:8095 (English) or http://localhost:8095/de/ (German).

## Deploy (GitHub Pages)

Repo: https://github.com/nurturelife/fora-launch. Pages deploys the `main` branch (root); every push redeploys in about a minute. For the custom domain add a `CNAME` file at the repo root once DNS is ready.
