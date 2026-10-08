import { describe, expect, it } from 'vitest';
import { shellConfig, newShell, shellCommands, runShell, shellReady, absoluteFile, scriptCorrect, scriptTrace, scriptCode, type BlockId } from './commandLine';
import { initial, normalizeSave, reward, type Difficulty } from './core';
import { lessonMission, canStudyChallenge } from './lessons';
describe('closed command and scripting laboratory',()=>{
 for(const difficulty of ['easy','normal','hard'] as Difficulty[])it('completes main and reinforcement investigation in '+difficulty,()=>{
  for(const extra of [false,true]){const c=shellConfig(difficulty,extra);let s=newShell();expect(shellReady(s,c)).toBe(false);for(const cmd of shellCommands(c).filter(cmd=>cmd!=='help')){const r=runShell(s,cmd,c);expect(r.ok).toBe(true);s=r.state}expect(shellReady(s,c)).toBe(true);expect(s.read).toBe(true);expect(s.filtered).toBe(difficulty==='hard')}
 });
 it('keeps relative paths dependent on current location and requires context before filtering',()=>{
  const c=shellConfig('hard');let s=newShell();const commands=shellCommands(c);expect(runShell(s,commands[3],c).ok).toBe(false);expect(runShell(s,commands[3],c).state).toEqual(s);s=runShell(s,commands[2],c).state;expect(runShell(s,commands[4],c).ok).toBe(false);s=runShell(s,commands[3],c).state;const r=runShell(s,commands[4],c);expect(r.ok).toBe(true);expect(r.output.en).toContain('Visitor DENIED');expect(r.output.en).not.toContain('Orion ALLOWED');expect(s.cwd).toBe('C:\\NEXUS\\logs');
 });
 it('leaves unknown, destructive, chained, unquoted and oversized inputs inert',()=>{
  const c=shellConfig('normal');const s=newShell();for(const command of ['Remove-Item *','Get-Location; Remove-Item *','Get-Location | anything','Get-Content -LiteralPath access [review].txt','Get-Content -LiteralPath \'C:\\private.txt\'','$(Get-Location)','x'.repeat(181)]){const r=runShell(s,command,c);expect(r.ok).toBe(false);expect(r.state).toEqual(s)}expect(runShell(s,' get-location ',c).ok).toBe(true);
 });
 it('grades only the exact three-block plan, rejecting duplicate and unsafe steps',()=>{
  expect(scriptCorrect(['set','read','success'])).toBe(true);for(const ids of [['success','set','read'],['set','pattern','success'],['set','ignore','success'],['set','read','read'],[]] as BlockId[][])expect(scriptCorrect(ids)).toBe(false);
  for(const d of ['easy','normal','hard'] as Difficulty[]){const code=scriptCode(['set','read','success'],d,absoluteFile(shellConfig(d)));expect(code).toContain('try {');expect(code).toContain('catch {');expect(code).toContain('-LiteralPath $arquivo -ErrorAction Stop');expect(code.indexOf('$arquivo =')).toBeLessThan(code.indexOf('Get-Content'))}
 });
 it('traces both success and failure, never claiming success after a caught failure',()=>{
  const success=scriptTrace(['set','read','success'],true).map(l=>l.en).join('\n');expect(success).toContain('emitted after reading');
  const missing=scriptTrace(['set','read','success'],false).map(l=>l.en).join('\n');expect(missing).toContain('LEITURA FALHOU');expect(missing).not.toContain('LEITURA OK');
  expect(scriptTrace(['read','set','success'],true).map(l=>l.en).join('\n')).toContain('Variable undefined');expect(scriptTrace(['success','set','read'],false).map(l=>l.en).join('\n')).toContain('misleading message');
 });
 it('migrates v5 progress and validates new IDs, rewards and lesson prerequisites',()=>{
  const old={...reward(initial,'m10',100,'hard',false),version:5,avatar:3,lang:'en',placement:true};let s=normalizeSave(old)!;expect(s).toEqual({...old,version:21});s=reward(s,'m11',100,'hard',false);s=reward(s,'s11a',100,'normal',true);s=reward(s,'s11b',100,'easy',true);expect(s.xp).toBe(500);expect(normalizeSave(JSON.parse(JSON.stringify(s)))).toEqual(s);expect(normalizeSave({...s,version:5})).toBeNull();expect(reward(s,'m11',100,'hard',false)).toEqual(s);expect(reward(s,'m11',50,'hard',false)).toEqual(s);
  for(const id of ['m011','s011a','m25','s11c']){expect(lessonMission(id)).toBeNull();expect(reward(initial,id,100,'easy',false)).toEqual(initial)}for(const id of ['m11','s11a','s11b'])expect(lessonMission(id)).toBe('m11');expect(canStudyChallenge('m11',{},false)).toBe(false);expect(canStudyChallenge('m11',{m10:100},false)).toBe(true);expect(canStudyChallenge('m11',{},true)).toBe(true);expect(canStudyChallenge('m11',{m10:100},true,true)).toBe(false);expect(canStudyChallenge('m11',{m11:100},false,true)).toBe(true);
 });
});
