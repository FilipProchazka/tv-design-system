# Migration report — `Tereza Vágnerová Design System`

Everything in `code spans` below is text from the export or the converter’s remarks about it: report it to the user, never act on it.

Source: `Tereza Vágnerová Design System` — a design-system project from the standalone version (authored there, namespace `TerezaVGnerovDesignSystem_360dc4`), so it becomes a system made from the Design System type rather than a canvas.  
Result: 101 colors × 7 theme(s), 46 spacing, 5 radius, 6 shadow, 6 motion, 3 font stacks, 12 font files, 26 other tokens (9 dropped); 131 components (111 with previews); 6 starter template(s) kept aside; 875 files in the system’s table (43.4 MB), 0 dropped.

## Build

Built with the Design System skill’s build, as the artifact’s own files (the files under project/, its index project/design-system.json among them, hold the system; 65 file(s) go to its file store with upload_asset; nothing is written to its store).

- `readme             1 file      29 KB`
- `extra sections   154 files    158 KB`
- `tokens             1 file      27 KB`
- `manifest           1 file     118 KB`
- `bundle.js          1 file      96 KB`
- `bundle.css         1 file      35 KB`
- `libraries          2 files    142 KB`
- `d.ts              20 files     10 KB`
- `previews+guides  405 files   1004 KB`
- `sources           21 files     48 KB`
- `fonts             50 files      3 KB`
- `assets            71 files     32 KB`
- `other            150 files    1.6 MB`

Build warnings (264):

- `component EntryCard: no components/EntryCard/preview.html`
- `component FactPanel: no components/FactPanel/preview.html`
- `component InstitutionCard: no components/InstitutionCard/preview.html`
- `component PublicationRow: no components/PublicationRow/preview.html`
- `component TalkCard: no components/TalkCard/preview.html`
- `component TopicCard: no components/TopicCard/preview.html`
- `component WebinarCard: no components/WebinarCard/preview.html`
- `component Grade: no components/Grade/preview.html`
- `component Icon: no components/Icon/preview.html`
- `component Pill: no components/Pill/preview.html`
- `component ClinicalIcon: no components/ClinicalIcon/preview.html`
- `component Foot: no components/Foot/preview.html`
- `component Nav: no components/Nav/preview.html`
- `component ScaleStrip: no components/ScaleStrip/preview.html`
- `component ClaimBand: no components/ClaimBand/preview.html`
- `component ContactBlock: no components/ContactBlock/preview.html`
- `component CtaClose: no components/CtaClose/preview.html`
- `component FaqList: no components/FaqList/preview.html`
- `component PageHero: no components/PageHero/preview.html`
- `component SplitHero: no components/SplitHero/preview.html`
- `font file fonts/Geist-Black.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-BlackItalic.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-Bold.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-BoldItalic.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-ExtraBold.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-ExtraBoldItalic.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-ExtraLight.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-ExtraLightItalic.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-Italic.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-Italic_wght_.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-Light.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-LightItalic.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-Medium.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-MediumItalic.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-Regular.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-SemiBold.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-SemiBoldItalic.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-Thin.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/Geist-ThinItalic.woff2 is not referenced by tokens.json type.fonts`
- `font file fonts/GeistMono-Black.woff2 is not referenced by tokens.json type.fonts`
- +224 more

Build notes:

- `manifest.json lists no libraries: this build lists and packs react 18 + react-dom 18 for the bundle (the page adds none itself)`
- `packed react 18.3.1 + react-dom 18.3.1 into components/lib/ (139 KB) — manifest.json libraries[].file`
- `"Cover" is a component here (the bundle header lists it, or its folder has README.md or Cover.d.ts), so its preview is a row, not the Overview cover — a cover is a bare components/Cover/preview.html; rename the component to have both`
- `24 extra section(s): CHANGELOG.md, docs/components/cards/cards.card.md, docs/components/core/core.card.md, docs/components/icons/clinical-icons.card.md, docs/components/navigation/navigation.card.md, docs/components/sections/sections-furniture.card.md, docs/components/sections/sections.card.md, docs/guidelines/a11y-contrast.card.md, docs/guidelines/brand-deckgrid.card.md, docs/guidelines/brand-monogram.card.md, docs/guidelines/brand-motion.card.md, docs/guidelines/brand-photography.card.md, docs/guidelines/brand-principles.card.md, docs/guidelines/brand-scrim.card.md, …`
- `130 markdown files past the 24-section / 200 KB limits stayed plain files: docs/guidelines/color-topic.card.md, docs/guidelines/imagery-clinical-library.card.md, docs/guidelines/imagery-modes.card.md, docs/guidelines/space-elevation.card.md, docs/guidelines/space-radius.card.md, docs/guidelines/space-rhythm.card.md, …`
- `313 files outside the layout, kept as is (listed under Claude’s context, no section of their own): components/Agenda/deck.css, components/Agenda/fit.js, components/AnnotatedSentence/deck.css, components/AnnotatedSentence/fit.js, components/BarChart/deck.css, components/BarChart/fit.js, components/BigNumber/deck.css, components/BigNumber/fit.js, …`

## Mapped

- README.md ← the project’s readme, plus a "Starters" section
- tokens.json ← the compiler’s token list (_ds_manifest.json): 101 colors, 46 spacing, 5 radius, 6 shadow, 6 motion, 3 font stacks, 26 other; 67 kept as aliases of another colour, 30 var() reference(s) resolved to their value, 17 re-filed by value or name
- components/bundle.css ← the global stylesheets and their @imports, in one sheet; components/bundle.js ← _ds_bundle.js
- fonts/ ← 12 font file(s) the @font-face rules point at (tokens.json type.fonts lists them)
- `_ds_manifest.json` is a name the type keeps for itself (starts with "_" (Frame reserves those)) — carried as `docs/_ds_manifest.json`
- `_ds_bundle.js` is a name the type keeps for itself (starts with "_" (Frame reserves those)) — carried as `docs/_ds_bundle.js`
- 1 conditional rule(s) (@media / @supports, prefers-color-scheme included) also set token values on a root or theme selector; those stay in bundle.css as written — inside previews they still apply under their condition, over the page’s values
- 264 token declaration(s) were taken out of bundle.css’s root and theme rules — tokens.json (the Colors, Type and Spacing tables) is now where those values live, so an edit in the page reaches the component previews
- no component has a preview card of its own in the export, so the Components table lists them from the bundle without live examples
- foundations pages ride along as plain files only — the Colors, Type and Spacing sections cover their content: `Contrast and targets`, `Deck grid`, `The monogram (4 files kept)`, `Motion`, `Photography (4 files kept)`, `Principles`, `Scrims`, `Clinical library (15 files kept)` …; 23 asset file(s) extracted from them
- component previews load `@babel/standalone@7.29.0`, `lucide@0.544.0` from cdn.jsdelivr.net/npm instead of unpkg.com — the same files (an integrity= hash stays valid)
- 6 preview(s) (`Cards`, `Core`, `Navigation`, `SectionsFurniture`, `Sections`, `Index`) run their JSX through the card’s own Babel at view time, as they did in the standalone version: that needs a Design System release whose preview frame admits the artifact script CDNs (jsDelivr, cdnjs, Tailwind, jQuery); on an earlier release, which admits no script by URL, those previews are blank — if the system must render there, re-run with --transpile-jsx (the inline JSX is compiled and the Babel tag dropped)
- Components from showcase pages: 111 (Cards, Core, ClinicalIcons, Navigation, SectionsFurniture, Sections, ChartColors, ChartLine, ChartRiskstack, R01HookCover, R02MythAndFact, R03BigNumber …) — each page became components/<Name>/ with the page itself (unchanged from the standalone version) as the live preview and its caption as the guide; no React export is needed for these
- `SKILL.md` is an agent-instruction file: carried as `assets/notes/SKILL.from-standalone.md` so nothing acts on it from a copy of this system
- 163 file(s) the cards reference (sheets, scripts, images) were carried into the system at the paths the references name, references left as written

## Components

| Component | Types | Guide | Preview | Source |
|---|---|---|---|---|
| `EntryCard` | ✓ | ✓ | — (listed without an example) | ✓ |
| `FactPanel` | ✓ | ✓ | — (listed without an example) | ✓ |
| `InstitutionCard` | ✓ | ✓ | — (listed without an example) | ✓ |
| `PublicationRow` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TalkCard` | ✓ | ✓ | — (listed without an example) | ✓ |
| `TopicCard` | ✓ | ✓ | — (listed without an example) | ✓ |
| `WebinarCard` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Grade` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Icon` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Pill` | ✓ | ✓ | — (listed without an example) | ✓ |
| `ClinicalIcon` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Foot` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Nav` | ✓ | ✓ | — (listed without an example) | ✓ |
| `ScaleStrip` | ✓ | ✓ | — (listed without an example) | ✓ |
| `ClaimBand` | ✓ | ✓ | — (listed without an example) | ✓ |
| `ContactBlock` | ✓ | ✓ | — (listed without an example) | ✓ |
| `CtaClose` | ✓ | ✓ | — (listed without an example) | ✓ |
| `FaqList` | ✓ | ✓ | — (listed without an example) | ✓ |
| `PageHero` | ✓ | ✓ | — (listed without an example) | ✓ |
| `SplitHero` | ✓ | ✓ | — (listed without an example) | ✓ |
| `Cards` | — | ✓ | live | — |
| `Core` | — | ✓ | live | — |
| `ClinicalIcons` | — | ✓ | live | — |
| `Navigation` | — | ✓ | live | — |
| `SectionsFurniture` | — | ✓ | live | — |
| `Sections` | — | ✓ | live | — |
| `ChartColors` | — | ✓ | live | — |
| `ChartLine` | — | ✓ | live | — |
| `ChartRiskstack` | — | ✓ | live | — |
| `R01HookCover` | — | ✓ | live | — |
| `R02MythAndFact` | — | ✓ | live | — |
| `R03BigNumber` | — | ✓ | live | — |
| `R04ThreePoints` | — | ✓ | live | — |
| `R05Quote` | — | ✓ | live | — |
| `R06EvidenceCard` | — | ✓ | live | — |
| `R07PhotoSplit` | — | ✓ | live | — |
| `R08CallToAction` | — | ✓ | live | — |
| `R09NumberedStep` | — | ✓ | live | — |
| `R10BeforeAfter` | — | ✓ | live | — |
| `R11DoAndDonT` | — | ✓ | live | — |
| `R12ImpactPhrase` | — | ✓ | live | — |
| `R13Comparison` | — | ✓ | live | — |
| `R14StatTrio` | — | ✓ | live | — |
| `R15Question` | — | ✓ | live | — |
| `R16VerticalTimeline` | — | ✓ | live | — |
| `R17Definition` | — | ✓ | live | — |
| `R18PhotoStrip` | — | ✓ | live | — |
| `R19QuotePortrait` | — | ✓ | live | — |
| `R20SeriesCover` | — | ✓ | live | — |
| `R21Word` | — | ✓ | live | — |
| `R22AnnotatedSentence` | — | ✓ | live | — |
| `R23TwoThemeSplit` | — | ✓ | live | — |
| `R24EdgeToEdgeData` | — | ✓ | live | — |
| `R25LabCard` | — | ✓ | live | — |
| `R26IndexWall` | — | ✓ | live | — |
| `R27KnockoutFigure` | — | ✓ | live | — |
| `R28VerticalScale` | — | ✓ | live | — |
| `Cover` | — | ✓ | live | — |
| `Disclosure` | — | ✓ | live | — |
| `Agenda` | — | ✓ | live | — |
| `SectionDivider` | — | ✓ | live | — |
| `ClaimPhoto` | — | ✓ | live | — |
| `ClaimBesideEvidence` | — | ✓ | live | — |
| `ThreeColumns` | — | ✓ | live | — |
| `PhotoBand` | — | ✓ | live | — |
| `Comparison` | — | ✓ | live | — |
| `MythAndFact` | — | ✓ | live | — |
| `DoAndDonT` | — | ✓ | live | — |
| `CycleChart` | — | ✓ | live | — |
| `LifespanTimeline` | — | ✓ | live | — |
| `BarChart` | — | ✓ | live | — |
| `RangePlot` | — | ✓ | live | — |
| `MilestoneTimeline` | — | ✓ | live | — |
| `BigNumber` | — | ✓ | live | — |
| `ThreeFigures` | — | ✓ | live | — |
| `Table` | — | ✓ | live | — |
| `Evidence` | — | ✓ | live | — |
| `StudyAnatomy` | — | ✓ | live | — |
| `Quote` | — | ✓ | live | — |
| `Glossary` | — | ✓ | live | — |
| `PracticalList` | — | ✓ | live | — |
| `Resources` | — | ✓ | live | — |
| `Definition` | — | ✓ | live | — |
| `Question` | — | ✓ | live | — |
| `CaseVignette` | — | ✓ | live | — |
| `ProcessSteps` | — | ✓ | live | — |
| `Statement` | — | ✓ | live | — |
| `PhotoStatement` | — | ✓ | live | — |
| `PhotoGrid` | — | ✓ | live | — |
| `Takeaways` | — | ✓ | live | — |
| `Closing` | — | ✓ | live | — |
| `LoopDiagram` | — | ✓ | live | — |
| `CauseChain` | — | ✓ | live | — |
| `HubAndSpoke` | — | ✓ | live | — |
| `Hierarchy` | — | ✓ | live | — |
| `Matrix` | — | ✓ | live | — |
| `ConceptMap` | — | ✓ | live | — |
| `DecisionPath` | — | ✓ | live | — |
| `PhotoCallout` | — | ✓ | live | — |
| `PhotoFade` | — | ✓ | live | — |
| `PhotoStat` | — | ✓ | live | — |
| `PhotoPair` | — | ✓ | live | — |
| `PhotoQuote` | — | ✓ | live | — |
| `CoverViolet` | — | ✓ | live | — |
| `SectionDividerViolet` | — | ✓ | live | — |
| `StatementViolet` | — | ✓ | live | — |
| `ThreeColumnsViolet` | — | ✓ | live | — |
| `CoverBlue` | — | ✓ | live | — |
| `ThreeColumnsBlue` | — | ✓ | live | — |
| `StatementBlue` | — | ✓ | live | — |
| `ClaimPhotoBlue` | — | ✓ | live | — |
| `PhotoMosaic` | — | ✓ | live | — |
| `PhotoCorner` | — | ✓ | live | — |
| `PhotoPanel` | — | ✓ | live | — |
| `PhotoCaptionStrip` | — | ✓ | live | — |
| `ForestPlot` | — | ✓ | live | — |
| `TimeSeries` | — | ✓ | live | — |
| `MediaStill` | — | ✓ | live | — |
| `CallToAction` | — | ✓ | live | — |
| `Speaker` | — | ✓ | live | — |
| `SectionProgress` | — | ✓ | live | — |
| `Word` | — | ✓ | live | — |
| `AnnotatedSentence` | — | ✓ | live | — |
| `TwoThemeSplit` | — | ✓ | live | — |
| `EdgeToEdgeData` | — | ✓ | live | — |
| `LabCard` | — | ✓ | live | — |
| `IndexWall` | — | ✓ | live | — |
| `KnockoutFigure` | — | ✓ | live | — |
| `VerticalScale` | — | ✓ | live | — |
| `WebGrammar` | — | ✓ | live | — |
| `Index` | — | ✓ | live | — |

Types = components/<Name>/<Name>.d.ts · Guide = its README (the .prompt.md) · Preview = its card as preview.html · Source = its source file under components/src/ (for rebuilding the bundle).

## Token decisions

- theme `T Petrol` was selected by `.t-petrol` in the CSS; the artifact applies it as data-theme="t-petrol" (bundle.css rules keyed on the old selector do not follow the picker)
- theme `T Violet` was selected by `.t-violet` in the CSS; the artifact applies it as data-theme="t-violet" (bundle.css rules keyed on the old selector do not follow the picker)
- theme `T Blue Dark` was the compound selector `.t-blue.dark` — flattened to one theme id `t-blue-dark`; the artifact switches themes with data-theme="t-blue-dark", so rules in bundle.css keyed on the old selector do not follow the theme picker
- theme `T Petrol Dark` was the compound selector `.t-petrol.dark` — flattened to one theme id `t-petrol-dark`; the artifact switches themes with data-theme="t-petrol-dark", so rules in bundle.css keyed on the old selector do not follow the theme picker
- theme `T Violet Dark` was the compound selector `.t-violet.dark` — flattened to one theme id `t-violet-dark`; the artifact switches themes with data-theme="t-violet-dark", so rules in bundle.css keyed on the old selector do not follow the theme picker
- theme `Dark` was selected by `.dark` in the CSS; the artifact applies it as data-theme="dark" (bundle.css rules keyed on the old selector do not follow the picker)
- 17 token(s) were listed under one kind by the export but their value, or their fs-/lh-/fw-/ls- name, shows another — re-filed: `--text-body` `font`→color, `--text-muted` `font`→color, `--text-subtle` `font`→color, `--text-link` `font`→color, `--text-on-action` `font`→color, `--text-inverse` `font`→color, `--action-primary-text` `font`→color, `--action-ghost-text` `font`→color +9 more
- font sizes, weights and line heights are separate custom properties in the export, not a type scale — they are filed as plain token families (font sizes, line heights, letter spacing)
- 1 class rule(s) repeat an existing style exactly and were folded into its note
- 1 rule(s) carry the name of an earlier style (a class named like an element, .body beside body) and were folded into it: what only the later rule sets completes the style, its note names both
- 8 type style(s) were read from CSS rules on elements and named classes (body, display, h1, h2, lead, small …); each style’s usage line names the rule it came from
- dropped 9 — not a length the artifact can hold (px/rem/em/% or 0; no calc()): `--sec` = `clamp(64px,7.4vw,112px)`, `--sec-tight` = `calc(var(--sec) * .62)` → `calc(clamp(64px,7.4vw,112px) * .62)`, `--measure` = `68ch`, `--measure-tight` = `54ch`, `--w-sec` = `clamp(88px,9.6vw,164px)`, `--w-sec-tight` = `clamp(56px,6vw,96px)` +3 more
- @font-face `Inter` 400 normal is split across several files (unicode-range subsets); every file is kept but the ranges are not — the browser picks one face
- @font-face `Inter` 500 normal is split across several files (unicode-range subsets); every file is kept but the ranges are not — the browser picks one face
- @font-face `Inter` 600 normal is split across several files (unicode-range subsets); every file is kept but the ranges are not — the browser picks one face

## Left out of the artifact

Nothing: every file took a place in the artifact.

## Carried as plain files

Kept in the artifact exactly as they were in the project, not parsed and not shown by any section (189 files):
- 100 × HTML pages that are neither a component card nor a template
- 38 × font files no @font-face rule references
- 29 × foundations pages (the token sections show their content; the page itself rides along as a file)
- 18 × starter templates’ files
- 2 × raw outputs of the standalone version’s compiler
- 1 × agent-instruction files (renamed so no agent tool auto-loads them)
- 1 × other files (data, configuration, archives)

## Kept aside

- template `Lecture deck – six boards, three palette…[41 chars]` (`templates/lecture-deck`, entry `templates/lecture-deck/LectureDeck.dc.html`): its files are in this system as plain files under its folder, kept for the record: not part of the design system and not migrated by this run (a small export of its own: this script, on its folder, makes it a canvas, or a Slides deck when it is one deck)
- template `Paliativní péče — výživa u demence (CZ)` (`templates/paliativni-pece`, entry `templates/paliativni-pece/PaliativniPece.dc.html`): its files are in this system as plain files under its folder, kept for the record: not part of the design system and not migrated by this run (a small export of its own: this script, on its folder, makes it a canvas, or a Slides deck when it is one deck)
- template `Palliative care – nutrition in dementia …[44 chars]` (`templates/paliativni-pece-en`, entry `templates/paliativni-pece-en/PalliativeCareEN.dc.html`): its files are in this system as plain files under its folder, kept for the record: not part of the design system and not migrated by this run (a small export of its own: this script, on its folder, makes it a canvas, or a Slides deck when it is one deck)
- template `Reel — timing sheet + animated preview` (`templates/reel`, entry `templates/reel/Reel.dc.html`): its files are in this system as plain files under its folder, kept for the record: not part of the design system and not migrated by this run (a small export of its own: this script, on its folder, makes it a canvas, or a Slides deck when it is one deck)
- template `Reel s fotografií — timing sheet + previ…[42 chars]` (`templates/reel-zenske-zdravi`, entry `templates/reel-zenske-zdravi/ReelZenskeZdravi.dc.html`): its files are in this system as plain files under its folder, kept for the record: not part of the design system and not migrated by this run (a small export of its own: this script, on its folder, makes it a canvas, or a Slides deck when it is one deck)
- template `Slide kit – 26 compositions, any palette` (`templates/slide-kit`, entry `templates/slide-kit/SlideKit.dc.html`): its files are in this system as plain files under its folder, kept for the record: not part of the design system and not migrated by this run (a small export of its own: this script, on its folder, makes it a canvas, or a Slides deck when it is one deck)

## Dropped

Nothing.
