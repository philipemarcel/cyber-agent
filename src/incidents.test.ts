import { describe, it, expect } from 'vitest';
import { newResponse, respond, incidentQuestion } from './incidents';
import { initial, normalizeSave, reward } from './core';
import { canStudyChallenge, lessonMission } from './lessons';
describe('incident response',()=>{
 it('blocks premature release without mutating the case',()=>{const s=newResponse();expect(respond(s,'release')).toMatchObject({ok:false,state:s});expect(respond(s,'fix').ok).toBe(false);expect(respond(s,'test').ok).toBe(false)});
 it('permits either containment/preservation order and requires all recovery criteria',()=>{for(const order of [['contain','preserve'],['preserve','contain']] as const){let s=newResponse();for(const a of order)s=respond(s,a).state;s=respond(s,'fix').state;expect(respond(s,'release').ok).toBe(false);s=respond(s,'test').state;expect(respond(s,'release').state.online).toBe(true);expect(respond(s,'contain').state).toEqual(s)}});
 it('cannot release merely after repair and testing if containment is missing',()=>{let s=respond(newResponse(),'preserve').state;s=respond(s,'fix').state;s=respond(s,'test').state;expect(respond(s,'release').ok).toBe(false)});
 it('migrates v20 while rejecting incident IDs in v20 saves and paying only improvement',()=>{const old={...reward(initial,'m23',100,'hard',false),version:20};let s=normalizeSave(old)!;expect(s.version).toBe(21);s=reward(s,'m24',100,'hard',false);s=reward(s,'s24a',100,'hard',true);expect(s.xp).toBe(450);expect(normalizeSave({...s,version:20})).toBeNull();expect(normalizeSave(s)).toEqual(s);expect(reward(s,'m24',100,'hard',false)).toEqual(s)});
 it('requires prior mission and maps the reinforcements',()=>{expect(canStudyChallenge('m24',{},false)).toBe(false);expect(canStudyChallenge('m24',{m23:75},false)).toBe(true);for(const id of ['m24','s24a','s24b'])expect(lessonMission(id)).toBe('m24')});
 it('provides distinct difficulty prompts for each decision',()=>{for(const k of ['contain','evidence','recover','report'] as const){expect(new Set(['easy','normal','hard'].map(d=>incidentQuestion(k,d as 'easy').prompt.pt)).size).toBe(3);for(const d of ['easy','normal','hard'] as const){const q=incidentQuestion(k,d);expect(q.options[q.correct].en).toBeTruthy()}}});
});
