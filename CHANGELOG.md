# Changelog

## 2.0.4

- Cleaner stylesheet: no more `!important`, and `:has()` is down to the one place that needs
  it. Tables, callouts and links look exactly as before.
- Needs Obsidian 1.8.7 or newer, the same as Damask Studio.

## 2.0.3

- The theme keeps the name *Damascene* in Obsidian's theme browser for now, since the
  directory does not allow a listed theme to be renamed. Everything else, from the README
  to Style Settings, says Damask, and nothing changes for anyone who has it installed.

## 2.0.2

- New name: **Damask**, the English word for the silk first woven in Damascus. The README
  explains the name and the colours. Nothing in your notes needs to change: classes and
  variables keep the `dm-` prefix.
- Style Settings opens with a short note about the companion plugin, Damask Studio.
- README in Arabic, French, Spanish and Turkish, each with a translated showcase note.

## 2.0.1

- Light palettes: warning and question callouts now use a clear ochre gold, so they no
  longer look like notes and tips. Highlighted text picks up the same warmer tint.
- Removed two variables nothing used. The remaining `--dm-*` variables are documented
  in the README for snippet writers.

## 2.0.0

First public release, renamed from Qomra.

- New name: **Damascene** (Damask since 2.0.2). Classes and variables now use the `dm-` prefix.
- Seven palettes — four dark, three light — picked in Style Settings.
- Text and interface fonts are configurable; itf Qomra Arabic stays the default.
- Ornaments mirror correctly in left-to-right notes.
- Style Settings labels in English, Arabic, French, Spanish and Turkish.
- The palette owns the accent colour: toggles and other accent-coloured controls
  no longer fall back to Obsidian's purple when no custom accent is set.
