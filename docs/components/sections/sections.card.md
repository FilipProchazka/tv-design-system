How a page opens: `SplitHero` (the homepage, built on the deck's SPLIT board), `PageHero` (every other page), `ClaimBand` (a claim used as a divider mid-page).

```jsx
<SplitHero claim="…" kicker="…" photo="/assets/photo/photo-midlife.jpg" />
<PageHero claim="…" kicker="Přednášky" />
<ClaimBand claim="…" dark />
```

The claim is a full sentence at display scale, not a topic label. One `ClaimBand` per page, and only dark if the page has no other dark band.
