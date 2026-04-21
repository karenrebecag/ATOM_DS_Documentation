import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'toggle.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 80px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); padding: 16px; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="tgl-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="tgl-sizes">
          <button class="sb-chip active" data-value="s">s</button>
          <button class="sb-chip" data-value="m">m</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>States</label>
        <div class="sb-chips">
          <button class="sb-chip-bool" id="tgl-checked">Checked</button>
          <button class="sb-chip-bool" id="tgl-disabled">Disabled</button>
          <button class="sb-chip-bool" id="tgl-error">Error</button>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function(){
    const errorIcon='<svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 5zm0 6.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"/></svg>';
    let s={size:'s',checked:false,disabled:false,error:false};
    function update(){
      const cls=['toggle',\`toggle--\${s.size}\`,s.error?'toggle--error':'',s.disabled?'toggle--disabled':''].filter(Boolean).join(' ');
      const inputAttrs=[s.checked?'checked':'',s.disabled?'disabled':''].filter(Boolean).join(' ');
      const hint=s.error?\`<span class="toggle__hint toggle__hint--error">\${errorIcon} This setting has an error</span>\`:'';
      document.getElementById('tgl-preview').innerHTML=\`<label class="\${cls}" data-toggle><span class="toggle__control"><input class="toggle__input" type="checkbox" role="switch" aria-checked="\${s.checked}" \${inputAttrs} readonly/><span class="toggle__track" aria-hidden="true"><span class="toggle__thumb"></span></span></span><span class="toggle__label">Enable feature\${hint}</span></label>\`;
    }
    function chips(id,key){document.getElementById(id).addEventListener('click',e=>{const c=e.target.closest('.sb-chip');if(!c)return;s[key]=c.dataset.value;document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));c.classList.add('active');update();});}
    function bool(id,key){document.getElementById(id).addEventListener('click',e=>{s[key]=!s[key];e.currentTarget.classList.toggle('active',s[key]);update();});}
    chips('tgl-sizes','size');
    bool('tgl-checked','checked');bool('tgl-disabled','disabled');bool('tgl-error','error');
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
