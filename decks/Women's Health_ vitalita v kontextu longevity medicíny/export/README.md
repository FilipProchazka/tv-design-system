# export/

Generated files. Do not edit anything here by hand.

| File | What it is |
|---|---|
| `build-export.js` | The build. The only file here you may edit. |
| `_deck-src.txt` | Staging copy of the deck, overwritten by each build. |
| `deck-inline.html` | What the PPTX is captured from. Images embedded. |
| `../deck-export.html` | Intermediate, flattened deck. Useful for debugging the build. |
| `speaker-notes.json` | Notes dump, kept for reference. |

## Regenerating

Edit the deck, then run the build, then export. Two steps:

**1.** Copy the deck to the staging path `export/_deck-src.txt`. The staging copy
exists because the script sandbox rejects the deck's own filename, which carries
an apostrophe and diacritics.

**2.** Run the build:

```js
const code = await readFile('export/build-export.js');
await new Function('readFile','readFileBinary','saveFile','log',
  '"use strict";return (async()=>{' + code + '})()'
)(readFile, readFileBinary, saveFile, log);
```

It prints a slide count, a notes count and two warnings worth reading: an
unmapped CSS variable in a chart, and a slide missing its speaker notes.

Then open `export/deck-inline.html` and run the PPTX export against it, 1920x1080,
one step per slide, `resetTransformSelector: "deck-stage"`.

## Why this exists

Presenting, the thumbnail rail, speaker notes and PDF all run straight off the
deck. Only the PowerPoint capture needs a prepared copy, for four reasons
recorded in the design system at `guidelines/EXPORT.md`: the notes manifest
cannot live in a design component's helmet, CSS variables do not resolve inside
a captured SVG, some SVG will not rasterise at all, and image fetches fail under
capture load.

## Known constraint

The chart colour table in the build is resolved for the **violet** theme. If the
deck changes theme, update `THEME` in `build-export.js` or the charts will keep
the old hue while the boards change.
