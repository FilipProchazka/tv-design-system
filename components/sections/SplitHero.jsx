import React from 'react';

/**
 * The homepage opening: the deck's SPLIT board as a page. Claim column left
 * on paper, duotoned photograph right, full-bleed to the viewport edge. The
 * monogram sits above the kicker, as it does on a deck cover.
 */
export function SplitHero({ eyebrow, heading, lead, image, alt = '', sig, actions }) {
  return (
    <header className="w-hero-split" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.02fr) minmax(0,.98fr)', alignItems: 'stretch', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: 'clamp(56px,7vw,128px) clamp(20px,4vw,80px) clamp(56px,7vw,128px) max(var(--gut), calc((100vw - var(--shell)) / 2 + var(--gut)))' }}>
        <div>
          {sig ? <img src={sig} alt="" style={{ width: 132, marginBottom: 30 }} /> : null}
          {eyebrow ? <span className="w-kicker">{eyebrow}</span> : null}
          <h1 className="w-claim" style={{ marginTop: 18 }}>{heading}</h1>
          {lead ? <p className="w-lead" style={{ marginTop: 28, color: 'var(--muted)' }}>{lead}</p> : null}
          {actions ? <div className="w-actions" style={{ marginTop: 36 }}>{actions}</div> : null}
        </div>
      </div>
      <div className="w-photo" style={{ minHeight: 'clamp(320px,46vw,720px)' }}>
        <img src={image} alt={alt} />
      </div>
    </header>
  );
}
