/* Deck lint — an ON-DEMAND check, not an auto-include.
   Run it from the console of a deck page:

     fetch('slides/deck-lint.js').then(r => r.text()).then(t => {
       window.__deckLintRan = false; new Function(t)();
       setTimeout(() => console.log(window.__deckLint), 600);
     });

   Do NOT add it as a <script src> in a DC helmet: that evaluates in a
   sandboxed realm whose `window` and `document` are not the page's, so the
   verdict never reaches the deck — and a silent gate reads as "clean", which
   is worse than no gate at all.

   Language-aware: reads `lang` on <html> and applies the Czech or English
   measures from guidelines/TYPESETTING.md. Advisory only — it reports, it
   does not change the page. The verdict lands on `window.__deckLint` and on
   `<html data-deck-lint>`.

   Two timing rules, learned the hard way:
   1. Measure AFTER the DC runtime has laid the boards out. Measuring early
      makes every full-bleed scrim look like a footer intrusion.
   2. Copy-level checks read `textContent`, never `innerHTML` — an unsettled
      `style` attribute serializes as `rgba(15,53,87,.97)`, which reads as a
      decimal comma and produces a phantom Czech-punctuation failure. */
(function () {
  function run() {
    /* single-run latch lives HERE, not in the IIFE: two triggers race below and
       whichever fires first wins, the other is a no-op. If a run throws, the
       latch is RELEASED so the losing trigger retries — otherwise a failure in
       the early run leaves window.__deckLint undefined, which reads as clean. */
    if (window.__deckLintRan) return;
    window.__deckLintRan = true;
    try { measure(); } catch (e) { window.__deckLintRan = false; window.__deckLint = ['lint: run failed — ' + e.message]; console.warn('[deck-lint] run failed, will retry', e); }
  }

  function measure() {
    const strip = el => (el.textContent || '').replace(/\s+/g, ' ').trim();
    const lang = (document.documentElement.lang || 'cs').toLowerCase().startsWith('en') ? 'en' : 'cs';
    const LIM = {
      cs: { claim: 70, claimN: 80, statement: 90, hookChars: 42, hookWords: 7, body: 120 },
      en: { claim: 80, claimN: 92, statement: 104, hookChars: 48, hookWords: 8, body: 135 },
    }[lang];

    const slides = [...document.querySelectorAll('.slide,.reel')];
    const out = [];
    let run_ = [];

    slides.forEach((s, i) => {
      const f = s.dataset.family;
      const lab = s.dataset.screenLabel || (s.querySelector('.fam') ? strip(s.querySelector('.fam')).slice(0, 2) : i + 1);

      /* rhythm: never three boards of one family together */
      if (f && run_.length && run_[run_.length - 1].f === f) run_.push({ f, lab }); else run_ = f ? [{ f, lab }] : [];
      if (run_.length === 3) out.push(`rhythm: three consecutive ${f} — ${run_.map(r => r.lab).join(', ')}`);

      /* measure, per language */
      s.querySelectorAll('.cl,.claim').forEach(c => {
        const n = strip(c).length, narrow = c.classList.contains('n');
        const cap = narrow ? LIM.claimN : LIM.claim;
        if (n > cap) out.push(`measure[${lang}]: ${narrow ? 'BESIDE ' : ''}claim ${n} chars (max ${cap}) on ${lab}`);
      });
      s.querySelectorAll('.st,.statement').forEach(c => {
        const n = strip(c).length;
        if (n > LIM.statement) out.push(`measure[${lang}]: statement ${n} chars (max ${LIM.statement}) on ${lab}`);
      });

      /* a board carries a claim or a statement, never both */
      if (s.querySelector('.cl,.claim') && s.querySelector('.st,.statement')) out.push(`composition: claim and statement on the same board — ${lab}`);

      /* lists cap at five */
      s.querySelectorAll('ul,ol').forEach(l => { if (l.children.length > 5) out.push(`list: ${l.children.length} items (max 5) on ${lab}`); });

      /* reel hook budget */
      s.querySelectorAll('.a-hook,.hook').forEach(c => {
        const t = strip(c), w = t.split(' ').filter(Boolean).length;
        if (w > LIM.hookWords || t.length > LIM.hookChars) out.push(`hook[${lang}]: ${w} words / ${t.length} chars (max ${LIM.hookWords}/${LIM.hookChars}) on ${lab}`);
      });

      /* weight rules (guidelines/TYPESETTING.md §4, 13 Sep 2026):
           ladder 300 / 400 / 500 / 600 — real cuts only, never 700+ or faux bold
           300 only at >= 60px on light, >= 100px on dark (thin strokes rasterise away)
           500 mono for tracked kickers, 400 mono for tabular data; no other mono weight
           same-size emphasis skips a weight (400 body -> 600 run), never 400 -> 500 */
      const dark = s.classList.contains('dark');
      s.querySelectorAll('*').forEach(e => {
        if (!(e.textContent || '').trim()) return;
        const cs = getComputedStyle(e);
        const w = parseInt(cs.fontWeight, 10), fs = parseFloat(cs.fontSize);
        const fam0 = (cs.fontFamily.split(',')[0] || '').replace(/['"]/g, '').trim();
        const isMono = /Geist Mono|monospace/.test(cs.fontFamily);
        /* faces (14 Sep 2026): Geist on claims and statements, Inter on running text */
        if (['cl', 'claim', 'st', 'statement'].some(c => e.classList.contains(c)) && fam0 !== 'Geist') out.push(`family: claim/statement resolves to ${fam0 || 'nothing'} on ${lab} — must be Geist`);
        if (['body', 'lead', 'bd', 'ld'].some(c => e.classList.contains(c)) && fam0 !== 'Inter') out.push(`family: body/lead resolves to ${fam0 || 'nothing'} on ${lab} — must be Inter`);
        if (w && ![300, 400, 500, 600].includes(w)) out.push(`weight: ${w} on ${lab} (ladder is 300/400/500/600) — ${(e.className || e.tagName).toString().slice(0, 20)}`);
        if (w === 300 && fs < (dark ? 100 : 60) && e.children.length === 0) out.push(`weight: 300 at ${Math.round(fs)}px on ${lab} — light needs >= ${dark ? 100 : 60}px on a ${dark ? 'dark' : 'light'} ground`);
        if (isMono && w && ![400, 500].includes(w) && e.children.length === 0) out.push(`weight: mono at ${w} on ${lab} — mono is 400 (data) or 500 (kicker) only`);
        if (w === 500 && e.tagName === 'B' && e.parentElement && parseInt(getComputedStyle(e.parentElement).fontWeight, 10) === 400 && Math.abs(parseFloat(getComputedStyle(e.parentElement).fontSize) - fs) < 1)
          out.push(`weight: inline emphasis at 500 inside 400 on ${lab} — same size must skip a weight (use 600)`);
        /* body floor (guidelines/TYPESETTING.md §4 rule 4b, 20 Sep 2026):
             26px on a normal board; 24px only on a reference board of 5+
             parallel items; nothing below 24px, and mono never below 19px. */
        const isBody = ['body', 'lead', 'bd', 'ld'].some(c => e.classList.contains(c));
        if (isBody && e.children.length === 0 && fs && fs < 24)
          out.push(`size: body at ${Math.round(fs)}px on ${lab} — floor is 26px (24px only on a reference board)`);
        else if (isBody && e.children.length === 0 && fs && fs < 26)
          out.push(`note: body at ${Math.round(fs)}px on ${lab} — dense-board exception, confirm it is a reference board of 5+ items`);
        if (isMono && e.children.length === 0 && fs && fs < 19)
          out.push(`size: mono at ${Math.round(fs)}px on ${lab} — mono floor is 19px`);

        /* a literal family written into an SVG label is drift; use the variables. */
        const inline = e.getAttribute && e.getAttribute('style');
        if (e.namespaceURI === 'http://www.w3.org/2000/svg' && inline && /font-family:\s*["']?(Inter|Geist)/.test(inline))
          out.push(`family: literal font-family in an SVG label on ${lab} — use var(--font-display) / var(--font-mono)`);
      });

      /* widows: a single word alone on the last line of a block. Measured from
         the BLOCK's own line boxes, not from its last text node — a block that
         ends in an inline tail (<b>, <span>, <a>) or wraps its copy in child
         elements has its final line inside a descendant, so measuring one text
         node reads a line too early or misses the block entirely. Every
         descendant word is Range-measured and matched against the bottom line,
         which treats a hard <br> and a soft wrap alike. */
      /* `.ld` is in this list because a deck may name its lead role `.ld`
         rather than `.lead`; without it a whole class of copy is never
         widow-checked and a clean gate reads as evidence it should not be. */
      s.querySelectorAll('.cl,.claim,.st,.statement,.sub,.sb,.body,.bd,.ld,.lead,.a-hook,.hook,.a-body,li').forEach(el => {
        const rg = document.createRange();
        rg.selectNodeContents(el);
        const rects = [...rg.getClientRects()].filter(r => r.width && r.height);
        if (rects.length < 2) return;
        const bottom = Math.max(...rects.map(r => Math.round(r.top)));
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
        const onLast = []; let total = 0, node;
        while ((node = walker.nextNode())) {
          const parts = node.textContent.split(/(\s+)/);
          let off = 0;
          for (const w of parts) {
            if (w.trim()) {
              const r = document.createRange();
              r.setStart(node, off); r.setEnd(node, off + w.length);
              const rect = r.getBoundingClientRect();
              if (rect.width) {
                total++;
                if (Math.abs(Math.round(rect.top) - bottom) < 4) onLast.push(w);
              }
            }
            off += w.length;
          }
        }
        if (total >= 4 && onLast.length === 1 && onLast[0].replace(/[^\p{L}\p{N}]/gu, '').length <= 14)
          out.push(`widow: "${onLast[0]}" alone on the last line of .${(el.className || '').split(' ')[0]} on ${lab}`);
      });

      /* the footer row is reserved. A full-bleed overlay (a scrim at inset:0)
         legitimately covers the whole board, footer included — excluded by
         comparing each candidate's rect to the board's own. */
      const foot = [...s.querySelectorAll('.ref,.pg')];
      if (foot.length) {
        const sb = s.getBoundingClientRect();
        const fullBleed = e => { const b = e.getBoundingClientRect(); return Math.abs(b.width - sb.width) < 2 && Math.abs(b.height - sb.height) < 2; };
        const others = [...s.querySelectorAll('.a,.scale .maj,.scale .row,.scale .hd,.fam')]
          .filter(e => !e.classList.contains('ref') && !e.classList.contains('pg') && !fullBleed(e));
        foot.forEach(fe => {
          const fb = fe.getBoundingClientRect();
          others.forEach(o => {
            if (o.contains(fe) || fe.contains(o)) return;
            const b = o.getBoundingClientRect();
            if (Math.min(fb.right, b.right) - Math.max(fb.left, b.left) > 1 && Math.min(fb.bottom, b.bottom) - Math.max(fb.top, b.top) > 1)
              out.push(`footer row: ${(o.className || o.tagName).toString().slice(0, 24)} overlaps ${fe.className} on ${lab}`);
          });
        });
      }
    });

    /* typography — copy only. textContent, never innerHTML: markup carries
       CSS colour values that read as decimal commas. */
    const copy = slides.map(s => s.textContent || '').join(' \u0000 ');

    /* the record: banned names (readme.md "Affiliations", SKILL.md §3) */
    const docText = (document.body && document.body.textContent) || copy;
    ['Geriatrická klinika', 'ČANT', 'Institut moderní výživy', 'FitNut', 'Domov Sue Ryder', 'Dietician'].forEach(n => {
      if (docText.includes(n)) out.push(`record: banned name "${n}" appears in the document`);
    });
    if (/\u2014/.test(copy)) out.push('typography: em dash found — house rule is an en dash with spaces, or no dash');
    if (/"[^"\u0000]{2,60}"/.test(copy)) out.push('typography: straight quotes found — use „Czech“ or “English” quotes');
    if (lang === 'cs') {
      const bare = copy.match(/(?:^|[\s(])([kaiosuvzKAIOSUVZ])[ ](?=\S)/g);
      if (bare && bare.length) out.push(`typography[cs]: ${bare.length} one-letter preposition(s) not bound with a non-breaking space`);
      if (/\d\.\d/.test(copy)) out.push('typography[cs]: decimal point found — Czech uses a comma');
      if (/\d%/.test(copy)) out.push('typography[cs]: percentage closed up — Czech needs a thin space (24 %)');
    } else {
      if (/\d,\d/.test(copy)) out.push('typography[en]: decimal comma found — English uses a point');
      if (/\d\u2009%/.test(copy)) out.push('typography[en]: thin space before % — English closes it up (24%)');
    }

    /* Publish the verdict in two places: the global for console use, and an
       attribute on <html> so it is readable from any scope (a nested preview
       frame's global is not always the one a probe sees). */
    window.__deckLint = out;
    try {
      document.documentElement.setAttribute('data-deck-lint', out.length ? String(out.length) : '0');
      document.documentElement.setAttribute('data-deck-lint-detail', out.join(' | ').slice(0, 900));
    } catch (e) {}
    if (out.length) console.warn(`[deck-lint · ${lang}]\n` + out.join('\n'));
    else console.info(`[deck-lint · ${lang}] clean: ${slides.length} boards`);
  }

  /* Two triggers, raced. The nested rAF gives accurate geometry once the DC
     runtime has laid the boards out; the timeout guarantees a verdict even in
     a hidden or throttled iframe, where rAF never fires. Never leave
     window.__deckLint undefined — undefined reads as "clean". */
  /* Three triggers, raced, and NONE of them depends on the `load` event alone:
     a helmet <script src> is injected dynamically, so `defer` does not apply
     and `load` may already have fired before this file evaluates — waiting on
     it leaves the gate silent forever. rAF gives accurate geometry when the
     page is visibly painting; the timeouts guarantee a verdict when it is not.
     Never leave the verdict missing — missing reads as "clean". */
  const start = () => {
    requestAnimationFrame(() => requestAnimationFrame(run));
    setTimeout(run, 400);
    setTimeout(run, 1200);
  };
  start();
  if (document.readyState !== 'complete') window.addEventListener('load', start, { once: true });
})();
