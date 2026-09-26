import React from 'react';
import { Icon } from './Icon.jsx';

/**
 * The one ask on a page. Pills are retired (14 Sep 2026): a board has no
 * rounded corners, so neither does the site. The primary ask is a square
 * accent block, the same shape as the deck's highlight run, and everything
 * secondary is a tracked mono link with a mark.
 *
 * `external` opens off-site and says so with the outward mark instead of the
 * arrow, so a link that leaves does not look like a link that navigates.
 * Nothing here moves on hover except the mark.
 */
export function Pill({ href = '#', label, ghost = false, small = false, external = false, block = false, className = '', onClick, children }) {
  const cls = ['w-ask', ghost && 'w-ask-ghost', className].filter(Boolean).join(' ');
  const style = block ? { width: '100%', justifyContent: 'space-between' } : undefined;
  const body = label ?? children;
  if (small) {
    return (
      <a className={['w-link', external && 'w-link-out', className].filter(Boolean).join(' ')} href={href} onClick={onClick}
        target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
        {body}
        <Icon name={external ? 'external' : 'arrow'} size={17} />
      </a>
    );
  }
  return (
    <a className={cls} href={href} onClick={onClick} style={style}
      target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
      {body}
      <Icon name={external ? 'external' : 'arrow'} size={20} />
    </a>
  );
}
