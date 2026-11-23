import React from 'react';
import {Icon} from '../core/Icon.jsx';
/** Estado vazio: diz o que falta e qual é o próximo passo. */
export function EmptyState({icon='file-text',title,description,action,className=''}){
  return <div className={'ini-empty '+className}>
    <Icon className="ini-empty__icon" name={icon} size={28}/>
    <p className="ini-empty__title">{title}</p>
    {description&&<p className="ini-empty__desc">{description}</p>}
    {action&&<div className="ini-empty__action">{action}</div>}
  </div>;
}
