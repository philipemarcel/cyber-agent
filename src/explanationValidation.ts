import { b, type Bilingual } from './core';

type Criterion={label:Bilingual; pattern:RegExp};
type Rubric={criteria:Criterion[]; mistake:{pattern:RegExp; correction:Bilingual}};
const criterion=(pt:string,en:string,pattern:RegExp):Criterion=>({label:b(pt,en),pattern});
const rubric=(a:Criterion,c:Criterion,pattern:RegExp,pt:string,en:string):Rubric=>({criteria:[a,c],mistake:{pattern,correction:b(pt,en)}});
// Deliberately conservative, authored checks. This is not an AI or a general language grader.
// Patterns operate on accent-normalized sentences, not a bag of keywords.
export const explanationRubrics:Record<string,Rubric>={
m25:rubric(
criterion('Explique a comparação de bytes por hash.','Explain byte comparison using a hash.',/hash.{0,85}(bytes|integridade|integrity|referencia|reference)/),
criterion('Documente origem e percurso na cadeia de custódia.','Document origin and handling in chain of custody.',/(cadeia|custody).{0,90}(origem|respons|transfer|origin|custodian)/),
/hash.{0,35}(prova autoria|proves authorship|garante veracidade|guarantees truth)/,
'Hash compara bytes, mas não prova autoria ou veracidade. A cadeia documenta origem e transferências; correlacione fontes e declare limites.','A hash compares bytes but does not prove authorship or truth. Custody documents origin and transfers; correlate sources and state limits.'),
m24:rubric(
criterion('Diferencie contenção de recuperação.','Distinguish containment from recovery.',/(conten|contain).{0,90}(dano|expans|harm|spread)/),
criterion('Relacione recuperação a teste de dados e acessos.','Connect recovery to testing data and access.',/(test|verific|check).{0,100}(dado|acesso|sess|func|data|access|session)/),
/(isolamento|isolation).{0,30}(resolve tudo|solves everything)|hash.{0,30}(garante seguranca|guarantees safety)|apagar logs.{0,25}(primeiro|resolve)/,
'Contenção não elimina a causa; hash não garante segurança. Preserve evidências e teste dados, funções e acessos antes do retorno.','Containment does not eliminate the cause; a hash does not guarantee safety. Preserve evidence and test data, functions and access before return.'),

 m1:rubric(
  criterion('Explique por que cada conta precisa de uma senha diferente.','Explain why each account needs a different password.',/(senha.{0,65}(exclusiv|diferent|unic).{0,100}(evita|diminui|reduz|impede|vazamento|reutiliz|credencial)|(?:different.{0,30}password|unique password).{0,100}(stop|reduce|prevent|leak|reuse|credential))/),
  criterion('Explique a segunda categoria de prova do MFA.','Explain the second category of evidence in MFA.',/(mfa|multifator|multifactor).{0,90}(fator|factor|dispositivo|device|prova|evidence|categoria|category)/),
  /(mesma senha|same password).{0,45}(segur|safe|protect)|mfa.{0,35}(impede|prevents|stops).{0,20}(todo|all|any)/,
  'Reutilizar a senha permite que um vazamento alcance outras contas. MFA reduz riscos, mas não impede todo golpe.','Reusing a password lets a leak reach other accounts. MFA reduces risks but does not stop every scam.'),
 m2:rubric(
  criterion('Explique como uma mensagem tenta induzir uma ação.','Explain how a message tries to induce an action.',/(phishing|golpe|mensagem|message|scam).{0,85}(engan|urgenc|credencia|senha|click|clic|deceiv|password|urgency)/),
  criterion('Confirme pedidos por um canal conhecido antes de agir.','Verify requests through a known channel before acting.',/(confirm|verific|check|verify).{0,65}(canal|channel|contato|contact|app oficial|official app)/),
  /(logo|remetente|sender).{0,35}(garante|proves|guarantees).{0,30}(segur|safe|legitim)/,
  'Logo ou nome do remetente podem ser imitados. Confirme o pedido por um contato conhecido.','A logo or sender name can be imitated. Confirm the request through a known contact.'),
 m3:rubric(
  criterion('Explique que HTTPS protege a conexão.','Explain that HTTPS protects the connection.',/https.{0,60}(conexao|transporte|connection|transport|cifra|encrypt)/),
  criterion('Confira o domínio e respeite avisos do navegador.','Check the domain and respect browser warnings.',/(verific|confir|check|verify|respeit|respect).{0,60}(dominio|domain|aviso|warning)/),
  /https.{0,35}(garante|prova|guarantees|proves).{0,30}(segur|safe|legitim)/,
  'HTTPS protege o transporte; um site fraudulento também pode usar HTTPS. Confira o domínio e o contexto.','HTTPS protects transport; a fraudulent site can also use HTTPS. Check the domain and context.'),
 m4:rubric(
  criterion('Relacione coleta mínima à finalidade dos dados.','Connect minimum collection to the purpose of the data.',/(dado|data).{0,80}(necessari|minim|finalidade|purpose|necessary)|colet.{0,55}(necessari|minim)/),
  criterion('Explique quem pode acessar os dados.','Explain who may access the data.',/(limit|restr|control|defin).{0,70}(acesso|access|compartilh|sharing)/),
  /(remover|tirar|remove).{0,25}(nome|name).{0,35}(garante|guarantees|torna anonimo|makes anonymous)/,
  'Retirar nomes não garante anonimização: outros dados ainda podem identificar uma pessoa.','Removing names does not guarantee anonymity: other data may still identify a person.'),
 m5:rubric(
  criterion('Explique contenção e comunicação à equipe.','Explain containment and reporting to the team.',/(isol|conter|contain|desconect|disconnect).{0,70}(rede|network|estacao|device|computador)/),
  criterion('Preserve evidências e recupere em ambiente limpo.','Preserve evidence and recover in a clean environment.',/(preserv.{0,35}(evidencia|evidence)|recuper|restaur|recover|restore).{0,90}(limpo|clean|evidencia|evidence|backup)/),
  /(apagar|delete).{0,30}(log|evidencia|evidence).{0,30}(primeiro|first|resolve|solves)/,
  'Apagar registros prejudica a investigação. Contenha a exposição, avise a equipe e preserve evidências.','Deleting logs harms the investigation. Contain exposure, notify the team and preserve evidence.'),
 m6:rubric(
  criterion('Conceda permissões conforme a função do aplicativo.','Grant permissions according to the app purpose.',/(permiss|permission).{0,80}(necessari|funcao|finalidade|necessary|purpose|need)/),
  criterion('Explique atualização e bloqueio do aparelho.','Explain updates and device locking.',/(atualiz|update|bloqueio|screen lock|lock the).{0,60}(celular|aparelho|tela|device|screen|oficia|official)/),
  /(loja oficial|official store).{0,40}(garante|guarantees).{0,35}(segur|safe|sem risco|no risk)/,
  'A loja oficial reduz alguns riscos, mas não garante segurança. Avalie origem, necessidade e permissões.','An official store reduces some risks but does not guarantee safety. Review origin, need and permissions.'),
 m7:rubric(
  criterion('Explique cópias separadas e protegidas.','Explain separate, protected copies.',/(copia|backup|copie).{0,80}(separad|offline|imutav|separate|immutable|proteg|protect)/),
  criterion('Explique por que testar a restauração.','Explain why restoration must be tested.',/(test|verific|check).{0,60}(restaur|restore|recovery|recuper)/),
  /(sincroniz|sync).{0,45}(e o mesmo que backup|is the same as backup|garante recuperacao|guarantees recovery)/,
  'Sincronização pode propagar exclusão ou corrupção. Um backup precisa permitir restauração verificada.','Synchronization may propagate deletion or corruption. A backup must allow verified restoration.'),
 m8:rubric(
  criterion('Explique a consulta de nomes no DNS.','Explain DNS name lookup.',/dns.{0,70}(nome|name|consult|lookup|endereco|address)/),
  criterion('Diferencie endereço IP de porta/protocolo do serviço.','Distinguish an IP address from service port/protocol.',/(ip.{0,65}(endereco|address|pacote|packet)|porta.{0,40}(servico|protocolo)|port.{0,40}(service|protocol))/),
  /dns.{0,35}(garante|prova|guarantees|proves).{0,30}(identidade|identity|segur|safe)/,
  'DNS consulta registros. A resolução de um nome não comprova identidade ou confiança.','DNS queries records. Resolving a name does not prove identity or trust.'),
 m9:rubric(
  criterion('Explique cifragem e a necessidade de chave.','Explain encryption and the need for a key.',/(cifr|criptograf|encrypt).{0,75}(chave|key|conteudo|content|confidencial|confidential)/),
  criterion('Diferencie hash de assinatura.','Distinguish a hash from a signature.',/(hash.{0,65}(byte|compar|integridade|integrity)|assinatura.{0,65}(origem|chave)|signature.{0,65}(origin|key))/),
  /hash.{0,40}(descriptograf|decrypt|reversivel|reversible|recupera o texto|recovers the text)/,
  'Hash não é cifragem reversível. Ele resume bytes para comparação; assinatura tem outra finalidade.','A hash is not reversible encryption. It summarizes bytes for comparison; signatures have a different purpose.'),
 m10:rubric(
  criterion('Conceda apenas as permissões necessárias à tarefa.','Grant only permissions needed for the task.',/(permiss|permission|privileg).{0,70}(necessari|minim|necessary|need|least)/),
  criterion('Explique leitura, gravação ou execução e quem recebe o acesso.','Explain read, write or execute access and who receives it.',/(dono|grupo|outros|owner|group|user).{0,80}(leitura|grava|execu|read|writ|execut)/),
  /(777|administrador|administrator).{0,45}(sempre seguro|always safe|melhor para todos|best for everyone)/,
  'Permissões amplas aumentam exposição. A tarefa deve ter acesso mínimo e testes de acesso permitido e negado.','Broad permissions increase exposure. Use least privilege and test allowed and denied access.'),
 m11:rubric(
  criterion('Confira caminho e pasta antes de executar comandos.','Check the path and folder before running commands.',/(verific|confer|check|confirm).{0,65}(caminho|pasta|path|folder)/),
  criterion('Explique tratamento de falhas ou o nome literal do alvo.','Explain failure handling or a literal target name.',/(literalpath.{0,65}(literal|curinga|wildcard)|falha.{0,55}(tratar|catch|sucesso)|error.{0,55}(handl|catch|success)|try.{0,30}catch)/),
  /literalpath.{0,35}(expande|expands|interpreta|interprets).{0,20}(curinga|wildcard)/,
  'LiteralPath usa o nome literal. Mensagens de sucesso devem ocorrer após a operação concluída, com falhas tratadas.','LiteralPath uses the literal name. Success messages should follow completed operations, with failures handled.'),
 m12:rubric(
  criterion('Autenticação verifica identidade.','Authentication verifies identity.',/(autenticacao|authentication).{0,60}(identidade|quem|identity|who)/),
  criterion('Autorização decide permissões e escopos.','Authorization decides permissions and scopes.',/(autorizacao|authorization).{0,65}(permiss|acesso|escopo|permission|access|scope)/),
  /(autenticado|authenticated).{0,35}(pode acessar tudo|can access everything|tem todas as permissoes|has all permissions)/,
  'Estar autenticado não concede todos os acessos. O servidor verifica permissão para cada ação e recurso.','Being authenticated does not grant all access. The server checks permission for each action and resource.'),
 m13:rubric(
  criterion('Explique alinhamento com o From visível.','Explain alignment with the visible From.',/(dmarc|spf|dkim|from).{0,75}(alinha|align|visivel|visible)/),
  criterion('Explique a alternativa SPF ou DKIM aprovados e alinhados.','Explain the alternative of passing, aligned SPF or DKIM.',/spf.{0,85}(ou|or).{0,30}dkim|dkim.{0,85}(ou|or).{0,30}spf/),
  /dmarc.{0,40}(exige|requires).{0,30}(ambos|both|spf e dkim|spf and dkim)/,
  'DMARC passa por SPF aprovado e alinhado OU DKIM aprovado e alinhado; não exige ambos.','DMARC passes with passing aligned SPF OR passing aligned DKIM; it does not require both.'),
 m14:rubric(
  criterion('Explique público/identidade e papel do compartilhamento.','Explain sharing audience/identity and role.',/(compartilh|sharing|acesso|access).{0,80}(identidade|papel|publico|identity|role|audience)/),
  criterion('Teste acessos e limite o prazo quando necessário.','Test access and limit the lifetime when needed.',/(test|prazo|expir|lifetime).{0,60}(acesso|access|link|compartilh|sharing)/),
  /(nuvem|cloud|provedor|provider).{0,50}(cuida de toda|handles all|resolve toda|solves all).{0,30}(segur|security)/,
  'A responsabilidade é compartilhada. O cliente ainda cuida de dados, identidades e configurações sob seu controle.','Responsibility is shared. The customer still manages data, identities and settings under their control.'),
 m15:rubric(
  criterion('Explique regras com origem, destino e serviço.','Explain rules using source, destination and service.',/(regra|firewall|rule).{0,90}(origem|destino|porta|source|destination|port)/),
  criterion('Diferencie retorno de conexão de nova conexão inversa.','Distinguish connection replies from new reverse connections.',/(retorno|reply|stateful|estado).{0,90}(conexao|connection|nova|new)/),
  /(stateful|retorno|reply).{0,55}(libera|allows).{0,25}(qualquer|toda|any|all).{0,25}(conexao|connection)/,
  'Retorno reconhecido pelo estado não permite toda conexão nova no sentido inverso.','A state-recognized reply does not allow every new reverse-direction connection.'),
 m16:rubric(
  criterion('Correlacione registros por sessão, ação e resultado.','Correlate records by session, action and result.',/(registro|log|evidencia|evidence).{0,85}(sessao|acao|resultado|session|action|result|correla)/),
  criterion('Normalize horários preservando a marca original.','Normalize times while preserving the original timestamp.',/(horario|tempo|time|timestamp).{0,80}(utc|fuso|timezone|original|relogio|clock)/),
  /(horarios proximos|close timestamps).{0,35}(provam|prove|garantem|guarantee).{0,25}(mesma|same)/,
  'Horários próximos não provam a mesma atividade. Compare identificadores e preserve as marcas originais.','Close timestamps do not prove the same activity. Compare identifiers and preserve original timestamps.'),
 m17:rubric(
  criterion('Investigue processo/serviço pelo contexto.','Investigate process/service context.',/(processo|servico|process|service).{0,80}(conta|origem|finalidade|account|origin|purpose)/),
  criterion('Aplique conta dedicada e privilégios mínimos.','Apply a dedicated account and least privilege.',/(conta.{0,35}dedicad|dedicated account|privileg.{0,35}(minim|least|need))/),
  /(nome do processo|process name|cpu).{0,35}(prova|proves|garante|guarantees).{0,30}(malware|segur|safe)/,
  'Nome e CPU não bastam para concluir legitimidade. Verifique origem, conta, finalidade e comportamento.','A name and CPU usage do not establish legitimacy. Check origin, account, purpose and behavior.'),
 m18:rubric(
  criterion('Explique verificação de assinatura e identidade da chave.','Explain signature verification and key identity.',/(assinatura|signature).{0,85}(chave|origem|key|origin|verific|verify)/),
  criterion('Confira finalidade, validade ou revogação do certificado.','Check certificate purpose, validity or revocation.',/(certificado|certificate).{0,85}(finalidade|validade|revog|purpose|validity|revoc|expir)/),
  /https.{0,40}(garante|prova|guarantees|proves).{0,30}(documento|document|assinatura|signature)/,
  'HTTPS não valida a assinatura de um documento. São verificações diferentes, com contexto e confiança na chave.','HTTPS does not validate a document signature. These are separate checks involving context and key trust.'),
 m19:rubric(
  criterion('Valide entradas no servidor antes do processamento.','Validate input on the server before processing.',/(servidor|server).{0,80}(valid|entrada|input)|valid.{0,50}(servidor|server)/),
  criterion('Separe erro público de registro interno protegido.','Separate public errors from protected internal logs.',/(erro|error).{0,85}(public|registro|log|intern)|registro.{0,65}(segredo|token|control)/),
  /(validacao no navegador|browser validation).{0,40}(basta|e suficiente|is enough|is sufficient)/,
  'O cliente pode ser alterado. O servidor precisa validar entradas e também verificar autorização.','The client can be changed. The server must validate input and also check authorization.'),
 m20:rubric(
  criterion('Escolha o framework conforme o propósito da pergunta.','Choose the framework according to the question purpose.',/(framework|referencia|reference|attack|nist|owasp|csf).{0,85}(proposito|finalidade|pergunta|purpose|question|objetivo|goal)/),
  criterion('Separe evidências, hipóteses e lacunas.','Separate evidence, hypotheses and gaps.',/(evidencia|fato|evidence|fact).{0,85}(hipotese|lacuna|hypothes|gap)/),
  /(framework|attack|nist|owasp).{0,45}(confirma|prova|proves|confirms).{0,30}(ataque|attack)/,
  'Um framework organiza a análise, mas não confirma sozinho um ataque. Relate evidências e incertezas.','A framework organizes analysis but does not independently confirm an attack. Report evidence and uncertainty.'),
 m21:rubric(
  criterion('Priorize alertas por contexto e impacto.','Prioritize alerts by context and impact.',/(alerta|triagem|siem|alert|triage).{0,90}(contexto|impacto|context|impact|prioriz|priorit)/),
  criterion('Correlacione registros e separe hipótese de fato.','Correlate records and separate hypothesis from fact.',/(correla.{0,50}(registro|log|evidencia|evidence)|hipotese.{0,40}(fato|evidencia)|hypothes.{0,40}(fact|evidence))/),
  /(severidade|severity).{0,40}(sozinha basta|alone is enough|prova ataque|proves an attack)/,
  'Severidade é um sinal para investigar. Contexto, evidências e impacto orientam a prioridade.','Severity is a signal to investigate. Context, evidence and impact guide priority.'),
 m22:rubric(
  criterion('Teste o que a regra detecta e perde.','Test what the rule detects and misses.',/(regra|rule).{0,85}(detect|perde|miss|cobertura|coverage)/),
  criterion('Confira campos/coleta antes de criar exceções.','Check fields/collection before creating exceptions.',/(campo|coleta|field|collection|registro|log).{0,85}(falt|ausent|lacuna|missing|gap|funcion|working|verific|check)/),
  /(nenhum alerta|no alerts).{0,40}(prova|proves|garante|guarantees).{0,30}(sem ataque|no attack|segur|safe)/,
  'Nenhum alerta pode significar falha de coleta ou cobertura. Não equivale a ausência de ataque.','No alerts may mean collection or coverage failure. It does not mean no attack occurred.'),
 m23:rubric(
  criterion('Compare as duas direções e a janela do tráfego.','Compare both traffic directions and the time window.',/(trafego|traffic|fluxo|flow).{0,90}(direcao|direcoes|janela|direction|window)/),
  criterion('Explique que TLS limita a visibilidade do conteúdo.','Explain that TLS limits content visibility.',/tls.{0,85}(conteudo|visibilidade|content|visibility|cifra|encrypt)/),
  /(tls|volume alto|high volume).{0,40}(prova|proves|garante|guarantees).{0,30}(ataque|attack|segur|safe|exfiltr)/,
  'TLS e volume, isoladamente, não provam finalidade ou ataque. Correlacione contexto, direção e janela.','TLS and volume alone do not prove purpose or an attack. Correlate context, direction and time window.')
};

const example=criterion('Use um caso concreto e explique causa e consequência.','Use a concrete case and explain cause and consequence.',/(exemplo|por exemplo|imagine|conta|loja|escola|colega|lia|rui|email|e-mail|celular|arquivo|servidor|example|imagine|account|shop|school|classmate|device|file|server).{0,140}(porque|pois|assim|para |entao|se |por isso|because|so |therefore|when|if |to )|(?:porque|because|se |if ).{0,140}(conta|loja|escola|lia|email|arquivo|servidor|account|shop|school|file|server)/);
const limit=criterion('Explique um limite da proteção ou da conclusão.','Explain a limit of the protection or conclusion.',/(nao|not|doesn t|does not|cannot|can t|nem sempre|not always).{0,65}(garant|prov|resolve|impede|basta|substitui|protege|confirm|permit|prevent|solve|enough|replace|protect)|(?:limite|limitacao|limitation|limit is).{0,90}(protec|modelo|conclus|model|conclus|security)/);
export type ExplanationAssessment={status:'correct'|'incorrect'|'incomplete';criteria:{label:Bilingual;met:boolean}[];correction:Bilingual|null;excerpt:string|null};
export const normalizeExplanation=(text:string)=>text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[’']/g,' ').replace(/\s+/g,' ').trim();
export function assessExplanation(id:string,text:string):ExplanationAssessment{
 const r=explanationRubrics[id];if(!r)throw new Error('Unknown lesson rubric');
 const sentences=text.slice(0,3000).split(/[.!?;\n]+/).map(s=>({raw:s.trim(),normal:normalizeExplanation(s)})).filter(s=>s.normal.split(' ').length>=5);
 const criteria=[...r.criteria,example,limit].map((c,i)=>({label:c.label,met:sentences.some(s=>{
  const match=c.pattern.exec(s.normal);if(!match)return false;
  // Do not count a denied definition as a positive explanation of the concept.
  return i>=2||!/\b(nao|not|never|nunca|does not|doesn t)\s+(?:\w+\s+){0,2}(verific|identific|confirm|protege|protect|decide|checks|identifies|verifies|e\b|is\b)/.test(match[0]);
 })}));
 const prose=normalizeExplanation(text).split(' ').length>=35&&sentences.length>=2;
 criteria.push({label:b('Desenvolva o raciocínio em pelo menos duas frases e 35 palavras; uma lista de termos não explica o tema.','Develop the reasoning in at least two sentences and 35 words; a term list does not explain the topic.'),met:prose});
 // A negated misconception or a quotation explicitly described as wrong is not an asserted error.
 const mistake=sentences.find(s=>{const match=r.mistake.pattern.exec(s.normal);if(!match)return false;const before=s.normal.slice(0,match.index);return !/(nao|not|nunca|never|errado|wrong|falso|false|mito|myth|incorreto|incorrect|evite|avoid)\b/.test(before+match[0])});
 return {status:mistake?'incorrect':criteria.every(c=>c.met)?'correct':'incomplete',criteria,correction:mistake?r.mistake.correction:null,excerpt:mistake?.raw||null};
}
