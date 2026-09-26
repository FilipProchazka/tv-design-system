# UI kit: the website

The site rebuilt on the deck's grammar (0.8.0). It composes the design
system's own components; nothing is re-implemented here.

## The grammar, in five rules

1. **A claim is a full sentence at display scale.** Fluid, and on a phone it
   steps down one role rather than reflowing to reading size.
2. **Structure is a 1px hairline, never a card.** Lists of things are rows on
   rules; sections are separated by a rule and by air, not by a change of
   ground.
3. **Nothing has a radius.** A board has no rounded corners and neither does a
   page: photographs, blocks and bands are square.
4. **Nothing moves on hover except a mark.** The arrow slides 4px, a mark's
   hairline takes the accent, ink goes to accent. No lift, no shadow, ever.
5. **A dark band is punctuation**, at most twice a page.

What this replaced: the composition borrowed from the `astra-template-plum`
healthcare template: rounded cards on hairlines, alternating tinted bands,
the pill-button rhythm and the hover lift. The palette, the voice and the
sourcing rules were always hers and did not change.

## Screens

| Route | Screen | What it shows |
|---|---|---|
| `#/` | `HomeScreen` | Hero, mission statement with the monogram, about band, the eight topics, claim band, six institutions, two talks, FAQ, close |
| `#/temata` | `TopicsScreen` | The eight-card topic index, closing 4+4 |
| `#/temata/<slug>` | `TopicScreen` | A topic page: its own theme, tinted surface, white sheet section, theme-coloured close |
| `#/prednasky` | `TalksScreen` | Bookable talks and appearances, with an inert entry standing for the empty publication list |
| `#/webinare` | `WebinarsScreen` | The real empty state, plus a toggle showing what a live webinar looks like |
| `#/o-mne` | `AboutScreen` | The sourced record, and the two bodies named but deliberately unlinked |
| `#/kontakt` | `ContactScreen` | Three mail routes to one inbox |

## What is deliberately absent

Copied from her product spec, not an omission:

- **No portrait of her.** None exists in either source.
- **No testimonials, client numbers, or fees.** Not sourced.
- **No publication list.** The collection is empty; the page says so.
- **No contact form.** There is no backend; the only transaction surface is an off-site Stripe link.
- **No dark mode toggle.** `.dark` marks punctuation bands, not a scheme.

## Fidelity notes

Built from the Astro source, not from screenshots. The reference captures in
`reference/` are from an earlier **petrol** build; the palette decision recorded
in `PRODUCT.md` (2026-09-05) made **blue** the site's chrome colour, and this kit
follows the code.

`WebinarsScreen`'s "Ukázka: vypsaný termín" link is a demo affordance, not part
of the real site.
