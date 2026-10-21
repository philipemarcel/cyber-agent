import { describe,it,expect } from 'vitest';
import { runHunt } from './hunting';
import { initial,reward,normalizeSave } from './core';
import { canStudyChallenge,lessonMission } from './lessons';
import { assessOpenAnswer,getOpenAnswerRubric } from './openAnswerRubrics';
describe('hunting evidence and progression',()=>{
 it('keeps authentication visible when process collection is missing',()=>{
  expect(runHunt({host:'lab',window:'night',process:false})).toEqual({login:true,process:false,status:'gap'});
  expect(runHunt({host:'lab',window:'night',process:true})).toEqual({login:true,process:true,status:'supported'});
 });
 it('distinguishes limited empty results from incomplete coverage',()=>{
  expect(runHunt({host:'lab',window:'day',process:true}).status).toBe('not-observed');
  expect(runHunt({host:'lab',window:'day',process:false}).status).toBe('gap');
 });
 it('does not carry findings to another host or mutate the query',()=>{
  const query={host:'portal' as const,window:'night' as const,process:true};
  expect(runHunt(query)).toEqual({login:false,process:false,status:'not-observed'});
  expect(query).toEqual({host:'portal',window:'night',process:true});
 });
 it('migrates v22 and admits hunting rewards only in v23 without repeated XP',()=>{
  const previous={...reward(initial,'m25',100,'easy',false),version:22};
  const migrated=normalizeSave(previous)!;expect(migrated.version).toBe(24);
  const current=reward(migrated,'m26',100,'easy',false);
  expect(current.xp).toBe(200);expect(normalizeSave(current)).toEqual(current);
  expect(normalizeSave({...current,version:22})).toBeNull();
  expect(reward(current,'m26',100,'easy',false)).toEqual(current);
 });
 it('requires the forensic predecessor and routes reinforcement to the hunting lesson',()=>{
  expect(canStudyChallenge('m26',{},false)).toBe(false);
  expect(canStudyChallenge('m26',{m25:70},false)).toBe(true);
  for(const id of ['m26','s26a','s26b'])expect(lessonMission(id)).toBe('m26');
 });
 it('accepts bilingual references and rejects unsupported attack attribution',()=>{
  for(const kind of ['prediction','recall','transfer'] as const)for(const lang of ['pt','en'] as const)
   expect(assessOpenAnswer('m26',kind,getOpenAnswerRubric('m26',kind).reference[lang]).status,`${kind}/${lang}`).toBe('correct');
  expect(assessOpenAnswer('m26','transfer','A anomalia prova ataque.').status).toBe('incorrect');
  expect(assessOpenAnswer('m26','prediction','Não apareceu nada.').status).toBe('incomplete');
 });
});
