import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'navbar.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    body { display: block; }
    .sb-section { display: flex; flex-direction: column; gap: 8px; padding: 24px; }
    .sb-label { font-size: 11px; font-weight: 600; color: var(--fg-subtle, #6b7280); text-transform: uppercase; letter-spacing: 0.05em; padding: 0 4px; }
    .navbar-demo { position: relative; border-radius: 10px; overflow: hidden; border: 1px solid var(--border-subtle, #e5e7eb); }`,
    body: `  <div class="sb-section">
    <p class="sb-label">Default</p>
    <div class="navbar-demo">
      <nav class="navbar" data-navbar>
        <div class="navbar__brand">
          <span style="font-weight:700;font-size:18px;color:var(--fg-default,#111);">ATOM</span>
        </div>
        <div class="navbar__links">
          <a class="nav-link nav-link--primary nav-link--m nav-link--active" href="#" data-nav-link aria-current="page" onclick="return false;">Home</a>
          <a class="nav-link nav-link--primary nav-link--m" href="#" data-nav-link onclick="return false;">Components</a>
          <a class="nav-link nav-link--primary nav-link--m" href="#" data-nav-link onclick="return false;">Tokens</a>
          <a class="nav-link nav-link--primary nav-link--m" href="#" data-nav-link onclick="return false;">About</a>
        </div>
        <div class="navbar__actions">
          <button class="button button--primary button--s" data-button type="button">
            <span class="button__label-wrap"><span class="button__label">Get started</span><span class="button__label button__label--clone" aria-hidden="true">Get started</span></span>
          </button>
        </div>
      </nav>
    </div>

    <p class="sb-label" style="margin-top:16px;">Scrolled (with shadow)</p>
    <div class="navbar-demo">
      <nav class="navbar navbar--scrolled" data-navbar>
        <div class="navbar__brand">
          <span style="font-weight:700;font-size:18px;color:var(--fg-default,#111);">ATOM</span>
        </div>
        <div class="navbar__links">
          <a class="nav-link nav-link--primary nav-link--m nav-link--active" href="#" data-nav-link aria-current="page" onclick="return false;">Home</a>
          <a class="nav-link nav-link--primary nav-link--m" href="#" data-nav-link onclick="return false;">Components</a>
          <a class="nav-link nav-link--primary nav-link--m" href="#" data-nav-link onclick="return false;">Tokens</a>
          <a class="nav-link nav-link--primary nav-link--m" href="#" data-nav-link onclick="return false;">About</a>
        </div>
        <div class="navbar__actions">
          <button class="button button--primary button--s" data-button type="button">
            <span class="button__label-wrap"><span class="button__label">Get started</span><span class="button__label button__label--clone" aria-hidden="true">Get started</span></span>
          </button>
        </div>
      </nav>
    </div>

    <p class="sb-label" style="margin-top:16px;">Pill variant</p>
    <div class="navbar-demo" style="background:var(--bg-canvas,#f3f4f6);padding:12px;">
      <nav class="navbar navbar--pill" data-navbar>
        <div class="navbar__brand">
          <span style="font-weight:700;font-size:18px;color:var(--fg-default,#111);">ATOM</span>
        </div>
        <div class="navbar__links">
          <a class="nav-link nav-link--primary nav-link--m nav-link--active" href="#" data-nav-link aria-current="page" onclick="return false;">Home</a>
          <a class="nav-link nav-link--primary nav-link--m" href="#" data-nav-link onclick="return false;">Components</a>
          <a class="nav-link nav-link--primary nav-link--m" href="#" data-nav-link onclick="return false;">Tokens</a>
        </div>
        <div class="navbar__actions">
          <button class="button button--primary button--s" data-button type="button">
            <span class="button__label-wrap"><span class="button__label">Get started</span><span class="button__label button__label--clone" aria-hidden="true">Get started</span></span>
          </button>
        </div>
      </nav>
    </div>
  </div>`,
  });
}

export default { filename, generate };
