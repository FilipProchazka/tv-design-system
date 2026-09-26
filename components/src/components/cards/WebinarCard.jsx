import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * A webinar for sale: mono facts, the price at figure scale in Geist 300, and
 * the one ask. The card is the reusable part — the empty state is the page's
 * job, and when there is no webinar the page says so in one true sentence
 * rather than shipping a placeholder row.
 */
export function WebinarCard({ title, when, duration, price, href = '#', cta = 'Přihlásit se' }) {
  return (
    <div className="w-row w-row-2 tv-webinar">
      <div>
        <span className="w-kicker">{when}</span>
        <h3 className="w-sub" style={{ marginTop: 12, color: 'var(--ink)' }}>{title}</h3>
        <span className="w-meta" style={{ display: 'block', marginTop: 12 }}>{duration}</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
        <span className="w-figure" style={{ fontSize: 'clamp(44px,4.6vw,72px)' }}>{price}</span>
        <a className="w-ask" href={href}>{cta}<Icon name="arrow" size={20} /></a>
      </div>
    </div>
  );
}
