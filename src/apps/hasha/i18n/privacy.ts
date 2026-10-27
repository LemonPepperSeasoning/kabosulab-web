// The privacy policy, worded from the app as built (Hasha 2.0): no network code, no third-party SDKs, settings and
// the saved search in UserDefaults, and PrivacyInfo.xcprivacy declaring no tracking and no collected data.
// If the app ever sends anything anywhere, update this first.
import type { Lang } from './site';

export const privacyUpdated = '2026-10-28';
export const contactEmail = 'lemonpepperstudioco@gmail.com';

type Section = { heading: string; body: string[] };
export const privacy: Record<Lang, { title: string; intro: string; updated: string; sections: Section[] }> = {
  en: {
    title: 'Privacy policy',
    updated: 'Last updated: 28 October 2026',
    intro: 'Hasha is an app for iPhone and iPad made by Kabosu Lab that searches for SHA-256 collisions. In short: it collects nothing, and nothing leaves your device.',
    sections: [
      {
        heading: 'What Hasha stores',
        body: ['Hasha saves your settings (bit length, CPU or GPU, and seed) and the search in progress, so a search can resume after a pause or relaunch. This is stored only on your device, in the app’s own storage. It may be included in your device backup (iCloud or your computer) under your backup settings. Deleting the app deletes it.'],
      },
      {
        heading: 'What Hasha sends',
        body: ['Nothing. The app has no network access, no third-party code and no advertising or analytics tools. Values you copy from the collision screen go only to your clipboard.'],
      },
      {
        heading: 'Information Apple provides',
        body: ['If you turned on Share With App Developers in your device’s settings, Apple may share anonymous crash reports and usage statistics with us. Apple collects these, not Hasha, and they don’t identify you. App Store downloads and ratings are handled by Apple under Apple’s privacy policy.'],
      },
      {
        heading: 'Contacting us',
        body: ['If you email us, we use your email address and message only to reply. We don’t share them.'],
      },
      {
        heading: 'Children',
        body: ['Hasha collects no data from anyone, including children.'],
      },
      {
        heading: 'Changes',
        body: ['If this policy changes, we’ll update this page and the date above. If Hasha ever starts collecting data, we’ll say so here before the version that does is released.'],
      },
      {
        heading: 'Contact',
        body: ['Kabosu Lab, lemonpepperstudioco@gmail.com'],
      },
    ],
  },
};
