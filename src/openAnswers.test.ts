import { describe,it,expect } from 'vitest';
import { modules } from './curriculum';
import { assessOpenAnswer,getOpenAnswerRubric } from './openAnswerRubrics';
describe('all open question validation',()=>{
 it('accepts the authored reasoning for each of the 72 lesson questions in PT and EN',()=>{
  const failures:string[]=[];
  for(const m of modules)for(const kind of ['prediction','recall','transfer'] as const)for(const lang of ['pt','en'] as const){
   const rubric=getOpenAnswerRubric(m.id,kind),result=assessOpenAnswer(m.id,kind,rubric.reference[lang]);
   if(result.status!=='correct')failures.push(`${m.id}/${kind}/${lang}: ${result.status}: ${result.criteria.filter(c=>!c.met).map(c=>c.label[lang]).join('; ')}`);
  }expect(failures).toEqual([]);
 });
 it('checks both tutorial exercises in both languages',()=>{
  for(const kind of ['tower','ctf'] as const)for(const lang of ['pt','en'] as const)expect(assessOpenAnswer('tutorial',kind,getOpenAnswerRubric('tutorial',kind).reference[lang]).status,`${kind}/${lang}`).toBe('correct');
 });
 it('does not accept blank, unrelated or isolated term answers',()=>{
  for(const m of modules)for(const kind of ['prediction','recall','transfer'] as const)for(const text of ['', 'sim', 'Eu gosto de futebol e quero jogar amanhã.', 'dns ip porta'])expect(assessOpenAnswer(m.id,kind,text).status).toBe('incomplete');
 });
 it('uses the specific question, not the general lesson Feynman rubric',()=>{
  const answer='Senha e PIN são coisas que você sabe. MFA combina categorias de fatores, como saber uma senha e ter um dispositivo.';
  expect(assessOpenAnswer('m1','recall',answer).status).toBe('correct');
  expect(assessOpenAnswer('m1','transfer',answer).status).toBe('incomplete');
 });
 it('detects incorrect assertions and respects corrected negative statements',()=>{
  expect(assessOpenAnswer('m3','recall','HTTPS garante que o site é legítimo e seguro.').status).toBe('incorrect');
  expect(assessOpenAnswer('m3','recall','HTTPS protege a conexão e os dados em trânsito. Não comprova honestidade ou segurança de cada arquivo.').status).toBe('correct');
  expect(assessOpenAnswer('m1','prediction','Trocar a senha na loja também muda a senha do email.').status).toBe('incorrect');
 });
 it('distinguishes correct, incomplete and wrong tutorial strategies',()=>{
  expect(assessOpenAnswer('tutorial','tower','O firewall aplica uma política de acesso.').status).toBe('incomplete');
  expect(assessOpenAnswer('tutorial','tower','TLS é sempre malicioso e deve ser bloqueado em todos os casos.').status).toBe('incorrect');
 });
});
