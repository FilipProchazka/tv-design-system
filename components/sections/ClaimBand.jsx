import React from 'react';

/**
 * One sentence over a duotoned photograph, on a real scrim: the deck's
 * photo-statement board as a page band. The scrim is a solid background
 * colour plus a bottom gradient: a gradient alone computes as a transparent
 * background and under-measures on contrast tools even when it looks legible.
 */
export function ClaimBand({ claim, image, alt = '' }) {
  return (
    <section className="w-photo" style={{ minHeight: 'clamp(360px,40vw,560px)', display: 'grid' }}>
      <img src={image} alt={alt} style={{ position: 'absolute', inset: 0 }} />
      <span className="w-scrim" aria-hidden="true" />
      <div className="shell" style={{ position: 'relative', alignSelf: 'center', paddingTop: 'clamp(56px,6vw,96px)', paddingBottom: 'clamp(56px,6vw,96px)' }}>
        <p className="w-statement" style={{ color: '#FFFFFF', fontSize: 'clamp(32px,4.4vw,68px)', maxWidth: '18ch' }}>{claim}</p>
      </div>
    </section>
  );
}
