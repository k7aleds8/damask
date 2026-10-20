// Turns the raw captures in docs/mockups/shots into the README images:
// each scene is an HTML page (devices drawn in CSS) screenshotted by
// headless Chrome. Run `node scripts/render-mockups.mjs [scene…]`.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const shots = path.join(root, 'docs', 'mockups', 'shots');
const build = path.join(root, 'docs', 'mockups', 'build');
const out = path.join(root, 'docs', 'screenshots');
const CHROME = process.env.CHROME ?? [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find((p) => fs.existsSync(p));

const shot = (name) => pathToFileURL(path.join(shots, name + '.png')).href;
const font = (w) => pathToFileURL(path.join(root, 'fonts', `QomraArabic-${w}.otf`)).href;

/* ------------------------------------------------------------ ornaments */

const khatam = (fill) => `<svg viewBox="0 0 100 100"><g fill="${fill}"><rect x="21" y="21" width="58" height="58"/><rect x="21" y="21" width="58" height="58" transform="rotate(45 50 50)"/></g><g fill="none" stroke="rgba(0,0,0,.38)" stroke-width="3"><rect x="35" y="35" width="30" height="30"/><rect x="35" y="35" width="30" height="30" transform="rotate(45 50 50)"/></g></svg>`;
// a girih-style lattice of eight-point stars, tiled as a faint background
const girih = (stroke) => 'data:image/svg+xml;utf8,' + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120" fill="none" stroke="${stroke}" stroke-width="1.1"><g transform="translate(60 60)"><rect x="-22" y="-22" width="44" height="44"/><rect x="-22" y="-22" width="44" height="44" transform="rotate(45)"/><circle r="9"/></g><path d="M0 60h29M91 60h29M60 0v29M60 91v29M0 0l38 38M120 0L82 38M0 120l38-38M120 120L82 82"/><g><rect x="-11" y="-11" width="22" height="22" transform="rotate(45)"/><rect x="109" y="-11" width="22" height="22" transform="rotate(45 120 0)"/><rect x="-11" y="109" width="22" height="22" transform="rotate(45 0 120)"/><rect x="109" y="109" width="22" height="22" transform="rotate(45 120 120)"/></g></svg>`);

const SIGNAL = '<svg viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>';
const WIFI = '<svg viewBox="0 0 16 12"><path d="M8 11.6 5.6 9.2a3.4 3.4 0 0 1 4.8 0z"/><path d="M3.4 7A6.6 6.6 0 0 1 12.6 7l-1.5 1.5a4.5 4.5 0 0 0-6.2 0z"/><path d="M1.1 4.7a9.8 9.8 0 0 1 13.8 0L13.4 6.2a7.7 7.7 0 0 0-10.8 0z"/></svg>';
const BATTERY = '<svg viewBox="0 0 27 12"><rect x=".6" y=".6" width="22.8" height="10.8" rx="3.2" fill="none" stroke="currentColor" stroke-opacity=".4" stroke-width="1.2"/><rect x="2.4" y="2.4" width="16.6" height="7.2" rx="1.8"/><path d="M25 4v4a2.2 2.2 0 0 0 0-4z" opacity=".45"/></svg>';

/* ------------------------------------------------------------ devices */

const laptop = (src, w, style, pos = 'top') => `
<div class="laptop" style="--w:${w}px;${style}">
  <div class="lid"><span class="cam"></span><div class="glass"><img src="${shot(src)}" style="object-position:${pos}"></div></div>
  <div class="hinge"></div>
  <div class="base"><span class="notch"></span></div>
  <div class="floor"></div>
</div>`;

const phone = (src, w, style, light = false, time = '12:41') => `
<div class="phone reflect" style="--w:${w}px;${style}">
  <i class="pbtn p-act"></i><i class="pbtn p-up"></i><i class="pbtn p-down"></i><i class="pbtn p-side"></i>
  <div class="pframe"><div class="pscreen">
    <img src="${shot(src)}">
    <div class="status${light ? ' is-light' : ''}"><span class="clock">${time}</span><span class="sicons">${SIGNAL}${WIFI}${BATTERY}</span></div>
    <div class="island"></div>
  </div></div>
</div>`;

const tablet = (src, w, style, light = false) => `
<div class="tablet reflect" style="--w:${w}px;${style}">
  <i class="tbtn"></i>
  <div class="tframe"><span class="tcam"></span><div class="tscreen">
    <img src="${shot(src)}">
    <div class="tstatus${light ? ' is-light' : ''}"><span>12:41  Tue 20 Oct</span><span class="sicons">${WIFI}<b>100%</b>${BATTERY}</span></div>
  </div></div>
</div>`;

/** A desktop window floating on the canvas; the capture already has Obsidian's title bar. */
const win = (src, w, style, offset = 0, h = null) => `
<div class="win" style="width:${w}px;${h ? `height:${h}px;` : ''}${style}"><img src="${shot(src)}" style="margin-top:${-offset}px"></div>`;

const heading = (eyebrow, title, lede, style = '', align = 'left') => `
<div class="head" style="text-align:${align};${style}">
  ${eyebrow ? `<div class="eyebrow">${eyebrow}</div>` : ''}
  <div class="title">${title}</div>
  ${lede ? `<div class="lede">${lede}</div>` : ''}
</div>`;

const CSS = `
@font-face { font-family: Qomra; font-weight: 300; src: url(${font('Light')}); }
@font-face { font-family: Qomra; font-weight: 400; src: url(${font('Regular')}); }
@font-face { font-family: Qomra; font-weight: 500; src: url(${font('Medium')}); }
@font-face { font-family: Qomra; font-weight: 700; src: url(${font('Bold')}); }
@font-face { font-family: Qomra; font-weight: 900; src: url(${font('Black')}); }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { background: transparent; overflow: hidden; }
body { font-family: Qomra, 'Segoe UI', sans-serif; -webkit-font-smoothing: antialiased; }
.canvas { position: relative; overflow: hidden; border-radius: 36px; color: #edebe0; }
.canvas > * { position: absolute; }
.bg-forest { background: radial-gradient(1300px 640px at 52% 112%, rgba(185,167,121,.22), transparent 62%), radial-gradient(900px 560px at 8% -12%, rgba(126,166,156,.20), transparent 62%), linear-gradient(160deg, #04362f 0%, #001d1a 52%, #000d0c 100%); }
.bg-umber { background: radial-gradient(1200px 600px at 70% 115%, rgba(185,167,121,.18), transparent 62%), radial-gradient(800px 520px at 0% -10%, rgba(179,143,142,.20), transparent 60%), linear-gradient(160deg, #40161f 0%, #1f0b10 55%, #0d0406 100%); }
.bg-charcoal { background: radial-gradient(1300px 640px at 50% 115%, rgba(185,167,121,.16), transparent 62%), radial-gradient(900px 560px at 100% -10%, rgba(126,166,156,.12), transparent 60%), linear-gradient(160deg, #262624 0%, #141413 55%, #070707 100%); }
.bg-wheat { color: #1d1a14; background: radial-gradient(1200px 620px at 50% 115%, rgba(5,66,57,.12), transparent 62%), linear-gradient(160deg, #f6f2e6 0%, #e9e2cf 60%, #ddd3bb 100%); }
.lattice { inset: 0; background-image: url("${girih('#b9a779')}"); background-size: 132px; opacity: .085; -webkit-mask-image: radial-gradient(ellipse 75% 70% at 50% 42%, #000 10%, transparent 78%); }
.bg-wheat .lattice { background-image: url("${girih('#054239')}"); opacity: .07; }
.glow { width: 1200px; height: 300px; left: 360px; bottom: -40px; background: radial-gradient(closest-side, rgba(185,167,121,.20), transparent); filter: blur(20px); }

.brand { display: flex; align-items: center; gap: 20px; }
.brand svg { width: 64px; height: 64px; filter: drop-shadow(0 6px 14px rgba(0,0,0,.45)); }
.brand .name { font-size: 64px; font-weight: 700; letter-spacing: -.5px; line-height: 1; }
.brand .tag { margin-top: 10px; font-size: 23px; font-weight: 400; color: #c9c3b0; }
.chip { display: flex; align-items: center; gap: 12px; padding: 12px 22px 12px 18px; border-radius: 999px; border: 1px solid rgba(185,167,121,.45); background: rgba(185,167,121,.08); font-size: 20px; color: #e4dcc6; }
.chip b { color: #b9a779; font-weight: 700; }
.head .eyebrow { font-size: 17px; letter-spacing: .28em; text-transform: uppercase; color: #b9a779; font-weight: 700; margin-bottom: 18px; }
.head .title { font-size: 66px; font-weight: 700; line-height: 1.08; letter-spacing: -.6px; }
.head .lede { margin-top: 22px; font-size: 25px; line-height: 1.55; color: #c8c2b0; font-weight: 400; }
.bg-wheat .head .lede { color: #5d5445; }
.bg-wheat .head .eyebrow { color: #054239; }
.rule { height: 2px; background: linear-gradient(90deg, transparent, rgba(185,167,121,.7), transparent); }

/* laptop: a thin-bezel ultrabook in platinum */
.laptop { width: var(--w); }
.lid { position: relative; background: linear-gradient(180deg, #1d1d1f, #08080a); border-radius: calc(var(--w) * .02) calc(var(--w) * .02) calc(var(--w) * .005) calc(var(--w) * .005); padding: calc(var(--w) * .013) calc(var(--w) * .013) calc(var(--w) * .019); box-shadow: 0 0 0 calc(var(--w) * .0017) #6c6e72, 0 0 0 calc(var(--w) * .0032) #2a2b2d, inset 0 1px 0 rgba(255,255,255,.12); }
.cam { position: absolute; top: calc(var(--w) * .0045); left: 50%; width: calc(var(--w) * .0048); height: calc(var(--w) * .0048); margin-left: calc(var(--w) * -.0024); border-radius: 50%; background: radial-gradient(circle at 35% 35%, #4a5a6c, #06080b 62%); box-shadow: 0 0 0 1px #1b1c1e; }
.glass { position: relative; aspect-ratio: 16 / 10; overflow: hidden; border-radius: calc(var(--w) * .004); background: #000; }
.glass img, .tscreen img, .pscreen img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top; }
.glass::after, .tscreen::after, .pscreen::after { content: ""; position: absolute; inset: 0; pointer-events: none; background: linear-gradient(116deg, rgba(255,255,255,.11) 0%, rgba(255,255,255,.035) 27%, rgba(255,255,255,0) 41%); }
.hinge { height: calc(var(--w) * .006); margin: 0 calc(var(--w) * .06); background: linear-gradient(#0e0e10, #3a3b3e); border-radius: 0 0 4px 4px; }
.base { position: relative; height: calc(var(--w) * .021); margin: 0 calc(var(--w) * -.072); border-radius: 0 0 calc(var(--w) * .045) calc(var(--w) * .045) / 0 0 calc(var(--w) * .016) calc(var(--w) * .016); background: linear-gradient(180deg, #f1f2f3 0%, #cdd0d3 26%, #a3a6aa 64%, #6b6e72 100%); box-shadow: inset 0 1px 0 #fff, inset 0 -2px 3px rgba(0,0,0,.25); }
.base::after { content: ""; position: absolute; left: 3%; right: 3%; bottom: -2px; height: 3px; border-radius: 50%; background: rgba(0,0,0,.55); filter: blur(1px); }
.notch { position: absolute; left: 50%; top: 0; width: 15%; height: 48%; transform: translateX(-50%); border-radius: 0 0 calc(var(--w) * .012) calc(var(--w) * .012); background: linear-gradient(180deg, #9ea1a5, #c9ccd0); box-shadow: inset 0 2px 3px rgba(0,0,0,.25); }
.floor { height: calc(var(--w) * .05); margin: calc(var(--w) * -.012) calc(var(--w) * -.02) 0; background: radial-gradient(closest-side, rgba(0,0,0,.7), transparent); filter: blur(6px); position: relative; z-index: -1; }

/* phone: titanium band, even bezel, island */
.phone { width: var(--w); }
.pframe { position: relative; padding: calc(var(--w) * .03); border-radius: calc(var(--w) * .165); background: #040404; box-shadow: 0 0 0 calc(var(--w) * .009) #b2b4b8, 0 0 0 calc(var(--w) * .013) #6e7074, 0 0 0 calc(var(--w) * .016) #2c2d30, inset 0 0 0 1px rgba(255,255,255,.07), 0 calc(var(--w) * .1) calc(var(--w) * .18) rgba(0,0,0,.55), 0 calc(var(--w) * .03) calc(var(--w) * .05) rgba(0,0,0,.4); }
.pscreen { position: relative; aspect-ratio: 390 / 844; overflow: hidden; border-radius: calc(var(--w) * .135); background: #000; }
.status { position: absolute; top: 0; left: 0; right: 0; height: calc(var(--w) * .125); display: flex; align-items: center; justify-content: space-between; padding: calc(var(--w) * .012) calc(var(--w) * .085) 0 calc(var(--w) * .115); color: #fff; font: 600 calc(var(--w) * .043)/1 -apple-system, 'Segoe UI Semibold', 'Segoe UI', sans-serif; letter-spacing: -.2px; }
.status.is-light, .tstatus.is-light { color: #111; }
.sicons { display: flex; align-items: center; gap: calc(var(--w) * .014); }
.sicons svg { height: calc(var(--w) * .03); width: auto; fill: currentColor; }
.sicons svg:last-child { height: calc(var(--w) * .032); }
.island { position: absolute; top: calc(var(--w) * .032); left: 50%; width: 31%; height: calc(var(--w) * .088); transform: translateX(-50%); border-radius: 999px; background: #000; box-shadow: inset 0 0 0 1px rgba(255,255,255,.04); }
.island::after { content: ""; position: absolute; right: 14%; top: 50%; width: calc(var(--w) * .03); height: calc(var(--w) * .03); transform: translateY(-50%); border-radius: 50%; background: radial-gradient(circle at 35% 35%, #283547, #05070a 65%); }
.pbtn { position: absolute; width: calc(var(--w) * .013); border-radius: 3px; background: linear-gradient(90deg, #5f6165, #c3c5c9 55%, #85878b); }
.p-act { left: calc(var(--w) * -.026); top: 17%; height: 4.2%; }
.p-up { left: calc(var(--w) * -.026); top: 24.5%; height: 7.6%; }
.p-down { left: calc(var(--w) * -.026); top: 33.5%; height: 7.6%; }
.p-side { right: calc(var(--w) * -.026); top: 27%; height: 11%; }

/* tablet: landscape, camera on the long edge */
.tablet { width: var(--w); }
.tframe { position: relative; padding: calc(var(--w) * .021); border-radius: calc(var(--w) * .045); background: #050505; box-shadow: 0 0 0 calc(var(--w) * .0045) #b6b8bc, 0 0 0 calc(var(--w) * .007) #6c6e72, 0 0 0 calc(var(--w) * .0085) #2c2d30, inset 0 0 0 1px rgba(255,255,255,.07), 0 calc(var(--w) * .07) calc(var(--w) * .12) rgba(0,0,0,.55), 0 calc(var(--w) * .02) calc(var(--w) * .035) rgba(0,0,0,.4); }
.tcam { position: absolute; top: calc(var(--w) * .008); left: 50%; width: calc(var(--w) * .007); height: calc(var(--w) * .007); margin-left: calc(var(--w) * -.0035); border-radius: 50%; background: radial-gradient(circle at 35% 35%, #33445a, #05070a 65%); }
.tscreen { position: relative; aspect-ratio: 1180 / 820; overflow: hidden; border-radius: calc(var(--w) * .026); background: #000; }
.tstatus { position: absolute; top: 0; left: 0; right: 0; height: calc(var(--w) * .024); display: flex; align-items: center; justify-content: space-between; padding: 0 calc(var(--w) * .03); color: #fff; font: 600 calc(var(--w) * .012)/1 -apple-system, 'Segoe UI Semibold', 'Segoe UI', sans-serif; }
.tstatus .sicons { gap: calc(var(--w) * .005); }
.tstatus .sicons svg { height: calc(var(--w) * .0095); }
.tstatus b { font-weight: 600; }
.tbtn { position: absolute; top: calc(var(--w) * -.009); right: 12%; width: 7%; height: calc(var(--w) * .006); border-radius: 3px 3px 0 0; background: linear-gradient(180deg, #c3c5c9, #6c6e72); }

/* a soft mirror under hand-held devices, as on a polished table */
.reflect { -webkit-box-reflect: below calc(var(--w) * .035) linear-gradient(transparent 84%, rgba(255,255,255,.10)); }

.win { overflow: hidden; border-radius: 14px; background: #000; box-shadow: 0 0 0 1px rgba(255,255,255,.14), 0 40px 90px rgba(0,0,0,.55), 0 12px 30px rgba(0,0,0,.4); }
.win img { display: block; width: 100%; }
.label { font-size: 18px; color: #c8c2b0; }

/* palette cards */
.pcard { width: 400px; }
.pcard .shot { height: 250px; overflow: hidden; border-radius: 12px; box-shadow: 0 0 0 1px rgba(255,255,255,.14), 0 24px 50px rgba(0,0,0,.5); }
.pcard .shot img { width: 168%; display: block; margin: -1.5% 0 0 -44%; }
.pcard .meta { display: flex; justify-content: space-between; align-items: flex-start; gap: 14px; margin-top: 20px; }
.pcard .n { font-size: 25px; font-weight: 700; }
.pcard .d { margin-top: 6px; font-size: 16.5px; line-height: 1.45; color: #bdb7a5; }
.dots { display: flex; gap: 6px; margin-top: 6px; }
.dots i { width: 20px; height: 20px; border-radius: 50%; box-shadow: 0 0 0 1.5px rgba(255,255,255,.25); }
.mode { font-size: 15px; letter-spacing: .26em; text-transform: uppercase; color: #b9a779; font-weight: 700; }

/* colour stories */
.swatch { width: 236px; height: 470px; border-radius: 22px; padding: 26px 24px; display: flex; flex-direction: column; justify-content: flex-end; box-shadow: 0 0 0 1px rgba(255,255,255,.12), 0 30px 60px rgba(0,0,0,.45); position: absolute; overflow: hidden; }
.swatch::before { content: ""; position: absolute; inset: 0; background-image: url("${girih('rgba(255,255,255,.9)')}"); background-size: 96px; opacity: .07; }
.swatch.dark-ink::before { background-image: url("${girih('rgba(0,0,0,.9)')}"); }
.swatch .sn { font-size: 26px; font-weight: 700; line-height: 1.15; position: relative; }
.swatch .sh { margin-top: 6px; font: 600 15px/1 ui-monospace, Consolas, monospace; opacity: .75; position: relative; letter-spacing: .04em; }
.swatch .sm { margin-top: 14px; font-size: 16.5px; line-height: 1.45; opacity: .9; position: relative; }
`;

/* ------------------------------------------------------------ scenes */

const VARIANTS = {
  forest: ['Forest night', 'Ghouta orchards after dusk, lit with wheat gold.', ['#002623', '#b9a779', '#7ea69c', '#a67b7c']],
  charcoal: ['Charcoal & wheat', 'Black basalt and gilded wood, for the darkest rooms.', ['#161616', '#b9a779', '#7ea69c', '#a67b7c']],
  umber: ['Umber night', 'Old walnut panelling and the Damask rose.', ['#260f14', '#b9a779', '#b38f8e', '#7ea69c']],
  midnight: ['Midnight', 'Charcoal under the sage of the Barada.', ['#161616', '#7ea69c', '#b9a779', '#a67b7c']],
  wheat: ['Wheat paper', 'Warm paper, forest ink and a touch of garnet.', ['#edebe0', '#054239', '#6b1f2a', '#6e6149']],
  paper: ['White paper', 'Clean white with garnet and forest headings.', ['#ffffff', '#6b1f2a', '#054239', '#6e6149']],
  daylight: ['Forest day', 'Pale green light through a courtyard’s leaves.', ['#f6f9f8', '#054239', '#6b1f2a', '#6e6149']],
};
const pcard = (id, style) => {
  const [name, desc, dots] = VARIANTS[id];
  return `<div class="pcard" style="${style}"><div class="shot"><img src="${shot('pal-' + id)}"></div>
  <div class="meta"><div><div class="n">${name}</div><div class="d">${desc}</div></div><div class="dots">${dots.map((c) => `<i style="background:${c}"></i>`).join('')}</div></div></div>`;
};

const COLOURS = [
  ['Wheat gold', '#b9a779', 'The wheat of the Hauran plain and the gold leaf of ʿajami ceilings.', '#1d1a10'],
  ['Ghouta green', '#002623', 'The orchards that ring the city, at the hour the lamps come on.', '#edebe0'],
  ['Barada sage', '#7ea69c', 'River water, and the patina on old copper basins.', '#0e221e'],
  ['Damask rose', '#a67b7c', 'The rose that carries the city’s name.', '#1e0d0e'],
  ['Walnut umber', '#260f14', 'Carved walnut and inlaid wood of Damascus rooms.', '#edebe0'],
  ['Basalt', '#161616', 'The black stone of ablaq walls, laid in alternating rows…', '#edebe0'],
  ['Limestone', '#edebe0', '…with the pale stone that answers it.', '#1d1a10'],
];

const SCENES = {
  hero: { w: 1920, h: 960, html: `
<div class="canvas bg-forest" style="width:1920px;height:960px">
  <div class="lattice"></div><div class="glow"></div>
  <div class="brand" style="left:110px;top:84px">${khatam('#b9a779')}<div><div class="name">Damask</div><div class="tag">An Obsidian theme drawn from the colours of old Damascus</div></div></div>
  <div class="chip" style="right:110px;top:98px"><span><b>Theme</b> &amp; <b>Studio</b> plugin for Obsidian</span></div>
  ${laptop('lap-forest', 1030, 'left:300px;top:226px')}
  ${phone('p1', 262, 'left:1318px;top:300px')}
</div>` },

  devices: { w: 1920, h: 1000, html: `
<div class="canvas bg-charcoal" style="width:1920px;height:1000px">
  <div class="lattice"></div><div class="glow"></div>
  ${heading('Desktop · Tablet · Phone', 'One theme. Every screen.', '', 'left:0;right:0;top:70px', 'center')}
  ${laptop('lap-forest', 920, 'left:500px;top:250px')}
  ${tablet('tab2', 640, 'left:120px;top:478px', true)}
  ${phone('p1', 232, 'left:1520px;top:420px')}
</div>` },

  // the companion plugin's page shows the dashboard on every device
  'devices-studio': { w: 1920, h: 1000, html: `
<div class="canvas bg-charcoal" style="width:1920px;height:1000px">
  <div class="lattice"></div><div class="glow"></div>
  ${heading('Damask Studio', 'Your vault, on every screen.', '', 'left:0;right:0;top:70px', 'center')}
  ${laptop('lap-home', 920, 'left:500px;top:250px')}
  ${tablet('tab1', 640, 'left:120px;top:478px', true)}
  ${phone('p2', 232, 'left:1520px;top:420px')}
</div>` },

  mobile: { w: 1920, h: 960, html: `
<div class="canvas bg-umber" style="width:1920px;height:960px">
  <div class="lattice" style="-webkit-mask-image:radial-gradient(ellipse 60% 70% at 72% 45%, #000 10%, transparent 78%)"></div>
  ${heading('Mobile', 'Made for the hand<br>that holds it.', 'The same palettes, ornaments and callouts on phones and tablets — with a reading layout tuned for small screens and right-to-left text.', 'left:120px;top:300px;width:600px')}
  ${phone('p3', 300, 'left:800px;top:168px', true)}
  ${phone('p2', 300, 'left:1170px;top:112px')}
  ${phone('p1', 300, 'left:1540px;top:168px')}
</div>` },

  palettes: { w: 1920, h: 1130, html: `
<div class="canvas bg-charcoal" style="width:1920px;height:1130px">
  <div class="lattice"></div>
  ${heading('Seven palettes', 'Four for the night, three for the day.', '', 'left:0;right:0;top:64px', 'center')}
  <div class="mode" style="left:106px;top:226px">Dark</div>
  ${['forest', 'charcoal', 'umber', 'midnight'].map((id, i) => pcard(id, `left:${106 + i * 436}px;top:262px`)).join('')}
  <div class="mode" style="left:324px;top:676px">Light</div>
  ${['wheat', 'paper', 'daylight'].map((id, i) => pcard(id, `left:${324 + i * 436}px;top:712px`)).join('')}
</div>` },

  colours: { w: 1920, h: 790, html: `
<div class="canvas bg-charcoal" style="width:1920px;height:790px">
  ${heading('The colours', 'Every colour comes from the city.', '', 'left:0;right:0;top:64px', 'center')}
  ${COLOURS.map(([n, hex, m, ink], i) => `<div class="swatch${ink.startsWith('#1') || ink.startsWith('#0') ? ' dark-ink' : ''}" style="left:${96 + i * 250}px;top:232px;background:${hex};color:${ink}"><div class="sn">${n}</div><div class="sh">${hex.toUpperCase()}</div><div class="sm">${m}</div></div>`).join('')}
</div>` },

  writing: { w: 1920, h: 1120, html: `
<div class="canvas bg-charcoal" style="width:1920px;height:1120px">
  <div class="lattice"></div><div class="glow"></div>
  ${heading('Writing surfaces', 'Callouts with a sense of place.', '', 'left:0;right:0;top:64px', 'center')}
  ${win('full-forest', 820, 'left:120px;top:236px', 0, 820)}
  ${win('full-wheat', 820, 'left:980px;top:236px', 1010, 820)}
</div>` },

  rtl: { w: 1920, h: 1000, html: `
<div class="canvas bg-umber" style="width:1920px;height:1000px">
  <div class="lattice"></div>
  ${heading('Arabic first', 'Right-to-left, written in — not flipped.', '', 'left:110px;top:70px;width:1700px')}
  ${win('lap-forest', 980, 'left:110px;top:290px')}
  ${win('lap-arabic', 980, 'left:830px;top:236px')}
</div>` },

  home: { w: 1920, h: 1160, html: `
<div class="canvas bg-charcoal" style="width:1920px;height:1160px">
  <div class="lattice"></div><div class="glow"></div>
  ${heading('Damask Studio', 'Your vault, at a glance.', '', 'left:0;right:0;top:56px', 'center')}
  ${win('lap-home', 1500, 'left:210px;top:210px')}
</div>` },

  // for the companion plugin's page
  studio: { w: 1920, h: 1160, html: `
<div class="canvas bg-forest" style="width:1920px;height:1160px">
  <div class="lattice"></div><div class="glow"></div>
  ${heading('Control panel', 'See an option before you change it.', '', 'left:0;right:0;top:56px', 'center')}
  ${win('lap-studio', 1500, 'left:210px;top:210px')}
</div>` },

};

// the theme store card: 512×288, cut from the hero composition
// the store wants 16:9, so the hero is laid out again on a taller canvas
SCENES.thumb = { w: 512, h: 288, scale: 512 / 1920, html: SCENES.hero.html.replace('height:960px', 'height:1080px').replace('top:226px', 'top:290px').replace('top:300px', 'top:370px') };

/* ------------------------------------------------------------ render */

function render(name) {
  const s = SCENES[name];
  fs.mkdirSync(build, { recursive: true });
  const zoom = s.scale ? `<style>body{zoom:${s.scale}} .canvas{border-radius:0}</style>` : '';
  const page = path.join(build, name + '.html');
  fs.writeFileSync(page, `<!doctype html><meta charset="utf-8"><style>${CSS}</style>${zoom}<body>${s.html}</body>`);
  const target = name === 'thumb' ? path.join(root, 'screenshot.png') : path.join(out, name + '.png');
  fs.mkdirSync(path.dirname(target), { recursive: true });
  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--allow-file-access-from-files', '--default-background-color=00000000', '--virtual-time-budget=4000',
    `--window-size=${s.w},${s.h}`, `--screenshot=${target}`, pathToFileURL(page).href,
  ], { stdio: 'pipe' });
  console.log('rendered', path.relative(root, target));
}

if (!CHROME) throw new Error('Chrome not found; set CHROME to its path');
const wanted = process.argv.slice(2);
for (const name of wanted.length ? wanted : Object.keys(SCENES)) render(name);
