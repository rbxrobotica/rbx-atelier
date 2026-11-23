import React from 'react';
const LUCIDE_SRC='https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js';
let loading=null;
function ready(){return typeof window!=='undefined'&&window.lucide&&window.lucide.icons;}
function ensure(){
  if(typeof window==='undefined'||ready())return Promise.resolve();
  if(!loading){loading=new Promise(function(res){
    var s=document.querySelector('script[src*="lucide"]');var own=!s;
    if(own){s=document.createElement('script');s.src=LUCIDE_SRC;s.async=true;}
    s.addEventListener('load',function(){res();});s.addEventListener('error',function(){res();});
    if(own)document.head.appendChild(s);
    var n=0;var t=setInterval(function(){if(ready()||++n>100){clearInterval(t);res();}},100);
  });}
  return loading;
}
function pascal(n){return n.split('-').map(function(p){return p.charAt(0).toUpperCase()+p.slice(1);}).join('');}
/** Ícone Lucide (traço 1.75, cantos arredondados). Carrega a biblioteca sozinho se a página ainda não a incluiu. */
export function Icon({name,size=20,strokeWidth=1.75,label,className='',style}){
  const [,tick]=React.useState(0);
  React.useEffect(function(){if(ready())return;let on=true;ensure().then(function(){if(on)tick(function(n){return n+1;});});return function(){on=false;};},[]);
  let node=ready()?window.lucide.icons[pascal(name)]:null;
  if(node&&node[0]==='svg')node=node[2];
  const a11y=label?{role:'img','aria-label':label}:{'aria-hidden':true};
  return <svg className={'ini-icon '+className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style} {...a11y}>{(node||[]).map(function(n,i){return React.createElement(n[0],Object.assign({},n[1],{key:i}));})}</svg>;
}
