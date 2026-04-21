import { buildPage, animModuleScript, VERSIONS } from '../shared.js';

export const filename = 'link-button.html';

export function generate(versions = VERSIONS) {
  const { animations } = versions;
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 72px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); }
    .sb-chip-bool.active { background: var(--fg-default, #111); color: var(--bg-primary, #fff); border-color: var(--fg-default, #111); }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="lb-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Variant</label>
        <div class="sb-chips" id="lb-variants"></div>
      </div>
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="lb-sizes"></div>
      </div>
      <div class="sb-control-row">
        <label>Options</label>
        <div class="sb-chips">
          <button class="sb-chip-bool" id="lb-external">External</button>
          <button class="sb-chip-bool" id="lb-disabled">Disabled</button>
        </div>
      </div>
    </div>
  </div>
${animModuleScript(animations)}
  <script>
  (function(){
    const VARIANTS = ['primary','secondary','tertiary','danger-primary','danger-secondary','danger-tertiary'];
    const SIZES    = ['xs','s','m','l','xl'];
    const EXTERNAL_ICON = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-left:4px;flex-shrink:0"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
    let state = { variant:'primary', size:'m', external:false, disabled:false };
    let cleanupHover = null;

    function buildChips(id, items, activeIdx){
      document.getElementById(id).innerHTML = items.map((v,i)=>
        \`<button class="sb-chip\${i===activeIdx?' active':''}" data-value="\${v}">\${v}</button>\`
      ).join('');
    }
    buildChips('lb-variants', VARIANTS, 0);
    buildChips('lb-sizes', SIZES, 2);

    function labelWrap(text){
      const ext = state.external ? EXTERNAL_ICON : '';
      return \`<span class="link-button__label-wrap"><span class="link-button__label" data-button-label>\${text}\${ext}</span><span class="link-button__label link-button__label--clone" data-button-label-clone aria-hidden="true">\${text}\${ext}</span></span>\`;
    }

    function renderLink(){
      const { variant, size, external, disabled } = state;
      const cls = ['link-button',\`link-button--\${variant}\`,\`link-button--\${size}\`,disabled&&'link-button--disabled'].filter(Boolean).join(' ');
      const href = disabled ? '' : '#';
      const targetAttr = external ? 'target="_blank" rel="noopener noreferrer"' : '';
      const ariaAttr = disabled ? 'aria-disabled="true"' : '';
      return \`<a class="\${cls}" href="\${href}" data-hover-rotate \${targetAttr} \${ariaAttr} onclick="return false;">\${labelWrap('Learn More')}</a>\`;
    }

    function update(){
      if(cleanupHover){ cleanupHover(); cleanupHover=null; }
      const preview = document.getElementById('lb-preview');
      preview.innerHTML = renderLink();
      const anim = window.__atomAnimations;
      if(anim){
        anim.initRotateClones({scope:preview});
        anim.initRotateCalc({scope:preview});
        cleanupHover = anim.initHoverRotate({scope:preview});
      }
    }

    function bindChips(id,key){
      document.getElementById(id).addEventListener('click',e=>{
        const c=e.target.closest('.sb-chip'); if(!c)return;
        state[key]=c.dataset.value;
        document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));
        c.classList.add('active'); update();
      });
    }
    function bindBool(id,key){
      document.getElementById(id).addEventListener('click',e=>{
        state[key]=!state[key]; e.currentTarget.classList.toggle('active',state[key]); update();
      });
    }

    bindChips('lb-variants','variant'); bindChips('lb-sizes','size');
    bindBool('lb-external','external'); bindBool('lb-disabled','disabled');
    update();
    window.addEventListener('atom:animations-ready', update, {once:true});
  })();
  </script>`,
  });
}

export default { filename, generate };
