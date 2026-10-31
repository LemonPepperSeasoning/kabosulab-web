// The privacy policy, worded from the app as built (Epoq 1.0): no network code, no third-party SDKs, moments and
// settings in UserDefaults, and PrivacyInfo.xcprivacy declaring no tracking and no collected data.
// If the app ever sends anything anywhere, update this first.
import type { Lang } from './site';

export const privacyUpdated = '2026-10-28';
export const contactEmail = 'lemonpepperstudioco@gmail.com';

type Section = { heading: string; body: string[] };
export const privacy: Record<Lang, { title: string; intro: string; updated: string; sections: Section[] }> = {
  en: {
    title: 'Privacy policy',
    updated: 'Last updated: 28 October 2026',
    intro: 'Epoq is an app for iPhone made by Kabosu Lab that shows the current Unix time and keeps moments you choose to save. In short: it collects nothing, and nothing leaves your iPhone.',
    sections: [
      {
        heading: 'What Epoq stores',
        body: ['Epoq saves the moments you create (each one’s title, emoji, note, timestamp, time zone and precision) and your settings (theme, the line under the clock, and keep awake). This is stored only on your iPhone, in the app’s own storage. It may be included in your device backup (iCloud or your computer) under your backup settings. Deleting the app deletes it.'],
      },
      {
        heading: 'What Epoq sends',
        body: ['Nothing. The app has no network access, no third-party code and no advertising or analytics tools. Timestamps you copy go only to your clipboard, and a moment you share goes only where you choose in the share sheet.'],
      },
      {
        heading: 'Information Apple provides',
        body: ['If you turned on Share With App Developers in your iPhone’s settings, Apple may share anonymous crash reports and usage statistics with us. Apple collects these, not Epoq, and they don’t identify you. App Store downloads and ratings are handled by Apple under Apple’s privacy policy.'],
      },
      {
        heading: 'Contacting us',
        body: ['If you email us, we use your email address and message only to reply. We don’t share them. Contact us in the app’s Settings adds the app version, iOS version and iPhone model to the email, which you can see and edit before sending.'],
      },
      {
        heading: 'Children',
        body: ['Epoq collects no data from anyone, including children.'],
      },
      {
        heading: 'Changes',
        body: ['If this policy changes, we’ll update this page and the date above. If Epoq ever starts collecting data, we’ll say so here before the version that does is released.'],
      },
      {
        heading: 'Contact',
        body: ['Kabosu Lab, lemonpepperstudioco@gmail.com'],
      },
    ],
  },
};
