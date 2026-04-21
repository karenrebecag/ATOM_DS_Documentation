// ─── Canonical CDN versions ───────────────────────────────────────────────
// Bump these to update ALL playground files in one shot.
export const VERSIONS = {
  tokens:     '2.2.0',
  css:        '1.2.0',
  animations: '1.4.0',
};

// ─── Shared CSS (no .sb-preview — each component defines its own) ─────────
const BASE_CSS = `
    * { box-sizing: border-box; margin: 0; }
    body { padding: 0; font-family: system-ui, -apple-system, sans-serif; background: transparent; display: flex; align-items: flex-start; justify-content: center; }
    .sb-playground { display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 28px 24px; width: 100%; max-width: 560px; }
    .sb-separator { width: 100%; border: none; border-top: 1px solid var(--border-subtle, #e5e7eb); }
    .sb-controls { display: flex; flex-direction: column; gap: 10px; width: 100%; }
    .sb-control-row { display: flex; align-items: center; gap: 12px; }
    .sb-control-row label { font-size: 11px; font-weight: 600; color: var(--fg-subtle, #6b7280); width: 70px; flex-shrink: 0; text-transform: uppercase; letter-spacing: 0.05em; }
    .sb-chips { display: flex; flex-wrap: wrap; gap: 5px; }
    .sb-chip { padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 500; border: 1px solid var(--border-default, #e5e7eb); background: var(--bg-primary, #fff); cursor: pointer; transition: border-color 0.12s, background 0.12s, color 0.12s; color: var(--fg-default, #374151); }
    .sb-chip:hover { border-color: #9ca3af; }
    .sb-chip.active { background: var(--fg-default, #111); color: var(--bg-primary, #fff); border-color: var(--fg-default, #111); }
    .sb-chip-bool { padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 500; border: 1px solid var(--border-default, #e5e7eb); background: var(--bg-primary, #fff); cursor: pointer; transition: border-color 0.12s, background 0.12s, color 0.12s; color: var(--fg-default, #374151); }
    .sb-chip-bool:hover { border-color: #9ca3af; }
    .sb-chip-bool.active { background: #ef4444; color: #fff; border-color: #ef4444; }`;

// ─── Full page builder ────────────────────────────────────────────────────
/**
 * @param {object} opts
 * @param {typeof VERSIONS} opts.versions
 * @param {string} opts.extraStyle  - additional CSS (typically .sb-preview + component-specific)
 * @param {string} opts.body        - everything that goes inside <body>
 */
export function buildPage({ versions = VERSIONS, extraStyle = '', body }) {
  const { tokens, css } = versions;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atomchat.io/tokens@${tokens}/build/css/tokens.css"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atomchat.io/css@${css}/dist/fonts.css"/>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@atomchat.io/css@${css}/dist/atom.css"/>
  <style>${BASE_CSS}${extraStyle}</style>
</head>
<body>
${body}
</body>
</html>`;
}

// ─── Reusable module script snippets ─────────────────────────────────────
export function animModuleScript(animVer) {
  return `  <script type="module">
    import { initRotateClones, initRotateCalc, initHoverRotate }
      from 'https://esm.sh/@atomchat.io/animations@${animVer}/hover';
    window.__atomAnimations = { initRotateClones, initRotateCalc, initHoverRotate };
    window.dispatchEvent(new CustomEvent('atom:animations-ready'));
  </script>`;
}

export function formsModuleScript(animVer) {
  return `  <script type="module">
    import { initFormValidation, validateAll, validateField, resetField }
      from 'https://esm.sh/@atomchat.io/animations@${animVer}/components/forms';
    window.__atomForms = { initFormValidation, validateAll, validateField, resetField };
    window.dispatchEvent(new CustomEvent('atom:forms-ready'));
  </script>`;
}
