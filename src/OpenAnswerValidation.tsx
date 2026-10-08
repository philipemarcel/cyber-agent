import { useState } from 'react';
import { CheckCircle2, CircleAlert, XCircle } from 'lucide-react';
import { useSave } from './core';
import { assessOpenAnswer, getOpenAnswerRubric, type OpenAnswerKind } from './openAnswerRubrics';
import type { ExplanationAssessment } from './explanationValidation';

export default function OpenAnswerValidation({id,kind,text}:{id:string;kind:OpenAnswerKind;text:string}){
 const lang=useSave(s=>s.save.lang),tx=(pt:string,en:string)=>lang==='pt'?pt:en;
 const [evaluated,setEvaluated]=useState<{id:string;kind:OpenAnswerKind;text:string;assessment:ExplanationAssessment}|null>(null);
 const rubric=getOpenAnswerRubric(id,kind);
 const result=evaluated?.id===id&&evaluated.kind===kind&&evaluated.text===text?evaluated.assessment:null;
 return <div className="open-answer-validation">
  <details className="explanation-criteria"><summary>{tx('Critérios desta resposta','Criteria for this answer')}</summary><ul>{rubric.parts.map((part,i)=><li key={i}>{part.label[lang]}</li>)}</ul></details>
  <button className="primary" disabled={!text.trim()} onClick={()=>setEvaluated({id,kind,text,assessment:assessOpenAnswer(id,kind,text)})}>{tx('Validar minha resposta','Validate my answer')}</button>
  <div aria-live="polite" aria-atomic="true">{result&&<section className={'explanation-assessment '+result.status} aria-label={tx('Resultado da validação','Validation result')}>
   <h3>{result.status==='correct'?<CheckCircle2/>:result.status==='incorrect'?<XCircle/>:<CircleAlert/>}{result.status==='correct'?tx('Correta nos critérios verificados','Correct against the checked criteria'):result.status==='incorrect'?tx('Incorreta: revise este raciocínio','Incorrect: review this reasoning'):tx('Incompleta: complete ou esclareça','Incomplete: add detail or clarify')}</h3>
   <p>{result.status==='correct'?tx('Reconheci os pontos necessários para esta pergunta. Compare também com a resposta comentada: a checagem não garante que cada frase esteja correta.','I recognized the points required for this question. Also compare with the answer commentary: the check does not guarantee every sentence is correct.'):result.status==='incorrect'?tx('Este trecho pode contrariar o cenário. Confira a orientação, reescreva e valide novamente.','This excerpt may contradict the scenario. Check the guidance, rewrite and validate again.'):tx('Ainda faltam pontos, ou não consegui reconhecer como você os explicou. Complete os itens indicados e tente novamente.','Some points are missing, or I could not recognize how you explained them. Complete the indicated items and try again.')}</p>
   {result.excerpt&&<blockquote>{result.excerpt}</blockquote>}{result.correction&&<p><strong>{tx('Como corrigir: ','How to correct: ')}</strong>{result.correction[lang]}</p>}
   <ul>{result.criteria.map((c,i)=><li key={i} className={c.met?'criterion-met':'criterion-missing'}><strong>{c.met?tx('✓ Identificado: ','✓ Identified: '):tx('○ A completar ou esclarecer: ','○ Add or clarify: ')}</strong>{c.label[lang]}</li>)}</ul>
   <p>{tx('Edite sua resposta e valide novamente. Este treino não altera XP nem aprova missões.','Edit your answer and validate again. This practice does not change XP or pass missions.')}</p>
  </section>}</div>
  <p className="learning-note">{tx('Checagem local por critérios e equívocos previstos, sem envio do texto ou IA. Pode não reconhecer paráfrases ou outros erros. Respostas orais continuam disponíveis para comparação, mas só texto digitado pode ser validado.','Local checks against authored criteria and misconceptions, without sending text or using AI. Paraphrases or other errors may go unrecognized. Oral answers remain available for comparison, but only typed text can be validated.')}</p>
 </div>;
}
