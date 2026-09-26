Three mail routes to one inbox. There is no form anywhere on the site.

```jsx
<ContactBlock routes={[{subject:'Přednáška',hint:'Co do zprávy napsat, aby šla odpovědět jednou odpovědí.',href:'mailto:…'}]}
  phone="+420 000 000 000" clinic="Ústředna kliniky" email="jmeno@instituce.cz" />
```

The `subject` is the only sorting a static site gives her, so each route carries a real mail subject and one sentence of what to put in the message. `clinic` names whose switchboard the number reaches: the number is never presented as her private line.
