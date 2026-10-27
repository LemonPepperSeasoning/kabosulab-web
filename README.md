# kabosulab-web

The website for Kabosu Lab's apps: each app's landing, support and privacy pages, which App Store Connect links to. Static Astro, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

Live at https://lemonpepperseasoning.github.io/kabosulab-web/ until kabosulab.com exists.

| Path | Page |
|---|---|
| `/` | Kabosu Lab: the list of apps |
| `/hasha/`, `/hasha/support/`, `/hasha/privacy/` | Hasha (English) |
| `/hinto/`, `/hinto/support/`, `/hinto/privacy/`, and the same under `/hinto/ja/` | Hinto (English and Japanese), ported from Hinto-web |

Hinto 1.0 was submitted with the Hinto-web URLs, so both sites serve Hinto's pages until a Hinto release switches App Store Connect to these. Hinto-web then becomes redirects.

## Layout

Each app is laid out like Hinto-web, in its own folder, with thin page files in `src/pages/<app>/`:

```
src/apps/<app>/
  config.ts              name, publisher, email, App Store id, minimum iOS
  i18n/site.ts           the site's words per language, and path(lang, page)
  i18n/help.ts           the support FAQ
  i18n/privacy.ts        the privacy policy, worded from the app as built
  layouts/Base.astro     SEO (canonical, hreflang, Open Graph, JSON-LD) with the header and footer
  components/            Header, Footer, InstallBadge, PhoneShot, and pages/Landing, Support, Privacy
  styles/global.css      the app's look; only that app's pages load it
  assets/                screenshots and art, optimised by astro:assets
public/<app>/            icons, share images, App Store badges
scripts/<app>/           the app's content tools
```

The Kabosu Lab pages (`src/pages/index.astro`, `404.astro`) use `src/layouts/Studio.astro` and `src/styles/studio.css`; `src/apps.ts` lists the apps for the home page.

## Develop

```
npm install
npx astro dev --background   # http://localhost:4321/kabosulab-web/
npx astro build              # into dist/
```

## Adding an app

1. Copy `src/apps/hasha/` to `src/apps/<app>/` and `src/pages/hasha/` to `src/pages/<app>/`, then rewrite the config, words and styles.
2. Icons (`app-icon.png` 256 or more, `apple-touch-icon.png` 180, from the app's AppIcon), `og.png` and Apple's badges in `public/<app>/`.
3. An entry in `src/apps.ts`.

Write the privacy policy from the app as built (its `PrivacyInfo.xcprivacy`, network use, SDKs) and update it whenever that changes.

## Adding a language to an app

Add it to `langs` in the app's `i18n/site.ts` with the same keys, add it to `help.ts` and `privacy.ts`, and add `src/pages/<app>/<lang>/` (see Hinto's `ja/`). hreflang links appear once an app has more than one language.

## Hinto

- `python3 scripts/hinto/sync-help.py [../Hinto-ios]` regenerates `src/apps/hinto/i18n/help.ts` from the app's in-app Help.
- `node scripts/hinto/render-images.mjs` renders the share images (needs Google Chrome).
- `node scripts/hinto/extract-buddies.mjs <design kit>/ui-design/_kit/characters.js` refreshes the buddies.
- At launch: `install: 'live'` and `appStoreId` in `src/apps/hinto/config.ts`, and Apple's localised badges in `public/hinto/badges/app-store-{en,ja}.svg`.

## Custom domain (later)

Set `site` to `https://kabosulab.com` in `astro.config.mjs`, remove `base`, add `public/CNAME`, and update `public/robots.txt`.
