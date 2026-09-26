# Tereza Vágnerová Design System
## Complete definition and guidelines for Canva AI

Version 0.9.0. Paste into Canva Brand Kit → Pravidla značky, or supply as
context to Canva AI when generating any design.

Written in English so an AI follows it reliably. Every Czech string quoted
here is verbatim and must never be translated, shortened or reworded.

---

## 1. Who this is for

Mgr. Ing. Tereza Vágnerová, Ph.D. Czech clinical nutrition therapist and
assistant professor at the First Faculty of Medicine, Charles University.
Teaches nutrition in geriatrics and gerontology in Czech and English,
researches sarcopenia and sarcopenic obesity.

This is one person, not a commercial brand. Her authority is spread across
four organisations that each publish a fragment. The system exists so that a
website, a lecture deck and an Instagram reel read as one hand and state their
evidence.

Positioning: range with depth. Eight subjects, each backed by teaching,
clinical practice or research.

**There is no logotype.** The wordmark is her name set in Geist 600. Never draw
a mark. A handwritten `Tv` monogram exists as an alpha PNG in four inks and
appears only on covers, statements and closings.

**There is no photograph of her.** Every photograph in the system is subject
photography. Never place a stock face under her name.

---

## 2. Affiliations, canonical and closed

Exactly four. Full official name on first use. Never abbreviate, never
translate the Czech clinic names inside Czech material, never add a fifth.

| Czech (canonical) | English |
| --- | --- |
| Healthy Longevity Clinic | Healthy Longevity Clinic |
| Klinika geriatrie a interní medicíny 1. LF UK a VFN | Department of Geriatrics and Internal Medicine, First Faculty of Medicine, Charles University and General University Hospital in Prague |
| Klinika endokrinologie a metabolismu 1. LF UK a VFN | 3rd Department of Internal Medicine, Endocrinology and Metabolism, First Faculty of Medicine, Charles University and General University Hospital in Prague |
| EFAD – European Federation of the Associations of Dietitians | EFAD, European Federation of the Associations of Dietitians |

Errors that occur more often than not: it is **Dietitians**, not Dieticians.
**Associations** is plural, with a preceding *the*. The geriatrics clinic was
renamed, so "Geriatrická klinika" must not appear. The endocrinology clinic
keeps the Roman **III.** and the lowercase second half.

Short forms are permitted only in a running footer or nav strip, and only as
"Klinika geriatrie a interní medicíny VFN" and "III. interní klinika 1. LF UK a VFN".

Superseded, never to be reintroduced: ČANT, Institut moderní výživy, FitNut,
Domov Sue Ryder, the VFN stroke unit.

---

## 3. Voice

**Person.** First person, always. Never third-person biography, never "we".
Reference line: *"Nedělám jedno téma. Dělám osm."*

**Register.** Rigorous, plainspoken, unhurried. A claim comes with its limits
attached. Never urgency, hype, scarcity or motivational register. Nothing asks
the reader to feel anything.

**Headings are full-sentence claims, not topic labels.**
- Yes: *"Prošla jsem všemi stupni zdravotní péče."*
- Yes: *"Osm témat. Za každým něco skutečného."*
- Yes: *"Menstruace je zdravý projev hormonální rovnováhy."*
- No: "O mně", "Moje zkušenosti", "Proč já", "Menstruace"

On slides a claim is **two lines maximum**. If it will not fit, it is two slides.

**A heading that is already a full sentence gets no eyebrow above it.** Saying
the same thing twice in two type sizes is the error this rule prevents.

**Casing.** Sentence case everywhere. Uppercase only in mono eyebrows and
kickers, tracked +0.13em. Never all-caps headlines.

**Absence is marked, not hidden.** One true sentence, for example
*"Termíny dalších webinářů připravuji."* Never a "coming soon" card, an empty
price grid or a placeholder row.

**Nothing may be stated that does not trace to a source.** Absent and not to be
fabricated: publication list, any webinar, a portrait, testimonials, client
numbers, fees.

**The record does the selling.** The commercial ask appears once per page,
after the proof, in the closing band. Never in the hero, never twice.

---

## 4. Language and typesetting rules

Czech is primary. One English page exists for European colleagues. The English
deck is a mirror, not a translation.

**Em dashes are banned in all content.** No `—` anywhere: slide copy, notes,
citations, list items. Recast the sentence, or use a comma, colon or full stop.
An en dash with spaces ` – ` only where Czech typography calls for it.
En dashes without spaces are allowed **only** in numeric ranges:
`1,2–1,6 g/kg`, `Den 1–5`, `75–80 %`.

**Czech decimals use a comma:** `34,1 let`, `83,2 roku`.

**One-letter prepositions bind to the following word** with a non-breaking
space: `v&nbsp;nemoci`, `a&nbsp;pohyb`, `o&nbsp;tom`.

**Numbers decline.** The numeral and the noun both inflect: 2 přednášky,
5 přednášek. Counts are computed from the collection, never asserted.

**No emoji anywhere.** Not in copy, not in UI, not on slides, not in reels.

---

## 5. Colour

### Palette, exact values

**Blue, the chrome accent and the clinical topic colour**
```
accent        #1D5994
ink           #0F2C47
dark band     #0F3557
tint / band   #F2F6FA
rule          #AFC4D6
muted         #4A6884
soft          #5C7890
dark: surface #0F3557  accent #8FC9F5  muted #A6C2DB  soft #8CA9C4  rule #2A5480
```

**Petrol, the longevity topic colour**
```
accent        #0B6A63
ink           #14211F
dark band     #0E3A36
tint / band   #F3F7F6
rule          #C2D0CD
muted         #5C6C69
soft          #687672
dark: surface #0E3A36  accent #8FE3D9  muted #9CBCB6  soft #93B5AF  rule #2E5F59
```

**Violet, the women's health topic colour**
```
accent        #6D2A8C
ink           #401252
dark band     #401252
surface/tint  #FBF5FE
band          #F4ECFA
rule          #CDB3DC
muted         #6B4B7D
soft          #7C5E8D
dark: surface #401252  accent #D8A6F5  muted #C9AEDA  soft #B49BC6  rule #5E2E73
```

Violet's light tint **is** its page surface, so its band steps one shade
deeper. On a violet page a band at #FBF5FE would be invisible.

**Shared**
```
paper            #FFFFFF
second data      #F0D2A2  (sand)
photo duotone    shadow #0F3557  highlight #8FC9F5   (web, 60% blend)
deck duotone     shadow #062020  highlight #73BFB4   (petrol decks)
photo scrim      rgba(15,53,87,.50)
```

### Rules

**Blue is the only chrome accent.** Buttons, links, focus rings, selection,
current-page nav state, the utility bar. Petrol and violet never touch chrome.

**Petrol and violet are topic identity only,** and a topic colour is always
paired with the topic's name in text. Colour is never the sole carrier of meaning.

**Topic coding:**
- Blue: Medicína, Přehled
- Petrol: Dlouhověkost, Výživa, Fitness, Spánek, Lifestyle
- Violet: Ženské zdraví

Across a mixed talk the audience learns the coding. For a single-subject talk,
pick one theme and hold it on every slide. Maximum one or two background
colours per deck.

**Sand is the one second data colour,** used only where two curves on one chart
must be told apart. Never a fill behind content.

**Dark is punctuation, not a mode.** The utility bar, a photo scrim, a closing
band. At most twice per page. There is no dark-mode toggle.

**Every muted, soft and accent value clears 4.5:1** on its own surface, so a
theme swap cannot quietly break legibility.

---

## 6. Typography

Three faces, three jobs, no overlap. All self-hosted.

| Face | Weights | Job |
| --- | --- | --- |
| **Geist** | 300, 400, 500, 600 | Display, claims, statements, headings, display figures |
| **Inter** | 400, 500, 600 | Body, lead, small, every affiliation line, all running text |
| **Geist Mono** | 400 data, 500 kicker | Every label, kicker, unit, citation, price, axis, tabular figure |

Why: Geist draws Czech diacritics correctly at display size, where other faces
thin the caron on ě š č ř ž and smudge the háček on ď and ť. Inter reads better
at 19px. Geist Mono shares the headings' skeleton, so a kicker above a claim
matches it.

### The Evidence-Is-Mono rule

Anything that is **data, a label, or a fact rather than narration** is Geist
Mono with tabular numerals: eyebrows, meta lines, prices, citations, the
evidence ladder, axis numerals, page numbers.

Mono is not a general "technical" voice. **Affiliations and running text are
Inter.** Figures at display size, 100px and above, are Geist 300, never mono.

### Web scale

```
display  clamp(40px, 6.6vw, 96px)   Geist 400   lh 1.05   ls -.028em
h1       clamp(32px, 4.2vw, 58px)   Geist 400   lh 1.10   ls -.024em
h2       clamp(25px, 2.8vw, 38px)   Geist 500   lh 1.16   ls -.018em
lead     clamp(19px, 1.6vw, 24px)   Inter 400   lh 1.55
body     18-19px                    Inter 400   lh 1.62-1.68   measure 64ch
small    15px                       Inter 400   lh 1.55
kicker   15px                       Geist Mono 500   ls .13em   uppercase
figure   clamp(48px, 8vw, 132px)    Geist 300   lh .92   ls -.04em
```

### Deck scale, fixed at 1920×1080

```
statement  102px      claim  74px      sub  34px
lead        30px      body   26px      mono 19px
```

Body floor on a slide is **32px** in presentation use. Claim to body ratio 2.3x
to 2.8x. Below that the slide reads as fuzz from the back of a lecture theatre.

### Reel scale, fixed at 1080×1920

```
hook 150px   quote 112px   mid 92px   body 48px   figure 380px
```

At 1080 wide on a phone, 1px is about 0.36pt, so anything under 46px is fine print.

### Emphasis

Same-size emphasis skips a weight: 400 to 600. **Never 700, never faux bold.**
Bold inside body copy is ink at 600 and holds the point of the sentence.

**Never signal hierarchy with contrast alone.** Subordination is carried by
*italic*, not by pallor. Soft clears 4.6:1 for this reason.

**Never set Geist in a paragraph or Inter in a heading.** The three faces do
not overlap.

---

## 7. Layout and grid

### Web

Centred 1240px shell, 24px gutters, 20px under 768px.
Section rhythm `clamp(88px, 9.6vw, 164px)`, tight stack `clamp(56px, 6vw, 96px)`.
Sections separated by a 1px hairline and by air, never by a change of ground.

Step scale: 2, 4, 8, 12, 16, 18, 20, 24, 26, 32, 34, 40, 44, 48, 56, 64.
18, 26, 34 and 44 are in it because her surfaces use them. Do not snap them to
a tidy 8px grid; it visibly changes the page.

### Deck, 1920×1080

```
margins        120 left and right
live width     1680
kicker         y 140
claim          y 190
content zone   top 352, height 576, vertically centred
footer row     y 962   (reference left, page number right)
```

Titles never jump between slides because kicker and claim are pinned.

**The claim measure.** A claim is two lines: 74px in a 1400px column, 70
characters or fewer. A statement is three: 102px, 1560px, 90 characters. In a
760 to 820px side column the claim steps down to 58px. Over the limit, the type
steps down (claim 60px, statement 84px), never the column up. If it still does
not fit, it is two slides.

**Short content steps up a type size rather than sitting in more air.** This is
the rule that stops layouts looking unfinished.

Page numbers run 01 upward with no gaps, set in Geist Mono.

---

## 8. Surfaces, shape, elevation

Paper is the ground. Structure is a **1px hairline** in the theme's rule
colour, never a card.

**Radius is 0.** No rounded corners on the web or on a board. Photographs,
blocks, bands and the ask are all square.

**Flat, always.** No shadow on any surface, at rest or on hover. The single
exception is the mobile nav panel, which has genuinely left the page.

---

## 9. Imagery

Two modes, **never mixed in one piece**: Public (duotone) and Clinical (natural).

**Public mode.** Every photograph is pre-tinted to the blue duotone, shadow
#0F3557 and highlight #8FC9F5, at a deliberately incomplete **60% blend**, so
the subject still reads as a photograph. Never the topic colour. Violet decks
use violet-duotoned photographs from the deck's own library.

**Subject photography only:** hands, food, a barbell, a clinical record, an
archive photograph. No portraits of her, no stock smiling clinicians, no
lifestyle flat-lay, no app mockups, no journal screenshots.

**Photographs must earn their place.** A slide carrying a citation has no
photograph; a citation should own its slide.

**Never text on a photograph without a real background-colour scrim.** A
gradient alone computes as a transparent background and under-measures on
contrast tools even when it looks legible. Scrims run 0.94 to 0.97 opacity
where type sits on a full-bleed cover.

**No transparency or blur elsewhere.** There is no frosted glass in this system.
The only transparency is scrim alpha over photographs and the four-step
accent-opacity ladders in diagrams (25%, 50%, 75%, 100%).

---

## 10. Iconography

**One authored set, and it is the whole vocabulary.** Seventeen glyphs on a
24px grid at **1.5px stroke, round caps and joins**, drawn so they read as one hand.

Topic marks: `prehled` (evidence pyramid), `medicina` (clinical record with the
observation line through it), `zenske-zdravi` (the cycle with its phase mark),
`dlouhovekost` (hourglass, sand already through), `spanek` (crescent),
`fitness` (loaded bar), `vyziva` (a plate divided the way a meal is planned),
`lifestyle` (a week, and the habit that held).

Interface marks: `arrow` `phone` `mail` `instagram` `menu` `close` `building`
`external` `plus`.

Rules:
- Colour is `currentColor`. A topic mark takes the accent of the card it sits in.
- A mark never carries meaning alone. The topic's name is always beside it in text.
- `external` marks a link that leaves, `arrow` one that navigates. Not interchangeable.
- An institution is drawn as a `building`, never photographed.
- **No icon font, no sprite sheet, no CDN set.** Never substitute Lucide,
  Heroicons or Feather. The topic marks have no equivalent in any library and
  mixing hands is immediately visible.
- No emoji or unicode dingbats as icons.

Sizes in use: 17 to 19 inline with text, 20 in a pill, 22 in the accordion,
24 default, 26 in a 52px topic mark, 30 in a 64px page-hero mark.

---

## 11. Motion

One easing curve: `cubic-bezier(.22, 1, .36, 1)`.

Three entrances, each with a distinct job, and most sections with none at all:
- **rise**, the hero's words, 26px up, 90ms apart
- **scale**, a photograph settling from 1.02 into its frame
- **stagger**, a grid's rows arriving left to right, 60ms apart

**Nothing moves on hover except a mark.** The arrow slides 4px, a mark's
hairline takes the accent, ink goes to accent. No transform on a surface, no
lift, no photo scale.

Focus is a 2px accent outline at 3px offset. Press states are not separately styled.

All entrance motion sits behind `prefers-reduced-motion: no-preference` and the
page renders fully formed with motion off. No bounces, springs, parallax or
animated counters.

---

## 12. The evidence ladder

Certainty is marked with a **five-tick ladder plus a mono label**, never with
A/B/C/P letters. The label names the type of evidence.

```
█████  Metaanalýza a RCT
████   Kohortová studie
███    Odborný konsenzus
██     Mechanistické
█      Nepodloženo
```

Active ticks take the accent, inactive take the low grade colour.

Known divergence to resolve: the website defines six levels, the deck five. The
deck's five are in use. **She should pick one.**

---

## 13. Components

Twenty, in four groups. No primitive exists because a design system "usually"
has one.

**Core.** Icon (the 24px set), Pill (the one button shape: primary, ghost,
small, external, block), Grade (the evidence ladder).

**Cards.** TopicCard, TalkCard, InstitutionCard (always links out), WebinarCard
(price at figure scale in mono), EntryCard (a linked row and an inert one never
look alike), PublicationRow, FactPanel.

**Sections.** PageHero, SplitHero, ClaimBand (one sentence over a duotoned
photograph, on a real scrim), CtaClose, FaqList (native details, first answer
open), ContactBlock (three mail routes to one inbox, no form anywhere).

**Navigation.** Nav (one hairline strip, stacked panel under 1024px),
ScaleStrip, Foot (blue connect strip over a four-column footer).

---

## 14. Do and do not

**Do**
- Keep blue as the only chrome accent; introduce petrol or violet only as topic identity.
- Pair every topic-colour usage with the topic's name in text.
- Set every kicker, meta line, price, citation and the evidence ladder in Geist Mono with tabular numerals.
- Set body, lead and affiliations in Inter; claims and headings in Geist.
- Run photographs through the duotone at 60%, never the topic colour.
- Write headings as full sentences, and drop the eyebrow above one that already is.
- Keep entrance motion behind `prefers-reduced-motion`.
- Mark an absence in one true sentence rather than shipping a placeholder.

**Do not**
- No shadow, no radius, no hover transform on any surface.
- No petrol or violet in site chrome.
- No eyebrow above a heading that already reads as a claim.
- No text over a photograph without a solid-colour scrim under any gradient.
- No treating dark as a colour-scheme toggle.
- No em dashes, no emoji, no icon outside the authored set.
- No 700 weight, no faux bold, no demoting text by making it paler.
- No Geist in a paragraph, no Inter in a heading.
- No subject copy inside a layout or template. Roles only, for example "Tvrzení jako celá věta".
- No stock face under her name.
- No claim about her without a source.

---

## 15. Quick reference

```
Background   #FFFFFF paper · #F2F6FA tinted band
Text         #0F2C47 ink · #4A6884 muted
Accent       #1D5994 blue, all chrome
Topic        #0B6A63 petrol · #6D2A8C violet, information only
Dark band    #0F3557
Type         Geist 300/400/500/600 headings · Inter 400/500/600 body
             Geist Mono 400/500 labels · slide body >= 32px
Body         19px / 1.62 · 64ch measure
Sections     clamp(88px, 9.6vw, 164px)
Radius       0 everywhere
Shadow       none, mobile nav panel excepted
Hover        a mark moves, nothing else
Motion       cubic-bezier(.22, 1, .36, 1)
Deck         kicker y 140 · claim y 190 · zone 352 + 576 · footer y 962
Banned       em dash · emoji · foreign icons · 700 weight · rounded corners
```
