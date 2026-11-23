import React from 'react';
function formatBRL(v){const p=Math.abs(Number(v)||0).toFixed(2).split('.');return 'R$\u00a0'+p[0].replace(/\B(?=(\d{3})+(?!\d))/g,'.')+','+p[1];}
/** Valor em reais: R$ 1.234,56, algarismos tabulares, sinal + para entrada e − para despesa. */
export function Money({value,kind='neutral',showSign,className=''}){
  const neg=kind==='neutral'&&Number(value)<0;
  const sign=kind==='income'?'+':(kind==='expense'||neg)?'\u2212':'';
  const show=showSign!==undefined?showSign:(kind!=='neutral'||neg);
  return <span className={'ini-money ini-num'+(kind!=='neutral'?' ini-money--'+kind:'')+' '+className}>{show&&sign?<span className="ini-money__sign">{sign}</span>:null}{formatBRL(value)}</span>;
}
