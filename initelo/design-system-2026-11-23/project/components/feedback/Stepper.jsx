import React from 'react';
import {Icon} from '../core/Icon.jsx';
/** Etapas de um exercício: Monte a tabela → Pergunte à IA → Confira → Decida. */
export function Stepper({steps=[],current=0,compact=false,className=''}){
  return <ol className={'ini-steps'+(compact?' ini-steps--compact':'')+' '+className}>{steps.map(function(s,i){
    const st=i<current?'done':i===current?'current':'todo';const lab=typeof s==='string'?s:s.label;
    return <li key={i} className={'ini-step ini-step--'+st} aria-current={st==='current'?'step':undefined}>
      <span className="ini-step__dot" aria-hidden="true">{st==='done'?<Icon name="check" size={16} strokeWidth={2.5}/>:i+1}</span>
      <span className="ini-step__label">{st==='done'&&<span className="ini-sr">Concluída: </span>}{compact&&st==='current'?'Etapa '+(i+1)+' de '+steps.length+' · '+lab:lab}</span>
      {i<steps.length-1&&<span className="ini-step__line" aria-hidden="true"></span>}
    </li>;})}</ol>;
}
