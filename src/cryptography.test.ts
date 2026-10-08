import {describe,it,expect} from 'vitest';
import {caesar,cipherTasks,hashTasks,hashChoice,cryptoTasks,cryptoScore} from './cryptography';
import {initial,reward,normalizeSave,validSave,type Difficulty} from './core';

describe('cryptography laboratory',()=>{
 it('wraps A–Z, keeps case and punctuation, and reverses the historical cipher',()=>{
  expect(caesar('Abc XYZ! 123',3)).toBe('Def ABC! 123');expect(caesar('A z',-1)).toBe('Z y');
  for(let shift=0;shift<26;shift++)expect(caesar(caesar('NEXUS Agent 09!',shift),-shift)).toBe('NEXUS Agent 09!');
 });
 it('provides distinct solvable main and reinforcement messages in both languages',()=>{
  for(const d of ['easy','normal','hard'] as Difficulty[]){const tasks=cipherTasks[d];expect(new Set(tasks.map(t=>t.plain.pt)).size).toBe(3);for(const task of tasks){expect(task.shift).toBeGreaterThan(0);expect(task.shift).toBeLessThan(26);for(const lang of ['pt','en'] as const){expect(task.clue[lang]).toBeTruthy();expect(caesar(caesar(task.plain[lang],task.shift),-task.shift)).toBe(task.plain[lang])}}}
 });
 it('shows complete SHA-256 digests of the exact UTF-8 bytes, including a trailing newline',async()=>{
  for(const task of Object.values(hashTasks)){expect(task.reference).toMatch(/^[a-f0-9]{64}$/);for(const sample of task.samples){const result=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(sample.text));const hex=Array.from(new Uint8Array(result),byte=>byte.toString(16).padStart(2,'0')).join('');expect(sample.digest).toBe(hex)}}
  const hard=hashTasks.hard.samples;expect(hard.find(s=>s.text.endsWith('\n'))?.digest).not.toBe(hard.find(s=>!s.text.endsWith('\n')&&s.text.includes('access=read'))?.digest);
 });
 it('matches only the trusted full reference and rejects missing or out-of-range choices',()=>{
  for(const task of Object.values(hashTasks)){expect(task.samples.filter((_,i)=>hashChoice(task,i))).toHaveLength(1);expect(hashChoice(task,null)).toBe(false);expect(hashChoice(task,-1)).toBe(false);expect(hashChoice(task,99)).toBe(false)}
 });
 it('uses four main objectives and two different objectives per reinforcement in every difficulty',()=>{
  for(const d of ['easy','normal','hard'] as Difficulty[]){const main=cryptoTasks(d,'m9');expect(main.map(t=>t.kind)).toEqual(['cipher','hash','key','key']);expect(cryptoTasks(d,'s9a').map(t=>t.kind)).toEqual(['cipher','cipher']);const keys=cryptoTasks(d,'s9b');expect(keys.map(t=>t.kind)).toEqual(['key','key']);for(const task of [...main,...keys])if(task.kind==='key'){const q=task.question;expect(q.correct).toBeLessThan(q.options.length);for(const lang of ['pt','en'] as const){expect(q.prompt[lang]).toBeTruthy();expect(q.explain[lang]).toBeTruthy();expect(q.hint[lang]).toBeTruthy();expect(q.options.every(o=>!!o[lang])).toBe(true)}}}
  expect(cryptoScore([true,true,true,true])).toBe(100);expect(cryptoScore([true,false,true,true])).toBe(75);expect(cryptoScore([false,false,true,true])).toBe(50);expect(cryptoScore([])).toBe(0);
 });
 it('migrates v3 progress, identity and placement while rejecting new IDs in old-version imports',()=>{
  const legacy={...reward(initial,'m8',100,'hard',false),version:3,lang:'en',avatar:2,placement:true};
  const migrated=normalizeSave(legacy)!;expect(migrated).toEqual({...legacy,version:21});expect(validSave(migrated)).toBe(true);
  const expanded=reward(migrated,'m9',100,'normal',false);expect(expanded.xp).toBe(350);expect(normalizeSave({...expanded,version:3})).toBeNull();expect(normalizeSave(JSON.parse(JSON.stringify(expanded)))).toEqual(expanded);
 });
 it('keeps reward maxima and rejects repeated farming for the new mission and reinforcements',()=>{
  let s=reward(initial,'m9',75,'easy',false);expect(s.xp).toBe(75);s=reward(s,'m9',100,'hard',false);expect(s.xp).toBe(200);expect(reward(s,'m9',100,'hard',false)).toEqual(s);s=reward(s,'s9a',100,'hard',true);s=reward(s,'s9b',100,'normal',true);expect(s.xp).toBe(300);expect(normalizeSave(s)).toEqual(s);expect(reward(s,'m25',100,'easy',false)).toEqual(s);
 });
});
