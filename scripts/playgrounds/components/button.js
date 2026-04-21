import { buildPage, animModuleScript, VERSIONS } from '../shared.js';

export const filename = 'button.html';

export function generate(versions = VERSIONS) {
  const { animations } = versions;
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 72px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="btn-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Variant</label>
        <div class="sb-chips" id="btn-variants"></div>
      </div>
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="btn-sizes"></div>
      </div>
      <div class="sb-control-row">
        <label>Options</label>
        <div class="sb-chips">
          <button class="sb-chip-bool" id="btn-loading">Loading</button>
          <button class="sb-chip-bool" id="btn-disabled">Disabled</button>
        </div>
      </div>
    </div>
  </div>
${animModuleScript(animations)}
  <script>
  (function(){
    const VARIANTS = ['primary','secondary','tertiary','danger-primary','danger-secondary','danger-tertiary'];
    const SIZES    = ['xs','s','m','l','xl'];
    let state = { variant:'primary', size:'m', loading:false, disabled:false };
    let cleanupHover = null;

    function buildChips(id, items, activeIdx){
      document.getElementById(id).innerHTML = items.map((v,i)=>
        \`<button class="sb-chip\${i===activeIdx?' active':''}" data-value="\${v}">\${v}</button>\`
      ).join('');
    }
    buildChips('btn-variants', VARIANTS, 0);
    buildChips('btn-sizes', SIZES, 2);

    function labelWrap(text){
      return \`<span class="button__label-wrap"><span class="button__label" data-button-label>\${text}</span><span class="button__label button__label--clone" data-button-label-clone aria-hidden="true">\${text}</span></span>\`;
    }

    function renderBtn(){
      const { variant, size, loading, disabled } = state;
      if(loading){
        return \`<button class="button button--\${variant} button--\${size} button--loading" data-button aria-busy="true"><span class="button__loading-content"><span class="button__loading-text" data-shimmer>Loading</span><span class="button__spinner" data-button-spinner aria-hidden="true"></span></span></button>\`;
      }
      const cls = \`button button--\${variant} button--\${size}\${disabled?' button--disabled':''}\`;
      return \`<button class="\${cls}" data-button data-hover-rotate \${disabled?'disabled':''}>\${labelWrap('Click me')}</button>\`;
    }

    function update(){
      if(cleanupHover){ cleanupHover(); cleanupHover=null; }
      const preview = document.getElementById('btn-preview');
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

    bindChips('btn-variants','variant'); bindChips('btn-sizes','size');
    bindBool('btn-loading','loading'); bindBool('btn-disabled','disabled');
    update();
    window.addEventListener('atom:animations-ready', update, {once:true});
  })();
  </script>`,
  });
}

export default { filename, generate };
