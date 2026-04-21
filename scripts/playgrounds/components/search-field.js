import { buildPage, formsModuleScript, VERSIONS } from '../shared.js';

export const filename = 'search-field.html';

export function generate(versions = VERSIONS) {
  const { animations } = versions;
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 80px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); padding: 16px; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="sf-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="sf-sizes">
          <button class="sb-chip" data-value="s">s</button>
          <button class="sb-chip active" data-value="m">m</button>
          <button class="sb-chip" data-value="l">l</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>States</label>
        <div class="sb-chips">
          <button class="sb-chip-bool" id="sf-disabled">Disabled</button>
          <button class="sb-chip-bool" id="sf-clear">Show clear</button>
        </div>
      </div>
    </div>
  </div>
${formsModuleScript(animations)}
  <script>
  (function(){
    const searchIcon='<svg viewBox="0 0 16 16" fill="none" width="16" height="16"><circle cx="7" cy="7" r="4.5" stroke="currentColor" stroke-width="1.5"/><path d="M10.5 10.5L14 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>';
    const clearIcon='<svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" fill="none"/></svg>';
    let s={size:'m',disabled:false,showClear:false};
    let formCleanup=null;

    function update(){
      const disAttr=s.disabled?'disabled':'';
      const clearBtn=s.showClear?\`<button class="search-field__clear" type="button" aria-label="Clear search" \${disAttr}>\${clearIcon}</button>\`:'';
      document.getElementById('sf-preview').innerHTML=\`<div class="search-field search-field--\${s.size}\${s.disabled?' search-field--disabled':''}" data-search-field style="width:100%;max-width:320px;"><span class="search-field__icon">\${searchIcon}</span><input class="search-field__input" type="search" placeholder="Search…" aria-label="Search" \${disAttr}/>\${clearBtn}</div>\`;
      if(formCleanup){formCleanup();formCleanup=null;}
      const forms=window.__atomForms;
      if(forms) formCleanup=forms.initFormValidation({scope:document.getElementById('sf-preview')})||null;
    }

    function chips(id,key){document.getElementById(id).addEventListener('click',e=>{const c=e.target.closest('.sb-chip');if(!c)return;s[key]=c.dataset.value;document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));c.classList.add('active');update();});}
    function bool(id,key){document.getElementById(id).addEventListener('click',e=>{s[key]=!s[key];e.currentTarget.classList.toggle('active',s[key]);update();});}

    chips('sf-sizes','size');
    bool('sf-disabled','disabled');bool('sf-clear','showClear');
    window.addEventListener('atom:forms-ready',update,{once:true});
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
