import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * A bookable talk: a duotoned photograph above a rule, mono meta, and two
 * sentences of abstract. The abstract is never cut to fit the grid — if it
 * does not fit, the grid changes. The photograph is subject photography,
 * square-cornered and duotoned, never a portrait of her.
 */
export function TalkCard({ title, abstract, meta, topicName, image, alt = '', href = '#', cta = 'Poptat přednášku' }) {
  return (
    <a className="tv-talk" href={href} style={{ display: 'block' }}>
      <span className="w-photo" style={{ display: 'block', aspectRatio: '16 / 10' }}>
        <img src={image} alt={alt} />
      </span>
      <span className="w-col-ruled" style={{ display: 'block', marginTop: 20 }}>
        {topicName ? <span className="w-kicker">{topicName}</span> : null}
        <span className="w-meta" style={{ display: 'block', marginTop: topicName ? 10 : 0 }}>{meta}</span>
        <span className="w-sub tv-talk-title" style={{ display: 'block', marginTop: 14, color: 'var(--ink)', transition: 'color var(--dur) var(--ease)' }}>{title}</span>
        <span className="w-body" style={{ display: 'block', marginTop: 14, color: 'var(--muted)' }}>{abstract}</span>
        <span className="w-link tv-more" style={{ marginTop: 18 }}>{cta}<Icon name="arrow" size={17} /></span>
      </span>
    </a>
  );
}
