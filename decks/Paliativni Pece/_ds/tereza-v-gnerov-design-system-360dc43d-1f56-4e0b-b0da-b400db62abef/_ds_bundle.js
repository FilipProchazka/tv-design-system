/* @ds-bundle: {"format":4,"namespace":"TerezaVGnerovDesignSystem_360dc4","components":[{"name":"EntryCard","sourcePath":"components/cards/EntryCard.jsx"},{"name":"FactPanel","sourcePath":"components/cards/FactPanel.jsx"},{"name":"InstitutionCard","sourcePath":"components/cards/InstitutionCard.jsx"},{"name":"PublicationRow","sourcePath":"components/cards/PublicationRow.jsx"},{"name":"TalkCard","sourcePath":"components/cards/TalkCard.jsx"},{"name":"TopicCard","sourcePath":"components/cards/TopicCard.jsx"},{"name":"WebinarCard","sourcePath":"components/cards/WebinarCard.jsx"},{"name":"Grade","sourcePath":"components/core/Grade.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"ClinicalIcon","sourcePath":"components/icons/ClinicalIcon.jsx"},{"name":"Foot","sourcePath":"components/navigation/Foot.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"ScaleStrip","sourcePath":"components/navigation/ScaleStrip.jsx"},{"name":"ClaimBand","sourcePath":"components/sections/ClaimBand.jsx"},{"name":"ContactBlock","sourcePath":"components/sections/ContactBlock.jsx"},{"name":"CtaClose","sourcePath":"components/sections/CtaClose.jsx"},{"name":"FaqList","sourcePath":"components/sections/FaqList.jsx"},{"name":"PageHero","sourcePath":"components/sections/PageHero.jsx"},{"name":"SplitHero","sourcePath":"components/sections/SplitHero.jsx"}],"sourceHashes":{"components/cards/EntryCard.jsx":"37c7da1da800","components/cards/FactPanel.jsx":"bbcf9b808ff4","components/cards/InstitutionCard.jsx":"761df267ec0f","components/cards/PublicationRow.jsx":"3f88bc72863c","components/cards/TalkCard.jsx":"8c12b66e5b0b","components/cards/TopicCard.jsx":"d4e503c68be8","components/cards/WebinarCard.jsx":"6e98664de82a","components/core/Grade.jsx":"409afe59ec63","components/core/Icon.jsx":"ef0851b850a1","components/core/Pill.jsx":"000cf3b924d0","components/icons/ClinicalIcon.jsx":"568e62395dd6","components/navigation/Foot.jsx":"7bdd620a05c9","components/navigation/Nav.jsx":"2415b0df668f","components/navigation/ScaleStrip.jsx":"1ddec96d13f6","components/sections/ClaimBand.jsx":"a5466d1d81e7","components/sections/ContactBlock.jsx":"7a8d65c614e5","components/sections/CtaClose.jsx":"a4898ee47a14","components/sections/FaqList.jsx":"43a3e6d0d16c","components/sections/PageHero.jsx":"db663c14c6dc","components/sections/SplitHero.jsx":"0039486e46d0","slides/deck-lint.js":"d6e3b8bc057f","slides/fit.js":"d6ea76e2d788","ui_kits/web/HomeScreen.jsx":"a0c0a54ea452","ui_kits/web/Screens.jsx":"020e896502cc","ui_kits/web/data.js":"4193bad35650"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TerezaVGnerovDesignSystem_360dc4 = window.TerezaVGnerovDesignSystem_360dc4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Grade.jsx
try { (() => {
const LEVELS = {
  meta: [5, 'Metaanalýza a RCT'],
  rct: [5, 'Randomizovaná studie'],
  kohorta: [4, 'Kohortová studie'],
  konsenzus: [3, 'Odborný konsenzus'],
  mechanismus: [2, 'Mechanistické'],
  nepodlozeno: [1, 'Nepodloženo']
};

/**
 * The evidence ladder: the brand's signature habit made visible. A claim can
 * state how well supported it is, on the same tick vocabulary as the deck's
 * scale. She sets it; it is never inferred. Presence is a signal, so absence
 * has to be possible: most claims carry no grade at all.
 */
function Grade({
  level,
  className = ''
}) {
  const [n, name] = LEVELS[level] || LEVELS.nepodlozeno;
  return /*#__PURE__*/React.createElement("span", {
    className: `tv-grade ${className}`,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--muted)',
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-kicker w-kicker-muted"
  }, name), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'flex-end',
      gap: 4,
      height: 14
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 3,
      height: i < n ? 14 : 6,
      background: i < n ? `var(--grade-${Math.min(5, n)})` : 'var(--grade-1)'
    }
  }))));
}
Object.assign(__ds_scope, { Grade });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Grade.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/**
 * The site's whole icon set, authored on one 24px grid at 1.5px stroke with
 * round caps and joins, so eight topic marks and nine interface marks read as
 * one hand. Colour comes from currentColor; a topic mark takes its theme
 * accent from the card it sits in. Copied verbatim from tv-web Icon.astro.
 */
const P = {
  // the eight topics, in frontmatter order
  prehled: ['M12 3 21 20H3L12 3Z', 'M7.2 12h9.6', 'M4.9 16.3h14.2'],
  medicina: [{
    r: [4, 3.5, 16, 17, 2.5]
  }, 'M9 3.5V2.6h6v.9', 'M7.5 13h2l1.5-3 2 6 1.5-3h2'],
  'zenske-zdravi': ['M20 12a8 8 0 1 1-3.1-6.3', 'M17.1 2.3v3.6h-3.6', {
    c: [12, 4.4, 1.15],
    fill: true
  }],
  dlouhovekost: ['M6.5 3h11', 'M6.5 21h11', 'M8 3v3.1c0 2 4 3.9 4 5.9s-4 3.9-4 5.9V21', 'M16 3v3.1c0 2-4 3.9-4 5.9s4 3.9 4 5.9V21', 'M9.4 19.2h5.2'],
  spanek: ['M20 14.4A8.6 8.6 0 0 1 9.6 4 8.6 8.6 0 1 0 20 14.4Z', 'M16.2 4.4h3.4', 'M17.9 2.7v3.4'],
  fitness: ['M2.6 8.4v7.2', 'M6.2 4.9v14.2', 'M17.8 4.9v14.2', 'M21.4 8.4v7.2', 'M6.2 12h11.6'],
  vyziva: [{
    c: [12, 12, 8.8]
  }, 'M12 3.2v17.6', 'M12 12h8.8', 'M12 12 5.8 18.2'],
  lifestyle: [{
    r: [3.2, 5, 17.6, 15.8, 2.5]
  }, 'M3.2 9.6h17.6', 'M7.8 3.2v3.4', 'M16.2 3.2v3.4', 'm9 15.1 2.2 2.2 4-4.3'],
  // interface
  arrow: ['M4.5 12h15', 'm13.4 5.8 6.1 6.2-6.1 6.2'],
  phone: ['M6.4 3.4h3.1l1.6 4-2 1.3a10.7 10.7 0 0 0 5.2 5.2l1.3-2 4 1.6v3.1a2 2 0 0 1-2.2 2A16.9 16.9 0 0 1 4.4 5.6a2 2 0 0 1 2-2.2Z'],
  mail: [{
    r: [2.8, 5, 18.4, 14, 2.4]
  }, 'm3.6 6.6 8.4 6 8.4-6'],
  instagram: [{
    r: [3.2, 3.2, 17.6, 17.6, 5]
  }, {
    c: [12, 12, 4.1]
  }, {
    c: [17.1, 6.9, 1.15],
    fill: true
  }],
  menu: ['M3.5 7h17', 'M3.5 12h17', 'M3.5 17h17'],
  close: ['M5.6 5.6l12.8 12.8', 'M18.4 5.6L5.6 18.4'],
  building: ['M3.6 20.8h16.8', 'M5.4 20.8V6.4l6.6-3.2 6.6 3.2v14.4', 'M9.2 9.6h1.6', 'M13.2 9.6h1.6', 'M9.2 13.4h1.6', 'M13.2 13.4h1.6', 'M10.2 20.8v-3.6h3.6v3.6'],
  external: ['M13.6 4.4h6v6', 'm19.6 4.4-8.2 8.2', 'M18 14.2v4.2a2 2 0 0 1-2 2H5.6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4.2'],
  // the accordion mark: the upright bar collapses when the answer opens
  plus: ['M5 12h14', {
    d: 'M12 5v14',
    cls: 'bar-v'
  }]
};
function Icon({
  name,
  size = 24,
  className = '',
  title,
  style
}) {
  const parts = P[name] || [];
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? 'img' : undefined,
    "aria-hidden": title ? undefined : 'true',
    focusable: "false",
    style: style
  }, title ? /*#__PURE__*/React.createElement("title", null, title) : null, parts.map((p, i) => {
    if (typeof p === 'string') return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: p
    });
    if (p.d) return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: p.d,
      className: p.cls
    });
    if (p.r) return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: p.r[0],
      y: p.r[1],
      width: p.r[2],
      height: p.r[3],
      rx: p.r[4]
    });
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: p.c[0],
      cy: p.c[1],
      r: p.c[2],
      fill: p.fill ? 'currentColor' : undefined,
      stroke: p.fill ? 'none' : undefined
    });
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/EntryCard.jsx
try { (() => {
/**
 * A listing row: mono meta, title, and a mark only if it actually goes
 * somewhere. Omit `href` and the row renders inert, no mark, no hover, so a
 * linked row and a dead row never look alike.
 */
function EntryCard({
  title,
  meta,
  href,
  external = false,
  cta
}) {
  const linked = Boolean(href);
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-meta",
    style: {
      display: 'block'
    }
  }, meta), /*#__PURE__*/React.createElement("span", {
    className: "w-sub tv-entry-title",
    style: {
      display: 'block',
      marginTop: 10,
      color: 'var(--ink)',
      transition: 'color var(--dur) var(--ease)'
    }
  }, title)), linked ? /*#__PURE__*/React.createElement("span", {
    className: 'w-link ' + (external ? 'w-link-out tv-more-out' : 'tv-more'),
    style: {
      whiteSpace: 'nowrap'
    }
  }, cta ?? (external ? 'Otevřít' : 'Více'), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: external ? 'external' : 'arrow',
    size: 17
  })) : null);
  if (!linked) return /*#__PURE__*/React.createElement("div", {
    className: "w-row w-row-3 tv-entry"
  }, inner);
  return /*#__PURE__*/React.createElement("a", {
    className: "w-row w-row-3 tv-entry tv-entry-link",
    href: href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined
  }, inner);
}
Object.assign(__ds_scope, { EntryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/EntryCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FactPanel.jsx
try { (() => {
/**
 * The sticky booking facts and the one Stripe button. Rows sit on hairlines;
 * `big` renders at figure scale in Geist 300 and is for the price row only.
 * The amount is appended to the button label so the reader knows the price
 * before the tab changes, and `leaving` names where the link goes.
 */
function FactPanel({
  rows = [],
  price,
  stripeUrl = '#',
  leaving,
  note,
  cta = 'Zaplatit a přihlásit se'
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "tv-fact-panel",
    style: {
      borderTop: '2px solid var(--ink)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid'
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 20,
      padding: '16px 0',
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-kicker w-kicker-muted"
  }, r.label), r.big ? /*#__PURE__*/React.createElement("span", {
    className: "w-figure",
    style: {
      fontSize: 'clamp(36px,3.4vw,52px)'
    }
  }, r.value) : /*#__PURE__*/React.createElement("span", {
    className: "w-body",
    style: {
      color: 'var(--ink)',
      textAlign: 'right'
    }
  }, r.value)))), /*#__PURE__*/React.createElement("a", {
    className: "w-ask",
    href: stripeUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 24
    }
  }, price ? cta + ' · ' + price : cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external",
    size: 20
  })), leaving ? /*#__PURE__*/React.createElement("p", {
    className: "w-meta",
    style: {
      marginTop: 12
    }
  }, leaving) : null, note ? /*#__PURE__*/React.createElement("p", {
    className: "w-body",
    style: {
      marginTop: 16,
      color: 'var(--muted)',
      fontSize: 17
    }
  }, note) : null);
}
Object.assign(__ds_scope, { FactPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FactPanel.jsx", error: String((e && e.message) || e) }); }

// components/cards/InstitutionCard.jsx
try { (() => {
/**
 * An organisation that corroborates the record, as a row on a hairline.
 * `url` is required by design: a card with no link is a fabricated citation.
 * The institution is drawn as the `building` mark, never photographed.
 */
function InstitutionCard({
  name,
  role,
  url,
  cta = 'Web instituce'
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "w-row w-row-3 tv-inst",
    href: url,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "tv-inst-mark w-row-mark",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "building",
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-sub tv-inst-name",
    style: {
      display: 'block',
      color: 'var(--ink)',
      transition: 'color var(--dur) var(--ease)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "w-body",
    style: {
      display: 'block',
      color: 'var(--muted)',
      marginTop: 10
    }
  }, role)), /*#__PURE__*/React.createElement("span", {
    className: "w-link w-link-out tv-more-out",
    style: {
      whiteSpace: 'nowrap'
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external",
    size: 17
  })));
}
Object.assign(__ds_scope, { InstitutionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InstitutionCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PublicationRow.jsx
try { (() => {
/**
 * A publication: year and journal in mono, title in Geist, and a grade only
 * where the paper states its own design. Omit `href` for an inert row: no
 * mark, no hover. Year and identifiers are tabular so a column of rows
 * aligns down the page.
 */
function PublicationRow({
  year,
  title,
  authors,
  journal,
  href,
  grade
}) {
  const linked = Boolean(href);
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    className: "w-meta",
    style: {
      display: 'block',
      fontSize: 17,
      color: 'var(--accent)'
    }
  }, year), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-sub tv-pub-title",
    style: {
      display: 'block',
      fontSize: 'clamp(20px,1.7vw,26px)',
      color: 'var(--ink)',
      transition: 'color var(--dur) var(--ease)'
    }
  }, title), authors ? /*#__PURE__*/React.createElement("span", {
    className: "w-body",
    style: {
      display: 'block',
      marginTop: 8,
      color: 'var(--muted)'
    }
  }, authors) : null, /*#__PURE__*/React.createElement("span", {
    className: "w-meta",
    style: {
      display: 'block',
      marginTop: 8
    }
  }, journal), grade ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Grade, {
    level: grade
  })) : null), linked ? /*#__PURE__*/React.createElement("span", {
    className: "tv-pub-go",
    style: {
      color: 'var(--accent)',
      transition: 'transform var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external",
    size: 19
  })) : null);
  const style = {
    gridTemplateColumns: '84px minmax(0,1fr) auto'
  };
  if (!linked) return /*#__PURE__*/React.createElement("div", {
    className: "w-row tv-pub",
    style: style
  }, inner);
  return /*#__PURE__*/React.createElement("a", {
    className: "w-row tv-pub tv-pub-link",
    style: style,
    href: href,
    target: "_blank",
    rel: "noopener noreferrer"
  }, inner);
}
Object.assign(__ds_scope, { PublicationRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PublicationRow.jsx", error: String((e && e.message) || e) }); }

// components/cards/TalkCard.jsx
try { (() => {
/**
 * A bookable talk: a duotoned photograph above a rule, mono meta, and two
 * sentences of abstract. The abstract is never cut to fit the grid: if it
 * does not fit, the grid changes. The photograph is subject photography,
 * square-cornered and duotoned, never a portrait of her.
 */
function TalkCard({
  title,
  abstract,
  meta,
  topicName,
  image,
  alt = '',
  href = '#',
  cta = 'Poptat přednášku'
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "tv-talk",
    href: href,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-photo",
    style: {
      display: 'block',
      aspectRatio: '16 / 10'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt
  })), /*#__PURE__*/React.createElement("span", {
    className: "w-col-ruled",
    style: {
      display: 'block',
      marginTop: 20
    }
  }, topicName ? /*#__PURE__*/React.createElement("span", {
    className: "w-kicker"
  }, topicName) : null, /*#__PURE__*/React.createElement("span", {
    className: "w-meta",
    style: {
      display: 'block',
      marginTop: topicName ? 10 : 0
    }
  }, meta), /*#__PURE__*/React.createElement("span", {
    className: "w-sub tv-talk-title",
    style: {
      display: 'block',
      marginTop: 14,
      color: 'var(--ink)',
      transition: 'color var(--dur) var(--ease)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "w-body",
    style: {
      display: 'block',
      marginTop: 14,
      color: 'var(--muted)'
    }
  }, abstract), /*#__PURE__*/React.createElement("span", {
    className: "w-link tv-more",
    style: {
      marginTop: 18
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow",
    size: 17
  }))));
}
Object.assign(__ds_scope, { TalkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TalkCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TopicCard.jsx
try { (() => {
/**
 * One of the eight subjects, as a row on a hairline rather than a tinted
 * card (14 Sep 2026). Eight cards were a row of boxes; eight rows are an
 * index. The theme colour appears twice: the 52px square mark and the
 * subject's name in accent on hover: and the name is always in text beside
 * the mark, because colour never carries meaning alone.
 */
function TopicCard({
  slug,
  name,
  summary,
  theme = 'blue',
  href = '#',
  more = 'Více'
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: 'w-row w-row-3 tv-topic t-' + theme,
    href: href
  }, /*#__PURE__*/React.createElement("span", {
    className: "tv-topic-mark w-row-mark",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: slug,
    size: 26
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-sub tv-topic-name",
    style: {
      display: 'block',
      color: 'var(--ink)',
      transition: 'color var(--dur) var(--ease)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    className: "w-body",
    style: {
      display: 'block',
      color: 'var(--muted)',
      marginTop: 10
    }
  }, summary)), /*#__PURE__*/React.createElement("span", {
    className: "w-link tv-more",
    style: {
      whiteSpace: 'nowrap'
    }
  }, more, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow",
    size: 17
  })));
}
Object.assign(__ds_scope, { TopicCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TopicCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/WebinarCard.jsx
try { (() => {
/**
 * A webinar for sale: mono facts, the price at figure scale in Geist 300, and
 * the one ask. The card is the reusable part: the empty state is the page's
 * job, and when there is no webinar the page says so in one true sentence
 * rather than shipping a placeholder row.
 */
function WebinarCard({
  title,
  when,
  duration,
  price,
  href = '#',
  cta = 'Přihlásit se'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-row w-row-2 tv-webinar"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "w-kicker"
  }, when), /*#__PURE__*/React.createElement("h3", {
    className: "w-sub",
    style: {
      marginTop: 12,
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "w-meta",
    style: {
      display: 'block',
      marginTop: 12
    }
  }, duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-figure",
    style: {
      fontSize: 'clamp(44px,4.6vw,72px)'
    }
  }, price), /*#__PURE__*/React.createElement("a", {
    className: "w-ask",
    href: href
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow",
    size: 20
  }))));
}
Object.assign(__ds_scope, { WebinarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/WebinarCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
/**
 * The one ask on a page. Pills are retired (14 Sep 2026): a board has no
 * rounded corners, so neither does the site. The primary ask is a square
 * accent block, the same shape as the deck's highlight run, and everything
 * secondary is a tracked mono link with a mark.
 *
 * `external` opens off-site and says so with the outward mark instead of the
 * arrow, so a link that leaves does not look like a link that navigates.
 * Nothing here moves on hover except the mark.
 */
function Pill({
  href = '#',
  label,
  ghost = false,
  small = false,
  external = false,
  block = false,
  className = '',
  onClick,
  children
}) {
  const cls = ['w-ask', ghost && 'w-ask-ghost', className].filter(Boolean).join(' ');
  const style = block ? {
    width: '100%',
    justifyContent: 'space-between'
  } : undefined;
  const body = label ?? children;
  if (small) {
    return /*#__PURE__*/React.createElement("a", {
      className: ['w-link', external && 'w-link-out', className].filter(Boolean).join(' '),
      href: href,
      onClick: onClick,
      target: external ? '_blank' : undefined,
      rel: external ? 'noopener noreferrer' : undefined
    }, body, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: external ? 'external' : 'arrow',
      size: 17
    }));
  }
  return /*#__PURE__*/React.createElement("a", {
    className: cls,
    href: href,
    onClick: onClick,
    style: style,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined
  }, body, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: external ? 'external' : 'arrow',
    size: 20
  }));
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/icons/ClinicalIcon.jsx
try { (() => {
/**
 * Lucide, rendered in her hand.
 *
 * The brand set (`Icon`) is hers: eight topic marks and nine interface marks,
 * drawn for the site. It is deliberately small and must stay that way: a
 * topic mark means something. When a slide or a card needs a plain
 * illustrative glyph (a stethoscope, a pill, a moon), it comes from Lucide,
 * which is drawn on the same 24px grid with round caps and joins, so at
 * stroke 1.5 it is indistinguishable in construction from her own marks.
 *
 * Lucide is ISC-licensed and loaded from a pinned CDN build; see
 * guidelines/ICONOGRAPHY.md for the curated clinical list and the rule for
 * when to use this instead of `Icon`.
 */
const pascal = n => n.split(/[-_]/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
function render(node, key) {
  if (typeof node === 'string') return node;
  const [tag, attrs, children] = node;
  const props = {
    key,
    ...attrs
  };
  if (attrs && attrs.class) {
    props.className = attrs.class;
    delete props.class;
  }
  return React.createElement(tag, props, Array.isArray(children) ? children.map(render) : undefined);
}
function ClinicalIcon({
  name,
  size = 24,
  strokeWidth = 1.5,
  className = '',
  title,
  style
}) {
  const set = typeof window !== 'undefined' && window.lucide && window.lucide.icons;
  const icon = set ? set[pascal(name)] : null;

  // Absence is shown, not swallowed: a dashed square is visible in the design.
  if (!icon) {
    return /*#__PURE__*/React.createElement("span", {
      className: className,
      "aria-hidden": "true",
      style: {
        display: 'inline-block',
        width: size,
        height: size,
        border: '1.5px dashed currentColor',
        opacity: 0.45,
        borderRadius: 2,
        ...style
      }
    });
  }
  const children = Array.isArray(icon) ? icon[2] : icon.children || [];
  return /*#__PURE__*/React.createElement("svg", {
    className: className,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    role: title ? 'img' : undefined,
    "aria-hidden": title ? undefined : 'true',
    focusable: "false",
    style: style
  }, title ? /*#__PURE__*/React.createElement("title", null, title) : null, children.map(render));
}
Object.assign(__ds_scope, { ClinicalIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/ClinicalIcon.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
/**
 * One hairline strip: wordmark left, tracked mono links right, one rule under
 * it. The dark utility bar and the pill CTA are retired (14 Sep 2026): the
 * phone and mail routes live in the footer, where a record site puts them.
 * The current page is marked by ink weight and an accent underline, never by
 * colour alone. Below 1024px it collapses to a stacked panel.
 */
function Nav({
  wordmark,
  links = [],
  current,
  cta,
  ctaHref = '#',
  phone,
  phoneHref,
  clinic,
  email,
  emailHref,
  instagram,
  instagramUrl,
  langLabel,
  langHref
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", {
    className: "tv-head",
    "data-menu": open ? 'open' : 'closed',
    style: {
      position: 'relative',
      zIndex: 40,
      background: 'var(--surface)',
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      minHeight: 88,
      display: 'flex',
      alignItems: 'center',
      gap: 'clamp(20px,3vw,48px)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#/",
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      marginRight: 'auto',
      whiteSpace: 'nowrap'
    }
  }, wordmark), /*#__PURE__*/React.createElement("nav", {
    className: "tv-links",
    "aria-label": "Hlavn\xED navigace"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    "aria-current": l.href === current ? 'page' : undefined
  }, l.label))), cta ? /*#__PURE__*/React.createElement("a", {
    className: "w-link tv-nav-ask tv-more",
    href: ctaHref,
    style: {
      color: 'var(--ink)'
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow",
    size: 17
  })) : null, langLabel ? /*#__PURE__*/React.createElement("a", {
    className: "tv-lang tv-nav-ask",
    href: langHref
  }, langLabel) : null, /*#__PURE__*/React.createElement("button", {
    className: "tv-menu-btn",
    type: "button",
    "aria-expanded": open,
    "aria-controls": "tv-menu-panel",
    "aria-label": "Nab\xEDdka",
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'close' : 'menu',
    size: 24
  }))), /*#__PURE__*/React.createElement("div", {
    className: "tv-panel",
    id: "tv-menu-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    className: "tv-panel-row",
    key: l.href,
    href: l.href,
    "aria-current": l.href === current ? 'page' : undefined
  }, /*#__PURE__*/React.createElement("span", null, l.label), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow",
    size: 20
  }))), phone ? /*#__PURE__*/React.createElement("a", {
    className: "tv-panel-row",
    href: phoneHref
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-meta"
  }, phone, clinic ? ' · ' + clinic : ''), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 20
  })) : null, email ? /*#__PURE__*/React.createElement("a", {
    className: "tv-panel-row",
    href: emailHref
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-meta"
  }, email), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 20
  })) : null, instagram ? /*#__PURE__*/React.createElement("a", {
    className: "tv-panel-row",
    href: instagramUrl,
    target: "_blank",
    rel: "me noopener noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-meta"
  }, instagram), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "instagram",
    size: 20
  })) : null, cta ? /*#__PURE__*/React.createElement("a", {
    className: "w-ask",
    href: ctaHref,
    style: {
      width: '100%',
      justifyContent: 'space-between',
      marginTop: 20
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow",
    size: 20
  })) : null)));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ScaleStrip.jsx
try { (() => {
/**
 * The deck's footer scale: the continuum a subject sits on, drawn as 25 ticks
 * with the active span in accent. Topic pages only: a page with no inherent
 * axis does not get one.
 */
function ScaleStrip({
  unit,
  right,
  majors = [],
  on = 12,
  total = 25
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-scale"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-scale-hd"
  }, /*#__PURE__*/React.createElement("b", null, unit), /*#__PURE__*/React.createElement("span", null, right)), /*#__PURE__*/React.createElement("div", {
    className: "w-scale-row"
  }, Array.from({
    length: total
  }, (_, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    className: i <= on ? 'on' : undefined
  }))), /*#__PURE__*/React.createElement("div", {
    className: "w-scale-maj"
  }, majors.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, m))));
}
Object.assign(__ds_scope, { ScaleStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ScaleStrip.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Foot.jsx
try { (() => {
/**
 * The connect strip and the footer. The strip is the page's one dark band
 * below the content: site chrome in blue whatever theme the page takes. The
 * footer is four columns on paper with mono heads and a hairline above the
 * copyright line: who she is, quick links, the eight topics, contact. No
 * postal address, because none is sourced.
 *
 * `scale` renders the deck's footer scale strip. Topic pages only, static,
 * never fixed to the viewport: it is a continuum the subject actually has.
 */
function Foot({
  wordmark,
  role,
  connectTitle = 'Spojte se se mnou',
  phone,
  phoneHref,
  email,
  emailHref,
  instagramUrl,
  clinic,
  links = [],
  topics = [],
  copyright,
  scale,
  sig
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "t-blue dark",
    style: {
      background: 'var(--surface)',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      paddingTop: 28,
      paddingBottom: 28,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px 40px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "w-kicker",
    style: {
      color: 'var(--accent)'
    }
  }, connectTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px 32px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "tv-connect-item",
    href: phoneHref
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 19
  }), /*#__PURE__*/React.createElement("span", null, phone)), /*#__PURE__*/React.createElement("a", {
    className: "tv-connect-item",
    href: emailHref
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 19
  }), /*#__PURE__*/React.createElement("span", null, email))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: 'clamp(56px,6vw,88px) 0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, scale ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(40px,5vw,72px)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ScaleStrip, scale)) : null, /*#__PURE__*/React.createElement("div", {
    className: "tv-foot-cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tv-foot-about"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: '-.02em',
      color: 'var(--ink)'
    }
  }, wordmark), /*#__PURE__*/React.createElement("p", {
    className: "w-body",
    style: {
      color: 'var(--muted)',
      marginTop: 12,
      maxWidth: '32ch'
    }
  }, role), /*#__PURE__*/React.createElement("a", {
    className: "tv-ig",
    href: instagramUrl,
    target: "_blank",
    rel: "me noopener noreferrer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "instagram",
    size: 21,
    title: "Instagram"
  }))), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Rychl\xE9 odkazy"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "tv-col-h"
  }, "Rychl\xE9 odkazy"), /*#__PURE__*/React.createElement("ul", null, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.href
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href
  }, l.label))))), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "T\xE9mata"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "tv-col-h"
  }, "T\xE9mata"), /*#__PURE__*/React.createElement("ul", null, topics.map(t => /*#__PURE__*/React.createElement("li", {
    key: t.href
  }, /*#__PURE__*/React.createElement("a", {
    href: t.href
  }, t.label))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "tv-col-h"
  }, "Kontakt"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: emailHref
  }, email)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: phoneHref
  }, phone)), /*#__PURE__*/React.createElement("li", {
    className: "w-meta",
    style: {
      marginTop: 12
    }
  }, clinic)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(40px,5vw,64px)',
      paddingTop: 26,
      borderTop: '1px solid var(--rule)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "w-meta"
  }, copyright), sig ? /*#__PURE__*/React.createElement("img", {
    src: sig,
    alt: "",
    style: {
      width: 96,
      opacity: .8
    }
  }) : null))));
}
Object.assign(__ds_scope, { Foot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Foot.jsx", error: String((e && e.message) || e) }); }

// components/sections/ClaimBand.jsx
try { (() => {
/**
 * One sentence over a duotoned photograph, on a real scrim: the deck's
 * photo-statement board as a page band. The scrim is a solid background
 * colour plus a bottom gradient: a gradient alone computes as a transparent
 * background and under-measures on contrast tools even when it looks legible.
 */
function ClaimBand({
  claim,
  image,
  alt = ''
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "w-photo",
    style: {
      minHeight: 'clamp(360px,40vw,560px)',
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "w-scrim",
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      position: 'relative',
      alignSelf: 'center',
      paddingTop: 'clamp(56px,6vw,96px)',
      paddingBottom: 'clamp(56px,6vw,96px)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "w-statement",
    style: {
      color: '#FFFFFF',
      fontSize: 'clamp(32px,4.4vw,68px)',
      maxWidth: '18ch'
    }
  }, claim)));
}
Object.assign(__ds_scope, { ClaimBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/ClaimBand.jsx", error: String((e && e.message) || e) }); }

// components/sections/ContactBlock.jsx
try { (() => {
/**
 * Three mail routes to one inbox, as rows on hairlines. No form anywhere:
 * there is no backend to receive one, and a form that silently fails is worse
 * than a mail client that opens. The subject is the only sorting a static
 * site gives her, so each route carries a real one.
 */
function ContactBlock({
  heading = 'Napište mi.',
  eyebrow,
  routes = [],
  phone,
  phoneHref,
  clinic,
  email,
  emailHref,
  photo,
  photoAlt = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tv-contact",
    style: {
      display: 'grid',
      gap: 'clamp(32px,4vw,72px)',
      alignItems: 'start',
      gridTemplateColumns: photo ? 'minmax(0,1.15fr) minmax(0,.85fr)' : 'minmax(0,1fr)'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "w-kicker"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: "w-claim",
    style: {
      marginTop: eyebrow ? 18 : 0,
      color: 'var(--ink)'
    }
  }, heading), /*#__PURE__*/React.createElement("ul", {
    className: "w-rows",
    style: {
      listStyle: 'none',
      marginTop: 40
    }
  }, routes.map(r => /*#__PURE__*/React.createElement("li", {
    key: r.subject
  }, /*#__PURE__*/React.createElement("a", {
    className: "tv-route w-row",
    href: r.href,
    style: {
      gridTemplateColumns: 'minmax(0,1fr) auto',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-sub tv-route-subject",
    style: {
      display: 'block',
      fontSize: 'clamp(20px,1.7vw,26px)',
      color: 'var(--ink)',
      transition: 'color var(--dur) var(--ease)'
    }
  }, r.subject), /*#__PURE__*/React.createElement("span", {
    className: "w-body",
    style: {
      display: 'block',
      marginTop: 8,
      color: 'var(--muted)'
    }
  }, r.hint)), /*#__PURE__*/React.createElement("span", {
    className: "tv-route-go",
    style: {
      flex: 'none',
      color: 'var(--accent)',
      transition: 'transform var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 22
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'grid',
      gap: 10,
      justifyItems: 'start'
    }
  }, phone ? /*#__PURE__*/React.createElement("a", {
    className: "w-link",
    href: phoneHref
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 17
  }), phone) : null, clinic ? /*#__PURE__*/React.createElement("p", {
    className: "w-meta"
  }, clinic) : null, email ? /*#__PURE__*/React.createElement("a", {
    className: "w-link",
    href: emailHref
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 17
  }), email) : null)), photo ? /*#__PURE__*/React.createElement("div", {
    className: "w-photo",
    style: {
      aspectRatio: '760 / 900',
      maxHeight: 620
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: photoAlt,
    loading: "lazy"
  })) : null);
}
Object.assign(__ds_scope, { ContactBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/ContactBlock.jsx", error: String((e && e.message) || e) }); }

// components/sections/CtaClose.jsx
try { (() => {
/**
 * The one commercial ask, in the page's own theme, after the proof. `theme`
 * takes the page's theme so a violet topic page does not close in blue.
 * `heading` is a question addressed to the reader and takes no eyebrow above
 * it: a heading that is already a full sentence never gets one.
 */
function CtaClose({
  theme = 'blue',
  heading = 'Napíšete mi?',
  ctaLabel = 'Napište mi',
  ctaHref = '#',
  phone,
  phoneHref,
  sig
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: 'w-sec t-' + theme + ' dark',
    style: {
      background: 'var(--surface)',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) auto',
      gap: 'clamp(28px,4vw,72px)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "w-claim",
    style: {
      color: 'var(--ink)'
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    className: "w-actions",
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    href: ctaHref,
    label: ctaLabel
  }), phone ? /*#__PURE__*/React.createElement("a", {
    className: "w-link",
    href: phoneHref,
    style: {
      color: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 17
  }), phone) : null)), sig ? /*#__PURE__*/React.createElement("img", {
    src: sig,
    alt: "",
    style: {
      width: 148,
      opacity: .95
    }
  }) : null));
}
Object.assign(__ds_scope, { CtaClose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/CtaClose.jsx", error: String((e && e.message) || e) }); }

// components/sections/FaqList.jsx
try { (() => {
/**
 * Native `<details>`, first answer open, on hairlines: no card, no shadow,
 * no lift. Every answer has to be answerable from a real source; a question
 * with no sourced answer is not invented to fill a row.
 */
function FaqList({
  items = [],
  openFirst = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-faq"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("details", {
    key: i,
    open: openFirst && i === 0
  }, /*#__PURE__*/React.createElement("summary", null, it.q, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 'none',
      color: 'var(--accent)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16"
  }), /*#__PURE__*/React.createElement("path", {
    className: "bar-v",
    d: "M12 4v16",
    style: {
      transformOrigin: '12px 12px',
      transition: 'transform var(--dur) var(--ease)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "w-answer w-body"
  }, it.a))));
}
Object.assign(__ds_scope, { FaqList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/FaqList.jsx", error: String((e && e.message) || e) }); }

// components/sections/PageHero.jsx
try { (() => {
/**
 * The opening band every inner page shares: the deck's OPEN board as a page.
 * `heading` is written as a claim, not a topic label, and when it is already
 * a full sentence the eyebrow is dropped: saying the same thing twice in two
 * type sizes is the duplication this component exists to avoid.
 */
function PageHero({
  eyebrow,
  heading,
  lead,
  icon,
  align = 'start'
}) {
  const centred = align === 'center';
  return /*#__PURE__*/React.createElement("header", {
    className: "w-sec-tight",
    style: {
      paddingTop: 'clamp(56px,6vw,104px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      textAlign: centred ? 'center' : 'start'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 64,
      height: 64,
      border: '1px solid var(--rule)',
      color: 'var(--accent)',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30
  })) : null, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "w-kicker"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    className: "w-claim",
    style: {
      marginTop: eyebrow ? 18 : 0,
      marginInline: centred ? 'auto' : undefined
    }
  }, heading), lead ? /*#__PURE__*/React.createElement("p", {
    className: "w-lead",
    style: {
      marginTop: 26,
      color: 'var(--muted)',
      marginInline: centred ? 'auto' : undefined
    }
  }, lead) : null));
}
Object.assign(__ds_scope, { PageHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/PageHero.jsx", error: String((e && e.message) || e) }); }

// components/sections/SplitHero.jsx
try { (() => {
/**
 * The homepage opening: the deck's SPLIT board as a page. Claim column left
 * on paper, duotoned photograph right, full-bleed to the viewport edge. The
 * monogram sits above the kicker, as it does on a deck cover.
 */
function SplitHero({
  eyebrow,
  heading,
  lead,
  image,
  alt = '',
  sig,
  actions
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "w-hero-split",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.02fr) minmax(0,.98fr)',
      alignItems: 'stretch',
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(56px,7vw,128px) clamp(20px,4vw,80px) clamp(56px,7vw,128px) max(var(--gut), calc((100vw - var(--shell)) / 2 + var(--gut)))'
    }
  }, /*#__PURE__*/React.createElement("div", null, sig ? /*#__PURE__*/React.createElement("img", {
    src: sig,
    alt: "",
    style: {
      width: 132,
      marginBottom: 30
    }
  }) : null, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "w-kicker"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h1", {
    className: "w-claim",
    style: {
      marginTop: 18
    }
  }, heading), lead ? /*#__PURE__*/React.createElement("p", {
    className: "w-lead",
    style: {
      marginTop: 28,
      color: 'var(--muted)'
    }
  }, lead) : null, actions ? /*#__PURE__*/React.createElement("div", {
    className: "w-actions",
    style: {
      marginTop: 36
    }
  }, actions) : null)), /*#__PURE__*/React.createElement("div", {
    className: "w-photo",
    style: {
      minHeight: 'clamp(320px,46vw,720px)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt
  })));
}
Object.assign(__ds_scope, { SplitHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SplitHero.jsx", error: String((e && e.message) || e) }); }

// slides/deck-lint.js
try { (() => {
/* Deck lint: an ON-DEMAND check, not an auto-include.
   Run it from the console of a deck page:

     fetch('slides/deck-lint.js').then(r => r.text()).then(t => {
       window.__deckLintRan = false; new Function(t)();
       setTimeout(() => console.log(window.__deckLint), 600);
     });

   Do NOT add it as a <script src> in a DC helmet: that evaluates in a
   sandboxed realm whose `window` and `document` are not the page's, so the
   verdict never reaches the deck: and a silent gate reads as "clean", which
   is worse than no gate at all.

   Language-aware: reads `lang` on <html> and applies the Czech or English
   measures from guidelines/TYPESETTING.md. Advisory only: it reports, it
   does not change the page. The verdict lands on `window.__deckLint` and on
   `<html data-deck-lint>`.

   Two timing rules, learned the hard way:
   1. Measure AFTER the DC runtime has laid the boards out. Measuring early
      makes every full-bleed scrim look like a footer intrusion.
   2. Copy-level checks read `textContent`, never `innerHTML`: an unsettled
      `style` attribute serializes as `rgba(15,53,87,.97)`, which reads as a
      decimal comma and produces a phantom Czech-punctuation failure. */
(function () {
  function run() {
    /* single-run latch lives HERE, not in the IIFE: two triggers race below and
       whichever fires first wins, the other is a no-op. If a run throws, the
       latch is RELEASED so the losing trigger retries: otherwise a failure in
       the early run leaves window.__deckLint undefined, which reads as clean. */
    if (window.__deckLintRan) return;
    window.__deckLintRan = true;
    try {
      measure();
    } catch (e) {
      window.__deckLintRan = false;
      window.__deckLint = ['lint: run failed: ' + e.message];
      console.warn('[deck-lint] run failed, will retry', e);
    }
  }
  function measure() {
    const strip = el => (el.textContent || '').replace(/\s+/g, ' ').trim();
    const lang = (document.documentElement.lang || 'cs').toLowerCase().startsWith('en') ? 'en' : 'cs';
    const LIM = {
      cs: {
        claim: 70,
        claimN: 80,
        statement: 90,
        hookChars: 42,
        hookWords: 7,
        body: 120
      },
      en: {
        claim: 80,
        claimN: 92,
        statement: 104,
        hookChars: 48,
        hookWords: 8,
        body: 135
      }
    }[lang];
    const slides = [...document.querySelectorAll('.slide,.reel')];
    const out = [];
    let run_ = [];
    slides.forEach((s, i) => {
      const f = s.dataset.family;
      const lab = s.dataset.screenLabel || (s.querySelector('.fam') ? strip(s.querySelector('.fam')).slice(0, 2) : i + 1);

      /* rhythm: never three boards of one family together */
      if (f && run_.length && run_[run_.length - 1].f === f) run_.push({
        f,
        lab
      });else run_ = f ? [{
        f,
        lab
      }] : [];
      if (run_.length === 3) out.push(`rhythm: three consecutive ${f}: ${run_.map(r => r.lab).join(', ')}`);

      /* measure, per language */
      s.querySelectorAll('.cl,.claim').forEach(c => {
        const n = strip(c).length,
          narrow = c.classList.contains('n');
        const cap = narrow ? LIM.claimN : LIM.claim;
        if (n > cap) out.push(`measure[${lang}]: ${narrow ? 'BESIDE ' : ''}claim ${n} chars (max ${cap}) on ${lab}`);
      });
      s.querySelectorAll('.st,.statement').forEach(c => {
        const n = strip(c).length;
        if (n > LIM.statement) out.push(`measure[${lang}]: statement ${n} chars (max ${LIM.statement}) on ${lab}`);
      });

      /* a board carries a claim or a statement, never both */
      if (s.querySelector('.cl,.claim') && s.querySelector('.st,.statement')) out.push(`composition: claim and statement on the same board: ${lab}`);

      /* lists cap at five */
      s.querySelectorAll('ul,ol').forEach(l => {
        if (l.children.length > 5) out.push(`list: ${l.children.length} items (max 5) on ${lab}`);
      });

      /* reel hook budget */
      s.querySelectorAll('.a-hook,.hook').forEach(c => {
        const t = strip(c),
          w = t.split(' ').filter(Boolean).length;
        if (w > LIM.hookWords || t.length > LIM.hookChars) out.push(`hook[${lang}]: ${w} words / ${t.length} chars (max ${LIM.hookWords}/${LIM.hookChars}) on ${lab}`);
      });

      /* weight rules (guidelines/TYPESETTING.md §4, 13 Sep 2026):
           ladder 300 / 400 / 500 / 600: real cuts only, never 700+ or faux bold
           300 only at >= 60px on light, >= 100px on dark (thin strokes rasterise away)
           500 mono for tracked kickers, 400 mono for tabular data; no other mono weight
           same-size emphasis skips a weight (400 body -> 600 run), never 400 -> 500 */
      const dark = s.classList.contains('dark');
      s.querySelectorAll('*').forEach(e => {
        if (!(e.textContent || '').trim()) return;
        const cs = getComputedStyle(e);
        const w = parseInt(cs.fontWeight, 10),
          fs = parseFloat(cs.fontSize);
        const fam0 = (cs.fontFamily.split(',')[0] || '').replace(/['"]/g, '').trim();
        const isMono = /Geist Mono|monospace/.test(cs.fontFamily);
        /* faces (14 Sep 2026): Geist on claims and statements, Inter on running text */
        if (['cl', 'claim', 'st', 'statement'].some(c => e.classList.contains(c)) && fam0 !== 'Geist') out.push(`family: claim/statement resolves to ${fam0 || 'nothing'} on ${lab}: must be Geist`);
        if (['body', 'lead'].some(c => e.classList.contains(c)) && fam0 !== 'Inter') out.push(`family: body/lead resolves to ${fam0 || 'nothing'} on ${lab}: must be Inter`);
        if (w && ![300, 400, 500, 600].includes(w)) out.push(`weight: ${w} on ${lab} (ladder is 300/400/500/600): ${(e.className || e.tagName).toString().slice(0, 20)}`);
        if (w === 300 && fs < (dark ? 100 : 60) && e.children.length === 0) out.push(`weight: 300 at ${Math.round(fs)}px on ${lab}: light needs >= ${dark ? 100 : 60}px on a ${dark ? 'dark' : 'light'} ground`);
        if (isMono && w && ![400, 500].includes(w) && e.children.length === 0) out.push(`weight: mono at ${w} on ${lab}: mono is 400 (data) or 500 (kicker) only`);
        if (w === 500 && e.tagName === 'B' && e.parentElement && parseInt(getComputedStyle(e.parentElement).fontWeight, 10) === 400 && Math.abs(parseFloat(getComputedStyle(e.parentElement).fontSize) - fs) < 1) out.push(`weight: inline emphasis at 500 inside 400 on ${lab}: same size must skip a weight (use 600)`);
        /* body floor (guidelines/TYPESETTING.md rule 4b, 22 Sep 2026): 24px on every board; mono never below 19px. */
        const isBody = ['body', 'lead', 'bd', 'ld'].some(c => e.classList.contains(c));
        if (isBody && e.children.length === 0 && fs && fs < 24) out.push(`size: body at ${Math.round(fs)}px on ${lab}: floor is 24px`);
        if (isMono && e.children.length === 0 && fs && fs < 19) out.push(`size: mono at ${Math.round(fs)}px on ${lab}: mono floor is 19px`);

        /* a literal family written into an SVG label is drift; use the variables. */
        const inline = e.getAttribute && e.getAttribute('style');
        if (e.namespaceURI === 'http://www.w3.org/2000/svg' && inline && /font-family:\s*["']?(Inter|Geist)/.test(inline)) out.push(`family: literal font-family in an SVG label on ${lab}: use var(--font-display) / var(--font-mono)`);
      });

      /* widows: a single word alone on the last line of a block. Measured from
         the BLOCK's own line boxes, not from its last text node: a block that
         ends in an inline tail (<b>, <span>, <a>) or wraps its copy in child
         elements has its final line inside a descendant, so measuring one text
         node reads a line too early or misses the block entirely. Every
         descendant word is Range-measured and matched against the bottom line,
         which treats a hard <br> and a soft wrap alike. */
      s.querySelectorAll('.cl,.claim,.st,.statement,.sub,.sb,.body,.bd,.lead,.a-hook,.hook,.a-body,li').forEach(el => {
        const rg = document.createRange();
        rg.selectNodeContents(el);
        const rects = [...rg.getClientRects()].filter(r => r.width && r.height);
        if (rects.length < 2) return;
        const bottom = Math.max(...rects.map(r => Math.round(r.top)));
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const onLast = [];
        let total = 0,
          node;
        while (node = walker.nextNode()) {
          const parts = node.textContent.split(/(\s+)/);
          let off = 0;
          for (const w of parts) {
            if (w.trim()) {
              const r = document.createRange();
              r.setStart(node, off);
              r.setEnd(node, off + w.length);
              const rect = r.getBoundingClientRect();
              if (rect.width) {
                total++;
                if (Math.abs(Math.round(rect.top) - bottom) < 4) onLast.push(w);
              }
            }
            off += w.length;
          }
        }
        if (total >= 4 && onLast.length === 1 && onLast[0].replace(/[^\p{L}\p{N}]/gu, '').length <= 14) out.push(`widow: "${onLast[0]}" alone on the last line of .${(el.className || '').split(' ')[0]} on ${lab}`);
      });

      /* the footer row is reserved. A full-bleed overlay (a scrim at inset:0)
         legitimately covers the whole board, footer included: excluded by
         comparing each candidate's rect to the board's own. */
      const foot = [...s.querySelectorAll('.ref,.pg')];
      if (foot.length) {
        const sb = s.getBoundingClientRect();
        const fullBleed = e => {
          const b = e.getBoundingClientRect();
          return Math.abs(b.width - sb.width) < 2 && Math.abs(b.height - sb.height) < 2;
        };
        const others = [...s.querySelectorAll('.a,.scale .maj,.scale .row,.scale .hd,.fam')].filter(e => !e.classList.contains('ref') && !e.classList.contains('pg') && !fullBleed(e));
        foot.forEach(fe => {
          const fb = fe.getBoundingClientRect();
          others.forEach(o => {
            if (o.contains(fe) || fe.contains(o)) return;
            const b = o.getBoundingClientRect();
            if (Math.min(fb.right, b.right) - Math.max(fb.left, b.left) > 1 && Math.min(fb.bottom, b.bottom) - Math.max(fb.top, b.top) > 1) out.push(`footer row: ${(o.className || o.tagName).toString().slice(0, 24)} overlaps ${fe.className} on ${lab}`);
          });
        });
      }
    });

    /* typography: copy only. textContent, never innerHTML: markup carries
       CSS colour values that read as decimal commas. */
    const copy = slides.map(s => s.textContent || '').join(' \u0000 ');

    /* the record: banned names (readme.md "Affiliations", SKILL.md §3) */
    const docText = document.body && document.body.textContent || copy;
    ['Geriatrická klinika', 'ČANT', 'Institut moderní výživy', 'FitNut', 'Domov Sue Ryder', 'Dietician'].forEach(n => {
      if (docText.includes(n)) out.push(`record: banned name "${n}" appears in the document`);
    });
    if (/\u2014/.test(copy)) out.push('typography: em dash found: house rule is an en dash with spaces, or no dash');
    if (/"[^"\u0000]{2,60}"/.test(copy)) out.push('typography: straight quotes found: use „Czech“ or “English” quotes');
    if (lang === 'cs') {
      const bare = copy.match(/(?:^|[\s(])([kaiosuvzKAIOSUVZ])[ ](?=\S)/g);
      if (bare && bare.length) out.push(`typography[cs]: ${bare.length} one-letter preposition(s) not bound with a non-breaking space`);
      if (/\d\.\d/.test(copy)) out.push('typography[cs]: decimal point found: Czech uses a comma');
      if (/\d%/.test(copy)) out.push('typography[cs]: percentage closed up: Czech needs a thin space (24 %)');
    } else {
      if (/\d,\d/.test(copy)) out.push('typography[en]: decimal comma found: English uses a point');
      if (/\d\u2009%/.test(copy)) out.push('typography[en]: thin space before %: English closes it up (24%)');
    }

    /* Publish the verdict in two places: the global for console use, and an
       attribute on <html> so it is readable from any scope (a nested preview
       frame's global is not always the one a probe sees). */
    window.__deckLint = out;
    try {
      document.documentElement.setAttribute('data-deck-lint', out.length ? String(out.length) : '0');
      document.documentElement.setAttribute('data-deck-lint-detail', out.join(' | ').slice(0, 900));
    } catch (e) {}
    if (out.length) console.warn(`[deck-lint · ${lang}]\n` + out.join('\n'));else console.info(`[deck-lint · ${lang}] clean: ${slides.length} boards`);
  }

  /* Two triggers, raced. The nested rAF gives accurate geometry once the DC
     runtime has laid the boards out; the timeout guarantees a verdict even in
     a hidden or throttled iframe, where rAF never fires. Never leave
     window.__deckLint undefined: undefined reads as "clean". */
  /* Three triggers, raced, and NONE of them depends on the `load` event alone:
     a helmet <script src> is injected dynamically, so `defer` does not apply
     and `load` may already have fired before this file evaluates: waiting on
     it leaves the gate silent forever. rAF gives accurate geometry when the
     page is visibly painting; the timeouts guarantee a verdict when it is not.
     Never leave the verdict missing: missing reads as "clean". */
  const start = () => {
    requestAnimationFrame(() => requestAnimationFrame(run));
    setTimeout(run, 400);
    setTimeout(run, 1200);
  };
  start();
  if (document.readyState !== 'complete') window.addEventListener('load', start, {
    once: true
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/deck-lint.js", error: String((e && e.message) || e) }); }

// slides/fit.js
try { (() => {
/* A card is the board alone: the usage note now lives in the card's notes
   field, not in the page. Scaling with `zoom` on the body keeps the board in
   one flow; width drives the scale. */
(function () {
  function fit() {
    var b = document.querySelector('.board,.board-reel');
    if (!b) return;
    var W = b.classList.contains('board-reel') ? 1080 : 1920;
    var s = Math.min(1, (window.innerWidth || W) / W);
    document.body.style.zoom = s;
    document.body.style.width = '';
    document.body.style.height = '';
  }
  window.addEventListener('resize', fit);
  window.addEventListener('load', fit);
  fit();
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/fit.js", error: String((e && e.message) || e) }); }

// ui_kits/web/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Pill: HPill,
  TopicCard: HTopicCard,
  TalkCard: HTalkCard,
  InstitutionCard: HInstitutionCard,
  ClaimBand: HClaimBand,
  FaqList: HFaqList,
  CtaClose: HCtaClose,
  SplitHero: HSplitHero,
  Grade: HGrade,
  Icon: HIcon
} = window.TerezaVGnerovDesignSystem_360dc4;
const HD = window.TV_DATA;
/* SplitHero is new in 0.8.0. If a consuming project is on an older bundle the
   page degrades to the shared PageHero rather than crashing. */
const HHero = HSplitHero || (({
  heading,
  lead,
  eyebrow
}) => /*#__PURE__*/React.createElement(SectionHeadFallback, {
  heading: heading,
  lead: lead,
  eyebrow: eyebrow
}));

/* A section opens the way a board does: a tracked mono kicker, a claim that is
   a full sentence, and a rule above the whole thing. Nothing is centred: the
   deck starts everything on one x, and so does the page. */
function SectionHeadFallback({
  eyebrow,
  heading,
  lead
}) {
  const {
    PageHero
  } = window.TerezaVGnerovDesignSystem_360dc4;
  return /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: eyebrow,
    heading: heading,
    lead: lead
  });
}
function SectionHead({
  eyebrow,
  heading,
  action,
  grade
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'clamp(40px,4.4vw,68px)',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "w-kicker"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: "w-claim w-claim-n",
    style: {
      marginTop: eyebrow ? 16 : 0
    }
  }, heading), grade ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(HGrade, {
    level: grade
  })) : null), action);
}
function HomeScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HHero, {
    eyebrow: "Klinick\xE1 v\xFD\u017Eiva",
    heading: "Osm t\xE9mat. Za ka\u017Ed\xFDm n\u011Bco skute\u010Dn\xE9ho.",
    lead: "Klinick\xE1 nutri\u010Dn\xED terapeutka a odborn\xE1 asistentka 1.\xA0LF UK. U\u010D\xEDm, p\u0159edn\xE1\u0161\xEDm a pracuji na Klinice geriatrie a intern\xED medic\xEDny 1.\xA0LF UK a VFN.",
    image: "../../assets/img/hero-kitchen.jpg",
    alt: "D\u0159ev\u011Bn\xE9 prk\xE9nko s cibul\xED a \u010Desnekem, t\xF3novan\xE9 do modr\xE9",
    sig: "../../assets/sig-blue.png",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HPill, {
      href: "#/temata",
      label: "Proj\xEDt t\xE9mata"
    }), /*#__PURE__*/React.createElement("a", {
      className: "w-link",
      href: HD.phoneHref
    }, /*#__PURE__*/React.createElement(HIcon, {
      name: "phone",
      size: 17
    }), HD.phone))
  }), /*#__PURE__*/React.createElement("section", {
    className: "w-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("p", {
    className: "w-statement",
    style: {
      fontSize: 'clamp(30px,3.6vw,62px)',
      maxWidth: '30ch'
    }
  }, "Ned\u011Bl\xE1m jedno t\xE9ma. D\u011Bl\xE1m osm, a za ka\u017Ed\xFDm je v\xFDuka, ordinace nebo v\xFDzkum."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'clamp(40px,4vw,64px)',
      display: 'flex',
      alignItems: 'flex-end',
      gap: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/sig-blue.png",
    alt: "Monogram Terezy V\xE1gnerov\xE9",
    style: {
      width: 120,
      height: 'auto'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20
    }
  }, "Tereza V\xE1gnerov\xE1"), /*#__PURE__*/React.createElement("p", {
    className: "w-meta",
    style: {
      marginTop: 6
    }
  }, "Klinick\xE1 nutri\u010Dn\xED terapeutka, 1.\xA0LF UK a VFN"))))), /*#__PURE__*/React.createElement("section", {
    className: "w-sec w-ruled"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell tv-about"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "w-kicker"
  }, "Z\xE1znam"), /*#__PURE__*/React.createElement("h2", {
    className: "w-claim",
    style: {
      marginTop: 16
    }
  }, "Pro\u0161la jsem v\u0161emi stupni zdravotn\xED p\xE9\u010De."), /*#__PURE__*/React.createElement("div", {
    className: "w-actions",
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(HPill, {
    href: "#/o-mne",
    label: "V\xEDce o mn\u011B",
    small: true
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "w-rows",
    style: {
      listStyle: 'none'
    }
  }, HD.facts.map(f => /*#__PURE__*/React.createElement("li", {
    className: "w-row",
    key: f,
    style: {
      gridTemplateColumns: 'auto minmax(0,1fr)',
      alignItems: 'baseline',
      paddingTop: 20,
      paddingBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-meta",
    style: {
      color: 'var(--accent)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "w-body"
  }, f)))), /*#__PURE__*/React.createElement("div", {
    className: "w-cols w-cols-3",
    style: {
      marginTop: 'clamp(32px,3.4vw,52px)'
    }
  }, HD.stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    className: "w-col-ruled w-col-ruled-acc"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-figure",
    style: {
      display: 'block',
      fontSize: 'clamp(40px,4vw,64px)'
    }
  }, s.figure), /*#__PURE__*/React.createElement("span", {
    className: "w-meta",
    style: {
      display: 'block',
      marginTop: 10
    }
  }, s.label))))))), /*#__PURE__*/React.createElement("section", {
    className: "w-sec w-ruled"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "T\xE9mata",
    heading: "Osm oblast\xED, kter\xE9 u\u010D\xEDm i praktikuji."
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-rows"
  }, HD.topics.map(t => /*#__PURE__*/React.createElement(HTopicCard, _extends({
    key: t.slug
  }, t, {
    href: `#/temata/${t.slug}`
  })))))), /*#__PURE__*/React.createElement(HClaimBand, {
    claim: "D\u016Fkazy m\xEDsto dojm\u016F.",
    image: "../../assets/img/band-lift.jpg",
    alt: "\u017Dena zvedaj\xEDc\xED \u010Dinku ve stojanu, t\xF3novan\xE1 do modr\xE9"
  }), /*#__PURE__*/React.createElement("section", {
    className: "w-sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Kde p\u016Fsob\xEDm",
    heading: "\u010Cty\u0159i instituce, kter\xE9 to mohou potvrdit."
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-rows"
  }, HD.institutions.map(i => /*#__PURE__*/React.createElement(HInstitutionCard, _extends({
    key: i.name
  }, i)))))), /*#__PURE__*/React.createElement("section", {
    className: "w-sec w-ruled"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "P\u0159edn\xE1\u0161\xEDm",
    heading: "Dv\u011B p\u0159edn\xE1\u0161ky, kter\xE9 si m\u016F\u017Eete objednat.",
    action: /*#__PURE__*/React.createElement(HPill, {
      href: "#/prednasky",
      label: "V\u0161echny p\u0159edn\xE1\u0161ky",
      small: true
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-cols w-cols-2"
  }, HD.talks.map(t => /*#__PURE__*/React.createElement(HTalkCard, {
    key: t.id,
    title: t.title,
    abstract: t.abstract,
    meta: t.meta,
    topicName: t.topic,
    image: t.image,
    alt: t.alt,
    href: "#/prednasky"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "w-sec w-ruled"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell tv-faq-layout"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "w-kicker"
  }, "Ot\xE1zky"), /*#__PURE__*/React.createElement("h2", {
    className: "w-claim w-claim-n",
    style: {
      marginTop: 16
    }
  }, "Co se pt\xE1te nej\u010Dast\u011Bji.")), /*#__PURE__*/React.createElement(HFaqList, {
    items: HD.faq
  }))), /*#__PURE__*/React.createElement(HCtaClose, {
    ctaHref: "#/kontakt",
    phone: HD.phone,
    phoneHref: HD.phoneHref,
    sig: "../../assets/sig-mint.png"
  }));
}
Object.assign(window, {
  HomeScreen,
  SectionHead
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  PageHero: SPageHero,
  TopicCard: STopicCard,
  TalkCard: STalkCard,
  CtaClose: SCtaClose,
  ContactBlock: SContactBlock,
  WebinarCard: SWebinarCard,
  EntryCard: SEntryCard,
  Pill: SPill,
  Grade: SGrade,
  FactPanel: SFactPanel
} = window.TerezaVGnerovDesignSystem_360dc4;
const DD = window.TV_DATA;

/* Every screen runs on the same four moves as a board: a kicker, a claim, a
   rule, and air. Sections are separated by a hairline, never by a change of
   ground; a dark band appears at most twice a page. */

function TopicsScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SPageHero, {
    eyebrow: "T\xE9mata",
    heading: "Osm oblast\xED, kter\xE9 u\u010D\xEDm i praktikuji.",
    lead: "Za ka\u017Ed\xFDm t\xE9matem je v\xFDuka na 1.\xA0LF UK, klinick\xE1 praxe nebo v\xFDzkum. Barva t\xE9matu nese informaci, ne dekoraci, proto je jm\xE9no t\xE9matu v\u017Edy vedle n\xED v textu."
  }), /*#__PURE__*/React.createElement("section", {
    className: "w-sec-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-rows"
  }, DD.topics.map(t => /*#__PURE__*/React.createElement(STopicCard, _extends({
    key: t.slug
  }, t, {
    href: `#/temata/${t.slug}`
  })))))), /*#__PURE__*/React.createElement(SCtaClose, {
    ctaHref: "#/kontakt",
    phone: DD.phone,
    phoneHref: DD.phoneHref,
    sig: "../../assets/sig-mint.png"
  }));
}
function TopicScreen({
  slug
}) {
  const t = DD.topics.find(x => x.slug === slug) || DD.topics[0];
  const related = DD.talks.filter(k => k.topic === t.name);
  return /*#__PURE__*/React.createElement("div", {
    className: `t-${t.theme}`
  }, /*#__PURE__*/React.createElement(SPageHero, {
    eyebrow: t.name,
    heading: t.name === 'Ženské zdraví' ? 'Cyklus není překážka tréninku.' : `${t.name}, a co za tím stojí.`,
    lead: t.summary,
    icon: t.slug
  }), /*#__PURE__*/React.createElement("section", {
    className: "w-sec w-ruled"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.8fr) minmax(0,1.2fr)',
      gap: 'clamp(28px,4vw,72px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "w-kicker"
  }, "Co v tomto t\xE9matu u\u010D\xEDm"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(SGrade, {
    level: "kohorta"
  })), /*#__PURE__*/React.createElement("p", {
    className: "w-meta",
    style: {
      marginTop: 16,
      maxWidth: '34ch',
      textTransform: 'none',
      letterSpacing: 0,
      lineHeight: 1.5
    }
  }, "Stupe\u0148 d\u016Fkazu uv\xE1d\xED autorka. Tam, kde zdroj n\xE1vrh studie neuv\xE1d\xED, chyb\xED, a to je z\xE1m\u011Br.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "w-lead",
    style: {
      color: 'var(--ink)'
    }
  }, t.summary), /*#__PURE__*/React.createElement("p", {
    className: "w-body",
    style: {
      marginTop: 24,
      color: 'var(--muted)'
    }
  }, "Co je v t\xE9matu sporn\xE9, se \u0159\xEDk\xE1 v jedn\xE9 v\u011Bt\u011B a s mez\xED platnosti, ne vynech\xE1n\xEDm.")))), related.length > 0 && /*#__PURE__*/React.createElement("section", {
    className: "w-sec w-ruled"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-kicker"
  }, "K t\xE9matu p\u0159edn\xE1\u0161\xEDm"), /*#__PURE__*/React.createElement("div", {
    className: "w-cols w-cols-2",
    style: {
      marginTop: 32
    }
  }, related.map(k => /*#__PURE__*/React.createElement(STalkCard, {
    key: k.id,
    title: k.title,
    abstract: k.abstract,
    meta: k.meta,
    topicName: k.topic,
    image: k.image,
    alt: k.alt,
    href: "#/prednasky"
  }))))), /*#__PURE__*/React.createElement(SCtaClose, {
    theme: t.theme,
    ctaHref: "#/kontakt",
    phone: DD.phone,
    phoneHref: DD.phoneHref,
    sig: "../../assets/sig-mint.png"
  }));
}
function TalksScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SPageHero, {
    eyebrow: "P\u0159edn\xE1\u0161ky",
    heading: "Dv\u011B p\u0159edn\xE1\u0161ky, kter\xE9 si m\u016F\u017Eete objednat.",
    lead: "Prezen\u010Dn\u011B i online, pro ve\u0159ejnost, nutri\u010Dn\xED terapeuty a l\xE9ka\u0159e. \u010Cesky i anglicky."
  }), /*#__PURE__*/React.createElement("section", {
    className: "w-sec-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-cols w-cols-2"
  }, DD.talks.map(k => /*#__PURE__*/React.createElement(STalkCard, {
    key: k.id,
    title: k.title,
    abstract: k.abstract,
    meta: k.meta,
    topicName: k.topic,
    image: k.image,
    alt: k.alt,
    href: "#/kontakt",
    cta: "Objednat p\u0159edn\xE1\u0161ku"
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "w-sec w-ruled"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-kicker"
  }, "Vystoupen\xED"), /*#__PURE__*/React.createElement("h2", {
    className: "w-claim w-claim-n",
    style: {
      marginTop: 16,
      marginBottom: 40
    }
  }, "Kde jsem mluvila mimo posluch\xE1rnu."), /*#__PURE__*/React.createElement("div", {
    className: "w-rows"
  }, /*#__PURE__*/React.createElement(SEntryCard, {
    title: "Deep Talks 151",
    meta: "Podcast \xB7 2025",
    href: "#",
    external: true
  }), /*#__PURE__*/React.createElement(SEntryCard, {
    title: "Publika\u010Dn\xED seznam p\u0159ipravuji.",
    meta: "Zat\xEDm nedod\xE1no"
  })))), /*#__PURE__*/React.createElement(SCtaClose, {
    ctaHref: "#/kontakt",
    phone: DD.phone,
    phoneHref: DD.phoneHref,
    sig: "../../assets/sig-mint.png"
  }));
}

/* The webinar collection is empty at launch by design. One true sentence and
   the two places she will announce it: never a "coming soon" card. */
function WebinarsScreen() {
  const [sold, setSold] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SPageHero, {
    eyebrow: "Webin\xE1\u0159e",
    heading: "Term\xEDny dal\u0161\xEDch webin\xE1\u0159\u016F p\u0159ipravuji.",
    lead: "Kde se o nich dozv\xEDte prvn\xED: na Instagramu, nebo mi rovnou napi\u0161te."
  }), /*#__PURE__*/React.createElement("section", {
    className: "w-sec-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, !sold ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '60ch'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "w-body",
    style: {
      color: 'var(--muted)'
    }
  }, "Zat\xEDm nen\xED vypsan\xFD \u017E\xE1dn\xFD term\xEDn. Sledujte ", /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: DD.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, DD.instagram), "."), /*#__PURE__*/React.createElement("div", {
    className: "w-actions",
    style: {
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(SPill, {
    href: "#/kontakt",
    label: "Napi\u0161te mi"
  }), /*#__PURE__*/React.createElement("a", {
    className: "w-link",
    href: "#/webinare",
    onClick: e => {
      e.preventDefault();
      setSold(true);
    }
  }, "Uk\xE1zka: vypsan\xFD term\xEDn"))) : /*#__PURE__*/React.createElement("div", {
    className: "tv-webinar-layout",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,.8fr)',
      gap: 'clamp(28px,4vw,64px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "w-kicker"
  }, "Vypsan\xFD term\xEDn"), /*#__PURE__*/React.createElement("h2", {
    className: "w-claim w-claim-n",
    style: {
      marginTop: 16
    }
  }, "V\xFD\u017Eiva v nemoci: co sledovat doma."), /*#__PURE__*/React.createElement("p", {
    className: "w-body",
    style: {
      color: 'var(--muted)',
      marginTop: 22
    }
  }, "Devades\xE1t minut o tom, jak poznat riziko podv\xFD\u017Eivy u bl\xEDzk\xE9ho v\xA0rekonvalescenci, co m\xE1 smysl v\xE1\u017Eit a kdy volat nutri\u010Dn\xEDho terapeuta."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(SGrade, {
    level: "konsenzus"
  })), /*#__PURE__*/React.createElement("div", {
    className: "w-rows",
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(SWebinarCard, {
    title: "V\xFD\u017Eiva v nemoci",
    when: "14. \u0159\xEDjna 2026, 18:00",
    duration: "90 min",
    price: "890 K\u010D"
  }))), /*#__PURE__*/React.createElement(SFactPanel, {
    rows: [{
      label: 'Termín',
      value: '14. října 2026, 18:00'
    }, {
      label: 'Délka',
      value: '90 minut'
    }, {
      label: 'Kapacita',
      value: '60 míst'
    }, {
      label: 'Cena',
      value: '890 Kč',
      big: true
    }],
    price: "890 K\u010D",
    leaving: "Odchod na Stripe"
  })))), /*#__PURE__*/React.createElement(SCtaClose, {
    ctaHref: "#/kontakt",
    phone: DD.phone,
    phoneHref: DD.phoneHref,
    sig: "../../assets/sig-mint.png"
  }));
}
function ContactScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SPageHero, {
    eyebrow: "Kontakt",
    heading: "Napi\u0161te mi.",
    lead: "T\u0159i cesty do jedn\xE9 schr\xE1nky. Formul\xE1\u0159 tu nen\xED: nem\xE1m backend, kter\xFD by ho p\u0159ijal, a formul\xE1\u0159, kter\xFD ti\u0161e sel\u017Ee, je hor\u0161\xED ne\u017E otev\u0159en\xFD e-mail."
  }), /*#__PURE__*/React.createElement("section", {
    className: "w-sec-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement(SContactBlock, {
    heading: "T\u0159i d\u016Fvody, pro\u010D se ozvat.",
    routes: DD.routes,
    phone: DD.phone,
    phoneHref: DD.phoneHref,
    clinic: DD.clinic,
    email: DD.email,
    emailHref: DD.emailHref,
    photo: "../../assets/img/contact-squash.jpg",
    photoAlt: "Zelenina na tmav\xE9m stole, t\xF3novan\xE1 do modr\xE9"
  }))));
}
function AboutScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SPageHero, {
    eyebrow: "O mn\u011B",
    heading: "Pro\u0161la jsem v\u0161emi stupni zdravotn\xED p\xE9\u010De.",
    lead: "Od akutn\xEDho l\u016F\u017Eka po dom\xE1c\xED p\xE9\u010Di. \u010Cty\u0159i tituly, dv\u011B pracovi\u0161t\u011B, jedno t\xE9ma rozd\u011Blen\xE9 do osmi."
  }), /*#__PURE__*/React.createElement("section", {
    className: "w-sec-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,.7fr) minmax(0,1.3fr)',
      gap: 'clamp(28px,4vw,72px)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-photo",
    style: {
      aspectRatio: '3 / 4'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/about-grip.jpg",
    alt: "Ruka na ose \u010Dinky, t\xF3novan\xE1 do modr\xE9"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "w-rows",
    style: {
      listStyle: 'none'
    }
  }, DD.facts.map(f => /*#__PURE__*/React.createElement("li", {
    className: "w-row",
    key: f,
    style: {
      gridTemplateColumns: 'minmax(0,1fr)',
      paddingTop: 20,
      paddingBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "w-body",
    style: {
      maxWidth: 'none'
    }
  }, f)))), /*#__PURE__*/React.createElement("p", {
    className: "w-meta",
    style: {
      marginTop: 28,
      textTransform: 'none',
      letterSpacing: 0,
      lineHeight: 1.6,
      maxWidth: '56ch'
    }
  }, "Bez odkazu, proto\u017Ee zdrojov\xE1 adresa zat\xEDm chyb\xED. Absence se zna\u010D\xED, nedopl\u0148uje se.")))), /*#__PURE__*/React.createElement(SCtaClose, {
    ctaHref: "#/kontakt",
    phone: DD.phone,
    phoneHref: DD.phoneHref,
    sig: "../../assets/sig-mint.png"
  }));
}
Object.assign(window, {
  TopicsScreen,
  TopicScreen,
  TalksScreen,
  WebinarsScreen,
  ContactScreen,
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/data.js
try { (() => {
/* Real content. Nothing here is invented.

   AFFILIATIONS ARE CANONICAL AND CLOSED. Tereza works at exactly these four
   organisations, under their official registered names, verified September
   2026 against lf1.cuni.cz, vfn.cz, efad.org and healthylongevityclinic.cz.
   Do not add, shorten or translate a fifth. Earlier drafts listed ČANT,
   Institut moderní výživy, FitNut, Domov Sue Ryder and the VFN stroke unit;
   none of those are current and none may be reintroduced. */
window.TV_DATA = {
  wordmark: 'Tereza Vágnerová',
  role: 'Klinická nutriční terapeutka',
  phone: '225 003 211',
  phoneHref: 'tel:225003211',
  clinic: 'Klinika geriatrie a interní medicíny VFN',
  email: 'klbikovt@gmail.com',
  emailHref: 'mailto:klbikovt@gmail.com',
  instagram: '@tvagnerova_clinicaldietitian',
  instagramUrl: 'https://www.instagram.com/tvagnerova_clinicaldietitian/',
  nav: [{
    href: '#/temata',
    label: 'Témata'
  }, {
    href: '#/prednasky',
    label: 'Přednášky'
  }, {
    href: '#/webinare',
    label: 'Webináře'
  }, {
    href: '#/o-mne',
    label: 'O mně'
  }],
  topics: [{
    slug: 'prehled',
    name: 'Přehled',
    theme: 'blue',
    summary: 'Jak vyhodnotit sílu důkazu za konkrétním tvrzením, od mechanismu přes kohortové studie až po metaanalýzu. Rámec, který spojuje ostatní témata.'
  }, {
    slug: 'medicina',
    name: 'Medicína',
    theme: 'blue',
    summary: 'Výživa jako součást léčby: riziko podvýživy, úbytek svalové hmoty a energetické nároky v akutní nemoci i v rekonvalescenci.'
  }, {
    slug: 'zenske-zdravi',
    name: 'Ženské zdraví',
    theme: 'violet',
    summary: 'Cyklus, hormonální změny a energetická dostupnost. Co se mění v jednotlivých fázích a proč vynechaná menstruace neznamená lepší formu.'
  }, {
    slug: 'dlouhovekost',
    name: 'Dlouhověkost',
    theme: 'petrol',
    summary: 'Úbytek svalové hmoty a síly s přibývajícím věkem, známý jako sarkopenie, a jeho dopad na soběstačnost.'
  }, {
    slug: 'spanek',
    name: 'Spánek',
    theme: 'petrol',
    summary: 'Spánek jako biologický proces, který ovlivňuje chuť k jídlu, regeneraci a metabolismus. Proč kvalita nemusí být totéž co délka.'
  }, {
    slug: 'fitness',
    name: 'Fitness',
    theme: 'petrol',
    summary: 'Silový trénink a pohybová aktivita jako nástroj, který mění složení těla a metabolické zdraví.'
  }, {
    slug: 'vyziva',
    name: 'Výživa',
    theme: 'petrol',
    summary: 'Energetická bilance, poměr makroživin a kvalita stravy v běžném životě. Co z populárních doporučení má oporu v datech.'
  }, {
    slug: 'lifestyle',
    name: 'Lifestyle',
    theme: 'petrol',
    summary: 'Každodenní návyky, prostředí a rutina, které spoluurčují zdraví vedle stravy a pohybu.'
  }],
  talks: [{
    id: 'obezita-a-vyziva',
    title: 'Obezita a výživa',
    topic: 'Výživa',
    abstract: 'Rizika obezity, cíle redukční diety a proč jo-jo efekt není selhání vůle. Přednáška končí praktickými doporučeními, která jdou použít hned.',
    meta: '25 min · prezenčně i online · česky',
    image: '../../assets/img/talk-bar.jpg',
    alt: 'Zápěstí a předloktí opřené o osu činky, tónované do modré'
  }, {
    id: 'vyziva-v-nemoci',
    title: 'Výživa v nemoci',
    topic: 'Medicína',
    abstract: 'Riziko podvýživy v akutní nemoci, energetické nároky rekonvalescence a co se v nemocničním prostředí sleduje.',
    meta: '45 min · prezenčně i online · česky',
    image: '../../assets/img/talk-squash.jpg',
    alt: 'Dýně, cuketa a cibule na dřevěném stole, tónované do modré'
  }],
  institutions: [{
    name: 'Healthy Longevity Clinic',
    role: 'Klinická nutriční terapeutka',
    url: 'https://www.healthylongevityclinic.cz'
  }, {
    name: 'Klinika geriatrie a interní medicíny 1. LF UK a VFN',
    role: 'Odborná asistentka a nutriční terapeutka',
    url: 'https://geri.lf1.cuni.cz'
  }, {
    name: 'III. interní klinika – klinika endokrinologie a metabolismu 1. LF UK a VFN',
    role: 'Nutriční terapeutka',
    url: 'https://int3.lf1.cuni.cz'
  }, {
    name: 'EFAD – European Federation of the Associations of Dietitians',
    role: 'Zástupkyně za Českou republiku',
    url: 'https://www.efad.org'
  }],
  /* English mirrors, for the EN deck and any international bio. */
  institutionsEn: [{
    name: 'Healthy Longevity Clinic',
    role: 'Clinical nutrition therapist',
    url: 'https://www.healthylongevityclinic.cz'
  }, {
    name: 'Department of Geriatrics and Internal Medicine, First Faculty of Medicine, Charles University and General University Hospital in Prague',
    role: 'Assistant professor and clinical dietitian',
    url: 'https://geri.lf1.cuni.cz'
  }, {
    name: '3rd Department of Internal Medicine – Endocrinology and Metabolism, First Faculty of Medicine, Charles University and General University Hospital in Prague',
    role: 'Clinical dietitian',
    url: 'https://int3.lf1.cuni.cz'
  }, {
    name: 'EFAD – European Federation of the Associations of Dietitians',
    role: 'Czech Republic representative',
    url: 'https://www.efad.org'
  }],
  facts: ['Čtyři tituly: bakalářský, inženýrský, magisterský a doktorský.', 'Vyučuji na 1. LF UK, v lékařských i nelékařských programech.', 'Učím česky i anglicky.', 'Pracuji na Klinice geriatrie a interní medicíny a na III. interní klinice 1. LF UK a VFN.', 'Věnuji se sarkopenii a sarkopenické obezitě.', 'Zastupuji Českou republiku v EFAD, evropské federaci asociací nutričních terapeutů.'],
  stats: [{
    figure: '4',
    label: 'tituly'
  }, {
    figure: '8',
    label: 'témat'
  }, {
    figure: '2',
    label: 'jazyky výuky'
  }],
  faq: [{
    q: 'Přednášíte i anglicky?',
    a: 'Ano. Na 1. LF UK učím výživu v geriatrii a gerontologii česky i anglicky, v lékařských i nelékařských studijních programech.'
  }, {
    q: 'Jak se přihlásím na webinář?',
    a: 'Platba jde přes Stripe, mimo tento web. Po zaplacení vám pošlu potvrzení a odkaz na připojení e-mailem.'
  }, {
    q: 'Kde vás najdu?',
    a: 'Na Klinice geriatrie a interní medicíny 1. LF UK a VFN, na III. interní klinice 1. LF UK a VFN a v Healthy Longevity Clinic.'
  }, {
    q: 'Pro koho jsou přednášky?',
    a: 'Pro veřejnost, nutriční terapeuty a lékaře. Přednáším prezenčně i online.'
  }],
  routes: [{
    subject: 'Konzultace',
    hint: 'Napište, koho se to týká, jaký je aktuální zdravotní stav a jaký je cíl.',
    href: 'mailto:klbikovt@gmail.com?subject=Konzultace'
  }, {
    subject: 'Přednáška',
    hint: 'Napište, pro koho to má být, jak dlouho má trvat a v jakém formátu.',
    href: 'mailto:klbikovt@gmail.com?subject=P%C5%99edn%C3%A1%C5%A1ka'
  }, {
    subject: 'Média',
    hint: 'Napište, o jaké téma jde a do kdy potřebujete odpověď.',
    href: 'mailto:klbikovt@gmail.com?subject=M%C3%A9dia'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/data.js", error: String((e && e.message) || e) }); }

__ds_ns.EntryCard = __ds_scope.EntryCard;

__ds_ns.FactPanel = __ds_scope.FactPanel;

__ds_ns.InstitutionCard = __ds_scope.InstitutionCard;

__ds_ns.PublicationRow = __ds_scope.PublicationRow;

__ds_ns.TalkCard = __ds_scope.TalkCard;

__ds_ns.TopicCard = __ds_scope.TopicCard;

__ds_ns.WebinarCard = __ds_scope.WebinarCard;

__ds_ns.Grade = __ds_scope.Grade;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.ClinicalIcon = __ds_scope.ClinicalIcon;

__ds_ns.Foot = __ds_scope.Foot;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.ScaleStrip = __ds_scope.ScaleStrip;

__ds_ns.ClaimBand = __ds_scope.ClaimBand;

__ds_ns.ContactBlock = __ds_scope.ContactBlock;

__ds_ns.CtaClose = __ds_scope.CtaClose;

__ds_ns.FaqList = __ds_scope.FaqList;

__ds_ns.PageHero = __ds_scope.PageHero;

__ds_ns.SplitHero = __ds_scope.SplitHero;

})();
