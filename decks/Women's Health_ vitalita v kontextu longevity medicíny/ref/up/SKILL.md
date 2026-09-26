---
name: tereza-vagnerova-design
description: Use this skill to generate well-branded interfaces and assets for Tereza Vágnerová, clinical nutrition therapist and assistant professor at Klinika geriatrie a interní medicíny 1. LF UK a VFN. Covers lecture decks (1920×1080), Instagram reels (1080×1920), the website, handouts and throwaway prototypes, in Czech or English. Contains tokens, fonts, 72 slide layouts, 28 reel frames, 20 components, photography in two modes, and the rules that make all of it read as one hand.
user-invocable: true
---

# How to work in this system

This file is the entry point. It routes you to the right files for the task, states the rules that get broken most, and ends with the checklist every deliverable passes before it ships. Read it fully. Then read only what the routing table sends you to.

## 0. Before you produce anything, settle four facts

Ask if any is missing. Do not guess.

1. **Language.** Czech or English. The English deck is a mirror, not a translation; measures and punctuation differ (`guidelines/TYPESETTING.md §2, §3`).
2. **Audience.** Clinicians, students, the public, or European colleagues. This decides structure, imagery mode and how deep the evidence goes (`guidelines/TALKS.md §2`).
3. **Topic theme.** Blue (Medicína, Přehled), Petrol (Dlouhověkost, Výživa, Fitness, Spánek, Lifestyle) or Violet (Ženské zdraví). One theme per single-subject piece, set on every board.
4. **Imagery mode.** Public (blue duotone) or Clinical (natural colour). One per piece, never mixed.

If the user says "just make it", pick Czech, the audience the content implies, the theme the topic table gives, and say which you picked in one line.

## 1. Which files are truth, in order

When two files disagree, the earlier one on this list wins. Report the disagreement in one line and carry on.

1. `tokens/*.css`, `slides/deck.css`, `components/**/*.jsx` (the code)
2. `CHANGELOG.md`, newest entry first (why the code is what it is)
3. `guidelines/*.md` and the `*.prompt.md` usage notes
4. `readme.md` (narrative; lags behind rebuilds)
5. `tokens/tokens.json` and `tokens/tokens.md` (exports; regenerated from the code)

Never take a value from memory or from a framework default. Every hex, size and weight has a token or a class.

## 2. Route by task

| Task | Read, in this order | Start from |
|---|---|---|
| Lecture or conference deck | this file → `guidelines/TALKS.md` → `guidelines/TYPESETTING.md §3, §4` → the `slides/*.prompt.md` for each layout you use | `templates/lecture-deck/` |
| Review an existing deck | this file → `guidelines/TALKS.md §4` → run `slides/deck-lint.js` | the deck itself |
| Reel or carousel set | this file → `guidelines/TYPESETTING.md §5` → `reels/*.prompt.md` | `templates/reel/` |
| Web page or component | this file → `tokens/web.css` (the five rules in its header) → `guidelines/web-grammar` card → `components/` | `ui_kits/web/` |
| Chart or diagram | this file → `guidelines/DATAVIZ.md` → `slides/14, 15, 59, 60` and the `chart-*` cards | the matching slide layout |
| Handout or PDF | this file → `guidelines/ACCESSIBILITY.md` "Print and PDF" → `guidelines/TYPESETTING.md §5c` | the deck it comes from |
| Add a layout, component or token | this file → `guidelines/PRINCIPLES.md` → `readme.md` "Governance" → `CHANGELOG.md` | the nearest existing one |

Every visual artefact is a static HTML file that loads `styles.css` through the template's `ds-base.js`. Copy a template, keep its `ds-base.js` and `support.js`, edit the one `base` line if the folder moves. For production code, read the rules and copy the assets; do not re-implement them.

## 3. Rules that get broken most

These are stated here because an agent that skips the guidelines still has to obey them. Each has a longer form in the file named.

**Content**
- **Nothing about her that does not trace to a source.** No testimonials, client numbers, fees, publication list, webinars, or a portrait. An absence is one true sentence, never a placeholder, never "coming soon". A missing statistic is asked for or the claim is dropped; it is never estimated. (`PRINCIPLES.md §2`)
- **Four affiliations, registered names, never a fifth.** The table in `readme.md` "Affiliations" is closed. "Geriatrická klinika", ČANT, Institut moderní výživy, FitNut, Domov Sue Ryder and the VFN stroke unit are banned names. It is *Dietitians*, not *Dieticians*.
- **First person, sentence case, headings are full-sentence claims.** Never "we", never a biography, never a topic label as a heading. A heading that is already a claim gets no eyebrow. (`PRINCIPLES.md §3`)
- **Evidence grades are stated, never inferred.** A grade appears only where she or the source gives it. (`PRINCIPLES.md §1`)
- **The commercial ask appears once, after the proof.**
- **No emoji, no unicode dingbats, no icon outside `components/core/Icon.jsx` and `ClinicalIcon.jsx`.** No Lucide, Heroicons, Feather.

**Typography**
- **Czech:** one-letter prepositions bind with `&nbsp;` (`v&nbsp;nemoci`). Decimal comma. Thin space before % (`24 %`). Numerals and nouns decline; counts are computed with `czCount`. Quotes are „low-high“.
- **English:** decimal point, `24%` closed up, “curly” quotes.
- **Em dashes are banned in both languages.** En dash with spaces, or no dash. En dashes survive only in numeric ranges.
- **Faces, three jobs, no overlap:** **Geist** 300/400/500/600 for titles, claims, statements, headings and display figures. **Inter** 400/500/600 for body, lead, small and every affiliation line: anything read as running text. **Geist Mono** 400 (data) and 500 (kicker) for everything that is a label, unit, citation, eyebrow, price, axis or tabular figure. Figures at display size are Geist 300, never mono. Never 700, never faux bold; same-size emphasis skips a weight (400 → 600). Weight 300 only at ≥60px on light, ≥100px on dark. (`TYPESETTING.md §4`)
- **Measures:** claim 2 lines, ≤70 chars CZ / ≤80 EN; statement 3 lines, ≤90 / ≤104; reel hook ≤7 words and ≤42 chars CZ / ≤8 and ≤48 EN. Over the limit the type steps down, never the column up. If it still does not fit, it is two boards.

**Deck grid** (`guidelines/brand-deckgrid` card, `TYPESETTING.md §4`)
- 1920×1080. Margins 120. Live width 1680. Kicker at y 140, claim at y 190, content zone top 352 height 576 vertically centred, footer row y 962 for reference and page number only.
- A board carries a claim or a statement, never both. 60% of the board stays empty; short content steps *up* a size rather than sitting in more air.
- Lists cap at five. Never three boards of one family in a row.
- Body floor on a slide is 32px. Text over a photograph sits on a real background-colour scrim (0.94 to 0.97), never a gradient alone.

**Colour and imagery**
- **Blue `#1D5994` is the only chrome accent.** Petrol and violet are topic identity, always beside the topic's name in text, never page furniture. Sand is the one second data colour and only when two curves must be told apart. (`PRINCIPLES.md §4`)
- `.dark` is a band, not a mode. No dark toggle, no `prefers-color-scheme`.
- Public mode: every photograph pre-tinted blue duotone at 60% (shadow `#0F3557`, highlight `#8FC9F5`). Clinical mode: natural colour from `assets/clinical/`. Never a CSS `hue-rotate` on an already-tinted file. Subject photography only; no portrait of her, no stock faces. The Speaker layout keeps its dashed frame until a real photograph exists.

**Web layer** (`tokens/web.css` header)
- A claim is a full sentence at display scale. Structure is a 1px hairline, never a card. Nothing has a radius. Nothing moves on hover except a mark. A dark band is punctuation, at most twice a page. No shadow on any surface but the mobile nav panel.

## 4. Workflows

### Build a talk from source material
Full procedure in `guidelines/TALKS.md §1`. In short: list the claims and their sources first; grade only what the source grades; order them for the audience (SOAP for a case, agenda → sections → takeaways → resources for a lecture); one claim per board; choose each layout by the *type of evidence* it carries, not by variety; put questions, mechanism detail and reference lists in a backup section after a "Příloha" divider; write speaker notes as full sentences that survive without the slide; run the lint; fix; ship with the checklist below.

### Review a deck
Full procedure in `guidelines/TALKS.md §4`. Diagnose before you touch anything. Run the lint for mechanics, then the narrative checklist. Report findings ranked by what they cost in the room, per board, with the evidence gaps and the questions the audience will ask. Change nothing until asked; then change only what was asked.

### Build a reel set
Hook frame first, sound-off readable, ≤7 words. Safe zone x 80–960, y 280–1250. CTA mid-frame, never in the bottom 480px. Timing sheet beside every set (6–9 frames for 21–34 s, each with duration and the change). Caption: line 1 repeats the on-screen keyword, line 2 the claim, line 3 the source. `templates/reel/` carries the sheet.

### Build a web page
Compose from `components/` only. Read `ui_kits/web/README.md` for the five rules and what they replaced. Do not reintroduce `.card`, `.pill`, `.photo` radius or any `--lift`; they are deprecated in `tokens/base.css` and go at 1.0.0.

### Add to the system
A new semantic token only if no existing role covers it. A new component only if a source defines it. A new layout only from the deck catalogue. Every addition gets a `CHANGELOG.md` entry stating what and why, and its own `*.prompt.md` usage note in the same shape as the others (use when / roles / rules).

## 5. Ship gate: run this every time

Nothing leaves without every line true. Say which lines you checked.

- [ ] Language, audience, theme and imagery mode were settled before the first board, and the piece uses one of each.
- [ ] `slides/deck-lint.js` was run from the deck page console (not as a `<script src>`) and `window.__deckLint` is empty, or every remaining item is listed with a reason.
- [ ] No em dash, no emoji, no straight quotes, no unbound one-letter preposition, correct decimal separator for the language.
- [ ] Every heading is a full-sentence claim; no eyebrow above one.
- [ ] Every statement about her, her affiliations or a study traces to a source in the material given. Absences are marked in one sentence.
- [ ] Affiliations match the closed table verbatim. No banned name appears.
- [ ] Every sourced claim carries its stated grade; no grade was inferred.
- [ ] Geist on headings and display only, Inter on all running text, Geist Mono on all labels and data. Only 300/400/500/600, mono only at 400/500, no 300 below the size floor, no Geist in a paragraph, no Inter in a heading.
- [ ] Blue is the only chrome. Topic colour appears only beside the topic's name.
- [ ] One imagery mode. Every photograph in Public mode is a measured duotone. No stock face under her name.
- [ ] Text on a photograph sits on a real scrim.
- [ ] Deck: kicker y 140, claim y 190, content in the zone, footer row clean, lists ≤5, no three of one family in a row, body ≥32px.
- [ ] Web: no radius, no shadow, no hover transform, hairlines not cards.
- [ ] The ask appears once, after the proof, or not at all.
- [ ] Every file the artefact loads exists in the tree at the path used (`ds-base.js` base line, fonts, photographs).

## 6. Known open decisions

Do not resolve these yourself. Flag them when a task touches them.

- **Grade levels:** the site defines six, the deck five. The system ships six. She should pick one.
- **Speaker notes:** no board carries them yet. `TALKS.md §3` proposes the convention; until adopted, deliver notes as a separate markdown file beside the deck.
- **PowerPoint:** there is no `.potx`. This system produces HTML boards and PDF. Say so if asked for an editable deck.
- **Fonts offline:** Inter is self-hosted; Geist and Geist Mono are not yet. Until their woff2 files are in `assets/fonts/`, a deck with no network sets headings and labels in the fallback. The 13 Sep 2026 mono decision is superseded: mono is Geist Mono.
