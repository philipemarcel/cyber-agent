import { copyFileSync, mkdirSync } from 'node:fs';
mkdirSync('public',{recursive:true});
copyFileSync('docs/roadmap.md','public/roadmap.md');
