# Image provenance

Every raster that ships from this directory, where it came from, and what was
done to it. Nothing here is a photograph of Tereza Vágnerová: no photograph of
her exists in the project, and no stock photograph stands in for one.

## Treatment

All photographs are pre-tinted to the **blue** duotone by `scripts/duotone.py`
(shadow `#0F3557`, highlight `#8FC9F5`, the blue theme's own dark surface and
dark accent), exposure normalised, centre-cropped to the shipped box, JPEG
quality 82. Originals are untouched in `../tv-deck-template/`.

Blue, not petrol, because blue is the site's theme and its chrome colour
(PRODUCT.md, "Site colour", 2026-09-05). A photograph and the dark band next
to it are now the same colour. Petrol and violet stay in the script's ramp
table as topic colours; no shipped file uses them.

The tint is blended back over the photograph at **60 percent** (`TINT` in
`scripts/duotone.py`). At full strength the ramp owned every pixel and a
chopping board and a barbell came out as the same blue object; at 0.6 the
eight files still read as one colour family and each one still reads as a
photograph.

## Photographs

| File | Source file | Origin | Used on |
|---|---|---|---|
| `hero-kitchen.jpg` | `photo-kitchen.jpg` | Unsplash, free for commercial use | Home hero band |
| `band-lift.jpg` | `photo-lift.jpg` | Unsplash, free for commercial use | Home claim band |
| `about-food.jpg` | `photo-food.jpg` | Her source deck (*Kopie návrhu Prezentace*) | Home about |
| `about-grip.jpg` | `photo-bar.jpg` | Unsplash, free for commercial use | Home about |
| `contact-squash.jpg` | `photo-squash.jpg` | Unsplash, free for commercial use | Contact block, /kontakt |
| `faq-archive.jpg` | `photo-archive.jpg` | Her source deck (*Kopie návrhu Prezentace*), a 1930s archive photograph | FAQ, /kontakt |
| `talk-bar.jpg` | `photo-bar.jpg` | Unsplash, free for commercial use | Talk card, Obezita a výživa |
| `talk-squash.jpg` | `photo-squash.jpg` | Unsplash, free for commercial use | Talk card, Výživa v nemoci |

The nine Unsplash replacements are documented in `../tv-deck-template/README.md`
under "Photography"; the archive frame is the one the deck uses on slide `07`.

`talk-kitchen.jpg` (`photo-kitchen.jpg`, the same board as the hero) shipped
here until the second fix batch: the hero's 2.58:1 sliver and the talk card's
1.62:1 chunk were different crops of one photograph, but close enough in
subject and framing that a reader scrolling past both read it as the same
picture twice. `talk-bar.jpg` replaces it with a different source instead,
`photo-bar.jpg` at a 1.62:1 crop distinct from `about-grip.jpg`'s 2:1 one
(different anchor, more forearm and less of the raised hand). `photo-squash`
still ships in two crops, `talk-squash.jpg` here and `contact-squash.jpg` on
/kontakt, a different page, which is a smaller ask of a reader's memory than
two crops on the same page.

## Marks

| File | Origin | Used on |
|---|---|---|
| `sig-blue.png` | Her monogram mark, drawn for the deck system, recoloured | Home mission statement |
| `../favicon.svg` | Drawn here: her initials on the blue accent (`#1D5994`) | Browser tab, every route |

`favicon.svg` is not derived from `sig-blue.png`. The monogram is a signature
and is illegible at 32px, so the tab mark is two letters instead.

`sig-blue.png` replaces `sig-ink.png` in the second fix batch. The source
scan is inked in petrol (`#0E3A36`), which read as green ink under the site's
blue chrome rather than as her mark in a dark, deliberate colour. Every
opaque pixel is recoloured to the blue ink `#0F2C47`, alpha untouched
(`scripts/duotone.py`, the monogram step): a flat recolour, not the duotone
ramp above, since a signature has no luminance range to ramp across.

## Deliberately not shipped

`photo-chart.jpg` (hands writing in a medical record), `photo-steth.jpg`
(a stethoscope on a heart model) and `photo-organs.jpg` (paper organ models)
were all dropped at the finish review: three clinical frames on one page read
as the medical-institution anti-reference the brief rejects outright. Teaching,
food, strength and the archive photograph took their places.

`photo-archive.jpg` is the one shipped photograph with legible faces. It is a
1930s frame of eight women around a card table in period dress and cannot be
misread as a portrait of her, which is the entire reason for the rule below.

`photo-portrait.jpg` is a stock portrait standing in for her in the deck and is
never used here. `photo-highkey.jpg`, `photo-midlife.jpg`, `photo-cover.jpg`,
`photo-rest.jpg`, `photo-gym.jpg` and `photo-clinic.jpg` each show a woman whose
face is legible; beside her name or her claims a visitor would read any of them
as a portrait of her, so none of them ships. `photo-walk.jpg` was dropped for the
same reason once its frame grew: a lone woman as the subject of a photograph
directly under her own biography reads as her whether or not the face resolves.
