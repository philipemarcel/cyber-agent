import { useState } from 'react';
import { b, type Difficulty } from './core';
import { lessons, type Lesson } from './lessons';
import { reviewFollowups } from './reviewFollowups';
import { advancedCases } from './difficultyCases';

export type CaseQuestion = Lesson['quiz'];
export const difficultyKey='cyber-agent-difficulty';
export function parseDifficulty(value:unknown):Difficulty {
 return value==='normal'||value==='hard'?value:'easy';
}
export function useDifficulty(){
 const [difficulty,setValue]=useState<Difficulty>(()=>{try{return parseDifficulty(localStorage.getItem(difficultyKey))}catch{return 'easy'}});
 return [difficulty,(value:Difficulty)=>{const valid=parseDifficulty(value);setValue(valid);try{localStorage.setItem(difficultyKey,valid)}catch{/* Session remains usable when browser storage is unavailable. */}}] as const;
}
export const levelDescriptions={
 easy:b('Iniciante: pratique a habilidade com apoio e dicas. A nota vem do desafio principal.','Beginner: practice the skill with guidance and hints. Your score comes from the main challenge.'),
 normal:b('Intermediário: depois do desafio, resolva duas decisões contextualizadas. Desafio e análise valem 50% cada; alcance 70 na análise e na nota final.','Intermediate: after the challenge, solve two contextual decisions. Challenge and analysis each count for 50%; reach 70 in analysis and the final score.'),
 hard:b('Avançado: decida num caso com restrições e justifique a causa. Desafio e análise valem 50% cada; alcance 70 na análise e na nota final. A análise não fornece dica antes da decisão.','Advanced: decide in a constrained case and justify the cause. Challenge and analysis each count for 50%; reach 70 in analysis and the final score. Analysis provides no hint before deciding.'),
};
export function parentCaseId(id:string){
 if(/^a1s?$/.test(id))return 'a1';
 if(/^a2s?$/.test(id))return 'a2';
 return id.replace(/^s(\d+)[ab]$/,'m$1');
}
export function assessmentFor(id:string,difficulty:Difficulty):CaseQuestion[]{
 if(difficulty==='easy'||id==='placement')return [];
 const parent=parentCaseId(id),row=advancedCases[parent];
 if(!row)return [];
 const lessonId=parent==='a1'?'m23':parent==='a2'?'m12':parent;
 const lesson=lessons.find(l=>l.id===lessonId)!;
 if(difficulty==='normal'){
  const followup=reviewFollowups[lessonId];
  const quizzes=followup?[lesson.quiz,followup]:[lesson.quiz];
  return /(?:^s|s$)/.test(id)?[quizzes[id.endsWith('b')?quizzes.length-1:0]]:quizzes;
 }
 const offset=(Number(lessonId.slice(1))+(id.endsWith('b')?1:0))%3;
 function question(prompt:CaseQuestion['prompt'],options:CaseQuestion['options'],explanation:CaseQuestion['prompt'],rotation=offset):CaseQuestion {
  const rotated=options.map((_,i)=>options[(i+rotation)%options.length]);
  const correct=(options.length-rotation)%options.length;
  return {prompt,options:rotated,correct,feedback:rotated.map((_,i)=>i===correct?explanation:b('Essa escolha não atende às pistas e restrições do caso. '+explanation.pt,'This choice does not satisfy the case clues and constraints. '+explanation.en))};
 }
 const decision=question(row[0],row.slice(1,4),row[4]);
 const reasoning=question(b('Justifique o caso: qual explicação sustenta a decisão, sem tirar conclusões além das evidências?','Justify this case: which explanation supports the decision without going beyond the evidence?'),row.slice(4,7),row[4],(offset+1)%3);
 return /(?:^s|s$)/.test(id)?[decision]:[decision,reasoning];
}
export function combineDifficultyScore(core:number,analysis:number,difficulty:Difficulty){
 const clamp=(value:number)=>Number.isFinite(value)?Math.max(0,Math.min(100,value)):0;
 if(difficulty==='easy')return Math.round(clamp(core));
 const combined=Math.round((clamp(core)+clamp(analysis))/2);
 return analysis<70?Math.min(69,combined):combined;
}
