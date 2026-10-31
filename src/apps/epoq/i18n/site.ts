// The website's own words. English only for now, like the app; a language is added by adding it to
// `langs`, giving it the same keys here and in help.ts and privacy.ts, and adding src/pages/epoq/<lang>/.
export type Lang = 'en';
export const langs: Lang[] = ['en'];

export const t = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Epoq: the Unix clock that keeps your moments',
    description: 'The live Unix timestamp on your iPhone, and a one-tap way to pin the seconds that matter: births, weddings, deploys. Free, no account, no tracking.',
    heroLabel: 'seconds since 1970-01-01T00:00:00Z',
    heroTitle: 'Unix time, live. <span class="accent">Your moments, in seconds.</span>',
    heroLead: 'Epoq shows the current Unix timestamp as a big, ticking number. Tap Capture and it keeps that exact second, so you can see a birth, a wedding or a deploy as the seconds since, and the day it turns 100,000,000 seconds old.',
    soon: 'Coming soon to the App Store',
    badgeAlt: 'Download on the App Store',
    requires: 'Free · iPhone · iOS 18.2 or later',
    features: [
      { title: 'One tap keeps the second', body: 'Capture saves the exact second you tap, before you’ve typed anything. Name it now or later.' },
      { title: 'Past and future', body: 'Log any date with a date picker, or type or paste a timestamp in seconds or milliseconds. Future moments count down.' },
      { title: 'A timeline, not a list', body: 'Upcoming moments sit above a live NOW line and history below it, with the time between each. Every counter ticks.' },
      { title: 'Milestones', body: 'Each moment shows its next round number: 1,000,000 seconds, 100,000,000, a billion, and the day it gets there.' },
      { title: 'Copy it anywhere', body: 'Tap any timestamp to copy it. Hold the clock to copy milliseconds or ISO 8601 instead.' },
      { title: 'A desk clock', body: 'Turn your iPhone sideways for just the number, with the screen kept awake and a red tint for night.' },
    ],
    privacyTitle: 'Private by design',
    privacyLead: 'No account, no ads, no tracking, no network. Your moments are stored only on your iPhone.',
    nav: { support: 'Support', privacy: 'Privacy', studio: 'More from Kabosu Lab' },
    trademark: 'Apple, the Apple logo, iPhone and App Store are trademarks of Apple Inc., registered in the U.S. and other countries. UNIX is a registered trademark of The Open Group.',
    supportTitle: 'Support',
    supportDescription: 'Help with Epoq, the Unix time clock: capturing moments, past and future dates, milestones, time zones, desk mode, and how to contact us.',
    contactTitle: 'Contact us',
    contactBody: 'Questions, bugs or ideas: email',
    contactAfter: 'Settings → Contact us in the app fills in your app version and device for you. We usually reply within a few days.',
    privacyDescription: 'Epoq collects no data: no account, no analytics, no tracking and no network access. Your moments stay on your iPhone.',
    inShort: 'In short',
    inShortPoints: ['Epoq collects no data about you.', 'It has no account, no ads, no analytics and no tracking.', 'It never connects to the internet. Your moments are stored only on your iPhone.'],
    shotAlt: {
      now: 'The Epoq clock: the current Unix timestamp in large green digits, the date below it, and the Capture button.',
      timeline: 'The moments timeline: a milestone 15 days away above a live NOW line, then Last deploy, Mio born and Moved to Tokyo, each with a seconds counter.',
      detail: 'Mio born: the Unix timestamp, 62 million seconds elapsed, and the next milestone, Mio turns 100,000,000 seconds old.',
    },
  },
} as const;

export const path = (lang: Lang, page: '' | 'support/' | 'privacy/') =>
  `${import.meta.env.BASE_URL.replace(/\/$/, '')}/epoq/${lang === 'en' ? '' : `${lang}/`}${page}`;
