Native `<details>`, first answer open.

```jsx
<FaqList items={[{q:'Otázka?',a:'Odpověď z reálného zdroje.'}]} openFirst />
```

Every answer has to be answerable from a real source; a question with no sourced answer is not invented to fill a row. Built on `<details>` so it works with JavaScript off and reads correctly to a screen reader. Flat at rest on a hairline, lifted only when open or hovered.
