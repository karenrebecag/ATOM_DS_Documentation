import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'tag.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 80px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="tag-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Intent</label>
        <div class="sb-chips" id="tag-intents">
          <button class="sb-chip active" data-value="success">success</button>
          <button class="sb-chip" data-value="warning">warning</button>
          <button class="sb-chip" data-value="danger">danger</button>
          <button class="sb-chip" data-value="info">info</button>
          <button class="sb-chip" data-value="neutral">neutral</button>
          <button class="sb-chip" data-value="brand">brand</button>
          <button class="sb-chip" data-value="ai">ai</button>
          <button class="sb-chip" data-value="disabled">disabled</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Variant</label>
        <div class="sb-chips" id="tag-variants">
          <button class="sb-chip active" data-value="filled">filled</button>
          <button class="sb-chip" data-value="outlined">outlined</button>
          <button class="sb-chip" data-value="ghost">ghost</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="tag-sizes">
          <button class="sb-chip" data-value="xs">xs</button>
          <button class="sb-chip" data-value="s">s</button>
          <button class="sb-chip active" data-value="m">m</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>States</label>
        <div class="sb-chips">
          <button class="sb-chip-bool" id="tag-dot">With dot</button>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function(){
    let s={intent:'success',variant:'filled',size:'m',withDot:false};
    function update(){
      const dot=s.withDot?\`<span class="tag__dot" aria-hidden="true"></span>\`:'';
      document.getElementById('tag-preview').innerHTML=\`<span class="tag tag--\${s.intent} tag--\${s.variant} tag--\${s.size}" data-tag>\${dot}<span class="tag__label">Design system</span></span>\`;
    }
    function chips(id,key){document.getElementById(id).addEventListener('click',e=>{const c=e.target.closest('.sb-chip');if(!c)return;s[key]=c.dataset.value;document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));c.classList.add('active');update();});}
    function bool(id,key){document.getElementById(id).addEventListener('click',e=>{s[key]=!s[key];e.currentTarget.classList.toggle('active',s[key]);update();});}
    chips('tag-intents','intent');chips('tag-variants','variant');chips('tag-sizes','size');
    bool('tag-dot','withDot');
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
