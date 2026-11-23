import React from 'react';
import {Icon} from './Icon.jsx';
/** Botão só com ícone — exige label (vira aria-label e title). */
export function IconButton({icon,label,size='md',variant='ghost',className='',...rest}){
  const cls=['ini-iconbtn',size==='sm'?'ini-iconbtn--sm':'',variant==='outlined'?'ini-iconbtn--outlined':'',className].filter(Boolean).join(' ');
  return <button type="button" className={cls} aria-label={label} title={label} {...rest}><Icon name={icon} size={size==='sm'?18:22}/></button>;
}
