import React from 'react';
import {Icon} from '../core/Icon.jsx';
import {Checkbox} from '../forms/Checkbox.jsx';
import {ProgressBar} from '../feedback/ProgressBar.jsx';
/** Lista de conferência: o aluno confere valores e premissas da resposta da IA antes de decidir. */
export function VerifyChecklist({title='Confira antes de decidir',description,items=[],checked,defaultChecked=[],onChange,doneTitle='Tudo conferido',doneDescription,className=''}){
  const [inner,setInner]=React.useState(defaultChecked);
  const val=checked||inner;
  function toggle(id){const next=val.indexOf(id)>=0?val.filter(function(x){return x!==id;}):val.concat(id);if(!checked)setInner(next);onChange&&onChange(next);}
  const n=items.filter(function(i){return val.indexOf(i.id)>=0;}).length;const done=items.length>0&&n===items.length;
  const sub=done?doneDescription:description;
  return <section className={'ini-verify'+(done?' is-complete':'')+' '+className}>
    <div className="ini-verify__head"><Icon className="ini-verify__icon" name={done?'circle-check':'list-checks'} size={24}/><div><h3 className="ini-verify__title">{done?doneTitle:title}</h3>{sub&&<p className="ini-verify__sub">{sub}</p>}</div></div>
    <ProgressBar size="sm" value={n} max={items.length||1} valueText={n+' de '+items.length+' itens conferidos'}/>
    <ul className="ini-verify__list">{items.map(function(it){return <li key={it.id}><Checkbox label={it.label} detail={it.detail} checked={val.indexOf(it.id)>=0} onChange={function(){toggle(it.id);}}/></li>;})}</ul>
  </section>;
}
