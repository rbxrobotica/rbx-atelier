import React from 'react';
/** Indicador de espera curto, com texto. */
export function Spinner({size=20,label='Carregando…',showLabel=true,className=''}){
  return <span className={'ini-spinner-wrap '+className} role="status"><span className="ini-spinner" style={{fontSize:size}} aria-hidden="true"></span><span className={showLabel?'ini-spinner-wrap__label':'ini-sr'}>{label}</span></span>;
}
