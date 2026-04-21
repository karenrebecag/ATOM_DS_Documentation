import { buildPage, animModuleScript, VERSIONS } from '../shared.js';

export const filename = 'empty-state.html';

export function generate(versions = VERSIONS) {
  const { animations } = versions;
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 160px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); padding: 24px; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="es-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="es-sizes">
          <button class="sb-chip active" data-value="s">s</button>
          <button class="sb-chip" data-value="m">m</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>States</label>
        <div class="sb-chips">
          <button class="sb-chip-bool" id="es-showbtn">Show button</button>
        </div>
      </div>
    </div>
  </div>
${animModuleScript(animations)}
  <script>
  (function(){
    const defaultIcon='<svg viewBox="0 0 48 48" fill="none" width="48" height="48"><circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2"/><path d="M24 16v8M24 32h.01" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg>';
    let cleanupHover=null;
    let s={size:'s',showButton:false};

    function labelWrap(text){
      return \`<span class="button__label-wrap"><span class="button__label">\${text}</span><span class="button__label button__label--clone" aria-hidden="true">\${text}</span></span>\`;
    }

    function renderEmptyState(){
      const btn=s.showButton&&s.size==='m'
        ?\`<button class="button button--primary button--m" data-button data-hover-rotate type="button">\${labelWrap('Get started')}</button>\`
        :s.showButton
        ?\`<button class="button button--primary button--s" data-button type="button">\${labelWrap('Get started')}</button>\`
        :'';
      return \`<div class="empty-state empty-state--\${s.size}" data-empty-state><div class="empty-state__icon">\${defaultIcon}</div><div class="empty-state__content"><div class="empty-state__title">Nothing here yet</div><div class="empty-state__description">Get started by creating your first item. It only takes a moment.</div></div>\${btn?\`<div class="empty-state__actions">\${btn}</div>\`:''}</div>\`;
    }

    function reinitAnim(scope){
      if(cleanupHover){cleanupHover();cleanupHover=null;}
      const anim=window.__atomAnimations;
      if(!anim)return;
      anim.initRotateClones({scope});
      anim.initRotateCalc({scope});
      cleanupHover=anim.initHoverRotate({scope});
    }

    function update(){
      const preview=document.getElementById('es-preview');
      preview.innerHTML=renderEmptyState();
      reinitAnim(preview);
    }

    function chips(id,key){document.getElementById(id).addEventListener('click',e=>{const c=e.target.closest('.sb-chip');if(!c)return;s[key]=c.dataset.value;document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));c.classList.add('active');update();});}
    function bool(id,key){document.getElementById(id).addEventListener('click',e=>{s[key]=!s[key];e.currentTarget.classList.toggle('active',s[key]);update();});}

    chips('es-sizes','size');
    bool('es-showbtn','showButton');
    window.addEventListener('atom:animations-ready',()=>update(),{once:true});
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
