import React from 'react';
import {Icon} from '../core/Icon.jsx';
import {Badge} from '../core/Badge.jsx';
const ST={done:['success','circle-check','Concluída'],current:['info','circle-dot','Em andamento'],available:['neutral',null,'Disponível'],locked:['neutral','lock','Bloqueada']};
/** Linha-card de aula ou exercício dentro de um módulo. */
export function LessonCard({index,title,meta,status='available',kind='aula',href,onOpen,className=''}){
  const s=ST[status]||ST.available;const locked=status==='locked';
  const Tag=href&&!locked?'a':'button';
  return <Tag className={'ini-lessoncard ini-lessoncard--'+status+' '+className} href={Tag==='a'?href:undefined} type={Tag==='button'?'button':undefined} aria-disabled={locked||undefined} onClick={locked?undefined:onOpen}>
    <span className="ini-lessoncard__idx" aria-hidden="true">{status==='done'?<Icon name="check" size={20} strokeWidth={2.25}/>:locked?<Icon name="lock" size={18}/>:index}</span>
    <span className="ini-lessoncard__main"><span className="ini-lessoncard__title">{title}</span><span className="ini-lessoncard__meta">{[kind==='exercicio'?'Exercício':'Aula '+index,meta].filter(Boolean).join(' · ')}</span></span>
    <span className="ini-lessoncard__end"><Badge tone={s[0]} icon={s[1]}>{s[2]}</Badge>{!locked&&<Icon name="chevron-right" size={20}/>}</span>
  </Tag>;
}
