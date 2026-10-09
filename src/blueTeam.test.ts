import { describe, it, expect } from 'vitest';
import { triage, blueQuestion } from './blueTeam';
import { initial, reward, normalizeSave } from './core';
import { modules } from './curriculum';
import { canStudyChallenge, lessonMission } from './lessons';
describe('Blue Team triage',()=>{
 it('limits verified backup context to that alert',()=>{expect(triage('backup',false).pt).toContain('Contexto pendente');expect(triage('backup',true).pt).toContain('Menor prioridade');for(const id of ['grades','sensor'])expect(triage(id,true)).toEqual(triage(id,false));expect(triage('unknown',true).en).toContain('known alert')});
 it('keeps evidence limits in the analysis',()=>{expect(triage('grades',false).pt).toContain('não prova saída');expect(triage('sensor',true).pt).toContain('não demonstra segurança')});
 it('distinguishes all difficulty cases with bilingual feedback',()=>{for(const kind of ['priority','context','visibility','handoff'] as const){const questions=(['easy','normal','hard'] as const).map(d=>blueQuestion(kind,d));expect(new Set(questions.map(q=>q.prompt.pt)).size).toBe(3);for(const q of questions){expect(q.options[q.correct].en).toBeTruthy();expect(q.explain.pt).toBeTruthy();expect(q.hint.en).toBeTruthy()}}});
 it('separates tracks from the six common-core missions and gates reinforcements',()=>{expect(modules.filter(m=>m.act===3&&!m.track)).toHaveLength(6);expect(modules.filter(m=>m.track)).toHaveLength(5);expect(canStudyChallenge('m21',{},false)).toBe(false);expect(canStudyChallenge('m21',{m20:75},false)).toBe(true);expect(canStudyChallenge('m21',{},true)).toBe(true);expect(canStudyChallenge('m21',{},true,true)).toBe(false);expect(canStudyChallenge('m21',{m21:75},false,true)).toBe(true);for(const id of ['m21','s21a','s21b'])expect(lessonMission(id)).toBe('m21')});
 it('migrates v15 without losing progress and rejects future IDs in historical saves',()=>{const old={...reward(initial,'m20',100,'hard',false),version:15,lang:'en',avatar:3,placement:true};let save=normalizeSave(old)!;expect(save).toEqual({...old,version:22});save=reward(save,'m21',100,'hard',false);save=reward(save,'s21a',100,'normal',true);expect(save.xp).toBe(450);expect(normalizeSave({...save,version:15})).toBeNull();expect(normalizeSave(save)).toEqual(save);expect(reward(save,'m21',100,'hard',false)).toEqual(save);expect(reward(save,'s21b',50,'hard',true)).toEqual(save)});
});
