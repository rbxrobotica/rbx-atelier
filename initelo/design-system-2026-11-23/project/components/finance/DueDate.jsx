import React from 'react';
import {Icon} from '../core/Icon.jsx';
const ICON={paid:'circle-check',overdue:'circle-alert',soon:'clock'};
/** Vencimento por extenso: "vence dia 10", "entra dia 5", "vence em 3 dias (dia 10)". */
export function DueDate({day,kind='expense',status='upcoming',daysLeft,date,icon=true,className=''}){
  let text;
  if(kind==='income')text='entra dia '+day;
  else if(status==='paid')text='paga'+(date?' em '+date:'');
  else if(status==='overdue')text='venceu dia '+day;
  else if(status==='soon')text='vence '+(daysLeft===0?'hoje':daysLeft===1?'amanhã':'em '+daysLeft+' dias')+' (dia '+day+')';
  else text='vence dia '+day;
  const st=kind==='income'?'income':status;
  return <span className={'ini-due ini-due--'+st+' '+className}>{icon&&<Icon name={ICON[st]||'calendar'} size={16}/>}{text}</span>;
}
