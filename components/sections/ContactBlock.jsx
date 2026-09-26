import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * Three mail routes to one inbox, as rows on hairlines. No form anywhere:
 * there is no backend to receive one, and a form that silently fails is worse
 * than a mail client that opens. The subject is the only sorting a static
 * site gives her, so each route carries a real one.
 */
export function ContactBlock({ heading = 'Napište mi.', eyebrow, routes = [], phone, phoneHref, clinic, email, emailHref, photo, photoAlt = '' }) {
  return (
    <div className="tv-contact" style={{ display: 'grid', gap: 'clamp(32px,4vw,72px)', alignItems: 'start', gridTemplateColumns: photo ? 'minmax(0,1.15fr) minmax(0,.85fr)' : 'minmax(0,1fr)' }}>
      <div>
        {eyebrow ? <span className="w-kicker">{eyebrow}</span> : null}
        <h2 className="w-claim" style={{ marginTop: eyebrow ? 18 : 0, color: 'var(--ink)' }}>{heading}</h2>
        <ul className="w-rows" style={{ listStyle: 'none', marginTop: 40 }}>
          {routes.map((r) => (
            <li key={r.subject}>
              <a className="tv-route w-row" href={r.href} style={{ gridTemplateColumns: 'minmax(0,1fr) auto', alignItems: 'center' }}>
                <span style={{ display: 'block' }}>
                  <span className="w-sub tv-route-subject" style={{ display: 'block', fontSize: 'clamp(20px,1.7vw,26px)', color: 'var(--ink)', transition: 'color var(--dur) var(--ease)' }}>{r.subject}</span>
                  <span className="w-body" style={{ display: 'block', marginTop: 8, color: 'var(--muted)' }}>{r.hint}</span>
                </span>
                <span className="tv-route-go" style={{ flex: 'none', color: 'var(--accent)', transition: 'transform var(--dur) var(--ease)' }}>
                  <Icon name="mail" size={22} />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 36, display: 'grid', gap: 10, justifyItems: 'start' }}>
          {phone ? <a className="w-link" href={phoneHref}><Icon name="phone" size={17} />{phone}</a> : null}
          {clinic ? <p className="w-meta">{clinic}</p> : null}
          {email ? <a className="w-link" href={emailHref}><Icon name="mail" size={17} />{email}</a> : null}
        </div>
      </div>
      {photo ? (
        <div className="w-photo" style={{ aspectRatio: '760 / 900', maxHeight: 620 }}>
          <img src={photo} alt={photoAlt} loading="lazy" />
        </div>
      ) : null}
    </div>
  );
}
