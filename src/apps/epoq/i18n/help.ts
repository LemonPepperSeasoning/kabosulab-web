// The support FAQ, written from the app as built (Epoq 1.0). It has no in-app Help to sync from.
// `code` is shown as a command block under the answer.
import type { Lang } from './site';

export type HelpItem = { q: string; a: string[]; code?: string };
export const help: Record<Lang, HelpItem[]> = {
  en: [
    {
      q: 'What is Unix time?',
      a: ['The number of seconds since 1 January 1970 at 00:00:00 UTC. It’s the same number everywhere in the world at the same instant, which is why computers use it. It skips leap seconds, so every day is exactly 86,400 seconds.',
          'You can check the number Epoq shows against your computer’s clock with the command below (Mac or Linux).'],
      code: 'date +%s',
    },
    {
      q: 'How do I save a moment?',
      a: ['Tap Capture under the clock. Epoq saves that exact second straight away, as an untitled moment, so nothing is lost while you type. Tap Name it on the message that appears (or on the moment in the timeline) to add a title, an emoji and a note.'],
    },
    {
      q: 'Can I add a date in the past or the future?',
      a: ['Yes. Pull up the Moments drawer and tap +. Pick a date and time, or tap the big number at the top and type or paste a timestamp: 10 digits are seconds and 13 digits are milliseconds. Future moments count down.'],
    },
    {
      q: 'What are milestones?',
      a: ['Round numbers of seconds since a moment: 1,000,000, 2,000,000, 5,000,000, 10,000,000 and so on up to a billion and beyond. A moment’s page shows the next one and the date it falls on. Milestones of 100,000,000 seconds or more appear on the timeline when they’re less than 30 days away.'],
    },
    {
      q: 'What do precision and time zone change?',
      a: ['Precision rounds a moment down to the second, the minute or the day, for when you only know the date. The time zone only changes how the date is written; the Unix timestamp is the same in every time zone.'],
    },
    {
      q: 'How do I copy a timestamp?',
      a: ['Tap the clock to copy the current Unix time in seconds. Touch and hold it to copy milliseconds or an ISO 8601 date instead. On a moment’s page, tap its timestamp or Copy.'],
    },
    {
      q: 'How does desk mode work?',
      a: ['Turn your iPhone sideways and Epoq shows just the number. While it’s sideways the screen stays awake (you can turn this off in Settings). Tap the screen to switch to a red tint for night.'],
    },
    {
      q: 'Are my moments backed up or synced?',
      a: ['Moments are stored only on your iPhone. They’re included in your iPhone’s backup (iCloud or your computer) under your backup settings, and they come back when you restore that backup. They don’t sync between devices. Deleting the app deletes them.'],
    },
    {
      q: 'How do I delete a moment?',
      a: ['Open it and tap Delete, or touch and hold it in the timeline and choose Delete.'],
    },
    {
      q: 'Does Epoq collect any data?',
      a: ['No. It has no account, no analytics and no network access. See the privacy policy.'],
    },
  ],
};
