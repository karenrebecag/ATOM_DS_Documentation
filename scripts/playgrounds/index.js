/**
 * Playground generator
 *
 * Reads component definitions from ./components/*.js and writes
 * the generated HTML files to public/playground/.
 *
 * Usage:
 *   node scripts/playgrounds/index.js
 *   # or via npm script:
 *   pnpm generate:playgrounds
 */

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { VERSIONS } from './shared.js';

// ── Component imports ────────────────────────────────────────────────────────
import accordion     from './components/accordion.js';
import avatar        from './components/avatar.js';
import avatarGroup   from './components/avatar-group.js';
import badge         from './components/badge.js';
import button        from './components/button.js';
import card          from './components/card.js';
import checkbox      from './components/checkbox.js';
import chip          from './components/chip.js';
import dialog        from './components/dialog.js';
import divider       from './components/divider.js';
import emptyState    from './components/empty-state.js';
import iconButton    from './components/icon-button.js';
import linkButton    from './components/link-button.js';
import lists         from './components/lists.js';
import marquee       from './components/marquee.js';
import navLink       from './components/nav-link.js';
import navbar        from './components/navbar.js';
import pagination    from './components/pagination.js';
import radio         from './components/radio.js';
import searchField   from './components/search-field.js';
import segmentControl from './components/segment-control.js';
import skeleton      from './components/skeleton.js';
import spinner       from './components/spinner.js';
import tag           from './components/tag.js';
import textField     from './components/text-field.js';
import textarea      from './components/textarea.js';
import toggle        from './components/toggle.js';

const COMPONENTS = [
  accordion,
  avatar,
  avatarGroup,
  badge,
  button,
  card,
  checkbox,
  chip,
  dialog,
  divider,
  emptyState,
  iconButton,
  linkButton,
  lists,
  marquee,
  navLink,
  navbar,
  pagination,
  radio,
  searchField,
  segmentControl,
  skeleton,
  spinner,
  tag,
  textField,
  textarea,
  toggle,
];

// ── Paths ────────────────────────────────────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '../../public/playground');

// ── Generate ─────────────────────────────────────────────────────────────────
console.log(`\nGenerating playgrounds with versions:`);
console.log(`  tokens:     @atomchat.io/tokens@${VERSIONS.tokens}`);
console.log(`  css:        @atomchat.io/css@${VERSIONS.css}`);
console.log(`  animations: @atomchat.io/animations@${VERSIONS.animations}\n`);

let generated = 0;
let errors = 0;

for (const component of COMPONENTS) {
  try {
    const html = component.generate(VERSIONS);
    const outPath = join(OUTPUT_DIR, component.filename);
    writeFileSync(outPath, html, 'utf-8');
    console.log(`  ✓  ${component.filename}`);
    generated++;
  } catch (err) {
    console.error(`  ✗  ${component.filename}: ${err.message}`);
    errors++;
  }
}

console.log(`\n${generated} file${generated !== 1 ? 's' : ''} generated${errors ? `, ${errors} error${errors !== 1 ? 's' : ''}` : ''}.`);
if (errors) process.exit(1);
