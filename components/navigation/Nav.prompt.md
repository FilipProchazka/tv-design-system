A mono utility bar over the white nav bar, collapsing to a stacked panel under 768px.

```jsx
<Nav wordmark="Jméno" links={[…]} current="/temata" cta="Napište mi" ctaHref="/kontakt"
  phone="+420 000 000 000" clinic="Ústředna kliniky" langLabel="EN" langHref="/en" />
```

`current` is the href of the page you are on: marked by weight and an accent underline, never by colour alone. `cta` is one commercial ask pointing at the next thing she is actually selling. The mobile panel is the only surface in the system that takes `--lift-strong`: it has genuinely left the page.
