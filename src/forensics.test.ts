import { describe,it,expect } from 'vitest';
import { newForensicCase,forensicAction,forensicLesson,evidenceText,alteredText } from './forensics';
import { initial,reward,normalizeSave } from './core';
import { canStudyChallenge,lessonMission } from './lessons';
import { assessOpenAnswer } from './openAnswerRubrics';
describe('forensic preservation and progression',()=>{
 it('blocks analysis before collection and handoff without current integrity checks',()=>{
  const original=newForensicCase();expect(forensicAction(original,'transfer')).toMatchObject({ok:false,state:original});
  let s=forensicAction(original,'capture').state;expect(forensicAction(s,'verify').ok).toBe(false);s=forensicAction(s,'copy').state;expect(forensicAction(s,'transfer').ok).toBe(false);expect(original.captured).toBe(false);
 });
 it('invalidates a previously verified copy after alteration and requires a new copy plus verification',()=>{
  let s=newForensicCase();for(const a of ['capture','copy','verify','alter'] as const)s=forensicAction(s,a).state;
  expect(s.verified).toBe(false);expect(forensicAction(s,'verify').ok).toBe(false);expect(forensicAction(s,'transfer').ok).toBe(false);
  s=forensicAction(s,'copy').state;expect(s.altered).toBe(false);expect(s.verified).toBe(false);s=forensicAction(s,'verify').state;s=forensicAction(s,'transfer').state;expect(s.transferred).toBe(true);expect(s.custody.at(-1)?.actor).toBe('Lia → Nova');expect(forensicAction(s,'alter')).toMatchObject({ok:false,state:s});expect(evidenceText).not.toBe(alteredText);
 });
 it('admits forensic IDs only in v22 and preserves older records and improvement-only rewards',()=>{
  const old={...reward(initial,'m24',100,'hard',false),version:21};let s=normalizeSave(old)!;expect(s.version).toBe(22);s=reward(s,'m25',100,'hard',false);s=reward(s,'s25a',100,'hard',true);expect(s.xp).toBe(450);expect(normalizeSave({...s,version:21})).toBeNull();expect(normalizeSave(s)).toEqual(s);expect(reward(s,'m25',100,'hard',false)).toEqual(s);expect(normalizeSave({...s,xp:8001})).toBeNull();
 });
 it('gates the mission after incident response and reinforces only a completed parent',()=>{
  expect(canStudyChallenge('m25',{},false)).toBe(false);expect(canStudyChallenge('m25',{m24:70},false)).toBe(true);expect(canStudyChallenge('m25',{},true,true)).toBe(false);for(const id of ['m25','s25a','s25b'])expect(lessonMission(id)).toBe('m25');expect(forensicLesson.concepts).toHaveLength(5);
 });
 it('rejects attribution and truth claims based on a hash alone',()=>{
  expect(assessOpenAnswer('m25','recall','O hash prova autoria e garante veracidade.').status).toBe('incorrect');expect(assessOpenAnswer('m25','recall','O hash compara os bytes com uma referência.').status).toBe('incomplete');
 });
});
