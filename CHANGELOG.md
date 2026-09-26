## 0.9.0 — 14 September 2026

### Type: three faces, three jobs
- **Geist** 300/400/500/600 sets display, claims, statements, headings and display figures. **Inter** 400/500/600 sets body, lead, small and every affiliation line. **Geist Mono** 400 (data) / 500 (kicker) sets every label, kicker, unit, citation, price, axis and tabular figure. Supersedes 0.7.0, which put Geist on body and IBM Plex Mono on labels; IBM Plex Mono is replaced by Geist Mono everywhere.
- Why: Geist draws Czech diacritics correctly at display size; Inter is the better reading face at 19px; Geist Mono keeps the mono in the same family as the headings.
- Swapped at the tokens (`--font-body`, `--font-mono` in `tokens/typography.css`), so every layout, reel, component and template follows without edits.
- **All three faces are self-hosted** from `assets/fonts/`: Geist 300–600 and Geist Mono 400/500 from Vercel's static release, Inter 400–600 as before. The Google Fonts `@import` is gone; JetBrains Mono and Manrope files deleted.
- `tokens/tokens.json`: `font.family.mono` Geist Mono, `size-web.body` 19px, `size-deck.body` 32px.
- `slides/deck-lint.js`: mono weight check detects Geist Mono; new checks flag a claim or statement not resolving to Geist, body or lead not resolving to Inter, and any banned name ("Geriatrická klinika", ČANT, Institut moderní výživy, FitNut, Domov Sue Ryder, Dietician) in the document text.

### Skill and talks procedure
- `SKILL.md` replaced: routing table by task, the rules that get broken most, the ship gate, the open decisions.
- `guidelines/TALKS.md` added: how a talk is built from source material (claims first, spine by audience, layout by evidence type, core vs. backup) and how one is reviewed.

### Documentation brought into line with the 0.8.0 web layer
The readme and four cards still described the template-era site. Corrected against `tokens/web.css`:
- `readme.md` "Type" (three faces; Inter is no longer an offline fallback), "Spacing and layout" (sections at clamp(88px, 9.6vw, 164px); deck kicker y 140, claim y 190, zone 352+576, footer y 962; body floor 32px), "Surfaces, elevation and shape" (radius 0; no shadow but the mobile nav panel), "Motion" (nothing moves on hover but a mark), "Do's and don'ts", "Quick reference" (body 19px/1.62), "Index" (font files), "Governance" (0.9.0).
- `guidelines/TYPESETTING.md §4` rule 6 states the three-face split.
- Cards **Reading**, **Labels and figures**, **Corner radii**, **Elevation**: the current rule is the headline; legacy values are a one-line footnote.

## 0.8.0 — 14 September 2026

### The website is rebuilt on the deck's grammar
The site and the decks were two design systems wearing one palette. The site's
composition came from a healthcare template (`astra-template-plum`): rounded
cards on hairlines, alternating tinted bands, a pill-button rhythm and a hover
lift. The decks are her own editorial grid. **The deck is now the parent**, and
the template inheritance is gone.

Five rules the web layer obeys, in `tokens/web.css`:

1. **A claim is a full sentence at display scale.** Fluid clamp(), anchored so
   the desktop maximum *is* the deck's 74px claim; on a phone it steps down one
   role (`--w-claim-n`) rather than reflowing to reading size.
2. **Structure is a 1px hairline, never a card.** `.w-rows` / `.w-row` replace
   `.card`; sections are divided by a rule and by air, not by a change of ground.
3. **Nothing has a radius.** Photographs, blocks and bands are square — a board
   has no rounded corners and neither does a page.
4. **Nothing moves on hover except a mark.** The arrow slides 4px, a mark's
   hairline takes the accent, ink goes to accent. No transform on a surface, no
   shadow anywhere (the mobile nav panel keeps `--lift-strong`: it has genuinely
   left the page).
5. **A dark band is punctuation**, at most twice a page.

### Carried across from the deck
Claim-as-sentence headings · tracked mono kickers (Geist Mono 500, +.12em,
the only uppercase on a page) · evidence grades beside any sourced claim ·
the footer scale strip on topic pages, static, never fixed · duotone photography
everywhere with a real background-colour scrim · hard hairline rules instead of
card borders · the handwritten Tv monogram on the hero, the statement and the
close. Air is up: sections now pace at `clamp(88px, 9.6vw, 164px)`.

### Components
All 20 rebuilt in place with **unchanged props**, so consuming code keeps working:
- **Pill** is no longer a pill. `small` renders a tracked mono link with a mark;
  the default is a square accent block. `ghost` is an accent underline.
- **TopicCard**, **InstitutionCard**, **EntryCard**, **WebinarCard**,
  **PublicationRow**, **ContactBlock** are rows on hairlines, not cards.
- **TalkCard** is a square duotoned photograph over a 2px ink rule.
- **Nav** loses the dark utility bar and the pill CTA: one hairline strip,
  wordmark and tracked mono links, with phone/mail/Instagram moving into the
  stacked panel and the footer.
- **Foot** gains `scale` and `sig`; **CtaClose** gains `sig`.
- **FactPanel**, **FaqList**, **ClaimBand**, **PageHero**, **Grade** re-set in
  the new vocabulary. Grade's rung name stays spelled out in text.
- **New: SplitHero** (the homepage opening as the deck's SPLIT board) and
  **ScaleStrip** (the deck's footer scale as a page element).
- **Retired:** `.card`, `.pill`, `.photo` radius, the accordion lift and every
  `--lift` hover. The rules stay in `tokens/base.css` under a DEPRECATED marker
  so a half-migrated consuming page does not break; they go at 1.0.0.

### Patched alongside
- **The web layer failed the weight floor the deck layer is linted against** — the exact divergence this turn existed to close. `.w-statement` and `.w-figure` had been given the deck's 300, but their fluid clamps top out at 68px and 148px and instances step figures down to 42–57px, so 300 could never clear the floor (≥60px on light, ≥100px on a dark ground) at any viewport. Both are weight 400 across the web layer now; a page statement is distinguished by size and air, which is what it should have been.
- Card viewports were being set from a measurement at the preview width, but every driving length in the web layer is a `vw` clamp that grows toward 1240 (ClaimBand min-height +126px, hero photo +145px, block padding +82px). Both Sections cards re-declared with that growth accounted for.
- **Public-mode imagery is now audited, not assumed.** `hero-kitchen.jpg` was natural colour (hue spread 114°) while its siblings were proper single-hue duotones (3–13°), so the site was shipping the mixed-mode failure IMAGERY.md forbids — on the hero, no less. It and `about-food.jpg` were re-tinted to the documented pair (shadow #0F3557, highlight #8FC9F5); all eight Public assets now measure a hue spread ≤ 15° with a 203–208° median. A CSS filter is explicitly *not* the enforcement: hue-rotate on an already-tinted file double-shifts it (it turned the hero mauve), so `tokens/web.css` documents the asset contract and offers `.w-photo-duo`, the deck's own `feComponentTransfer` filter, for assets a page does not control.
- The Sections card was one card showing six page-scale components, ~3400px tall against a declared 1500 — four of six clipped. Split into **Sections · openings** and **Sections · page furniture**, each measured and content-sized at 1480, with the SplitHero label corrected.
- **The palliative decks carried the banned old clinic name** ("Geriatrická klinika" / "Department of Geriatrics") and a superseded organisation (ČANT / Czech Association of Nutritional Therapists) on their cover and closing boards. Corrected to the four canonical registered names in both languages. Their content is otherwise untouched — they stay frozen as worked examples.
- `SplitHero` and `ScaleStrip` gained usage notes; the Sections and Navigation cards now show them, and the Sections card's own copy carried the same banned clinic name (fixed).

### Also
- `ui_kits/web` rebuilt on all of the above, hero included; its README now
  states the five rules and what they replaced.
- New card `guidelines/web-grammar` — a was/now sheet for every device.
- Body is 19px/1.62 (from 18/1.68) to sit with the airier rhythm.


## Usage notes moved out of the artefacts — 14 Sep 2026

- The 72 slide cards and 28 reel cards were each carrying their usage note **inside the page**, as a sheet under the board (`slides/usage.css`). The note is now in each card's own usage-notes field (`<card>.prompt.md`) and the page is the board alone — declared viewports drop back to 1920×1080 and 1080×1920, so a card shows the artefact at its real size.
- `slides/usage.css` deleted; `fit.js` no longer scales a two-part card.
- The 40 remaining cards (Brand, Colors, Components, Data, Spacing, Type, Web) had an empty notes field — all 40 written: what the card governs, how to apply it, and the rule that is easy to get wrong.
- `Pill`'s note still described the retired pill shape (56px, true pill, Geist 500). Rewritten against the current component: square accent block, `small` as a tracked mono link, mark-only hover.

## 0.7.0 — 13 September 2026

### Type: Geist Mono replaces Geist Mono
- Every label, axis, unit, citation and tabular column is now **Geist Mono** 400/500, loaded from the Google Fonts CDN beside Geist. Swapped at the token (`--font-mono`), so all 72 slide layouts, 28 reel frames, six templates and every card followed.
- **Figures at display size are Geist 300, not mono.** A 190–380px monospace numeral read as a terminal; `.figure`, `.d-figure`, `.a-fig` and the templates' figure styles now set Geist 300 with tabular numerals, with a `.unit` span at half size for the % or unit.

### Weight rules (guidelines/TYPESETTING.md §4, guidelines/RESEARCH.md § Weight)
- Researched against practice and accessibility guidance; seven rules. Ladder is **300 / 400 / 500 / 600**, each weight with one job. **Same size skips a weight** (400 → 600 for emphasis, never 400 → 500). **300 floored at 60px on light, 100px on dark.** Mono is 400 (data) or 500 (kicker) only. Never 700, never faux bold.
- The two palliative decks still carry the old 500 emphasis in their own helmet block; they are frozen as worked examples and will be brought onto the rule when they are next revised.
- Reverses 0.6.0's ban on Geist 600: emphasis (`.ink`, `<b>` in body, reel `a-h`) is 600 again; reel `a-sub` moves 300 → 400. `deck-lint.js` enforces all of it. New card `type-weight`.

### Slides: type floor and diagram scale
- Body floor **26 → 32px**, sub 34 → 40px at 500, lead 30 → 34px, mono 19 → 22px; claim-to-body ratio is now 2.3× (was 2.8×). Inline body sizes under the floor are lifted to 30px by rule. Applied to `deck.css`, the slide kit, both palliative decks and the lecture deck.
- Diagrams redrawn at slide scale: nodes 12–16 → 26px, hairline edges → 4px, SVG labels → 26/34px. Hub-and-spoke gets full spokes and satellites; the decision path gets 4px accent connectors and 30–36px copy.
- Fixed: `+24 %` figure gap; quote 64 → 76px; takeaways 38 → 48px; section progress no longer demotes by opacity; do/don't negative column is italic, not `soft`.

### Imagery and truth
- **Speaker (63) and reel R19 no longer show a stock face under her name.** 63 is a dashed portrait slot with a one-line note; R19 is a signed quote on plain ground. The photo-led reel template uses a hands photograph instead of the portrait.
- Heart-stethoscope stock replaced (34, 58); natural-colour kitchen photo (used four times) replaced by duotoned, varied photographs; flat-lay on 42 duotoned.
- Affiliations on covers/closings corrected to the four canonical organisations.
- Topic colour is no longer used as a comparison colour: 67, R13, R23 now use one theme with a tint step.

### Reels
- Ghost glyphs kept on R3 and R21 only (`.keep-ghost`); removed from the other eleven frames — they sat under Instagram's UI and read as the faded-number trope.
- R1 hook cut to the 7-word budget; R10 hook is the payoff, not the pallor.

### Component usage notes
- All 18 components now carry a usage note (`<Name>.prompt.md`) — the field that was empty on 14 of them: what the component is, a real JSX call, and the rules that are easy to get wrong (why `href` is optional on EntryCard, why InstitutionCard requires a URL, why PageHero drops the eyebrow, why the webinar empty state is the page’s job).

### Usage notes on every layout
- Each of the 72 slide cards and 28 reel cards now carries a **usage note sheet under the board** (`slides/usage.css`): the layout’s family, one line of *use when*, the *roles* it actually contains (derived from the markup, not guessed), and the 3–4 *rules* it must obey — family rules plus what is specific to that board. Card viewports grew to 1920×1440 and 1080×2700 to show it; `fit.js` scales board and note together.
- Six legacy duplicate boards removed (`02-divider`, `03-threeup`, `04-bignumber`, `05-statement`, `06-claimphoto`, `07-closing`) — they were the v0.1.0 sample set, carried stale card numbers that clashed with the catalogue, and duplicated layouts 04/05/07/18/32/36. The catalogue is now exactly 72 boards with unique numbers.

### Placeholder copy rewritten by role
- The first neutralisation pass built placeholders by truncating a filler string to the original text’s character length and mapping every mono element to the word "Popisek": short sources became mid-word fragments ("Zástu"), and sibling labels collapsed to identical strings. Replaced wholesale by a role- and position-aware resolver — whole Czech phrases, never truncated, siblings numbered (`Popisek osy 02`, `Uzel 03`, `Druhá položka…`), mono differentiated by where it sits (top-left kicker, unit under a figure, axis label, grade, footer).
- Boards whose micro-copy carries meaning are hand-authored, not generated: 02 Disclosure (two named columns and a visible italic blank), 41 Decision path (Ano/Ne branches), 63 Speaker (the portrait slot explains itself; four affiliation rows), 66 and R22 Annotated sentence (a grammatical carrier sentence), 69 and R25 Lab card (parameter, value, unit, reference range).

### Templates enhanced
- Slide kit and lecture deck open with a **“how to use this” sheet**: the grid constants, the type and weight scale, and what to replace — so a copied template teaches its own rules.
- Both reel templates gained the type/weight rules and the role-not-content rule in their checks list.
- `.bd b` / `.tbl td b` emphasis lifted 500 → 600 in the kit and lecture deck; two 96px statements on dark boards raised to 102px to clear the 300-weight floor.

### Content-agnostic layouts and templates
- **All 72 slide layouts and 28 reel frames now carry role-named placeholders** ("Tvrzení jako celá věta, nejvýše na dva řádky.", "Hák do sedmi slov.", "Zdroj · rok · identifikátor") instead of subject copy, and each card's subtitle states the layout's family and its usage principle. Nothing in the catalogue can bias a generated talk toward one topic.
- `templates/reel` ships two **structures** (claim-led, number-led) with role-named frames; `templates/reel-zenske-zdravi` is now the photo-led reel structure; `templates/lecture-deck` is placeholder-only and scales to the preview.
- The two palliative decks are kept as worked examples of a real talk and are unchanged in content.

## 0.6.0 — 13 September 2026

### Type: one family, two cuts
- **Geist replaces Manrope** for display, headings and reading, and **Geist Mono replaces JetBrains Mono** for every label, axis, unit and figure. JetBrains is a code face — its slashed zero and terminal rhythm read as developer tooling rather than clinical evidence; Geist Mono shares the text face's skeleton, so a figure and its label now speak in one voice.
- Czech verified before the swap: Geist draws the ring on ů, the raised-comma caron on ď/ť and full háčky on ě š č ř ž at both 300 and 500, at claim scale.
- `--font-display` and `--font-body` are now the same stack (`Geist, Inter, system-ui`). **Inter is demoted to the offline fallback** and is never specified on its own.
- Geist and Geist Mono load from the Google Fonts CDN — the woff2 files are not in `assets/fonts/` yet. Drop them in and swap the `@import` in `tokens/fonts.css` for `@font-face` blocks to go fully offline.
- Swapped through every token, card, slide board, reel frame, component and template. `reference/` keeps the original Manrope/JetBrains source as imported.

### Affiliations corrected and closed
- The record is now **exactly four organisations**, under their official registered names, verified against lf1.cuni.cz, vfn.cz, efad.org and healthylongevityclinic.cz: Healthy Longevity Clinic; Klinika geriatrie a interní medicíny 1. LF UK a VFN; III. interní klinika – klinika endokrinologie a metabolismu 1. LF UK a VFN; EFAD – European Federation of the Associations of Dietitians.
- Removed as not current: ČANT, Institut moderní výživy, FitNut, Domov Sue Ryder, and the VFN stroke unit.
- "Geriatrická klinika" was the clinic's **old** name and must not reappear. English mirrors added to `institutionsEn`; the rules and the short forms are in `readme.md`.

# Changelog

Versioning: **0.x until the first talk ships** on this system, then 1.0.0.
Semver from there: major for a token rename or component API break, minor
for a new component, layout or template, patch for a fix.

## 0.6.3 — 2026-09-13
### Fixed
- `.sig-chip` was authored at 15px for the 700px specimen cards and then
  reused verbatim on 1920px boards, putting the **answer to a decision
  question** below the system's own 24px slide floor. `tokens/signal.css` now
  scopes a board variant (`.slide .sig-chip, .reel .sig-chip` at 26px with
  proportional padding), so every chip on every deck and the kit scales with
  the board and the card size is left to the cards.
- `40 · Concept map` referenced an undefined `--card`, rendering white only
  by its literal fallback and ignoring theming — now `--surface-card`.
- Bound the last 7 one-letter Czech prepositions in the palliative deck.

## 0.6.2 — 2026-09-13
### Changed
- **40 · Concept map** redrawn. The K4 graph's diagonals tangled in the
  centre and its centred SVG text collided with the left claim column. Now a
  ring: adjacent pairs joined by the arc, opposite pairs by a cross behind the
  discs, so all six relations are present without crossing lines. Claim moves
  to the BESIDE column, nodes are HTML (click-editable) in Geist, not
  hardcoded Inter.
- **41 · Decision path** redrawn. The decision point now reads as one —
  a bordered accent node — and the two branches are cards carrying the
  **sentiment signals**: the energy-availability branch positive, the
  endocrine work-up caution. Branch copy is left-aligned rather than centred,
  headings share a baseline, and arrows land on card centres.
### Fixed
- `deck-lint.js` ran before the DC runtime laid the boards out, so every
  full-bleed scrim looked like a footer intrusion, and it scanned
  `innerHTML`, reading CSS `rgba(15,53,87,.97)` as a Czech decimal comma.
  It now runs **once**, after `load` plus two frames, and copy-level checks
  read `textContent`. The lint include is versioned so a stale cached copy
  cannot mask the fix.

## 0.6.1 — 2026-09-13
### Added
- `tokens/signal.css` — a complementary **sentiment layer**: positive,
  negative, caution and neutral, each with ink / soft / edge / on-dark
  roles, plus a five-step **grading ramp** keyed to the theme accent.
  Warm-against-cool rather than red/green; the dark-board caution is sand,
  so no new hue enters the palette. Three specimen cards.
- Applied where a verdict is actually stated: the palliative benefit/risk
  slide (chips + negative-tinted mortality bars), the comfort-feeding
  recommendation, and the kit's myth/fact and comparison boards.
- `Grade` now draws its rungs from the grading ramp, so a grade re-tints
  with the topic.
### Fixed
- English deck: repaired 44 `rgba()` colours and every attribute delimiter
  corrupted by the decimal/quote conversions, restoring all 12 photo scrims.
- Em dashes and straight quotes removed from the English copy per
  TYPESETTING.md; curly quotes applied to body phrases only.
- Lint no longer false-positives on full-bleed scrims overlapping the
  footer row.

## 0.6.0 — 2026-09-13
### Added
- `guidelines/TYPESETTING.md` — the authority for both languages: Czech
  bonds/quotes/dashes/decimals, English as a **mirror not a translation**
  (with a before/after table), per-language claim and hook measures, the
  four vertical positions on a board, and a pre-ship checklist.
- `slides/deck-lint.js` rewritten **language-aware**: reads `lang`, applies
  the CZ or EN measure, and adds checks for claim+statement on one board,
  footer-row intrusion, em dashes, straight quotes, unbound Czech
  prepositions, and decimal/percentage convention per language.
- Every template now declares its document language, so the lint and the
  browser both know what they are setting.
### Changed
- English palliative deck re-set as a mirror: 28 claims and statements
  rewritten as English sentences rather than literal translations, Czech
  preposition bonds stripped, “English quotes”, decimal points, closed-up
  percentages.

## 0.5.1 — 2026-09-13
### Added
- Slide kit grown from 12 to **26 compositions**: agenda, section divider,
  three figures, table, myth and fact, cause chain, decision path,
  hierarchy, line chart, bar chart, definition, question, photo band,
  takeaways — covering all eight families (FULL, OPEN, SPLIT, BESIDE,
  STACK, BAND, PLOT, DIAGRAM).
- Two new Tweaks: **footer scale** (five presets from her deck — cyklus,
  život, den, dávka, roky — or none) and **layout labels** on/off.
- EN palliative deck: missing `ds-base.js` / `support.js` scaffold added;
  it had been rendering unstyled with system fonts.

## 0.5.0 — 2026-09-13
### Added
- `templates/slide-kit/` — 12 content-free compositions (one per family)
  with placeholder copy; Tweaks for palette (blue/petrol/violet), imagery
  mode (Public/Clinical), and evidence grade. The palliative decks remain as
  worked examples; the kit is the starting point for any new talk.

## 0.4.1 — 2026-09-13
### Changed
- Palliative deck imagery set to the "middle" rhythm: every section opener
  and every statement/quote slide carries a Clinical photograph (17 of 34).
- Cochrane citation (Davies et al.) recovered from the source deck, placed
  on the quote and PEG-mortality slides.
- Clinical library captioned in full; 4 duplicates removed; 3 third-party
  graphics moved to `reference/` as citations, not assets.

## 0.4.0 — 2026-09-13
### Added
- `guidelines/PRESENTATION_RESEARCH.md` — what the best decks and reels do,
  audited against ours, with the improvement list that was applied.
- `slides/deck-lint.js` — console lint for rhythm (three of one family),
  claim/statement measure, list length (max 5), reel hook budget.
- Palliative deck (CZ + EN): assertion–evidence pass (lists capped at 5),
  Clinical photographs on the S/A/P openers and slide 17, one-number slide
  for 30-day PEG mortality, reference footers where the source named one,
  a three-slide appendix for backup material. Core 31 + appendix 3.
- `templates/reel/` — reel timing sheet with animated preview, two frame
  sets (palliative, generic), hook budget check, caption template, 3:4 grid
  and centre-CTA rules.
### Decided
- Lists on slides: kept, max five items.
- Reference footers only where the source deck named a source.
- Backup slides use the same layouts as core.

## 0.3.0 — 2026-09-13
### Added
- All 72 deck layouts (`slides/`) and 28 reel frames (`reels/`) ported onto
  the system stylesheet from the deck source, tagged as cards.
- Templates: `paliativni-pece` (CZ, 31 slides) and `paliativni-pece-en`
  (EN mirror), Clinical imagery mode, Blue clinical sections / Petrol case.
- **Claim measure rule**: claim ≤70 characters in a 1400px column, statement
  ≤90; BESIDE columns step the claim to 58px; over-limit text steps down,
  never widens. Encoded in `slides/deck.css` and both deck templates.
### Decided
- Topic colour coding: Blue clinical, Petrol longevity, Violet women's health.

## 0.2.0 — 2026-09-13
### Added
- Canonical semantic tokens (`--text-*`, `--surface-*`, `--border-*`,
  `--action-*`, `--icon-*`, `--chart-*`) aliasing the working short names.
- `tokens/tokens.json` (W3C DTCG) and `tokens/tokens.md` (AI-context export).
- `tokens/dataviz.css` — chart colour ladder and stroke tokens.
- `guidelines/PRINCIPLES.md`, `ACCESSIBILITY.md`, `DATAVIZ.md`, `IMAGERY.md`,
  `RESEARCH.md`.
- Clinical imagery library (`assets/clinical/`, 32 files) with provenance,
  extracted from the palliative-care deck.
- Foundation cards: principles, accessibility, chart colours, imagery modes.
### Decided
- **Topic colour coding**: Blue = clinical/medical (Medicína, Přehled);
  Petrol = longevity (Dlouhověkost, Výživa, Fitness, Spánek, Lifestyle);
  Violet = women's health. Supersedes the deck source's coding. Non-photo
  demo slides re-themed; photo boards keep their baked duotone palette.
- Evidence grade has **six** levels (the site's). `konsenzus` is a rung she
  cites; a deck may simply not use it.
- Imagery has two documented modes, Public (duotone) and Clinical (natural),
  never mixed in one piece.
- Czech and English are separate files, not a toggle.
- Handouts ship A4 and Letter.
- Decks deliver as PDF + PPTX.

## 0.1.0 — 2026-09-13
### Added
- Tokens (colour, type, spacing, motion, fonts), 17 components in four
  groups, 19 foundation cards, 7 sample slides, lecture-deck template, web
  UI kit with 7 screens, readme, SKILL.md.
