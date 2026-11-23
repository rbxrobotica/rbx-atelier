import React from 'react';
import {Icon} from './Icon.jsx';
/** Botão de ação. O rótulo começa com verbo no infinitivo ("Começar", "Conferir respostas"). */
export function Button({variant='primary',size='md',icon,iconRight,loading=false,loadingLabel='Carregando…',disabled=false,fullWidth=false,href,type='button',className='',children,...rest}){
  const cls=['ini-btn','ini-btn--'+variant,size!=='md'?'ini-btn--'+size:'',fullWidth?'ini-btn--full':'',loading?'is-loading':'',className].filter(Boolean).join(' ');
  const isz=size==='sm'?16:20;
  const inner=<React.Fragment>
    {loading?<span className="ini-spinner" aria-hidden="true"></span>:icon?<Icon name={icon} size={isz}/>:null}
    <span>{loading?loadingLabel:children}</span>
    {!loading&&iconRight?<Icon name={iconRight} size={isz}/>:null}
  </React.Fragment>;
  if(href&&!disabled)return <a className={cls} href={href} {...rest}>{inner}</a>;
  return <button className={cls} type={type} disabled={disabled} aria-busy={loading||undefined} {...rest}>{inner}</button>;
}
