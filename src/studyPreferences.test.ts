import { describe,it,expect } from 'vitest';
import { parseStudyPreferences } from './studyPreferences';
describe('optional study preferences',()=>{
 it('defaults invalid or absent data without altering progress',()=>{for(const v of [null,[],false,'on',42])expect(parseStudyPreferences(v)).toEqual({focus:false,comfortable:false})});
 it('accepts only booleans and ignores unrelated persisted fields',()=>{expect(parseStudyPreferences({focus:true,comfortable:'true',xp:900})).toEqual({focus:true,comfortable:false});expect(parseStudyPreferences({comfortable:true})).toEqual({focus:false,comfortable:true})});
});
