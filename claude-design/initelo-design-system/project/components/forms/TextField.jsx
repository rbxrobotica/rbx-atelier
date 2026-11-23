import React from 'react';
import {Icon} from '../core/Icon.jsx';
/** Campo de texto com rótulo, dica e erro. Use prefix="R$" + numeric para valores. */
export function TextField({label,hint,error,prefix,suffix,multiline=false,rows=3,numeric=false,optional=false,disabled=false,id,className='',...rest}){
  const uid=React.useId();const fid=id||uid;const mid=fid+'-msg';
  const cls=['ini-field',error?'is-error':'',disabled?'is-disabled':'',className].filter(Boolean).join(' ');
  const Tag=multiline?'textarea':'input';
  return <div className={cls}>
    {label&&<label className="ini-field__label" htmlFor={fid}>{label}{optional&&<span className="ini-field__opt"> (opcional)</span>}</label>}
    <div className="ini-field__control">
      {prefix&&<span className="ini-field__affix">{prefix}</span>}
      <Tag id={fid} className={'ini-field__input'+(numeric?' ini-field__input--num ini-num':'')} rows={multiline?rows:undefined} inputMode={numeric?'decimal':undefined} disabled={disabled} aria-invalid={error?true:undefined} aria-describedby={(error||hint)?mid:undefined} {...rest}/>
      {suffix&&<span className="ini-field__affix">{suffix}</span>}
    </div>
    {error?<p className="ini-field__msg ini-field__msg--error" id={mid}><Icon name="circle-alert" size={16}/><span>{error}</span></p>:hint?<p className="ini-field__msg" id={mid}>{hint}</p>:null}
  </div>;
}
