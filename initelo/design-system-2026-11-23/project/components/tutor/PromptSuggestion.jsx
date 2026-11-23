import React from 'react';
import {Icon} from '../core/Icon.jsx';
import {Button} from '../core/Button.jsx';
/** Ficha com uma sugestão de pergunta para a IA, em fonte monoespaçada, com ações de usar e copiar. */
export function PromptSuggestion({title='Sugestão de pergunta para a IA',children,hint='Troque os valores pelos seus antes de enviar.',onUse,useLabel='Usar esta pergunta',onCopy,className=''}){
  const [copied,setCopied]=React.useState(false);
  function copy(){const t=typeof children==='string'?children:'';try{navigator.clipboard&&navigator.clipboard.writeText(t);}catch(e){}setCopied(true);onCopy&&onCopy(t);setTimeout(function(){setCopied(false);},2000);}
  return <div className={'ini-prompt '+className}>
    <div className="ini-prompt__head"><Icon name="message-circle" size={18}/>{title}</div>
    <p className="ini-prompt__text">{children}</p>
    {hint&&<p className="ini-prompt__hint">{hint}</p>}
    <div className="ini-prompt__actions">
      {onUse&&<Button size="sm" variant="secondary" icon="corner-down-right" onClick={function(){onUse(typeof children==='string'?children:'');}}>{useLabel}</Button>}
      <Button size="sm" variant="ghost" icon={copied?'check':'copy'} onClick={copy}>{copied?'Copiado':'Copiar'}</Button>
    </div>
  </div>;
}
