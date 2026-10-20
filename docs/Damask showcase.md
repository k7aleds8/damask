---
cssclasses: []
---
# Damask showcase

Everything the theme adds, each with the Markdown that makes it. Copy any block into your own notes.

> [!tip] Before you start
> - **Palettes and options** (seven palettes, line height, ruled paper, plain headings…) live in the **Style Settings** plugin: *Settings → Community plugins → Browse → Style Settings*, then *Settings → Style Settings → Damask*.
> - **Fonts** work out of the box. To use your own, set it in *Settings → Appearance → Font*.
> - **Recommended: Damask Studio**, the companion plugin, inserts any of these blocks from a gallery in one click and previews every palette live. *Settings → Community plugins → Browse → Damask Studio*.

---

## Headings

```markdown
# Heading one
## Heading two
### Heading three
```

H1 gets a fading rule and a diamond, H2 a bar, H3 a lozenge. Turn on *Plain headings* in Style Settings to remove them.

## Dividers

```markdown
---
<div class="dm-divider">Chapter two</div>
<div class="dm-divider dots"></div>
<div class="dm-divider wave"></div>
<div class="dm-divider star"></div>
<div class="dm-divider double"></div>
```

---

<div class="dm-divider">Chapter two</div>

<div class="dm-divider dots"></div>

<div class="dm-divider wave"></div>

<div class="dm-divider star"></div>

<div class="dm-divider double"></div>

## Quotes

```markdown
> [!quote]
> A garden is a grand teacher.
>
> — Gertrude Jekyll
```

> [!quote]
> A garden is a grand teacher.
>
> — Gertrude Jekyll

Options after `|`: `big`, `side`, `forest`, `umber`, `wheat`, `title`.

```markdown
> [!quote|side]
> Habit is a second nature.
>
> — Ibn Khaldun
```

> [!quote|side]
> Habit is a second nature.
>
> — Ibn Khaldun

> [!quote|big umber]
> Work is love made visible.
>
> — Kahlil Gibran

## Verse

For a verse or a line you want to set apart, framed in ornate brackets.

```markdown
> [!ayah]
> العلمُ في الصِّغرِ كالنقشِ على الحجر
```

> [!ayah]
> العلمُ في الصِّغرِ كالنقشِ على الحجر

## Poem

Two columns: write each half-line as a list item. Add `|title` to show the poet's name above it.

```markdown
> [!poem|title] Ahmad Shawqi
> - سلامٌ من صَبا بَرَدى أرقُّ
> - ودمعٌ لا يُكفكَفُ يا دمشقُ
```

> [!poem|title] Ahmad Shawqi
> - سلامٌ من صَبا بَرَدى أرقُّ
> - ودمعٌ لا يُكفكَفُ يا دمشقُ

## Wisdom, definition, key

```markdown
> [!wisdom]
> Whoever plants a garden believes in tomorrow.

> [!definition] Attar
> The essential oil distilled from rose petals.

> [!key]
> Roses picked after ten in the morning lose half their scent.
```

> [!wisdom]
> Whoever plants a garden believes in tomorrow.

> [!definition] Attar
> The essential oil distilled from rose petals.

> [!key]
> Roses picked after ten in the morning lose half their scent.

## Steps

A numbered timeline. Use a numbered list inside.

```markdown
> [!steps]
> 1. Pick the buds before sunrise
> 2. Carry them to the still within the hour
> 3. Distil slowly over a low flame
```

> [!steps]
> 1. Pick the buds before sunrise
> 2. Carry them to the still within the hour
> 3. Distil slowly over a low flame

## Panels

A plain box. Options: `forest`, `umber`, `wheat`, `charcoal`, `outline`, `glass`, `center`, `tab`, `title`. Combine them with spaces.

```markdown
> [!box|forest]
> Forest green, wheat gold, basalt and walnut.

> [!box|outline center]
> A centred, outlined panel.

> [!box|umber title] With a title
> Add `title` to show the heading line.
```

> [!box|forest]
> Forest green, wheat gold, basalt and walnut.

> [!box|wheat]
> A wheat panel.

> [!box|outline center]
> A centred, outlined panel.

> [!box|glass]
> A glass panel.

> [!box|umber title] With a title
> Add `title` to show the heading line.

## Ruled sheet

```markdown
> [!lined|title] A note to self
> Jasmine blooms from May to October.
> Its best hour is just after sunset.
```

As with poems, `|title` shows the heading; leave it out for a plain sheet.

> [!lined|title] A note to self
> Jasmine blooms from May to October.
> Its best hour is just after sunset.

To rule a whole note, add `dm-lined` to its `cssclasses` property (or switch on *Ruled paper in every note* in Style Settings).

## Obsidian's own callouts

Recoloured in the palette: green for notes and tips, gold for warnings and questions, garnet for danger. Add `-` or `+` after the type to make any callout foldable.

```markdown
> [!note] Note
> A note.

> [!warning] Warning
> A warning.

> [!danger]- Folded until clicked
> Hidden content.
```

> [!note] Note
> A note.

> [!tip] Tip
> A tip.

> [!warning] Warning
> A warning.

> [!question] Question
> A question.

> [!danger]- Folded until clicked
> Hidden content.

## Everyday Markdown

**Bold**, *italic*, ==highlight==, `inline code`, a [[link]], a #tag.

- [ ] A task
- [x] A finished task

| Palette | Mode |
|---|---|
| Forest night | Dark |
| Wheat paper | Light |

> A plain blockquote, for when you don't need a callout.
