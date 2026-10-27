// Renders the site's bitmaps with headless Chrome from small HTML templates:
//   public/hinto/og/og-en.png, og-ja.png (1200×630 share images), public/hinto/app-icon.png (64), apple-touch-icon.png (180)
// and writes public/hinto/favicon.svg and favicon.ico (the app icon, Fuda on yellow).
// Rerun after changing the copy, the icon or the buddy art: node scripts/hinto/render-images.mjs
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const root = new URL('../..', import.meta.url).pathname;
const kotaro = readFileSync(join(root, 'src/apps/hinto/assets/buddies/kotaro.svg'), 'utf8');
// The app icon (light), from the design repo's ui-design/icon/hinto-icon-light.svg.
const appIcon = readFileSync(join(root, 'src/apps/hinto/assets/icon/hinto-icon.svg'), 'utf8').replace(/<!--[\s\S]*?-->/g, '');
const tmp = mkdtempSync(join(tmpdir(), 'hinto-img-'));

function render(name, html, width, height, out) {
  const file = join(tmp, `${name}.html`);
  writeFileSync(file, html);
  execFileSync(chrome, ['--headless=new', '--hide-scrollbars', '--force-device-scale-factor=1', '--virtual-time-budget=4000',
    `--window-size=${width},${height}`, `--screenshot=${out.startsWith('/') ? out : join(root, out)}`, `file://${file}`], { stdio: 'ignore' });
  console.log(out);
}

const font = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700;800&display=block">';
const og = (title, sub, card) => `<!doctype html><html><head><meta charset="utf-8">${font}<style>
  html,body{margin:0;width:1200px;height:630px;overflow:hidden}
  body{font-family:'M PLUS Rounded 1c',sans-serif;color:#1E1B2E;
       background:radial-gradient(ellipse 70% 70% at 50% 30%,#F6F3EE 0%,#ECE8E1 100%);position:relative}
  .brand{position:absolute;left:64px;top:52px;display:flex;align-items:center;gap:18px;font-size:34px;font-weight:800}
  .brand svg{width:64px;height:64px;border-radius:15px}
  h1{position:absolute;left:64px;top:170px;width:600px;margin:0;font-size:68px;line-height:1.2;font-weight:800}
  .sub{position:absolute;left:64px;top:430px;font-size:32px;font-weight:700;color:#2D46D6}
  .stack{position:absolute;left:760px;top:150px;width:330px;height:410px;transform:rotate(-4deg)}
  .c{position:absolute;inset:0;border-radius:22px;background:#FFFDF9;border:1px solid rgba(0,0,0,.06)}
  .c1{transform:translate(-10px,16px) rotate(-6deg)} .c2{transform:translate(10px,10px) rotate(4deg)}
  .face{box-shadow:0 18px 40px rgba(30,27,46,.3);padding:28px;box-sizing:border-box;text-align:center}
  .lab{text-align:left;font-size:18px;font-weight:800;color:#2D46D6}
  .r{margin-top:70px;font-size:30px;color:#2D46D6;font-weight:700;min-height:44px}
  .t{font-size:84px;font-weight:800;line-height:1.15}
  .t.latin{font-size:60px;line-height:1.6}
  .m{font-size:24px;color:#5B6266;font-weight:700}
  .buddy{position:absolute;left:1000px;top:40px;width:170px;height:170px}
  .buddy .m-eyes-happy,.buddy .m-mouth-happy{display:inline}.buddy .m-eyes,.buddy .m-mouth,.buddy .m-mouth-sad,.buddy .m-eyes-sleep,.buddy .m-tear,.buddy .m-zz{display:none}
</style></head><body>
  <div class="brand">${appIcon}Hinto</div><h1>${title}</h1><div class="sub">${sub}</div>
  <div class="stack"><div class="c c1"></div><div class="c c2"></div><div class="c face"><div class="lab">${card.label}</div>
    <div class="r">${card.reading}</div><div class="t${/^[\x00-\x7F]+$/.test(card.term) ? ' latin' : ''}">${card.term}</div><div class="m">${card.meaning}</div></div></div>
  <div class="buddy">${kotaro}</div></body></html>`;

// One card per audience: en learns Japanese, ja learns English (app-store-listing.md).
render('og-en', og('Photograph a page, get flashcards.', 'Flashcards for iPhone · Free', { label: 'VERB', reading: 'おぼえる', term: '覚える', meaning: 'to memorise' }), 1200, 630, 'public/hinto/og/og-en.png');
render('og-ja', og('ページを撮れば、<br>単語カードに。', '撮るだけで作れる単語帳アプリ・無料', { label: '英単語・動詞', reading: '', term: 'memorize', meaning: '覚える' }), 1200, 630, 'public/hinto/og/og-ja.png');

const icon = (size) => `<!doctype html><html><head><style>html,body{margin:0;width:${size}px;height:${size}px;overflow:hidden}
  svg{width:${size}px;height:${size}px;display:block}</style></head><body>${appIcon}</body></html>`;
render('icon-64', icon(64), 64, 64, 'public/hinto/app-icon.png');
render('icon-180', icon(180), 180, 180, 'public/hinto/apple-touch-icon.png');

// favicon.ico: one 32×32 PNG in an ICO container, for browsers and crawlers that ask for /favicon.ico.
const icoPng = join(tmp, 'icon-32.png');
render('icon-32', icon(32), 32, 32, icoPng);
const png = readFileSync(icoPng);
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);              // an icon, one image
header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14); header.writeUInt32LE(22, 18);
writeFileSync(join(root, 'public/hinto/favicon.ico'), Buffer.concat([header, png]));
console.log('public/hinto/favicon.ico');

// The favicon: the app icon with rounded corners, as plain SVG.
const fav = appIcon
  .replace(/(<svg[^>]*>)/, '$1<clipPath id="r"><rect width="1024" height="1024" rx="230"/></clipPath><g clip-path="url(#r)">')
  .replace(/<\/svg>\s*$/, '</g></svg>\n');
writeFileSync(join(root, 'public/hinto/favicon.svg'), fav);
console.log('public/hinto/favicon.svg');
