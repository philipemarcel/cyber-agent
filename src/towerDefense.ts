import { b, type Difficulty, type MinigameResult } from './core';
export type TrafficType='web'|'backup'|'admin'|'signature'|'unknown';
export type TowerType='firewall'|'signature'|'review';
export type Tower={slot:number;type:TowerType;broad:boolean;cooldown:number};
export type Packet={id:number;type:TrafficType;position:number;checks:number};
export type Outcome='delivered'|'blocked'|'reviewed'|'missed'|'false-positive'|'unreviewed';
export type Event={id:number;type:TrafficType;outcome:Outcome};
export const towers={
 firewall:{cost:25,label:b('Firewall','Firewall'),symbol:'F',description:b('Política: bloqueia administração externa não autorizada (TCP/22). Preserva portal e backup previstos.','Policy: blocks unauthorized external administration (TCP/22). Preserves expected portal and backup.')},
 signature:{cost:25,label:b('Sensor de assinatura','Signature sensor'),symbol:'S',description:b('Reconhece o padrão malicioso conhecido do laboratório, em conteúdo visível. Não lê TLS nem detecta todo ataque.','Recognizes the lab’s known malicious pattern in visible content. Does not read TLS or detect every attack.')},
 review:{cost:25,label:b('Triagem contextual','Contextual triage'),symbol:'T',description:b('Encaminha a transferência TLS sem finalidade confirmada para análise. Não a declara maliciosa; requer duas verificações.','Routes the TLS transfer without confirmed purpose for analysis. Does not declare it malicious; requires two checks.')}
};
export const trafficTypes={
 web:{symbol:'W',label:b('Portal autorizado · TCP/443','Approved portal · TCP/443'),color:'#bce38b'},
 backup:{symbol:'B',label:b('Backup aprovado · 8 MB/TLS','Approved backup · 8 MB/TLS'),color:'#83d9e2'},
 admin:{symbol:'A',label:b('Administração externa proibida · TCP/22','Prohibited external admin · TCP/22'),color:'#f49499'},
 signature:{symbol:'M',label:b('Padrão malicioso conhecido · conteúdo visível','Known malicious pattern · visible content'),color:'#f4bd7a'},
 unknown:{symbol:'?',label:b('TLS sem finalidade confirmada · investigar','TLS without confirmed purpose · investigate'),color:'#c7a6ed'}
};
export const slots=[180,430,680,930];
export type TowerState={difficulty:Difficulty;short:boolean;wave:number;maxWaves:number;tick:number;credits:number;health:number;phase:'planning'|'wave'|'finished';towers:Tower[];packets:Packet[];queue:TrafficType[];spawned:number;events:Event[]};
export function newTowerGame(difficulty:Difficulty,short=false):TowerState{return {difficulty,short,wave:0,maxWaves:short?1:3,tick:0,credits:{easy:100,normal:85,hard:75}[difficulty],health:100,phase:'planning',towers:[],packets:[],queue:[],spawned:0,events:[]};}
export function configureTower(s:TowerState,slot:number,type:TowerType|null,broad=false):TowerState{
 if(s.phase==='finished'||!slots[slot])return s;
 const old=s.towers.find(t=>t.slot===slot);const credits=s.credits+(old?towers[old.type].cost:0)-(type?towers[type].cost:0);
 if(credits<0)return s;
 return {...s,credits,towers:[...s.towers.filter(t=>t.slot!==slot),...(type?[{slot,type,broad,cooldown:0}]:[])]};
}
export function startTowerWave(s:TowerState):TowerState{if(s.phase!=='planning')return s;const wave=s.wave+1;const lists:TrafficType[][]=[['web','admin','backup','signature','unknown','web'],['backup','unknown','admin','web','signature','admin','web'],['unknown','signature','web','admin','backup','signature','unknown','web']];return {...s,wave,tick:0,phase:'wave',queue:lists[wave-1],packets:[],towers:s.towers.map(t=>({...t,cooldown:0}))};}
export function towerMatches(t:Tower,p:Packet){return t.type==='firewall'?(t.broad||p.type==='admin'):t.type==='signature'?p.type==='signature':p.type==='unknown';}
export function towerTick(s:TowerState):TowerState{
 if(s.phase!=='wave')return s;
 const tick=s.tick+1;const packets=s.packets.map(p=>({...p,position:p.position+{easy:9,normal:12,hard:16}[s.difficulty]}));const queue=[...s.queue];let spawned=s.spawned;const events=[...s.events];let health=s.health;
 if(queue.length&&(tick===1||tick%{easy:18,normal:14,hard:9}[s.difficulty]===0)){packets.push({id:++spawned,type:queue.shift()!,position:0,checks:0});}
 const activeTowers=s.towers.map(t=>({...t,cooldown:Math.max(0,t.cooldown-1)}));const removed=new Set<number>();
 for(const t of activeTowers){if(t.cooldown)continue;const targets=packets.filter(p=>!removed.has(p.id)&&Math.abs(p.position-slots[t.slot])<=130&&towerMatches(t,p)).sort((a,b)=>b.position-a.position);const p=targets[0];if(!p)continue;t.cooldown=t.type==='review'?6:4;p.checks++;const required=t.type==='review'?2:1;if(p.checks<required)continue;removed.add(p.id);events.push({id:p.id,type:p.type,outcome:t.type==='review'?'reviewed':p.type==='web'||p.type==='backup'?'false-positive':p.type==='unknown'?'unreviewed':'blocked'});}
 for(const p of packets){if(!removed.has(p.id)&&p.position>=1100){removed.add(p.id);const safe=p.type==='web'||p.type==='backup';events.push({id:p.id,type:p.type,outcome:safe?'delivered':'missed'});if(p.type==='admin'||p.type==='signature')health=Math.max(0,health-20);}}
 const alive=packets.filter(p=>!removed.has(p.id));const ended=!queue.length&&!alive.length;
 return {...s,tick,packets:alive,queue,spawned,events,health,towers:activeTowers,phase:ended?(s.wave===s.maxWaves?'finished':'planning'):'wave',credits:s.credits+(ended?15:0)};
}
export function towerAdvance(s:TowerState,ticks=10){let next=s;for(let i=0;i<ticks;i++)next=towerTick(next);return next;}
export function towerSummary(s:TowerState){const correct=s.events.filter(e=>['delivered','blocked','reviewed'].includes(e.outcome)).length;return {correct,total:s.events.length,score:s.events.length?Math.round(correct/s.events.length*100):0,blocked:s.events.filter(e=>e.outcome==='blocked').length,delivered:s.events.filter(e=>e.outcome==='delivered').length,reviewed:s.events.filter(e=>e.outcome==='reviewed').length,missed:s.events.filter(e=>(e.outcome==='missed'||e.outcome==='unreviewed')).length,falsePositives:s.events.filter(e=>e.outcome==='false-positive').length};}
export function towerResult(s:TowerState):MinigameResult{const r=towerSummary(s);return {score:r.score,passed:s.phase==='finished'&&r.score>=70,xp:s.phase==='finished'&&r.score>=70?Math.round(r.score/100*(s.short?50:{easy:100,normal:150,hard:200}[s.difficulty])):0,correct:r.correct,total:r.total,feedback:[b('Firewall atende uma política de acesso; o sensor só reconhece a assinatura fornecida. Triagem encaminha o desconhecido para análise, sem confirmar ataque.','Firewall applies an access policy; the sensor only recognizes the supplied signature. Triage routes unknown traffic for analysis without confirming an attack.'),b(`${r.falsePositives} fluxos legítimos bloqueados e ${r.missed} casos sem tratamento. A nota combina disponibilidade, controle de acesso e visibilidade.`,`${r.falsePositives} legitimate flows blocked and ${r.missed} untreated cases. The score combines availability, access control and visibility.`)]};}
export function routePoint(distance:number){const points=[[30,140],[250,140],[250,60],[500,60],[500,220],[710,220],[710,140],[770,140]];let left=Math.max(0,Math.min(1100,distance))/1100*1060;for(let i=1;i<points.length;i++){const [x,y]=points[i-1], [nx,ny]=points[i];const length=Math.abs(nx-x)+Math.abs(ny-y);if(left<=length)return {x:x+(nx-x)*left/length,y:y+(ny-y)*left/length};left-=length;}return {x:770,y:140};}
