import { useRef, useState } from 'react';
import { FlaskConical, Lightbulb } from 'lucide-react';
import { useSave } from './core';
import { experimentGuides } from './experimentGuides';

export default function ExperimentGuide({id}:{id:string}){
 const lang=useSave(s=>s.save.lang);const tx=(pt:string,en:string)=>lang==='pt'?pt:en;
 const guide=experimentGuides[id];const [index,setIndex]=useState(0);const [revealed,setRevealed]=useState<number[]>([]);const title=useRef<HTMLHeadingElement>(null);
 if(!guide)return null;
 const step=guide.steps[index];
 function go(n:number){setIndex(n);requestAnimationFrame(()=>title.current?.focus())}
 return <aside className="experiment-guide" aria-label={tx('Roteiro da experiência','Experiment walkthrough')}>
  <div className="experiment-objective"><FlaskConical size={22}/><div><strong>{tx('Nova · O que vamos descobrir','Nova · What we will discover')}</strong><p>{guide.objective[lang]}</p></div></div>
  <p className="experiment-instructions">{tx('Use os controles da bancada abaixo. O roteiro só orienta: trocar o passo não muda a simulação. Sem nota; você pode comparar e repetir.','Use the desk controls below. The walkthrough only guides you: changing its step does not change the simulation. No grade; you can compare and repeat.')}</p>
  <nav className="experiment-nav" aria-label={tx('Passos do roteiro','Walkthrough steps')}>{guide.steps.map((_,i)=><button className="secondary" key={i} aria-current={index===i?'step':undefined} onClick={()=>go(i)}>{tx('Passo','Step')} {i+1}</button>)}</nav>
  <div className="experiment-action"><h3 ref={title} tabIndex={-1}>{tx('Faça e observe','Try and observe')} · {index+1}/{guide.steps.length}</h3><p>{step.action[lang]}</p>
   <button className="text-button" aria-expanded={revealed.includes(index)} aria-controls={`experiment-result-${id}-${index}`} onClick={()=>setRevealed(r=>r.includes(index)?r.filter(n=>n!==index):[...r,index])}><Lightbulb size={17}/>{revealed.includes(index)?tx('Ocultar explicação','Hide explanation'):tx('Comparar resultado e entender por quê','Compare the result and understand why')}</button>
   {revealed.includes(index)&&<div className="experiment-result" id={`experiment-result-${id}-${index}`}><strong>{tx('O que observar e como interpretar','What to observe and how to interpret it')}</strong><p>{step.result[lang]}</p></div>}
  </div>
  <div className="experiment-pagination">{index>0&&<button className="secondary" onClick={()=>go(index-1)}>{tx('Passo anterior','Previous step')}</button>}{index<guide.steps.length-1&&<button className="secondary" onClick={()=>go(index+1)}>{tx('Próximo passo do roteiro','Next walkthrough step')}</button>}</div>
  <details className="experiment-limits"><summary>{tx('O que esta experiência representa','What this experiment represents')}</summary><p>{guide.limit[lang]}</p></details>
 </aside>;
}
