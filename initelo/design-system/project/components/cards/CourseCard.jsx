import React from 'react';
import {Button} from '../core/Button.jsx';
import {Badge} from '../core/Badge.jsx';
import {ProgressBar} from '../feedback/ProgressBar.jsx';
import {Skeleton} from '../feedback/Skeleton.jsx';
const CTA={available:'Conhecer o curso','in-progress':'Continuar curso',done:'Rever o curso'};
/** Card de curso com faixa na cor e no padrão da formação. */
export function CourseCard({title,description,number='01',curso,meta,status='available',progress=0,progressText,href='#',onOpen,loading=false,className=''}){
  if(loading)return <article className={'ini-card ini-coursecard '+className} aria-busy="true" aria-label="Carregando curso">
    <div className="ini-coursecard__band" style={{background:'var(--surface-sunken)',borderColor:'var(--border-subtle)'}}></div>
    <div className="ini-coursecard__body"><Skeleton width="40%" height={12}/><Skeleton width="85%" height={24}/><Skeleton lines={2}/><div className="ini-coursecard__foot"><Skeleton width={150} height={44}/></div></div>
  </article>;
  return <article className={'ini-card ini-coursecard '+className} data-curso={curso}>
    <div className="ini-coursecard__band"><span className="ini-coursecard__num" aria-hidden="true">{number}</span></div>
    <div className="ini-coursecard__body">
      <span className="ini-coursecard__kind ini-overline">Formação {number}</span>
      <h3 className="ini-coursecard__title">{title}</h3>
      {description&&<p className="ini-coursecard__desc">{description}</p>}
      {meta&&<span className="ini-coursecard__meta">{meta}</span>}
      <div className="ini-coursecard__foot">
        {status==='in-progress'&&<ProgressBar tone="course" size="sm" value={progress} label="Seu progresso" valueText={progressText}/>}
        {status==='done'&&<Badge tone="success" icon="circle-check">Curso concluído</Badge>}
        {status==='soon'?<Badge icon="clock">Em breve</Badge>:<Button variant={status==='in-progress'?'primary':'secondary'} href={href} onClick={onOpen} iconRight="arrow-right">{CTA[status]}</Button>}
      </div>
    </div>
  </article>;
}
