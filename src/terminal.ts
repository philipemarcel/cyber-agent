import { b, type Bilingual, type Difficulty } from './core';
export interface LabState {inspected:boolean;isolated:boolean;collected:boolean;reported:boolean;verified:boolean;restored:boolean;errors:number}
export const newLab=():LabState=>({inspected:false,isolated:false,collected:false,reported:false,verified:false,restored:false,errors:0});
export const targetHost=(d:Difficulty)=>d==='easy'?'workstation-07':d==='normal'?'workstation-12':'workstation-23';
export function objectives(s:LabState,d:Difficulty):{label:Bilingual;done:boolean}[]{return [
 {label:b('Investigar o alerta','Investigate the alert'),done:s.inspected},
 {label:b('Isolar a estação afetada','Isolate the affected workstation'),done:s.isolated},
 ...(d!=='easy'?[{label:b('Preservar evidências','Preserve evidence'),done:s.collected}]:[]),
 {label:b('Notificar a equipe','Notify the team'),done:s.reported},
 ...(d==='hard'?[{label:b('Validar a cópia protegida','Validate the protected copy'),done:s.verified},{label:b('Recuperar em ambiente limpo','Recover in a clean environment'),done:s.restored}]:[])
];}
export function labScore(s:LabState,d:Difficulty){const goals=objectives(s,d);if(!goals.every(o=>o.done))return 0;return Math.max(0,100-s.errors*15)}
export function runLabCommand(s:LabState,raw:string,d:Difficulty):{state:LabState;output:Bilingual;warning?:boolean}{
 const input=raw.trim().toLowerCase().replace(/\s+/g,' ');const host=targetHost(d);
 const out=(pt:string,en:string,state=s,warning=false)=>({state,output:b(pt,en),warning});
 const unsafe=(pt:string,en:string)=>out(pt,en,{...s,errors:s.errors+1},true);
 if(input==='help')return out(`Comandos do laboratório: status | inspect | isolate ${host} | collect | report | verify-backup | restore | clear. Nenhum comando do sistema operacional é executado.`,`Laboratory commands: status | inspect | isolate ${host} | collect | report | verify-backup | restore | clear. No operating system commands are executed.`);
 if(input==='status')return out(`NEXUS LAB / ${host}: ${s.isolated?'ISOLATED':'CONNECTED'} / incidente: ${s.reported?'REPORTED':'OPEN'} / dados: ${s.restored?'RECOVERED':'AT RISK'}.`,`NEXUS LAB / ${host}: ${s.isolated?'ISOLATED':'CONNECTED'} / incident: ${s.reported?'REPORTED':'OPEN'} / data: ${s.restored?'RECOVERED':'AT RISK'}.`);
 if(input==='inspect')return out(`09:41 / ${host} / arquivos renomeados em lote; nota de resgate detectada.\n09:42 / workstation-02 / atividade normal.\nO alerta indica suspeita de ransomware. Contenha a estação afetada e siga o plano de resposta.`,`09:41 / ${host} / bulk file renaming; ransom note detected.\n09:42 / workstation-02 / normal activity.\nThe alert indicates suspected ransomware. Contain the affected workstation and follow the response plan.`,{...s,inspected:true});
 if(input.startsWith('isolate ')){
  if(!s.inspected)return out('Investigue o alerta com inspect antes de escolher uma estação.','Investigate with inspect before choosing a workstation.',s,true);
  if(input!==`isolate ${host}`)return unsafe('A estação indicada não é a afetada. Isolar o alvo errado interrompe um serviço e deixa o incidente conectado. Revise inspect.','The selected workstation is not affected. Isolating the wrong target interrupts a service and leaves the incident connected. Review inspect.');
  return out('Estação afetada isolada da rede no laboratório. O serviço normal foi preservado.','Affected workstation isolated from the network in the laboratory. Normal service was preserved.',{...s,isolated:true});
 }
 if(input==='collect'){
  if(!s.isolated)return out('Primeiro contenha o acesso à rede. Depois preserve os registros sem alterar o sistema suspeito.','First contain network access. Then preserve records without altering the suspect system.',s,true);
  return out('Cópia simulada dos registros preservada para a equipe. Nada foi apagado.','Simulated records copy preserved for the team. Nothing was deleted.',{...s,collected:true});
 }
 if(input==='report'){
  if(!s.isolated||(d!=='easy'&&!s.collected))return out('Antes de fechar o relatório, isole a estação e cumpra os objetivos de preservação.','Before completing the report, isolate the workstation and meet preservation objectives.',s,true);
  return out('Relatório registrado na equipe fictícia da NEXUS. Nenhuma mensagem real foi enviada.','Report recorded for the fictional NEXUS team. No real message was sent.',{...s,reported:true});
 }
 if(input==='verify-backup'){
  if(!s.reported)return out('A equipe precisa avaliar o incidente antes de iniciar o plano de recuperação. Use report quando a contenção estiver pronta.','The team needs to assess the incident before recovery planning. Use report when containment is ready.',s,true);
  return out('Cópia offline anterior ao incidente verificada em ambiente limpo. Chaves e dependências disponíveis; integridade conferida.','Pre-incident offline copy verified in a clean environment. Keys and dependencies available; integrity checked.',{...s,verified:true});
 }
 if(input==='restore'){
  if(!s.isolated||!s.reported||!s.verified)return unsafe('Recuperação bloqueada. Não conecte a cópia ao sistema suspeito. Contenha, reporte e valide o backup em um ambiente confiável.','Recovery blocked. Do not connect the copy to the suspect system. Contain, report and validate the backup in a trusted environment.');
  return out('Serviço fictício recuperado em ambiente limpo autorizado. A estação suspeita continua isolada para análise.','Fictional service recovered in an authorized clean environment. Suspect workstation remains isolated for analysis.',{...s,restored:true});
 }
 return out('Comando não reconhecido. Digite help. Este terminal aceita apenas ações do laboratório.','Unknown command. Type help. This terminal only accepts laboratory actions.',s,true);
}
