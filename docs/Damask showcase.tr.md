---
cssclasses: []
---
# Damask vitrini

Temanın eklediği her şey, her biri onu oluşturan Markdown'ın yanında. İstediğiniz bloğu kendi notlarınıza kopyalayın.

> [!tip] Başlamadan önce
> - **Paletler ve seçenekler** (yedi palet, satır aralığı, çizgili kâğıt, sade başlıklar…) **Style Settings** eklentisindedir: *Ayarlar → Topluluk eklentileri → Göz at → Style Settings*, ardından *Ayarlar → Style Settings → Damask*.
> - **Yazı tipleri** hemen çalışır. Kendi yazı tipinizi kullanmak için *Ayarlar → Görünüm → Yazı tipi* bölümünden seçin.
> - **Önerilen: Damask Studio**. Tamamlayıcı eklenti bu blokların her birini bir galeriden tek tıkla ekler ve her paleti canlı gösterir. *Ayarlar → Topluluk eklentileri → Göz at → Damask Studio*.

---

## Başlıklar

```markdown
# Birinci başlık
## İkinci başlık
### Üçüncü başlık
```

H1'e solan bir çizgi ve bir eşkenar dörtgen, H2'ye bir çubuk, H3'e küçük bir baklava eklenir. Kaldırmak için Style Settings'te *Sade başlıklar*'ı açın.

## Ayırıcılar

```markdown
---
<div class="dm-divider">İkinci bölüm</div>
<div class="dm-divider dots"></div>
<div class="dm-divider wave"></div>
<div class="dm-divider star"></div>
<div class="dm-divider double"></div>
```

---

<div class="dm-divider">İkinci bölüm</div>

<div class="dm-divider dots"></div>

<div class="dm-divider wave"></div>

<div class="dm-divider star"></div>

<div class="dm-divider double"></div>

## Alıntılar

```markdown
> [!quote]
> Ne olursan ol, yine gel.
>
> — Mevlânâ
```

> [!quote]
> Ne olursan ol, yine gel.
>
> — Mevlânâ

`|` sonrası seçenekler: `big`, `side`, `forest`, `umber`, `wheat`, `title`.

```markdown
> [!quote|side]
> Alışkanlık ikinci bir doğadır.
>
> — İbn Haldun
```

> [!quote|side]
> Alışkanlık ikinci bir doğadır.
>
> — İbn Haldun

> [!quote|big umber]
> Çalışmak, görünür hâle gelmiş sevgidir.
>
> — Halil Cibran

## Ayet

Öne çıkarmak istediğiniz bir ayet ya da dize için, süslü parantezler içinde.

```markdown
> [!ayah]
> العلمُ في الصِّغرِ كالنقشِ على الحجر
```

> [!ayah]
> العلمُ في الصِّغرِ كالنقشِ على الحجر

## Şiir

İki sütun: her mısrayı bir liste öğesi olarak yazın. Şairin adını üstte göstermek için `|title` ekleyin.

```markdown
> [!poem|title] Ahmed Şevki
> - سلامٌ من صَبا بَرَدى أرقُّ
> - ودمعٌ لا يُكفكَفُ يا دمشقُ
```

> [!poem|title] Ahmed Şevki
> - سلامٌ من صَبا بَرَدى أرقُّ
> - ودمعٌ لا يُكفكَفُ يا دمشقُ

## Özdeyiş, tanım, anahtar fikir

```markdown
> [!wisdom]
> Bahçe eken, yarına inanır.

> [!definition] Gül yağı
> Gül yapraklarından damıtılan uçucu yağ.

> [!key]
> Sabah ondan sonra toplanan güller kokularının yarısını yitirir.
```

> [!wisdom]
> Bahçe eken, yarına inanır.

> [!definition] Gül yağı
> Gül yapraklarından damıtılan uçucu yağ.

> [!key]
> Sabah ondan sonra toplanan güller kokularının yarısını yitirir.

## Adımlar

Numaralı bir zaman çizelgesi. İçinde numaralı bir liste kullanın.

```markdown
> [!steps]
> 1. Tomurcukları gün doğmadan toplayın
> 2. Bir saat içinde imbiğe taşıyın
> 3. Kısık ateşte, yavaşça damıtın
```

> [!steps]
> 1. Tomurcukları gün doğmadan toplayın
> 2. Bir saat içinde imbiğe taşıyın
> 3. Kısık ateşte, yavaşça damıtın

## Paneller

Sade bir kutu. Seçenekler: `forest`, `umber`, `wheat`, `charcoal`, `outline`, `glass`, `center`, `tab`, `title`. Boşlukla birleştirin.

```markdown
> [!box|forest]
> Guta yeşili, buğday altını, bazalt ve ceviz.

> [!box|outline center]
> Ortalanmış, çerçeveli bir panel.

> [!box|umber title] Başlıklı
> Başlık satırını göstermek için `title` ekleyin.
```

> [!box|forest]
> Guta yeşili, buğday altını, bazalt ve ceviz.

> [!box|wheat]
> Buğday renginde bir panel.

> [!box|outline center]
> Ortalanmış, çerçeveli bir panel.

> [!box|glass]
> Cam bir panel.

> [!box|umber title] Başlıklı
> Başlık satırını göstermek için `title` ekleyin.

## Çizgili yaprak

```markdown
> [!lined|title] Kendime not
> Yasemin mayıstan ekime kadar açar.
> En güzel saati gün batımının hemen ardıdır.
```

Şiirde olduğu gibi `|title` başlığı gösterir; sade bir yaprak için çıkarın.

> [!lined|title] Kendime not
> Yasemin mayıstan ekime kadar açar.
> En güzel saati gün batımının hemen ardıdır.

Bütün bir notu çizgili yapmak için `cssclasses` özelliğine `dm-lined` ekleyin (ya da Style Settings'te *Tüm notlarda çizgili kâğıt*'ı açın).

## Obsidian'ın kendi blokları

Paletin renkleriyle yeniden renklendirilir: notlar ve ipuçları için yeşil, uyarılar ve sorular için altın, tehlike için lal. Herhangi bir bloğu katlanabilir yapmak için türün ardına `-` ya da `+` ekleyin.

```markdown
> [!note] Not
> Bir not.

> [!warning] Uyarı
> Bir uyarı.

> [!danger]- Tıklanana kadar katlı
> Gizli içerik.
```

> [!note] Not
> Bir not.

> [!tip] İpucu
> Bir ipucu.

> [!warning] Uyarı
> Bir uyarı.

> [!question] Soru
> Bir soru.

> [!danger]- Tıklanana kadar katlı
> Gizli içerik.

## Gündelik Markdown

**Kalın**, *italik*, ==vurgu==, `kod`, bir [[bağlantı]], bir #etiket.

- [ ] Bir görev
- [x] Tamamlanmış bir görev

| Palet | Mod |
|---|---|
| Forest night | Koyu |
| Wheat paper | Açık |

> Blok gerekmediğinde sade bir alıntı.
