The fixed 1920×1080 type scale. Body is 28px by default; any board may go to 24px, which is the floor. Mono never goes below 19px. Claim to body is 2.6×.

Deck sizes come from `--d-*` in `tokens/typography.css`, loaded through `slides/deck.css`: a board is a fixed canvas. Step down a rung before you shrink a column; if it still will not fit at 24px, it is two boards.
