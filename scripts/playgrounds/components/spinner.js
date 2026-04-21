import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'spinner.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 80px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="sp-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="sp-sizes">
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
    let s={size:'m'};
    function update(){
      document.getElementById('sp-preview').innerHTML=\`<span class="spinner spinner--\${s.size}" data-spinner role="status" aria-label="Loading"></span>\`;
    }
    document.getElementById('sp-sizes').addEventListener('click',e=>{
      const c=e.target.closest('.sb-chip');if(!c)return;
      s.size=c.dataset.value;
      document.querySelectorAll('#sp-sizes .sb-chip').forEach(x=>x.classList.remove('active'));
      c.classList.add('active');
      update();
    });
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
