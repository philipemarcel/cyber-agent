import {describe,it,expect} from 'vitest';
import {newLab,runLabCommand,targetHost,objectives,labScore} from './terminal';
import type {Difficulty} from './core';
function run(d:Difficulty,commands:string[]){let state=newLab();for(const command of commands)state=runLabCommand(state,command,d).state;return state}
describe('safe incident laboratory',()=>{
 for(const d of ['easy','normal','hard'] as Difficulty[])it(`completes the ${d} response in order`,()=>{const commands=['inspect',`isolate ${targetHost(d)}`,...(d!=='easy'?['collect']:[]),'report',...(d==='hard'?['verify-backup','restore']:[])];const s=run(d,commands);expect(objectives(s,d).every(g=>g.done)).toBe(true);expect(labScore(s,d)).toBe(100)});
 it('does not allow recovery before containment and backup validation',()=>{const r=runLabCommand(newLab(),'restore','hard');expect(r.state.restored).toBe(false);expect(r.state.errors).toBe(1);expect(labScore(r.state,'hard')).toBe(0)});
 it('requires investigation and preserves the unrelated station',()=>{let s=run('normal',['isolate workstation-12']);expect(s.isolated).toBe(false);s=run('normal',['inspect','isolate workstation-02']);expect(s.isolated).toBe(false);expect(s.errors).toBe(1)});
 it('cannot submit a report before the required preservation step',()=>{const s=run('normal',['inspect','isolate workstation-12','report']);expect(s.reported).toBe(false);expect(s.collected).toBe(false)});
 it('treats shell payloads as unrecognized text without executing them',()=>{for(const cmd of ['rm -rf /','inspect; restore','$(whoami)','isolate workstation-23 && restore']){const r=runLabCommand(newLab(),cmd,'hard');expect(r.state).toEqual(newLab());expect(r.warning).toBe(true)}});
 it('penalizes an unsafe attempt while allowing corrected completion',()=>{const s=run('hard',['restore','inspect','isolate workstation-23','collect','report','verify-backup','restore']);expect(labScore(s,'hard')).toBe(85)});
 it('queries and unknown commands do not penalize learning',()=>{expect(run('easy',['status','help','invalid']).errors).toBe(0)});
});
