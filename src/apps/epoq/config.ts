// One place for what changes at release.
export const site = {
  /** The Home Screen name. The App Store name is "Epoq: Unix Time Clock" (the notes repo's epoq/app-store-listing.md). */
  name: 'Epoq',
  publisher: 'Kabosu Lab',
  email: 'lemonpepperstudioco@gmail.com',
  /** 'soon' before launch (a plain text pill, never an imitation badge); 'live' uses Apple's badge. */
  install: 'soon' as 'soon' | 'live',
  /** The App Store id. Turns on the Smart App Banner and the badge link. */
  appStoreId: '' as string,
  minimumIOS: '18.2',
};

export const appStoreURL = () => (site.appStoreId ? `https://apps.apple.com/app/id${site.appStoreId}` : '');
