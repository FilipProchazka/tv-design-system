# Tereza Vágnerová — Design System

Mgr. Ing. Tereza Vágnerová, Ph.D. is a Czech **clinical nutrition therapist**
and **odborná asistentka** (assistant professor) at the First Faculty of
Medicine, Charles University (1. LF UK). She teaches nutrition in geriatrics and
gerontology in Czech and English, works on the geriatric clinic and the stroke
unit's early-rehabilitation ward at VFN Prague, researches sarcopenia and
sarcopenic obesity, and is a founding member of the Czech Association of
Nutritional Therapists (ČANT).

She is not a brand in the commercial sense. She is one person whose authority is
currently scattered across six organisations that each publish a fragment. The
design system exists so that everything she puts her name to — a website, a
lecture deck, an Instagram reel — reads as one hand and states its evidence.

**Positioning: range with depth.** Eight subjects, from women's health to
palliative feeding, each backed by teaching, clinical practice or research. A
neighbouring Czech nutrition profile is either narrow and deep or broad and
shallow; she is broad and clinical.

---

## Sources

Everything here is lifted from two codebases the user attached read-only. No
value was invented, rounded, or recalled from a framework default.

| Source | What it is | Path given |
|---|---|---|
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

The site's own binding layout reference (pinned by her, 2026-09-05) is
<https://astra-template-plum.vercel.app/>, a healthcare template — its section
rhythm, rounded cards, pill buttons and four-column footer are the site's
composition, translated into her palette and typefaces.

**No logotype exists.** She has no mark. The wordmark is her name set in
Manrope 600, and nothing here draws one for her. What does exist is a
**handwritten `Tv` monogram**, extracted from her source PDF as an alpha PNG in
four inks (`assets/sig-blue.png`, `sig-mint`, `sig-violet`, `sig-sand`,
`sig-ink`). It appears on the site's mission statement and on deck covers,
statements and closings only.

**No photograph of her exists** in either source. Every photograph in this
system is subject photography, never a portrait of her. The deck's `Speaker`
layout still carries a stock stand-in and needs a real photograph before use.

---

## Content fundamentals

**Language.** Czech primary; one English page for European colleagues. Czech
typography is enforced in code (`cz()` in tv-web): one-letter prepositions bind
to the following word with a non-breaking space (`v&nbsp;nemoci`,
`a&nbsp;pohyb`).

**Person.** First person, always. *"Nedělám jedno téma. Dělám osm."* — "I don't
do one subject. I do eight." Never third-person biography, never "we".

**Register.** Rigorous, plainspoken, unhurried. A claim comes with its limits
attached. Never urgency, hype, scarcity, or motivational register. Nothing on
the site asks the reader to feel anything.

**Headings are full-sentence claims, not topic labels.**
- Yes: *"Prošla jsem všemi stupni zdravotní péče."*
- Yes: *"Osm témat. Za každým něco skutečného."*
- Yes: *"Šest institucí, které to mohou potvrdit."*
- No: "O mně", "Moje zkušenosti", "Proč já"

On slides the same rule, harder: *"Menstruace je zdravý projev hormonální
rovnováhy"*, not *"Menstruace"*. **Two lines maximum** for a slide claim; if it
will not fit, it is two slides.

**A heading that is already a full sentence gets no eyebrow above it.** The
build removed exactly this duplication in two places (the About section, the
closing CTA) — saying the same thing twice in two type sizes.

**Casing.** Sentence case everywhere. Uppercase only in mono eyebrows and
kickers, where it is tracked +0.13em. Never all-caps headlines.

**Em dashes are banned in all content.** Czech takes an en dash with spaces, or
no dash at all. En dashes survive only in numeric ranges: `1,2–1,6 g/kg`,
`Den 1–5`. Czech decimals use a comma.

**Numbers decline.** `czCount(2, 'přednáška', 'přednášky', 'přednášek')` — the
numeral and the noun both inflect, so counts are computed, never concatenated.
Counting the collection rather than asserting a number means adding a file
changes the sentence and never leaves it wrong.

**No emoji. Anywhere.** Not in copy, not in UI, not on slides, not in reels.
The icon set is the whole glyph vocabulary.

**Absence is marked, not hidden.** The webinar and publication collections are
empty at launch by design. The page that owns saying so says it in one true
sentence — *"Termíny dalších webinářů připravuji."* — and never ships a
"coming soon" card, an empty price grid, or a placeholder row. The deck's
disclosure slide carries a deliberate italic blank for her to fill in, because
fabricating a conflict-of-interest declaration would be worse than leaving the
slot visible.

**Nothing may be stated about her that does not trace to a source.** Absent and
must not be fabricated: her publication list, any webinar, a portrait,
testimonials, client numbers, fees.

**The record does the selling.** The commercial ask appears once per page,
after the proof, in the closing band — never in the hero, never twice.

---

## Visual foundations

### Colour

One chrome accent doing all the page-furniture work, plus two colours that only
ever appear as topic identity.

- **Clinical Blue `#1D5994`** — the site's one chrome accent. Buttons, links,
  focus rings, selection, current-page nav state, the utility bar.
- **Petrol `#0B6A63`** and **Violet `#6D2A8C`** — topic colour only. They never
  touch site chrome. A topic colour is always paired with the topic's name in
  text; colour is never the sole carrier of meaning.
- **Paper `#FFFFFF`** is the reading ground. **Blue tint `#F2F6FA`** is the
  section band, alternating with paper down the page.
- **Sand `#F0D2A2`** is the one second data colour, used only where two curves
  on one chart have to be told apart. Never a fill behind content.

Every theme has a light and a dark mode, and every `muted`/`soft`/`accent`
value clears 4.5:1 on its own surface, so a theme swap cannot quietly break
legibility. **`.dark` is punctuation, not a mode** — the utility bar, a photo
scrim, a closing CTA band. There is no dark-mode toggle and no
`prefers-color-scheme` inversion.

**Colour is coded by topic on the deck**: violet is women's health and
longevity, blue is sleep/fitness/nutrition, petrol is overview/lifestyle/
clinical medicine. Across a mixed talk the audience learns the coding; for a
single-subject talk, pick one theme and set it on every slide.

### Type

**Manrope** display/headings, **Inter** reading, **JetBrains Mono** labels and
numbers. Never bold Manrope — 400 and 500 carry every heading; 300 carries the
airy statement slides; 600 is the wordmark only.

The display face was Epilogue and was changed because it draws Czech badly: the
háček-apostrophe on **ď** and **ť** crowds the ascender until it reads as a
smudge, and the carons on **ě š č ř ž** thin out at 74–100px. Manrope keeps the
narrow geometric skeleton and draws the diacritics with proper clearance.

**The Evidence-Is-Mono rule.** Anything that is data, a label, or a fact rather
than narration — eyebrows, meta lines, prices, citations, the evidence ladder,
scale numerals — is JetBrains Mono with tabular numerals. Mono is not a
general-purpose "technical" voice: affiliations and running text are Inter.

Body runs 18px/1.68 at a 68ch measure, deliberately generous for older eyes on
a hospital monitor. On slides the claim-to-body ratio is **2.8×**, which is
what makes a claim carry a lecture theatre. Bold inside body copy is ink at
600 and holds the point of the sentence, so the muted remainder can be skimmed.
**Never signal hierarchy with contrast alone** — `soft` clears 4.6:1 and
carries subordination with *italic* instead of pallor.

### Spacing and layout

Centred 1240px shell, 24px gutters (20px under 768px). Sections pace at a fluid
`clamp(64px, 7.4vw, 112px)`, or 62% of that for tighter stacks. Grids share a
24px gap. Section bands alternate tinted and white paper down the page; on a
topic page, whose own surface is already tinted, the rhythm inverts and a white
sheet becomes the standout.

The step scale (`--s-2` … `--s-64`) is collected from real usage, not an
invented 8px grid. 18, 26, 34 and 44 are in it because her surfaces use them;
snapping them to 16/24/32/40 would visibly change the page.

The deck is a fixed 1920×1080 grid: margins 120 left and right, live width
1680, **claim always starts at y=140** so titles never jump, content sits in a
fixed zone `top 352, height 576` and is vertically centred. Short content steps
*up* a type size rather than sitting in more air — that is the rule that stops
layouts looking unfinished.

### Surfaces, elevation and shape

Four surface levels: paper → tinted band → white card → dark punctuation. A
colour accent never sits directly on the page ground without one of them under
it.

**Flat at rest, lifted only on interaction.** Cards, pills and the accordion
sit on a 1px hairline with no shadow until hovered or opened. The shadow is
soft and diffuse, tinted from the page's own ink `rgba(15,44,71,.08)`, never
neutral grey and never a hard offset. `--lift` is a surface responding in
place; `--lift-strong` is a surface that has actually left the page (the mobile
nav panel). Nothing else takes it.

16px radius is the card standard, 24px for photographs and the closing CTA
band, 999px (true pill) for every button. Icon marks sit in a 14–18px-radius
square — a deliberate step between the card radius and a circle. Borders are a
single 1px hairline in the theme's rule colour; a card goes borderless-to-
accent-bordered only on hover, alongside the lift.

### Motion

One easing curve, `cubic-bezier(.22,1,.36,1)`. Three entrances, each doing a
different job, and most sections with none at all:

- **rise** — the hero's words, 26px up, 90ms apart
- **scale** — a photograph settles from 1.02 into its frame, as a photograph does
- **stagger** — a grid's cards arrive left to right, 60ms apart

Hover is a 4px nudge on an arrow, a −2px lift on a pill, a −4px lift on a card,
a mark inverting to accent-filled, a photo scaling 1.04 over 0.6s. Press states
are not separately styled; focus is a 2px accent outline at 3px offset. **All
entrance motion is armed by script and sits behind
`prefers-reduced-motion: no-preference`** — the page renders fully formed with
motion off. No bounces, no springs, no parallax, no animated counters.

### Imagery

Every photograph is pre-tinted to the site's **blue duotone** (shadow `#0F3557`,
highlight `#8FC9F5`) at a deliberately incomplete **60% blend**, so the subject
still reads as a photograph and photography sits in the same colour family as
the dark bands beside it. Never the topic colour. On the deck, photographs on
petrol pass through an SVG `feComponentTransfer` duotone (shadow `#062020`,
highlight `#73BFB4`) rather than a stack of CSS filters, so it reproduces
exactly and survives export.

Subject photography only: hands, food, a barbell, a clinical record, an
archive photograph. No portraits of her, no stock smiling clinicians, no
lifestyle flat-lay. Photographs have to earn their place — the deck's evidence
slide has no photograph because a citation should own its slide.

**Never text on a photograph without a real background-colour scrim.** A
gradient alone computes as a transparent background and under-measures on
contrast tools even when it looks legible. Scrims run 0.94–0.97 opacity where
the type sits on full-bleed deck covers, and `rgba(15,53,87,.50)` plus a bottom
gradient on the web claim band.

### Transparency and blur

Neither is used. There is no frosted glass anywhere in either source. The only
transparency in the system is scrim alpha over photographs and the four-step
accent-opacity tint ladders in deck diagrams.

---

## Iconography

**One authored set, and it is the whole vocabulary.** `components/core/Icon.jsx`
is the site's complete icon system, copied verbatim from `tv-web`'s
`Icon.astro`: eight topic marks and nine interface marks on a single 24px grid
at **1.5px stroke, round caps and joins**, drawn so seventeen glyphs read as one
hand.

Topic marks: `prehled` (the evidence pyramid), `medicina` (a clinical record
with the observation line through it), `zenske-zdravi` (the cycle with its
phase mark), `dlouhovekost` (an hourglass, sand already through), `spanek` (a
crescent), `fitness` (a loaded bar), `vyziva` (a plate divided the way a meal
is planned), `lifestyle` (a week, and the habit that held).

Interface marks: `arrow` `phone` `mail` `instagram` `menu` `close` `building`
`external` `plus`.

Rules:
- Colour is `currentColor`. A topic mark takes its theme accent from the card it sits in.
- A mark never carries meaning alone — the topic's name is always beside it in text.
- `external` marks a link that leaves; `arrow` marks one that navigates. They are not interchangeable.
- An institution is drawn as a `building`, not shown as a photograph of one.
- **No icon font, no sprite sheet, no CDN set.** Do not substitute Lucide, Heroicons, Feather, or any lookalike — the topic marks have no equivalent in any library and mixing hands is immediately visible.
- **No emoji, no unicode dingbats** as icons, anywhere.
- The site's `favicon.svg` is copied to `assets/favicon.svg`.

Sizes in use: 17–19 inline with text, 20 in a pill, 22 in the accordion, 24
default, 26 in a 52px topic mark, 30 in a 64px page-hero mark.

---

## Components

Seventeen, and the inventory is exactly what `tv-web` defines — no primitive
was added because a design system "usually" has one.

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
- **ClaimBand** — one sentence over a duotoned photograph, on a real scrim
- **CtaClose** — the one commercial ask, in the page's own theme
- **FaqList** — native `<details>`, first answer open
- **ContactBlock** — three mail routes to one inbox; no form anywhere

**`components/navigation/`**
- **Nav** — mono utility bar over the white nav bar, collapsing to a stacked panel
- **Foot** — blue connect strip over the four-column footer

### Intentional additions

- **WebinarCard** is factored out of `tv-web`'s `WebinarBlock.astro`, which held both the card and its empty state inline. The card is reusable; the empty state is a page's job, not a component's.

### Known divergence to resolve

`Grade`'s levels differ between her two surfaces: the site defines six
(`meta` `rct` `kohorta` `konsenzus` `mechanismus` `nepodlozeno`), the deck five
(no `konsenzus`, and `meta` reads *Metaanalýza* rather than *Metaanalýza a
RCT*). This system ships the site's six. **She should pick one.**

---

## Index

```
styles.css              the one file a consumer links (imports only)
thumbnail.html          the system's homepage tile
readme.md               this file
SKILL.md                Agent Skills front-matter wrapper

tokens/
  fonts.css             @font-face, self-hosted woff2, latin + latin-ext
  colors.css            three palettes, light and dark, plus semantic aliases
  typography.css        families, the web/deck/reel scales, the type roles
  spacing.css           step scale, shell, rhythm, radii, elevation, surfaces
  motion.css            the one easing curve and the duration set
  base.css              reading ground and the shared surface classes
  components.css        interaction states the React components need

components/             17 components in four groups (listed above)
guidelines/             19 foundation specimen cards
templates/
  lecture-deck/         six-slide 1920×1080 talk deck, ready to copy
ui_kits/web/            the site, recreated as click-through screens
slides/                 seven sample deck layouts, one per family
assets/
  fonts/                18 woff2 files (Manrope, Inter, JetBrains Mono)
  img/                  the site's eight duotoned photographs
  photo/                the deck's seventeen photographs
  sig-*.png             the handwritten Tv monogram, four inks
  favicon.svg
reference/              screenshots of the real site, for comparison only
```

### Templates

- **Lecture deck** (`templates/lecture-deck/`) — six slides covering the deck's
  main families: cover (FULL), section divider (OPEN), three columns (STACK)
  with an evidence grade, big number (BESIDE), statement (OPEN), closing (FULL).
  Three palettes across six boards, so a copy already demonstrates the topic
  colour-coding. The full catalogue is 72 layouts — see
  `tv-deck-template/README.md` for the rest.

---

## Do's and don'ts

**Do**
- Keep blue as the only chrome accent; introduce petrol or violet exclusively through topic cards and topic pages.
- Pair every topic-colour usage with the topic's name in text.
- Set eyebrows, meta, prices and the evidence ladder in JetBrains Mono with tabular numerals.
- Run photographs through the blue duotone at the 60% blend, never the topic colour.
- Write headings as full sentences where the content supports it, and drop the eyebrow above one that already is.
- Keep all entrance motion behind `prefers-reduced-motion: no-preference`.
- Mark an absence in one true sentence rather than shipping a placeholder.

**Don't**
- Don't use a hard-offset or neutral-grey shadow, and don't put any shadow on a resting surface.
- Don't let petrol or violet leak into site chrome.
- Don't put an eyebrow above a heading that already reads as a full-sentence claim.
- Don't overlay text on a photograph without a solid-colour scrim under any gradient.
- Don't treat `.dark` as a colour-scheme toggle.
- Don't use em dashes, emoji, or any icon that is not in the authored set.
- Don't set Manrope bold, or signal hierarchy by making text paler.
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
Type         Manrope 400/500 headings · Inter 400 18px/1.68 body · JetBrains Mono labels
Radius       16px card · 24px photo · 999px button · 14–18px icon mark
Shadow       0 12px 32px rgba(15,44,71,.08), on hover only
Motion       cubic-bezier(.22,1,.36,1)
```
