---
cssclasses: []
---
# Muestrario de Damask

Todo lo que añade el tema, cada elemento junto al Markdown que lo crea. Copia cualquier bloque a tus notas.

> [!tip] Antes de empezar
> - **Las paletas y opciones** (siete paletas, interlineado, papel pautado, títulos sencillos…) están en el complemento **Style Settings**: *Ajustes → Complementos de la comunidad → Explorar → Style Settings*, y luego *Ajustes → Style Settings → Damask*.
> - **Las fuentes** funcionan desde el primer momento. Para usar la tuya, elígela en *Ajustes → Apariencia → Fuente*.
> - **Recomendado: Damask Studio**, el complemento compañero, inserta cualquiera de estos bloques desde una galería con un clic y muestra cada paleta en vivo. *Ajustes → Complementos de la comunidad → Explorar → Damask Studio*.

---

## Títulos

```markdown
# Título uno
## Título dos
### Título tres
```

El H1 lleva una línea que se desvanece y un rombo; el H2, una barra; el H3, un pequeño rombo. Activa *Títulos sencillos* en Style Settings para quitarlos.

## Separadores

```markdown
---
<div class="dm-divider">Capítulo dos</div>
<div class="dm-divider dots"></div>
<div class="dm-divider wave"></div>
<div class="dm-divider star"></div>
<div class="dm-divider double"></div>
```

---

<div class="dm-divider">Capítulo dos</div>

<div class="dm-divider dots"></div>

<div class="dm-divider wave"></div>

<div class="dm-divider star"></div>

<div class="dm-divider double"></div>

## Citas

```markdown
> [!quote]
> Caminante, no hay camino, se hace camino al andar.
>
> — Antonio Machado
```

> [!quote]
> Caminante, no hay camino, se hace camino al andar.
>
> — Antonio Machado

Opciones tras `|`: `big`, `side`, `forest`, `umber`, `wheat`, `title`.

```markdown
> [!quote|side]
> La costumbre es una segunda naturaleza.
>
> — Ibn Jaldún
```

> [!quote|side]
> La costumbre es una segunda naturaleza.
>
> — Ibn Jaldún

> [!quote|big umber]
> El trabajo es el amor hecho visible.
>
> — Gibran Jalil Gibran

## Verso

Para un versículo o una línea que quieras destacar, entre corchetes ornamentados.

```markdown
> [!ayah]
> العلمُ في الصِّغرِ كالنقشِ على الحجر
```

> [!ayah]
> العلمُ في الصِّغرِ كالنقشِ على الحجر

## Poema

Dos columnas: escribe cada hemistiquio como un elemento de lista. Añade `|title` para mostrar el nombre del poeta encima.

```markdown
> [!poem|title] Ahmad Shawqi
> - سلامٌ من صَبا بَرَدى أرقُّ
> - ودمعٌ لا يُكفكَفُ يا دمشقُ
```

> [!poem|title] Ahmad Shawqi
> - سلامٌ من صَبا بَرَدى أرقُّ
> - ودمعٌ لا يُكفكَفُ يا دمشقُ

## Sabiduría, definición, idea clave

```markdown
> [!wisdom]
> Quien planta un jardín cree en el mañana.

> [!definition] Attar
> El aceite esencial destilado de los pétalos de rosa.

> [!key]
> Las rosas cortadas después de las diez pierden la mitad de su aroma.
```

> [!wisdom]
> Quien planta un jardín cree en el mañana.

> [!definition] Attar
> El aceite esencial destilado de los pétalos de rosa.

> [!key]
> Las rosas cortadas después de las diez pierden la mitad de su aroma.

## Pasos

Una línea de tiempo numerada. Usa una lista numerada dentro.

```markdown
> [!steps]
> 1. Recoge los capullos antes del amanecer
> 2. Llévalos al alambique antes de una hora
> 3. Destila despacio a fuego lento
```

> [!steps]
> 1. Recoge los capullos antes del amanecer
> 2. Llévalos al alambique antes de una hora
> 3. Destila despacio a fuego lento

## Paneles

Un recuadro sencillo. Opciones: `forest`, `umber`, `wheat`, `charcoal`, `outline`, `glass`, `center`, `tab`, `title`. Combínalas con espacios.

```markdown
> [!box|forest]
> Verde de la Guta, oro del trigo, basalto y nogal.

> [!box|outline center]
> Un panel centrado y con borde.

> [!box|umber title] Con título
> Añade `title` para mostrar la línea de título.
```

> [!box|forest]
> Verde de la Guta, oro del trigo, basalto y nogal.

> [!box|wheat]
> Un panel color trigo.

> [!box|outline center]
> Un panel centrado y con borde.

> [!box|glass]
> Un panel de cristal.

> [!box|umber title] Con título
> Añade `title` para mostrar la línea de título.

## Hoja pautada

```markdown
> [!lined|title] Nota para mí
> El jazmín florece de mayo a octubre.
> Su mejor hora es justo después del atardecer.
```

Como en los poemas, `|title` muestra el título; quítalo para una hoja sencilla.

> [!lined|title] Nota para mí
> El jazmín florece de mayo a octubre.
> Su mejor hora es justo después del atardecer.

Para pautar una nota entera, añade `dm-lined` a su propiedad `cssclasses` (o activa *Papel pautado en todas las notas* en Style Settings).

## Los callouts de Obsidian

Recoloreados con la paleta: verde para notas y consejos, oro para advertencias y preguntas, granate para el peligro. Añade `-` o `+` tras el tipo para que cualquier callout se pueda plegar.

```markdown
> [!note] Nota
> Una nota.

> [!warning] Advertencia
> Una advertencia.

> [!danger]- Plegado hasta hacer clic
> Contenido oculto.
```

> [!note] Nota
> Una nota.

> [!tip] Consejo
> Un consejo.

> [!warning] Advertencia
> Una advertencia.

> [!question] Pregunta
> Una pregunta.

> [!danger]- Plegado hasta hacer clic
> Contenido oculto.

## Markdown de cada día

**Negrita**, *cursiva*, ==resaltado==, `código`, un [[enlace]], una #etiqueta.

- [ ] Una tarea
- [x] Una tarea terminada

| Paleta | Modo |
|---|---|
| Forest night | Oscuro |
| Wheat paper | Claro |

> Una cita sencilla, para cuando no necesitas un callout.
