// The studio, and the apps the Kabosu Lab home page lists. Each app's own pages, words and styles are in
// src/apps/<slug>/ (laid out like Hinto-web), with page files in src/pages/<slug>/.
import { site as hasha } from './apps/hasha/config';
import { site as hinto } from './apps/hinto/config';

export const studio = {
  name: 'Kabosu Lab',
  email: 'lemonpepperstudioco@gmail.com',
};

export const apps = [
  { slug: 'hasha', name: hasha.name, tagline: 'Hunt for SHA-256 collisions on your iPhone’s CPU and GPU.' },
  { slug: 'hinto', name: hinto.name, tagline: 'Photograph a page and get flashcards.' },
];

/** A path on this site, with the base and a trailing slash. */
export const href = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`.replace(/\/+/g, '/');
