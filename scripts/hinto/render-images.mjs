// Renders Hinto's share images with headless Chrome from small HTML templates:
//   public/hinto/og/og-en.png and og-ja.png (1200×630). Rerun after changing the copy or the buddy art:
//   node scripts/hinto/render-images.mjs
// The icons (public/hinto/app-icon.png, apple-touch-icon.png) are the app's own AppIcon, resized; Hinto-web's
// Kotaro placeholder icons and favicon aren't rendered any more.
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const root = new URL('../..', import.meta.url).pathname;
const kotaro = readFileSync(join(root, 'src/apps/hinto/assets/buddies/kotaro.svg'), 'utf8');
const tmp = mkdtempSync(join(tmpdir(), 'hinto-img-'));

function render(name, html, width, height, out) {
  const file = join(tmp, `${name}.html`);
  writeFileSync(file, html);
  execFileSync(chrome, ['--headless=new', '--hide-scrollbars', '--force-device-scale-factor=1', '--virtual-time-budget=4000',
    `--window-size=${width},${height}`, `--screenshot=${join(root, out)}`, `file://${file}`], { stdio: 'ignore' });
  console.log(out);
}

const font = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@700;800&display=block">';
const og = (title, sub, label, meaning) => `<!doctype html><html><head><meta charset="utf-8">${font}<style>
  html,body{margin:0;width:1200px;height:630px;overflow:hidden}
  body{font-family:'M PLUS Rounded 1c',sans-serif;color:#1F2A2E;
       background:radial-gradient(ellipse 70% 70% at 50% 30%,#F6F3EE 0%,#ECE8E1 100%);position:relative}
  .brand{position:absolute;left:64px;top:56px;font-size:34px;font-weight:800}
  h1{position:absolute;left:64px;top:170px;width:600px;margin:0;font-size:68px;line-height:1.2;font-weight:800}
  .sub{position:absolute;left:64px;top:430px;font-size:32px;font-weight:700;color:#0B5D57}
  .stack{position:absolute;left:760px;top:150px;width:330px;height:410px;transform:rotate(-4deg)}
  .c{position:absolute;inset:0;border-radius:22px;background:#FFFDF9;border:1px solid rgba(0,0,0,.06)}
  .c1{transform:translate(-10px,16px) rotate(-6deg)} .c2{transform:translate(10px,10px) rotate(4deg)}
  .face{box-shadow:0 18px 40px rgba(31,42,46,.3);padding:28px;box-sizing:border-box;text-align:center}
  .lab{text-align:left;font-size:18px;font-weight:800;color:#0B5D57}
  .r{margin-top:70px;font-size:30px;color:#0B5D57;font-weight:700}
  .t{font-size:84px;font-weight:800;line-height:1.15}
  .m{font-size:24px;color:#5B6266;font-weight:700}
  .buddy{position:absolute;left:1000px;top:40px;width:170px;height:170px}
  .buddy .m-eyes-happy,.buddy .m-mouth-happy{display:inline}.buddy .m-eyes,.buddy .m-mouth,.buddy .m-mouth-sad,.buddy .m-eyes-sleep,.buddy .m-tear,.buddy .m-zz{display:none}
</style></head><body>
  <div class="brand">Hinto</div><h1>${title}</h1><div class="sub">${sub}</div>
  <div class="stack"><div class="c c1"></div><div class="c c2"></div><div class="c face"><div class="lab">${label}</div>
    <div class="r">おぼえる</div><div class="t">覚える</div><div class="m">${meaning}</div></div></div>
  <div class="buddy">${kotaro}</div></body></html>`;

render('og-en', og('Photograph a page, get flashcards.', 'Flashcards for iPhone · Free', 'N3 · VERB', 'to memorise'), 1200, 630, 'public/hinto/og/og-en.png');
render('og-ja', og('ページを撮れば、<br>暗記カードに。', '撮るだけで作れる単語帳アプリ・無料', 'N3・動詞', '記憶する'), 1200, 630, 'public/hinto/og/og-ja.png');
