import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * The opening band every inner page shares: the deck's OPEN board as a page.
 * `heading` is written as a claim, not a topic label, and when it is already
 * a full sentence the eyebrow is dropped: saying the same thing twice in two
 * type sizes is the duplication this component exists to avoid.
 */
export function PageHero({ eyebrow, heading, lead, icon, align = 'start' }) {
  const centred = align === 'center';
  return (
    <header className="w-sec-tight" style={{ paddingTop: 'clamp(56px,6vw,104px)' }}>
      <div className="shell" style={{ textAlign: centred ? 'center' : 'start' }}>
        {icon ? (
          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 64, height: 64, border: '1px solid var(--rule)', color: 'var(--accent)', marginBottom: 28 }}>
            <Icon name={icon} size={30} />
          </span>
        ) : null}
        {eyebrow ? <span className="w-kicker">{eyebrow}</span> : null}
        <h1 className="w-claim" style={{ marginTop: eyebrow ? 18 : 0, marginInline: centred ? 'auto' : undefined }}>{heading}</h1>
        {lead ? <p className="w-lead" style={{ marginTop: 26, color: 'var(--muted)', marginInline: centred ? 'auto' : undefined }}>{lead}</p> : null}
      </div>
    </header>
  );
}
