// The website's own words. English only for now, like the app; a language is added by adding it to
// `langs`, giving it the same keys here and in help.ts and privacy.ts, and adding src/pages/hasha/<lang>/.
export type Lang = 'en';
export const langs: Lang[] = ['en'];

export const t = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Hasha: find SHA-256 collisions on your iPhone',
    description: 'Pick how many bits must match and let your iPhone hunt for a SHA-256 collision on every CPU core or the GPU. Free, open source, no tracking.',
    heroLabel: 'SHA-256 · 24 to 256 bits',
    heroTitle: 'Two inputs. <span class="accent">The same hash.</span>',
    heroLead: 'A full SHA-256 collision would take longer than the age of the universe. Hasha shows how close your iPhone can get: pick how many leading bits must match, and it searches on every CPU core or the GPU.',
    soon: 'Coming soon to the App Store',
    badgeAlt: 'Download on the App Store',
    requires: 'Free · iPhone and iPad · iOS 15.5 or later',
    features: [
      { title: 'Watch the search', body: 'A live count of hashes, the speed, and how many to expect. Up to 48 bits finishes in seconds. 256 bits never finishes, and that’s the point.' },
      { title: 'See the collision', body: 'A grid of the 256 bits shows which match. Both inputs, both hashes and the salt are there, and a tap copies any of them.' },
      { title: 'Rerun any search', body: 'Every search has a seed. The same seed and settings find the exact same collision, after the exact same number of hashes.' },
      { title: 'Built for the GPU', body: 'Parallel collision search with distinguished points, so thousands of Metal threads search at once with little memory. Pause any time; it picks up where it left off.' },
    ],
    privacyTitle: 'Private by design',
    privacyLead: 'No account, no ads, no tracking, no network. Every hash is computed on your device, and nothing leaves it.',
    sourceLead: 'Hasha is open source under the MIT license.',
    sourceLink: 'Read the code on GitHub',
    algorithmLink: 'how the search works',
    nav: { support: 'Support', privacy: 'Privacy', studio: 'More from Kabosu Lab' },
    trademark: 'Apple, the Apple logo, iPhone, iPad and App Store are trademarks of Apple Inc., registered in the U.S. and other countries.',
    supportTitle: 'Support',
    supportDescription: 'Help with Hasha, the SHA-256 collision search app: bit lengths, GPU or CPU, seeds, checking a collision, and how to contact us.',
    contactTitle: 'Contact us',
    contactBody: 'Questions, bugs or ideas: email',
    contactAfter: 'Please include your device and iOS version. We usually reply within a few days.',
    privacyDescription: 'Hasha collects no data: no account, no analytics, no tracking and no network access. Everything stays on your device.',
    inShort: 'In short',
    inShortPoints: ['Hasha collects no data about you.', 'It has no account, no ads, no analytics and no tracking.', 'It never connects to the internet. Every hash is computed on your device.'],
    shotAlt: {
      home: 'Hasha searching 64 bits on the GPU: 2.05 billion hashes so far, 306 million a second, about 5.38 billion expected.',
      collision: 'Collision found after 2.36 million hashes: the bit grid with the first 40 bits lit, both inputs and their matching hashes.',
      settings: 'Hasha settings: bits to match from 24 to 256, GPU or CPU, and a seed.',
    },
  },
} as const;

export const path = (lang: Lang, page: '' | 'support/' | 'privacy/') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/hasha/${lang === 'en' ? '' : `${lang}/`}${page}`;
