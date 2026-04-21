import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'divider.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 80px; display: flex; flex-direction: column; gap: 16px; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); padding: 16px; }
    .sb-range-row { display: flex; align-items: center; gap: 8px; }
    .sb-range-val { font-size: 12px; font-weight: 600; color: var(--fg-default, #374151); min-width: 36px; }
    input[type="range"] { cursor: pointer; width: 160px; }
    .preview-text { font-size: 14px; color: var(--fg-default, #374151); }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="div-preview">
      <p class="preview-text">Above divider content</p>
      <hr class="divider" data-divider id="div-el" style="opacity:1"/>
      <p class="preview-text">Below divider content</p>
    </div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Opacity</label>
        <div class="sb-range-row">
          <input type="range" id="div-opacity" min="0" max="1" step="0.05" value="1"/>
          <span class="sb-range-val" id="div-opacity-val">1</span>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function(){
    const slider=document.getElementById('div-opacity');
    const val=document.getElementById('div-opacity-val');
    const el=document.getElementById('div-el');
    slider.addEventListener('input',()=>{
      const v=parseFloat(slider.value).toFixed(2);
      val.textContent=v;
      el.style.opacity=v;
    });
  })();
  </script>`,
  });
}

export default { filename, generate };
