import React from 'react';

/**
 * The site's whole icon set, authored on one 24px grid at 1.5px stroke with
 * round caps and joins, so eight topic marks and nine interface marks read as
 * one hand. Colour comes from currentColor; a topic mark takes its theme
 * accent from the card it sits in. Copied verbatim from tv-web Icon.astro.
 */
const P = {
  // the eight topics, in frontmatter order
  prehled: ['M12 3 21 20H3L12 3Z', 'M7.2 12h9.6', 'M4.9 16.3h14.2'],
  medicina: [{ r: [4, 3.5, 16, 17, 2.5] }, 'M9 3.5V2.6h6v.9', 'M7.5 13h2l1.5-3 2 6 1.5-3h2'],
  'zenske-zdravi': ['M20 12a8 8 0 1 1-3.1-6.3', 'M17.1 2.3v3.6h-3.6', { c: [12, 4.4, 1.15], fill: true }],
  dlouhovekost: ['M6.5 3h11', 'M6.5 21h11', 'M8 3v3.1c0 2 4 3.9 4 5.9s-4 3.9-4 5.9V21', 'M16 3v3.1c0 2-4 3.9-4 5.9s4 3.9 4 5.9V21', 'M9.4 19.2h5.2'],
  spanek: ['M20 14.4A8.6 8.6 0 0 1 9.6 4 8.6 8.6 0 1 0 20 14.4Z', 'M16.2 4.4h3.4', 'M17.9 2.7v3.4'],
  fitness: ['M2.6 8.4v7.2', 'M6.2 4.9v14.2', 'M17.8 4.9v14.2', 'M21.4 8.4v7.2', 'M6.2 12h11.6'],
  vyziva: [{ c: [12, 12, 8.8] }, 'M12 3.2v17.6', 'M12 12h8.8', 'M12 12 5.8 18.2'],
  lifestyle: [{ r: [3.2, 5, 17.6, 15.8, 2.5] }, 'M3.2 9.6h17.6', 'M7.8 3.2v3.4', 'M16.2 3.2v3.4', 'm9 15.1 2.2 2.2 4-4.3'],
  // interface
  arrow: ['M4.5 12h15', 'm13.4 5.8 6.1 6.2-6.1 6.2'],
  phone: ['M6.4 3.4h3.1l1.6 4-2 1.3a10.7 10.7 0 0 0 5.2 5.2l1.3-2 4 1.6v3.1a2 2 0 0 1-2.2 2A16.9 16.9 0 0 1 4.4 5.6a2 2 0 0 1 2-2.2Z'],
  mail: [{ r: [2.8, 5, 18.4, 14, 2.4] }, 'm3.6 6.6 8.4 6 8.4-6'],
  instagram: [{ r: [3.2, 3.2, 17.6, 17.6, 5] }, { c: [12, 12, 4.1] }, { c: [17.1, 6.9, 1.15], fill: true }],
  menu: ['M3.5 7h17', 'M3.5 12h17', 'M3.5 17h17'],
  close: ['M5.6 5.6l12.8 12.8', 'M18.4 5.6L5.6 18.4'],
  building: ['M3.6 20.8h16.8', 'M5.4 20.8V6.4l6.6-3.2 6.6 3.2v14.4', 'M9.2 9.6h1.6', 'M13.2 9.6h1.6', 'M9.2 13.4h1.6', 'M13.2 13.4h1.6', 'M10.2 20.8v-3.6h3.6v3.6'],
  external: ['M13.6 4.4h6v6', 'm19.6 4.4-8.2 8.2', 'M18 14.2v4.2a2 2 0 0 1-2 2H5.6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4.2'],
  // the accordion mark: the upright bar collapses when the answer opens
  plus: ['M5 12h14', { d: 'M12 5v14', cls: 'bar-v' }],
};

export function Icon({ name, size = 24, className = '', title, style }) {
  const parts = P[name] || [];
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      role={title ? 'img' : undefined} aria-hidden={title ? undefined : 'true'} focusable="false" style={style}>
      {title ? <title>{title}</title> : null}
      {parts.map((p, i) => {
        if (typeof p === 'string') return <path key={i} d={p} />;
        if (p.d) return <path key={i} d={p.d} className={p.cls} />;
        if (p.r) return <rect key={i} x={p.r[0]} y={p.r[1]} width={p.r[2]} height={p.r[3]} rx={p.r[4]} />;
        return <circle key={i} cx={p.c[0]} cy={p.c[1]} r={p.c[2]} fill={p.fill ? 'currentColor' : undefined} stroke={p.fill ? 'none' : undefined} />;
      })}
    </svg>
  );
}
