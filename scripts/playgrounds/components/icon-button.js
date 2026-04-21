import { buildPage, animModuleScript, VERSIONS } from '../shared.js';

export const filename = 'icon-button.html';

const ICON = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 17.5C14.5899 17.5 17.5 14.5899 17.5 11C17.5 7.41015 14.5899 4.5 11 4.5C7.41015 4.5 4.5 7.41015 4.5 11C4.5 14.5899 7.41015 17.5 11 17.5Z" stroke="currentColor"/><path d="M13.5 11H8.5" stroke="currentColor" stroke-miterlimit="10"/><path d="M11 13.5V8.5" stroke="currentColor" stroke-miterlimit="10"/><path d="M20.4 20.5L15.5 15.7" stroke="currentColor"/></svg>';

export function generate(versions = VERSIONS) {
  const { animations } = versions;
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 72px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="ib-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Variant</label>
        <div class="sb-chips" id="ib-variants"></div>
      </div>
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="ib-sizes"></div>
      </div>
      <div class="sb-control-row">
        <label>States</label>
        <div class="sb-chips">
          <button class="sb-chip-bool" id="ib-loading">Loading</button>
          <button class="sb-chip-bool" id="ib-disabled">Disabled</button>
        </div>
      </div>
    </div>
  </div>
${animModuleScript(animations)}
  <script>
  (function(){
    const VARIANTS = ['primary','secondary','tertiary','danger-primary','danger-secondary','danger-tertiary'];
    const SIZES    = ['xs','s','m','l','xl'];
    const ICON = '${ICON}';
    let state = { variant:'primary', size:'m', loading:false, disabled:false };
    let cleanupHover = null;

    function buildChips(id, items, activeIdx){
      document.getElementById(id).innerHTML = items.map((v,i)=>
        \`<button class="sb-chip\${i===activeIdx?' active':''}" data-value="\${v}">\${v}</button>\`
      ).join('');
    }
    buildChips('ib-variants', VARIANTS, 0);
    buildChips('ib-sizes', SIZES, 2);

    function renderBtn(){
      const { variant, size, loading, disabled } = state;
      const cls = ['icon-button',\`icon-button--\${variant}\`,\`icon-button--\${size}\`,disabled&&'icon-button--disabled',loading&&'icon-button--loading'].filter(Boolean).join(' ');
      const disabledAttrs = (disabled||loading) ? 'disabled aria-disabled="true"' : '';
      const busyAttr = loading ? 'aria-busy="true"' : '';
      return \`<button class="\${cls}" data-icon-button data-hover-rotate type="button" aria-label="Settings" \${disabledAttrs} \${busyAttr}>
        <span class="icon-button__icon-wrap">
          <span class="icon-button__icon" data-icon-button-icon>\${loading?'':ICON}</span>
          <span class="icon-button__icon icon-button__icon--clone" data-icon-button-icon-clone aria-hidden="true">\${loading?'':ICON}</span>
        </span>
        \${loading?\`<span class="icon-button__loader" aria-hidden="true"><span class="icon-button__spinner" data-button-spinner></span></span>\`:''}
      </button>\`;
    }

    function update(){
      if(cleanupHover){ cleanupHover(); cleanupHover=null; }
      const preview = document.getElementById('ib-preview');
      preview.innerHTML = renderBtn();
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

    bindChips('ib-variants','variant'); bindChips('ib-sizes','size');
    bindBool('ib-loading','loading'); bindBool('ib-disabled','disabled');
    update();
    window.addEventListener('atom:animations-ready', update, {once:true});
  })();
  </script>`,
  });
}

export default { filename, generate };
