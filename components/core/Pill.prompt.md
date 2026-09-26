The one ask on a page. Pills are retired (14 Sep 2026): a board has no rounded corners, so neither does the site: the primary ask is a square accent block, the same shape as the deck's highlight run.

```jsx
<Pill href="/kontakt" label="Napište mi" />
<Pill href="/o-mne" label="Více o mně" ghost />
<Pill href="https://…" label="Zaplatit a přihlásit se · 890 Kč" external />
```

`ghost` is the secondary block (transparent, accent ink, hairline border). `small` renders a tracked mono link instead of a block: that is the nav and inline form. `block` fills the column and pushes the mark to the far edge. `external` swaps the arrow for the outward mark and opens a new tab, so a link that leaves does not look like one that navigates.

Nothing moves on hover except the mark. The commercial ask appears once per page, after the proof: never twice.
