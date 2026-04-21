import { buildPage, formsModuleScript, VERSIONS } from '../shared.js';

export const filename = 'text-field.html';

export function generate(versions = VERSIONS) {
  const { animations } = versions;
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 100px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); padding: 16px; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="tf-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="tf-sizes">
          <button class="sb-chip" data-value="xs">xs</button>
          <button class="sb-chip" data-value="s">s</button>
          <button class="sb-chip active" data-value="m">m</button>
          <button class="sb-chip" data-value="l">l</button>
          <button class="sb-chip" data-value="xl">xl</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>States</label>
        <div class="sb-chips">
          <button class="sb-chip-bool" id="tf-disabled">Disabled</button>
          <button class="sb-chip-bool" id="tf-required">Required</button>
          <button class="sb-chip-bool" id="tf-counter">Counter</button>
        </div>
      </div>
    </div>
  </div>
${formsModuleScript(animations)}
  <script>
  (function(){
    const infoIcon='<svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14"><path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 3.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM7.25 7h1.5v4.5h-1.5V7z"/></svg>';
    const MAX_CHARS=100;
    let s={size:'m',disabled:false,required:false,counter:false};
    let formCleanup=null;

    function update(){
      const reqAttr=s.required?'required aria-required="true"':'';
      const disAttr=s.disabled?'disabled':'';
      const counterEl=s.counter?\`<span class="text-field__counter" data-text-field-counter aria-live="polite">0 / \${MAX_CHARS}</span>\`:'';
      document.getElementById('tf-preview').innerHTML=\`<div class="text-field text-field--\${s.size}\${s.disabled?' text-field--disabled':''}" data-text-field style="width:100%;max-width:340px;"><label class="text-field__label" for="tf-input">Email address</label><div class="text-field__wrapper"><input class="text-field__input" id="tf-input" type="email" placeholder="you@example.com" \${reqAttr} \${disAttr} \${s.counter?\`maxlength="\${MAX_CHARS}"\`:''} data-text-field-input/></div><div class="text-field__footer"><span class="text-field__hint">\${infoIcon} Click the field and tab out to trigger live validation</span>\${counterEl}</div></div>\`;
      if(s.counter){
        const field=document.getElementById('tf-input');
        const counter=document.querySelector('[data-text-field-counter]');
        if(field&&counter) field.addEventListener('input',()=>{counter.textContent=\`\${field.value.length} / \${MAX_CHARS}\`;});
      }
      if(formCleanup){formCleanup();formCleanup=null;}
      const forms=window.__atomForms;
      if(forms) formCleanup=forms.initFormValidation({scope:document.getElementById('tf-preview')})||null;
    }

    function chips(id,key){document.getElementById(id).addEventListener('click',e=>{const c=e.target.closest('.sb-chip');if(!c)return;s[key]=c.dataset.value;document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));c.classList.add('active');update();});}
    function bool(id,key){document.getElementById(id).addEventListener('click',e=>{s[key]=!s[key];e.currentTarget.classList.toggle('active',s[key]);update();});}

    chips('tf-sizes','size');
    bool('tf-disabled','disabled');bool('tf-required','required');bool('tf-counter','counter');
    window.addEventListener('atom:forms-ready',update,{once:true});
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
