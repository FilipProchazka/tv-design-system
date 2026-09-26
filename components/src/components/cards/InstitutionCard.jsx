import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * An organisation that corroborates the record, as a row on a hairline.
 * `url` is required by design: a card with no link is a fabricated citation.
 * The institution is drawn as the `building` mark, never photographed.
 */
export function InstitutionCard({ name, role, url, cta = 'Web instituce' }) {
  return (
    <a className="w-row w-row-3 tv-inst" href={url} target="_blank" rel="noopener noreferrer">
      <span className="tv-inst-mark w-row-mark" aria-hidden="true">
        <Icon name="building" size={24} />
      </span>
      <span style={{ display: 'block' }}>
        <span className="w-sub tv-inst-name" style={{ display: 'block', color: 'var(--ink)', transition: 'color var(--dur) var(--ease)' }}>{name}</span>
        <span className="w-body" style={{ display: 'block', color: 'var(--muted)', marginTop: 10 }}>{role}</span>
      </span>
      <span className="w-link w-link-out tv-more-out" style={{ whiteSpace: 'nowrap' }}>
        {cta}<Icon name="external" size={17} />
      </span>
    </a>
  );
}
