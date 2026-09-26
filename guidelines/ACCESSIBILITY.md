# Accessibility

**Baseline: WCAG 2.2 AA** for the website, handouts and social images.
Slides are held to the contrast and minimum-size rules below; screen-reader
semantics do not apply to a projected deck, but do apply to the PDF export
(tagged headings, reading order, alt text on figures).

## Contrast
- Body and meta text: 4.5:1 against what is actually behind it. Every
  `--text-muted` and `--text-subtle` value in every theme, light and dark, is
  pre-cleared, so a theme swap cannot break it.
- Headline-scale type (display, h1, deck claim and statement): 3:1 minimum.
- Text on photographs: measured against the scrim colour, not the gradient.
  `--scrim-photo` at .50 over any of the shipped duotoned images clears 4.5:1
  for white. Natural-colour Clinical photographs need the scrim raised to
  .62 or a solid panel.
- Never signal hierarchy by making text paler. Use size, weight or italic.
- Colour is never the sole carrier: a topic colour is always paired with the
  topic name; a chart series is labelled, not only coloured; a linked row
  carries the outward mark, not only a hover colour.

## Type size
- Web body 18px, nothing readable below 15px.
- Deck: nothing below 19px (mono) at 1920 wide; body 26px; the claim-to-body
  ratio 2.8× is a legibility decision for the back row.
- Reel: nothing below 46px at 1080 wide.
- Print: 10pt minimum for captions, 11pt body.

## Targets and focus
- Every interactive target is at least 44×44 CSS px; the pill is 56px tall,
  the small pill 46, the menu button 52, the accordion summary 56.
- Focus is visible everywhere: 2px `--border-focus` outline at 3px offset.
  Never `outline: none` without a replacement.
- The mobile menu button carries `aria-expanded` and `aria-controls`.
- Current page is marked with `aria-current="page"`, and visually by weight
  and underline, not colour alone.

## Motion
- One easing curve, durations 250–750ms.
- Every entrance is armed by script and wrapped in
  `prefers-reduced-motion: no-preference`; the page renders fully formed
  with motion off.
- No autoplay video, no parallax, no infinite animation.

## Structure
- One `h1` per page. Headings in order; the eyebrow is a `span`, not a heading.
- The FAQ is native `<details>`, so it is keyboard-operable and findable by
  in-page search with no script.
- Icons are `aria-hidden` unless they are the only label, in which case they
  carry a `<title>`.
- Every photograph has alt text describing the subject. Decorative duotone
  bands use `alt=""`.
- Links that leave the site say so (the outward mark) and open with
  `rel="noopener noreferrer"`.

## Language
- `lang="cs"` on Czech pages, `lang="en"` on the English mirror; never mixed
  without a `lang` on the span.
- Czech one-letter prepositions bind with a non-breaking space so screen
  readers and line breaks both behave.

## Print and PDF
- Decks export to PDF with the slide title as the page heading and figures
  captioned; PPTX export keeps text as text.
- Handouts: A4 and Letter, both; 11pt body, 20mm margins, headings tagged.
