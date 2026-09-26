# Research: what a world-class design system contains (Sept 2026)

Working note for scoping the next phase. Sources: reviews of Material 3, Polaris,
Carbon, Atlassian, Spectrum, Paste, Pajamas, Base Web, Mailchimp; W3C DTCG
token format 2025.10; IBM Brand Center; 2026 social-platform specs.

## The full stack, in the order the best systems present it

1. **Principles** — 3–5 stated values every later decision cites.
2. **Foundations / tokens** — three tiers: primitive (raw value) → semantic
   (role: `text-body`, `surface-card`, `action-primary`) → component (rare;
   only for theming). Components read semantic, never primitive. Name for
   role, not appearance. Theme = swap semantic values, primitives stay.
   Publish a human-readable `tokens.md` so AI tools and new contributors have
   the vocabulary.
3. **Components** — each with: when to use / when not, do–don't pairs, all
   states, token references, code, accessibility (keyboard, focus, ARIA,
   contrast).
4. **Patterns** — compositions: empty states, forms, page templates, error
   handling. Decision trees ("modal or drawer?").
5. **Content design** — voice and tone (per emotional state), grammar and
   punctuation, inclusive language, date/number/currency formats, a glossary,
   and message-type patterns (error, confirmation, empty). Polaris and
   Atlassian are the benchmark.
6. **Data visualisation** — palette order, chart types and when, labelling,
   accessibility of colour pairs. IBM Carbon and Mailchimp are the benchmark.
7. **Imagery** — photography direction, treatments, cropping, do–don't,
   sourced library with provenance and rights.
8. **Brand applications / templates** — presentation deck, document, email,
   social. IBM ships PowerPoint + email templates from the brand centre.
9. **Accessibility** — WCAG 2.2 AA baseline stated once, then enforced in
   each component.
10. **Governance** — owner, changelog / "what's new", semver + deprecation,
    contribution path, audit cadence.

## Social specs that matter (2026)

- Five master sizes cover ~90%: **1080×1350 (4:5)** feed default on
  Instagram/LinkedIn/Facebook/Threads; **1080×1920 (9:16)** Reels, Stories,
  Shorts, TikTok; **1080×1080 (1:1)** universal fallback; **1200×630**
  link preview (`og:image`, a website job); **400×400** profile.
- Instagram's profile grid is now **3:4** — squares get side-cropped; keep
  critical content inside the central 1080×1080 of a 4:5 post.
- 9:16 safe zone: **top ~250px and bottom ~340px are covered by UI**; keep
  text and marks in the centre ~70%.
- A carousel locks every slide to the first slide's ratio. Decide before
  slide one.
- LinkedIn "document" posts (PDF carousels) are a high-performing
  professional format — a natural home for evidence summaries.

## Gap analysis against this system (as of this note)

Have: tokens (primitive + semantic), 17 components with prompts, 19
foundation cards, content fundamentals, imagery rules, motion, 7 deck
layouts + deck template, web UI kit, SKILL.md.

Missing or thin:
- Stated **principles** page
- Semantic token set in canonical roles (`text-*`, `surface-*`, `border-*`,
  `action-*`) alongside the current short names; `tokens.md` export; DTCG JSON
- **Accessibility** section beyond contrast (keyboard, focus, reduced motion is
  there; ARIA/labels are not)
- **Patterns**: empty states, page templates, forms (none exist — correct for
  now, needs a stated rule)
- **Data visualisation**: the deck's PLOT and DIAGRAM families are the most
  distinctive part of her material and are not represented
- **Social templates**: none (the deck template has 28 reel frames in source)
- **Document / handout template**: none (her talks circulate as PDF)
- **Email**: none
- **Governance**: no changelog, no versioning, no owner
- **Imagery**: two languages in her own material — the site's blue duotone
  and the palliative deck's natural-colour stock photography. Needs a decision.
- 65 of 72 deck layouts unported


## Weight — what the practice literature agrees on (13 Sep 2026)

Sources read: Fontfabric on weight and contrast; BrightCarbon's presentation
typography guide; Penn State Accessibility "Beware lightweight fonts"; Mandy
Michael, "Creating accessible text"; Made Good Designs font-weight guide;
Pimp my Type on hierarchy; Prototypr "Typography rules I should have known".

1. **Skip a weight.** Adjacent weights (400 next to 500, 500 next to 600) are
   too close to read as intentional; the eye reads a rendering fault. Pair
   Light with Medium, Regular with Semibold/Bold. Where two roles share a
   size, the weight gap must be two steps.
2. **Fewer sizes, more weights** is the working rule for a compact system,
   but weight signals *role*, size signals *rank*. A heading should be bigger
   before it is heavier.
3. **Light weights need size.** Below roughly 24px light strokes anti-alias
   into the background; a colour that passes WCAG on paper fails in practice
   because rasterisation lightens the stroke. Effect is worse on dark
   grounds. Light is a display weight.
4. **Body sits at 400.** Regular is the legibility optimum for reading;
   below 300 and above 700 both lose letter definition. Never set running
   text lighter than 400.
5. **Real cuts, never synthetic.** Faux bold clogs counters and distorts
   diacritics; load the weight or do not use it.
6. **Colour is not a weight.** Muting colour to demote text and heavying
   weight to pass contrast are both substitutions the guidance warns
   against; each tool has one job.

Applied to this system as TYPESETTING.md §4 "Weight — the rules": ladder
300/400/500/600, 300 floored at 60px light / 100px dark, same-size emphasis
400→600, mono at 400/500 only, no 700. The earlier decision to ban 600 and
set emphasis at 500 is reversed by rule 1.
