Everything that frames a page: the hairline nav strip, the connect band, the four-column footer, and the scale strip a topic page carries.

```jsx
<Nav active="temata" />
<ScaleStrip items={[…]} />
<Foot />
```

The nav is one strip: no utility bar, no pill CTA. `ScaleStrip` is static and belongs to topic pages only; it does not animate and it never appears on the homepage.
