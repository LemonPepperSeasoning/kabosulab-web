// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output only (no server): served by GitHub Pages at lemonpepperseasoning.github.io/kabosulab-web/.
// With kabosulab.com later, set `site` to it, remove `base`, and add public/CNAME.
export default defineConfig({
  site: 'https://lemonpepperseasoning.github.io',
  base: '/kabosulab-web',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
});
