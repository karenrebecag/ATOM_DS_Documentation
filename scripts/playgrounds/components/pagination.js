import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'pagination.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-playground { max-width: 600px; }
    .sb-preview { min-height: 80px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); padding: 16px; overflow-x: auto; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="pg-preview"></div>
  </div>
  <script>
  (function(){
    const TOTAL=10;
    let current=1;

    const chevronsLeft='<svg viewBox="0 0 16 16" fill="none" width="16" height="16"><path d="M11 12L7 8l4-4M7 12L3 8l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const chevronLeft='<svg viewBox="0 0 16 16" fill="none" width="16" height="16"><path d="M10 12L6 8l4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const chevronRight='<svg viewBox="0 0 16 16" fill="none" width="16" height="16"><path d="M6 12l4-4-4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const chevronsRight='<svg viewBox="0 0 16 16" fill="none" width="16" height="16"><path d="M5 12l4-4-4-4M9 12l4-4-4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    function getPageNumbers(cur,total){
      if(total<=7)return Array.from({length:total},(_,i)=>i+1);
      const pages=[];
      if(cur<=4){for(let i=1;i<=5;i++)pages.push(i);pages.push('...');pages.push(total);}
      else if(cur>=total-3){pages.push(1);pages.push('...');for(let i=total-4;i<=total;i++)pages.push(i);}
      else{pages.push(1);pages.push('...');for(let i=cur-1;i<=cur+1;i++)pages.push(i);pages.push('...');pages.push(total);}
      return pages;
    }

    function render(){
      const pages=getPageNumbers(current,TOTAL);
      const navBtn=(icon,page,disabled,label)=>
        \`<button class="pagination__nav\${disabled?' pagination__nav--disabled':''}" type="button" data-page="\${page}" aria-label="\${label}" \${disabled?'disabled':''}>\${icon}</button>\`;
      const pageBtn=(p)=>p==='...'
        ?\`<span class="pagination__ellipsis">…</span>\`
        :\`<button class="pagination__item\${p===current?' pagination__item--active':''}" type="button" data-page="\${p}" aria-current="\${p===current?'page':false}" aria-label="Page \${p}">\${p}</button>\`;

      document.getElementById('pg-preview').innerHTML=\`<nav class="pagination" data-pagination aria-label="Pagination" role="navigation">\${navBtn(chevronsLeft,1,current===1,'First page')}\${navBtn(chevronLeft,current-1,current===1,'Previous page')}<div class="pagination__pages">\${pages.map(pageBtn).join('')}</div>\${navBtn(chevronRight,current+1,current===TOTAL,'Next page')}\${navBtn(chevronsRight,TOTAL,current===TOTAL,'Last page')}</nav>\`;

      document.getElementById('pg-preview').querySelectorAll('[data-page]').forEach(btn=>{
        btn.addEventListener('click',()=>{
          const p=Number(btn.dataset.page);
          if(p>=1&&p<=TOTAL&&p!==current){current=p;render();}
        });
      });
    }

    render();
  })();
  </script>`,
  });
}

export default { filename, generate };
