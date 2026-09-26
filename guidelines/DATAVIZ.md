# Data visualisation

Charts on her slides are evidence, so they follow the evidence rules: one
claim per chart, the source stated, the study design graded where she states
it. The chart family comes from her deck system (PLOT and DIAGRAM layouts).

## Colour
- **Series 1** is the theme accent. **Series 2** is sand `#F0D2A2`, used only
  when two curves must be told apart (the oestrogen/progesterone cycle).
- **Sand needs a dark or tinted ground.** On white it measures 1.45:1: below
  the 3:1 that non-text graphics require. Her source only ever used it on the
  tinted violet cycle chart. **A two-series chart therefore runs on a `.dark`
  board**, where sand clears 8:1. A chart on paper gets one series, or two
  distinguished by the accent opacity ladder.
- **Ranked or stacked categories** use the accent opacity ladder
  100 / 75 / 50 / 25: one hue, four steps. A category that needs a fifth
  step is two charts.
- **The one emphasised point** is ink, larger, with its value labelled.
- Axis and grid are the hairline `--rule`. Labels are `--muted` in mono.
- No third hue, no gradients in fills, no 3D, no drop shadows on bars.

## Type on charts
- Axis labels, tick values, units, citations: Geist Mono 19px (deck),
  15px (web), tabular numerals, kicker tracking for unit labels.
- The chart's claim is the slide claim (74px), never a chart title inside the
  plot area.
- The source sits bottom left in mono: author, year, journal, and the grade
  ticks top right.

## Chart types and when
| type | use | rule |
|---|---|---|
| Line / curve | change over time, a cycle | max 2 series; sand for the second; mark the phase boundaries with hairlines |
| Bar comparison | 2–6 discrete groups | horizontal when labels are words; sorted unless the order is meaningful |
| Big single number | one figure that carries the slide | mono at 260px, the unit in kicker, the sentence beside it that makes it mean something |
| Evidence pyramid | how strong the support is | five rungs, ink outline, the current rung filled accent |
| Decision path | a clinical algorithm | ≤7 nodes, yes/no as mono kickers, terminal nodes filled; source the guideline |
| Cause chain | mechanism | left to right, ≤5 steps, arrows are the 24px `arrow` icon |
| Before / after | one intervention, one outcome | two columns, the delta stated as a figure |
| Timeline | course of a disease or a trial | the scale is the footer scale of the slide |
| Table | reference data | mono numerals, hairline rows, no zebra fill, ≤6 columns |
| Body / organ diagram | where | outline in ink, the region in accent; from the sourced illustration set, never hand-drawn |
| Mortality / risk stack | ranges with a direction | horizontal bars from a common baseline, ranges as accent-25 spans with the midpoint in accent |

## Sentiment and grading
- Three signals, from `tokens/signal.css`: **positive** `#0B6A52`,
  **negative** `#A3391C`, **caution** `#8A5A12`: a warm/cool pair, never
  red/green. Each has `-ink` (text, ≥4.5:1 on paper), `-soft` (a tint to sit
  a row on), `-edge` (a rule or bar) and an `-on-dark` light variant. On a
  `.dark` board the caution signal IS `--data-sand`, so the layer adds no
  hue the palette did not already have.
- Use them only where **she states a verdict**: benefit vs risk, do vs don't,
  myth vs fact, a mortality range. Never to decorate a neutral row.
- **Colour never carries the verdict alone**: the row is labelled
  ("Benefity", "Rizika") and the chip prints the word.
- The evidence ladder uses the **grading ramp** `--grade-5 … --grade-1`: the
  theme accent at four steps plus the rule colour, so a grade re-tints with
  the topic and never introduces a hue.

## Labelling
- Every axis has a unit. Every series has a text label at its end, not only a
  legend.
- Czech decimals use a comma; ranges use an en dash without spaces (`1,2–1,6`).
- Percentages carry a non-breaking thin space: `24 %`.

## Accessibility
- Two series must differ in more than colour: sand is also dashed or marked.
- The chart's message is stated in the claim text, so a reader who cannot see
  the chart still gets the finding.
- Export charts as SVG where possible so text stays text in PDF.
