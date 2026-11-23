import React from 'react';
import {Icon} from '../core/Icon.jsx';
/** Rótulo de tipo de lançamento: Entrada (seta para dentro) ou Despesa (seta para fora). */
export function FlowTag({kind='expense',className=''}){
  const inc=kind==='income';
  return <span className={'ini-flow ini-flow--'+kind+' '+className}><Icon name={inc?'arrow-down-left':'arrow-up-right'} size={16} strokeWidth={2}/>{inc?'Entrada':'Despesa'}</span>;
}
