// One place for what changes at release.
export const site = {
  name: 'Hasha',
  publisher: 'Kabosu Lab',
  email: 'lemonpepperstudioco@gmail.com',
  /** 'soon' before launch (a plain text pill, never an imitation badge); 'live' uses Apple's badge. */
  install: 'live' as 'soon' | 'live',
  /** The App Store id. Turns on the Smart App Banner and the badge link. */
  appStoreId: '6443560907' as string,
  minimumIOS: '15.5',
  source: 'https://github.com/LemonPepperSeasoning/Hasher',
};

export const appStoreURL = () => (site.appStoreId ? `https://apps.apple.com/app/id${site.appStoreId}` : '');
