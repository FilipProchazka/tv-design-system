import React from 'react';

const LEVELS = {
  meta: [5, 'Metaanalýza a RCT'],
  rct: [5, 'Randomizovaná studie'],
  kohorta: [4, 'Kohortová studie'],
  konsenzus: [3, 'Odborný konsenzus'],
  mechanismus: [2, 'Mechanistické'],
  nepodlozeno: [1, 'Nepodloženo'],
};

/**
 * The evidence ladder: the brand's signature habit made visible. A claim can
 * state how well supported it is, on the same tick vocabulary as the deck's
 * scale. She sets it; it is never inferred. Presence is a signal, so absence
 * has to be possible: most claims carry no grade at all.
 */
export function Grade({ level, className = '' }) {
  const [n, name] = LEVELS[level] || LEVELS.nepodlozeno;
  return (
    <span className={`tv-grade ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, color: 'var(--muted)', whiteSpace: 'nowrap' }}>
      <span className="w-kicker w-kicker-muted">{name}</span>
      <span aria-hidden="true" style={{ display: 'inline-flex', alignItems: 'flex-end', gap: 4, height: 14 }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} style={{ width: 3, height: i < n ? 14 : 6, background: i < n ? `var(--grade-${Math.min(5, n)})` : 'var(--grade-1)' }} />
        ))}
      </span>
    </span>
  );
}
