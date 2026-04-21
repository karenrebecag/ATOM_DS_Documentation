import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'lists.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 80px; display: flex; align-items: flex-start; justify-content: flex-start; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); padding: 20px; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="list-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Type</label>
        <div class="sb-chips" id="list-types">
          <button class="sb-chip active" data-value="bullet">bullet</button>
          <button class="sb-chip" data-value="number">number</button>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function(){
    const BULLET_ITEMS=['First item in the list','Second item with a longer description that wraps','Third item to complete the set'];
    const NUMBER_ITEMS=['Install dependencies with pnpm','Configure your design tokens','Import components into your project'];
    let s={type:'bullet'};
    function update(){
      const items=s.type==='bullet'?BULLET_ITEMS:NUMBER_ITEMS;
      const tag=s.type==='bullet'?'ul':'ol';
      const cls=s.type==='bullet'?'list list--bullet':'list list--number';
      document.getElementById('list-preview').innerHTML=\`<\${tag} class="\${cls}" data-list>\${items.map(item=>\`<li class="list__item" data-list-item>\${item}</li>\`).join('')}</\${tag}>\`;
    }
    document.getElementById('list-types').addEventListener('click',e=>{
      const c=e.target.closest('.sb-chip');if(!c)return;
      s.type=c.dataset.value;
      document.querySelectorAll('#list-types .sb-chip').forEach(x=>x.classList.remove('active'));
      c.classList.add('active');
      update();
    });
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
