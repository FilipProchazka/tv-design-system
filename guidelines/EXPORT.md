# Export

A board is authored once and leaves by four routes: the screen, PDF, PowerPoint,
and an image. Three of them are faithful. PowerPoint is a **capture**, not a
render: it walks the DOM, measures it, and re-emits it as native shapes and text
boxes. Everything the browser does at paint time is therefore lost.

This card is the list of what is lost, written from a 53-board clinical deck
where each one shipped broken at least once. Added 20 September 2026.

## The rule

**Never export a board straight from its source file.** Generate a prepared copy
and capture that. The source keeps the live, correct version; the copy carries
the substitutions. The project owns the build script; the system owns this list.

## What the capture cannot do

**1. Resolve a CSS variable inside an SVG.** `fill="var(--accent)"` computes
correctly in every browser and comes out grey in the capture. Substitute the
literal value for the board's theme before capturing. This is the single most
common defect, and it is silent: the chart renders, in the wrong colour.

**2. Rasterise every SVG.** Some fail outright and land as an empty box. There is
no reliable predictor, so check every chart in the output. Pre-render the ones
that fail to PNG at 3x the board size, and keep the SVG in the source.

**3. Centre text inside a box.** Text is top-anchored in each emitted box, so a
letter centred by flex drifts off the centre of the shape around it. Give the
shape an explicit height and centre the letter with `line-height`, which is a
property of the text and survives. Row-level flex centring between two elements
is fine, because positions are measured from the live DOM. The certainty mark is
the worked example: `.tv-cert-mark` at `40px` square with `line-height: 40px`.
One refinement, found by reading the generated XML: PowerPoint anchors the text
box to the top and adds its own **2.67px (25400 EMU) top inset**, so a letter
centred on the full height still lands 2.67px low. Subtract twice the inset
from the line-height in the export copy and the glyph sits on the shape's
centre line. A residual of up to 2px remains on some marks, from the capture's
own box rounding, and is not worth chasing.
Do not force the same line-height on its label: a two-line label then centres
against nothing. And a shape sized **inline** needs its own line-height written
alongside, or the class rule centres it against the wrong height: the certainty
legend sets 72px marks that way, and they centred on 40px until the build
matched them.

**4. Fetch reliably.** Image requests fail under capture load, leaving gaps that
do not reproduce when you open the same page by hand. Embed every image as a
data URI in the copy.

**5. Read speaker notes from the boards.** The notes live per board as
`data-speaker-notes`; the exporter reads one JSON manifest from the document
head. In a design component that manifest cannot live in the helmet, where a
blob of any size wedges the live preview. The prepared copy has a plain head, so
it goes there.

**6. Keep a manual line break.** A `<br>` is dropped and the two lines merge
into one paragraph, which PowerPoint then rewraps to the box width. On a claim
that moves the break; on a stack of affiliation lines it runs four names into
one sentence. **Do not use `<br>` on a board.** Write each line as its own
block element: it renders identically and survives as a separate paragraph.

## What survives

Inline styles, absolute positions, backgrounds, borders, images, and text with
its family, size, weight and colour. That is why the deck grammar, absolutely
positioned blocks on a fixed 1920x1080 grid, converts cleanly in the first place.

## Fonts

Geist, Geist Mono and Inter are not installed on the machine opening the file, so
PowerPoint substitutes and lines rewrap. Either accept it, or export with a
substitution to a universally present face when exact line breaks matter more
than the typeface. State which one was chosen when handing the file over.

## Check the output, not the build log

A clean build is not a clean deck. Every capture needs a pass over the boards
that carry a chart, a certainty mark, a photograph, or a figure with a unit.

## `break-inside: avoid` on `img`, in a paged document

Found 21 September 2026, after it blocked the renderer on a seven-chapter
handout three sessions running. Inside `<doc-page>`, a global
`img { break-inside: avoid }` puts layout into a loop that never converges:
the page never paints, `eval_js` times out, and **no console error appears**,
because the main thread is blocked rather than throwing. It survives a reload
and reproduces in a clean iframe, so it reads like a broken document rather
than a CSS conflict.

Put `break-inside: avoid` on the **wrapper** that holds the image and its
caption, never on `img` itself. The wrapper keeps the figure whole across a
page break, which is what the rule was for.

Symptom to recognise: a paged document that renders instantly once the
`<doc-page>` wrapper is swapped for a plain `<div>`, and renders again with
the component restored once the images are removed. That pair of tests
isolates it in two minutes.
