# Research: what the best presentations and reels do — and where ours stands

Working note, Sept 2026. Sources: observed Apple keynote conventions (Apple does
not publish its slide files; what exists is analysis of the keynotes and
accounts from former Apple staff), Alley's assertion–evidence research
(Penn State), Reynolds *Presentation Zen*, Duarte *slide:ology*, and 2026
Reels platform guidance.

## Why you cannot find Apple's slides
Apple never releases keynote decks. Everything written about "the Apple
style" is reverse-engineered from the broadcasts. The observed conventions
are consistent enough to act on: one idea per slide, a sentence where others
put a paragraph, a number so large it needs no chart, a single accent used
once per slide, and roughly 60% of every slide left empty. Former Apple
staff add: **bullet points are the last resort** — if the points are
sequential, split the slide; if they are additive, draw the relationship.

## The five findings that matter for her

### 1. Sentence headlines beat topic headlines — measurably
Alley's controlled studies: two audiences heard the *same words* with
different slides. The group shown a **sentence-assertion headline supported
by visual evidence** understood and remembered significantly more (p < .01)
than the group shown topic-phrase headlines with bullets. The rule set:
headline is a full sentence, left-aligned, **no more than two lines**;
the body is visual evidence, not a list; the audience should read no more
than ~20 words per minute.
→ Our deck already runs on this (the claim). The two-line limit is now
enforced by the measure rule. **Gap:** the palliative deck still has seven
list-heavy slides (12, 13, 15, 16, 24, 26, 27) that a strict
assertion–evidence reading would call slideuments.

### 2. One idea, one slide, and a lot of air
Apple: one theme per slide, ~7-word budget for the headline, 60% empty.
Reynolds: signal-to-noise; empty space signals importance. Duarte: a
slide is glance media, closer to a billboard than a document.
→ Our OPEN and Statement layouts do this well. **Gap:** STACK is our
largest family (13 of 72) and the palliative deck leans on it. The source
README already warns "never run three STACKs together"; the palliative deck
runs slides 12–13 and 15–16 as consecutive dense STACKs.

### 3. Picture superiority — when the picture is the evidence
Recall for pictures beats words once more than ~30 seconds has passed, and
the effect is strongest when the picture shows a concrete thing and text
reinforces the same message. Reynolds: real photographs, never clip art.
→ Our Clinical library is exactly the right kind of photography (a PEG tube,
a bedside). **Gap:** the palliative deck uses 5 photographs in 32 slides;
the case-study section (10–29) has two. The three clip-art images are
correctly quarantined.

### 4. Numbers, not charts, when one number carries it
Apple's signature: a single figure at hero size, simplified (not 42.7%, but
"4 in 10"). Medical-presentation guidance 2026: cite on the slide in a small
footer, keep the full reference list for the handout; avoid red/green
pairings (colour-blind safe); motion only to reveal a pathway step by step,
never to decorate.
→ Our Big number layout (17) and the risk stack on palliative 25 fit.
**Gap:** palliative 25 shows three ranges at once; Apple would give the 30-day
number its own slide first.

### 5. Clinical structure: SOAP, and core vs backup
Medical audiences think Subjective → Objective → Assessment → Plan.
Strong conference decks separate **core slides** from **backup slides** so
depth is available without slowing the narrative.
→ The palliative case already runs S (10–11) → O (12–13) → A (14–28) → P
(29). **Gap:** no backup section; the question lists (26, 27) and the
mechanism detail (15 right column) are backup material sitting in the core.

## Reels — what the 2026 guidance agrees on
- **The hook is the first 0.5–3 seconds**, and it must work with sound off
  (~40% of mobile viewing is muted). Frame one carries a text hook of
  **≤7 words**, large and high-contrast.
- **Safe zone**: bottom ~25% and top ~10% are covered by UI; the safest place
  for the critical line is centre / centre-top. Our reel spec (x 80–960,
  y 280–1250) matches.
- **Read-aloud-twice rule**: text stays on screen long enough to be read
  aloud twice at conversational pace.
- **Pattern interrupt every ~2 seconds**: a cut, a zoom, a text colour
  change. Static frames lose retention.
- **Lead with the payoff, not the setup.** No intro, no logo animation, no
  "today I'll talk about". Context goes in the caption.
- **Say, show and write the keyword** in the first 3 seconds — Instagram
  transcribes audio; the on-screen text and the first caption line should
  repeat the topic word.
- **Length**: 15–90s for reach; 21–34s is a productive zone for one hook,
  one value point, one CTA. Retention rate matters more than length.
- **Carousels lock to the first slide's ratio**; 4:5 is the 2026 feed default.

### Where our 28 reel frames stand
Strong: safe zone is right; type sizes (150px hook, 48px body) are correct
for a phone; the evidence grade carries credibility into the feed; the
myth/fact frame is a natural pattern-interrupt.
**Gaps:**
1. **Hook length.** R1 and R12 hooks are not budgeted. Rule to add: hook ≤7
   words, ≤42 characters at 150px.
2. **No motion spec.** The frames are static boards. A reel is 21–34s of
   frames; we have no timing sheet (which frame, how long, what changes).
3. **No caption-first-line rule** to mirror the on-screen keyword.
4. **The CTA frame (R8)** competes with Instagram's own follow/profile UI at
   the bottom; the ask belongs mid-frame.
5. **No cover-frame rule for the 3:4 profile grid** — R1 has a 4:5 guide but
   the grid is now 3:4.

## Proposed improvements, in priority order

**Deck**
1. **Assertion–evidence audit of the palliative deck.** Convert the seven
   list slides: sequential lists → split or Process steps layout; additive
   lists → Hub-and-spoke / Cause chain; reference lists → move to backup.
2. **Backup section.** Add a "Příloha" divider after slide 30; move the two
   question lists (26, 27) and the mechanism detail there. Core deck drops
   to ~27 slides.
3. **Photograph every section opener** in the case study, from the Clinical
   library (nurse-doctor-bedside for O, doctor-consult-desk for A,
   gloved-hands-chart for P).
4. **One number, one slide** — give the 30-day PEG mortality its own Big
   number slide before the risk stack.
5. **Rhythm rule as a lint**: flag three consecutive STACK/list layouts.
6. **Reference footer** on every evidence slide (author, year, journal in
   mono, bottom left) — the layout exists (Evidence, 20); apply it.

**Reels**
7. **Hook budget**: ≤7 words / ≤42 chars; enforce like the claim measure.
8. **Timing sheet template**: a 21–34s reel = 6–9 frames; each frame lists
   duration, the change (cut/zoom/colour), and the spoken line. Ships as a
   table beside every reel set.
9. **Cover frame** re-guided to the 3:4 profile grid.
10. **CTA frame** moved to centre; the bottom 480px carries only ground.
11. **Caption template**: first line repeats the on-screen keyword; second
    line the claim; third the source.

**Both**
12. **A "glance test" card**: every slide/frame must be readable in 3
    seconds at thumbnail size. Add a 320px-wide preview strip to the card
    grid so the test is visible.
