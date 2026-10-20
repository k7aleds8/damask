// Builds demo-vault/: neutral sample notes used for the README screenshots,
// so no one's personal vault ends up on GitHub. Safe to run again; it only
// rewrites the files it owns.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const vault = path.join(root, 'demo-vault');
const today = new Date(process.env.DEMO_TODAY ?? Date.now());
const day = (offset) => {
  const d = new Date(today);
  d.setDate(d.getDate() + offset);
  return d.toISOString().slice(0, 10);
};

function write(rel, text) {
  const file = path.join(vault, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, text.replace(/^\n/, ''));
}
const json = (rel, obj) => write(rel, JSON.stringify(obj, null, 2) + '\n');

/* ---------------------------------------------------------------- notes */

write('Home.md', `
\`\`\`damascene-home
\`\`\`
`);

write('Notes/The Damascus Rose.md', `
---
tags: [damascus, gardens, essay]
created: ${day(-12)}
---
# The Damascus Rose

The rose that perfumers still call *Rosa × damascena* travelled west along the caravan roads. In the courtyards of the old city it grows beside jasmine and bitter orange, and every spring the water of the Barada carries its scent through the lanes.

> [!quote|side]
> A garden is a grand teacher. It teaches patience and careful watchfulness; it teaches industry and thrift; above all it teaches entire trust.
>
> — Gertrude Jekyll

## Where it grows

The rose needs dry summers, cold winters and patient hands. Harvest begins before dawn, when the petals hold the most oil, and ends before the sun is high.

> [!definition] Attar
> The essential oil distilled from rose petals. Roughly four tonnes of petals give a single kilogram.

### The harvest, step by step

> [!steps]
> 1. Pick the half-open buds before sunrise
> 2. Carry them to the still within the hour
> 3. Distil slowly over a low flame
> 4. Let the oil rise and separate for forty days

<div class="dm-divider">The courtyard</div>

![[courtyard.svg]]

## A season in numbers

| Month | Work in the garden | Hours of light |
|---|---|---|
| March | Pruning and feeding | 12 |
| May | Harvest | 14 |
| August | Rest and watering | 13 |
| November | Planting new stock | 10 |

> [!wisdom]
> Whoever plants a garden believes in tomorrow.

> [!key]
> Roses picked after ten in the morning lose almost half their scent.

- [x] Order bare-root stock ✅ ${day(-9)}
- [ ] Map the courtyard beds 📅 ${day(1)}
- [ ] Visit the distillery in spring 📅 ${day(12)}
`);

write('Notes/دمشق مدينة الياسمين.md', `
---
tags: [دمشق, مدن]
created: ${day(-6)}
---
# دمشق، مدينة الياسمين

في البيوت الدمشقية القديمة يدور كل شيء حول الصحن: بركة في الوسط، وشجرة نارنج، وياسمينة تتسلّق الجدار حتى الطابق الثاني. من الخارج جدار صامت، ومن الداخل حديقة كاملة.

> [!poem] أحمد شوقي
> - سلامٌ من صَبا بَرَدى أرقُّ
> - ودمعٌ لا يُكفكَفُ يا دمشقُ
> - ومعذرةَ اليراعةِ والقوافي
> - جلالُ الرُّزءِ عن وصفٍ يدِقُّ

## عمارة البيت

يُبنى البيت حول ثلاثة فضاءات: **الصحن** المكشوف، و**الإيوان** المفتوح على الصحن من جهة واحدة، و**القاعة** التي تُستقبل فيها الضيوف شتاءً.

> [!definition] العجمي
> زخرفة خشبية ملوّنة بارزة تغطّي أسقف القاعات وجدرانها، تُرسم بالجص والأصباغ ثم تُذهَّب.

### ألوان المدينة

> [!box|forest]
> أخضر الغوطة، وذهب القمح، وفحم الحجر البازلتي، وعنّاب الخشب القديم: من هذه الأربعة خرجت ألوان هذا الثيم.

> [!quote]
> من لم يرَ دمشق لم يرَ الدنيا.
>
> — قول مأثور

---

> [!lined] مذكرة
> الياسمين يزهر من أيار حتى تشرين، وأجمل ساعاته بعد المغرب.
`);

write('Projects/Restoring a Damascene room.md', `
---
type: project
status: active
---
# Restoring a Damascene room

> [!box|outline] Brief
> Bring an 18th-century reception room back to its original colours without repainting what can be cleaned.

## Tasks

- [x] Survey the ceiling panels ✅ ${day(-8)}
- [x] Photograph every wall at the same light ✅ ${day(-5)}
- [x] Test cleaning on one corner ✅ ${day(-2)}
- [ ] Order gold leaf samples 📅 ${day(0)} ⏫
- [ ] Draw the panel map 📅 ${day(0)}
- [ ] Meet the woodworker 📅 ${day(2)}
- [ ] Write the conservation report 📅 ${day(6)}
`);

write('Projects/Garden journal.md', `
---
type: project
status: active
---
# Garden journal

- [x] Prune the jasmine ✅ ${day(-3)}
- [x] Clean the fountain basin ✅ ${day(-1)}
- [ ] Repot the bitter orange 📅 ${day(0)}
- [ ] Buy rose fertiliser 📅 ${day(3)}
`);

const books = [
  ['The Muqaddimah', 'reading'], ['Invisible Cities', 'reading'], ['The Name of the Rose', 'done'],
  ['Leo Africanus', 'done'], ['The Thousand and One Nights', 'to read'], ['Damascus: A History', 'to read'], ['The Arabian Nightmare', 'done'],
];
for (const [title, status] of books) write(`Library/Books/${title}.md`, `---\ntype: book\nstatus: ${status}\n---\n# ${title}\n`);
for (const [title, p] of [['Islamic geometric patterns', 0.62], ['Thuluth calligraphy', 0.35]]) {
  write(`Library/Courses/${title}.md`, `---\ntype: course\nstatus: in progress\nprogress: ${p}\n---\n# ${title}\n`);
}

const quotes = [
  ['Gibran', 'Work is love made visible.', 'Kahlil Gibran'],
  ['Ibn Khaldun', 'Habit is a second nature.', 'Ibn Khaldun'],
  ['Seneca', 'While we wait for life, life passes.', 'Seneca'],
  ['Aurelius', 'The happiness of your life depends upon the quality of your thoughts.', 'Marcus Aurelius'],
];
for (const [file, text, who] of quotes) write(`Library/Quotes/${file}.md`, `> ${text}\n>\n> — ${who}\n`);

write('Inbox/Ideas for the spice market walk.md', '# Ideas for the spice market walk\n\nStart at Bab Sharqi, end at the Umayyad Mosque.\n');
write('Inbox/Notes from the calligraphy class.md', '# Notes from the calligraphy class\n\nKeep the reed at forty-five degrees.\n');

// two weeks of daily notes with habits in properties, so the dashboard has something to show
const rnd = (seed) => { let x = seed; return () => (x = (x * 9301 + 49297) % 233280) / 233280; };
const r = rnd(7);
for (let i = -16; i <= 0; i++) {
  const d = day(i);
  const done = i < 0 ? `- [x] Morning pages ✅ ${d}\n- [x] Reply to letters ✅ ${d}\n` : '';
  write(`Journal/Daily/${d}.md`, `---
reading_pages: ${5 * Math.round(2 + r() * 6)}
exercise_min: ${10 * Math.round(r() * 5)}
sleep_hours: ${(6 + Math.round(r() * 4) / 2).toFixed(1)}
screen_min: ${15 * Math.round(2 + r() * 6)}
journaled: ${r() > 0.25}
---
# ${d}

${done}- ${i === 0 ? '[ ]' : '[x]'} Water the courtyard plants${i === 0 ? ` 📅 ${d}` : ` ✅ ${d}`}
`);
}

/* ---------------------------------------------------------------- assets */

// a courtyard elevation drawn in the theme's colours; stands in for a photo
write('Assets/courtyard.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 420" width="960" height="420">
<defs><linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9dfc6"/><stop offset="1" stop-color="#d9c99f"/></linearGradient>
<pattern id="ablaq" width="40" height="36" patternUnits="userSpaceOnUse"><rect width="40" height="22" fill="#efe6d0"/><rect y="22" width="40" height="14" fill="#c9b78f"/></pattern></defs>
<rect width="960" height="420" fill="url(#sky)"/>
<rect x="60" y="70" width="840" height="300" fill="url(#ablaq)" opacity=".9"/>
<g fill="#0f3b35">
<path d="M150 370V215a90 90 0 0 1 180 0v155z"/><path d="M390 370V185a90 110 0 0 1 180 0v185z"/><path d="M630 370V215a90 90 0 0 1 180 0v155z"/></g>
<g fill="none" stroke="#b9a779" stroke-width="6"><path d="M150 370V215a90 90 0 0 1 180 0v155"/><path d="M390 370V185a90 110 0 0 1 180 0v185"/><path d="M630 370V215a90 90 0 0 1 180 0v155"/></g>
<g transform="translate(480 140)" fill="#b9a779"><polygon points="0,-34 10,-10 34,0 10,10 0,34 -10,10 -34,0 -10,-10"/><polygon points="-24,-24 0,-14 24,-24 14,0 24,24 0,14 -24,24 -14,0" opacity=".7"/></g>
<rect x="0" y="370" width="960" height="50" fill="#5a4a3a"/>
<ellipse cx="480" cy="372" rx="170" ry="16" fill="#7ea69c"/><ellipse cx="480" cy="368" rx="150" ry="11" fill="#a9cbc2"/>
<path d="M480 368c-6-40 6-70 0-96M480 272c-18 6-30 18-36 34M480 272c18 6 30 18 36 34" stroke="#e9f2ef" stroke-width="4" fill="none" stroke-linecap="round"/>
<g fill="#2f5d3a"><circle cx="95" cy="330" r="38"/><circle cx="865" cy="330" r="38"/></g>
<g fill="#e2b33d"><circle cx="85" cy="320" r="6"/><circle cx="105" cy="338" r="6"/><circle cx="858" cy="318" r="6"/><circle cx="878" cy="340" r="6"/></g>
</svg>
`);

/* ---------------------------------------------------------------- config */

json('.obsidian/appearance.json', { cssTheme: 'Damascene', theme: 'obsidian', baseFontSize: 16 });
json('.obsidian/app.json', { readableLineLength: true, showInlineTitle: false, attachmentFolderPath: 'Assets', alwaysUpdateLinks: true });
json('.obsidian/community-plugins.json', ['damascene-studio']);
json('.obsidian/daily-notes.json', { folder: 'Journal/Daily', format: 'YYYY-MM-DD' });
json('.obsidian/core-plugins.json', { 'file-explorer': true, 'global-search': true, switcher: true, 'daily-notes': true, 'page-preview': true, outline: true, bookmarks: true, 'word-count': true });

const habits = [
  { key: 'reading_pages', name: 'Reading', icon: 'book-open', unit: 'pages', goal: 20, step: 5, max: 120, better: 'more' },
  { key: 'exercise_min', name: 'Exercise', icon: 'dumbbell', unit: 'min', goal: 30, step: 10, max: 180, better: 'more' },
  { key: 'sleep_hours', name: 'Sleep', icon: 'bed', unit: 'h', goal: 7, step: 0.5, max: 12, better: 'more' },
  { key: 'screen_min', name: 'Screen time', icon: 'smartphone', unit: 'min', goal: 60, step: 15, max: 480, better: 'less' },
  { key: 'journaled', name: 'Journal', icon: 'notebook-pen', bool: true },
];
const log = [];
for (let i = -16; i <= 0; i++) {
  const n = i === 0 ? 2 : 1 + Math.round(r() * 4);
  for (let k = 0; k < n; k++) {
    const start = new Date(day(i) + 'T08:00:00').getTime() + k * 3600e3;
    log.push({ id: `demo-${i}-${k}`, kind: 'pomo', start, end: start + 25 * 60e3, duration: 25 * 60, pause: 0, task: k % 2 ? 'Panel map' : 'Reading' });
  }
}
json('.obsidian/plugins/damascene-studio/data.json', {
  firstRunDone: true,
  language: 'en',
  paths: { home: 'Home.md', dailyFolder: 'Journal/Daily', dailyFormat: 'YYYY-MM-DD', quotes: 'Library/Quotes', inbox: 'Inbox', templates: '', questions: '', excalidrawFont: '', excluded: [] },
  home: { readingMode: true, openOnStartup: false, hijri: false },
  habits,
  pomodoro: { work: 25, short: 5, long: 15, longEvery: 4, dailyGoal: 6, autoBreak: false, autoWork: false, sound: false, log },
});

console.log('demo vault written to', vault);
