# kabosulab-web

The website for Kabosu Lab's apps: each app's landing, support and privacy pages, which App Store Connect links to. Static Astro, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

Live at https://lemonpepperseasoning.github.io/kabosulab-web/ until kabosulab.com exists.

| Path | Page |
|---|---|
| `/` | Kabosu Lab: the list of apps |
| `/hasha/` | Hasha landing page (Marketing URL) |
| `/hasha/support/` | Hasha support (Support URL) |
| `/hasha/privacy/` | Hasha privacy policy (Privacy Policy URL) |

Hinto's pages are still on [Hinto-web](https://github.com/LemonPepperSeasoning/Hinto-web): Hinto 1.0 was submitted with those URLs, and GitHub Pages doesn't redirect a renamed repo. They move to `/hinto/` here with the custom domain, and Hinto-web then redirects.

## Develop

```
npm install
npx astro dev --background   # http://localhost:4321/kabosulab-web/
npx astro build              # into dist/
```

## Adding an app

1. An entry in `src/apps.ts` (name, tagline, App Store id once live).
2. Pages in `src/pages/<slug>/`: `index.astro`, `support/index.astro`, `privacy/index.astro`. Copy Hasha's.
3. Screenshots in `src/assets/<slug>/`; `app-icon.png` (512), `apple-touch-icon.png` (180) and `og.png` (1200 × 630) in `public/<slug>/`.
4. A `[data-theme="<slug>"]` block in `src/styles/global.css` with the app's colours.

Write the privacy policy from the app as built (its `PrivacyInfo.xcprivacy`, network use, SDKs) and update it whenever that changes.

## Custom domain (later)

Set `site` to `https://kabosulab.com` in `astro.config.mjs`, remove `base`, add `public/CNAME`, and update `public/robots.txt`.
