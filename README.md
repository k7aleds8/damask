<div align="center">

<img src="docs/screenshots/hero.png" alt="Damascene on a laptop and a phone: an English note in Forest night and an Arabic note in Umber night" width="100%">

<br>

### Old Damascus, for the notes you keep.

An Obsidian theme drawn from the colours, stone and woodwork of old Damascus —<br>
calm enough for long writing, ornamented enough to feel like a place.

<br>

[![Version](https://img.shields.io/badge/version-2.0.1-b9a779?style=flat-square&labelColor=002623)](CHANGELOG.md)
[![Obsidian](https://img.shields.io/badge/Obsidian-1.5%2B-7ea69c?style=flat-square&labelColor=002623&logo=obsidian&logoColor=edebe0)](https://obsidian.md)
[![Modes](https://img.shields.io/badge/dark%20·%20light-7%20palettes-a67b7c?style=flat-square&labelColor=002623)](#palettes)
[![License](https://img.shields.io/badge/license-MIT-edebe0?style=flat-square&labelColor=002623)](LICENSE)

**[Overview](#overview) · [The colours](#the-colours) · [Palettes](#palettes) · [Writing](#writing-surfaces) · [Arabic](#arabic-first) · [Install](#install) · [Callouts](#callout-reference) · [FAQ](#faq)**

</div>

<br>

## Overview

**Calm.** Generous line height, a readable measure and warm, low-contrast colours keep the page quiet. Nothing on screen competes with what you are writing.

**Ornamented, never busy.** Headings carry a fading rule and a diamond, quotes sit in an illuminated margin, dividers become small pieces of inlay. The ornaments follow the geometry of Damascene craft — the eight-point *khatam* star and the *girih* lattice — and stay out of the way of the text.

**Bilingual by birth.** Damascene was designed for Arabic and Latin script at the same time. Right-to-left notes are laid out right-to-left, not mirrored after the fact, and the theme's settings are written in five languages.

**Complete on its own.** No plugin is required. Palettes and options live in [Style Settings](https://github.com/mgmeyers/obsidian-style-settings), and everything else works the moment you switch to the theme.

<br>

<img src="docs/screenshots/devices.png" alt="Damascene on a laptop in Forest night, a tablet in Wheat paper and a phone in Umber night" width="100%">

<br>

## The colours

<img src="docs/screenshots/colours.png" alt="Seven colour swatches: wheat gold, Ghouta green, Barada sage, Damask rose, walnut umber, basalt and limestone" width="100%">

Every colour in Damascene has a place in the city it is named after.

| | Colour | Hex | Where it comes from | Where you'll see it |
|---|---|---|---|---|
| <img src="docs/screenshots/swatches/b9a779.png" width="22" alt=""> | **Wheat gold** | `#B9A779` | The wheat of the Hauran plain, and the gold leaf on *ʿajami* painted ceilings | Accents, H1, links and ornaments in dark mode |
| <img src="docs/screenshots/swatches/002623.png" width="22" alt=""> | **Ghouta green** | `#002623` | The orchards that ring Damascus, at the hour the lamps come on | The *Forest* backgrounds; ink in light mode |
| <img src="docs/screenshots/swatches/7ea69c.png" width="22" alt=""> | **Barada sage** | `#7EA69C` | The river Barada, and the patina on old copper basins | H2, secondary accents, the *Midnight* palette |
| <img src="docs/screenshots/swatches/a67b7c.png" width="22" alt=""> | **Damask rose** | `#A67B7C` | The rose that carries the city's name | Tertiary accents, the *Umber* palette |
| <img src="docs/screenshots/swatches/260f14.png" width="22" alt=""> | **Walnut umber** | `#260F14` | Carved walnut and the inlaid wood of Damascene reception rooms | The *Umber night* background |
| <img src="docs/screenshots/swatches/161616.png" width="22" alt=""> | **Basalt** | `#161616` | The black stone of *ablaq* walls, laid in alternating rows… | The *Charcoal* and *Midnight* backgrounds |
| <img src="docs/screenshots/swatches/edebe0.png" width="22" alt=""> | **Limestone** | `#EDEBE0` | …with the pale stone that answers it | Text in dark mode; the *Wheat paper* background |

Light palettes swap the roles: paper becomes the ground, and forest green and a deep garnet <img src="docs/screenshots/swatches/6b1f2a.png" width="16" alt=""> `#6B1F2A` become the ink.

## Palettes

<img src="docs/screenshots/palettes.png" alt="The same note in all seven palettes: four dark and three light" width="100%">

| Dark | | Light | |
|---|---|---|---|
| **Forest night** | Ghouta orchards after dusk, lit with wheat gold | **Wheat paper** | Warm paper, forest ink and a touch of garnet |
| **Charcoal & wheat** | Black basalt and gilded wood, for the darkest rooms | **White paper** | Clean white with garnet and forest headings |
| **Umber night** | Old walnut panelling and the Damask rose | **Forest day** | Pale green light through a courtyard's leaves |
| **Midnight** | Charcoal under the sage of the Barada | | |

Choose one for each mode in **Settings → Style Settings → Damascene**. Obsidian switches between your dark and light choice with the system, as usual.

## Writing surfaces

<img src="docs/screenshots/writing.png" alt="A note with a quote, a definition, numbered steps, an embedded drawing, a table, a wisdom callout and a key callout, in Forest night and Wheat paper" width="100%">

- **Headings** carry their own ornaments: a fading rule and a diamond under H1, a bar on H2, a lozenge before H3. Prefer them plain? Turn on *Plain headings*.
- **Dividers.** `---` becomes an ornamental rule. For a titled one, write `<div class="dm-divider">The courtyard</div>`, and add `dots`, `wave`, `star` or `double` to the class for a different motif.
- **Ruled paper.** Add the `dm-lined` cssclass to a note for faint notebook lines, or switch it on for every note in Style Settings.
- **Quotes and callouts** come in shapes made for long-form writing: a quote with its author, a verse in ornate brackets, a two-column poem, a saying in a double frame, a numbered timeline. See the [callout reference](#callout-reference).
- **Tables, checkboxes, embeds and properties** are all restyled in the palette's colours.

```markdown
> [!quote|side]
> A garden is a grand teacher. It teaches patience and careful watchfulness.
>
> — Gertrude Jekyll

> [!steps]
> 1. Pick the half-open buds before sunrise
> 2. Carry them to the still within the hour
> 3. Distil slowly over a low flame
```

## Arabic first

<img src="docs/screenshots/rtl.png" alt="An English note and an Arabic note side by side; the Arabic one is laid out right to left" width="100%">

Damascene ships with **itf Qomra Arabic**, a typeface with real Arabic and Latin designs, so a note that mixes both scripts reads as one voice. Notes written in Arabic are laid out right-to-left — headings, quotes, callouts, poem columns and lists — while English notes in the same vault stay left-to-right. Ornaments that point somewhere (rules, bars, quote marks) point the right way in both.

Prefer another face? Type any installed font's name in the theme's font fields, or set it in Obsidian's Appearance settings, which always win.

## Mobile

<img src="docs/screenshots/mobile.png" alt="Three phones: an English note in Wheat paper, a home page in Forest night and an Arabic note in Umber night" width="100%">

The same palettes, ornaments and callouts work on iPhone, Android and iPad. On small screens the reading layout tightens — smaller margins, callouts that fit the width — and touch targets stay comfortable.

## Install

**From Obsidian** — *Settings → Appearance → Themes → Manage*, search for **Damascene**, then *Install and use*. Install **Style Settings** too if you want to change palettes and options.

**By hand** — download `theme.css` and `manifest.json` from the [latest release](https://github.com/k7aleds8/damascene/releases) into `.obsidian/themes/Damascene/`, then pick Damascene in *Settings → Appearance*.

## Theme options

Everything below lives in **Style Settings → Damascene**, written in English, Arabic, French, Spanish and Turkish.

| Option | Default |
|---|---|
| Dark palette · Light palette | Forest night · Wheat paper |
| Text font · Interface font | itf Qomra Arabic |
| Line height | 1.9 |
| Readable line width | 46 rem |
| Ruled paper in every note | Off |
| Plain headings | Off |
| Justified paragraphs | Off |
| Flat interface (no shadows) | Off |
| Colourful ribbon icons | Off |

## Callout reference

| Callout | Use it for | Options after `\|` |
|---|---|---|
| `[!quote]` | A quote, with its author on the last line | `big` `side` `forest` `umber` `wheat` `title` |
| `[!ayah]` | A verse, framed in ornate brackets | `title` |
| `[!poem]` | Two-column verse: write each hemistich as a list item | `title` |
| `[!wisdom]` | A saying in a double frame | |
| `[!definition]` | A term and its meaning | |
| `[!key]` | The one idea to remember | |
| `[!steps]` | A numbered timeline (use a numbered list) | |
| `[!box]` | A plain panel | `forest` `umber` `wheat` `charcoal` `outline` `glass` `center` `tab` `title` |
| `[!lined]` | A ruled sheet with a margin line | `title` |

Obsidian's own types — `note`, `tip`, `warning`, `danger` and the rest — are restyled in the palette's colours. Add `-` or `+` after any type to make it foldable.

<details>
<summary><b>Examples</b></summary>

<br>

```markdown
> [!poem] Ahmad Shawqi
> - سلامٌ من صَبا بَرَدى أرقُّ
> - ودمعٌ لا يُكفكَفُ يا دمشقُ

> [!definition] Attar
> The essential oil distilled from rose petals.

> [!box|forest]
> Forest green, wheat gold, basalt and walnut: the four colours of the city.

> [!lined] A note to self
> Jasmine blooms from May to October; its best hour is just after sunset.
```

</details>

## For snippet writers

Every palette sets the same `--dm-*` variables, so a CSS snippet written against them follows whichever palette is active.

| Variables | What they are |
|---|---|
| `--dm-bg` `--dm-bg2` `--dm-bg3` | Page, sidebar and raised surfaces |
| `--dm-text` `--dm-muted` `--dm-faint` | Text, from strongest to quietest |
| `--dm-accent` `--dm-accent2` `--dm-accent3` | The palette's three accents; the first two also come as `-rgb` triplets |
| `--dm-forest` `--dm-wheat` `--dm-umber` `--dm-charcoal` | Named colour families, each with `-bg`, `-text` and `-rgb` |
| `--dm-folder-1` … `--dm-folder-9` | Nine folder colours tuned to the palette |
| `--dm-h1` … `--dm-h6` | Heading colours |
| `--dm-mask-star` `--dm-mask-diamond` `--dm-mask-wave` `--dm-mask-quote` `--dm-mask-khatam-ring` | Ornament shapes, for use as CSS masks |

```css
/* a folder colour that changes with the palette */
.nav-folder-title[data-path="Projects"] { color: var(--dm-folder-2); }
```

## Companion plugin

<img src="docs/screenshots/home.png" alt="The Damascene Studio home dashboard" width="100%">

The theme needs nothing else. If you want more, **[Damascene Studio](https://github.com/k7aleds8/damascene-studio)** is an optional plugin built around it: a live home dashboard, a block gallery for every callout above, an embed layout editor, folder colours, a focus timer, habits, and a palette picker with live previews. It lives in its own repository.

## FAQ

**Do I need a plugin?**
No. The theme is complete on its own; Style Settings is only needed to change palettes and options.

**I used Qomra.**
Switch to Damascene: the palettes and callouts are the same, and the classes now start with `dm-` instead of `qm-`. Rename `qm-` cssclasses in your notes, or let Damascene Studio's health check do it for you.

**Can I use my own font?**
Yes. Type its name in the font fields in Style Settings, or set it in Obsidian's Appearance settings, which take priority.

**How were these screenshots made?**
From a sample vault in this repository, so no one's personal notes appear here. `npm run demo` builds it, and `npm run mockups` turns the captures into the images above.

## Credits

Made by [k7aleds8](https://github.com/k7aleds8). The ornaments follow the geometry of Damascene woodwork and tile: the eight-point *khatam* and the *girih* lattice.

- **Font:** *itf Qomra Arabic* by Indian Type Foundry is licensed separately and is not covered by this repository's MIT licence. See [fonts/NOTICE.md](fonts/NOTICE.md).
- **Quotes in the screenshots:** Gertrude Jekyll and Kahlil Gibran; the poem is by Ahmad Shawqi (1868–1932).
- **Code:** [MIT](LICENSE).
