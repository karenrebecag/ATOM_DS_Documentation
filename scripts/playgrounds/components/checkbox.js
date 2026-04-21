import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'checkbox.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 80px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); padding: 16px; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="cb-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="cb-sizes">
          <button class="sb-chip" data-value="s">s</button>
          <button class="sb-chip active" data-value="m">m</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>States</label>
        <div class="sb-chips">
          <button class="sb-chip-bool" id="cb-checked">Checked</button>
          <button class="sb-chip-bool" id="cb-indeterminate">Indeterminate</button>
          <button class="sb-chip-bool" id="cb-error">Error</button>
          <button class="sb-chip-bool" id="cb-disabled">Disabled</button>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function(){
    const checkSvg='<svg class="checkbox__check" viewBox="0 0 12 10" fill="none"><path d="M1 5.5L4 8.5L11 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const minusSvg='<svg class="checkbox__minus" viewBox="0 0 12 2" fill="none"><path d="M1 1H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    let s={size:'m',checked:false,indeterminate:false,error:false,disabled:false};
    function update(){
      const cls=['checkbox',\`checkbox--\${s.size}\`,s.error?'checkbox--error':'',s.disabled?'checkbox--disabled':''].filter(Boolean).join(' ');
      const inputAttrs=[s.checked?'checked':'',s.disabled?'disabled':'',s.indeterminate?'data-indeterminate':'','readonly'].filter(Boolean).join(' ');
      document.getElementById('cb-preview').innerHTML=\`<label class="\${cls}" data-checkbox><span class="checkbox__control"><input class="checkbox__input" type="checkbox" \${inputAttrs}/><span class="checkbox__box" aria-hidden="true">\${checkSvg}\${minusSvg}</span></span><span class="checkbox__label">Checkbox label</span></label>\`;
    }
    function chips(id,key){document.getElementById(id).addEventListener('click',e=>{const c=e.target.closest('.sb-chip');if(!c)return;s[key]=c.dataset.value;document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));c.classList.add('active');update();});}
    function bool(id,key){document.getElementById(id).addEventListener('click',e=>{s[key]=!s[key];e.currentTarget.classList.toggle('active',s[key]);update();});}
    chips('cb-sizes','size');
    bool('cb-checked','checked');bool('cb-indeterminate','indeterminate');bool('cb-error','error');bool('cb-disabled','disabled');
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
