import { describe,it,expect } from 'vitest';
import { assessmentFor,combineDifficultyScore,parentCaseId,parseDifficulty } from './difficulty';
import { modules } from './curriculum';
import { initial,reward } from './core';

describe('contextual difficulty and reward boundary',()=>{
 it('covers every mission and reinforcement with distinct intermediate and advanced analysis',()=>{
  for(const m of modules){
   const normal=assessmentFor(m.id,'normal'),hard=assessmentFor(m.id,'hard');
   expect(normal).toHaveLength(2);expect(hard).toHaveLength(2);
   expect(hard[0].correct).not.toBe(hard[1].correct);
   expect(normal[0].prompt).not.toEqual(hard[0].prompt);
   expect(normal[0].options).not.toEqual(hard[0].options);
   for(const level of ['normal','hard'] as const){
    for(const id of [m.id,`s${m.label.replace(/^0/,'')}a`,`s${m.label.replace(/^0/,'')}b`]){
     const qs=assessmentFor(id,level);expect(qs).toHaveLength(id===m.id?2:1);
     for(const q of qs){expect(q.correct).toBeGreaterThanOrEqual(0);expect(q.correct).toBeLessThan(q.options.length);expect(q.feedback).toHaveLength(q.options.length);for(const lang of ['pt','en'] as const){expect(q.prompt[lang].length).toBeGreaterThan(10);expect(new Set(q.options.map(o=>o[lang])).size).toBe(q.options.length);expect(q.feedback.every(f=>f[lang].length>10)).toBe(true)}}
    }
   }
  }
 });
 it('requires analysis to pass even with a perfect core challenge',()=>{
  for(const d of ['normal','hard'] as const){for(const analysis of [0,50,69]){const score=combineDifficultyScore(100,analysis,d);expect(score).toBeLessThan(70);expect(reward(initial,'m1',score,d,false).xp).toBe(0)}
   expect(combineDifficultyScore(100,100,d)).toBe(100);expect(combineDifficultyScore(60,100,d)).toBe(80);expect(combineDifficultyScore(0,100,d)).toBe(50);
  }
  expect(combineDifficultyScore(85,0,'easy')).toBe(85);
 });
 it('supports both arcade rounds and short practice without changing placement',()=>{
  for(const id of ['a1','a2']){expect(assessmentFor(id,'hard')).toHaveLength(2);expect(assessmentFor(id+'s','hard')).toHaveLength(1);expect(assessmentFor(id,'normal')).toHaveLength(2)}
  for(const d of ['easy','normal','hard'] as const)expect(assessmentFor('placement',d)).toEqual([]);
  expect(assessmentFor('m1','easy')).toEqual([]);
  expect(parentCaseId('s24b')).toBe('m24');expect(parentCaseId('a2s')).toBe('a2');
 });
 it('validates saved preference and handles non-finite scores safely',()=>{
  for(const invalid of [null,undefined,'extreme',{},'HARD'])expect(parseDifficulty(invalid)).toBe('easy');
  expect(parseDifficulty('hard')).toBe('hard');expect(parseDifficulty('normal')).toBe('normal');
  expect(combineDifficultyScore(NaN,100,'hard')).toBe(50);expect(combineDifficultyScore(100,NaN,'hard')).toBeLessThan(70);
 });
});
