import React from 'react';
import {Icon} from '../core/Icon.jsx';
import {Alert} from '../feedback/Alert.jsx';
import {Skeleton} from '../feedback/Skeleton.jsx';
import {EmptyState} from '../cards/EmptyState.jsx';
import {Money} from './Money.jsx';
import {FlowTag} from './FlowTag.jsx';
import {DueDate} from './DueDate.jsx';
/** Tabela de orçamento do mês: data, descrição, tipo, valor e saldo após cada lançamento. Vira lista empilhada abaixo de 560 px. */
export function BudgetTable({rows=[],caption='Orçamento do mês',description,showBalance=true,loading=false,error,emptyTitle='Nenhum lançamento ainda',emptyDescription='Comece pela entrada principal do mês — por exemplo, o salário do dia 5.',emptyAction,className=''}){
  let bal=0,inc=0,exp=0;
  const calc=rows.map(function(r){const ok=typeof r.value==='number';if(ok){if(r.kind==='income'){inc+=r.value;bal+=r.value;}else{exp+=r.value;bal-=r.value;}}return Object.assign({},r,{ok:ok,balance:bal});});
  const cols=showBalance?5:4;
  const pad=showBalance?<td className="c-pad"></td>:null;
  return <div className={'ini-budget '+className} aria-busy={loading||undefined}>
    {error&&<div className="ini-budget__alert"><Alert tone="error" title="Não foi possível carregar a tabela">{error}</Alert></div>}
    <table>
      <caption>{caption}{description&&<small>{description}</small>}</caption>
      <thead><tr><th scope="col">Data</th><th scope="col">Descrição</th><th scope="col">Tipo</th><th scope="col" className="is-num">Valor</th>{showBalance&&<th scope="col" className="is-num">Saldo após</th>}</tr></thead>
      <tbody>
        {loading?[0,1,2,3].map(function(i){return <tr key={i}><td className="c-date"><Skeleton width={44}/></td><td className="c-desc"><Skeleton width={i%2?'70%':'50%'} height={16}/></td><td className="c-kind"><Skeleton width={64}/></td><td className="c-value is-num"><Skeleton width={90} style={{marginLeft:'auto'}}/></td>{showBalance&&<td className="c-balance is-num"><Skeleton width={90} style={{marginLeft:'auto'}}/></td>}</tr>;})
        :calc.length===0?<tr className="is-empty"><td colSpan={cols}><EmptyState icon="table" title={emptyTitle} description={emptyDescription} action={emptyAction}/></td></tr>
        :calc.map(function(r){return <tr key={r.id} className={r.error?'is-error':undefined}>
          <td className="c-date ini-num">{r.date}</td>
          <td className="c-desc"><span className="ini-budget__desc">{r.description}</span>{r.day!=null&&<span className="ini-budget__sub"><DueDate day={r.day} kind={r.kind} status={r.status} daysLeft={r.daysLeft} date={r.date}/></span>}{r.error&&<span className="ini-budget__rowerr"><Icon name="circle-alert" size={16}/>{r.error}</span>}</td>
          <td className="c-kind"><FlowTag kind={r.kind}/></td>
          <td className="c-value is-num">{r.ok?<Money value={r.value} kind={r.kind}/>:<span className="ini-money">—</span>}</td>
          {showBalance&&<td className="c-balance is-num">{r.ok?<Money value={r.balance}/>:<span className="ini-money">—</span>}</td>}
        </tr>;})}
      </tbody>
      {!loading&&calc.length>0&&<tfoot>
        <tr><th scope="row" colSpan={3}>Total de entradas</th><td className="is-num"><Money value={inc} kind="income"/></td>{pad}</tr>
        <tr><th scope="row" colSpan={3}>Total de despesas</th><td className="is-num"><Money value={exp} kind="expense"/></td>{pad}</tr>
        <tr className="is-total"><th scope="row" colSpan={3}>Saldo previsto do mês</th><td className="is-num"><Money value={inc-exp}/></td>{pad}</tr>
      </tfoot>}
    </table>
  </div>;
}
