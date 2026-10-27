// The support FAQ. Hasha has no in-app Help to sync from (unlike Hinto), so it's written here.
// `code` is shown as a command block under the answer.
import type { Lang } from './site';

export type HelpItem = { q: string; a: string[]; code?: string };
export const help: Record<Lang, HelpItem[]> = {
  en: [
    {
      q: 'What does Hasha do?',
      a: ['It looks for two different inputs whose SHA-256 hashes start with the same bits. You choose how many bits must match, from 24 to 256, and Hasha searches until it finds a pair.'],
    },
    {
      q: 'Why doesn’t a 256-bit search ever finish?',
      a: ['Every two extra bits double the work. A full 256-bit collision needs about 4 × 10³⁸ hashes, which would take any computer on Earth far longer than the age of the universe. That’s why SHA-256 is trusted. Hasha shows the expected number of hashes for each size, so you can see how far away it is.',
          'For a search that finishes, choose fewer bits in Settings: up to 48 bits finishes in seconds.'],
    },
    {
      q: 'Should I use the GPU or the CPU?',
      a: ['The GPU is much faster on most devices, so it’s the better choice for 56 bits and up. The CPU option runs on every core and is there for comparison. Settings shows the option only on devices that support it.'],
    },
    {
      q: 'What is the seed?',
      a: ['The seed decides the salt and where every part of the search starts. With the same seed, bit length and CPU or GPU choice, Hasha finds the exact same collision after the exact same number of hashes, on any device. Leave the seed empty in Settings for a random one each time.'],
    },
    {
      q: 'How can I check a collision myself?',
      a: ['Each hash is SHA-256 of the salt (16 bytes) followed by the input padded with zeros to 32 bytes. Tap a value on the collision screen to copy it, then on a Mac or Linux computer run the command below with your own salt and input. It prints the same hash Hasha shows.'],
      code: 'salt=8e996b554418e2c6e18757c614d9d530\ninput=fbdfd89907\nprintf "%s%-64s" $salt $input | tr " " 0 | xxd -r -p | shasum -a 256',
    },
    {
      q: 'Does it drain my battery or heat up my phone?',
      a: ['A search uses your device’s full power while it runs, so long searches use battery and can make it warm. Hasha pauses the search whenever it goes to the background, and saves it so it resumes where it left off.'],
    },
    {
      q: 'My search from an earlier version is gone.',
      a: ['Hasha 2.0 saves searches in a new format, so searches started in 1.0 can’t be resumed and start over.'],
    },
    {
      q: 'Does Hasha collect any data?',
      a: ['No. It has no account, no analytics and no network access. See the privacy policy.'],
    },
  ],
};
