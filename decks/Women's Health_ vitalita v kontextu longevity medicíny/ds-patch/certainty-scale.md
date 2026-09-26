# Patch proposal: certainty scale (A/B/C/P) + figure typesetting

For **Tereza Vágnerová Design System**, proposed version **0.7.0**.
Written from the Women's Health deck, where the tick ladder could not carry the
brief. The design system is attached to that project read-only, so this is a
paste-in patch rather than a commit.

## Decision

Close the readme's "Known divergence to resolve" in this direction: **slides
stop grading by study design and start marking certainty.**

| Mark | Meaning | Drawn as |
|---|---|---|
| A | High certainty: consistent, good-quality evidence | Filled accent square, white letter |
| B | Moderate certainty: convincing, with stated limits | Outlined accent square, accent letter |
| C | Low or very low certainty: limited or inconsistent | Dashed muted square, muted letter |
| P | Practical coaching heuristic, not a grading of evidence | Band-tinted square, italic label |

*(Wording revised 14 Sep 2026 from the author's own fact-check pass: the four
levels name the **certainty of the evidence**, not the strength of a
recommendation. "Guideline" was dropped from A, because a guideline is a
source, not a certainty.)*

On a 1920 board the mark sets at **40px with a 20px letter**, the label at 18px.
The label scales to clear the mono floor; the mark deliberately does not. A
certainty mark is a margin note on the claim, read once and after it, so a
letter near title scale competes with the sentence it exists to qualify. The
first draft shipped it at 56px/27px and it read as a headline.

## Why not the ladder

1. **Wrong axis.** "Kohortová studie" says where a number came from. It does not
   say how much weight to put on it. A guideline recommendation and a large
   cohort finding differ on the second axis and agree on neither.
2. **No slot for P.** Hand portions are not weak evidence, they are not
   evidence. On a five-rung ladder they render as one lit rung, which reads as
   "bad study" rather than "different kind of thing".
3. **Ticks are a quantity.** Four lit against two lit is a comparison the
   audience makes whether or not it is meant, which is exactly what a deck
   separating A, C and P claims must prevent.

## What changes

- `tokens/signal.css`: `.tv-cert`, `.tv-cert-chip` and `.tv-cert-scrim`
  classes, appended after GRADING. No new hue: A and B are the theme accent, C
  is muted, P is the band, so a mark re-tints with the topic.
- The rules reference `var(--accent)` / `var(--muted)` / `var(--band)`
  **directly, with no `--cert-*` alias layer**. An alias declared in `:root`
  as `var(--accent)` is substituted at computed-value time on the root, which
  is the default blue theme, and that resolved blue then inherits into every
  subtree, so `.t-violet` and `.dark` can never re-tint it. The first draft of
  this patch had exactly that bug: blue A and B squares on a violet deck.
- `.dark` overrides for the **P** fill on both the mark and the chip. P is the
  one level drawn as a tint rather than as accent, and `--band` / `--ink` are
  only a contrasting pair on a light board: on a dark one `--ink` flips to white
  while `--band` stays the light tint, so the letter went white on white. The
  fill becomes a translucent wash of the board's own ink instead, which is the
  remedy `signal.css` already uses for the sentiment tints.
- **Latent bug worth fixing separately:** `--grade-5:var(--accent)` and the
  rest of the GRADING ramp are declared the same way. They only look correct
  because the ladder has so far been used on blue surfaces. Re-declare them on
  the theme selectors, or inline the theme vars, before the ladder is used on a
  petrol or violet board.

These three defects are one class of mistake: **a token pair that is only valid
on one surface.** Blue-on-violet came from resolving a theme var too early,
white-on-white from assuming band and ink contrast everywhere. Anything added to
this file should be checked on a light board, a `.dark` board and a non-blue
theme before it ships.
- `--grade-*` tokens stay, marked deprecated for slides.
- `readme.md`: divergence section rewritten as resolved.
- Component inventory gains **Certainty**; **Grade** is scoped to publications.

## Still open, for you to decide

`PublicationRow` keeps its `grade` prop and the site keeps its six levels. A
publication row naming a study design is defensible, and it is a different
surface from a slide. If you would rather have one vocabulary everywhere, the
row's label should become the study design in plain words with no ticks, and
`Grade` retires completely. I did not decide that for you.

## Suggested CHANGELOG entry

```
## 0.7.0

### Evidence
- Slides and reels now mark CERTAINTY (A/B/C/P) rather than study design.
  Four kinds of mark, never a count of ticks, so an A claim and a P heuristic
  cannot read as equally certain. Tokens and classes in tokens/signal.css.
- Grade and the five-rung ladder are scoped to PublicationRow. Deprecated on
  slides. --grade-* tokens retained.
- Closes the "Grade levels differ between surfaces" divergence, in favour of
  certainty on boards and study design on publications.
```


---

# Second patch: the figure-and-text line

Also from the Women's Health deck. A 66px mono figure in a fixed-width column
overflowed it and collided with the sentence beside it: "150–300" ran straight
into "minut". A second defect on the same slide, `2× +`, was a numeral and a
floating operator set as one figure, which mono tabular spacing pulls apart.

Both are setting, not content, and nothing in `guidelines/TYPESETTING.md`
covered them. Added there as **"Figure and its text: the two-scale line"**:

- the figure column is `max-content`, never a fixed px width;
- **one grid per stack**, not one per row, so rows align without a fixed width;
- a figure is one token, qualifiers go in the sentence ("2×" + "a více týdně"),
  and a genuine comparison glyph is bound with nbsp (`≤&nbsp;8`);
- the space between them is `column-gap`, so it cannot collapse.

Suggested CHANGELOG addition under 0.7.0:

```
### Typesetting
- TYPESETTING.md gains the figure-and-text rule: max-content figure column,
  one grid per stack, a figure is one token, column-gap for the space.
  Written from a board where a display figure overflowed a fixed column and
  collided with its own sentence.
```


---

# Third patch: affiliation placement

The Women's Health deck carried all four affiliations on the title slide and
again on the closing slide. Nothing in the readme said where they belong, only
what they are called, so both placements looked equally correct.

Rule added to **"Affiliations — canonical and closed"**: the four names appear
in exactly ONE place per artifact, the closing (last slide, page footer, final
reel frame), never on a cover or hero. Reasons, in the section's own voice: four
registered names set small under a title read as a letterhead, they compete with
the single line the audience came for, and at cover scale they are not legible
from the back of a theatre. Her name alone carries the cover. A running footer
or nav strip may use the two allowed short forms instead.

Suggested CHANGELOG addition under 0.7.0:

```
### Identity
- readme: affiliations gain a placement rule (once per artifact, at the closing,
  never on a cover). Written after a lecture deck listed all four on its title
  slide, where they read as a letterhead.
```


---

# Sync note, 14 Sep 2026 (design system 0.7.0)

The bound design system moved to **0.7.0 (13 Sep 2026)** while these three
patches were still pending. None of them is upstream yet: the live system has no
certainty scale, no figure-and-text rule, and no affiliation placement rule. The
local copy under `_ds/` is now **0.7.0 plus these three patches**, re-merged
onto the new upstream files rather than overwritten.

One collision worth resolving before the patch is applied upstream. 0.7.0's own
type work arrived at the same conclusion as the figure patch, from the other
direction:

> "Figures at display size are Geist 300, not mono. A 190–380px monospace
> numeral read as a terminal; `.figure`, `.d-figure`, `.a-fig` and the
> templates' figure styles now set Geist 300 with tabular numerals, with a
> `.unit` span at half size for the % or unit."

So the system already has the `.unit` span. The patch's rule set should be
folded into that section rather than added beside it, keeping only what 0.7.0
does not say: the **max-content figure column**, **one grid per stack**, the
**one-token rule** (qualifiers belong in the sentence, not in the figure), and
the correction that the space must live **in the text** (`&#8239;` before %,
`&nbsp;` before a word unit), never as a `margin-left` on the unit span. That
last point is worth stating explicitly upstream: a CSS margin looks right and
silently breaks copy/paste, the PDF text layer, screen readers and the linter.

The lecture deck itself was brought onto 0.7.0 in this sync: figures to Geist
300 with `.unit` spans, emphasis 500 → 600, diagram edges 2 → 4px and nodes
6 → 10px. Mono: the deck's three base rules are now 22px (kicker), 21px (source
line) and 20px (page number), and every label inside a fitted chart box (band
segments, scale ticks, panel headers) sits at 20px, below the 0.7.0 floor.

That exception is deliberate and belongs in the system. A label printed INSIDE
a data shape is bounded by the shape, not by the reading distance; lifting it to
22px either overflows the shape or forces the chart to be redrawn around its
labels. Either the mono floor gains a stated chart-internal exception, or the
chart components gain minimum shape widths derived from the floor.

Body floor of 32px: **now applied** (14 Sep, second pass).
The deck's 47 slides are laid out against a 26px body and lifting the floor
forces a re-layout of every content slide; it needs its own pass.


---

# Sync note, 14 Sep 2026, second pass

Upstream is still **0.7.0** and still carries none of the three patches. What
moved since the morning: `tokens/base.css`, `tokens/components.css`,
`styles.css` and the changelog (component usage notes, placeholder copy
rewritten by role, usage-note sheets under every layout card). Those four are
upstream-owned and were taken verbatim.

Held locally, re-applied onto the fresh upstream files rather than kept as
stale copies:

- `tokens/fonts.css` and `tokens/typography.css` — **Geist Mono, not IBM Plex
  Mono.** The 0.7.0 swap is withdrawn at the user's instruction; the reasoning
  sits in both file headers so the next reader does not re-do it.
- `tokens/signal.css` — upstream plus the certainty scale.
- `guidelines/TYPESETTING.md` — upstream plus the figure-and-text rule.
- `readme.md` — upstream plus the affiliation placement rule.

So the mono revert is now a **fourth pending patch** for upstream, alongside the
certainty scale, the figure rule and the affiliation placement rule. Until they
are applied, every sync has to re-merge them, which is cheap for CSS and risky
for prose: the first merge silently fused two comments in `signal.css` and cost
the deck its `.tv-cert{display:flex}` rule.


---

# Body floor applied, 14 Sep 2026

The deck now runs the 0.7.0 slide scale: body 32px, lead 34px, sub 40px at
weight 500, and every inline body override that sat under the floor lifted to
30px as the release prescribes. Forty-seven slides were re-measured against
their source lines afterwards; ten overflowed and were refitted by tightening
padding and row gaps, not by putting the type back.

Two places kept a documented exception, both for the same reason as the mono
floor: the text is bounded by a shape or by its own density, not by reading
distance.

- **Labels inside data shapes** (band segments, scale ticks, panel headers):
  20px mono.
- **The sources page**: 25px body in a four-group reference list. A slide that
  exists to be photographed and read later is reference matter, not spoken
  matter, and at 30px it needs two slides.

Both belong in the system as stated exceptions to the floor rather than as
quiet local overrides, which is the last open item in this patch set.


---

# Floor reversed and stated, 20 Sep 2026 (proposed 0.9.1)

The 32px floor applied on 14 Sep is **withdrawn at the author's instruction**:
the deck reads better set smaller, and the two "documented exceptions" above
were the floor telling us it was set too high. Applied in the bound copy, and
pending upstream as a **fourth patch**.

- `tokens/typography.css`: deck body **32 → 26px**, sub 40 → 34, lead 34 → 30,
  mono 22 → 19. Claim and statement unchanged, so claim-to-body returns to
  **2.8×**.
- New token **`--d-body-dense: 24px`**, the only sanctioned way under the
  floor, so a dense board is a declared decision rather than an inline
  override. `tokens/tokens.json` gains `size-deck.body-dense`.
- `guidelines/TYPESETTING.md §4` gains **rule 4b** with the four conditions:
  five or more parallel items, at most four short lines each, a rule between
  them, and the same content repeated in the handout. Running prose stays at
  26px; if it will not fit, it is two boards.
- `readme.md` Type and Quick reference restated. `tokens/tokens.md` gains a
  "Deck type floor" section.
- The project's `deck-lint.js` now checks it: body under 24px is an error,
  24–25px is a note asking whether the board qualifies, mono under 19px is an
  error.

This closes the open item above. The two old exceptions stop being exceptions:
20px mono inside a data shape clears the 19px mono floor, and the sources page
at 25px falls inside the dense-board rule.

Note for the next merge: 0.9.0's changelog claims `size-deck.body` 32px, but
its own `typography.css` already shipped 26px. Upstream's JSON and CSS
disagreed; this patch reconciles them at 26px.


---

# Sixth patch: the rendering card, 21 Sep 2026

New file `guidelines/RENDERING.md` in the bound copy, pending upstream. Three
patterns that make a document fail to paint, with no console error:
`text-wrap: balance`/`pretty`, a flex item with both a basis and `width:100%`,
and `flex:1` on a text column. All three were hit in one handout.

The part that needs an upstream decision: the system's own guidance elsewhere
recommends `text-wrap: pretty` for body copy, and `styles.css` sets it on some
roles. That advice is unsafe in a live-rendering runtime and should be replaced
with explicit measures on the type roles.


---

# Fifth patch: the export card, 20 Sep 2026

New file `guidelines/EXPORT.md` in the bound copy, pending upstream. Written
from the Women's Health deck, where the same four defects were rediscovered and
re-fixed across several sessions because nothing in the system named them.

What it states: a PowerPoint file is a capture, not a render, so a board is
never exported from its source file. A prepared copy carries the substitutions
and the source stays live. Then the list of what the capture cannot do:

1. Resolve a CSS variable inside an SVG. Silent failure, the chart renders grey.
2. Rasterise every SVG. Some land as an empty box, with no predictor.
3. Apply flex or baseline centring to a text run. Each run is its own
   top-anchored box, so a letter centred inside a shape drifts.
4. Fetch images reliably under load.
5. Read speaker notes off the boards. The manifest goes in the head, and in a
   design component it cannot go in the helmet.
6. Keep a `<br>`. The lines merge into one paragraph and PowerPoint rewraps
   them. Boards should write each line as its own block element.

The component consequence is the part that belongs upstream rather than in a
project: **a letter centred inside a shape needs an explicit box height and a
matching line-height**, because line-height is a property of the text and
survives the conversion. `.tv-cert-mark` should carry that in `signal.css`
itself rather than in every project's export override: 40px square,
`line-height:40px`. The label must NOT be given the same line-height, or a
two-line label centres against nothing. Until this lands upstream, each deck
re-patches it.

One thing for the author to decide. `.tv-cert-mark` currently has
`border-radius:9px`, which contradicts both the radius-0 rule and the certainty
patch's own wording ("filled accent square"). It was not changed here, because
it is visible on every evidence board in the deck.


---

# Sync note, 15 Sep 2026 (design system 0.9.0)

Upstream moved two minor versions since the last merge: **0.8.0** (the website
rebuilt on the deck's grammar, `tokens/web.css`) and **0.9.0** (three faces,
`SKILL.md` rewritten, `guidelines/TALKS.md` added). The bound copy under `_ds/`
was a mixture: 0.8.0-era token files, a 0.7.0 changelog, and the four held
patches. Re-merged file by file rather than overwritten.

**One pending patch is now closed upstream.** 0.9.0 reverts IBM Plex Mono to
**Geist Mono** on its own reasoning, and self-hosts all three faces from
`assets/fonts/`. The local mono-revert patch is therefore retired, not
re-applied: `tokens/fonts.css` and `tokens/typography.css` are upstream
verbatim. Three patches remain pending (certainty scale, figure-and-text rule,
affiliation placement).

Taken upstream verbatim: `CHANGELOG.md`, `_ds_bundle.js`,
`_adherence.oxlintrc.json`, `tokens/fonts.css`, `tokens/typography.css`,
`tokens/web.css`, `tokens/tokens.json`. Re-merged: `tokens/signal.css`
(+certainty scale), `guidelines/TYPESETTING.md` (+figure-and-text rule),
`readme.md` (+affiliation placement). Unchanged and already current:
`styles.css`, `base.css`, `colors.css`, `components.css`, `dataviz.css`,
`motion.css`, `spacing.css`, `wrap.css`, `tokens.md`, and the project's own
`deck-lint.js`, which was already the 0.9.0 build.

Assets: Geist 300–600 and Geist Mono 400/500 woff2 copied in, because 0.9.0's
`fonts.css` has no CDN `@import` to fall back on and the bound copy carried only
the Inter files. The Manrope and JetBrains Mono files, unreferenced since 0.6.0
and deleted upstream, were removed here too.

**Consequence for the deck, not yet acted on.** `--font-body` is now **Inter**,
not Geist, so `.bd`, `.ld` and `.evc .txt` change face. Inter sets denser at the
same size, so the ten boards that were refitted for the 32px floor on 14 Sep
have to be re-measured for overflow. The gate after the merge still reports the
known review items: 24 weight-floor failures on `.fig` and `.st`, 9 inline
emphasis at 500, the 79-character claim on board 07, one widow, and 4 unbound
one-letter prepositions. None of them is new drift from this sync.
