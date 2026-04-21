import { buildPage, animModuleScript, VERSIONS } from '../shared.js';

export const filename = 'card.html';

export function generate(versions = VERSIONS) {
  const { animations } = versions;
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 120px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); padding: 16px; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="card-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Variant</label>
        <div class="sb-chips" id="card-variants">
          <button class="sb-chip active" data-value="simple">simple</button>
          <button class="sb-chip" data-value="with-avatar">with-avatar</button>
          <button class="sb-chip" data-value="with-body">with-body</button>
        </div>
      </div>
    </div>
  </div>
${animModuleScript(animations)}
  <script>
  (function(){
    const moreIcon='<svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16"><path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>';
    let cleanupHover=null;
    let s={variant:'simple'};

    function labelWrap(text){
      return \`<span class="button__label-wrap"><span class="button__label">\${text}</span><span class="button__label button__label--clone" aria-hidden="true">\${text}</span></span>\`;
    }

    function renderCard(){
      if(s.variant==='simple'){
        return \`<div class="card" data-card style="width:100%;max-width:320px;"><div class="card__header"><div class="card__title">Card Title</div><div class="card__supporting">Supporting text goes here.</div></div></div>\`;
      }
      if(s.variant==='with-avatar'){
        return \`<div class="card" data-card style="width:100%;max-width:320px;"><div class="card__header"><span class="avatar avatar--m avatar--circle avatar--initials" data-avatar role="img" aria-label="User"><span class="avatar__initials" data-avatar-initials>JD</span></span><div class="card__header-text"><div class="card__title">Jane Doe</div><div class="card__supporting">Product Designer</div></div><button class="icon-button icon-button--tertiary icon-button--m" data-icon-button data-hover-rotate type="button" aria-label="More options" style="margin-left:auto;"><span class="icon-button__icon-wrap"><span class="icon-button__icon" data-icon-button-icon>\${moreIcon}</span><span class="icon-button__icon icon-button__icon--clone" data-icon-button-icon-clone aria-hidden="true">\${moreIcon}</span></span></button></div></div>\`;
      }
      if(s.variant==='with-body'){
        return \`<div class="card" data-card style="width:100%;max-width:320px;"><div class="card__header"><div class="card__title">Card with Body</div><div class="card__supporting">A description of this card.</div></div><div class="card__body"><p style="font-size:14px;color:var(--fg-subtle,#6b7280);">This card includes a body section with additional content and a tag.</p><span class="tag tag--neutral tag--filled tag--m" data-tag style="margin-top:8px;display:inline-flex;"><span class="tag__label">Design</span></span></div><div class="card__footer"><button class="button button--tertiary button--s" data-button data-hover-rotate type="button">\${labelWrap('Cancel')}</button><button class="button button--primary button--s" data-button data-hover-rotate type="button">\${labelWrap('Save')}</button></div></div>\`;
      }
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
      const preview=document.getElementById('card-preview');
      preview.innerHTML=renderCard();
      reinitAnim(preview);
    }

    document.getElementById('card-variants').addEventListener('click',e=>{
      const c=e.target.closest('.sb-chip');if(!c)return;
      s.variant=c.dataset.value;
      document.querySelectorAll('#card-variants .sb-chip').forEach(x=>x.classList.remove('active'));
      c.classList.add('active');
      update();
    });

    window.addEventListener('atom:animations-ready',()=>update(),{once:true});
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
