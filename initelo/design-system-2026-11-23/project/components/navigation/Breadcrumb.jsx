import React from 'react';
import {Icon} from '../core/Icon.jsx';
/** Trilha de navegação: curso › módulo › aula. */
export function Breadcrumb({items=[],className=''}){
  return <nav aria-label="Você está em" className={className}><ol className="ini-crumbs">{items.map(function(it,i){const last=i===items.length-1;return <li key={i}>{last?<span aria-current="page">{it.label}</span>:<a href={it.href||'#'} onClick={it.onClick}>{it.label}</a>}{!last&&<Icon name="chevron-right" size={14}/>}</li>;})}</ol></nav>;
}
