A listing row: title, mono meta line, and a mark only if it actually goes somewhere.

```jsx
<EntryCard title="Název záznamu" meta="14. 3. 2026 · Podcast" href="https://…" external />
<EntryCard title="Záznam bez odkazu" meta="2025 · Rozhovor" />
```

Omit `href` for an inert entry and it renders flat, with no mark and no hover — a linked row and a dead row must never look alike. `external` swaps the arrow for the outward mark. Use for talks given, media appearances, archive rows; use PublicationRow when the row is a paper.
