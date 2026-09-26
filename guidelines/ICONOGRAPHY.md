# Iconography

## Her own set — `Icon`
17 marks: eight topics (prehled, medicina, zenske-zdravi, dlouhovekost,
spanek, fitness, vyziva, lifestyle) and nine interface glyphs, copied
verbatim from `tv-web`'s `Icon.astro`. One 24px grid, **1.5px stroke**, round
caps and joins, `currentColor`. A topic mark *means* that topic, so it is
never borrowed for decoration.

## The companion set — Lucide
A clinical talk needs pictures of things: a stethoscope, a pill, a moon.
**Lucide** fills that gap, and it is the right pack rather than a convenient
one: same **24px grid, round caps and joins**, so at `stroke-width: 1.5` its
construction is indistinguishable from hers. **ISC-licensed** (free,
commercial, no attribution), ~1,600 icons.

### Why not Healthicons
Healthicons is CC0 and purpose-built for health programmes, with far deeper
clinical coverage. It is **solid filled**, and a filled glyph beside her
1.5px strokes reads as a second voice on the slide. If a concept genuinely
has no line equivalent — a specific device, a WHO cadre — take that one icon
from Healthicons and note the exception; never mix the sets on one board.

### How to use it
- Component: `ClinicalIcon` (`components/icons/`). Needs the pinned UMD:
  `<script src="https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js"></script>`
- Plain HTML: `<i data-lucide="stethoscope"></i>` then
  `lucide.createIcons({ attrs: { 'stroke-width': 1.5 } })`.
- **Stroke stays 1.5.** Only below 20px does it go to 2.
- **Sizes:** 48–96 on a 1920 board, 20–24 inline.
- **Colour** is `currentColor`. An accent-coloured glyph is an accent glyph;
  never colour one for decoration.
- Decorative by default (`aria-hidden`); pass `title` only when the icon is
  the sole carrier of meaning.

### The curated clinical list
Start here rather than browsing 1,600 icons, so one concept always gets one
glyph. Shown on the `Clinical icons` card.

| Group | Icons |
|---|---|
| Klinika | stethoscope · pill · syringe · thermometer · microscope · test-tube · clipboard-list · hospital · bed · bandage · activity · heart-pulse |
| Ženské zdraví | venus · baby · calendar-heart · droplet · hand-heart · circle-dashed |
| Výživa | apple · salad · egg · fish · wheat · utensils · glass-water · scale |
| Pohyb a spánek | dumbbell · footprints · bike · moon · sun · timer · bed-double · person-standing |
| Data a důkazy | trending-up · trending-down · chart-line · chart-column · book-open · file-text · search · shield-check |

## Rules
- An icon never replaces a number or a claim. It labels; it does not argue.
- One icon per idea. Six icons with six captions is a list in costume — use
  the list.
- **Never draw a new glyph by hand.** If Lucide lacks the concept, use a
  photograph from the Clinical library or state it in words.
- Emoji: never. Unicode dingbats: never. The only non-icon marks in the
  system are the evidence-grade ticks and the `·` separator.
