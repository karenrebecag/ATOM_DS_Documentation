import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'avatar-group.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 80px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="ag-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="ag-sizes">
          <button class="sb-chip" data-value="xs">xs</button>
          <button class="sb-chip" data-value="s">s</button>
          <button class="sb-chip active" data-value="m">m</button>
          <button class="sb-chip" data-value="l">l</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Max</label>
        <div class="sb-chips" id="ag-max">
          <button class="sb-chip" data-value="3">3</button>
          <button class="sb-chip active" data-value="4">4</button>
          <button class="sb-chip" data-value="5">5</button>
          <button class="sb-chip" data-value="7">7</button>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function(){
    const COLORS=['#6366f1','#ec4899','#f59e0b','#10b981','#3b82f6','#ef4444','#8b5cf6'];
    const INITIALS=['AB','CD','EF','GH','IJ','KL','MN'];
    let s={size:'m',max:4};
    function update(){
      const total=INITIALS.length;
      const visible=Math.min(s.max,total);
      const overflow=total-visible;
      let items='';
      for(let i=0;i<visible;i++){
        items+=\`<span class="avatar avatar--\${s.size} avatar--circle avatar--initials" data-avatar role="img" aria-label="\${INITIALS[i]}" style="background:\${COLORS[i%COLORS.length]};color:#fff;"><span class="avatar__initials" data-avatar-initials>\${INITIALS[i]}</span></span>\`;
      }
      if(overflow>0){
        items+=\`<span class="avatar avatar--\${s.size} avatar--circle avatar--initials" data-avatar role="img" aria-label="+\${overflow} more"><span class="avatar__initials" data-avatar-initials>+\${overflow}</span></span>\`;
      }
      document.getElementById('ag-preview').innerHTML=\`<div class="avatar-group avatar-group--\${s.size}" data-avatar-group>\${items}</div>\`;
    }
    function chips(id,key,parse){document.getElementById(id).addEventListener('click',e=>{const c=e.target.closest('.sb-chip');if(!c)return;s[key]=parse?parse(c.dataset.value):c.dataset.value;document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));c.classList.add('active');update();});}
    chips('ag-sizes','size');
    chips('ag-max','max',Number);
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
