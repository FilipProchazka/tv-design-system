The three primitives every page uses: `Pill` (the ask), `Grade` (evidence strength), `Icon` (the 24px set).

```jsx
<Pill href="/kontakt" label="Napište mi" />
<Grade level="B" />
<Icon name="arrow" size={20} />
```

`Grade` states evidence, so it only ever sits next to a claim that has a source. An icon never appears without its label.
