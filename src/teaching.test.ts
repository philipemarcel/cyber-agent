import { describe, expect, it } from 'vitest';
import { modules } from './curriculum';
import { teachingUnits } from './teachingUnits';
import { prepareTutorialTower } from './MinigameTutorial';
import { towerAdvance, towerSummary } from './towerDefense';
import { useSave } from './core';

describe('teaching coverage',()=>{
 it('provides explanations and distinct recall/transfer tasks for every mission in both languages',()=>{
  expect(Object.keys(teachingUnits).sort()).toEqual(modules.map(m=>m.id).sort());
  for(const u of Object.values(teachingUnits)){
   expect(u.frames).toHaveLength(4);
   for(const lang of ['pt','en'] as const){
    for(const field of [u.mechanism,u.case,u.reason,u.limit,u.recall,u.answer,u.transfer,u.transferAnswer])expect(field[lang].length).toBeGreaterThan(35);
    expect(u.recall[lang]).not.toEqual(u.transfer[lang]);
    expect(new Set(u.frames.map(f=>f[lang])).size).toBe(4);
   }
  }
 });
 it('demonstrates both protection and the availability cost of broad blocking without changing saved progress',()=>{
  const before=JSON.stringify(useSave.getState().save);
  const selectiveState=towerAdvance(prepareTutorialTower(false),500);
  const broadState=towerAdvance(prepareTutorialTower(true),500);
  expect(selectiveState.phase).toBe('finished');
  expect(broadState.phase).toBe('finished');
  const selective=towerSummary(selectiveState);
  const broad=towerSummary(broadState);
  expect(selective.delivered).toBe(3);
  expect(selective.blocked).toBe(2);
  expect(selective.reviewed).toBe(1);
  expect(selective.falsePositives).toBe(0);
  expect(broad.falsePositives).toBeGreaterThan(selective.falsePositives);
  expect(broad.delivered).toBeLessThan(selective.delivered);
  expect(JSON.stringify(useSave.getState().save)).toBe(before);
 });
});
