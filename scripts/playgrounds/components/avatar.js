import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'avatar.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-preview { min-height: 80px; display: flex; align-items: center; justify-content: center; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="av-preview"></div>
    <hr class="sb-separator"/>
    <div class="sb-controls">
      <div class="sb-control-row">
        <label>Type</label>
        <div class="sb-chips" id="av-types">
          <button class="sb-chip active" data-value="initials">initials</button>
          <button class="sb-chip" data-value="image">image</button>
          <button class="sb-chip" data-value="image-border">image-border</button>
          <button class="sb-chip" data-value="icon">icon</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Size</label>
        <div class="sb-chips" id="av-sizes">
          <button class="sb-chip" data-value="xs">xs</button>
          <button class="sb-chip" data-value="s">s</button>
          <button class="sb-chip active" data-value="m">m</button>
          <button class="sb-chip" data-value="l">l</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Shape</label>
        <div class="sb-chips" id="av-shapes">
          <button class="sb-chip active" data-value="circle">circle</button>
          <button class="sb-chip" data-value="square">square</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>Status</label>
        <div class="sb-chips" id="av-statuses">
          <button class="sb-chip active" data-value="">none</button>
          <button class="sb-chip" data-value="online">online</button>
          <button class="sb-chip" data-value="offline">offline</button>
          <button class="sb-chip" data-value="idle">idle</button>
          <button class="sb-chip" data-value="inactive">inactive</button>
        </div>
      </div>
      <div class="sb-control-row">
        <label>States</label>
        <div class="sb-chips">
          <button class="sb-chip-bool" id="av-verified">Verified</button>
        </div>
      </div>
    </div>
  </div>
  <script>
  (function(){
    const userIcon='<svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 6a5 5 0 0 1 10 0H3Z"/></svg>';
    const verifiedIcon='<svg viewBox="0 0 16 16" fill="currentColor" width="12" height="12"><path d="M8 1l1.5 2.5L12 4l-1.5 2.5L12 9l-2.5.5L8 12l-1.5-2.5L4 9l1.5-2.5L4 4l2.5-.5L8 1Z"/></svg>';
    let s={type:'initials',size:'m',shape:'circle',initials:'JD',status:'',verified:false};
    function update(){
      let inner='';
      if(s.type==='image'||s.type==='image-border') inner=\`<span class="avatar__frame"><img class="avatar__img" data-avatar-img src="https://i.pravatar.cc/150?img=5" alt="User" loading="lazy"/></span>\`;
      else if(s.type==='initials') inner=\`<span class="avatar__initials" data-avatar-initials>\${s.initials}</span>\`;
      else if(s.type==='icon') inner=\`<span class="avatar__icon" data-avatar-icon>\${userIcon}</span>\`;
      let badge='';
      if(s.verified) badge=\`<span class="avatar__badge avatar__badge--verified" data-avatar-badge aria-label="Verified">\${verifiedIcon}</span>\`;
      else if(s.status) badge=\`<span class="status-icon status-icon--bordered status-icon--\${s.status} status-icon--\${s.size} avatar__badge" role="status" aria-label="\${s.status}"></span>\`;
      document.getElementById('av-preview').innerHTML=\`<span class="avatar avatar--\${s.size} avatar--\${s.shape} avatar--\${s.type}" data-avatar role="img" aria-label="User">\${inner}\${badge}</span>\`;
    }
    function chips(id,key){document.getElementById(id).addEventListener('click',e=>{const c=e.target.closest('.sb-chip');if(!c)return;s[key]=c.dataset.value;document.querySelectorAll(\`#\${id} .sb-chip\`).forEach(x=>x.classList.remove('active'));c.classList.add('active');update();});}
    function bool(id,key){document.getElementById(id).addEventListener('click',e=>{s[key]=!s[key];e.currentTarget.classList.toggle('active',s[key]);update();});}
    chips('av-types','type');chips('av-sizes','size');chips('av-shapes','shape');chips('av-statuses','status');
    bool('av-verified','verified');
    update();
  })();
  </script>`,
  });
}

export default { filename, generate };
