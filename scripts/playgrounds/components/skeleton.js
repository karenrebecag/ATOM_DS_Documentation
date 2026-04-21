import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'skeleton.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-playground { display: flex; flex-direction: column; gap: 24px; padding: 28px 24px; width: 100%; max-width: 480px; }
    .sb-section-label { font-size: 11px; font-weight: 600; color: var(--fg-subtle, #6b7280); text-transform: uppercase; letter-spacing: 0.05em; }
    .skeleton-card { display: flex; flex-direction: column; gap: 12px; padding: 16px; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); }
    .skeleton-avatar-row { display: flex; gap: 12px; align-items: center; }
    .skeleton-lines { display: flex; flex-direction: column; gap: 8px; flex: 1; }`,
    body: `  <div class="sb-playground">
    <p class="sb-section-label">Card skeleton</p>
    <div class="skeleton-card">
      <div class="skeleton skeleton--rect" data-skeleton style="height:120px;border-radius:8px;" aria-hidden="true"></div>
      <div class="skeleton skeleton--text" data-skeleton style="width:60%;height:20px;" aria-hidden="true"></div>
      <div class="skeleton skeleton--text" data-skeleton style="width:90%;height:14px;" aria-hidden="true"></div>
      <div class="skeleton skeleton--text" data-skeleton style="width:75%;height:14px;" aria-hidden="true"></div>
    </div>

    <p class="sb-section-label">Text lines</p>
    <div class="skeleton-card">
      <div class="skeleton skeleton--text" data-skeleton style="width:45%;height:22px;" aria-hidden="true"></div>
      <div class="skeleton skeleton--text" data-skeleton style="width:100%;height:14px;" aria-hidden="true"></div>
      <div class="skeleton skeleton--text" data-skeleton style="width:95%;height:14px;" aria-hidden="true"></div>
      <div class="skeleton skeleton--text" data-skeleton style="width:80%;height:14px;" aria-hidden="true"></div>
    </div>

    <p class="sb-section-label">Avatar + heading</p>
    <div class="skeleton-card">
      <div class="skeleton-avatar-row">
        <div class="skeleton skeleton--circle" data-skeleton style="width:48px;height:48px;flex-shrink:0;" aria-hidden="true"></div>
        <div class="skeleton-lines">
          <div class="skeleton skeleton--text" data-skeleton style="width:55%;height:18px;" aria-hidden="true"></div>
          <div class="skeleton skeleton--text" data-skeleton style="width:40%;height:13px;" aria-hidden="true"></div>
        </div>
      </div>
      <div class="skeleton skeleton--text" data-skeleton style="width:100%;height:14px;" aria-hidden="true"></div>
      <div class="skeleton skeleton--text" data-skeleton style="width:88%;height:14px;" aria-hidden="true"></div>
    </div>
  </div>`,
  });
}

export default { filename, generate };
