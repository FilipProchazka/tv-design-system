# Intake: from what she sends to what we design

Every job starts with material: an older deck, studies and guidelines, her notes, photographs, web copy. This file says what to pull out of each, where it goes, and what exists before the first board is drawn. `SKILL.md` routes here first; `TALKS.md` takes over once the claim list exists.

## 0. Settle the four facts

Language, audience, topic theme, imagery mode (`SKILL.md §0`). If the material implies them, state what you picked in one line and continue.

## 1. Read by type

**Older deck (PPTX or PDF).** Extract, per slide: every text run, the speaker notes, the images, and any citation. A PPTX is a zip: `ppt/slides/slideN.xml` for text, `ppt/notesSlides/` for notes, `ppt/media/` for images. A PDF is read page by page. Keep her slide order as the first draft of the spine, then correct it against `TALKS.md §2`. Never copy a layout, a colour or a font from the old file: the content is re-set in this system's layouts.

**Study or guideline (PDF).** Per finding: the finding in one sentence, the number with its unit and interval, the population, the design, and the certainty the source states (GRADE, level of evidence, strength of recommendation). Write the footer citation at once: author, year, journal volume:page or identifier. A number is copied, never rounded into a new claim and never estimated.

**Her notes or a Word document.** This is her voice. Keep her wording for claims wherever it already states a point; rewrite only to make a topic into a full sentence. A `.docx` is a zip: `word/document.xml`.

**Photographs.** Triage each one against `IMAGERY.md`: subject photograph, stock portrait, or a photograph of her. File it (§3) before using it. A photograph of her needs her approval before any use.

**Web copy.** Headings become full-sentence claims. Affiliations are checked against the closed table; banned names are removed; any statement about her without a source goes to open questions.

## 2. Write two files before designing

`intake/claims.md`, one row per claim:

| # | Claim (her voice) | Source (footer form) | Certainty | Stated or proposed | Board type |
|---|---|---|---|---|---|

Certainty is A, B, C or P (`readme.md` "Resolved: certainty on boards"). Map a stated source certainty directly: high → A, moderate → B, low or very low → C. A practical tool is P. Where the source states none, propose one and mark it **proposed**.

`intake/open-questions.md`: unsourced claims, missing numbers, sources that disagree (both shown, never averaged), proposed certainty marks, photographs needing approval, and anything the brief leaves open. She answers this list; it is never answered by guessing.

## 3. Where material is stored

- Photographs: `assets/<topic>/photo/` for originals, `duo/` for theme duotones rendered as files (never a CSS filter), with a `PROVENANCE.md` row per file: source, date, and use (usable / public talks only / needs her approval / do not use).
- Extracted text stays in the project that uses it, not in the design system.
- A reusable piece (a deck she will give again, its handout) becomes a template in `templates/<slug>/`.

## 4. Then design

`TALKS.md §1` from step 2 for a talk, `HANDOUTS.md` for a handout, `ui_kits/web/README.md` for web copy. A proposed certainty mark may appear on a draft board but is listed in the handover until she confirms it.
