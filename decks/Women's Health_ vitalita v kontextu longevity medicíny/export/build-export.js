/* Build the PPTX export copies from the deck.
 *
 * SINGLE SOURCE OF TRUTH for the export. Do not hand-edit deck-export.html or
 * export/deck-inline.html; they are generated. Edit the deck, then re-run this.
 *
 * How to run (two steps, both from tool calls):
 *   1. copy_files: "Women's Health - vitalita v longevity medicíně.dc.html"
 *      -> "export/_deck-src.txt"
 *      (the staging copy exists because the script sandbox refuses the deck's
 *       own filename: apostrophe and diacritics are disallowed there)
 *   2. run_script:
 *      const code = await readFile('export/build-export.js');
 *      await new Function('readFile','readFileBinary','saveFile','log',
 *        '"use strict";return (async()=>{' + code + '})()'
 *      )(readFile, readFileBinary, saveFile, log);
 *
 * Every transform below exists because the PowerPoint capture cannot do the
 * thing the browser does. The reasoning is in
 * _ds/<design-system>/guidelines/EXPORT.md. If you remove one, read that first.
 */

const DECK = 'export/_deck-src.txt'; // staging copy of the deck, see header

/* Chart colours, resolved for the violet theme. The capture cannot resolve a
   CSS variable inside an SVG, so every var() in a chart is substituted here.
   If the deck ever changes theme, this table changes with it. */
const THEME = {
  '--accent': '#6D2A8C',
  '--ink': '#401252',
  '--muted': '#6B4B7D',
  '--rule': '#CDB3DC',
  '--chart-axis': '#CDB3DC',
  '--chart-series-1-a75': 'rgba(109,42,140,.75)',
  '--chart-series-1-a25': 'rgba(109,42,140,.25)',
  '--font-mono': "'Geist Mono',ui-monospace,Menlo,monospace",
};

/* Charts the rasteriser refuses outright, pre-rendered to PNG. The deck keeps
   the live SVG; only the export copy swaps. */
const RASTER = [
  [/<svg viewBox="0 0 800 190"[\s\S]*?<\/svg>/,
   '<img src="assets/charts/peri-1.png" alt="FSH a LH v perimenopauze kolísají a opakovaně přesahují rozmezí mladých žen" style="display:block;width:820px;height:195px;margin-top:16px">'],
  [/<svg viewBox="0 0 800 236"[\s\S]*?<\/svg>/,
   '<img src="assets/charts/peri-2.png" alt="Estradiol a inhibin v perimenopauze: nepravidelné vrcholy, mezi nimi hluboké poklesy" style="display:block;width:820px;height:242px;margin-top:10px">'],
];

/* The capture top-anchors text inside each emitted box and PowerPoint adds a
   2.67px (25400 EMU) top inset, so a letter centred by line-height lands that
   much below the centre of its shape. Compensating: line-height = height minus
   twice the inset puts the glyph back on the shape's centre line. The deck
   itself keeps flex centring and is unaffected. */
const PPT_INSET = 5.34;
const EXPORT_CSS = `<style id="export-fixes">
.tv-cert-mark{display:block;width:40px;height:40px;line-height:${40 - PPT_INSET}px;text-align:center}
.tv-cert-chip{line-height:1}
</style>`;

/* A mark sized inline (the certainty legend uses 72px) needs the same
   compensated line-height written alongside its height. */
function centreSizedMarks(html) {
  let n = 0;
  const out = html.replace(/<div class="tv-cert-mark" style="([^"]*?)"/g, (all, style) => {
    const h = style.match(/height:\s*(\d+)px/);
    if (!h || /line-height/.test(style)) return all;
    n++;
    return `<div class="tv-cert-mark" style="${style};line-height:${+h[1] - PPT_INSET}px"`;
  });
  log('inline-sized marks given a compensated line-height: ' + n);
  return out;
}

const src = await readFile(DECK);
const helmet = src.slice(src.indexOf('<helmet>') + 8, src.indexOf('</helmet>')).trim();
const openTag = src.match(/<x-import component-from-global-scope="deck-stage"[^>]*>/)[0];
const from = src.indexOf(openTag) + openTag.length;
let slides = src.slice(from, src.indexOf('</x-import>', from)).trim();

/* Speaker notes live on each section as data-speaker-notes, but the exporter
   reads one JSON manifest from the head. It cannot live in the deck's helmet:
   a blob that size there wedges the live preview. */
const notes = [];
const re = /<section class="slide[^"]*"[^>]*?data-speaker-notes="([^"]*)"/g;
let m;
while ((m = re.exec(slides))) {
  notes.push(m[1].replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
                 .replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>'));
}

let vars = 0, unmapped = [];
slides = slides.replace(/<svg[\s\S]*?<\/svg>/g, (svg) =>
  svg.replace(/var\((--[a-z0-9-]+)\)/g, (all, name) => {
    if (!(name in THEME)) { unmapped.push(name); return all; }
    vars++; return THEME[name];
  }));
if (unmapped.length) log('UNMAPPED VARS IN SVG: ' + [...new Set(unmapped)].join(', '));

for (const [pattern, replacement] of RASTER) {
  if (!pattern.test(slides)) log('WARNING: raster target not found: ' + pattern);
  slides = slides.replace(pattern, replacement);
}

slides = centreSizedMarks(slides);

let html = `<!DOCTYPE html>
<html lang="cs">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Women's Health: vitalita v kontextu longevity medicíny</title>
${helmet}
${EXPORT_CSS}
<script type="application/json" id="speaker-notes">${JSON.stringify(notes)}<\/script>
<script src="./deck-stage.js"><\/script>
</head>
<body style="margin:0;background:#000">
<deck-stage width="1920" height="1080">
${slides}
</deck-stage>
</body>
</html>
`;
await saveFile('deck-export.html', html);

/* Image fetches fail under capture load, so every image is embedded. */
const paths = [...new Set([...html.matchAll(/src="(assets\/[^"]+\.(?:jpg|jpeg|png|svg))"/g)].map(x => x[1]))];
const b64 = async (blob) => {
  const buf = new Uint8Array(await blob.arrayBuffer());
  let s = '', chunk = 0x8000;
  for (let i = 0; i < buf.length; i += chunk) s += String.fromCharCode.apply(null, buf.subarray(i, i + chunk));
  return btoa(s);
};
const mime = (p) => p.endsWith('.png') ? 'image/png' : p.endsWith('.svg') ? 'image/svg+xml' : 'image/jpeg';
for (const p of paths) {
  html = html.split('src="' + p + '"')
             .join('src="data:' + mime(p) + ';base64,' + await b64(await readFileBinary(p)) + '"');
}

/* deck-inline.html sits one level down, so the shared refs step up. */
html = html.split('href="_ds/').join('href="../_ds/')
           .split('src="_ds/').join('src="../_ds/')
           .split('src="./deck-stage.js"').join('src="../deck-stage.js"');
await saveFile('export/deck-inline.html', html);

const count = (slides.match(/<section class="slide/g) || []).length;
log(`slides ${count} · notes ${notes.length} · svg vars resolved ${vars} · images embedded ${paths.length}`);
if (count !== notes.length) log('WARNING: a slide is missing data-speaker-notes');
