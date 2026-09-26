Mgr. Ing. Tereza Vágnerová, Ph.D. is a Czech clinical nutrition therapist and odborná asistentka (assistant professor) at the First Faculty of Medicine, Charles University (1. LF UK). She teaches nutrition in geriatrics and gerontology in Czech and English and researches sarcopenia and sarcopenic obesity. She is one person whose authority is spread across four organisations; this system makes everything she puts her name to (the website, lecture decks at 1920×1080, Instagram reels at 1080×1920, handouts) read as one hand and state its evidence.

Before you make anything, settle four facts and ask if one is missing: **language** (Czech primary, English as a mirror, not a translation), **audience** (clinicians, students, the public or European colleagues), **topic theme** (blue, petrol or violet, one per single-subject piece) and **imagery mode** (Public or Clinical, one per piece). If told "just make it", pick Czech, the audience the content implies and the theme the topic table gives, and say which you picked.

## Principles

Five, in priority order; when two collide the earlier wins.

1. **State the evidence.** Every claim can say how well it is supported, with `Grade`. Show a grade only where she or the source states the study design; never infer one. Most claims carry none, which is what makes a grade a signal.
2. **Nothing without a source.** State nothing about her, her work or a study that does not trace to a source. Her publication list, webinars, a portrait, testimonials, client numbers and fees do not exist in the sources: do not invent them. Mark an absence in one true sentence (*"Termíny dalších webinářů připravuji."*), never with a placeholder or "coming soon".
3. **One voice, first person.** She speaks: "I", never "we", never a third-person biography. Headings are full-sentence claims in sentence case.
4. **Blue is the chrome; colour is information.** One accent does all the furniture. Petrol and violet appear only as topic identity, always beside the topic's name in text.
5. **Flat at rest.** No shadow, lift or motion until someone touches or scrolls. Whitespace separates; borders are a hairline.

## Affiliations: canonical and closed

She works at exactly these four, under their registered names (verified September 2026). Use the full name on first use, never translate the Czech clinic names inside Czech material, and never add a fifth.

| Czech (canonical) | English |
| --- | --- |
| Healthy Longevity Clinic | Healthy Longevity Clinic |
| Klinika geriatrie a interní medicíny 1. LF UK a VFN | Department of Geriatrics and Internal Medicine, First Faculty of Medicine, Charles University and General University Hospital in Prague |
| Klinika endokrinologie a metabolismu 1. LF UK a VFN | 3rd Department of Internal Medicine — Endocrinology and Metabolism, First Faculty of Medicine, Charles University and General University Hospital in Prague |
| EFAD – European Federation of the Associations of Dietitians | EFAD — European Federation of the Associations of Dietitians |

- It is **Dietitians**, not Dieticians, and **Associations** is plural after *the*.
- The endocrinology clinic keeps the Roman **III.** and the lowercase second half after the dash.
- Short forms only in a running footer or nav strip, and only as "Klinika geriatrie a interní medicíny VFN" and "III. interní klinika 1. LF UK a VFN".
- Never write "Geriatrická klinika" (the old name), ČANT, Institut moderní výživy, FitNut, Domov Sue Ryder or the VFN stroke unit.

**Positioning: range with depth.** Eight subjects, from women's health to palliative feeding, each backed by teaching, clinical practice or research: broad and clinical.

## Content fundamentals

- **Language.** Czech primary; the English version is a mirror that translates the argument, not the sentence (*"Starting or stopping nutritional support is rarely an easy decision."*, not a word-for-word rendering). British spelling in English.
- **Register.** Rigorous, plainspoken, unhurried. A claim carries its limits. No urgency, hype, scarcity or motivational register.
- **Headings are claims, not labels.** Yes: *"Prošla jsem všemi stupni zdravotní péče."*, *"Osm témat. Za každým něco skutečného."* No: "O mně", "Moje zkušenosti", "Proč já". A heading that is already a full sentence gets no eyebrow above it.
- **Casing.** Sentence case everywhere. Uppercase only in mono kickers, tracked `ls-kicker` (+0.13em).
- **Dashes.** Em dashes are banned in both languages. Use an en dash with spaces, or restructure. En dashes without spaces only in numeric ranges: `1,2–1,6 g/kg`, `Den 1–5`.
- **Czech typesetting.** Bind one-letter prepositions and conjunctions (k a i o s u v z) to the next word with `&nbsp;` (`v&nbsp;nemoci`). Decimal comma, thin space before % (`24&thinsp;%`), „low-high“ quotes. Numerals and nouns decline, so compute counts (`czCount`) instead of concatenating. Run the binder over rendered copy only, never inside `<script>`.
- **English typesetting.** Decimal point, `24%` closed up, “curly” quotes.
- **Measures.** Deck claim 2 lines, ≤70 characters CZ / ≤80 EN; statement 3 lines, ≤90 / ≤104; reel hook ≤7 words and ≤42 characters CZ / ≤8 and ≤48 EN. Over the limit the type steps down, never the column up; if it still does not fit, it is two boards.
- **No emoji, no unicode dingbats**, anywhere.
- **The commercial ask appears once**, after the proof, in the closing band. Never in the hero, never twice.

## Visual foundations

### Colour

Themes: `light` is the blue theme (default, and the only chrome theme), `t-petrol` and `t-violet` are topic themes, and the three `-dark` themes are dark punctuation bands. Components read the semantic tokens (`surface`, `ink`, `muted`, `soft`, `rule`, `accent`, `onacc`, `band`, `tint`), never a palette primitive such as `blue-accent`.

| Domain | Theme | Topics |
| --- | --- | --- |
| Clinical / medical | Blue | Medicína, Přehled |
| Longevity | Petrol | Dlouhověkost, Výživa, Fitness, Spánek, Lifestyle |
| Women's health | Violet | Ženské zdraví |

- Use `accent` (Clinical Blue `#1D5994` on the blue theme) for every piece of chrome: primary action, links, focus ring, selection, current nav state. Petrol and violet never touch site chrome and always sit beside the topic's name.
- Set reading text in `ink` on `surface`; supporting copy in `muted`; the least important text in `soft` **and italic**. Never make text paler to demote it. `soft` misses 4.5:1 on `band` in the blue and petrol themes: keep it on `surface` there.
- Separate sections with a `rule` hairline and air first; use `band` only where a section needs a stripe.
- A dark band (`surface-dark`, or a `-dark` theme) is punctuation: the connect strip, a photo scrim, the closing ask. At most twice a page. There is no dark mode and no `prefers-color-scheme` inversion.
- On an `accent` fill set text in `onacc` (white on light themes, the band colour on dark themes).
- Sand (`data-sand`) is the one second data colour, only when two curves must be told apart, and only on a dark board (1.45:1 on paper). Ranked categories use the `chart-series-1-a75/-a50/-a25` ladder.
- Verdicts use `signal-positive-*`, `signal-negative-*` and `signal-caution-*` (a warm/cool pair, never red/green), only where she states a verdict, always with the word printed.

### Type

Three faces, three jobs, no overlap (decided 14 Sep 2026):

- **Geist** 300/400/500/600 (`--font-display`) for display, claims, statements, headings and display figures.
- **Inter** 400/500/600 (`--font-body`) for body, lead, small and every affiliation line: anything read as running text.
- **Geist Mono** 400 for data and 500 for kickers (`--font-mono`) for every label, unit, citation, price, axis and tabular figure, with `font-variant-numeric: tabular-nums`.

Weight rules: size first, weight second, colour last. 300 only for display at ≥60px on light and ≥100px on dark; 400 for everything read; 500 for a role at a different size; 600 only for same-size emphasis (bold in body is `ink` at 600). Never 700, never faux bold, never Geist in a paragraph or Inter in a heading. Figures at display size are Geist 300, never mono.

Type styles by surface:

- **Web:** `display`, `h1`, `h2`, `lead`, `body` (19px/1.62 at a 64ch measure, `w-measure`), `small`, `kicker`, `meta`. Web-layer sizes are fluid: `w-claim` tops out at the deck's 74px and `w-claim-n` is the phone step.
- **Deck:** `deck-statement` 102px, `deck-claim` 74px (`deck-claim-beside` 58px in a BESIDE column), `deck-sub` 40px, `deck-lead` 34px, `deck-body` 32px (the floor), `deck-kicker` 22px, `deck-num` 24px, `deck-diagram-label` 30px. Claim-to-body ratio is 2.3×.
- **Reel:** `reel-hook` 150px, `reel-quote` 112px, `reel-mid` 92px, `reel-sub` 62px, `reel-heading` 56px, `reel-body` 48px (nothing below 46px), `reel-figure` 380px, `reel-label`, `reel-kicker`.

The `d-sub`, `d-lead`, `d-body` and `d-mono` spacing tokens predate the 13 Sep 2026 deck scale; use the deck type styles above.

### Spacing and layout

- **Web:** centred `shell` (1240px), `gut` gutters, sections paced at `w-sec` (clamp 88 to 164px) or `w-sec-tight`, blocks at `w-block`. Use the step scale `s-2` … `s-64` as collected; 18, 26 and 44 are real values, never snap them to an 8px grid.
- **Deck (1920×1080):** margins `deck-margin` 120, live width 1680. Only four vertical positions: kicker at y 140, claim at y 190, content zone from y 352 (576 tall, vertically centred), footer baseline y 962 for the reference and page number only. A board carries a claim or a statement, never both. Leave 60% of the board empty; short content steps *up* a size. Lists cap at five; never three boards of one family in a row.
- **Reel (1080×1920):** text inside x 80 to 960, y 280 to 1250; the frame is filled to all four edges. CTA mid-frame, never in the bottom 480px.

### Surfaces, shape and elevation

- Structure is a 1px `rule` hairline, never a card. Lists of things are rows on rules.
- **Nothing has a radius on the web.** Photographs, blocks, bands and the ask are square. `radius`, `radius-lg` and `radius-pill` are deprecated; `radius-mark` and `radius-mark-lg` remain for icon tiles.
- **Flat, always.** No shadow at rest or on hover. The mobile nav panel alone keeps `shadow-float`. `shadow-lift` and `lift` are deprecated.

### Motion

One curve, `ease`. Three entrances, most sections none: *rise* (hero words, 26px up, 90ms apart), *scale* (a photograph settles from 1.02 over `dur-photo`), *stagger* (grid rows 60ms apart). Nothing moves on hover except a mark: the arrow slides `nudge` (4px) over `dur-fast`, a hairline takes the accent, ink goes to accent. Arm every entrance by script behind `prefers-reduced-motion: no-preference`. No bounce, spring, parallax or animated counters.

### Imagery

Two modes, never mixed in one piece:

- **Public** (website, social, anything the public sees first): every photograph duotoned. On the web, blue at a 60% blend (`duo-shadow` `#0F3557` to `duo-highlight` `#8FC9F5`). On decks and reels the duotone follows the board theme: petrol `duo-deck-shadow` to `duo-deck-highlight`, violet `#401252` to `#D8A6F5`, applied as an SVG `feComponentTransfer`, never a CSS filter stack. Library: the `img` (site) and `photo` (deck) groups.
- **Clinical** (talks to clinicians, carers, students): natural colour, documentary subjects, from the `clinical` group. Rights are unverified: internal talks only until confirmed. Several files are marked do not use in its PROVENANCE.

In both: subject photography only (hands, food, a barbell, a clinical record). No portrait of her exists; never place a stock face under her name, and keep the Speaker layout's dashed frame until a real photograph is supplied. Never set text on a photograph without a real background-colour scrim: `scrim-photo` (.50) on Public photographs, raised to .62 or a solid panel on Clinical ones. A gradient alone is not a scrim.

### Accessibility

WCAG 2.2 AA on the web, handouts and social images; decks held to contrast and size. Text 4.5:1 on its ground (3:1 at headline scale); targets at least 44×44px; focus is a 2px `border-focus` outline at 3px offset, never removed; `lang` set on every page and language switch; colour never carries meaning alone.

## Brand marks

- **No logotype exists.** The wordmark is her name set in Geist 600. Do not draw a logo for her.
- The **handwritten Tv monogram** is an alpha PNG in several inks (`components/assets/sig-blue.png`, `sig-mint.png`, `sig-violet.png`). Use it only on the site's mission statement, deck covers, statements and closings: blue ink on paper, a light ink on a dark band.

## Iconography

- **`Icon`** is her own set and the whole vocabulary for meaning: eight topic marks (`prehled` `medicina` `zenske-zdravi` `dlouhovekost` `spanek` `fitness` `vyziva` `lifestyle`) and nine interface marks (`arrow` `phone` `mail` `instagram` `menu` `close` `building` `external` `plus`) on a 24px grid, 1.5px stroke, round caps and joins, `currentColor`.
- A topic mark always sits beside the topic's name in text. `arrow` navigates, `external` leaves the site; never swap them. An institution is the `building` mark, never a photograph.
- **`ClinicalIcon`** renders Lucide glyphs in the same hand, for illustration only (a stethoscope, a pill, a moon), from the curated list in `guidelines/ICONOGRAPHY.md`. It needs the pinned Lucide 0.544.0 UMD build. Never use it for the topic marks, never mix it with a filled set on one board, never draw a new glyph by hand.
- Sizes: 17 to 19 inline, 24 default, 26 in a 52px topic mark, 30 in a 64px page-hero mark, 48 to 96 on a board.

## Components

Twenty exports of the bundle, in the author's four groups plus icons. Each has a card with its props.

- **Core:** `Icon`, `Pill` (the one ask: a square accent block; `ghost`, `small` mono link, `external`, `block`), `Grade` (the evidence ladder).
- **Cards:** `TopicCard`, `TalkCard`, `InstitutionCard`, `WebinarCard`, `EntryCard`, `PublicationRow`, `FactPanel`. Despite the names, all render as rows on hairlines.
- **Sections:** `PageHero` (every inner page), `SplitHero` (homepage only), `ClaimBand`, `CtaClose`, `FaqList`, `ContactBlock` (mail routes, no form).
- **Navigation:** `Nav`, `ScaleStrip` (topic pages only), `Foot`.
- **Icons:** `ClinicalIcon`.

To set a topic theme or a dark band, put `data-theme="t-petrol"`, `"t-violet"` or a `-dark` theme id on the containing element. `WebinarCard` is factored out of the site's webinar block; the empty state is the page's job. The deck's 72 slide layouts and 28 reel frames are kept as showcase pages (the other component cards): copy their markup, keep the grid, replace the roles. Put no subject copy into a layout or template, roles only.

## Open decisions

Do not resolve these yourself; flag them when a task touches them.

- **Grade levels:** the site defines six (`meta` `rct` `kohorta` `konsenzus` `mechanismus` `nepodlozeno`), the deck five (no `konsenzus`, and `meta` reads *Metaanalýza*). The system ships six; she should pick one.
- **Speaker notes:** no board carries them yet; deliver notes as a separate file beside the deck.
- **PowerPoint:** there is no `.potx`. The system produces HTML boards and PDF; say so if asked for an editable deck.

## Quick reference

```
Ground       paper #FFFFFF (surface) · tinted band #F2F6FA (band)
Text         ink #0F2C47 · muted #4A6884 · soft #5C7890 + italic
Accent       #1D5994, all of the chrome
Topic        petrol #0B6A63 · violet #6D2A8C, beside the topic name only
Dark band    #0F3557 (surface-dark), at most twice a page
Type         Geist headings · Inter body · Geist Mono labels · no 700
Web body     19px / 1.62 · 64ch
Radius       0 on the web
Shadow       none; mobile nav panel only
Hover        a mark moves, nothing else
Deck         kicker y 140 · claim y 190 · zone 352 + 576 · footer y 962 · body ≥ 32px
Reel         safe x 80–960, y 280–1250 · hook ≤ 7 words
```

## Starters

In the standalone version, this design system came with 6 starter template(s). Each is a small project of its own, not a part of the design system the page shows; its files are kept in this artifact as they were, under its folder, for a later migration of its own.

- **Lecture deck – six boards, three palettes** — Cover, divider, three columns, big number, statement, closing – one board per family with role-named placeholders. Copy it, keep the grid, replace the roles. (3 files, entry `templates/lecture-deck/LectureDeck.dc.html`)
- **Paliativní péče — výživa u demence (CZ)** — Her 31-slide clinical talk re-set in the system: Blue for the clinical sections, Petrol for the case study, Clinical imagery mode. (3 files, entry `templates/paliativni-pece/PaliativniPece.dc.html`)
- **Palliative care – nutrition in dementia (EN)** — English mirror of the 31-slide clinical talk. Same layouts, same colour coding, Clinical imagery mode. (3 files, entry `templates/paliativni-pece-en/PalliativeCareEN.dc.html`)
- **Reel — timing sheet + animated preview** — A 9:16 reel as timed frames with role-named placeholders: hook ≤7 words, safe zone, centre CTA, caption template. Two structures (claim-led, number-led); no subject content. (3 files, entry `templates/reel/Reel.dc.html`)
- **Reel s fotografií — timing sheet + preview** — Photo-led 9:16 reel: duotoned photographs with real scrims, Ken Burns push, cuts to plain ground for figures. Role-named placeholders only; pick the palette per topic. (3 files, entry `templates/reel-zenske-zdravi/ReelZenskeZdravi.dc.html`)
- **Slide kit – 26 compositions, any palette** — Content-free 1920×1080 layouts across all eight families. Tweaks: palette, imagery mode, evidence grade, footer scale, layout labels. Edit placeholder text in place. (3 files, entry `templates/slide-kit/SlideKit.dc.html`)

## Migrated from a legacy design system

This system was carried over from the standalone version on 2026-09-17. The part of this README the author wrote predates the move, so any file names in it are the old ones. Where things are now:

- `styles.css`, `tokens/fonts.css`, `tokens/colors.css`, `tokens/typography.css`, `tokens/spacing.css`, `tokens/motion.css`, … and 6 more (the global stylesheets) → `project/components/bundle.css`, with the token declarations moved to `project/tokens.json` (`project/tokens.css` is generated from them)
- `_ds_bundle.js` → `project/components/bundle.js`
- showcase pages, each kept whole as one component’s preview (a page of examples, not an export of the bundle): `components/cards/cards.card.html` → `project/components/Cards/preview.html`; `components/core/core.card.html` → `project/components/Core/preview.html`; `components/icons/clinical-icons.card.html` → `project/components/ClinicalIcons/preview.html`; `components/navigation/navigation.card.html` → `project/components/Navigation/preview.html`; `components/sections/sections-furniture.card.html` → `project/components/SectionsFurniture/preview.html`; `components/sections/sections.card.html` → `project/components/Sections/preview.html`; `guidelines/chart-colors.card.html` → `project/components/ChartColors/preview.html`; `guidelines/chart-line.card.html` → `project/components/ChartLine/preview.html`; … and 103 more
- the migration report, which lists what did not come across: `project/assets/notes/MIGRATION-REPORT.md`
