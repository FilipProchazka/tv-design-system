The homepage opening: the deck's SPLIT board as a page. Claim column left on paper, duotoned photograph right, full-bleed to the viewport edge.

```jsx
<SplitHero eyebrow="Klinická výživa" heading="Osm témat. Za každým něco skutečného."
  lead="Jedna podpůrná věta." image="/img/hero.jpg" alt="Co je na snímku"
  sig="/assets/sig-blue.png"
  actions={<><Pill href="/temata" label="Projít témata" /><Pill href="/kontakt" label="Napište mi" small /></>} />
```

`heading` is a claim, two lines at desktop, and it steps down one role on a phone rather than reflowing to reading size. The monogram sits above the kicker, as it does on a deck cover. `actions` takes the one square ask plus at most one mono link: never a pair of buttons. The photograph is duotoned and square-cornered; below 960px the columns collapse and the photograph follows the text. Use it once, on the homepage: every inner page opens on PageHero.
