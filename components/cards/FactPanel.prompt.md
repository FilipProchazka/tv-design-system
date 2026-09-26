The sticky booking facts beside a webinar or talk, and the one Stripe button.

```jsx
<FactPanel rows={[{label:'Termín',value:'…'},{label:'Délka',value:'90 min'},{label:'Cena',value:'890 Kč',big:true}]}
  price="890 Kč" stripeUrl="https://…" leaving="Odchod na Stripe" />
```

`big` is for the price row only: it renders at figure scale, and one figure per panel is the limit. The amount is appended to the button label so the reader knows the price before the tab changes, and `leaving` names where the link goes. One commercial ask per page: if the page already closes on CtaClose, this panel is the ask and CtaClose is not.
