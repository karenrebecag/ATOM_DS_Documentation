import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'radio.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 80px; display: flex; align-items: center; justify-content: center; gap: 24px; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); padding: 16px; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="radio-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="radio-sizes">
          <button class="sb-chip" data-value="s">s</button>
          <button class="sb-chip active" data-value="m">m</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>States</label>
        <div class="sb-chips">
          <button class="sb-chip-bool" id="radio-checked">Checked</button>
          <button class="sb-chip-bool" id="radio-disabled">Disabled</button>
          <button class="sb-chip-bool" id="radio-error">Error</button>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function(){
    const errorIcon='<svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 4a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 5zm0 6.5a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"/></svg>';
    let s={size:'m',checked:false,disabled:false,error:false};
    function update(){
      const cls=['radio',\`radio--\${s.size}\`,s.error?'radio--error':'',s.disabled?'radio--disabled':''].filter(Boolean).join(' ');
      const inputAttrs=[s.checked?'checked':'',s.disabled?'disabled':''].filter(Boolean).join(' ');
      const hint=s.error?\`<span class="radio__hint radio__hint--error">\${errorIcon} This field is required</span>\`:'';
      document.getElementById('radio-preview').innerHTML=\`
        <label class="\${cls}" data-radio><span class="radio__control"><input class="radio__input" type="radio" name="radio-demo" \${inputAttrs} readonly/><span class="radio__dot" aria-hidden="true"></span></span><span class="radio__label">Radio option\${hint}</span></label>
        <label class="\${cls}" data-radio><span class="radio__control"><input class="radio__input" type="radio" name="radio-demo" \${s.disabled?'disabled':''} readonly/><span class="radio__dot" aria-hidden="true"></span></span><span class="radio__label">Another option</span></label>\`;
    }
    function chips(id,key){document.getElementById(id).addEventListener('click',e=>{const c=e.target.closest('.sb-chip');if(!c)return;s[key]=c.dataset.value;document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));c.classList.add('active');update();});}
    function bool(id,key){document.getElementById(id).addEventListener('click',e=>{s[key]=!s[key];e.currentTarget.classList.toggle('active',s[key]);update();});}
    chips('radio-sizes','size');
    bool('radio-checked','checked');bool('radio-disabled','disabled');bool('radio-error','error');
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
