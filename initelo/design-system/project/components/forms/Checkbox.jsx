import React from 'react';
import {Icon} from '../core/Icon.jsx';
/** Caixa de seleção com rótulo e detalhe opcional — base das listas de conferência. */
export function Checkbox({label,detail,disabled=false,className='',...rest}){
  return <label className={['ini-check',disabled?'is-disabled':'',className].filter(Boolean).join(' ')}>
    <input type="checkbox" className="ini-check__input" disabled={disabled} {...rest}/>
    <span className="ini-check__box" aria-hidden="true"><Icon name="check" size={16} strokeWidth={2.5}/></span>
    <span className="ini-check__text"><span>{label}</span>{detail&&<span className="ini-check__detail">{detail}</span>}</span>
  </label>;
}
