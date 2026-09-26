The deck's footer scale as a page element: the continuum a subject sits on, drawn as 25 ticks with the active span in accent.

```jsx
<ScaleStrip unit="Den" right="Cyklus" majors={['1', '7', '14', '21', '28']} on={12} />
```

Topic pages only, static in the footer, **never fixed to the viewport**: a page with no inherent axis does not get one. `unit` names what the axis measures and `right` names the continuum; both are mono heads. `on` is the index of the last active tick, so the strip says where on the continuum the page sits. Five majors, evenly spaced, tabular. Pass it to `Foot` as the `scale` prop rather than placing it by hand.
