import React from 'react';
import {Icon} from '../core/Icon.jsx';
/** Mensagem da conversa com o tutor. Respostas da IA trazem o lembrete "confira antes de usar". */
export function TutorMessage({from='tutor',status,verify=true,author,children,className=''}){
  const who=author||(from==='student'?'Você':'Tutor de IA');
  return <div className={'ini-msg ini-msg--'+from+' '+className}>
    <span className="ini-msg__who">{from==='tutor'&&<Icon name="message-circle" size={14}/>}{who}</span>
    <div className="ini-msg__bubble">{status==='loading'?<span className="ini-msg__dots" role="status"><i></i><i></i><i></i>Escrevendo a resposta…</span>:children}</div>
    {from==='tutor'&&!status&&verify&&<span className="ini-msg__check"><Icon name="list-checks" size={14}/>Resposta de IA — confira antes de usar</span>}
  </div>;
}
