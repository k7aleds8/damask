// Builds theme.css from the partials in src/ with the fonts embedded.
// --watch rebuilds on change, --deploy copies the theme into a vault whose
// path comes from DAMASCENE_VAULT or a one-line .vault-path file.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = new Set(process.argv.slice(2));
const watch = args.has('--watch');
const deploy = args.has('--deploy');

// order matters: settings must be the first comment, palettes before the
// foundation that reads them, callout base before the per-type overrides
const PARTS = [
  'settings.css',
  'palettes/dark-forest.css',
  'palettes/light-wheat.css',
  'palettes/dark-charcoal.css',
  'palettes/dark-umber.css',
  'palettes/dark-midnight.css',
  'palettes/light-paper.css',
  'palettes/light-daylight.css',
  'foundation.css',
  'typography.css',
  'headings.css',
  'dividers.css',
  'ornaments.css',
  'quotes.css',
  'callouts/base.css',
  'callouts/types.css',
  'callouts/foldable.css',
  'tables.css',
  'interface.css',
];

// the font ships inside theme.css because the theme store only accepts a
// single stylesheet; local() first so an installed copy is used when present
const FONT_FACES = [
  ['Light', 300], ['Regular', 400], ['Medium', 500], ['Bold', 700], ['Black', 900],
];

function fontCss() {
  return FONT_FACES.map(([style, weight]) => {
    const data = fs.readFileSync(path.join(root, 'fonts', `QomraArabic-${style}.otf`)).toString('base64');
    return `@font-face { font-family: 'itf Qomra Arabic'; font-style: normal; font-weight: ${weight}; font-display: swap;\n` +
      `  src: local('itf Qomra Arabic ${style}'), url(data:font/otf;base64,${data}) format('opentype'); }`;
  }).join('\n');
}

function build() {
  const { version } = JSON.parse(fs.readFileSync(path.join(root, 'manifest.json'), 'utf8'));
  const header = `/* Damascene ${version} — https://github.com/k7aleds8/damascene */\n\n`;
  const [settings, ...rest] = PARTS.map((p) => fs.readFileSync(path.join(root, 'src', p), 'utf8').trimEnd());
  fs.writeFileSync(path.join(root, 'theme.css'), header + [settings, fontCss(), ...rest].join('\n\n') + '\n');
  console.log('built theme.css');
  if (deploy) copyToVault();
}

function copyToVault() {
  const vault = process.env.DAMASCENE_VAULT
    ?? (fs.existsSync(path.join(root, '.vault-path')) ? fs.readFileSync(path.join(root, '.vault-path'), 'utf8').trim() : null);
  if (!vault) {
    console.warn('deploy skipped: set DAMASCENE_VAULT or create .vault-path');
    return;
  }
  const target = path.join(vault, '.obsidian', 'themes', 'Damascene');
  fs.mkdirSync(target, { recursive: true });
  for (const f of ['theme.css', 'manifest.json']) fs.copyFileSync(path.join(root, f), path.join(target, f));
  console.log(`deployed to ${vault}`);
}

build();
if (watch) {
  fs.watch(path.join(root, 'src'), { recursive: true }, () => { try { build(); } catch (e) { console.error(e.message); } });
  console.log('watching…');
}
