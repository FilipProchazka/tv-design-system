/* @ds-bundle: {"format":4,"namespace":"TerezaVGnerovDesignSystem_360dc4","components":[{"name":"EntryCard","sourcePath":"components/cards/EntryCard.jsx"},{"name":"FactPanel","sourcePath":"components/cards/FactPanel.jsx"},{"name":"InstitutionCard","sourcePath":"components/cards/InstitutionCard.jsx"},{"name":"PublicationRow","sourcePath":"components/cards/PublicationRow.jsx"},{"name":"TalkCard","sourcePath":"components/cards/TalkCard.jsx"},{"name":"TopicCard","sourcePath":"components/cards/TopicCard.jsx"},{"name":"WebinarCard","sourcePath":"components/cards/WebinarCard.jsx"},{"name":"Grade","sourcePath":"components/core/Grade.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Pill","sourcePath":"components/core/Pill.jsx"},{"name":"Foot","sourcePath":"components/navigation/Foot.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"ClaimBand","sourcePath":"components/sections/ClaimBand.jsx"},{"name":"ContactBlock","sourcePath":"components/sections/ContactBlock.jsx"},{"name":"CtaClose","sourcePath":"components/sections/CtaClose.jsx"},{"name":"FaqList","sourcePath":"components/sections/FaqList.jsx"},{"name":"PageHero","sourcePath":"components/sections/PageHero.jsx"}],"sourceHashes":{"components/cards/EntryCard.jsx":"24f6d34421a2","components/cards/FactPanel.jsx":"6fc6e0bb28b4","components/cards/InstitutionCard.jsx":"f1930b818a58","components/cards/PublicationRow.jsx":"c74f910017fd","components/cards/TalkCard.jsx":"a1cd9e45e313","components/cards/TopicCard.jsx":"ddd4c5671429","components/cards/WebinarCard.jsx":"100014570d4a","components/core/Grade.jsx":"16c91f1a1f07","components/core/Icon.jsx":"ef0851b850a1","components/core/Pill.jsx":"a5164812db22","components/navigation/Foot.jsx":"69a8972953de","components/navigation/Nav.jsx":"a5d5fe72ebb5","components/sections/ClaimBand.jsx":"de58ea3d8b00","components/sections/ContactBlock.jsx":"69de893a7ada","components/sections/CtaClose.jsx":"f463d51a36bd","components/sections/FaqList.jsx":"159061243f2a","components/sections/PageHero.jsx":"208760acd08f","slides/fit.js":"7ad2b64967cd","ui_kits/web/HomeScreen.jsx":"3b019a9422b4","ui_kits/web/Screens.jsx":"328dace9b792","ui_kits/web/data.js":"c3055cdb5685"},"inlinedExternals":[],"unexposedExports":[]} */

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
 * has to be possible — most claims carry no grade at all.
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
      color: 'var(--muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "kicker"
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
      background: i < n ? 'var(--accent)' : 'var(--rule)'
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
 * A listing row that is not a talk and not an institution: an appearance, a
 * webinar in a topic's list, a publication stub. An inert entry and a linked
 * one must not look the same, so the mark and the hover appear only when
 * there is somewhere to go.
 */
function EntryCard({
  title,
  meta,
  href,
  external = false,
  cta
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    className: `card tv-entry ${href ? 'tv-entry-link' : 'card-flat'}`,
    href: href,
    target: href && external ? '_blank' : undefined,
    rel: href && external ? 'noopener noreferrer' : undefined,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, meta), /*#__PURE__*/React.createElement("h3", {
    className: "card-title",
    style: {
      marginTop: 12,
      flex: 1,
      color: 'var(--ink)'
    }
  }, title), href ? /*#__PURE__*/React.createElement("span", {
    className: "tv-more",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 22,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 18,
      color: 'var(--accent)'
    }
  }, cta ?? (external ? 'Otevřít' : 'Detail'), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: external ? 'external' : 'arrow',
    size: 18
  })) : null);
}
Object.assign(__ds_scope, { EntryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/EntryCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/FactPanel.jsx
try { (() => {
/**
 * The facts an attendee needs before paying, and the one button that takes
 * the money. The button carries the price so the amount is known before the
 * tab changes, and says out loud that the payment leaves the site.
 */
function FactPanel({
  rows = [],
  price,
  stripeUrl = '#',
  leaving = 'Platbu zpracovává Stripe. Odkaz vás odvede z tohoto webu.',
  note = 'Po zaplacení vám přijde potvrzení a odkaz na připojení.',
  cta = 'Zaplatit a přihlásit se'
}) {
  return /*#__PURE__*/React.createElement("aside", {
    className: "card card-flat tv-fact-panel",
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("dl", {
    style: {
      display: 'grid',
      gap: 0
    }
  }, rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.label,
    style: {
      padding: i === 0 ? '0 0 18px' : '18px 0',
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("dt", {
    className: "eyebrow"
  }, r.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      marginTop: 8,
      color: 'var(--ink)',
      fontSize: r.big ? 'clamp(30px,3vw,40px)' : 18,
      lineHeight: r.big ? 1.05 : 1.5,
      letterSpacing: r.big ? '-.04em' : undefined,
      fontFamily: 'var(--font-mono)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, r.value)))), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      color: 'var(--muted)',
      marginTop: 24
    }
  }, leaving), /*#__PURE__*/React.createElement("a", {
    className: "pill pill-block",
    href: stripeUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      marginTop: 20
    }
  }, price ? `${cta} · ${price}` : cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external",
    size: 20
  })), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      color: 'var(--muted)',
      marginTop: 18
    }
  }, note));
}
Object.assign(__ds_scope, { FactPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FactPanel.jsx", error: String((e && e.message) || e) }); }

// components/cards/InstitutionCard.jsx
try { (() => {
/**
 * One of the six organisations that can corroborate her. It always links out:
 * the site consolidates what they each publish, and retelling their pages
 * without linking to them would make it a seventh fragment.
 */
function InstitutionCard({
  name,
  role,
  url,
  cta = 'Otevřít'
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "card tv-inst",
    href: url,
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tv-inst-mark",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 46,
      height: 46,
      borderRadius: 12,
      background: 'var(--band)',
      color: 'var(--accent)',
      transition: 'background var(--dur-card) var(--ease), color var(--dur-card) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "building",
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    className: "card-title",
    style: {
      marginTop: 20,
      color: 'var(--ink)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)',
      marginTop: 8,
      flex: 1
    }
  }, role), /*#__PURE__*/React.createElement("span", {
    className: "tv-more-out",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 22,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 18,
      color: 'var(--accent)'
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external",
    size: 18
  })));
}
Object.assign(__ds_scope, { InstitutionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InstitutionCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PublicationRow.jsx
try { (() => {
/**
 * A publication row. A linked row and an inert row must not look identical:
 * only the linked one carries the outward mark and the hover.
 */
function PublicationRow({
  year,
  title,
  authors,
  journal,
  href,
  grade
}) {
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    className: `tv-pub ${href ? 'tv-pub-link' : ''}`,
    href: href,
    target: href ? '_blank' : undefined,
    rel: href ? 'noopener noreferrer' : undefined,
    style: {
      display: 'grid',
      gridTemplateColumns: '88px 1fr auto',
      gap: 24,
      alignItems: 'start',
      padding: '26px 0',
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "meta",
    style: {
      paddingTop: 6
    }
  }, year), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      maxWidth: '68ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "card-title tv-pub-title",
    style: {
      color: 'var(--ink)',
      transition: 'color var(--dur) var(--ease)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      fontSize: 18,
      lineHeight: 1.55
    }
  }, authors ? `${authors}, ` : '', journal), grade ? /*#__PURE__*/React.createElement(__ds_scope.Grade, {
    level: grade
  }) : null), href ? /*#__PURE__*/React.createElement("span", {
    className: "tv-pub-go",
    style: {
      color: 'var(--accent)',
      paddingTop: 6,
      transition: 'transform var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external",
    size: 20
  })) : null);
}
Object.assign(__ds_scope, { PublicationRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PublicationRow.jsx", error: String((e && e.message) || e) }); }

// components/cards/TalkCard.jsx
try { (() => {
/**
 * A talk, with the three fields an organiser decides on: what it covers, how
 * long it runs, and in what format and language. Dropping the abstract to fit
 * a grid drops the only thing that answers "is this the talk I want".
 */
function TalkCard({
  title,
  abstract,
  meta,
  topicName,
  image,
  alt = '',
  href = '#',
  cta = 'Detail přednášky'
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "card card-pad-0 tv-talk",
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      aspectRatio: '760 / 470',
      overflow: 'hidden',
      background: 'var(--band)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform var(--dur-photo) var(--ease)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      padding: '26px 28px 28px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '8px 14px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, meta), topicName ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      letterSpacing: '.05em',
      color: 'var(--accent)'
    }
  }, topicName) : null), /*#__PURE__*/React.createElement("h3", {
    className: "card-title",
    style: {
      marginTop: 14,
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)',
      marginTop: 12,
      flex: 1
    }
  }, abstract), /*#__PURE__*/React.createElement("span", {
    className: "tv-more",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 22,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 18,
      color: 'var(--accent)'
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow",
    size: 19
  }))));
}
Object.assign(__ds_scope, { TalkCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TalkCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TopicCard.jsx
try { (() => {
/**
 * One of the eight subjects. The card sits on its theme's own tint rather
 * than the shared white — eight white cards with a coloured hairline were a
 * row of boxes; eight tinted grounds are an index of subjects. The theme
 * colour appears three times (ground, 3px top rule, 52px mark) and the
 * subject's name in text every time.
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
    className: `card tv-topic t-${theme}`,
    href: href,
    style: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 32,
      background: 'var(--tint)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: '0 0 auto 0',
      height: 3,
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "tv-topic-mark",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-mark)',
      background: '#FFFFFF',
      color: 'var(--accent)',
      transition: 'background var(--dur-card) var(--ease), color var(--dur-card) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: slug,
    size: 26
  })), /*#__PURE__*/React.createElement("h3", {
    className: "card-title",
    style: {
      marginTop: 20,
      color: 'var(--ink)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)',
      marginTop: 12,
      flex: 1
    }
  }, summary), /*#__PURE__*/React.createElement("span", {
    className: "tv-more",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      marginTop: 24,
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 18,
      color: 'var(--accent)'
    }
  }, more, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow",
    size: 19
  })));
}
Object.assign(__ds_scope, { TopicCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TopicCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Pill.jsx
try { (() => {
/**
 * The one button shape on the site: a true pill, 56px minimum height.
 * `external` opens off-site and says so with the outward mark instead of the
 * arrow, so a link that leaves does not look like a link that navigates.
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
  const cls = ['pill', ghost && 'pill-ghost', small && 'pill-sm', block && 'pill-block', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("a", {
    className: cls,
    href: href,
    onClick: onClick,
    target: external ? '_blank' : undefined,
    rel: external ? 'noopener noreferrer' : undefined
  }, label ?? children, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: external ? 'external' : 'arrow',
    size: small ? 19 : 20
  }));
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Pill.jsx", error: String((e && e.message) || e) }); }

// components/cards/WebinarCard.jsx
try { (() => {
/**
 * A webinar for sale. The price is JetBrains Mono at figure scale because it
 * is a fact, not a headline, and the button names what happens rather than
 * saying "Přihlásit se", which in Czech also means "log in".
 */
function WebinarCard({
  title,
  when,
  duration,
  price,
  href = '#',
  cta = 'Zaplatit a přihlásit se'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "card tv-web",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "meta",
    style: {
      color: 'var(--accent)'
    }
  }, when), /*#__PURE__*/React.createElement("h3", {
    className: "card-title",
    style: {
      marginTop: 14,
      color: 'var(--ink)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    className: "meta",
    style: {
      marginTop: 10
    }
  }, duration), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 400,
      fontSize: 'clamp(34px,3.4vw,46px)',
      lineHeight: 1,
      letterSpacing: '-.04em',
      color: 'var(--ink)',
      marginTop: 22,
      flex: 1,
      fontVariantNumeric: 'tabular-nums'
    }
  }, price), /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    href: href,
    label: cta,
    block: true,
    className: "tv-web-cta"
  }));
}
Object.assign(__ds_scope, { WebinarCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/WebinarCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Foot.jsx
try { (() => {
/**
 * The connect strip and the footer. The strip is site chrome: it bookends
 * every page in blue whatever theme the page itself takes. The footer is four
 * columns — who she is, quick links, the eight topics, contact — and no
 * postal address, because none is sourced.
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
  copyright
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "t-blue dark tv-connect"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      paddingTop: 26,
      paddingBottom: 26,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px 40px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 22,
      letterSpacing: '-.014em',
      color: 'var(--ink)'
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
    className: "band",
    style: {
      padding: 'clamp(52px,6vw,80px) 0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
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
    style: {
      color: 'var(--muted)',
      marginTop: 12,
      maxWidth: '34ch',
      fontSize: 18,
      lineHeight: 1.6
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
    style: {
      color: 'var(--muted)',
      fontSize: 18,
      lineHeight: 1.5
    }
  }, clinic)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 'clamp(40px,5vw,64px)',
      paddingTop: 26,
      borderTop: '1px solid var(--rule)',
      color: 'var(--muted)',
      fontSize: 18
    }
  }, copyright))));
}
Object.assign(__ds_scope, { Foot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Foot.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
/**
 * Two tiers: a dark blue JetBrains Mono utility bar above a white nav bar
 * (wordmark, links, one pill CTA). The current page is marked by weight and
 * an accent underline, never colour alone. Below 1024px it collapses to a
 * full-width stacked panel of plain links.
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
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "t-blue dark tv-util",
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 15,
      letterSpacing: '.01em'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      minHeight: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px 32px',
      flexWrap: 'wrap',
      paddingTop: 6,
      paddingBottom: 6
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "tv-util-item",
    href: phoneHref
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 17
  }), /*#__PURE__*/React.createElement("span", null, phone), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)'
    }
  }, clinic)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px 28px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "tv-util-item",
    href: emailHref
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 17
  }), /*#__PURE__*/React.createElement("span", null, email)), /*#__PURE__*/React.createElement("a", {
    className: "tv-util-item",
    href: instagramUrl,
    target: "_blank",
    rel: "me noopener noreferrer"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "instagram",
    size: 17
  }), /*#__PURE__*/React.createElement("span", null, instagram))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface)',
      borderBottom: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      minHeight: 84,
      display: 'flex',
      alignItems: 'center',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
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
  }, l.label)), langLabel ? /*#__PURE__*/React.createElement("a", {
    className: "tv-lang",
    href: langHref
  }, langLabel) : null), /*#__PURE__*/React.createElement("a", {
    className: "pill pill-sm tv-cta",
    href: ctaHref
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow",
    size: 19
  })), /*#__PURE__*/React.createElement("button", {
    className: "tv-menu-btn",
    type: "button",
    "aria-expanded": open,
    "aria-controls": "tv-menu-panel",
    "aria-label": "Nab\xEDdka",
    onClick: () => setOpen(!open)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'close' : 'menu',
    size: 24
  })))), /*#__PURE__*/React.createElement("div", {
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
  }))), /*#__PURE__*/React.createElement("a", {
    className: "pill pill-block",
    href: ctaHref,
    style: {
      marginTop: 20
    }
  }, cta, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow",
    size: 19
  })))));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// components/sections/ClaimBand.jsx
try { (() => {
/**
 * A photograph carrying one sentence. The scrim is a real background-colour
 * rather than a gradient alone, so what a contrast checker measures is what a
 * reader actually sees; the colour is the blue theme's dark surface, so the
 * band is the same ground as the utility bar and the close.
 */
function ClaimBand({
  claim,
  image,
  alt = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      aspectRatio: '1600 / 620',
      minHeight: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: alt,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(30px,4.4vw,62px)',
      lineHeight: 1.1,
      letterSpacing: '-.024em',
      color: '#FFFFFF',
      maxWidth: '18ch',
      textShadow: '0 2px 24px rgba(15,53,87,.45)'
    }
  }, claim)));
}
Object.assign(__ds_scope, { ClaimBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/ClaimBand.jsx", error: String((e && e.message) || e) }); }

// components/sections/ContactBlock.jsx
try { (() => {
/**
 * Three routes to one inbox. No form anywhere: there is no backend to receive
 * one, and a form that silently fails is worse than a mail client that opens.
 * Each route is a full-width bordered block with a 56px tappable target and a
 * subject line that tells her which of the three it is.
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
    style: {
      display: 'grid',
      gap: 'clamp(32px,4vw,64px)',
      alignItems: 'start',
      gridTemplateColumns: photo ? '1.15fr .85fr' : '1fr'
    },
    className: "tv-contact"
  }, /*#__PURE__*/React.createElement("div", null, eyebrow ? /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      marginTop: eyebrow ? 18 : 0,
      color: 'var(--ink)'
    }
  }, heading), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      marginTop: 36,
      display: 'grid',
      gap: 14
    }
  }, routes.map(r => /*#__PURE__*/React.createElement("li", {
    key: r.subject
  }, /*#__PURE__*/React.createElement("a", {
    className: "tv-route",
    href: r.href,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      minHeight: 56,
      padding: '20px 24px',
      background: '#FFFFFF',
      border: '1px solid var(--rule)',
      borderRadius: 'var(--radius)',
      transition: 'border-color var(--dur) var(--ease), transform var(--dur) var(--ease), box-shadow var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: 21,
      color: 'var(--ink)'
    }
  }, r.subject), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)',
      fontSize: 18,
      lineHeight: 1.55,
      maxWidth: '52ch'
    }
  }, r.hint)), /*#__PURE__*/React.createElement("span", {
    className: "tv-route-go",
    style: {
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--band)',
      color: 'var(--accent)',
      transition: 'background var(--dur) var(--ease), color var(--dur) var(--ease)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 20
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 2
    }
  }, phone ? /*#__PURE__*/React.createElement("a", {
    className: "action-link",
    href: phoneHref
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 20
  }), phone) : null, clinic ? /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)',
      fontSize: 18,
      marginBottom: 6
    }
  }, clinic) : null, email ? /*#__PURE__*/React.createElement("a", {
    className: "action-link",
    href: emailHref
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "mail",
    size: 20
  }), email) : null)), photo ? /*#__PURE__*/React.createElement("div", {
    className: "photo",
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
 * The close. It takes the page's own theme in its dark surface, so a violet
 * topic page does not end in blue. The commercial ask appears here and
 * nowhere earlier: the record does the selling, and the ask comes once,
 * after the proof. No eyebrow — the heading is already a question.
 */
function CtaClose({
  theme = 'blue',
  heading = 'Potřebujete přednášku, webinář nebo radu?',
  ctaLabel = 'Napište mi',
  ctaHref = '#',
  phone,
  phoneHref
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: `t-${theme} dark`,
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: 'clamp(48px,6vw,88px) clamp(24px,4vw,64px)',
      textAlign: 'center',
      background: 'var(--surface)',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      maxWidth: '19ch',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, heading), /*#__PURE__*/React.createElement("div", {
    className: "action-row",
    style: {
      justifyContent: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Pill, {
    href: ctaHref,
    label: ctaLabel
  }), phone ? /*#__PURE__*/React.createElement("a", {
    className: "action-link",
    href: phoneHref,
    style: {
      color: 'var(--ink)',
      textDecorationColor: 'var(--rule)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 20
  }), phone) : null))));
}
Object.assign(__ds_scope, { CtaClose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/CtaClose.jsx", error: String((e && e.message) || e) }); }

// components/sections/FaqList.jsx
try { (() => {
/**
 * Native <details>, so it opens with no script, is findable by the browser's
 * own in-page search, and keeps its keyboard behaviour. The first answer is
 * open: four identical closed bars do not show a reader there is anything
 * behind them. Every question is answerable from her own listings.
 */
function FaqList({
  items = [],
  openFirst = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "tv-faq-list"
  }, items.map((item, i) => /*#__PURE__*/React.createElement("details", {
    className: "faq",
    key: item.q,
    open: openFirst && i === 0
  }, /*#__PURE__*/React.createElement("summary", null, item.q, /*#__PURE__*/React.createElement("span", {
    className: "plus"
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 22
  }))), /*#__PURE__*/React.createElement("p", {
    className: "answer body"
  }, item.a))));
}
Object.assign(__ds_scope, { FaqList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/FaqList.jsx", error: String((e && e.message) || e) }); }

// components/sections/PageHero.jsx
try { (() => {
/**
 * The opening band every inner page shares, so no page arrives without a
 * heading and no page invents its own opening rhythm.
 */
function PageHero({
  eyebrow,
  heading,
  lead,
  icon,
  align = 'center'
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: `band tv-page-hero ${align === 'center' ? 'center' : ''}`,
    style: {
      padding: 'clamp(52px,6.5vw,96px) 0 clamp(56px,7vw,104px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      maxWidth: 940,
      textAlign: align === 'center' ? 'center' : 'start',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-mark-lg)',
      background: '#FFFFFF',
      color: 'var(--accent)',
      border: '1px solid var(--rule)',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30
  })) : null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      marginTop: 18,
      color: 'var(--ink)'
    }
  }, heading), lead ? /*#__PURE__*/React.createElement("p", {
    className: "lead measure",
    style: {
      color: 'var(--muted)',
      marginTop: 24,
      marginLeft: align === 'center' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined
    }
  }, lead) : null));
}
Object.assign(__ds_scope, { PageHero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/PageHero.jsx", error: String((e && e.message) || e) }); }

// slides/fit.js
try { (() => {
/* Scales the fixed 1920x1080 board down to whatever frame it is shown in,
   so one artboard renders identically in a card, a browser and an export. */
(function () {
  function fit() {
    var b = document.querySelector('.board');
    if (!b) return;
    var s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    b.style.transform = 'scale(' + s + ')';
    document.body.style.height = 1080 * s + 'px';
  }
  window.addEventListener('resize', fit);
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
  Icon: HIcon
} = window.TerezaVGnerovDesignSystem_360dc4;
const HD = window.TV_DATA;
function SectionHead({
  eyebrow,
  heading,
  action
}) {
  if (action) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 'clamp(36px,4vw,56px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 28,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "eyebrow"
    }, eyebrow), /*#__PURE__*/React.createElement("h2", {
      className: "h1 measure-tight",
      style: {
        marginTop: 18,
        maxWidth: '22ch'
      }
    }, heading)), action);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "center",
    style: {
      marginBottom: 'clamp(36px,4vw,56px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    className: "h1 measure-tight",
    style: {
      marginTop: 18
    }
  }, heading));
}
function HomeScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    className: "band",
    style: {
      paddingTop: 'clamp(56px,7vw,104px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell center",
    style: {
      maxWidth: 1000
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Klinick\xE1 v\xFD\u017Eiva"), /*#__PURE__*/React.createElement("h1", {
    className: "display",
    style: {
      marginTop: 18
    }
  }, "Osm t\xE9mat. Za ka\u017Ed\xFDm n\u011Bco skute\u010Dn\xE9ho."), /*#__PURE__*/React.createElement("p", {
    className: "lead measure-tight",
    style: {
      color: 'var(--muted)',
      marginTop: 26
    }
  }, "Klinick\xE1 nutri\u010Dn\xED terapeutka a odborn\xE1 asistentka 1.\xA0LF UK. U\u010D\xEDm, p\u0159edn\xE1\u0161\xEDm a\xA0pracuji na geriatrick\xE9 klinice a\xA0v\xA0iktov\xE9m centru VFN."), /*#__PURE__*/React.createElement("div", {
    className: "action-row",
    style: {
      marginTop: 38,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "action-link",
    href: HD.phoneHref
  }, /*#__PURE__*/React.createElement(HIcon, {
    name: "phone",
    size: 20
  }), HD.phone))), /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      marginTop: 'clamp(48px,6vw,80px)',
      paddingBottom: 'clamp(56px,7vw,104px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      aspectRatio: '1600 / 620',
      minHeight: 260
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/hero-kitchen.jpg",
    alt: "D\u0159ev\u011Bn\xE9 prk\xE9nko s cibul\xED a \u010Desnekem, t\xF3novan\xE9 do modr\xE9"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell center"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(25px,2.9vw,40px)',
      lineHeight: 1.24,
      letterSpacing: '-.019em',
      color: 'var(--ink)',
      maxWidth: '68ch',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  }, "Ned\u011Bl\xE1m jedno t\xE9ma. D\u011Bl\xE1m osm, a\xA0za ka\u017Ed\xFDm je v\xFDuka, ordinace nebo v\xFDzkum."), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/sig-blue.png",
    alt: "Monogram Terezy V\xE1gnerov\xE9",
    style: {
      width: 120,
      height: 'auto',
      margin: '40px auto 0'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 20,
      marginTop: 20
    }
  }, "Tereza V\xE1gnerov\xE1"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--muted)',
      marginTop: 6
    }
  }, "Klinick\xE1 nutri\u010Dn\xED terapeutka, 1.\xA0LF UK a\xA0VFN"))), /*#__PURE__*/React.createElement("section", {
    className: "sec band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell tv-about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tv-about-shots"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/about-food.jpg",
    alt: "Ryba, o\u0159echy, zelenina a ovoce na tmav\xE9m stole"
  })), /*#__PURE__*/React.createElement("div", {
    className: "photo",
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/about-grip.jpg",
    alt: "Ruka na ose \u010Dinky"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      maxWidth: '20ch'
    }
  }, "Pro\u0161la jsem v\u0161emi stupni zdravotn\xED p\xE9\u010De."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      marginTop: 34,
      display: 'grid',
      gap: 16
    }
  }, HD.facts.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start',
      maxWidth: '52ch'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: 999,
      background: '#FFFFFF',
      color: 'var(--accent)',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(HIcon, {
    name: "arrow",
    size: 17
  })), /*#__PURE__*/React.createElement("span", null, f)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '24px 72px',
      marginTop: 44,
      paddingTop: 36,
      borderTop: '1px solid var(--rule)'
    }
  }, HD.stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "figure",
    style: {
      fontSize: 'clamp(40px,4vw,60px)',
      color: 'var(--accent)'
    }
  }, s.figure), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--muted)'
    }
  }, s.label)))), /*#__PURE__*/React.createElement("div", {
    className: "action-row",
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(HPill, {
    href: "#/o-mne",
    label: "V\xEDce o mn\u011B",
    ghost: true
  }))))), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "T\xE9mata",
    heading: "Osm oblast\xED, kter\xE9 u\u010D\xEDm i praktikuji."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-topics"
  }, HD.topics.map(t => /*#__PURE__*/React.createElement(HTopicCard, _extends({
    key: t.slug
  }, t, {
    href: `#/temata/${t.slug}`
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "sec-tight"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement(HClaimBand, {
    claim: "D\u016Fkazy m\xEDsto dojm\u016F.",
    image: "../../assets/img/band-lift.jpg",
    alt: "\u017Dena zvedaj\xEDc\xED \u010Dinku ve stojanu, t\xF3novan\xE1 do modr\xE9"
  }))), /*#__PURE__*/React.createElement("section", {
    className: "sec band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Kde p\u016Fsob\xEDm",
    heading: "\u0160est instituc\xED, kter\xE9 to mohou potvrdit."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-3"
  }, HD.institutions.map(i => /*#__PURE__*/React.createElement(HInstitutionCard, _extends({
    key: i.name
  }, i)))))), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "P\u0159edn\xE1\u0161\xEDm",
    heading: "Dv\u011B p\u0159edn\xE1\u0161ky, kter\xE9 si m\u016F\u017Eete objednat.",
    action: /*#__PURE__*/React.createElement(HPill, {
      href: "#/prednasky",
      label: "V\u0161echny p\u0159edn\xE1\u0161ky",
      ghost: true
    })
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-2"
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
    className: "sec band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell tv-faq-layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "photo tv-faq-shot"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/faq-archive.jpg",
    alt: "Archivn\xED fotografie ze 30. let, t\xF3novan\xE1 do modr\xE9"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Ot\xE1zky"), /*#__PURE__*/React.createElement("h2", {
    className: "h1",
    style: {
      marginTop: 18,
      marginBottom: 32
    }
  }, "\u010Cast\xE9 ot\xE1zky"), /*#__PURE__*/React.createElement(HFaqList, {
    items: HD.faq
  })))), /*#__PURE__*/React.createElement(HCtaClose, {
    ctaHref: "#/kontakt",
    phone: HD.phone,
    phoneHref: HD.phoneHref
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
function TopicsScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SPageHero, {
    eyebrow: "T\xE9mata",
    heading: "Osm oblast\xED, kter\xE9 u\u010D\xEDm i praktikuji.",
    lead: "Za ka\u017Ed\xFDm t\xE9matem je v\xFDuka na 1. LF UK, klinick\xE1 praxe nebo v\xFDzkum. Barva t\xE9matu nese informaci, ne dekoraci."
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-topics"
  }, DD.topics.map(t => /*#__PURE__*/React.createElement(STopicCard, _extends({
    key: t.slug
  }, t, {
    href: `#/temata/${t.slug}`
  })))))), /*#__PURE__*/React.createElement(SCtaClose, {
    ctaHref: "#/kontakt",
    phone: DD.phone,
    phoneHref: DD.phoneHref
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
    className: "sec sheet"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Co v tomto t\xE9matu u\u010D\xEDm"), /*#__PURE__*/React.createElement("p", {
    className: "body measure",
    style: {
      marginTop: 20,
      color: 'var(--muted)'
    }
  }, t.summary), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(SGrade, {
    level: "kohorta"
  })), /*#__PURE__*/React.createElement("p", {
    className: "small",
    style: {
      marginTop: 14,
      color: 'var(--muted)'
    }
  }, "Stupe\u0148 d\u016Fkazu uv\xE1d\xED autorka. Tam, kde zdroj n\xE1vrh studie neuv\xE1d\xED, chyb\xED \u2014 a to je z\xE1m\u011Br."), related.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "grid grid-2",
    style: {
      marginTop: 40
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
    phoneHref: DD.phoneHref
  }));
}
function TalksScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SPageHero, {
    eyebrow: "P\u0159edn\xE1\u0161ky",
    heading: "Dv\u011B p\u0159edn\xE1\u0161ky, kter\xE9 si m\u016F\u017Eete objednat.",
    lead: "Prezen\u010Dn\u011B i online, pro ve\u0159ejnost, nutri\u010Dn\xED terapeuty a l\xE9ka\u0159e. \u010Cesky i anglicky."
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-2"
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
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "Vystoupen\xED"), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-3",
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(SEntryCard, {
    title: "Deep Talks 151",
    meta: "Podcast \xB7 2025",
    href: "#",
    external: true
  }), /*#__PURE__*/React.createElement(SEntryCard, {
    title: "Publika\u010Dn\xED seznam p\u0159ipravuji.",
    meta: "Zat\xEDm nedod\xE1no"
  }))))), /*#__PURE__*/React.createElement(SCtaClose, {
    ctaHref: "#/kontakt",
    phone: DD.phone,
    phoneHref: DD.phoneHref
  }));
}

/* The webinar collection is empty at launch by design. One true sentence and
   the two places she will announce it — never a "coming soon" card. */
function WebinarsScreen() {
  const [sold, setSold] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SPageHero, {
    eyebrow: "Webin\xE1\u0159e",
    heading: "Term\xEDny dal\u0161\xEDch webin\xE1\u0159\u016F p\u0159ipravuji.",
    lead: "Kde se o nich dozv\xEDte prvn\xED: na Instagramu, nebo mi rovnou napi\u0161te."
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      maxWidth: 900
    }
  }, !sold ? /*#__PURE__*/React.createElement("div", {
    className: "center"
  }, /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      color: 'var(--muted)'
    }
  }, "Zat\xEDm nen\xED vypsan\xFD \u017E\xE1dn\xFD term\xEDn. Sledujte ", /*#__PURE__*/React.createElement("a", {
    className: "link",
    href: DD.instagramUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, DD.instagram), "."), /*#__PURE__*/React.createElement("div", {
    className: "action-row",
    style: {
      justifyContent: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(SPill, {
    href: "#/kontakt",
    label: "Napi\u0161te mi"
  }), /*#__PURE__*/React.createElement("a", {
    className: "action-link",
    href: "#/webinare",
    onClick: e => {
      e.preventDefault();
      setSold(true);
    }
  }, "Uk\xE1zka: vypsan\xFD term\xEDn"))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,.8fr)',
      gap: 32,
      alignItems: 'start'
    },
    className: "tv-webinar-layout"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "h2"
  }, "V\xFD\u017Eiva v nemoci: co sledovat doma"), /*#__PURE__*/React.createElement("p", {
    className: "body",
    style: {
      color: 'var(--muted)',
      marginTop: 18,
      maxWidth: '60ch'
    }
  }, "Devades\xE1t minut o tom, jak poznat riziko podv\xFD\u017Eivy u bl\xEDzk\xE9ho v\xA0rekonvalescenci, co m\xE1 smysl v\xE1\u017Eit a\xA0kdy volat nutri\u010Dn\xEDho terapeuta."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(SGrade, {
    level: "konsenzus"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-3",
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
    price: "890 K\u010D"
  })))), /*#__PURE__*/React.createElement(SCtaClose, {
    ctaHref: "#/kontakt",
    phone: DD.phone,
    phoneHref: DD.phoneHref
  }));
}
function ContactScreen() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SPageHero, {
    eyebrow: "Kontakt",
    heading: "Napi\u0161te mi.",
    lead: "T\u0159i cesty do jedn\xE9 schr\xE1nky. Formul\xE1\u0159 tu nen\xED: nem\xE1m backend, kter\xFD by ho p\u0159ijal, a formul\xE1\u0159, kter\xFD ti\u0161e sel\u017Ee, je hor\u0161\xED ne\u017E otev\u0159en\xFD e-mail."
  }), /*#__PURE__*/React.createElement("section", {
    className: "sec"
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
    className: "sec sheet"
  }, /*#__PURE__*/React.createElement("div", {
    className: "shell",
    style: {
      maxWidth: 900
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      display: 'grid',
      gap: 18
    }
  }, DD.facts.map(f => /*#__PURE__*/React.createElement("li", {
    key: f,
    className: "body",
    style: {
      paddingBottom: 18,
      borderBottom: '1px solid var(--rule)'
    }
  }, f))), /*#__PURE__*/React.createElement("p", {
    className: "small",
    style: {
      marginTop: 28,
      color: 'var(--muted)'
    }
  }, "Bez odkazu, proto\u017Ee zdrojov\xE1 adresa zat\xEDm chyb\xED: \u010Cesk\xE1 asociace nutri\u010Dn\xEDch terapeut\u016F, \u010Cesk\xE1 zem\u011Bd\u011Blsk\xE1 univerzita v\xA0Praze."))), /*#__PURE__*/React.createElement(SCtaClose, {
    ctaHref: "#/kontakt",
    phone: DD.phone,
    phoneHref: DD.phoneHref
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
/* Real content, copied from tv-web/src/content and src/lib/site.ts. Nothing
   here is invented: every fact traces to one of her six listings. */
window.TV_DATA = {
  wordmark: 'Tereza Vágnerová',
  role: 'Klinická nutriční terapeutka',
  phone: '225 003 211',
  phoneHref: 'tel:225003211',
  clinic: 'Geriatrická klinika VFN',
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
    theme: 'petrol',
    summary: 'Jak vyhodnotit sílu důkazu za konkrétním tvrzením, od mechanismu přes kohortové studie až po metaanalýzu. Rámec, který spojuje ostatní témata.'
  }, {
    slug: 'medicina',
    name: 'Medicína',
    theme: 'petrol',
    summary: 'Výživa jako součást léčby: riziko podvýživy, úbytek svalové hmoty a energetické nároky v akutní nemoci i v rekonvalescenci.'
  }, {
    slug: 'zenske-zdravi',
    name: 'Ženské zdraví',
    theme: 'violet',
    summary: 'Cyklus, hormonální změny a energetická dostupnost. Co se mění v jednotlivých fázích a proč vynechaná menstruace neznamená lepší formu.'
  }, {
    slug: 'dlouhovekost',
    name: 'Dlouhověkost',
    theme: 'violet',
    summary: 'Úbytek svalové hmoty a síly s přibývajícím věkem, známý jako sarkopenie, a jeho dopad na soběstačnost.'
  }, {
    slug: 'spanek',
    name: 'Spánek',
    theme: 'blue',
    summary: 'Spánek jako biologický proces, který ovlivňuje chuť k jídlu, regeneraci a metabolismus. Proč kvalita nemusí být totéž co délka.'
  }, {
    slug: 'fitness',
    name: 'Fitness',
    theme: 'blue',
    summary: 'Silový trénink a pohybová aktivita jako nástroj, který mění složení těla a metabolické zdraví.'
  }, {
    slug: 'vyziva',
    name: 'Výživa',
    theme: 'petrol',
    summary: 'Energetická bilance, poměr makroživin a kvalita stravy v běžném životě. Co z populárních doporučení má oporu v datech.'
  }, {
    slug: 'lifestyle',
    name: 'Lifestyle',
    theme: 'blue',
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
    name: '1. lékařská fakulta Univerzity Karlovy',
    role: 'Odborná asistentka',
    url: 'https://www.lf1.cuni.cz'
  }, {
    name: 'Geriatrická klinika 1. LF UK a VFN',
    role: 'Nutriční terapeutka',
    url: 'https://geri.lf1.cuni.cz'
  }, {
    name: 'Všeobecná fakultní nemocnice v Praze',
    role: 'Iktové centrum, včasná rehabilitace',
    url: 'https://www.vfn.cz'
  }, {
    name: 'Institut moderní výživy',
    role: 'Odborná komise',
    url: 'https://institutmodernivyzivy.cz'
  }, {
    name: 'FitNut',
    role: 'Lektorka',
    url: 'https://fitnut.cz/lektor/tereza-vagnerova'
  }, {
    name: 'Domov Sue Ryder',
    role: 'Nutriční terapeutka a lektorka',
    url: 'https://www.neztratitsevestari.cz'
  }],
  facts: ['Čtyři tituly: bakalářský, inženýrský, magisterský a doktorský.', 'Vyučuji na 1. LF UK, v lékařských i nelékařských programech.', 'Učím česky i anglicky.', 'Pracuji na geriatrické klinice a v iktovém centru VFN.', 'Věnuji se sarkopenii a sarkopenické obezitě.', 'Jsem zakládající členka České asociace nutričních terapeutů (ČANT) a členka odborné komise IMV.'],
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
    a: 'Na Geriatrické klinice 1. LF UK a VFN, na oddělení včasné rehabilitace iktového centra VFN a v nutriční ambulanci.'
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

__ds_ns.Foot = __ds_scope.Foot;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.ClaimBand = __ds_scope.ClaimBand;

__ds_ns.ContactBlock = __ds_scope.ContactBlock;

__ds_ns.CtaClose = __ds_scope.CtaClose;

__ds_ns.FaqList = __ds_scope.FaqList;

__ds_ns.PageHero = __ds_scope.PageHero;

})();
