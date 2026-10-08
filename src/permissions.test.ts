import { describe, expect, it } from 'vitest';
import { accessBits, symbolic, togglePermission, selectedClass, permits, matchesMode, permissionTasks, permissionScore, mainMatrices, extraMatrices, type Mode } from './permissions';
import { initial, normalizeSave, reward, validSave, type Difficulty } from './core';
import { lessonMission, canStudyChallenge } from './lessons';

describe('permission workbench',()=>{
 it('shows conventional symbolic modes and toggles only the selected class',()=>{
  expect(symbolic([6,4,0])).toBe('rw-r-----');expect(symbolic([7,5,0])).toBe('rwxr-x---');expect(symbolic([0,4,0])).toBe('---r-----');
  const mode:Mode=[6,4,0];expect(togglePermission(mode,2,4)).toEqual([6,4,4]);expect(togglePermission(mode,0,2)).toEqual([4,4,0]);expect(mode).toEqual([6,4,0]);expect(togglePermission(mode,3,4)).toEqual(mode);expect(togglePermission(mode,0,8)).toEqual(mode);
 });
 it('does not fall through owner permissions to group or others',()=>{
  expect(selectedClass(true,true)).toBe(0);expect(selectedClass(false,true)).toBe(1);expect(selectedClass(false,false)).toBe(2);
  expect(permits([0,7,7],'owner',4)).toBe(false);expect(permits([0,7,7],'group',4)).toBe(true);expect(permits([6,0,0],'other',4)).toBe(false);
  expect(permits([4,2,1],'owner',4)).toBe(true);expect(permits([4,2,1],'owner',2)).toBe(false);expect(permits([4,2,1],'group',2)).toBe(true);expect(permits([4,2,1],'group',1)).toBe(false);expect(permits([4,2,1],'other',1)).toBe(true);expect(permits([7,7,7],'owner',8)).toBe(false);
 });
 it('rejects excess access as well as missing access',()=>{
  expect(matchesMode([6,4,0],[6,4,0])).toBe(true);expect(matchesMode([7,7,7],[6,4,0])).toBe(false);expect(matchesMode([4,4,0],[6,4,0])).toBe(false);expect(matchesMode([6,4,4],[6,4,0])).toBe(false);
 });
 it('has distinct explained main and reinforcement tasks in every difficulty',()=>{
  for(const d of ['easy','normal','hard'] as Difficulty[]){const main=permissionTasks(d,'m10');expect(main.map(t=>t.kind)).toEqual(['matrix','matrix','decision','decision']);expect(permissionTasks(d,'s10a').map(t=>t.kind)).toEqual(['matrix','matrix']);expect(permissionTasks(d,'s10b').map(t=>t.kind)).toEqual(['decision','decision']);
   expect(new Set([...mainMatrices[d],...extraMatrices[d]].map(t=>t.file)).size).toBe(4);
   for(const task of [...main,...permissionTasks(d,'s10a'),...permissionTasks(d,'s10b')]){if(task.kind==='matrix'){expect(task.target.every(n=>Number.isInteger(n)&&n>=0&&n<=7)).toBe(true);expect(matchesMode([7,7,7],task.target)).toBe(false);for(const lang of ['pt','en'] as const){expect(task.purpose[lang]).toBeTruthy();expect(task.hint[lang]).toBeTruthy()}}else{expect(task.question.options[task.question.correct]).toBeTruthy();expect(task.question.explain.pt).toBeTruthy();expect(task.question.explain.en).toBeTruthy()}}
  }
  expect(permissionScore([true,true,true,true])).toBe(100);expect(permissionScore([true,true,false,true])).toBe(75);expect(permissionScore([true,false])).toBe(50);expect(permissionScore([])).toBe(0);
 });
 it('migrates v4 saves and round trips new two-digit challenge IDs',()=>{
  const old={...reward(initial,'m9',100,'hard',false),version:4,lang:'en',avatar:3,placement:true};const s=normalizeSave(old)!;expect(s).toEqual({...old,version:21});expect(validSave(s)).toBe(true);
  let next=reward(s,'m10',100,'hard',false);next=reward(next,'s10a',100,'normal',true);next=reward(next,'s10b',100,'easy',true);expect(next.xp).toBe(500);expect(normalizeSave(next)).toEqual(next);expect(normalizeSave({...next,version:4})).toBeNull();expect(reward(next,'m10',100,'hard',false)).toEqual(next);expect(reward(next,'m10',50,'hard',false)).toEqual(next);
  for(const id of ['m010','m25','m100','s010a','s10c']){expect(reward(initial,id,100,'easy',id.startsWith('s'))).toEqual(initial);expect(normalizeSave({...initial,completed:{[id]:100},earned:{[id]:100},xp:100})).toBeNull()}
 });
 it('routes two-digit lessons and preserves progression and assessment boundaries',()=>{
  for(const id of ['m10','s10a','s10b'])expect(lessonMission(id)).toBe('m10');for(const id of ['m010','m25','s010a','s10c'])expect(lessonMission(id)).toBeNull();
  expect(canStudyChallenge('m10',{},false)).toBe(false);expect(canStudyChallenge('m10',{m9:75},false)).toBe(true);expect(canStudyChallenge('m10',{},true)).toBe(true);expect(canStudyChallenge('m10',{m9:100},true,true)).toBe(false);expect(canStudyChallenge('m10',{m10:75},false,true)).toBe(true);
 });
});
