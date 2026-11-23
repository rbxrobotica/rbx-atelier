import React from 'react';
import {Icon} from '../core/Icon.jsx';
/** Barra de progresso com rótulo e valor por escrito ("5 de 24 aulas"). */
export function ProgressBar({value=0,max=100,label,valueText,tone='action',size='md',className=''}){
  const pct=Math.max(0,Math.min(100,Math.round(value/max*100)));const done=pct>=100;
  const text=valueText||(done?'Concluído':pct+'%');
  const cls=['ini-progress',tone==='course'?'ini-progress--course':'',size==='sm'?'ini-progress--sm':'',done?'is-complete':'',className].filter(Boolean).join(' ');
  return <div className={cls}>
    <div className="ini-progress__head">{label?<span className="ini-progress__label">{label}</span>:<span></span>}<span className="ini-progress__value ini-num">{done&&<Icon name="circle-check" size={16}/>}{text}</span></div>
    <div className="ini-progress__track" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} aria-valuetext={text} aria-label={typeof label==='string'?label:'Progresso'}><div className="ini-progress__fill" style={{width:pct+'%'}}></div></div>
  </div>;
}
