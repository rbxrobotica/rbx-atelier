import React from 'react';
import {Icon} from '../core/Icon.jsx';
import {IconButton} from '../core/IconButton.jsx';
const ICONS={info:'info',success:'circle-check',warning:'triangle-alert',error:'circle-alert'};
/** Aviso em linha: informação, sucesso, atenção ou erro — sempre com ícone e texto. */
export function Alert({tone='info',title,children,action,onClose,className=''}){
  return <div className={'ini-alert ini-alert--'+tone+' '+className} role={tone==='error'?'alert':'status'}>
    <Icon className="ini-alert__icon" name={ICONS[tone]} size={20}/>
    <div className="ini-alert__body">{title&&<span className="ini-alert__title">{title}</span>}{children&&<span>{children}</span>}{action&&<div className="ini-alert__action">{action}</div>}</div>
    {onClose&&<IconButton className="ini-alert__close" size="sm" icon="x" label="Fechar aviso" onClick={onClose}/>}
  </div>;
}
