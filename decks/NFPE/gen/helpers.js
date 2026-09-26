(()=>{// Slide generator helpers (author-time only; output is static HTML)
const S = {
  base: 'overflow:hidden;background:var(--surface);color:var(--ink);font-family:var(--font-body)',
  kicker: 'font-family:var(--font-mono);font-weight:500;font-size:var(--type-kicker);letter-spacing:.13em;text-transform:uppercase;color:var(--accent)',
  kickerMuted: 'font-family:var(--font-mono);font-weight:500;font-size:var(--type-kicker);letter-spacing:.13em;text-transform:uppercase;color:var(--muted)',
  claim: 'font-family:var(--font-display);font-weight:400;font-size:var(--type-claim);line-height:1.11;letter-spacing:-.024em;text-wrap:pretty',
  claimSm: 'font-family:var(--font-display);font-weight:400;font-size:var(--type-claim-sm);line-height:1.11;letter-spacing:-.024em;text-wrap:pretty',
  divider: 'font-family:var(--font-display);font-weight:300;font-size:var(--type-divider);line-height:1.06;letter-spacing:-.028em',
  sub: 'font-family:var(--font-body);font-size:var(--type-body);line-height:1.5;color:var(--muted)',
  body: 'font-family:var(--font-body);font-size:var(--type-body);line-height:1.5',
  small: 'font-family:var(--font-body);font-size:var(--type-small);line-height:1.5',
  h3: 'font-family:var(--font-display);font-weight:500;font-size:32px;line-height:1.22;letter-spacing:-.014em',
};
function cz(t){ // Czech typography: bind one-letter prepositions; no em dashes
  return String(t).replace(/(^|[\s(])([KkSsVvZzAaIiOoUu]) /g,'$1$2&nbsp;').replace(/—/g,'–');
}
function esc(t){return String(t).replace(/&(?!nbsp;|amp;|lt;|gt;|#)/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
function txt(t){return cz(esc(t));}
function sec(label, notes, inner, dark){
  return `<section class="t-petrol${dark?' dark':''}" data-label="${esc(label)}" data-speaker-notes="${esc(notes||'')}" style="${S.base}">${inner}</section>\n`;
}
function footer(part, src){
  return `<div style="position:absolute;left:var(--pad-x);bottom:56px;${S.kickerMuted}">${txt(part)}</div>`+
    (src?`<div style="position:absolute;right:var(--pad-x);bottom:56px;font-family:var(--font-mono);font-size:19px;color:var(--muted)">${txt(src)}</div>`:'');
}
function claimTop(text, small){
  return `<div style="position:absolute;left:var(--pad-x);top:var(--pad-top);width:1560px;${small?S.claimSm:S.claim}">${txt(text)}</div>`;
}
// Cover
function cover(o){
  return sec(o.label,o.notes,
`<img src="${o.img}" alt="" style="position:absolute;left:1180px;top:0;width:740px;height:1080px;object-fit:cover;object-position:50% 20%">
<div style="position:absolute;inset:0;background:linear-gradient(90deg,#0E3A36 0%,#0E3A36 58%,rgba(14,58,54,.7) 70%,rgba(14,58,54,0) 100%)"></div>
<img src="assets/sig-mint.png" alt="" style="position:absolute;left:120px;top:96px;width:196px">
<div style="position:absolute;right:120px;top:100px;width:560px;text-align:right;font-family:var(--font-body);font-size:22px;line-height:1.62;color:var(--muted)">${txt(o.aff)}</div>
<div style="position:absolute;left:120px;bottom:104px;width:1100px">
<div style="${S.kicker}">${txt(o.kicker)}</div>
<div style="font-family:var(--font-display);font-weight:300;font-size:104px;line-height:1.06;letter-spacing:-.028em;margin-top:40px">${cz(o.title)}</div>
<div style="font-family:var(--font-display);font-weight:400;font-size:var(--type-sub);line-height:1.22;margin-top:32px;color:var(--muted)">${txt(o.sub)}</div>
<div style="font-family:var(--font-body);font-weight:500;font-size:28px;margin-top:44px">${txt(o.speaker)}</div>
</div>`,true);
}
function divider(num, title, sub, notes){
  return sec(`Část ${num}`, notes,
`<div style="position:absolute;left:var(--pad-x);top:var(--pad-top);${S.kicker}">Část ${num}</div>
<div style="position:absolute;left:var(--pad-x);top:352px;width:1680px;height:576px;display:flex;flex-direction:column;justify-content:center">
<div style="${S.divider};max-width:1400px">${cz(title)}</div>
<div style="${S.sub};margin-top:48px;max-width:1100px">${txt(sub)}</div>
</div>
<img src="assets/sig-mint.png" alt="" style="position:absolute;right:120px;bottom:120px;width:168px;opacity:.9">`,true);
}
function statement(label, title, sub, notes){
  return sec(label, notes,
`<div style="position:absolute;left:var(--pad-x);top:352px;width:1680px;${S.divider}">${cz(title)}</div>
<div style="position:absolute;left:var(--pad-x);top:720px;width:1300px;${S.sub}">${txt(sub)}</div>
<img src="assets/sig-mint.png" alt="" style="position:absolute;right:120px;bottom:120px;width:168px;opacity:.9">`,true);
}
// Table slide: cols=[{h,w}], rows=[[cell,...]], first col emphasised. group rows: {group:'HAIR'}
function table(o){
  const fs = o.fs||'var(--type-table)';
  const thead = `<tr>${o.cols.map(c=>`<th style="text-align:left;padding:14px 18px;font-family:var(--font-mono);font-weight:500;font-size:19px;letter-spacing:.13em;text-transform:uppercase;color:var(--onacc);background:var(--accent);${c.w?`width:${c.w}px;`:''}">${txt(c.h)}</th>`).join('')}</tr>`;
  let i=0;
  const body = o.rows.map(r=>{
    if(r.group) return `<tr><td colspan="${o.cols.length}" style="padding:10px 18px;font-family:var(--font-mono);font-weight:500;font-size:19px;letter-spacing:.13em;text-transform:uppercase;color:var(--accent);background:var(--tint);border-top:1px solid var(--rule)">${txt(r.group)}</td></tr>`;
    const bg = (i++%2)?'background:var(--tint);':'';
    return `<tr>${r.map((c,j)=>`<td style="vertical-align:top;padding:${o.pad||'12px'} 18px;font-family:var(--font-body);font-size:${fs};line-height:1.35;${bg}border-top:1px solid var(--rule);${j===0?'font-weight:500;color:var(--ink)':'color:var(--ink)'}">${cz(c)}</td>`).join('')}</tr>`;
  }).join('');
  return `<table style="position:absolute;left:var(--pad-x);top:${o.top||300}px;width:1680px;border-collapse:collapse;text-align:left">${thead}${body}</table>`;
}
function tableSlide(o){
  return sec(o.label,o.notes, claimTop(o.claim, o.small!==false) + table(o) + (o.note?`<div style="position:absolute;left:var(--pad-x);bottom:104px;width:1680px;${S.small};color:var(--muted);font-style:italic">${txt(o.note)}</div>`:'') + footer(o.part,o.src));
}
// Photo slide: photos=[{src,cap}], cols, tips=[...]
function photoSlide(o){
  const n=o.photos.length, cols=o.cols||Math.min(n,4), rows=Math.ceil(n/cols);
  const tipsH = o.tips?o.tips.reduce((a,t)=>a+Math.ceil(t.length/150)*34+10,0)+16:0;
  const top = 300+tipsH;
  const avail = 958-top; const gap=28;
  const rowH = (avail-(rows-1)*gap-rows*44)/rows;
  const tips = o.tips?`<div style="position:absolute;left:var(--pad-x);top:296px;width:1680px;display:flex;flex-direction:column;gap:6px">${o.tips.map(t=>`<div style="display:flex;gap:18px;font-family:var(--font-body);font-size:var(--type-table);line-height:1.42;color:var(--muted)"><span style="color:var(--accent)">·</span><span>${txt(t)}</span></div>`).join('')}</div>`:'';
  const grid = `<div style="position:absolute;left:var(--pad-x);top:${top}px;width:1680px;display:grid;grid-template-columns:repeat(${cols},minmax(0,1fr));gap:${gap}px">${o.photos.map(p=>`<figure style="margin:0;display:flex;flex-direction:column;gap:12px"><img src="photos/${p.src}.jpg" alt="${esc(p.cap)}" style="width:100%;height:${Math.round(rowH)}px;object-fit:cover;object-position:${p.pos||'50% 30%'};border-radius:16px;background:var(--tint)"><figcaption style="font-family:var(--font-mono);font-size:22px;letter-spacing:.02em;color:var(--ink)">${txt(p.cap)}</figcaption></figure>`).join('')}</div>`;
  return sec(o.label,o.notes, claimTop(o.claim,true)+tips+grid+footer(o.part,o.src));
}
// Cards slide: items=[{n,h,p}]
function cards(o){
  const cols=o.cols||3;
  return sec(o.label,o.notes, claimTop(o.claim,o.small)+
`<div style="position:absolute;left:var(--pad-x);top:${o.top||352}px;width:1680px;display:grid;grid-template-columns:repeat(${cols},minmax(0,1fr));gap:${o.gap||40}px">${o.items.map(it=>`<div style="display:flex;flex-direction:column;gap:18px;padding:32px 34px;border:1px solid var(--rule);border-radius:16px;background:var(--surface)">${it.n?`<div style="font-family:var(--font-mono);font-size:19px;letter-spacing:.13em;text-transform:uppercase;color:var(--accent)">${txt(it.n)}</div>`:''}<div style="${S.h3}">${txt(it.h)}</div><div style="${S.small};color:var(--muted)">${cz(it.p)}</div></div>`).join('')}</div>`+footer(o.part,o.src));
}
// Two-column text slide: left title/body, right list
function twoCol(o){
  return sec(o.label,o.notes, claimTop(o.claim,o.small)+
`<div style="position:absolute;left:var(--pad-x);top:${o.top||340}px;width:1680px;display:grid;grid-template-columns:${o.grid||'1fr 1fr'};gap:96px;align-items:start">
<div style="display:flex;flex-direction:column;gap:${o.gap||28}px">${o.left}</div>
<div style="display:flex;flex-direction:column;gap:${o.gap||28}px">${o.right}</div></div>`+footer(o.part,o.src));
}
function bullets(arr, size){return arr.map(t=>`<div style="display:flex;gap:20px;${size||S.body}"><span style="color:var(--accent);flex:none">·</span><span>${cz(t)}</span></div>`).join('');}
function para(t,style){return `<div style="${style||S.body}">${cz(t)}</div>`;}
function h3(t){return `<div style="${S.h3}">${txt(t)}</div>`;}

return {S,cz,esc,txt,sec,footer,claimTop,cover,divider,statement,table,tableSlide,photoSlide,cards,twoCol,bullets,para,h3};})()