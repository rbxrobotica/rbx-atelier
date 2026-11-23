import React from 'react';
import {Logo} from '../core/Logo.jsx';
import {IconButton} from '../core/IconButton.jsx';
/** Barra superior da plataforma: marca, links principais e conta. Abaixo de 768 px os links viram menu. */
export function TopNav({links=[],user,compact=false,homeHref='#',onHome,onMenu,onNavigate,children,className=''}){
  return <header className={'ini-topnav'+(compact?' ini-topnav--compact':'')+' '+className}><div className="ini-topnav__inner">
    <a className="ini-topnav__brand" href={homeHref} onClick={onHome}><Logo size={compact?26:30} label="Initelo — página inicial"/></a>
    <nav aria-label="Principal" className="ini-topnav__nav"><ul className="ini-topnav__links">{links.map(function(l){return <li key={l.label}><a className="ini-topnav__link" href={l.href||'#'} aria-current={l.current?'page':undefined} onClick={onNavigate?function(e){onNavigate(l,e);}:undefined}>{l.label}</a></li>;})}</ul></nav>
    <div className="ini-topnav__right">{children}
      {user&&<button type="button" className="ini-avatar" aria-label={'Conta de '+user.name} title={user.name}>{user.initials}</button>}
      <IconButton className="ini-topnav__menu" icon="menu" label="Abrir menu" onClick={onMenu}/>
    </div>
  </div></header>;
}
