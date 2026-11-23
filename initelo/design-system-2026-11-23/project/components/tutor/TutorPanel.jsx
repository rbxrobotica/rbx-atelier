import React from 'react';
import {Icon} from '../core/Icon.jsx';
import {IconButton} from '../core/IconButton.jsx';
import {Button} from '../core/Button.jsx';
import {TextField} from '../forms/TextField.jsx';
import {Alert} from '../feedback/Alert.jsx';
import {TutorMessage} from './TutorMessage.jsx';
/** Painel do tutor de IA: conversa, sugestões, campo de pergunta e lembrete de conferência. */
export function TutorPanel({title='Tutor de IA',messages=[],suggestions=[],onSend,loading=false,error,onRetry,onClose,placeholder='Escreva sua pergunta…',draft,disclaimer='A IA pode errar. Confira valores e premissas antes de decidir.',emptyText='Pergunte sobre a aula ou peça ajuda para montar uma pergunta. O tutor explica; quem decide é você.',className=''}){
  const [text,setText]=React.useState(draft||'');
  React.useEffect(function(){if(draft!=null)setText(draft);},[draft]);
  function send(t){const v=String(t!=null?t:text).trim();if(!v||loading)return;onSend&&onSend(v);setText('');}
  const empty=messages.length===0&&!loading&&!error;
  return <section className={'ini-tutor '+className} aria-label={title}>
    <header className="ini-tutor__head"><h2 className="ini-tutor__title"><Icon name="message-circle" size={20}/>{title}</h2>{onClose&&<IconButton size="sm" icon="x" label="Fechar tutor" onClick={onClose}/>}</header>
    <div className="ini-tutor__body" aria-live="polite">
      {empty?<div className="ini-tutor__empty"><p>{emptyText}</p>{suggestions.length>0&&<div className="ini-tutor__chips">{suggestions.map(function(s,i){return <button key={i} type="button" className="ini-chip" onClick={function(){send(s);}}><Icon name="corner-down-right" size={16}/><span>{s}</span></button>;})}</div>}</div>
      :messages.map(function(m){return <TutorMessage key={m.id} from={m.from} verify={m.verify}>{m.text}</TutorMessage>;})}
      {loading&&<TutorMessage status="loading"/>}
      {error&&<Alert tone="error" title="Não foi possível obter a resposta" action={onRetry?<Button size="sm" variant="secondary" icon="rotate-ccw" onClick={onRetry}>Tentar novamente</Button>:null}>{error}</Alert>}
    </div>
    <form className="ini-tutor__foot" onSubmit={function(e){e.preventDefault();send();}}>
      <div className="ini-tutor__composer"><TextField aria-label="Sua pergunta para o tutor" multiline rows={2} placeholder={placeholder} value={text} onChange={function(e){setText(e.target.value);}} disabled={loading}/><Button type="submit" icon="send" disabled={!text.trim()||loading}>Enviar</Button></div>
      <p className="ini-tutor__note"><Icon name="list-checks" size={14}/><span>{disclaimer}</span></p>
    </form>
  </section>;
}
