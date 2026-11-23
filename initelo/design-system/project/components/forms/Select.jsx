import React from 'react';
import {Icon} from '../core/Icon.jsx';
/** Seleção nativa com a mesma moldura do TextField. */
export function Select({label,hint,error,options=[],placeholder,disabled=false,id,className='',children,...rest}){
  const uid=React.useId();const fid=id||uid;const mid=fid+'-msg';
  const cls=['ini-field',error?'is-error':'',disabled?'is-disabled':'',className].filter(Boolean).join(' ');
  return <div className={cls}>
    {label&&<label className="ini-field__label" htmlFor={fid}>{label}</label>}
    <div className="ini-field__control">
      <select id={fid} className="ini-field__input" disabled={disabled} aria-invalid={error?true:undefined} aria-describedby={(error||hint)?mid:undefined} {...rest}>
        {placeholder&&<option value="">{placeholder}</option>}
        {options.map(function(o){const v=typeof o==='string'?o:o.value;const l=typeof o==='string'?o:o.label;return <option key={v} value={v}>{l}</option>;})}
        {children}
      </select>
      <span className="ini-field__affix"><Icon name="chevron-down" size={18}/></span>
    </div>
    {error?<p className="ini-field__msg ini-field__msg--error" id={mid}><Icon name="circle-alert" size={16}/><span>{error}</span></p>:hint?<p className="ini-field__msg" id={mid}>{hint}</p>:null}
  </div>;
}
