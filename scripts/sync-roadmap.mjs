import { copyFileSync, mkdirSync } from 'node:fs';
mkdirSync('public',{recursive:true});
copyFileSync('docs/roadmap.md','public/roadmap.md');
copyFileSync('docs/ux-research.md','public/ux-research.md');
