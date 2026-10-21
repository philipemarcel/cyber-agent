import { describe,it,expect } from 'vitest';
import { intelRecords,assessIntel } from './osint';
import { initial,reward,normalizeSave } from './core';
import { canStudyChallenge,lessonMission } from './lessons';
import { assessOpenAnswer,getOpenAnswerRubric } from './openAnswerRubrics';
describe('OSINT scope and evidence',()=>{
 it('separates current inventory, historical leads, vendor scope and irrelevant personal data',()=>{
  for(const [id,verdict] of [['portal','confirmed'],['archive','lead'],['partner','outside'],['personal','omit']] as const)expect(assessIntel(id,verdict)).toBe(true);
  expect(assessIntel('archive','confirmed')).toBe(false);expect(assessIntel('partner','confirmed')).toBe(false);expect(assessIntel('personal','lead')).toBe(false);expect(assessIntel('unknown','confirmed')).toBe(false);
 });
 it('retains source dates and does not mutate records through assessment',()=>{
  const before=JSON.stringify(intelRecords);assessIntel('archive','confirmed');expect(JSON.stringify(intelRecords)).toBe(before);expect(intelRecords[1].date).toBe('2023-05-12');
 });
 it('unlocks Red Team from the common core without requiring Blue Team',()=>{
  expect(canStudyChallenge('m27',{},false)).toBe(false);expect(canStudyChallenge('m27',{m20:70},false)).toBe(true);expect(canStudyChallenge('m27',{m26:100},false)).toBe(false);expect(canStudyChallenge('m27',{},true)).toBe(true);
  expect(canStudyChallenge('m27',{},true,true)).toBe(false);for(const id of ['m27','s27a','s27b'])expect(lessonMission(id)).toBe('m27');
 });
 it('migrates v23, permits new IDs only in v24 and avoids repeated XP',()=>{
  const older={...reward(initial,'m26',100,'hard',false),version:23};const current=normalizeSave(older)!;expect(current.version).toBe(24);const earned=reward(current,'m27',100,'hard',false);expect(earned.xp).toBe(400);expect(normalizeSave(earned)).toEqual(earned);expect(normalizeSave({...earned,version:23})).toBeNull();expect(reward(earned,'m27',100,'hard',false)).toEqual(earned);
 });
 it('accepts bilingual reference reasoning for the three open exercises',()=>{
  for(const kind of ['prediction','recall','transfer'] as const)for(const lang of ['pt','en'] as const)expect(assessOpenAnswer('m27',kind,getOpenAnswerRubric('m27',kind).reference[lang]).status,`${kind}/${lang}`).toBe('correct');
  expect(assessOpenAnswer('m27','transfer','Um serviço público autoriza testar tudo.').status).toBe('incorrect');
 });
});
