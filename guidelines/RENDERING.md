# Rendering

Rules that exist because a document failed to paint, not because of taste. Added
21 September 2026, from the Women's Health handout, which hung the renderer five
times in one session.

## Never use `text-wrap: balance` or `text-wrap: pretty`

Both ask the browser to lay a block out, measure it, and lay it out again. In a
live-rendering runtime that re-measure feeds back into the render and the page
never settles: no paint, no error, nothing in the console. The document simply
appears broken.

Set a measure instead. A `max-width` in `ch` or `px` on the heading and body
roles gives you the same control over ragging, costs nothing, and cannot loop.

This overrides the general advice to reach for `text-wrap: pretty`. On this
system it is banned.

## Never size a flex item with both a basis and a percentage width

`flex: 1 1 300px` plus `width: 100%` on the same element is a cyclic dependency:
the width depends on the track, the track depends on the width. Same silent
hang.

The safe pattern for a photograph beside a column is a grid:
`grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr))` with
`min-width: 0` on the items. `auto-fit` alone is not enough: an auto-fit track
wrapping a child with a `max-content` column loops the same way, which is what
`min()` guards against.

## Corollary: `flex: 1` on a text column

A flex item that grows to fill a row is the third variant of the same failure.
Use a grid with a fixed track and `minmax(0, 1fr)`:
`grid-template-columns: 104px minmax(0, 1fr)`.

## How to recognise it

The page renders as raw code or as a blank sheet, the console is empty, and any
script you run against the page times out. Bisect by deleting blocks until it
paints; the last block you removed holds the cycle. Suspect, in order: a
`text-wrap` declaration, a flex item with a basis and a width, an `auto-fit`
track around intrinsic content.
