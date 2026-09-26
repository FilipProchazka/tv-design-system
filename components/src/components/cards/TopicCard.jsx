import React from 'react';
import { Icon } from '../core/Icon.jsx';

/**
 * One of the eight subjects, as a row on a hairline rather than a tinted
 * card (14 Sep 2026). Eight cards were a row of boxes; eight rows are an
 * index. The theme colour appears twice — the 52px square mark and the
 * subject's name in accent on hover — and the name is always in text beside
 * the mark, because colour never carries meaning alone.
 */
export function TopicCard({ slug, name, summary, theme = 'blue', href = '#', more = 'Více' }) {
  return (
    <a className={'w-row w-row-3 tv-topic t-' + theme} href={href}>
      <span className="tv-topic-mark w-row-mark" aria-hidden="true">
        <Icon name={slug} size={26} />
      </span>
      <span style={{ display: 'block' }}>
        <span className="w-sub tv-topic-name" style={{ display: 'block', color: 'var(--ink)', transition: 'color var(--dur) var(--ease)' }}>{name}</span>
        <span className="w-body" style={{ display: 'block', color: 'var(--muted)', marginTop: 10 }}>{summary}</span>
      </span>
      <span className="w-link tv-more" style={{ whiteSpace: 'nowrap' }}>
        {more}<Icon name="arrow" size={17} />
      </span>
    </a>
  );
}
