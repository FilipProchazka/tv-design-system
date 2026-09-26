import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Grade } from '../core/Grade.jsx';

/**
 * A publication: year and journal in mono, title in Geist, and a grade only
 * where the paper states its own design. Omit `href` for an inert row — no
 * mark, no hover. Year and identifiers are tabular so a column of rows
 * aligns down the page.
 */
export function PublicationRow({ year, title, authors, journal, href, grade }) {
  const linked = Boolean(href);
  const inner = (
    <>
      <span className="w-meta" style={{ display: 'block', fontSize: 17, color: 'var(--accent)' }}>{year}</span>
      <span style={{ display: 'block' }}>
        <span className="w-sub tv-pub-title" style={{ display: 'block', fontSize: 'clamp(20px,1.7vw,26px)', color: 'var(--ink)', transition: 'color var(--dur) var(--ease)' }}>{title}</span>
        {authors ? <span className="w-body" style={{ display: 'block', marginTop: 8, color: 'var(--muted)' }}>{authors}</span> : null}
        <span className="w-meta" style={{ display: 'block', marginTop: 8 }}>{journal}</span>
        {grade ? <span style={{ display: 'inline-flex', marginTop: 14 }}><Grade level={grade} /></span> : null}
      </span>
      {linked ? <span className="tv-pub-go" style={{ color: 'var(--accent)', transition: 'transform var(--dur) var(--ease)' }}><Icon name="external" size={19} /></span> : null}
    </>
  );
  const style = { gridTemplateColumns: '84px minmax(0,1fr) auto' };
  if (!linked) return <div className="w-row tv-pub" style={style}>{inner}</div>;
  return (
    <a className="w-row tv-pub tv-pub-link" style={style} href={href} target="_blank" rel="noopener noreferrer">{inner}</a>
  );
}
