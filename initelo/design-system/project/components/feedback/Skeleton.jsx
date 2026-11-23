import React from 'react';
/** Marcador de carregamento com a forma do conteúdo que vai chegar. */
export function Skeleton({width='100%',height=14,lines,className='',style}){
  if(lines)return <span className={'ini-skel-lines '+className} aria-hidden="true">{Array.from({length:lines}).map(function(_,i){return <span key={i} className="ini-skel" style={{width:i===lines-1?'60%':'100%',height:height}}></span>;})}</span>;
  return <span className={'ini-skel '+className} aria-hidden="true" style={Object.assign({width:width,height:height},style)}></span>;
}
