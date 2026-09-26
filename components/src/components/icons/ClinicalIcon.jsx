import React from 'react';

/**
 * Lucide, rendered in her hand.
 *
 * The brand set (`Icon`) is hers: eight topic marks and nine interface marks,
 * drawn for the site. It is deliberately small and must stay that way — a
 * topic mark means something. When a slide or a card needs a plain
 * illustrative glyph (a stethoscope, a pill, a moon), it comes from Lucide,
 * which is drawn on the same 24px grid with round caps and joins, so at
 * stroke 1.5 it is indistinguishable in construction from her own marks.
 *
 * Lucide is ISC-licensed and loaded from a pinned CDN build; see
 * guidelines/ICONOGRAPHY.md for the curated clinical list and the rule for
 * when to use this instead of `Icon`.
 */
const pascal = (n) => n.split(/[-_]/).map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('');

function render(node, key) {
  if (typeof node === 'string') return node;
  const [tag, attrs, children] = node;
  const props = { key, ...attrs };
  if (attrs && attrs.class) { props.className = attrs.class; delete props.class; }
  return React.createElement(tag, props, Array.isArray(children) ? children.map(render) : undefined);
}

export function ClinicalIcon({ name, size = 24, strokeWidth = 1.5, className = '', title, style }) {
  const set = typeof window !== 'undefined' && window.lucide && window.lucide.icons;
  const icon = set ? set[pascal(name)] : null;

  // Absence is shown, not swallowed: a dashed square is visible in the design.
  if (!icon) {
    return (
      <span className={className} aria-hidden="true" style={{ display: 'inline-block', width: size, height: size, border: '1.5px dashed currentColor', opacity: 0.45, borderRadius: 2, ...style }} />
    );
  }
  const children = Array.isArray(icon) ? icon[2] : icon.children || [];
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"
      role={title ? 'img' : undefined} aria-hidden={title ? undefined : 'true'} focusable="false" style={style}>
      {title ? <title>{title}</title> : null}
      {children.map(render)}
    </svg>
  );
}
