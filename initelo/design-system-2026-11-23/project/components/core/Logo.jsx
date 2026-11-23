import React from 'react';
function I({color}){return <span className="ini-logo__i" style={color?{color:color}:undefined}>ı<span className="ini-logo__pingo" style={color?{background:color}:undefined}></span></span>;}
/** Assinatura Initelo (PROPOSTA): logotipo tipográfico com os "pingos nos is" + símbolo. */
export function Logo({variant='horizontal',tone='clara',size=28,shape='quadrado',knockout,className='',label='Initelo',style}){
  return <span className={'ini-logo ini-logo--'+tone+' '+className} style={Object.assign({fontSize:size},style)} role="img" aria-label={label}>
    {variant!=='wordmark'&&<span aria-hidden="true" className={'ini-logo__sym'+(shape==='redondo'?' ini-logo__sym--round':'')}><I color={tone==='mono'?knockout:undefined}/></span>}
    {variant!=='simbolo'&&<span aria-hidden="true" className="ini-logo__word"><I/>n<I/>telo</span>}
  </span>;
}
