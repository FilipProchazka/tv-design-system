import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * The sticky booking facts and the one Stripe button. Rows sit on hairlines;
 * `big` renders at figure scale in Geist 300 and is for the price row only.
 * The amount is appended to the button label so the reader knows the price
 * before the tab changes, and `leaving` names where the link goes.
 */
export function FactPanel({ rows = [], price, stripeUrl = '#', leaving, note, cta = 'Zaplatit a přihlásit se' }) {
  return (
    <aside className="tv-fact-panel" style={{ borderTop: '2px solid var(--ink)', paddingTop: 24 }}>
      <div style={{ display: 'grid' }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 20, padding: '16px 0', borderBottom: '1px solid var(--rule)' }}>
            <span className="w-kicker w-kicker-muted">{r.label}</span>
            {r.big
              ? <span className="w-figure" style={{ fontSize: 'clamp(36px,3.4vw,52px)' }}>{r.value}</span>
              : <span className="w-body" style={{ color: 'var(--ink)', textAlign: 'right' }}>{r.value}</span>}
          </div>
        ))}
      </div>
      <a className="w-ask" href={stripeUrl} target="_blank" rel="noopener noreferrer"
        style={{ width: '100%', justifyContent: 'space-between', marginTop: 24 }}>
        {price ? cta + ' · ' + price : cta}<Icon name="external" size={20} />
      </a>
      {leaving ? <p className="w-meta" style={{ marginTop: 12 }}>{leaving}</p> : null}
      {note ? <p className="w-body" style={{ marginTop: 16, color: 'var(--muted)', fontSize: 17 }}>{note}</p> : null}
    </aside>
  );
}
