import { buildPage, VERSIONS } from '../shared.js';

export const filename = 'dialog.html';

export function generate(versions = VERSIONS) {
  return buildPage({
    versions,
    extraStyle: `
    .sb-playground { align-items: stretch; }
    .sb-preview { min-height: 80px; display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 10px; width: 100%; border-radius: 10px; background: var(--bg-surface, #f9fafb); border: 1px solid var(--border-subtle, #e5e7eb); padding: 16px; }
    .sb-hint { font-size: 11px; color: var(--fg-subtle, #6b7280); text-align: center; }`,
    body: `  <div class="sb-playground">
    <div class="sb-preview" id="dlg-preview">
      <button class="button button--primary button--m" data-button type="button" data-open-modal="modal-confirm">
        <span class="button__label-wrap"><span class="button__label">Confirm</span><span class="button__label button__label--clone" aria-hidden="true">Confirm</span></span>
      </button>
      <button class="button button--secondary button--m" data-button type="button" data-open-modal="modal-warning">
        <span class="button__label-wrap"><span class="button__label">Warning</span><span class="button__label button__label--clone" aria-hidden="true">Warning</span></span>
      </button>
      <button class="button button--danger-primary button--m" data-button type="button" data-open-modal="modal-delete">
        <span class="button__label-wrap"><span class="button__label">Delete</span><span class="button__label button__label--clone" aria-hidden="true">Delete</span></span>
      </button>
      <button class="button button--tertiary button--m" data-button type="button" data-open-modal="modal-permissions">
        <span class="button__label-wrap"><span class="button__label">Permissions</span><span class="button__label button__label--clone" aria-hidden="true">Permissions</span></span>
      </button>
    </div>
    <p class="sb-hint">Click any button to open a dialog</p>
  </div>

  <!-- Modal group -->
  <div class="modal-group" data-modal-group data-modal-group-status="not-active" id="modal-group">

    <!-- Confirm modal -->
    <div class="modal" data-modal data-modal-name="modal-confirm" data-modal-status="not-active" role="dialog" aria-modal="true" aria-labelledby="dlg-confirm-title">
      <div class="modal__backdrop" data-modal-backdrop></div>
      <div class="modal__container">
        <div class="modal__header">
          <div class="modal__icon modal__icon--success">
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M5 12l5 5L20 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="modal__title-group">
            <h2 class="modal__title" id="dlg-confirm-title">Confirm Action</h2>
            <p class="modal__description">Are you sure you want to proceed with this action? This cannot be undone.</p>
          </div>
          <button class="modal__close icon-button icon-button--tertiary icon-button--m" data-modal-close type="button" aria-label="Close dialog">
            <span class="icon-button__icon-wrap"><span class="icon-button__icon"><svg viewBox="0 0 16 16" fill="none" width="16" height="16"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span></span>
          </button>
        </div>
        <div class="modal__footer">
          <button class="button button--tertiary button--m" data-button data-modal-close type="button"><span class="button__label-wrap"><span class="button__label">Cancel</span><span class="button__label button__label--clone" aria-hidden="true">Cancel</span></span></button>
          <button class="button button--primary button--m" data-button data-modal-close type="button"><span class="button__label-wrap"><span class="button__label">Confirm</span><span class="button__label button__label--clone" aria-hidden="true">Confirm</span></span></button>
        </div>
      </div>
    </div>

    <!-- Warning modal -->
    <div class="modal" data-modal data-modal-name="modal-warning" data-modal-status="not-active" role="dialog" aria-modal="true" aria-labelledby="dlg-warning-title">
      <div class="modal__backdrop" data-modal-backdrop></div>
      <div class="modal__container">
        <div class="modal__header">
          <div class="modal__icon modal__icon--warning">
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="modal__title-group">
            <h2 class="modal__title" id="dlg-warning-title">Warning</h2>
            <p class="modal__description">This action may have unintended consequences. Please review before continuing.</p>
          </div>
          <button class="modal__close icon-button icon-button--tertiary icon-button--m" data-modal-close type="button" aria-label="Close dialog">
            <span class="icon-button__icon-wrap"><span class="icon-button__icon"><svg viewBox="0 0 16 16" fill="none" width="16" height="16"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span></span>
          </button>
        </div>
        <div class="modal__footer">
          <button class="button button--tertiary button--m" data-button data-modal-close type="button"><span class="button__label-wrap"><span class="button__label">Go back</span><span class="button__label button__label--clone" aria-hidden="true">Go back</span></span></button>
          <button class="button button--secondary button--m" data-button data-modal-close type="button"><span class="button__label-wrap"><span class="button__label">Continue</span><span class="button__label button__label--clone" aria-hidden="true">Continue</span></span></button>
        </div>
      </div>
    </div>

    <!-- Delete modal -->
    <div class="modal" data-modal data-modal-name="modal-delete" data-modal-status="not-active" role="dialog" aria-modal="true" aria-labelledby="dlg-delete-title">
      <div class="modal__backdrop" data-modal-backdrop></div>
      <div class="modal__container">
        <div class="modal__header">
          <div class="modal__icon modal__icon--danger">
            <svg viewBox="0 0 24 24" fill="none" width="24" height="24"><path d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="modal__title-group">
            <h2 class="modal__title" id="dlg-delete-title">Delete Item</h2>
            <p class="modal__description">This will permanently delete the item and all associated data. This action cannot be undone.</p>
          </div>
          <button class="modal__close icon-button icon-button--tertiary icon-button--m" data-modal-close type="button" aria-label="Close dialog">
            <span class="icon-button__icon-wrap"><span class="icon-button__icon"><svg viewBox="0 0 16 16" fill="none" width="16" height="16"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span></span>
          </button>
        </div>
        <div class="modal__footer">
          <button class="button button--tertiary button--m" data-button data-modal-close type="button"><span class="button__label-wrap"><span class="button__label">Cancel</span><span class="button__label button__label--clone" aria-hidden="true">Cancel</span></span></button>
          <button class="button button--danger-primary button--m" data-button data-modal-close type="button"><span class="button__label-wrap"><span class="button__label">Delete</span><span class="button__label button__label--clone" aria-hidden="true">Delete</span></span></button>
        </div>
      </div>
    </div>

    <!-- Permissions modal -->
    <div class="modal" data-modal data-modal-name="modal-permissions" data-modal-status="not-active" role="dialog" aria-modal="true" aria-labelledby="dlg-perms-title">
      <div class="modal__backdrop" data-modal-backdrop></div>
      <div class="modal__container">
        <div class="modal__header">
          <div class="modal__title-group">
            <h2 class="modal__title" id="dlg-perms-title">Manage Permissions</h2>
            <p class="modal__description">Configure access level for this resource.</p>
          </div>
          <button class="modal__close icon-button icon-button--tertiary icon-button--m" data-modal-close type="button" aria-label="Close dialog">
            <span class="icon-button__icon-wrap"><span class="icon-button__icon"><svg viewBox="0 0 16 16" fill="none" width="16" height="16"><path d="M12 4L4 12M4 4l8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg></span></span>
          </button>
        </div>
        <div class="modal__body">
          <p style="font-size:14px;color:var(--fg-subtle,#6b7280);">Select the permissions you want to grant to this user or role.</p>
        </div>
        <div class="modal__footer">
          <button class="button button--tertiary button--m" data-button data-modal-close type="button"><span class="button__label-wrap"><span class="button__label">Cancel</span><span class="button__label button__label--clone" aria-hidden="true">Cancel</span></span></button>
          <button class="button button--primary button--m" data-button data-modal-close type="button"><span class="button__label-wrap"><span class="button__label">Save</span><span class="button__label button__label--clone" aria-hidden="true">Save</span></span></button>
        </div>
      </div>
    </div>

  </div>

  <script>
  (function(){
    const group=document.getElementById('modal-group');
    function openModal(name){
      const modal=group.querySelector(\`[data-modal-name="\${name}"]\`);
      if(!modal)return;
      group.setAttribute('data-modal-group-status','active');
      group.querySelectorAll('[data-modal]').forEach(m=>m.setAttribute('data-modal-status','not-active'));
      modal.setAttribute('data-modal-status','active');
      const firstFocusable=modal.querySelector('button,input,select,textarea,[tabindex]:not([tabindex="-1"])');
      if(firstFocusable)firstFocusable.focus();
    }
    function closeAll(){
      group.setAttribute('data-modal-group-status','not-active');
      group.querySelectorAll('[data-modal]').forEach(m=>m.setAttribute('data-modal-status','not-active'));
    }
    document.getElementById('dlg-preview').addEventListener('click',e=>{
      const btn=e.target.closest('[data-open-modal]');
      if(btn)openModal(btn.dataset.openModal);
    });
    group.addEventListener('click',e=>{
      if(e.target.closest('[data-modal-close]')||e.target.hasAttribute('data-modal-backdrop'))closeAll();
    });
    document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAll();});
  })();
  </script>`,
  });
}

export default { filename, generate };
