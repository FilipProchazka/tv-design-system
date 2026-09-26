import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * A listing row: mono meta, title, and a mark only if it actually goes
 * somewhere. Omit `href` and the row renders inert, no mark, no hover, so a
 * linked row and a dead row never look alike.
 */
export function EntryCard({ title, meta, href, external = false, cta }) {
  const linked = Boolean(href);
  const inner = (
    <>
      <span style={{ display: 'block' }}>
        <span className="w-meta" style={{ display: 'block' }}>{meta}</span>
        <span className="w-sub tv-entry-title" style={{ display: 'block', marginTop: 10, color: 'var(--ink)', transition: 'color var(--dur) var(--ease)' }}>{title}</span>
      </span>
      {linked ? (
        <span className={'w-link ' + (external ? 'w-link-out tv-more-out' : 'tv-more')} style={{ whiteSpace: 'nowrap' }}>
          {cta ?? (external ? 'Otevřít' : 'Více')}<Icon name={external ? 'external' : 'arrow'} size={17} />
        </span>
      ) : null}
    </>
  );
  if (!linked) return <div className="w-row w-row-3 tv-entry">{inner}</div>;
  return (
    <a className="w-row w-row-3 tv-entry tv-entry-link" href={href}
      target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
      {inner}
    </a>
  );
}
