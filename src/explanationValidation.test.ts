import { describe,expect,it } from 'vitest';
import { assessExplanation,explanationRubrics,normalizeExplanation } from './explanationValidation';
import { modules } from './curriculum';
import { teachingUnits } from './teachingUnits';
const passwords='Uma senha exclusiva para cada conta evita que uma credencial vazada seja usada em outros serviços. MFA acrescenta um fator de outra categoria, como um dispositivo. Por exemplo, a loja vazou minha senha, por isso minha conta de email precisa ter outra senha. Isso não impede todos os golpes e a recuperação também precisa de proteção.';
describe('guided explanation validation',()=>{
 it('has topic-specific criteria and corrections for all 24 lessons in both languages',()=>{
  expect(Object.keys(explanationRubrics).sort()).toEqual(modules.map(m=>m.id).sort());
  for(const r of Object.values(explanationRubrics))for(const lang of ['pt','en'] as const){expect(r.criteria).toHaveLength(2);for(const c of r.criteria)expect(c.label[lang].length).toBeGreaterThan(15);expect(r.mistake.correction[lang].length).toBeGreaterThan(30)}
 });
 it('accepts a developed password explanation without demanding the reference wording',()=>{
  expect(assessExplanation('m1',passwords).status).toBe('correct');
  expect(assessExplanation('m1',passwords.toUpperCase()).status).toBe('correct');
 });
 it('accepts an English explanation with example and limit',()=>{
  const text='A unique password for every account stops reuse after a leak. MFA requires a factor from another category, such as a device. For example, if a shop leaks my password, my email account still has a different password because each account has independent protection. This does not prevent every scam and recovery needs protection too.';
  expect(assessExplanation('m1',text).status).toBe('correct');
 });
 it('does not label blank, unrelated or keyword-only answers as correct',()=>{
  for(const text of ['', 'Não sei.', 'Eu gosto de futebol porque jogar com meus amigos é divertido.', 'senha exclusiva MFA fator exemplo loja porque não garante'])expect(assessExplanation('m1',text).status).toBe('incomplete');
 });
 it('reports omissions and can reassess the improved answer',()=>{
  const short=assessExplanation('m1','Uma senha exclusiva por conta diminui o risco de reutilização depois de um vazamento.');
  expect(short.status).toBe('incomplete');expect(short.criteria.filter(c=>!c.met).length).toBeGreaterThan(0);
  expect(assessExplanation('m1',passwords).status).toBe('correct');
 });
 it('lets a detected misconception override otherwise complete content',()=>{
  const result=assessExplanation('m1',passwords+' A mesma senha é segura em todas as contas.');
  expect(result.status).toBe('incorrect');expect(result.excerpt).toContain('mesma senha');expect(result.correction).not.toBeNull();
 });
 it('distinguishes asserted errors from negated or explicitly rejected errors',()=>{
  expect(assessExplanation('m3','HTTPS garante que o site é legítimo e seguro.').status).toBe('incorrect');
  for(const text of ['HTTPS não garante que o site é legítimo e seguro.','Não é verdade que HTTPS garante que o site é legítimo.','É um mito dizer que HTTPS garante que o site é legítimo.','HTTPS does not prove the site is safe.'])expect(assessExplanation('m3',text).status).not.toBe('incorrect');
  expect(assessExplanation('m1',passwords+' MFA não impede todos os golpes.').status).toBe('correct');
 });
 it('checks technical distinctions in different lessons',()=>{
  const cases:[string,string][]=[['m7','Sincronização é o mesmo que backup e funciona sempre.'],['m9','O hash é reversível e recupera o texto original.'],['m12','Um usuário autenticado pode acessar tudo no sistema.'],['m13','O DMARC exige ambos SPF e DKIM para passar.'],['m19','A validação no navegador basta para proteger o servidor.'],['m22','Nenhum alerta prova que a rede está sem ataque.']];
  for(const [id,text] of cases)expect(assessExplanation(id,text).status,id).toBe('incorrect');
 });
 it('does not count negated core definitions as identified understanding',()=>{
  const r=assessExplanation('m12','Autenticação não verifica identidade e não confirma quem é você. Autorização decide permissões e acesso. Por exemplo, se uma conta pede um arquivo, o servidor precisa conferir a autorização porque cada pessoa tem um acesso diferente. Isso não garante que toda pessoa tenha todas as permissões do sistema.');
  expect(r.status).toBe('incomplete');expect(r.criteria[0].met).toBe(false);
 });
 it('does not flag the authored lesson mechanisms as misconceptions',()=>{
  for(const [id,u] of Object.entries(teachingUnits))for(const lang of ['pt','en'] as const)expect(assessExplanation(id,u.mechanism[lang]+' '+u.limit[lang]).status,`${id}/${lang}`).not.toBe('incorrect');
 });
 it('keeps accent normalization and input limits deterministic',()=>{
  expect(normalizeExplanation('AUTENTICAÇÃO  e   proteção')).toBe('autenticacao e protecao');
  expect(()=>assessExplanation('m1','x'.repeat(100000))).not.toThrow();
  expect(()=>assessExplanation('unknown','test')).toThrow('Unknown lesson rubric');
 });
});
