# Tokens: human-readable export

For AI tools and new contributors: what every semantic token is for. Values
live in `tokens/*.css` (CSS) and `tokens/tokens.json` (W3C DTCG).
Components read **semantic** names, never a raw hex.

## Themes
`.t-blue` (default, and the only chrome theme) · `.t-petrol` · `.t-violet`: set
on a page, section or card. `.dark` on any of them flips to that theme's dark
punctuation surface. There is no dark *mode*; `.dark` is a band.

## Topic → theme
Blue = clinical/medical (Medicína, Přehled) · Petrol = longevity (Dlouhověkost, Výživa, Fitness, Spánek, Lifestyle) · Violet = women's health (Ženské zdraví).

## Text
| token | for |
|---|---|
| `--text-body` (= `--ink`) | reading text and headings |
| `--text-muted` (= `--muted`) | supporting copy, meta, captions. 4.5:1 on its surface |
| `--text-subtle` (= `--soft`) | the least important text still meant to be read. Pair with italic, never make it paler |
| `--text-link` (= `--accent`) | links and the "more" affordance |
| `--text-on-action` (= `--onacc`) | text on a primary pill |
| `--text-inverse` | text the colour of the surface (rare) |

## Surfaces (the four-step ladder)
| token | for |
|---|---|
| `--surface-page` (= `--surface`) | level 0, the reading ground |
| `--surface-band` (= `--band`) | level 1, the tinted section stripe |
| `--surface-card` | level 2, a white sheet on a hairline |
| `--surface-tint` (= `--tint`) | a topic card's own ground |
| `--surface-dark` | level 3, punctuation: utility bar, scrim, closing CTA |

## Borders
`--border-default` (= `--rule`) the 1px hairline · `--border-active` on hover/open · `--border-focus` the 2px focus ring at 3px offset.

## Actions
`--action-primary` / `--action-primary-text` the filled pill · `--action-ghost-border` / `--action-ghost-text` the outline pill.

## Icons
`--icon-default` accent · `--icon-muted`.

## Photo scrim
`--scrim-photo`: `rgba(15,53,87,.50)`. Never text on a photograph without it.

## Elevation
`--shadow-lift` (= `--lift`) a surface responding in place · `--shadow-float` (= `--lift-strong`) a surface floating over the page. Nothing has a shadow at rest.

## Charts
Declared per theme in `colors.css` (not `dataviz.css`), so a `.t-*`/`.dark` board re-resolves them. `dataviz.css` holds only stroke and tick geometry.

`--chart-series-1` accent · `--chart-series-2` sand (the only second series) · `--chart-series-1-a75/-a50/-a25` the opacity ladder for ranked categories · `--chart-axis` · `--chart-grid` · `--chart-label` · `--chart-emphasis` ink, for the one highlighted point.

## Type roles
`.display .h1 .h2 .lead .body .small .kicker .figure .card-title .eyebrow .meta`: web.
`.d-statement .d-claim .d-sub .d-lead .d-body .d-mono .d-figure`: deck (slides/deck.css).
Families: `--font-display` Geist · `--font-body` Inter · `--font-mono` Geist Mono.

## Space
`--s-2 --s-6 --s-8 --s-12 --s-14 --s-18 --s-20 --s-24 --s-26 --s-32 --s-36 --s-44 --s-64`: collected from real use, not an 8px grid.
`--shell` 1240 · `--gut` 24 · `--gap` 24 · `--sec` fluid 64–112 · `--card-pad` 28.

## Radii
`--radius` 16 card · `--radius-lg` 24 photo · `--radius-mark` 14 / `--radius-mark-lg` 18 icon tile · `--radius-pill` 999.

## Motion
`--ease` cubic-bezier(.22,1,.36,1): the only curve. `--dur-fast` .25s · `--dur` .3s · `--dur-card` .35s · `--dur-photo` .6s · `--dur-reveal` .75s.

## Claim measure (deck)
Claim 74px in a 1400px column, ≤70 characters, two lines. BESIDE column → 58px. Statement 102px in 1560px, ≤90 characters, three lines. Over the limit: `.long` steps the size down (60 / 84px); never widen the column.

## Fixed canvases
Deck 1920×1080: margin 120, live 1680, claim y 140, zone 352 + 576, scale y 962.
Reel 1080×1920: UI covers top 250 and bottom 340; margin 96.
Feed 1080×1350 (4:5). Square 1080. Link preview 1200×630.

## Deck type floor

Body 28px by default (`--d-body`); 24px (`--d-body-min`) allowed on any board; mono 19px. Nothing goes below 24px body or 19px mono.
