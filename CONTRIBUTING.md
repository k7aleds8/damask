# Contributing

Thanks for wanting to help. Bug reports, fixes and new palette ideas are all welcome.

## Setup

```bash
echo "/path/to/a/test/vault" > .vault-path
npm run dev
```

`npm run dev` rebuilds `theme.css` on every change and copies it into the vault
named in `.vault-path`. Use a test vault, not your real one. The theme needs no
npm packages; Node 20 or later is enough.

## Layout

- `src/` — the theme, one CSS file per section. `npm run build` joins them into
  `theme.css`; edit the parts, not the output, and commit both.
- `src/settings.css` — the Style Settings block, with labels in five languages.
- `src/palettes/` — one file per palette. A palette only sets `--dm-*` colour
  variables; everything else reads them.
- `fonts/` — the embedded typeface (see `fonts/NOTICE.md`).

Right-to-left matters here: check every change in an Arabic note as well as an
English one.

## Screenshots

`npm run demo` writes a neutral sample vault to `demo-vault/`. Open it in
Obsidian, capture the screens into `docs/mockups/shots/`, then run
`npm run mockups` to render the images in `docs/screenshots/` and the store
thumbnail `screenshot.png`. Never use a personal vault for screenshots.

## Comments

Explain why, not what. If a comment repeats the next line, delete it.
