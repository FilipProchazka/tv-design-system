// Loads the design system into this template. In a consuming project, point
// base at the bound DS folder relative to this file (e.g. '_ds/<folder>' at
// the project root, '../_ds/<folder>' one level down). One line to edit.
(() => {
  const base = '../../_ds/tereza-v-gnerov-design-system-360dc43d-1f56-4e0b-b0da-b400db62abef';
  for (const p of ["styles.css"]) {
    const l = document.createElement('link');
    l.rel = 'stylesheet'; l.href = base + '/' + p;
    document.head.appendChild(l);
  }
  const s = document.createElement('script');
  s.src = base + '/_ds_bundle.js';
  s.onerror = () => console.error('ds-base.js: failed to load ' + s.src + ' - point the base line in ds-base.js at the bound _ds/<folder> tree relative to this page');
  document.head.appendChild(s);
})();
