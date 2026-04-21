import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'marquee.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-playground { max-width: 600px; }
    [data-marquee-list] { animation-play-state: running !important; }
    .sb-preview { display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; overflow: hidden; border: 1px solid var(--border-subtle, #e5e7eb); min-height: 64px; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="mq-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Content</label>
        <div class="sb-chips" id="mq-content">
          <button class="sb-chip active" data-value="text">text</button>
          <button class="sb-chip" data-value="logos">logos</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="mq-sizes">
          <button class="sb-chip" data-value="s">s</button>
          <button class="sb-chip active" data-value="m">m</button>
          <button class="sb-chip" data-value="l">l</button>
          <button class="sb-chip" data-value="xl">xl</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Theme</label>
        <div class="sb-chips" id="mq-themes">
          <button class="sb-chip active" data-value="light">light</button>
          <button class="sb-chip" data-value="dark">dark</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Direction</label>
        <div class="sb-chips" id="mq-directions">
          <button class="sb-chip active" data-value="normal">normal</button>
          <button class="sb-chip" data-value="reverse">reverse</button>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function(){
    const starSVG='<svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14"><path d="M8 1l1.545 4.755H15L10.5 8.881 12.045 13.64 8 10.5l-4.045 3.14L5.5 8.88 1 5.755h5.455L8 1Z"/></svg>';
    const TEXTS=['Design System','Component Library','Token Architecture','Multi-Framework'];
    const LOGOS=['Figma','React','Vue','Angular','Astro','Tailwind'];
    let s={content:'text',size:'m',theme:'light',direction:'normal'};

    function buildItems(){
      const items=s.content==='logos'?LOGOS:TEXTS;
      return items.map(item=>\`<li class="marquee__item" data-marquee-item><span class="marquee__icon" aria-hidden="true">\${starSVG}</span><span class="marquee__text">\${item}</span></li>\`).join('');
    }

    function update(){
      const themeAttr=s.theme==='dark'?'data-theme="dark"':'';
      const dirStyle=s.direction==='reverse'?'style="--marquee-direction:reverse"':'';
      const itemsHtml=buildItems();
      document.getElementById('mq-preview').innerHTML=\`<div class="marquee marquee--\${s.size}" data-marquee \${themeAttr} \${dirStyle} style="width:100%;"><ul class="marquee__list" data-marquee-list aria-label="Marquee" role="list">\${itemsHtml}\${itemsHtml}\${itemsHtml}</ul></div>\`;
    }

    function chips(id,key){document.getElementById(id).addEventListener('click',e=>{const c=e.target.closest('.sb-chip');if(!c)return;s[key]=c.dataset.value;document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));c.classList.add('active');update();});}
    chips('mq-content','content');chips('mq-sizes','size');chips('mq-themes','theme');chips('mq-directions','direction');
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
