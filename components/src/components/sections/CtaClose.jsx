import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Pill } from '../core/Pill.jsx';

/**
 * The one commercial ask, in the page's own theme, after the proof. `theme`
 * takes the page's theme so a violet topic page does not close in blue.
 * `heading` is a question addressed to the reader and takes no eyebrow above
 * it — a heading that is already a full sentence never gets one.
 */
export function CtaClose({ theme = 'blue', heading = 'Napíšete mi?', ctaLabel = 'Napište mi', ctaHref = '#', phone, phoneHref, sig }) {
  return (
    <section className={'w-sec t-' + theme + ' dark'} style={{ background: 'var(--surface)', color: 'var(--ink)' }}>
      <div className="shell" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) auto', gap: 'clamp(28px,4vw,72px)', alignItems: 'end' }}>
        <div>
          <h2 className="w-claim" style={{ color: 'var(--ink)' }}>{heading}</h2>
          <div className="w-actions" style={{ marginTop: 36 }}>
            <Pill href={ctaHref} label={ctaLabel} />
            {phone ? (
              <a className="w-link" href={phoneHref} style={{ color: 'var(--accent)' }}>
                <Icon name="phone" size={17} />{phone}
              </a>
            ) : null}
          </div>
        </div>
        {sig ? <img src={sig} alt="" style={{ width: 148, opacity: .95 }} /> : null}
      </div>
    </section>
  );
}
