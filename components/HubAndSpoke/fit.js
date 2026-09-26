/* A card is the board alone — the usage note now lives in the card's notes
   field, not in the page. Scaling with `zoom` on the body keeps the board in
   one flow; width drives the scale. */
(function(){function fit(){var b=document.querySelector('.board,.board-reel');if(!b)return;var W=b.classList.contains('board-reel')?1080:1920;var s=Math.min(1,(window.innerWidth||W)/W);document.body.style.zoom=s;document.body.style.width='';document.body.style.height=''}window.addEventListener('resize',fit);window.addEventListener('load',fit);fit()})();
