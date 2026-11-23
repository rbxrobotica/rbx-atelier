import React from 'react';
/** Selo de curso: etiqueta de caderno com número da formação, cor e padrão do curso. */
export function CourseSeal({number='01',title,kind='Formação',curso,variant='etiqueta',className=''}){
  return <span className={'ini-selo'+(variant==='compacto'?' ini-selo--compact':'')+' '+className} data-curso={curso}>
    <span className="ini-selo__num">{number}</span>
    <span className="ini-selo__corpo">{variant!=='compacto'&&<span className="ini-selo__kind">{kind}</span>}<span className="ini-selo__title">{title}</span></span>
  </span>;
}
