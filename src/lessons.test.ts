import { describe, expect, it } from 'vitest';
import { lessons, lessonMission, canStudyChallenge } from './lessons';
import { modules } from './curriculum';
import { reviewFollowups } from './reviewFollowups';

describe('lessons available before challenges',()=>{
 it('adds a distinct bilingual follow-up with feedback for every choice to every lesson',()=>{
  expect(Object.keys(reviewFollowups).sort()).toEqual(lessons.map(l=>l.id).sort());
  for(const lesson of lessons){const quiz=reviewFollowups[lesson.id];expect(quiz.correct).toBeGreaterThanOrEqual(0);expect(quiz.correct).toBeLessThan(quiz.options.length);expect(quiz.options).toHaveLength(4);expect(quiz.feedback).toHaveLength(4);for(const lang of ['pt','en'] as const){expect(quiz.prompt[lang]).not.toBe(lesson.quiz.prompt[lang]);expect(quiz.prompt[lang]).toBeTruthy();expect(quiz.options.every(o=>!!o[lang])).toBe(true);expect(quiz.feedback.every(o=>!!o[lang])).toBe(true)}}
 });
 it('covers every playable topic exactly once, including the network act',()=>{
  expect(lessons.map(l=>l.id).sort()).toEqual(modules.map(m=>m.id).sort());
  expect(new Set(lessons.map(l=>l.id)).size).toBe(lessons.length);
 });
 it('provides explained practice choices and examples in both languages',()=>{
  for(const l of lessons){expect(l.quiz.correct).toBeGreaterThanOrEqual(0);expect(l.quiz.correct).toBeLessThan(l.quiz.options.length);expect(l.quiz.feedback.length).toBe(l.quiz.options.length);
   for(const lang of ['pt','en'] as const){expect(l.intro[lang]).toBeTruthy();expect(l.quiz.prompt[lang]).toBeTruthy();expect(l.concepts.length).toBeGreaterThanOrEqual(2);for(const concept of l.concepts){expect(concept.title[lang]).toBeTruthy();expect(concept.text[lang]).toBeTruthy();expect(concept.example[lang]).toBeTruthy()}expect(l.quiz.options.every(o=>!!o[lang])).toBe(true);expect(l.quiz.feedback.every(o=>!!o[lang])).toBe(true);expect(l.checklist.every(o=>!!o[lang])).toBe(true)}
   expect(l.sources.length).toBeGreaterThan(0);expect(l.sources.every(s=>new URL(s.url).protocol==='https:')).toBe(true);
  }
 });
 it('routes every main and reinforcement challenge to the correct topic',()=>{
  for(const m of modules){const n=Number(m.label);expect(lessonMission(m.id)).toBe(m.id);for(const suffix of ['a','b'])expect(lessonMission(`s${n}${suffix}`)).toBe(m.id)}
 });
 it('does not route a cross-topic assessment or malformed IDs to a wrong lesson',()=>{
  for(const id of ['placement','m0','m26','s1c','anything1','m1junk','s08a'])expect(lessonMission(id)).toBeNull();
 });
 it('keeps campaign progression while lessons themselves stay readable',()=>{
  expect(canStudyChallenge('m1',{},false)).toBe(true);expect(canStudyChallenge('m2',{},false)).toBe(false);expect(canStudyChallenge('m2',{m1:100},false)).toBe(true);expect(canStudyChallenge('m7',{},true)).toBe(true);expect(canStudyChallenge('m8',{},false)).toBe(true);expect(canStudyChallenge('unknown',{},true)).toBe(false);
 });
 it('only starts reinforcement after completing its parent, even with placement',()=>{
  expect(canStudyChallenge('m2',{},true,true)).toBe(false);expect(canStudyChallenge('m2',{m1:100},true,true)).toBe(false);expect(canStudyChallenge('m2',{m2:70},false,true)).toBe(true);
 });
});
