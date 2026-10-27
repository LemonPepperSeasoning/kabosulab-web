// Every app the site has pages for. Adding an app: an entry here, then src/pages/<slug>/
// (index, support, privacy) and its assets in src/assets/<slug>/ and public/<slug>/.

export interface App {
  slug: string;
  name: string;
  /** One line for the studio home page and the landing page's description. */
  tagline: string;
  /** The App Store id once the app is live; turns on the badge and the Smart App Banner. */
  appStoreId?: string;
  minimumIOS: string;
  /** Where the app's pages are, when they aren't on this site yet. */
  externalURL?: string;
}

export const studio = {
  name: 'Kabosu Lab',
  email: 'lemonpepperstudioco@gmail.com',
};

export const apps: App[] = [
  {
    slug: 'hasha',
    name: 'Hasha',
    tagline: 'Hunt for SHA-256 collisions on your iPhone’s CPU and GPU.',
    appStoreId: '6443560907',
    minimumIOS: '15.5',
  },
  {
    slug: 'hinto',
    name: 'Hinto',
    tagline: 'Photograph a page and get flashcards.',
    minimumIOS: '17',
    // Hinto's pages stay on Hinto-web until kabosulab.com exists; its submitted URLs point there.
    externalURL: 'https://lemonpepperseasoning.github.io/Hinto-web/',
  },
];

export const app = (slug: string) => apps.find((a) => a.slug === slug)!;
export const appStoreURL = (a: App) => (a.appStoreId ? `https://apps.apple.com/app/id${a.appStoreId}` : '');
/** A path on this site, with the base and a trailing slash. */
export const href = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`.replace(/\/+/g, '/');
