import { describe, expect, it } from 'vitest';
import { accessTransition, newAccessDemo, tokenCards, usableToken, scopeCase, scopesCorrect, authScore, authLesson } from './authentication';
import { initial, normalizeSave, reward, validSave } from './core';
import { lessonMission, canStudyChallenge, lessons } from './lessons';
describe('sessions, tokens and delegated authorization',()=>{
 it('does not confuse closing a tab, ending a session and revoking authorization',()=>{
  const start=newAccessDemo();let s=accessTransition(start,'close');expect(s).toEqual({...start,tab:false});s=accessTransition(s,'open');expect(s).toEqual(start);s=accessTransition(s,'logout');expect(s).toEqual({...start,session:false});s=accessTransition(s,'revoke');expect(s).toEqual({...start,session:false,grant:false});expect(s.access).toBe(true);s=accessTransition(s,'expire-token');expect(s.access).toBe(false);expect(start).toEqual(newAccessDemo());
 });
 it('preserves the independent states through expiry and revocation in either order',()=>{
  const s=accessTransition(newAccessDemo(),'expire-session');expect(s.grant).toBe(true);expect(s.access).toBe(true);const tokenExpired=accessTransition(newAccessDemo(),'expire-token');expect(tokenExpired.session).toBe(true);expect(tokenExpired.grant).toBe(true);const revoked=accessTransition(tokenExpired,'revoke');expect(revoked.session).toBe(true);expect(revoked.grant).toBe(false);
 });
 it('accepts only an access token for the correct resource, scope and supplied validity',()=>{
  for(const d of ['easy','normal','hard'] as const)for(const extra of [false,true]){const cards=tokenCards(d,extra);const audience=extra?'photos-api':'calendar-api';const scope=extra?'photos.selected.read':'calendar.read';expect(cards.filter(t=>usableToken(t,audience,scope)).map(t=>t.id)).toEqual(['access']);const token=cards.find(t=>t.id==='access')!;for(const change of [{audience:'other-api'},{scope:'mail.read'},{live:false},{verified:false},{kind:'id' as const}])expect(usableToken({...token,...change},audience,scope)).toBe(false)}expect(usableToken(undefined,'calendar-api','calendar.read')).toBe(false);
 });
 it('requires all needed scopes without extra, unknown or duplicate permissions',()=>{
  for(const d of ['easy','normal','hard'] as const)for(const extra of [false,true]){const scenario=scopeCase(d,extra);expect(scopesCorrect(scenario.required,scenario)).toBe(true);expect(scopesCorrect([...scenario.required].reverse(),scenario)).toBe(true);expect(scopesCorrect([],scenario)).toBe(false);expect(scopesCorrect([...scenario.required,'unknown'],scenario)).toBe(false);expect(scopesCorrect([...scenario.required,scenario.required[0]],scenario)).toBe(false);expect(scopesCorrect(scenario.required.slice(1),scenario)).toBe(false);expect(scenario.required.every(id=>scenario.options.some(o=>o.id===id))).toBe(true)}
 });
 it('scores equal objectives and grants no reward for a failed reinforcement',()=>{
  expect(authScore([true,true,true,false])).toBe(75);expect(authScore([true,false])).toBe(50);expect(authScore([false,false,false,false])).toBe(0);expect(authScore([])).toBe(0);expect(reward(initial,'s12b',50,'hard',true)).toEqual(initial);let s=reward(initial,'m12',75,'easy',false);expect(s.xp).toBe(75);s=reward(s,'m12',100,'hard',false);expect(s.xp).toBe(200);expect(reward(s,'m12',100,'hard',false)).toEqual(s);
 });
 it('migrates v6 identity and progress while admitting new IDs only in v7',()=>{
  const old={...reward(initial,'m11',100,'hard',false),version:6,avatar:3,lang:'en',placement:true};let s=normalizeSave(old)!;expect(s).toEqual({...old,version:21});expect(validSave(s)).toBe(true);s=reward(s,'m12',100,'hard',false);s=reward(s,'s12a',100,'normal',true);s=reward(s,'s12b',100,'easy',true);expect(s.xp).toBe(500);expect(normalizeSave(JSON.parse(JSON.stringify(s)))).toEqual(s);expect(normalizeSave({...s,version:6})).toBeNull();for(const id of ['m012','s012a','m25','s12c'])expect(reward(initial,id,100,'easy',false)).toEqual(initial);
 });
 it('keeps the lesson readable and challenge/reinforcement prerequisites separate',()=>{
  for(const id of ['m12','s12a','s12b'])expect(lessonMission(id)).toBe('m12');expect(canStudyChallenge('m12',{},false)).toBe(false);expect(canStudyChallenge('m12',{m11:100},false)).toBe(true);expect(canStudyChallenge('m12',{},true)).toBe(true);expect(canStudyChallenge('m12',{m11:100},true,true)).toBe(false);expect(canStudyChallenge('m12',{m12:75},false,true)).toBe(true);expect(lessons.find(l=>l.id==='m12')?.concepts).toMatchObject(authLesson.concepts);expect(lessons.find(l=>l.id==='m12')?.quiz.options).toHaveLength(4);for(const lang of ['pt','en'] as const){expect(authLesson.practice?.[lang]).toBeTruthy();for(const concept of authLesson.concepts){expect(concept.walkthrough?.situation[lang]).toBeTruthy();expect(concept.walkthrough?.reasoning[lang]).toBeTruthy();expect(concept.walkthrough?.action[lang]).toBeTruthy()}}
 });
});
