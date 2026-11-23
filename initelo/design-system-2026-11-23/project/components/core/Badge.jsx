import React from 'react';
import {Icon} from './Icon.jsx';
/** Selo curto de status — sempre texto, com ícone opcional; nunca só cor. */
export function Badge({tone='neutral',icon,className='',children}){
  return <span className={'ini-badge'+(tone!=='neutral'?' ini-badge--'+tone:'')+' '+className}>{icon?<Icon name={icon} size={14} strokeWidth={2}/>:null}{children}</span>;
}
