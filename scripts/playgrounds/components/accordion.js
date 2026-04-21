import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'accordion.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { width: 100%; }
    .sb-control-row label { width: 90px; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="acc-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Close siblings</label>
        <div class="sb-chips" id="acc-siblings">
          <button class="sb-chip active" data-value="true">true</button>
          <button class="sb-chip" data-value="false">false</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Items count</label>
        <div class="sb-chips" id="acc-count">
          <button class="sb-chip" data-value="2">2</button>
          <button class="sb-chip" data-value="3">3</button>
          <button class="sb-chip active" data-value="4">4</button>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function(){
    const chevronSVG='<svg class="accordion__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none"><path d="M28.5 22.5L18 12L7.5 22.5" stroke="currentColor" stroke-width="3" stroke-miterlimit="10"/></svg>';
    const ITEMS=[
      {q:'What is ATOM Design System?',a:'ATOM is a multi-framework design system built for speed and consistency across React, Vue, Angular, and Astro.'},
      {q:'How do I install it?',a:'Install via npm: <code>npm install @atomchat.io/css @atomchat.io/tokens</code> and import the stylesheets in your project.'},
      {q:'Does it support dark mode?',a:'Yes. Add <code>data-theme="dark"</code> to your root element to switch to dark mode. All tokens adapt automatically.'},
      {q:'Can I use it with any framework?',a:'The CSS package is framework-agnostic. Use the component class names and data attributes regardless of your stack.'}
    ];
    let s={closeSiblings:true,count:4};

    function renderAccordion(){
      const items=ITEMS.slice(0,s.count);
      return \`<div class="accordion" data-accordion>\${items.map(item=>\`<div class="accordion__item" data-accordion-item><button class="accordion__trigger" data-accordion-trigger type="button" aria-expanded="false"><span class="accordion__title">\${item.q}</span><span class="accordion__icon">\${chevronSVG}</span></button><div class="accordion__panel" data-accordion-panel role="region" hidden><div class="accordion__content">\${item.a}</div></div></div>\`).join('')}</div>\`;
    }

    function bindAccordion(container){
      const triggers=container.querySelectorAll('[data-accordion-trigger]');
      triggers.forEach(trigger=>{
        trigger.addEventListener('click',()=>{
          const item=trigger.closest('[data-accordion-item]');
          const panel=item.querySelector('[data-accordion-panel]');
          const isOpen=trigger.getAttribute('aria-expanded')==='true';
          if(s.closeSiblings){
            triggers.forEach(t=>{
              if(t!==trigger){
                t.setAttribute('aria-expanded','false');
                const p=t.closest('[data-accordion-item]').querySelector('[data-accordion-panel]');
                if(p)p.hidden=true;
              }
            });
          }
          trigger.setAttribute('aria-expanded',String(!isOpen));
          panel.hidden=isOpen;
        });
        trigger.addEventListener('keydown',e=>{
          if(e.key==='Enter'||e.key===' '){e.preventDefault();trigger.click();}
        });
      });
    }

    function update(){
      const preview=document.getElementById('acc-preview');
      preview.innerHTML=renderAccordion();
      bindAccordion(preview);
    }

    function chips(id,key,parse){
      document.getElementById(id).addEventListener('click',e=>{
        const c=e.target.closest('.sb-chip');if(!c)return;
        s[key]=parse?parse(c.dataset.value):c.dataset.value;
        document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));
        c.classList.add('active');
        update();
      });
    }

    chips('acc-siblings','closeSiblings',v=>v==='true');
    chips('acc-count','count',Number);
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
