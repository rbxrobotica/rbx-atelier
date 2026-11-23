import React from 'react';
import {Icon} from '../core/Icon.jsx';
/** Abas para alternar painéis da mesma tela (ex.: Aula · Aulas do módulo · Tutor no mobile). */
export function Tabs({items=[],value,onChange,label,className=''}){
  return <div role="tablist" aria-label={label} className={'ini-tabs '+className}>{items.map(function(it){const on=it.id===value;return <button key={it.id} role="tab" type="button" aria-selected={on} tabIndex={on?0:-1} className="ini-tab" onClick={function(){onChange&&onChange(it.id);}}>{it.icon&&<Icon name={it.icon} size={18}/>}{it.label}</button>;})}</div>;
}
