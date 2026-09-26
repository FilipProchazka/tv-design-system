Renders one illustrative glyph from Lucide at the brand's stroke settings: reach for it when a slide or card needs a picture of a thing (stethoscope, pill, moon), never for the eight topic marks.

```jsx
<ClinicalIcon name="stethoscope" size={72} title="Klinické vyšetření" />
<ClinicalIcon name="venus" size={48} style={{ color: 'var(--accent)' }} />
```

- Needs the pinned Lucide UMD on the page: `<script src="https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js"></script>`
- `size`: 48–96 on a 1920 board, 20–24 inline. `strokeWidth` stays 1.5 except below 20px, where 2 keeps it from disappearing.
- Decorative by default (`aria-hidden`); pass `title` only when the glyph is the sole carrier of meaning.
- A missing or misspelled name renders a dashed square rather than nothing, so the gap is visible while designing.
- Use `Icon`, not this, for prehled / medicina / zenske-zdravi / dlouhovekost / spanek / fitness / vyziva / lifestyle. Those are hers.
