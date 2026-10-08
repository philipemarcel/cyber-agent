import { useEffect, useRef, useState } from 'react';
import AnswerSelection from './AnswerSelection';
import { useSave, type Difficulty } from './core';
import { assessmentFor, levelDescriptions, type CaseQuestion } from './difficulty';
import { questionsFor } from './curriculum';
import './difficulty.css';

export function DifficultySummary({difficulty,short=false}:{difficulty:Difficulty;short?:boolean}){
 const lang=useSave(s=>s.save.lang);
 if(short&&difficulty!=='easy')return <p className="difficulty-summary">{lang==='pt'?'Treino curto: após o desafio, resolva uma decisão contextual. Cada parte vale 50%; alcance 70 na análise e na nota final.':'Short practice: after the challenge, solve one contextual decision. Each part counts for 50%; reach 70 in analysis and the final score.'}</p>;
 return <p className="difficulty-summary">{levelDescriptions[difficulty][lang]}</p>;
}
export function DifficultyScoreDetails({core,analysis}:{core:number;analysis:number}){
 const lang=useSave(s=>s.save.lang);
 return <div className="difficulty-score-details"><p>{lang==='pt'?'Desafio principal':'Main challenge'}: {core}/100 · {lang==='pt'?'Análise final':'Final analysis'}: {analysis}/100 · 50% + 50%.</p><p className={analysis<70?'error-message':undefined}>{analysis<70?(lang==='pt'?'A análise não alcançou 70. A nota final fica limitada a 69, mesmo quando a média seria maior. Revise e tente novamente.':'Analysis did not reach 70. The final score is capped at 69 even if the average would be higher. Review and retry.'):(lang==='pt'?'Análise aprovada. A média final também precisa alcançar 70.':'Analysis passed. The final average must also reach 70.')}</p></div>;
}
export function LevelReview({id,difficulty}:{id:string;difficulty:Difficulty}){
 const lang=useSave(s=>s.save.lang);
 const questions:CaseQuestion[]=difficulty==='normal'?questionsFor(id,'normal').slice(0,2).map(q=>({prompt:q.prompt,options:q.options,correct:q.correct,feedback:q.options.map(()=>q.explain)})):assessmentFor(id,difficulty);
 return questions.length?<section className="level-review"><h3>{lang==='pt'?'Prepare-se para a análise do seu nível':'Prepare for your level’s analysis'}</h3><p>{lang==='pt'?'Treino sem nota. Estes casos preparam a análise final da missão. Explique o motivo antes de conferir o feedback.':'Ungraded practice. These cases prepare you for the mission’s final analysis. Explain why before checking feedback.'}</p><CasePractice key={id+difficulty} questions={questions} practice/></section>:null;
}
export default function DifficultyAssessment({id,difficulty,onFinish}:{id:string;difficulty:Difficulty;onFinish:(score:number)=>void}){
 const lang=useSave(s=>s.save.lang);
 return <section className="challenge-panel difficulty-assessment"><div className="eyebrow">{lang==='pt'?'ANÁLISE FINAL · ANTES DO RESULTADO':'FINAL ANALYSIS · BEFORE THE RESULT'}</div><DifficultySummary difficulty={difficulty} short={id.startsWith('s')||id.endsWith('s')}/><p>{lang==='pt'?'O desafio principal terminou. A recompensa será registrada depois desta análise. Consulte a aula se precisar; isso não desconta pontos.':'The main challenge is complete. Your reward will be recorded after this analysis. Consult the lesson if needed; it costs no points.'}</p><CasePractice questions={assessmentFor(id,difficulty)} onFinish={onFinish}/></section>;
}
function CasePractice({questions,onFinish,practice=false}:{questions:CaseQuestion[];onFinish?:(score:number)=>void;practice?:boolean}){
 const lang=useSave(s=>s.save.lang),tx=(pt:string,en:string)=>lang==='pt'?pt:en;
 const [index,setIndex]=useState(0),[choice,setChoice]=useState<number|null>(null),[review,setReview]=useState(false),[correct,setCorrect]=useState(0),[done,setDone]=useState(false),[answers,setAnswers]=useState<Record<number,number>>({});
 const heading=useRef<HTMLHeadingElement>(null),finished=useRef(false);
 useEffect(()=>{heading.current?.focus();heading.current?.scrollIntoView({block:'nearest'})},[index]);
 const q=questions[index];
 if(!q)return null;
 if(done)return <div className={'feedback '+(correct===questions.length?'good':'')} role="status"><p>{tx('Treino concluído. Acertos: ','Practice complete. Correct answers: ')}{correct}/{questions.length}. {tx('Releia os motivos antes de iniciar a missão.','Review the reasoning before starting the mission.')}</p><button className="secondary" onClick={()=>{setDone(false);setIndex(0);setChoice(null);setReview(false);setCorrect(0);setAnswers({})}}>{tx('Refazer o treino','Repeat practice')}</button></div>;
 const reveal=review&&(practice||index===questions.length-1);
 return <div className="case-practice"><p>{tx('Análise','Analysis')} {index+1}/{questions.length}</p>{index>0&&<details><summary>{tx('Rever o cenário sem mostrar a resposta','Review the scenario without revealing the answer')}</summary><p>{questions[0].prompt[lang]}</p></details>}<h3 ref={heading} tabIndex={-1}>{q.prompt[lang]}</h3><div className="choices">{q.options.map((option,i)=><button className={'choice '+(choice===i?'selected ':'')+(reveal?(i===q.correct?'correct':choice===i?'incorrect':''):'')} key={i} aria-pressed={choice===i} disabled={review} onClick={()=>setChoice(i)}><span className="choice-letter">{String.fromCharCode(65+i)}</span><span>{option[lang]}</span><AnswerSelection selected={choice===i}/></button>)}</div>{review&&!reveal&&<p role="status">{tx('Decisão registrada. Conclua a análise antes de ver a correção.','Decision recorded. Complete the analysis before viewing the correction.')}</p>}{reveal&&(practice?[index]:questions.map((_,i)=>i)).map(i=>{const question=questions[i],answer=answers[i];return <div key={i} role="status" className={'feedback '+(answer===question.correct?'good':'')}><strong>{tx('Análise','Analysis')} {i+1} · {answer===question.correct?tx('Correto: a escolha atende ao caso.','Correct: your choice fits the case.'):tx('Incorreto: reveja o raciocínio.','Incorrect: review the reasoning.')}</strong><p>{question.feedback[answer][lang]}</p>{answer!==question.correct&&<p>{tx('Melhor resposta','Best answer')}: {String.fromCharCode(65+question.correct)}. {question.feedback[question.correct][lang]}</p>}</div>})}<button className="primary" disabled={choice===null} onClick={()=>{
  if(!review){setReview(true);setAnswers(a=>({...a,[index]:choice!}));if(choice===q.correct)setCorrect(c=>c+1);return}
  if(index+1<questions.length){setIndex(index+1);setChoice(null);setReview(false);return}
  if(practice){setDone(true);return}
  if(!finished.current){finished.current=true;onFinish?.(Math.round(correct/questions.length*100))}
 }}>{!review?tx('Confirmar análise','Confirm analysis'):index+1<questions.length?tx('Próxima análise','Next analysis'):practice?tx('Concluir treino','Complete practice'):tx('Concluir e registrar resultado','Complete and record result')}</button></div>;
}
