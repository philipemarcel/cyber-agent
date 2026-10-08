import {describe,it,expect} from 'vitest';
import {initial,reward,validSave,phishingScore} from './core';
describe('campaign rewards',()=>{
 it('does not unlock missions after a failed assessment',()=>expect(reward(initial,'placement',50,'easy',false).placement).toBe(false));
 it('unlocks after passing without skipping campaign completion',()=>{const s=reward(initial,'placement',100,'easy',false);expect(s.placement).toBe(true);expect(s.xp).toBe(0);expect(s.completed).toEqual({})});
 it('does not pay twice and pays only the improvement across difficulty',()=>{const a=reward(initial,'m1',100,'easy',false);const replay=reward(a,'m1',100,'easy',false);expect(replay.xp).toBe(100);const hard=reward(replay,'m1',100,'hard',false);expect(hard.xp).toBe(200);expect(reward(hard,'m1',100,'easy',false).xp).toBe(200)});
 it('keeps completed progress after a failed replay',()=>{const s=reward(initial,'m1',100,'easy',false);expect(reward(s,'m1',33,'hard',false)).toEqual(s)});
 it('caps side quest rewards independently of difficulty',()=>{const s=reward(initial,'s1b',100,'hard',true);expect(s.xp).toBe(50);expect(validSave(s)).toBe(true)});
});
describe('portable save validation',()=>{
 it('round trips a real campaign save',()=>expect(validSave(JSON.parse(JSON.stringify(reward(initial,'m2',80,'normal',false))))).toBe(true));
 it('rejects malformed or inconsistent imports',()=>{expect(validSave({...initial,xp:100})).toBe(false);expect(validSave({...initial,avatar:4})).toBe(false);expect(validSave({...initial,completed:JSON.parse('{"__proto__":100}') })).toBe(false);expect(validSave(null)).toBe(false);expect(validSave({...initial,earned:[]})).toBe(false)});
});
describe('phishing investigation',()=>{
 it('counts false positives as well as missed signals',()=>{expect(phishingScore([true,false,true],[0,2])).toBe(100);expect(phishingScore([true,false,true],[0,1,2])).toBe(67);expect(phishingScore([true,false,true],[])).toBe(33)});
});
