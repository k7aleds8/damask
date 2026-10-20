---
cssclasses: []
---
# Vitrine Damask

Tout ce que le thème ajoute, chaque élément à côté du Markdown qui le produit. Copiez n'importe quel bloc dans vos notes.

> [!tip] Avant de commencer
> - **Les palettes et les options** (sept palettes, interligne, papier réglé, titres sobres…) se trouvent dans l'extension **Style Settings** : *Paramètres → Extensions communautaires → Parcourir → Style Settings*, puis *Paramètres → Style Settings → Damask*.
> - **Les polices** fonctionnent d'emblée. Pour utiliser la vôtre, choisissez-la dans *Paramètres → Apparence → Police*.
> - **Recommandé : Damask Studio**, l'extension compagne, insère chacun de ces blocs depuis une galerie en un clic et affiche chaque palette en direct. *Paramètres → Extensions communautaires → Parcourir → Damask Studio*.

---

## Titres

```markdown
# Titre un
## Titre deux
### Titre trois
```

Le H1 reçoit un filet qui s'estompe et un losange, le H2 une barre, le H3 un petit losange. Activez *Titres sobres* dans Style Settings pour les retirer.

## Séparateurs

```markdown
---
<div class="dm-divider">Chapitre deux</div>
<div class="dm-divider dots"></div>
<div class="dm-divider wave"></div>
<div class="dm-divider star"></div>
<div class="dm-divider double"></div>
```

---

<div class="dm-divider">Chapitre deux</div>

<div class="dm-divider dots"></div>

<div class="dm-divider wave"></div>

<div class="dm-divider star"></div>

<div class="dm-divider double"></div>

## Citations

```markdown
> [!quote]
> Il faut cultiver notre jardin.
>
> — Voltaire
```

> [!quote]
> Il faut cultiver notre jardin.
>
> — Voltaire

Options après `|` : `big`, `side`, `forest`, `umber`, `wheat`, `title`.

```markdown
> [!quote|side]
> L'habitude est une seconde nature.
>
> — Ibn Khaldoun
```

> [!quote|side]
> L'habitude est une seconde nature.
>
> — Ibn Khaldoun

> [!quote|big umber]
> Le travail est l'amour rendu visible.
>
> — Khalil Gibran

## Verset

Pour un verset ou une ligne à mettre à part, encadré de crochets ornés.

```markdown
> [!ayah]
> العلمُ في الصِّغرِ كالنقشِ على الحجر
```

> [!ayah]
> العلمُ في الصِّغرِ كالنقشِ على الحجر

## Poème

Deux colonnes : écrivez chaque hémistiche comme un élément de liste. Ajoutez `|title` pour afficher le nom du poète au-dessus.

```markdown
> [!poem|title] Ahmed Chawqi
> - سلامٌ من صَبا بَرَدى أرقُّ
> - ودمعٌ لا يُكفكَفُ يا دمشقُ
```

> [!poem|title] Ahmed Chawqi
> - سلامٌ من صَبا بَرَدى أرقُّ
> - ودمعٌ لا يُكفكَفُ يا دمشقُ

## Sagesse, définition, idée clé

```markdown
> [!wisdom]
> Qui plante un jardin croit en demain.

> [!definition] Attar
> L'huile essentielle distillée des pétales de rose.

> [!key]
> Les roses cueillies après dix heures perdent la moitié de leur parfum.
```

> [!wisdom]
> Qui plante un jardin croit en demain.

> [!definition] Attar
> L'huile essentielle distillée des pétales de rose.

> [!key]
> Les roses cueillies après dix heures perdent la moitié de leur parfum.

## Étapes

Une frise numérotée. Utilisez une liste numérotée à l'intérieur.

```markdown
> [!steps]
> 1. Cueillir les boutons avant l'aube
> 2. Les porter à l'alambic dans l'heure
> 3. Distiller lentement à feu doux
```

> [!steps]
> 1. Cueillir les boutons avant l'aube
> 2. Les porter à l'alambic dans l'heure
> 3. Distiller lentement à feu doux

## Panneaux

Un encadré simple. Options : `forest`, `umber`, `wheat`, `charcoal`, `outline`, `glass`, `center`, `tab`, `title`. Combinez-les avec des espaces.

```markdown
> [!box|forest]
> Vert de la Ghouta, or du blé, basalte et noyer.

> [!box|outline center]
> Un panneau centré et bordé.

> [!box|umber title] Avec un titre
> Ajoutez `title` pour afficher la ligne de titre.
```

> [!box|forest]
> Vert de la Ghouta, or du blé, basalte et noyer.

> [!box|wheat]
> Un panneau couleur blé.

> [!box|outline center]
> Un panneau centré et bordé.

> [!box|glass]
> Un panneau de verre.

> [!box|umber title] Avec un titre
> Ajoutez `title` pour afficher la ligne de titre.

## Feuille réglée

```markdown
> [!lined|title] Note pour moi-même
> Le jasmin fleurit de mai à octobre.
> Sa plus belle heure suit le coucher du soleil.
```

Comme pour les poèmes, `|title` affiche le titre ; omettez-le pour une feuille simple.

> [!lined|title] Note pour moi-même
> Le jasmin fleurit de mai à octobre.
> Sa plus belle heure suit le coucher du soleil.

Pour régler une note entière, ajoutez `dm-lined` à sa propriété `cssclasses` (ou activez *Papier réglé dans toutes les notes* dans Style Settings).

## Les callouts d'Obsidian

Recolorés dans la palette : vert pour les notes et les astuces, or pour les avertissements et les questions, grenat pour le danger. Ajoutez `-` ou `+` après le type pour rendre un callout repliable.

```markdown
> [!note] Note
> Une note.

> [!warning] Attention
> Un avertissement.

> [!danger]- Replié jusqu'au clic
> Contenu masqué.
```

> [!note] Note
> Une note.

> [!tip] Astuce
> Une astuce.

> [!warning] Attention
> Un avertissement.

> [!question] Question
> Une question.

> [!danger]- Replié jusqu'au clic
> Contenu masqué.

## Le Markdown de tous les jours

**Gras**, *italique*, ==surlignage==, `code`, un [[lien]], un #tag.

- [ ] Une tâche
- [x] Une tâche terminée

| Palette | Mode |
|---|---|
| Forest night | Sombre |
| Wheat paper | Clair |

> Une citation simple, quand un callout n'est pas nécessaire.
