import AnswerSelection from './AnswerSelection';
import { useState, useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useSave } from './core';
import type { Lesson } from './lessons';
import { reviewFollowups } from './reviewFollowups';

export default function ReviewPractice({lesson}:{lesson:Lesson}){
 const lang=useSave(s=>s.save.lang);const tx=(pt:string,en:string)=>lang==='pt'?pt:en;
 const quizzes=[lesson.quiz,...(reviewFollowups[lesson.id]?[reviewFollowups[lesson.id]]:[])];
 const [index,setIndex]=useState(0);const [choices,setChoices]=useState<Record<number,number>>({});const [confirmed,setConfirmed]=useState<Record<number,boolean>>({});
 const prompt=useRef<HTMLHeadingElement>(null);const quiz=quizzes[index];const choice=choices[index];const reviewed=!!confirmed[index];
 const count=quizzes.filter((_,i)=>confirmed[i]).length;
 function focus(){requestAnimationFrame(()=>{prompt.current?.focus();prompt.current?.scrollIntoView({block:'start',behavior:'auto'})})}
 function go(i:number){setIndex(i);focus()}
 return <div className="lesson-practice">
  <div className="eyebrow">{tx('REVISÃO SEM NOTA','UNGRADED REVIEW')} · {tx('QUESTÃO','QUESTION')} {index+1}/{quizzes.length}</div>
  <p>{tx('Escolha a melhor resposta para o cenário e confirme para ver a explicação. Pode rever a aula e tentar novamente.','Choose the best response to the scenario and confirm to see the explanation. You can revisit the lesson and retry.')}</p>
  <h3 ref={prompt} tabIndex={-1}>{quiz.prompt[lang]}</h3>
  <div className="choices">{quiz.options.map((option,i)=><button key={i} disabled={reviewed} aria-pressed={choice===i} className={'choice '+(choice===i?'selected '+(reviewed?(i===quiz.correct?'correct':'incorrect'):''):'')} onClick={()=>setChoices({...choices,[index]:i})}><span className="choice-letter">{String.fromCharCode(65+i)}</span><span>{option[lang]}</span>{reviewed&&choice===i&&i===quiz.correct&&<CheckCircle2 size={19}/>}<AnswerSelection selected={choice===i}/></button>)}</div>
  {reviewed&&<div className={'feedback '+(choice===quiz.correct?'good':'')} role="status"><strong>{choice===quiz.correct?tx('Você entendeu a ideia.','You understood the idea.'):tx('Vamos pensar nessa escolha.','Let’s think about that choice.')}</strong><p>{quiz.feedback[choice][lang]}</p>{choice!==quiz.correct&&<p><strong>{tx('Melhor resposta: ','Best response: ')}{String.fromCharCode(65+quiz.correct)}.</strong> {quiz.feedback[quiz.correct][lang]}</p>}</div>}
  {reviewed&&<details key={index} className="review-comparison"><summary>{tx('Compare o raciocínio de todas as alternativas','Compare the reasoning behind every option')}</summary><div className="review-option-notes">{quiz.options.map((option,i)=><article key={i} className={i===quiz.correct?undefined:"error-text"}><div className="eyebrow">{String.fromCharCode(65+i)} · {i===quiz.correct?tx('MELHOR RESPOSTA','BEST RESPONSE'):tx('POR QUE NÃO ATENDE AO CENÁRIO','WHY IT DOES NOT FIT THE SCENARIO')}{i===choice?' · '+tx('SUA ESCOLHA','YOUR CHOICE'):''}</div><strong>{option[lang]}</strong><p>{quiz.feedback[i][lang]}</p></article>)}</div></details>}
  <div className="lesson-options">
   {!reviewed?<button className="primary" disabled={choice===undefined} onClick={()=>setConfirmed({...confirmed,[index]:true})}>{tx('Confirmar resposta','Confirm answer')}</button>:<button className="secondary" onClick={()=>{const next={...choices};delete next[index];setChoices(next);setConfirmed({...confirmed,[index]:false});focus()}}>{tx('Tentar esta questão novamente','Retry this question')}</button>}
   {index>0&&<button className="secondary" onClick={()=>go(index-1)}>{tx('Questão anterior','Previous question')}</button>}
   {index<quizzes.length-1&&<button className="secondary" onClick={()=>go(index+1)}>{tx('Próxima questão','Next question')}</button>}
  </div>
  <p role="status">{tx('Questões revisadas: ','Questions reviewed: ')}{count}/{quizzes.length}. {tx('Este treino não altera seu XP nem conclui a missão.','This practice does not change XP or complete the mission.')}</p>
  {count===quizzes.length&&<section className="review-recap" aria-label={tx('Resumo da revisão','Review recap')}><h3>{tx('O que levar desta revisão','What to take from this review')}</h3><p>{quizzes.every((q,i)=>choices[i]===q.correct)?tx('Suas respostas combinam com os cenários. Antes da missão, confira se você consegue explicar o motivo sem consultar as alternativas.','Your answers fit the scenarios. Before the mission, check whether you can explain why without looking at the options.'):tx('Há decisões para rever. Compare as explicações, volte ao conteúdo se precisar e tente justificar a melhor resposta com suas palavras.','Some decisions need review. Compare explanations, return to the lesson if needed and try to justify the best response in your own words.')}</p>{quizzes.map((q,i)=><div className="review-recap-row" key={i}><div><strong>{tx('Questão','Question')} {i+1}</strong><p className={choices[i]===q.correct?undefined:"error-text"}>{choices[i]===q.correct?tx('Resposta adequada ao cenário.','Response fits the scenario.'):tx('Reveja o raciocínio desta decisão.','Review this decision’s reasoning.')}</p></div><button className="secondary" onClick={()=>go(i)}>{tx('Rever questão','Review question')} {i+1}</button></div>)}</section>}
 </div>
}
