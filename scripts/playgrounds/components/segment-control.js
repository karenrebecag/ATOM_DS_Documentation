import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'segment-control.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 80px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); padding: 16px; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="sc-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="sc-sizes">
          <button class="sb-chip" data-value="xs">xs</button>
          <button class="sb-chip" data-value="s">s</button>
          <button class="sb-chip active" data-value="m">m</button>
          <button class="sb-chip" data-value="l">l</button>
          <button class="sb-chip" data-value="xl">xl</button>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function(){
    const ITEMS=['Day','Week','Month','Year'];
    let s={size:'m',selected:0};

    function positionIndicator(control){
      const selected=control.querySelector('.segment-control__item--selected');
      const indicator=control.querySelector('.segment-control__indicator');
      if(!selected||!indicator)return;
      const {offsetLeft,offsetWidth}=selected;
      indicator.style.left=offsetLeft+'px';
      indicator.style.width=offsetWidth+'px';
    }

    function render(){
      const items=ITEMS.map((item,i)=>
        \`<button class="segment-control__item\${i===s.selected?' segment-control__item--selected':''}" type="button" data-segment-item data-index="\${i}" aria-pressed="\${i===s.selected}">\${item}</button>\`
      ).join('');
      document.getElementById('sc-preview').innerHTML=\`<div class="segment-control segment-control--\${s.size}" data-segment-control style="width:100%;max-width:340px;"><div class="segment-control__indicator" data-segment-indicator></div>\${items}</div>\`;
      const control=document.getElementById('sc-preview').querySelector('[data-segment-control]');
      positionIndicator(control);
      control.addEventListener('click',e=>{
        const btn=e.target.closest('[data-segment-item]');
        if(!btn)return;
        s.selected=Number(btn.dataset.index);
        control.querySelectorAll('[data-segment-item]').forEach((b,i)=>{
          b.classList.toggle('segment-control__item--selected',i===s.selected);
          b.setAttribute('aria-pressed',String(i===s.selected));
        });
        positionIndicator(control);
      });
    }

    document.getElementById('sc-sizes').addEventListener('click',e=>{
      const c=e.target.closest('.sb-chip');if(!c)return;
      s.size=c.dataset.value;
      document.querySelectorAll('#sc-sizes .sb-chip').forEach(x=>x.classList.remove('active'));
      c.classList.add('active');
      render();
    });

    render();
    window.addEventListener('load',()=>{
      const control=document.getElementById('sc-preview').querySelector('[data-segment-control]');
      if(control) positionIndicator(control);
    });
  })();
  </script>`,
  });
}

export default { filename, generate };
