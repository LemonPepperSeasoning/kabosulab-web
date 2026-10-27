// One place for what changes at launch.
export const site = {
  name: 'Hinto',
  publisher: 'Kabosu Lab',
  email: 'lemonpepperstudioco@gmail.com',
  /** 'soon' before launch (a plain text pill, never an imitation badge); 'preorder' or 'live' use Apple's badge. */
  install: 'soon' as 'soon' | 'preorder' | 'live',
  /** The App Store id, once the app has one (e.g. '1234567890'). Turns on the Smart App Banner and the badge link. */
  appStoreId: '' as string,
  minimumIOS: '17',
};

export const appStoreURL = () => (site.appStoreId ? `https://apps.apple.com/app/id${site.appStoreId}` : '');
