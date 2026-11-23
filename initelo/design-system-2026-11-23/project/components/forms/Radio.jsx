import React from 'react';
/** Opção única dentro de um grupo (mesmo name). */
export function Radio({label,detail,disabled=false,className='',...rest}){
  return <label className={['ini-check','ini-check--radio',disabled?'is-disabled':'',className].filter(Boolean).join(' ')}>
    <input type="radio" className="ini-check__input" disabled={disabled} {...rest}/>
    <span className="ini-check__box" aria-hidden="true"></span>
    <span className="ini-check__text"><span>{label}</span>{detail&&<span className="ini-check__detail">{detail}</span>}</span>
  </label>;
}
