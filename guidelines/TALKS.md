# Talks: from source material to a deck, and back

This is the procedure `SKILL.md` routes to for any lecture, conference or
teaching deck, and for reviewing one. The visual rules live in
`TYPESETTING.md`, the grid card and the 72 usage notes; this file is about
what goes on the boards and in what order. It replaces "read the catalogue
and pick something".

Companion: `PRESENTATION_RESEARCH.md` holds the evidence behind these rules
(Alley's assertion–evidence studies, the Apple conventions, the 2026
medical-presentation guidance). Read it once; apply this file every time.

## 1. Build a talk

Work in this order. Do not open a layout before step 4.

**1. Inventory the claims.** Follow `INTAKE.md`: read everything the user gave (notes, a paper,
a previous deck, a syllabus). Write one line per claim: the claim as a full
sentence in her voice, the source it rests on, and the certainty (A/B/C/P) the source states,
or a proposed one marked for her approval (`INTAKE.md §2`). If a claim has no source, it goes on a separate list to show
her; it does not go on a board.

**2. Decide the spine for the audience.** See §2. A case runs S → O → A → P.
A lecture runs cover → disclosure → agenda → sections (each opened by a
divider) → takeaways → resources → closing. A conference talk is a lecture
with a backup section after the close.

**3. Sort core from backup.** Core is what the room needs to follow the
argument. Backup is what one person will ask about: mechanism detail,
question lists, extended references, the second and third range on a
chart. Backup goes after a "Příloha" (EN: "Appendix") divider and uses the
same layouts as core. Target: a 45-minute lecture is 25 to 35 core boards.

**4. One claim, one board, and the layout follows the evidence.** Choose by
what the board has to prove, not for variety:

| The evidence is | Layout | Number |
|---|---|---|
| a single figure | Big number | 17 |
| three figures side by side | Three figures | 18 |
| a range or confidence interval | Range plot, Forest plot | 15, 59 |
| a trend | Time series, Bar chart | 60, 14 |
| a cited study, in full | Evidence | 20 |
| a mechanism or sequence | Cause chain, Process steps, Cycle chart | 36, 29, 12 |
| a set of related things | Hub and spoke, Concept map, Hierarchy | 37, 40, 38 |
| a decision | Decision path, Matrix | 41, 39 |
| a misconception | Myth and fact, Do and don't | 10, 11 |
| a definition or a term | Definition, Glossary, Word | 26, 23, 65 |
| a patient or situation | Case vignette | 28 |
| a photograph that *is* the point | Claim photo, Photo callout, Photo stat | 05, 42, 44 |
| a sentence that needs the whole room | Statement | 30 |
| three parallel points | Three columns | 07 |

A list is a last resort. If the points are sequential, split the board or
use Process steps. If they are additive, draw the relationship. Five items
maximum, never three list boards in a row (the lint enforces both).

**5. Photograph every section opener** in Clinical mode from
`assets/clinical/`; in Public mode from `assets/photo/`. A photograph has
to earn its place: the Evidence board has none because the citation owns
it.

**6. Write the claim, then the notes.** The claim is two lines, in her
voice, and states the point, not the topic. The speaker note under it is
what she will say, as full sentences, including the source read aloud. A
note that only repeats the board is not a note.

**7. Reference footer** on every board that cites a study: author, year,
journal, identifier, mono, bottom left in the footer row. The full list
goes on the Resources board and in the handout.

**8. Takeaways** are four at most, each a sentence that survives without
the talk. This is the board they photograph.

**9. Closing** carries the affiliations in registered form, contact in mono,
and the one ask if there is one.

**10. Run the lint, fix, then the ship gate** in `SKILL.md §5`.

## 2. Audience table

The same material is shaped differently for four rooms. Settle the room
before anything else.

| Audience | Language | Imagery | Spine | Evidence | Boards that are mandatory |
|---|---|---|---|---|---|
| Clinicians (grand round, congress, department) | CZ, EN for international | Clinical | SOAP for a case; sections for a review | Grade on every sourced claim, reference footers, backup appendix | Disclosure, Evidence, Takeaways, Appendix divider |
| Students (1. LF UK teaching) | CZ; EN for the English programme | Clinical | Agenda → sections → takeaways | Grade where stated, Glossary early, Resources at the end | Agenda, Glossary or Definition, Takeaways, Resources |
| Public (a talk to lay people, a webinar) | CZ | Public | Question → answer → what to do | Fewer grades on screen, plain-language claims, no mechanism boards in core | Statement, Practical list, Closing with the ask |
| European colleagues (EFAD, ESPEN) | EN, mirrored not translated | Clinical | As clinicians | As clinicians, English measures from `TYPESETTING.md §3` | As clinicians; EFAD written in full on first use |

Rules that hold in every room: first person, sentence-case claims, one
theme, one imagery mode, the ask once or never.

## 3. Speaker notes (adopted 22 Sep 2026)

Each board carries its note in a `data-speaker-notes` attribute on the slide element, as the Ženské zdraví deck does. The note travels with the board through copy, reorder and export. Every board of a talk has one; a new or split board gets its note written before handover, or is listed as missing.

Notes are prose in her voice, never bullets, and include the source spoken
in full where the board carries only a footer.

## 4. Review a deck

Diagnose before rewriting. The output of a review is a ranked list of
findings, per board, and nothing else until she asks for changes.

**Step 1, mechanics.** Run `slides/deck-lint.js` from the deck page console
and record `window.__deckLint`. This covers measure, weight, rhythm, list
length, hook budget, Czech and English punctuation, widows, footer
intrusion. Do not re-check these by eye; the lint is the authority.

**Step 2, narrative.** Walk every board and answer:

- Does the claim state a point, or label a topic?
- Is the evidence *on the board*, or is the board a list of things the
  claim is about?
- Does a sourced claim carry its grade and its footer? Was any grade
  inferred?
- Is the spine right for the audience (§2)? Does the case run S → O → A → P?
- Is backup material sitting in the core (question lists, mechanism detail,
  the second and third range on one chart)?
- Would this board survive at thumbnail size in three seconds? If not, it is
  two boards or it is a Big number.
- What will the room ask after this board, and is the answer in backup?

**Step 3, the record.** Every affiliation matches the closed table. No
banned name. No statement about her without a source. No stock face.

**Step 4, report.** Rank findings by what they cost in the room, not by
how many there are: a claim without evidence ranks above a widow. For each,
give the board, the finding, why it matters, and the fix she would need to
approve. Then the list of audience questions the deck invites. Then stop.

**Step 5, revise only on request,** and only the boards she names. Re-run
the lint and the ship gate after every revision pass.

## 5. What this file does not decide

- A certainty mark the source does not state. Propose it; she confirms it.
- PowerPoint output: see `EXPORT.md`; there is no master template.
