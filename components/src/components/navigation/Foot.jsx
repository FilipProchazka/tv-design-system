import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { ScaleStrip } from './ScaleStrip.jsx';

/**
 * The connect strip and the footer. The strip is the page's one dark band
 * below the content — site chrome in blue whatever theme the page takes. The
 * footer is four columns on paper with mono heads and a hairline above the
 * copyright line: who she is, quick links, the eight topics, contact. No
 * postal address, because none is sourced.
 *
 * `scale` renders the deck's footer scale strip. Topic pages only, static,
 * never fixed to the viewport — it is a continuum the subject actually has.
 */
export function Foot({ wordmark, role, connectTitle = 'Spojte se se mnou', phone, phoneHref, email, emailHref, instagramUrl, clinic, links = [], topics = [], copyright, scale, sig }) {
  return (
    <>
      <section className="t-blue dark" style={{ background: 'var(--surface)', color: 'var(--ink)' }}>
        <div className="shell" style={{ paddingTop: 28, paddingBottom: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px 40px', flexWrap: 'wrap' }}>
          <p className="w-kicker" style={{ color: 'var(--accent)' }}>{connectTitle}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px 32px', flexWrap: 'wrap' }}>
            <a className="tv-connect-item" href={phoneHref}><Icon name="phone" size={19} /><span>{phone}</span></a>
            <a className="tv-connect-item" href={emailHref}><Icon name="mail" size={19} /><span>{email}</span></a>
          </div>
        </div>
      </section>

      <footer style={{ padding: 'clamp(56px,6vw,88px) 0 32px' }}>
        <div className="shell">
          {scale ? <div style={{ marginBottom: 'clamp(40px,5vw,72px)' }}><ScaleStrip {...scale} /></div> : null}
          <div className="tv-foot-cols">
            <div className="tv-foot-about">
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 22, letterSpacing: '-.02em', color: 'var(--ink)' }}>{wordmark}</p>
              <p className="w-body" style={{ color: 'var(--muted)', marginTop: 12, maxWidth: '32ch' }}>{role}</p>
              <a className="tv-ig" href={instagramUrl} target="_blank" rel="me noopener noreferrer"><Icon name="instagram" size={21} title="Instagram" /></a>
            </div>
            <nav aria-label="Rychlé odkazy">
              <h2 className="tv-col-h">Rychlé odkazy</h2>
              <ul>{links.map((l) => <li key={l.href}><a href={l.href}>{l.label}</a></li>)}</ul>
            </nav>
            <nav aria-label="Témata">
              <h2 className="tv-col-h">Témata</h2>
              <ul>{topics.map((t) => <li key={t.href}><a href={t.href}>{t.label}</a></li>)}</ul>
            </nav>
            <div>
              <h2 className="tv-col-h">Kontakt</h2>
              <ul>
                <li><a href={emailHref}>{email}</a></li>
                <li><a href={phoneHref}>{phone}</a></li>
                <li className="w-meta" style={{ marginTop: 12 }}>{clinic}</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: 'clamp(40px,5vw,64px)', paddingTop: 26, borderTop: '1px solid var(--rule)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
            <p className="w-meta">{copyright}</p>
            {sig ? <img src={sig} alt="" style={{ width: 96, opacity: .8 }} /> : null}
          </div>
        </div>
      </footer>
    </>
  );
}
