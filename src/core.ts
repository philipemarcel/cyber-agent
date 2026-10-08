import { create } from 'zustand';
import i18next from 'i18next';
export type Lang = 'pt' | 'en';
export type Difficulty = 'easy' | 'normal' | 'hard';
export type Bilingual = { pt:string; en:string };
export const b = (pt:string,en:string):Bilingual => ({pt,en});
void i18next.init({lng:'pt',fallbackLng:'pt',resources:{pt:{translation:{app:'Academia de cibersegurança'}},en:{translation:{app:'Cybersecurity academy'}}}});
export const KEY = 'cyber-agent-save-v1';
export interface Save {version:21;lang:Lang;xp:number;completed:Record<string,number>;earned:Record<string,number>;avatar:number;placement:boolean}
export const initial:Save = {version:21,lang:'pt',xp:0,completed:{},earned:{},avatar:0,placement:false};
export function normalizeSave(v:unknown):Save|null {
 if(!v || typeof v!=='object')return null;
 const s=v as Save;const version=(v as {version:unknown}).version;if(version!==1&&version!==2&&version!==3&&version!==4&&version!==5&&version!==6&&version!==7&&version!==8&&version!==9&&version!==10&&version!==11&&version!==12&&version!==13&&version!==14&&version!==15&&version!==16&&version!==17&&version!==18&&version!==19&&version!==20&&version!==21)return null;
 const idPattern=version===1?/^(m[1-3]|s[1-3][ab])$/:version===2?/^(m[1-7]|s[1-7][ab])$/:version===3?/^(m[1-8]|s[1-8][ab])$/:version===4?/^(m[1-9]|s[1-9][ab])$/:version===5?/^(m(?:[1-9]|10)|s(?:[1-9]|10)[ab])$/:version===6?/^(m(?:[1-9]|1[01])|s(?:[1-9]|1[01])[ab])$/:version===7?/^(m(?:[1-9]|1[0-2])|s(?:[1-9]|1[0-2])[ab])$/:version===8?/^(m(?:[1-9]|1[0-3])|s(?:[1-9]|1[0-3])[ab])$/:version===9?/^(m(?:[1-9]|1[0-4])|s(?:[1-9]|1[0-4])[ab])$/:version===10?/^(m(?:[1-9]|1[0-5])|s(?:[1-9]|1[0-5])[ab])$/:version===11?/^(m(?:[1-9]|1[0-6])|s(?:[1-9]|1[0-6])[ab])$/:version===12?/^(m(?:[1-9]|1[0-7])|s(?:[1-9]|1[0-7])[ab])$/:version===13?/^(m(?:[1-9]|1[0-8])|s(?:[1-9]|1[0-8])[ab])$/:version===14?/^(m(?:[1-9]|1[0-9])|s(?:[1-9]|1[0-9])[ab])$/:version===15?/^(m(?:[1-9]|1[0-9]|20)|s(?:[1-9]|1[0-9]|20)[ab])$/:version===16?/^(m(?:[1-9]|1[0-9]|2[01])|s(?:[1-9]|1[0-9]|2[01])[ab])$/:version===17?/^(m(?:[1-9]|1[0-9]|2[0-2])|s(?:[1-9]|1[0-9]|2[0-2])[ab])$/:version===18?/^(m(?:[1-9]|1[0-9]|2[0-3])|s(?:[1-9]|1[0-9]|2[0-3])[ab])$/:version===19?/^(m(?:[1-9]|1[0-9]|2[0-3])|s(?:[1-9]|1[0-9]|2[0-3])[ab]|a1s?)$/:version===20?/^(m(?:[1-9]|1[0-9]|2[0-3])|s(?:[1-9]|1[0-9]|2[0-3])[ab]|a[12]s?)$/:/^(m(?:[1-9]|1[0-9]|2[0-4])|s(?:[1-9]|1[0-9]|2[0-4])[ab]|a[12]s?)$/;
 const record=(r:unknown,earned:boolean)=>!!r && typeof r==='object' && !Array.isArray(r) && Object.entries(r).every(([k,n])=>idPattern.test(k) && Number.isInteger(n) && n>=(earned?0:70) && n<=(earned?(k.startsWith('s')||/^a[12]s$/.test(k)?50:200):100));
 if(!['pt','en'].includes(s.lang)||!Number.isInteger(s.xp)||s.xp<0||s.xp>(version===21?7700:version===20?7400:version===19?7150:version===18?6900:version===17?6600:version===16?6300:version===15?6000:version===14?5700:version===13?5400:version===12?5100:version===11?4800:version===10?4500:version===9?4200:version===8?3900:version===7?3600:version===6?3300:version===5?3000:version===4?2700:version===3?2400:2100)||!Number.isInteger(s.avatar)||s.avatar<0||s.avatar>=4||typeof s.placement!=='boolean'||!record(s.completed,false)||!record(s.earned,true)||s.xp!==Object.values(s.earned).reduce((a,n)=>a+n,0)||!Object.keys(s.earned).every(k=>!!s.completed[k])||!Object.keys(s.completed).every(k=>Object.hasOwn(s.earned,k)))return null;
 return {...s,version:21,completed:{...s.completed},earned:{...s.earned}};
}
export function validSave(v:unknown):v is Save{return (v as Save|null)?.version===21&&normalizeSave(v)!==null}
function read():Save {try{return normalizeSave(JSON.parse(localStorage.getItem(KEY)||'null'))||{...initial,completed:{},earned:{}}}catch{return {...initial,completed:{},earned:{}}}}
export interface SaveProvider {load():Save;save(s:Save):boolean}
export const localProvider:SaveProvider={load:read,save(s){try{localStorage.setItem(KEY,JSON.stringify(s));return true}catch{return false}}};
export function xpFor(score:number,d:Difficulty,sidequest:boolean){return Math.round(score/100*(sidequest?50:{easy:100,normal:150,hard:200}[d]));}
export function reward(s:Save,id:string,score:number,d:Difficulty,sidequest:boolean):Save {
 if(!Number.isInteger(score)||score>100||score<0||!(/^(m(?:[1-9]|1[0-9]|2[0-4])|s(?:[1-9]|1[0-9]|2[0-4])[ab]|a[12]s?|placement)$/.test(id)))return s;
 if(/^a[12]s$/.test(id)&&!sidequest||/^a[12]$/.test(id)&&sidequest)return s;
 if(score<70)return s;
 if(id==='placement')return {...s,placement:true};
 const best=s.completed[id]||0;const earned=s.earned[id]||0;
 const payout=xpFor(score,d,sidequest);const delta=Math.max(0,payout-earned);
 return {...s,xp:s.xp+delta,earned:{...s.earned,[id]:Math.max(earned,payout)},completed:{...s.completed,[id]:Math.max(best,score)}};
}
export interface MinigameResult {score:number;xp:number;passed:boolean;correct:number;total:number;feedback:Bilingual[]}
export function phishingScore(flags:boolean[],selected:number[]){return Math.round(flags.filter((bad,i)=>bad===selected.includes(i)).length/flags.length*100)}
export const useSave=create<{save:Save;storageOk:boolean;set:(s:Save)=>void;patch:(p:Partial<Save>)=>void}>((set,get)=>({save:read(),storageOk:true,set(s){set({save:s,storageOk:localProvider.save(s)});void i18next.changeLanguage(s.lang)},patch(p){get().set({...get().save,...p})}}));
