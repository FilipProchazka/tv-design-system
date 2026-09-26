// Loads the bound Tereza Vágnerová design system into this deck.
(() => {
  const base = '_ds/tereza-v-gnerov-design-system-360dc43d-1f56-4e0b-b0da-b400db62abef';
  for (const p of ["tokens/fonts.css","tokens/colors.css","tokens/typography.css","tokens/spacing.css","tokens/motion.css","tokens/dataviz.css","tokens/signal.css","tokens/wrap.css","tokens/base.css","tokens/components.css","styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src);
  document.head.appendChild(s);
})();
