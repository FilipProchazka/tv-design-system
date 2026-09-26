A publication: year, title, byline, journal, and a grade only where the paper states its own design.

```jsx
<PublicationRow year={2026} title="Název práce" authors="Autoři" journal="Časopis" href="https://doi.org/…" grade="meta" />
```

Omit `href` for an inert row: no mark, no hover. `grade` is read off the paper, never inferred from the topic or the journal. Year and identifiers are mono with tabular numerals so a column of rows aligns. The publication list is empty at launch by design; the page says so in one true sentence rather than shipping placeholder rows.
