# Imagery — two modes

Her material has two photographic languages and the decision (2026-09-13) is
to keep both, documented, and **never mixed in one piece**.

## Public mode — duotone to the surface's own theme
Website, social, webinar sales, anything a member of the public sees first.
- **On the website** every photograph passes through the blue duotone
  (shadow `#0F3557`, highlight `#8FC9F5`) at a 60% blend, so the subject
  still reads as a photograph.
- **On a deck or reel the duotone follows the board's theme**, because those
  surfaces are themed per topic and a warm natural photograph under a violet
  scrim reads as muddy brown-purple. Each theme carries its own transfer
  curve, as her deck source documents: blue `#0F3557 → #8FC9F5`, petrol
  `#062020 → #73BFB4`, violet `#401252 → #D8A6F5`. Implemented as an SVG
  `feComponentTransfer`, never a stack of CSS filters, so it survives export.
- This is the one place the tint is not blue. It is still not decoration:
  the duotone matches the surface the photograph sits on, which is what stops
  a set of stock photographs with four colour temperatures reading as four
  different libraries.
- Subjects: hands, food, a barbell, a clinical record, an archive image. No
  portraits of her, no smiling stock clinicians, no flat-lay.
- Library: `assets/img/` (site) and `assets/photo/` (deck). On petrol decks
  the SVG `feComponentTransfer` duotone (`#062020` → `#73BFB4`) is used
  instead of a CSS filter stack.

## Clinical mode — natural colour
Professional talks to clinicians, carers and students, where the photograph
is documentary evidence of a situation (a PEG tube, a bedside, an X-ray).
- Natural colour, no duotone. Black-and-white is permitted where the source
  is already monochrome.
- Text over a Clinical photograph needs `--scrim-photo` raised to .62, or a
  solid panel, because natural-colour images do not guarantee contrast.
- Library: `assets/clinical/`, provenance in its `PROVENANCE.md`. Rights
  unverified — see the note there.
- Clip-art register stock (icon cubes, jigsaw heads, dissolving brains) is
  kept for the record and marked **do not use**.

## Rules that apply in both modes
- A photograph earns its slide. The evidence slide has none; a citation owns
  its slide.
- Crops: rectangular, radius 24px on the web, full-bleed or the 1200–1920
  right column on slides. The circular crop exists once in her material (the
  X-ray) and is reserved for radiology.
- Never text on a photograph without a real background-colour scrim. A
  `background-image` gradient alone computes as `background-color:
  transparent` and under-measures on contrast tools: the scrim needs a solid
  `background-color` floor with the gradient layered over it, as
  `tokens/base.css`'s `.scrim` does. On a 9:16 frame the alpha must hold at
  the TOP of the frame too, where the kicker sits — not only at the bottom.
- No stock of her; a portrait, when supplied, is the only exception and is
  used on the Speaker layout and the CV.

## Choosing the mode
Ask who is in the room. If the audience includes patients, families or the
general public: Public. If it is clinicians, students, or a conference:
Clinical is permitted. A single deck picks one.
