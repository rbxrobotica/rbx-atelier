import React from 'react';
import {Icon} from '../core/Icon.jsx';
const STATUS={done:{icon:'circle-check',text:'Concluída'},current:{icon:'circle-dot',text:'Em andamento'},available:{icon:'circle',text:'Disponível'},locked:{icon:'lock',text:'Bloqueada'}};
/** Lista de aulas de um módulo, com estado em ícone + texto. */
export function LessonList({title,lessons=[],onSelect,className=''}){
  return <nav className={'ini-lessons '+className} aria-label={title||'Aulas do módulo'}>
    {title&&<p className="ini-lessons__title ini-overline">{title}</p>}
    <ol className="ini-lessons__list">{lessons.map(function(l){const st=l.status||'available';const s=STATUS[st];const locked=st==='locked';
      return <li key={l.id}><button type="button" className={'ini-lesson ini-lesson--'+st} aria-current={st==='current'?'step':undefined} aria-disabled={locked||undefined} onClick={function(){if(!locked&&onSelect)onSelect(l);}}>
        <Icon className="ini-lesson__icon" name={s.icon} size={20}/>
        <span className="ini-lesson__text"><span className="ini-lesson__name">{l.title}</span><span className="ini-lesson__meta">{[l.kind==='exercicio'?'Exercício':null,s.text,l.duration].filter(Boolean).join(' · ')}</span></span>
      </button></li>;})}</ol>
  </nav>;
}
