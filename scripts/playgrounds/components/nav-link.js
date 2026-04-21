import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'nav-link.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 80px; display: flex; align-items: center; justify-content: center; gap: 24px; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); padding: 16px; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="nl-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="nl-sizes">
          <button class="sb-chip" data-value="xs">xs</button>
          <button class="sb-chip" data-value="s">s</button>
          <button class="sb-chip active" data-value="m">m</button>
          <button class="sb-chip" data-value="l">l</button>
          <button class="sb-chip" data-value="xl">xl</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Color</label>
        <div class="sb-chips" id="nl-variants">
          <button class="sb-chip active" data-value="primary">primary</button>
          <button class="sb-chip" data-value="secondary">secondary</button>
          <button class="sb-chip" data-value="tertiary">tertiary</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Underline</label>
        <div class="sb-chips" id="nl-underline">
          <button class="sb-chip active" data-value="">default</button>
          <button class="sb-chip" data-value="alt">alt</button>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function(){
    let s={size:'m',variant:'primary',underline:''};
    function update(){
      const underlineMod=s.underline?\` nav-link--underline-\${s.underline}\`:'';
      const cls=\`nav-link nav-link--\${s.variant} nav-link--\${s.size}\${underlineMod}\`;
      document.getElementById('nl-preview').innerHTML=\`<a class="\${cls}" href="#" data-nav-link onclick="return false;">Home</a><a class="\${cls} nav-link--active" href="#" data-nav-link aria-current="page" onclick="return false;">About</a>\`;
    }
    function chips(id,key){document.getElementById(id).addEventListener('click',e=>{const c=e.target.closest('.sb-chip');if(!c)return;s[key]=c.dataset.value;document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));c.classList.add('active');update();});}
    chips('nl-sizes','size');chips('nl-variants','variant');chips('nl-underline','underline');
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
