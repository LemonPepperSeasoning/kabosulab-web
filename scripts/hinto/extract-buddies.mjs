// Extracts the study buddies' SVG from the design kit (ui-design/_kit/characters.js) into src/apps/hinto/assets/buddies/.
// Usage: node scripts/extract-buddies.mjs <path to characters.js>
import { readFileSync, writeFileSync } from 'node:fs';
import vm from 'node:vm';

const src = readFileSync(process.argv[2], 'utf8');
const sandbox = { window: {}, document: { querySelectorAll: () => [] } };
vm.runInNewContext(src, sandbox);
const { CHARS } = sandbox.window.HintoChars;
const map = { kotaro: 'shiba', pochi: 'pochi', kai: 'kawauso' };
for (const [name, key] of Object.entries(map)) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"><g class="m-all">${CHARS[key].body()}</g></svg>\n`;
  writeFileSync(new URL(`../../src/apps/hinto/assets/buddies/${name}.svg`, import.meta.url), svg.replace(/\s+\n\s*/g, '\n'));
  console.log(name, svg.length, 'bytes');
}
