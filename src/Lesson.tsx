import { useState, useRef } from 'react';
import { BookOpen, CheckCircle2, FlaskConical, Play, LogOut, Lightbulb } from 'lucide-react';
import { useSave, type Bilingual } from './core';
import { modules } from './curriculum';
import { lessons } from './lessons';
import { PixelIcon } from './PixelArt';
import LessonDemo from './LessonDemo';
import ReviewPractice from './ReviewPractice';
import ExperimentGuide from './ExperimentGuide';
import { CompleteExplanation, FeynmanPractice, RetrievalPractice } from './LearningMethods';

export default function Lesson({id,onClose,onStart,allowed,resume=false,sidequest=false,moving=true}:{id:string;onClose:()=>void;onStart:()=>void;allowed:boolean;resume?:boolean;sidequest?:boolean;moving?:boolean}) {
 const lang=useSave(s=>s.save.lang);const t=(text:Bilingual)=>text[lang];const tx=(pt:string,en:string)=>lang==='pt'?pt:en;
 const [step,setStep]=useState(0);const heading=useRef<HTMLHeadingElement>(null);
 const lesson=lessons.find(l=>l.id===id)!;const mission=modules.find(m=>m.id===id)!;
 const steps=[tx('Entenda','Understand'),tx('Experimente','Experiment'),tx('Revise','Review')];const StepIcon=[BookOpen,FlaskConical,CheckCircle2];
 function go(n:number){setStep(n);requestAnimationFrame(()=>{heading.current?.focus();heading.current?.scrollIntoView({block:'start',behavior:'auto'})})}
 const startLabel=resume?tx('Voltar ao desafio','Return to challenge'):sidequest?tx('Iniciar desafio extra','Start side quest'):tx('Iniciar desafio','Start challenge');
 return <div className="lesson-page">
  <div className="game-toolbar"><button className="text-button" onClick={onClose}><LogOut size={16}/>{resume?tx('Voltar ao desafio','Return to challenge'):tx('Voltar','Back')}</button><span>{tx('AULA GUIADA · NO SEU RITMO','GUIDED LESSON · AT YOUR OWN PACE')}</span></div>
  <div className="lesson-heading"><div><div className="eyebrow">{tx('AULA','LESSON')} {mission.label} / {tx('ANTES DA MISSÃO','BEFORE THE MISSION')}</div><h1><PixelIcon type={mission.subject} size={30}/>{t(mission.topic)}</h1><p>{t(lesson.intro)}</p></div><img className="lesson-mentor sprite-idle" src={`${import.meta.env.BASE_URL}art/mentor-agent.png`} width="1024" height="1536" alt={tx('Nova, sua mentora','Nova, your mentor')}/></div>
  <nav className="lesson-step-nav" aria-label={tx('Etapas da aula','Lesson steps')}>{steps.map((label,i)=>{const Icon=StepIcon[i];return <button key={i} aria-current={step===i?'step':undefined} onClick={()=>go(i)}><Icon size={18}/><span>{i+1}. {label}</span></button>})}</nav>
  <section className="lesson-content" aria-labelledby="lesson-step-heading"><div className="lesson-section-label"><span>{String(step+1).padStart(2,'0')} / 03</span><h2 ref={heading} tabIndex={-1} id="lesson-step-heading">{step===0?tx('O essencial, com exemplos','The essentials, with examples'):step===1?tx('Aprenda fazendo','Learn by doing'):tx('Confira o que aprendeu','Check what you learned')}</h2></div>
   {step===0&&<CompleteExplanation id={id} moving={moving} active={step===0}/>}
   {step===0&&<div className="lesson-concepts">{lesson.concepts.map((concept,i)=><article key={i}><span className="concept-number">{String(i+1).padStart(2,'0')}</span><div><h3>{t(concept.title)}</h3><p>{t(concept.text)}</p>{concept.depth&&<p className="concept-depth">{t(concept.depth)}</p>}<div className="lesson-example"><strong><Lightbulb size={16}/>{tx('Vamos trazer para o seu dia a dia','Let’s bring this into everyday life')}</strong>{concept.walkthrough?<dl className="lesson-walkthrough"><div><dt>{tx('Imagine a situação','Picture the situation')}</dt><dd>{t(concept.walkthrough.situation)}</dd></div><div><dt>{tx('Entenda o que acontece','Understand what happens')}</dt><dd>{t(concept.walkthrough.reasoning)}</dd></div><div><dt>{tx('O que você pode fazer','What you can do')}</dt><dd>{t(concept.walkthrough.action)}</dd></div></dl>:<p>{t(concept.example)}</p>}</div></div></article>)}</div>}
   <div hidden={step!==1}><a className="learning-jump" href={`#feynman-practice-${id}`}>{tx('Ir à atividade Feynman: explicar com minhas palavras','Go to Feynman practice: explain in my own words')}</a><p className="learning-note">{tx('Antes de mudar um controle, preveja o resultado. Teste uma mudança por vez, compare o que aconteceu e explique o motivo. Depois, ensine a ideia na atividade Feynman abaixo.','Before changing a control, predict the outcome. Test one change at a time, compare the result and explain why. Then teach the idea in the Feynman activity below.')}</p><ExperimentGuide key={id} id={id}/><LessonDemo id={id}/><FeynmanPractice id={id}/></div>
   <div hidden={step!==2}><RetrievalPractice id={id}/><ReviewPractice lesson={lesson}/></div>{step===2&&<><div className="lesson-checklist"><h3>{tx('Leve para o desafio','Take this into the challenge')}</h3>{lesson.checklist.map((item,i)=><p key={i}><CheckCircle2 size={17}/>{t(item)}</p>)}</div><details className="lesson-sources"><summary>{tx('Fontes e leitura complementar','Sources and further reading')}</summary>{lesson.sources.map(s=><a key={s.url} href={s.url} target="_blank" rel="noreferrer">{s.label}</a>)}</details></>}
  </section>
  <div className="lesson-footer"><div className="lesson-pagination">{step>0&&<button className="secondary" onClick={()=>go(step-1)}>{tx('Etapa anterior','Previous step')}</button>}{step<2&&<button className="primary" onClick={()=>go(step+1)}>{steps[step+1]}</button>}</div><button className={step===2?'primary':'text-button'} disabled={!allowed} onClick={onStart}><Play size={16}/>{allowed?startLabel:sidequest?tx('Conclua a missão para liberar o desafio extra','Complete the mission to unlock the side quest'):tx('Conclua a missão anterior para jogar','Complete the previous mission to play')}</button></div>
 </div>;
}
