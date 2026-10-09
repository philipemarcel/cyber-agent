import { useState } from 'react';
export const studyKey='cyber-agent-study-preferences';
export function parseStudyPreferences(value:unknown):{focus:boolean;comfortable:boolean}{
 if(!value||typeof value!=='object'||Array.isArray(value))return {focus:false,comfortable:false};
 const v=value as Record<string,unknown>;return {focus:v.focus===true,comfortable:v.comfortable===true};
}
export function useStudyPreferences(){
 const [value,setValue]=useState(()=>{try{return parseStudyPreferences(JSON.parse(localStorage.getItem(studyKey)||'null'))}catch{return parseStudyPreferences(null)}});
 function change(key:'focus'|'comfortable',next:boolean){setValue(v=>{const updated={...v,[key]:next};try{localStorage.setItem(studyKey,JSON.stringify(updated))}catch{/* Usable in this session when storage is unavailable. */}return updated})}
 return {...value,setFocus:(next:boolean)=>change('focus',next),setComfortable:(next:boolean)=>change('comfortable',next)};
}
