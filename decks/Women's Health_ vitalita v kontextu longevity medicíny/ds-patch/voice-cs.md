# Patch proposal: VOICE-CS, the Czech voice card

For **Tereza Vágnerová Design System**, proposed version **0.9.1**.
Fourth pending patch, alongside the certainty scale, the figure-and-text rule
and the affiliation placement rule (see `certainty-scale.md`).

## Why

`readme.md` fixes the register in three adjectives ("rigorous, plainspoken,
unhurried") and fixes headings as full-sentence claims. Neither tells a writer
how her sentences are built, so copy added to an existing talk reads as
foreign even when it obeys every stated rule. It happened on this deck: four
new boards written to the system's letter still had to be rewritten, because
they stated benefits without their limits and used topic labels where she
turns a sentence.

## What is added

`guidelines/VOICE-CS.md` — thirteen observed rules, each carrying the lines from
the Women's Health deck it was read off, plus a do-not list and a six-point
pre-ship test. The load-bearing three:

1. **The claim is two beats: assert, then limit.** Almost never one sentence.
2. **The engine is *Nejde o X. Jde o Y.* / *Není X. Je Y.*** — negate the
   assumption in lay words, then name the real thing in clinical ones.
3. **The limit rides inside the sentence, on second-position *ale*** — never a
   separate "Limitace:" line in prose.

Written from her own Czech only. No line in the card is invented; the deck is
the corpus.

## Scope note for whoever applies it

The card is Czech. `guidelines/TYPESETTING.md` already states that Czech and
English are set differently and that "the English deck is a mirror, not a
translation" — the same is true of voice, and the English mirror needs its own
card rather than a translation of this one. Rules 2, 3 and 6 in particular do
not survive translation: second-position `ale` has no English equivalent, and
the *Nejde o / Jde o* engine flattens into "It's not about X, it's about Y",
which in English reads as a cliché rather than as a house move.

## Suggested CHANGELOG entry

```
## 0.9.1

### Voice
- guidelines/VOICE-CS.md: the Czech voice card. Thirteen rules read off the
  Women's Health lecture, with the source lines, a do-not list and a pre-ship
  test. Covers claim shape (assert, then limit), the Nejde o / Jde o engine,
  second-position "ale" for limits, Czech quotes around lay belief, imperative
  instruction, formal capitalised Vám, and the footer-as-aside.
- An English voice card is still missing. Voice is a mirror, not a translation:
  four of the thirteen rules have no English equivalent.
```
