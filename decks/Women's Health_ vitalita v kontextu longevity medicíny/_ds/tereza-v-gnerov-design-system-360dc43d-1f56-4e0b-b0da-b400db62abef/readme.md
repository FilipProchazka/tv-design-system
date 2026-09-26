# Tereza Vágnerová — Design System

Mgr. Ing. Tereza Vágnerová, Ph.D. is a Czech **clinical nutrition therapist** and **odborná asistentka** (assistant professor) at the First Faculty of Medicine, Charles University (1. LF UK). She teaches nutrition in geriatrics and gerontology in Czech and English and researches sarcopenia and sarcopenic obesity.

She is not a brand in the commercial sense. She is one person whose authority is spread across four organisations that each publish a fragment. The design system exists so that everything she puts her name to — a website, a lecture deck, an Instagram reel — reads as one hand and states its evidence.

### Affiliations — canonical and closed

She works at **exactly these four**, under their official registered names. Verified September 2026 against lf1.cuni.cz, vfn.cz, efad.org and healthylongevityclinic.cz. Never abbreviate a name on first use, never translate the Czech clinic names inside Czech material, and never add a fifth.

| Czech (canonical) | English |
| --- | --- |
| Healthy Longevity Clinic | Healthy Longevity Clinic |
| Klinika geriatrie a interní medicíny 1. LF UK a VFN | Department of Geriatrics and Internal Medicine, First Faculty of Medicine, Charles University and General University Hospital in Prague |
| Klinika endokrinologie a metabolismu 1. LF UK a VFN | 3rd Department of Internal Medicine — Endocrinology and Metabolism, First Faculty of Medicine, Charles University and General University Hospital in Prague |
| EFAD – European Federation of the Associations of Dietitians | EFAD — European Federation of the Associations of Dietitians |

Details that are wrong more often than they are right: it is **Dietitians**, not Dieticians, and **Associations** is plural with a preceding *the*. The geriatrics clinic was renamed — "Geriatrická klinika" is the old name and must not appear. The endocrinology clinic keeps the Roman **III.** and the lowercase second half after the dash. Short forms are allowed only in a running footer or nav strip, and only as "Klinika geriatrie a interní medicíny VFN" and "III. interní klinika 1. LF UK a VFN".

**Placement: once per artifact, at the end.** The four names appear in exactly
one place in any piece, and that place is the closing: the last slide of a deck,
the footer of a page, the final frame of a reel. Never on a cover, a title slide
or a hero. Four registered organisation names set small under a title read as a
letterhead, compete with the one line the audience is there for, and are not
legible from the back of a theatre anyway. On the cover her name alone carries
the authority; the affiliations answer "who was that?" after the talk, which is
where they earn their place. A running footer or nav strip may carry the two
allowed short forms instead.

Superseded and not to be reintroduced: ČANT, Institut moderní výživy, FitNut, Domov Sue Ryder, and the VFN stroke unit. Earlier drafts of this system listed all five.

**Positioning: range with depth.** Eight subjects, from women's health to palliative feeding, each backed by teaching, clinical practice or research. A neighbouring Czech nutrition profile is either narrow and deep or broad and shallow; she is broad and clinical.

---

## Sources

Everything here is lifted from two codebases the user attached read-only. No value was invented, rounded, or recalled from a framework default.

| Source | What it is | Path given |
| --- | --- | --- |
| `tv-web` | Static Astro marketing/record site, Czech primary + one English page. The component library, the palette decision and the tone live here. | `tv-web/` (local folder) |
| `tv-deck-template` | Lecture-deck system: 72 slide layouts at 1920×1080 in three palettes, plus 28 Instagram reel frames at 1080×1920. | `tv-deck-template/` (local folder) |

Key files read, for a reader who has access:

- `tv-web/DESIGN.md` — the site's own design spec (colours, type, elevation, do/don't)
- `tv-web/PRODUCT.md` — users, positioning, brand commitments, what must not be fabricated
- `tv-web/src/styles/{tokens,type,base}.css` — the real CSS this system copies
- `tv-web/src/components/*.astro` — the 17-component library
- `tv-web/src/content/temata/*.md` — the eight topics and their theme assignments
- `tv-web/src/lib/site.ts` — contact details, institutions, navigation
- `tv-deck-template/README.md` — the deck's layout catalogue and composition rules
- `tv-deck-template/tokens.json` — deck grid, scales, evidence grades, themes
- `tv-deck-template/canvas/*.dc.html` — the 100 rendered artboards

The site was originally composed from a healthcare template (<https://astra-template-plum.vercel.app/>, pinned by her 2026-09-05) — its section rhythm, rounded cards, pill buttons and four-column footer. **That inheritance was removed on 14 September 2026.** The website now runs on the deck's own grammar: claim-as-sentence headings, tracked mono kickers, hairline rows instead of cards, square corners, marks-only hover, and a dark band only as punctuation. The rules are in `tokens/web.css` and the card `guidelines/web-grammar`; the four-column footer is the one thing kept from the template.

**No logotype exists.** She has no mark. The wordmark is her name set in Geist 600, and nothing here draws one for her. What does exist is a **handwritten `Tv` monogram**, extracted from her source PDF as an alpha PNG in four inks (`assets/sig-blue.png`, `sig-mint`, `sig-violet`, `sig-sand`, `sig-ink`). It appears on the site's mission statement and on deck covers, statements and closings only.

**No photograph of her exists** in either source. Every photograph in this system is subject photography, never a portrait of her. The deck's `Speaker` layout still carries a stock stand-in and needs a real photograph before use.

---

## Content fundamentals

**Language.** Czech primary; one English page for European colleagues. Czech typography is enforced in code (`cz()` in tv-web): one-letter prepositions bind to the following word with a non-breaking space (`v&nbsp;nemoci`, `a&nbsp;pohyb`).

**Person.** First person, always. *"Nedělám jedno téma. Dělám osm."* — "I don't do one subject. I do eight." Never third-person biography, never "we".

**Register.** Rigorous, plainspoken, unhurried. A claim comes with its limits attached. Never urgency, hype, scarcity, or motivational register. Nothing on the site asks the reader to feel anything.

**Headings are full-sentence claims, not topic labels.**

- Yes: *"Prošla jsem všemi stupni zdravotní péče."*
- Yes: *"Osm témat. Za každým něco skutečného."*
- Yes: *"Šest institucí, které to mohou potvrdit."*
- No: "O mně", "Moje zkušenosti", "Proč já"

On slides the same rule, harder: *"Menstruace je zdravý projev hormonální rovnováhy"*, not *"Menstruace"*. **Two lines maximum** for a slide claim; if it will not fit, it is two slides.

**A heading that is already a full sentence gets no eyebrow above it.** The build removed exactly this duplication in two places (the About section, the closing CTA) — saying the same thing twice in two type sizes.

**Casing.** Sentence case everywhere. Uppercase only in mono eyebrows and kickers, where it is tracked +0.13em. Never all-caps headlines.

**Em dashes are banned in all content.** Czech takes an en dash with spaces, or no dash at all. En dashes survive only in numeric ranges: `1,2–1,6 g/kg`, `Den 1–5`. Czech decimals use a comma.

**Numbers decline.** `czCount(2, 'přednáška', 'přednášky', 'přednášek')` — the numeral and the noun both inflect, so counts are computed, never concatenated. Counting the collection rather than asserting a number means adding a file changes the sentence and never leaves it wrong.

**No emoji. Anywhere.** Not in copy, not in UI, not on slides, not in reels. The icon set is the whole glyph vocabulary.

**Absence is marked, not hidden.** The webinar and publication collections are empty at launch by design. The page that owns saying so says it in one true sentence — *"Termíny dalších webinářů připravuji."* — and never ships a "coming soon" card, an empty price grid, or a placeholder row. The deck's disclosure slide carries a deliberate italic blank for her to fill in, because fabricating a conflict-of-interest declaration would be worse than leaving the slot visible.

**Nothing may be stated about her that does not trace to a source.** Absent and must not be fabricated: her publication list, any webinar, a portrait, testimonials, client numbers, fees.

**The record does the selling.** The commercial ask appears once per page, after the proof, in the closing band — never in the hero, never twice.

---

## Visual foundations

### Colour

One chrome accent doing all the page-furniture work, plus two colours that only ever appear as topic identity.

- **Clinical Blue `#1D5994`** — the site's one chrome accent. Buttons, links, focus rings, selection, current-page nav state, the utility bar.
- **Petrol `#0B6A63`** and **Violet `#6D2A8C`** — topic colour only. They never touch site chrome. A topic colour is always paired with the topic's name in text; colour is never the sole carrier of meaning.
- **Paper `#FFFFFF`** is the reading ground. **Blue tint `#F2F6FA`** is the section band, alternating with paper down the page.
- **Sand `#F0D2A2`** is the one second data colour, used only where two curves on one chart have to be told apart. Never a fill behind content.

Every theme has a light and a dark mode, and every `muted`/`soft`/`accent` value clears 4.5:1 on its own surface, so a theme swap cannot quietly break legibility. **`.dark` is punctuation, not a mode** — the utility bar, a photo scrim, a closing CTA band. There is no dark-mode toggle and no `prefers-color-scheme` inversion.

**Colour is coded by topic** (decided 2026-09-13, supersedes the deck source's original coding):

| Domain | Theme | Topics |
| --- | --- | --- |
| Clinical / medical | **Blue** | Medicína, Přehled |
| Longevity | **Petrol** | Dlouhověkost, Výživa, Fitness, Spánek, Lifestyle |
| Women's health | **Violet** | Ženské zdraví |

Blue doubles as the site's chrome, so the clinical domain and the brand share a colour by design. Across a mixed talk the audience learns the coding; for a single-subject talk, pick one theme and set it on every slide.

### Type

Three faces, three jobs, no overlap. **Geist** 300/400/500/600 for display, claims, statements, headings and display figures. **Inter** 400/500/600 for body, lead, small and every affiliation line: anything read as running text. **Geist Mono** 400 (data) and 500 (kicker) for every label, kicker, unit, citation, price, axis and tabular figure. Same-size emphasis skips a weight (400 → 600); the rules are in `guidelines/TYPESETTING.md §4`. Figures at display size are Geist 300, never mono.

Why these three (14 Sep 2026): Geist draws Czech diacritics correctly at display size, where the earlier faces smudged the háček-apostrophe on **ď** and **ť** and thinned the carons on **ě š č ř ž** at 74–100px. Inter is the better reading face at 19px. Geist Mono keeps the mono in the same family as the headings, so a kicker shares the claim's skeleton. All three are self-hosted from `assets/fonts/`.

**The Evidence-Is-Mono rule.** Anything that is data, a label, or a fact rather than narration — eyebrows, meta lines, prices, citations, the evidence ladder, scale numerals — is Geist Mono with tabular numerals. Mono is not a general-purpose "technical" voice: affiliations and running text are Inter.

Body runs 19px/1.62 at a 64ch measure, deliberately generous for older eyes on a hospital monitor. On slides the body floor is **26px** and the claim-to-body ratio **2.8×**; below that, content reads as fuzz from the back of a lecture theatre. One exception, and it is named: a **reference board** of five or more parallel items may drop to **24px** body and **19px** mono, because it is read as a table and repeated in the handout. A board of running prose never may. Bold inside body copy is ink at 600 and holds the point of the sentence, so the muted remainder can be skimmed. **Never signal hierarchy with contrast alone** — `soft` clears 4.6:1 and carries subordination with *italic* instead of pallor.

### Spacing and layout

Centred 1240px shell, 24px gutters (20px under 768px). Sections pace at `clamp(88px, 9.6vw, 164px)` (`--w-sec`), `clamp(56px, 6vw, 96px)` for a tight stack. Sections are separated by a 1px hairline and by air, not by a change of ground; a dark band is punctuation and appears at most twice a page.

The step scale (`--s-2` … `--s-64`) is collected from real usage, not an invented 8px grid. 18, 26, 34 and 44 are in it because her surfaces use them; snapping them to 16/24/32/40 would visibly change the page.

**The claim measure.** A claim is two lines (74px, 1400px column, ≤70 characters); a statement is three (102px, 1560px, ≤90). In a BESIDE column (760–820px) the claim steps down to 58px. Over the limit the type steps down (claim 60px, statement 84px), never the column up. If it still will not fit, it is two slides.

The deck is a fixed 1920×1080 grid: margins 120 left and right, live width 1680. **Kicker at y 140, claim at y 190** so titles never jump; content sits in a fixed zone `top 352, height 576` and is vertically centred; the footer row at **y 962** carries the reference and page number only. Body floor 32px. Short content steps *up* a type size rather than sitting in more air — that is the rule that stops layouts looking unfinished.

### Surfaces, elevation and shape

Paper is the ground; structure is a 1px hairline in the theme's rule colour, never a card. **Radius is 0 on the web** — a board has no rounded corners and neither does a page: photographs, blocks, the ask and bands are square.

**Flat, always.** No shadow on any surface at rest or on hover. The one exception is the mobile nav panel, which has genuinely left the page and keeps `--lift-strong` (ink-tinted, never grey). Nothing else takes a shadow. `.card`, `.pill`, `.photo` radius and `--lift` remain in `tokens/base.css` as deprecated until 1.0.0 and are not to be reintroduced.

### Motion

One easing curve, `cubic-bezier(.22,1,.36,1)`. Three entrances, each doing a different job, and most sections with none at all:

- **rise** — the hero's words, 26px up, 90ms apart
- **scale** — a photograph settles from 1.02 into its frame, as a photograph does
- **stagger** — a grid's rows arrive left to right, 60ms apart

**Nothing moves on hover except a mark.** The arrow slides 4px, a mark's hairline takes the accent, ink goes to accent. No transform on a surface, no lift, no photo scale. Press states are not separately styled; focus is a 2px accent outline at 3px offset. **All entrance motion is armed by script and sits behind `prefers-reduced-motion: no-preference`** — the page renders fully formed with motion off. No bounces, no springs, no parallax, no animated counters.

### Imagery

Every photograph is pre-tinted to the site's **blue duotone** (shadow `#0F3557`, highlight `#8FC9F5`) at a deliberately incomplete **60% blend**, so the subject still reads as a photograph and photography sits in the same colour family as the dark bands beside it. Never the topic colour. On the deck, photographs on petrol pass through an SVG `feComponentTransfer` duotone (shadow `#062020`, highlight `#73BFB4`) rather than a stack of CSS filters, so it reproduces exactly and survives export.

Subject photography only: hands, food, a barbell, a clinical record, an archive photograph. No portraits of her, no stock smiling clinicians, no lifestyle flat-lay. Photographs have to earn their place — the deck's evidence slide has no photograph because a citation should own its slide.

**Never text on a photograph without a real background-colour scrim.** A gradient alone computes as a transparent background and under-measures on contrast tools even when it looks legible. Scrims run 0.94–0.97 opacity where the type sits on full-bleed deck covers, and `rgba(15,53,87,.50)` plus a bottom gradient on the web claim band.

### Transparency and blur

Neither is used. There is no frosted glass anywhere in either source. The only transparency in the system is scrim alpha over photographs and the four-step accent-opacity tint ladders in deck diagrams.

---

## Iconography

**One authored set, and it is the whole vocabulary.** `components/core/Icon.jsx` is the site's complete icon system, copied verbatim from `tv-web`'s `Icon.astro`: eight topic marks and nine interface marks on a single 24px grid at **1.5px stroke, round caps and joins**, drawn so seventeen glyphs read as one hand.

Topic marks: `prehled` (the evidence pyramid), `medicina` (a clinical record with the observation line through it), `zenske-zdravi` (the cycle with its phase mark), `dlouhovekost` (an hourglass, sand already through), `spanek` (a crescent), `fitness` (a loaded bar), `vyziva` (a plate divided the way a meal is planned), `lifestyle` (a week, and the habit that held).

Interface marks: `arrow` `phone` `mail` `instagram` `menu` `close` `building` `external` `plus`.

Rules:

- Colour is `currentColor`. A topic mark takes its theme accent from the card it sits in.
- A mark never carries meaning alone — the topic's name is always beside it in text.
- `external` marks a link that leaves; `arrow` marks one that navigates. They are not interchangeable.
- An institution is drawn as a `building`, not shown as a photograph of one.
- **No icon font, no sprite sheet, no CDN set.** Do not substitute Lucide, Heroicons, Feather, or any lookalike — the topic marks have no equivalent in any library and mixing hands is immediately visible.
- **No emoji, no unicode dingbats** as icons, anywhere.
- The site's `favicon.svg` is copied to `assets/favicon.svg`.

Sizes in use: 17–19 inline with text, 20 in a pill, 22 in the accordion, 24 default, 26 in a 52px topic mark, 30 in a 64px page-hero mark.

---

## Components

Twenty. Seventeen are exactly what `tv-web` defines — no primitive was added because a design system "usually" has one.

**`components/core/`**

- **Icon** — the 24px set, eight topic marks and nine interface marks
- **Pill** — the one button shape; primary, ghost, small, external, block
- **Grade** — the five-level evidence ladder

**`components/cards/`**

- **TopicCard** — one of the eight subjects, on its own theme tint
- **TalkCard** — a bookable talk: photo, mono meta, abstract
- **InstitutionCard** — an organisation that corroborates the record; always links out
- **WebinarCard** — a webinar for sale, price at figure scale in mono
- **EntryCard** — a listing row; a linked one and an inert one never look alike
- **PublicationRow** — year, title, byline, optional grade
- **FactPanel** — the sticky booking facts and the one Stripe button

**`components/sections/`**

- **PageHero** — the opening band every inner page shares
- **SplitHero** — the homepage opening: the deck's SPLIT board as a page
- **ClaimBand** — one sentence over a duotoned photograph, on a real scrim
- **CtaClose** — the one commercial ask, in the page's own theme
- **FaqList** — native `<details>`, first answer open
- **ContactBlock** — three mail routes to one inbox; no form anywhere

**`components/navigation/`**

- **Nav** — one hairline strip: wordmark, tracked mono links, a stacked panel under 1024px
- **ScaleStrip** — the deck's footer scale as a page element; topic pages only
- **Foot** — blue connect strip over the four-column footer

### Intentional additions

- **WebinarCard** is factored out of `tv-web`'s `WebinarBlock.astro`, which held both the card and its empty state inline. The card is reusable; the empty state is a page's job, not a component's.

### Known divergence to resolve

`Grade`'s levels differ between her two surfaces: the site defines six (`meta` `rct` `kohorta` `konsenzus` `mechanismus` `nepodlozeno`), the deck five (no `konsenzus`, and `meta` reads *Metaanalýza* rather than *Metaanalýza a RCT*). This system ships the site's six. **She should pick one.**

---

## Governance

- **Version:** 0.9.0 — see `CHANGELOG.md`. 0.x until the first talk ships on this system, then semver.
- **Owner:** Tereza Vágnerová; the design agent maintains on request.
- **Principles:** `guidelines/PRINCIPLES.md` — five, in priority order.
- **Typesetting:** `guidelines/TYPESETTING.md` — Czech and English are set differently; the English deck is a mirror, not a translation. Per-language measures, punctuation, bonds, and the four vertical positions on a board.
- **Accessibility:** `guidelines/ACCESSIBILITY.md` — WCAG 2.2 AA on web; slides held to contrast and size.
- **Rendering:** `guidelines/RENDERING.md` — `text-wrap: balance`/`pretty` and two flex sizing patterns hang the renderer. Set a measure instead. Read before debugging a page that will not paint.
- **Export:** `guidelines/EXPORT.md` — what a PowerPoint capture cannot do, and the prepared-copy rule. Read before exporting any board.
- **Data visualisation:** `guidelines/DATAVIZ.md`.
- **Imagery:** `guidelines/IMAGERY.md` — two modes, Public (duotone) and Clinical (natural), never mixed in one piece.
- **Tokens for tools:** `tokens/tokens.md` (readable), `tokens/tokens.json` (W3C DTCG).
- **Contribution path:** propose a semantic token only if no existing role covers it; a new component only if a source defines it; a new layout only from the deck catalogue.

## Index

```
styles.css              the one file a consumer links (imports only)
thumbnail.html          the system's homepage tile
readme.md               this file
CHANGELOG.md            versions and decisions
SKILL.md                Agent Skills front-matter wrapper

tokens/
  fonts.css             @font-face for the three faces, self-hosted woff2
  colors.css            three palettes, light and dark, plus semantic aliases
  typography.css        families, the web/deck/reel scales, the type roles
  spacing.css           step scale, shell, rhythm, radii, elevation, surfaces
  motion.css            the one easing curve and the duration set
  dataviz.css           chart colour ladder and strokes
  base.css              reading ground and the shared surface classes
  web.css               the web layer: the deck's grammar made fluid
  components.css        interaction states the React components need
  tokens.md             human-readable token roles, for AI tools
  tokens.json           W3C DTCG export

components/             17 components in four groups (listed above)
guidelines/             28 foundation cards + PRINCIPLES, ACCESSIBILITY,
                        DATAVIZ, EXPORT, IMAGERY, RESEARCH
templates/
  lecture-deck/         six-slide 1920×1080 talk deck, ready to copy
ui_kits/web/            the site, recreated as click-through screens
slides/                 72 deck layouts; the board alone — each card's usage
                        note (use when / roles / rules) lives in its notes field
reels/                  28 reel frames, same
assets/
  fonts/                12 woff2 files: Geist 300–600, Inter 400–600, Geist Mono 400/500
  img/                  the site's eight duotoned photographs
  photo/                the deck's seventeen photographs (Public mode)
  clinical/             32 natural-colour photographs from the palliative
                        deck (Clinical mode) + PROVENANCE.md
  sig-*.png             the handwritten Tv monogram, four inks
  favicon.svg
reference/              screenshots of the real site, for comparison only
```

### Templates

- **Lecture deck** (`templates/lecture-deck/`) — six slides covering the deck's main families: cover (FULL), section divider (OPEN), three columns (STACK) with an evidence grade, big number (BESIDE), statement (OPEN), closing (FULL). Three palettes across six boards, so a copy already demonstrates the topic colour-coding. The full catalogue is 72 layouts — see `tv-deck-template/README.md` for the rest.

---

## Do's and don'ts

**Do**

- Keep blue as the only chrome accent; introduce petrol or violet exclusively through topic cards and topic pages.
- Pair every topic-colour usage with the topic's name in text.
- Set every kicker, meta line, price, citation and the evidence ladder in Geist Mono with tabular numerals; body, lead and affiliations in Inter; claims and headings in Geist.
- Run photographs through the blue duotone at the 60% blend, never the topic colour.
- Write headings as full sentences where the content supports it, and drop the eyebrow above one that already is.
- Keep all entrance motion behind `prefers-reduced-motion: no-preference`.
- Mark an absence in one true sentence rather than shipping a placeholder.

**Don't**

- Don't put a shadow, a radius or a hover transform on any web surface; the mobile nav panel is the only shadow.
- Don't let petrol or violet leak into site chrome.
- Don't put an eyebrow above a heading that already reads as a full-sentence claim.
- Don't overlay text on a photograph without a solid-colour scrim under any gradient.
- Don't treat `.dark` as a colour-scheme toggle.
- Don't use em dashes, emoji, or any icon that is not in the authored set.
- Don't set 700 or faux bold in any face; emphasis at the same size is 600, and never make text paler to demote it.
- Don't set Geist in a paragraph or Inter in a heading; the three faces do not overlap.
- Don't put subject copy into a layout or template — roles only ("Tvrzení jako celá věta"). Content lives in a talk, not in the system.
- Don't show a stock face under her name. The portrait slot stays empty until a real photograph exists.
- Don't state anything about her that does not trace to a source.

---

## Quick reference

```
Background   #FFFFFF paper · #F2F6FA tinted band
Surface      #FFFFFF card on a 1px #AFC4D6 hairline
Text         #0F2C47 ink · #4A6884 muted
Accent       #1D5994 (chrome, all of it)
Topic        #0B6A63 petrol · #6D2A8C violet (information only)
Dark band    #0F3557
Type         Geist 300/400/500/600 headings · Inter 400/500/600 body · Geist Mono 400/500 labels · slide body ≥ 26px (24px reference boards)
Body         19px / 1.62 · 64ch
Sections     clamp(88px, 9.6vw, 164px)
Radius       0 on the web (square, as a board) · deck boards square
Shadow       none on any surface; mobile nav panel only
Hover        a mark moves, nothing else
Motion       cubic-bezier(.22,1,.36,1)
Deck         kicker y 140 · claim y 190 · zone 352+576 · footer y 962
```

## Components

ClaimBand, ContactBlock, CtaClose, EntryCard, FaqList, FactPanel, Foot, Grade, Icon, ClinicalIcon, InstitutionCard, Nav, PageHero, Pill, PublicationRow, ScaleStrip, SplitHero, TalkCard, TopicCard, WebinarCard.
