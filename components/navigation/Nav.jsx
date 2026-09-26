import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * One hairline strip: wordmark left, tracked mono links right, one rule under
 * it. The dark utility bar and the pill CTA are retired (14 Sep 2026): the
 * phone and mail routes live in the footer, where a record site puts them.
 * The current page is marked by ink weight and an accent underline, never by
 * colour alone. Below 1024px it collapses to a stacked panel.
 */
export function Nav({ wordmark, links = [], current, cta, ctaHref = '#', phone, phoneHref, clinic, email, emailHref, instagram, instagramUrl, langLabel, langHref }) {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="tv-head" data-menu={open ? 'open' : 'closed'} style={{ position: 'relative', zIndex: 40, background: 'var(--surface)', borderBottom: '1px solid var(--rule)' }}>
      <div className="shell" style={{ minHeight: 88, display: 'flex', alignItems: 'center', gap: 'clamp(20px,3vw,48px)' }}>
        <a href="#/" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 21, letterSpacing: '-.02em', color: 'var(--ink)', marginRight: 'auto', whiteSpace: 'nowrap' }}>{wordmark}</a>
        <nav className="tv-links" aria-label="Hlavní navigace">
          {links.map((l) => (
            <a key={l.href} href={l.href} aria-current={l.href === current ? 'page' : undefined}>{l.label}</a>
          ))}
        </nav>
        {cta ? (
          <a className="w-link tv-nav-ask tv-more" href={ctaHref} style={{ color: 'var(--ink)' }}>
            {cta}<Icon name="arrow" size={17} />
          </a>
        ) : null}
        {langLabel ? <a className="tv-lang tv-nav-ask" href={langHref}>{langLabel}</a> : null}
        <button className="tv-menu-btn" type="button" aria-expanded={open} aria-controls="tv-menu-panel" aria-label="Nabídka" onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} size={24} />
        </button>
      </div>

      <div className="tv-panel" id="tv-menu-panel">
        <div className="shell">
          {links.map((l) => (
            <a className="tv-panel-row" key={l.href} href={l.href} aria-current={l.href === current ? 'page' : undefined}>
              <span>{l.label}</span><Icon name="arrow" size={20} />
            </a>
          ))}
          {phone ? <a className="tv-panel-row" href={phoneHref}><span className="w-meta">{phone}{clinic ? ' · ' + clinic : ''}</span><Icon name="phone" size={20} /></a> : null}
          {email ? <a className="tv-panel-row" href={emailHref}><span className="w-meta">{email}</span><Icon name="mail" size={20} /></a> : null}
          {instagram ? <a className="tv-panel-row" href={instagramUrl} target="_blank" rel="me noopener noreferrer"><span className="w-meta">{instagram}</span><Icon name="instagram" size={20} /></a> : null}
          {cta ? <a className="w-ask" href={ctaHref} style={{ width: '100%', justifyContent: 'space-between', marginTop: 20 }}>{cta}<Icon name="arrow" size={20} /></a> : null}
        </div>
      </div>
    </header>
  );
}
