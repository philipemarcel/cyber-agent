import { Check } from 'lucide-react';
import { useSave } from './core';

/** Selection is separate from the correctness feedback shown after confirmation. */
export default function AnswerSelection({selected}:{selected:boolean}) {
  const en=useSave(s=>s.save.lang)==='en';
  return selected ? <span className="answer-selection"><Check size={20} aria-hidden="true"/><span>{en?'Selected':'Selecionada'}</span></span> : null;
}
