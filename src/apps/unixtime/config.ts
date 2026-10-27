// One place for what changes at release.
export const site = {
  /** The Home Screen name. The App Store name is still open (see the notes repo's unixtime/app-store-listing.md). */
  name: 'Unixtime',
  publisher: 'Kabosu Lab',
  email: 'lemonpepperstudioco@gmail.com',
  /** 'soon' before launch (a plain text pill, never an imitation badge); 'live' uses Apple's badge. */
  install: 'soon' as 'soon' | 'live',
  /** The App Store id. Turns on the Smart App Banner and the badge link. */
  appStoreId: '' as string,
  minimumIOS: '18.2',
};

export const appStoreURL = () => (site.appStoreId ? `https://apps.apple.com/app/id${site.appStoreId}` : '');
