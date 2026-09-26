import React from 'react';

/**
 * Native `<details>`, first answer open, on hairlines — no card, no shadow,
 * no lift. Every answer has to be answerable from a real source; a question
 * with no sourced answer is not invented to fill a row.
 */
export function FaqList({ items = [], openFirst = true }) {
  return (
    <div className="w-faq">
      {items.map((it, i) => (
        <details key={i} open={openFirst && i === 0}>
          <summary>
            {it.q}
            <span aria-hidden="true" style={{ flex: 'none', color: 'var(--accent)' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M4 12h16" />
                <path className="bar-v" d="M12 4v16" style={{ transformOrigin: '12px 12px', transition: 'transform var(--dur) var(--ease)' }} />
              </svg>
            </span>
          </summary>
          <div className="w-answer w-body">{it.a}</div>
        </details>
      ))}
    </div>
  );
}
