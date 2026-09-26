A webinar for sale, with the price at figure scale in mono.

```jsx
<WebinarCard title="Název webináře" when="Kdykoliv, záznam" duration="90 min" price="890 Kč" href="/webinare" />
```

`when` is a Czech long date and time, or "Kdykoliv, záznam" for a recording. `price` is a formatted Czech amount with tabular numerals. The card is the reusable part; the empty state is the page's job: when there is no webinar the page says "Termíny dalších webinářů připravuji." and ships no card at all.
