# Fora launch page

Static pre-launch landing page for Fora Daily Health Boost Super Greens+ Gummies. Plain HTML, CSS and JS: no build step, no dependencies. Converted from the design artifact; sign-ups go to Klaviyo.

```
index.html        landing page + in-page pre-launch checkout (name + email)
css/styles.css    all styling and responsive rules
js/config.js      Klaviyo settings (edit this)
js/content.js     all page copy, plans, reviews, FAQs, nutrition data
js/klaviyo.js     Klaviyo sign-up + event helpers
js/app.js         page behaviour (plans, gallery, reviews, FAQ, drawer, checkout)
assets/           logo, images, Archivo font files
```

## Run locally

```bash
python3 -m http.server 8090
```

Then open http://localhost:8090.

## Fonts

Headings use **New Kansas Bold** from the Adobe Fonts kit `sdf4idw` (same kit as the Shopify theme). Adobe only serves a kit to allowed domains, so add the live domain (and `localhost` for local work) under Adobe Fonts > Web Projects > the kit > Domains. Body text is self-hosted Archivo.

## Klaviyo

Edit `js/config.js`:

- `KLAVIYO_COMPANY_ID`: the public API key (Klaviyo > Settings > Account > API keys).
- `KLAVIYO_LIST_ID`: the list that receives sign-ups.
- `DRY_RUN`: set to `false` to go live. While `true` (or while the IDs are empty), nothing is sent and payloads are logged to the browser console.

The checkout form sends first name and email as a Klaviyo subscription (`source: prelaunch_checkout`), with the chosen plan, quantity and total as profile properties, plus a `Joined Waitlist` event (turn off with `TRACK_EVENTS: false`). A hidden honeypot field and a minimum-time check silently drop most bots. No payment or address data is ever collected.

## Changing content

- Copy, plans, prices, reviews, FAQs, nutrition: `js/content.js` (keeps the JS-rendered sections in sync) and, for static sections, `index.html`.
- Colours and layout: `css/styles.css`.
- Placeholders still to replace before launch: customer reviews and review photos (marked `[PLACEHOLDER…]`), `tbc` label claims in `js/content.js`, footer links (Privacy, Terms, etc. currently point to the top of the page).

## Deploy (GitHub Pages)

Repo: https://github.com/nurturelife/fora-launch. In Settings > Pages deploy from the `main` branch (root). Every push to `main` redeploys in about a minute. For a custom domain add a `CNAME` file at the repo root once DNS is ready.
