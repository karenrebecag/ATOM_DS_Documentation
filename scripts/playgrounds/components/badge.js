import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'badge.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 80px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); }
    input[type="range"] { cursor: pointer; }
    .sb-range-row { display: flex; align-items: center; gap: 8px; }
    .sb-range-val { font-size: 12px; font-weight: 600; color: var(--fg-default, #374151); min-width: 28px; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="bg-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Count</label>
        <div class="sb-range-row">
          <input type="range" id="bg-count" min="0" max="200" value="5" style="width:160px"/>
          <span class="sb-range-val" id="bg-count-val">5</span>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Context</label>
        <div class="sb-chips" id="bg-contexts">
          <button class="sb-chip active" data-value="default">default</button>
          <button class="sb-chip" data-value="inbox">inbox</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Type</label>
        <div class="sb-chips" id="bg-types">
          <button class="sb-chip active" data-value="neutral">neutral</button>
          <button class="sb-chip" data-value="inbox">inbox</button>
          <button class="sb-chip" data-value="info">info</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>State</label>
        <div class="sb-chips" id="bg-states">
          <button class="sb-chip active" data-value="default">default</button>
          <button class="sb-chip" data-value="focused">focused</button>
          <button class="sb-chip" data-value="subtle">subtle</button>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function(){
    let s={count:5,context:'default',type:'neutral',state:'default'};
    function getDisplay(count,context){
      return context==='inbox'?(count>=50?'+50':String(count)):(count>99?'99+':String(count));
    }
    function update(){
      const p=document.getElementById('bg-preview');
      if(s.count<=0){p.innerHTML='<span style="color:#999;font-size:12px;">(count = 0, badge hidden)</span>';return;}
      const display=getDisplay(s.count,s.context);
      p.innerHTML=\`<span class="badge badge--\${s.type} badge--\${s.state}" data-badge role="status" aria-label="\${s.count} notifications"><span class="badge__text" data-badge-text>\${display}</span></span>\`;
    }
    function chips(id,key){document.getElementById(id).addEventListener('click',e=>{const c=e.target.closest('.sb-chip');if(!c)return;s[key]=c.dataset.value;document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));c.classList.add('active');update();});}
    const rangeEl=document.getElementById('bg-count');
    const valEl=document.getElementById('bg-count-val');
    rangeEl.addEventListener('input',()=>{s.count=Number(rangeEl.value);valEl.textContent=rangeEl.value;update();});
    chips('bg-contexts','context');chips('bg-types','type');chips('bg-states','state');
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
