# Typesetting — Czech and English are set differently

Two languages, two sets of rules. The English deck is **not** a word-for-word
translation of the Czech: Czech is roughly 10–15% longer in characters for the
same claim, binds its prepositions, and takes different quotes and dashes.
Setting English to Czech measures produces slack lines; translating literally
produces sentences an English-speaking clinician has to decode.

This file is the authority for both. Where it conflicts with a layout, the
layout changes.

---

## 1. Czech (primary)

### Non-breaking bonds
One-letter prepositions and conjunctions bind to the following word with a
non-breaking space, always: **k a i o s u v z** and the conjunction **a** at
the end of a line.

```
v&nbsp;nemoci · s&nbsp;demencí · u&nbsp;pacientů · o&nbsp;výživě
a&nbsp;pohyb · i&nbsp;metabolické · k&nbsp;jídlu · z&nbsp;úst
```

Also bind: a numeral to its unit (`90&nbsp;min`, `1,2&nbsp;g/kg`), an
abbreviation to its noun (`1.&nbsp;LF UK`, `m.&nbsp;Alzheimer`,
`Mgr.&nbsp;Ing.`), and a percentage to its number with a thin space
(`24&thinsp;%` — Czech puts a space before the sign, English does not).

### Quotes and dashes
- Quotes are **„Czech double“** (U+201E, U+201C). Never "straight" or "English".
- Nested quotes are **‚single‘** (U+201A, U+2018).
- **No em dashes anywhere.** An en dash with spaces, or no dash:
  `věta – druhá věta`. In numeric ranges, an en dash with no spaces:
  `1,2–1,6 g/kg`, `10–43&thinsp;%`, `Den&nbsp;1–5`.
- Decimals take a **comma**: `1,2`, `0,75`. Thousands take a thin space:
  `1&thinsp;200`.

### Hyphenation and rag
Czech words are long; a 1400px claim column at 74px runs ~36 characters.
**Never hyphenate a claim or statement** — break the line at a syntactic
boundary instead (`<br>` after a clause, never mid-phrase). Body copy may
hyphenate (`hyphens:auto; lang="cs"`).

### Rag rules for claims
Break before a preposition, not after it; keep a verb with its subject on the
same line where possible. A two-line claim should not end line one on a
one-letter word — that is what the non-breaking bonds enforce.

---

## 2. English (mirror, not translation)

### The rule
**Translate the argument, not the sentence.** An English claim is allowed to
be shorter, to reorder, and to drop a Czech clause that only exists for Czech
syntax. What must survive: the assertion, its hedge, and its grade.

| Czech | Literal (wrong) | Set English (right) |
|---|---|---|
| Rozhodnutí o podávání či ukončení nutriční podpory nebývá snadné. | The decision about administering or terminating nutritional support is not usually easy. | **Starting or stopping nutritional support is rarely an easy decision.** |
| Adekvátně informovaný pacient má právo odmítnout léčbu. | An adequately informed patient has the right to refuse treatment. | **An informed patient may refuse treatment.** |
| …pokud klient přestává jíst, netrpí. Neumírá hlady. | …if the client stops eating, he does not suffer. He is not dying of hunger. | **…a resident who stops eating is not suffering, and not starving.** |
| Snížený příjem stravy neakceleruje smrt klienta. | Reduced food intake does not accelerate the death of the client. | **Eating less does not hasten death.** |

### English punctuation
- Quotes are **“English double”** (U+201C, U+201D), nested ‘single’.
- **No em dashes** either — this is a house rule, not a Czech one. Use an en
  dash with spaces, or restructure.
- Decimals take a **point**: `1.2`. Percentages close up: `24%`.
- Ranges: en dash, no spaces — `10–43%`, `Day 1–5`.
- No non-breaking prepositions. English binds only: numeral to unit
  (`90&nbsp;min`), and a name to its qualifier (`Charles&nbsp;University`).

### Register
Plain clinical English, British spelling (`oesophagus`, `programme`,
`recognise`). Address the reader as *you*; she remains *I*. No Latin
abbreviations in running text (`for example`, not `e.g.`) — they survive only
in citations.

---

## 3. Measures, per language

The claim measure (readme.md) is character-based, so the two languages need
different limits for the same visual line count.

| Role | Column | Size | CZ limit | EN limit |
|---|---|---|---|---|
| Claim | 1400px | 74px | 70 chars | **80 chars** |
| Claim, BESIDE | 760–940px | 58px | 80 chars | **92 chars** |
| Statement | 1560px | 102px | 90 chars | **104 chars** |
| Deck lead | 1200px | 30px | 180 chars | 200 chars |
| Reel hook | 920px | 150px | 42 chars / 7 words | **48 chars / 8 words** |
| Reel body | 920px | 48px | 120 chars | 135 chars |

English gets ~15% more characters because English words are shorter — the
*line count* stays identical, which is the thing that actually matters.

`slides/deck-lint.js` reads `lang` on `<html>` and applies the right column.

---

## 4. Composition rules that apply to both

### Vertical rhythm on a slide
Only four vertical positions exist. Nothing is placed by eye:

```
y 88    layout label (kit only)
y 140   kicker
y 190   claim top          (claim block grows downward)
y 352   content zone top   (height 576, contents vertically centred)
y 842   scale top          (when a scale is present)
y 962   footer baseline    (.ref left, .pg right — reserved, always)
```

A board either has a claim at 190 **or** a statement in the zone — never both.

### Optical alignment
The claim, the kicker and the content zone all start at **x 120**. A
photograph in SPLIT starts at **x 1200**. Nothing else invents an x.

### Line breaks are authored
Claims and statements carry explicit `<br>` at the intended break. Auto-wrap
is for body copy only. If a `<br>` makes a line under 40% of the column, the
break is wrong.

### Weight — the rules (revised 13 Sep 2026)

Researched against typographic practice and accessibility guidance; the
sources and the reasoning are in `guidelines/RESEARCH.md § Weight`. Seven
rules, in priority order.

**1. Size first, weight second, colour last.** Hierarchy on a board is
carried by the size ratio (claim : body = 2.3×). Weight confirms a role it
does not create one. Colour never carries rank alone.

**2. Four real cuts, each with one job.**

| Weight | Job | Never |
|---|---|---|
| **300** | display only: statement (102px), figure (≥ 100px), ghost glyph | below 60px on light, below 100px on dark; body; anything muted |
| **400** | everything read: claim, lead, body, list, caption; mono data | — |
| **500** | a role at a *different size*: sub / column head, diagram label, mono kicker (tracked caps) | same-size emphasis |
| **600** | *same-size* emphasis only: `<b>` in body, reel `a-h` beside `a-body`, wordmark | headings, claims, anything ≥ 40px |

**3. Same size skips a weight.** Two runs at the same size that differ by one
step (400 → 500) read as a rendering error, not a decision. Same-size
emphasis is 400 → 600. Roles at different sizes may sit one step apart
(300 statement, 400 claim, 500 sub) because size is already doing the work.

**4. Light needs size, and more of it on dark.** A 300 stroke at small size
anti-aliases into the ground and under-measures on contrast tools even when
the colour passes. Floor: 60px on paper, 100px on a dark or photo ground.
This is why the reel `a-sub` moved from 300 to 400 (62px on dark).

**5. Mono has two weights.** 500 for tracked uppercase kickers and scale
headers, 400 for figures, units, citations and tabular columns. Never 300,
never 600+. A bold monospace column reads as a terminal, not a record.

**6. Real cuts only, three faces, no overlap (14 Sep 2026).** Geist
300/400/500/600 for claims, statements, headings and display figures. Inter
400/500/600 for body, lead, small and every affiliation line. Geist Mono
400/500 for labels, kickers, units, citations, prices, axes and tabular
figures. Load nothing else: no 700, no `bolder`, no synthetic bold on a weight
the file does not have, no Geist in a paragraph, no Inter in a heading.

**7. Weight is never a colour substitute.** Do not lighten weight to make
text recede; use the `muted` role. Do not heavy up to make text pass
contrast; fix the colour.

Two things made boards feel unevenly heavy, both fixed and both linted:
- **A literal `font-family` in SVG labels.** The ported diagram boards wrote
  a literal family while every HTML label resolved `var(--font-display)`.
  Two faces at the same numeric weight differ in density, so those boards read
  heavier. SVG labels now use the token; the lint flags any literal family
  written into an SVG `style`.
- **Emphasis at 500.** An earlier revision set `.ink` to 500 to keep the
  ladder short; against 400 body it was too close to register (rule 3). It
  is 600 again, and 600 is confined to that job.

### Emphasis
Bold inside body copy is **ink at 600** and carries the point of the
sentence, so the muted remainder can be skimmed. One bold run per paragraph.
Never italic for emphasis (italic marks subordination), never underline,
never colour alone.

### Numbers
Every figure is Geist Mono with `font-variant-numeric: tabular-nums`, so
columns of numbers align and a changing figure does not shift its neighbours.

---

## 5. Reels, both languages

- The hook is the **payoff**, not the setup, and it works with sound off.
- One idea per frame. A frame that needs two sentences of body is two frames.
- Text sits inside the safe zone (x 80–960, y 280–1250); the frame itself is
  filled to all four edges.
- Every frame is legible when read aloud twice at conversational pace.
- The keyword is **spoken, shown, and written** in the caption's first line.
- Czech captions keep the non-breaking bonds; hashtags are lower-case and
  unaccented (`#zenskezdravi`), because accented hashtags fragment.

---

## 5b. Applying the Czech bonds mechanically — one hard rule

The binder that adds `&nbsp;` after one-letter prepositions must run over
**rendered copy only**. It must skip the contents of `<script>` and
`<style>`, and it must never touch a Design Component's logic class: a
single-letter JS identifier looks exactly like a Czech preposition, so
`const v = this.renderVals()` becomes `const v&nbsp;= …` and the class stops
evaluating — silently, taking every Tweak with it.

A tag-skipping regex (`/<[^>]*>/`) is **not** enough: it skips the tags but
walks straight through script *contents*. Skip whole elements, or bind by
hand. Inside a JS string literal that will be rendered, use a real U+00A0
character, never the entity.

## 5c. Orphans and widows

A **widow** is one word alone on the last line of a block. An **orphan** is a
single line stranded from its paragraph across a page break. Both are
composition faults, handled once in `tokens/wrap.css` rather than by
rewriting sentences board by board.

| Role | Rule | Why |
|---|---|---|
| claim, statement, sub, reel hook, headings | `text-wrap: balance` | evens the lines of a short block — what a two-line 74px claim needs |
| body, lead, list items, captions | `text-wrap: pretty` | keeps the measure, refuses a short last line |
| figure, mono kicker, reference, page number | `text-wrap: nowrap` | one line by definition |
| print (handout, doc) | `orphans: 3; widows: 3` | screen ignores these; the paginator does not |

Authored `<br>` still wins as a hard break, so a deliberate rag survives
balancing.

**What CSS cannot do** is bind a specific pair of words. Where a last line
must never break — a name, a unit, a citation, a two-word clinical term —
bind it in the copy: `Pacient s&nbsp;těžkou&nbsp;demencí`.

The lint measures widows rather than trusting the CSS, and it measures the
**block's own line boxes** — `Range.selectNodeContents(el).getClientRects()`
— to find the true bottom line, then walks every descendant text node and
Range-measures each word against it. Measuring a single text node instead is
wrong: a block that ends in an inline tail (`<b>`, `<span>`, `<a>`) or wraps
its copy in child elements has its final line inside a descendant, so the
check would read a line too early or skip the block entirely. It reports any
block of four or more words whose last line holds a single word of ≤14
characters. A single-line block cannot have a widow and is skipped.

## 6. Checklist before anything ships

1. `lang` is set correctly on `<html>`, and on any span that switches language.
2. Czech: every one-letter preposition bound; no em dashes; „Czech quotes“;
   decimal commas; `24&thinsp;%`.
3. English: not a literal translation; “English quotes”; decimal points;
   `24%`; British spelling.
4. Claims within the per-language character limit, breaks authored.
5. No claim and statement on the same board.
6. Footer row (y 962) free of anything but `.ref` and `.pg`.
7. **Run the lint and read its verdict.** It is an on-demand check, not an
   auto-include: a helmet `<script src>` evaluates in a sandboxed realm whose
   `window` and `document` are not the page's, so an automatic include
   reports into the void — which reads as "clean" and is worse than no gate.
   Run it from the console of the deck page:

   ```js
   fetch('slides/deck-lint.js').then(r => r.text()).then(t => {
     window.__deckLintRan = false; new Function(t)();
     setTimeout(() => console.log(window.__deckLint), 600);
   });
   ```

   (Adjust the path: `../../slides/deck-lint.js` from inside `templates/<slug>/`.)
   A **missing** verdict is a failure, not a pass — `[]` is the pass.
8. No widow reported. Where one is genuine, bind the last two words rather
   than rewriting the sentence.
9. No `&nbsp;` entity anywhere inside a `<script>` — and the DC's logic class
   still evaluates (no `logic class eval FAILED` in the console).
