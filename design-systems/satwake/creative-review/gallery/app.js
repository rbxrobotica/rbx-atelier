const $=s=>document.querySelector(s);
const node=(tag,cls,text)=>{const x=document.createElement(tag);if(cls)x.className=cls;if(text!==undefined)x.textContent=text;return x;};
let batch=null;const selected=new Set();
const labels={pending:'Pendente',approve:'Aprovado',reject:'Reprovado',adjust:'Ajustes solicitados',changed:'Versão alterada',invalid:'Validação falhou'};
const count=status=>batch.pieces.filter(p=>p.review.status===status).length;
function showNotice(text,error=false){const el=$('#notice');el.textContent=text;el.style.color=error?'#a3283a':'#26456b';}
async function refresh(){const r=await fetch('/api/batch',{cache:'no-store'});if(!r.ok)throw new Error('Falha ao carregar lote');batch=await r.json();render();}
function populateConcepts(){const el=$('#filter-concept'),current=el.value,values=[...new Set(batch.pieces.map(p=>p.conceptId))];el.replaceChildren(new Option('Todos','all'),...values.map(v=>new Option(v,v)));el.value=values.includes(current)?current:'all';}
function visible(){const status=$('#filter-status').value,concept=$('#filter-concept').value,format=$('#filter-format').value;return batch.pieces.filter(p=>(status==='all'||(status==='invalid'?!p.validation.pass:p.review.status===status))&&(concept==='all'||p.conceptId===concept)&&(format==='all'||p.format===format));}
function render(){
  $('#batch-title').textContent=`${batch.pieces[0]?.campaignId||'Satwake'} · ${batch.pieces[0]?.campaignVersion||''}`;
  $('#batch-subtitle').textContent=`${batch.batchId} · ${batch.pieces.length} adaptações · gerador ${batch.engine.name} ${batch.engine.version}`;
  $('#stats').replaceChildren(...[['Peças',batch.pieces.length],['Pendentes',count('pending')],['Aprovadas',count('approve')],['Reprovadas',count('reject')],['Ajustes',count('adjust')],['Alteradas',count('changed')],['Com falha',batch.pieces.filter(p=>!p.validation.pass).length]].map(([label,n])=>{const x=node('span','stat');x.append(node('b','',n),document.createTextNode(label));return x;}));
  populateConcepts();
  for(const id of selected)if(!batch.pieces.some(p=>p.id===id))selected.delete(id);
  const items=visible();$('#cards').replaceChildren(...items.map(card));
  $('#selected-count').textContent=`${selected.size} selecionada${selected.size===1?'':'s'}`;
  $('#select-visible').checked=items.length>0&&items.every(p=>selected.has(p.id));
}
function card(p){
  const article=node('article','card');
  const head=node('div','card-head'),titleWrap=node('div'),title=node('div','card-title',p.conceptId),sub=node('div','card-sub',`${p.messageId} / ${p.visualId} / ${p.format.replace('x',':')}`);titleWrap.append(title,sub);
  const state=p.validation.pass?p.review.status:'invalid';const badge=node('span',`badge ${state}`,labels[state]);head.append(titleWrap,badge);
  const preview=node('button','card-preview');preview.type='button';preview.setAttribute('aria-label',`Ampliar ${p.id}`);const img=node('img');img.src=`/files/${encodeURIComponent(p.file.name)}`;img.alt=`Peça ${p.conceptId}, formato ${p.format}`;preview.append(img);preview.onclick=()=>{$('#preview-image').src=img.src;$('#preview-caption').textContent=p.id;$('#preview').showModal();};
  const body=node('div','card-body');body.append(node('h2','',p.copy.headline),node('p','',p.copy.body),node('p','meta',`Campanha: ${p.campaignId} · Hipótese: ${p.hypothesisId} · Público: ${p.audience.id}`),node('p','meta',p.hypothesis),node('p','meta',`Oferta: ${p.offer}`));
  const full=node('div','copy-block',`Texto principal:\n${p.copy.primaryText}\n\nChamada: ${p.copy.cta}`);body.append(full);
  const dest=node('div','destination');const a=node('a','',p.destination);if(p.destination.startsWith('https://')){a.href=p.destination;a.target='_blank';a.rel='noopener noreferrer';}dest.append('Destino: ',a);body.append(dest);
  const validation=node('details','validation'),summary=node('summary','',`Validação automática: ${p.validation.pass?'passou':'falhou'}`),list=node('ul');for(const c of p.validation.checks){const li=node('li',c.ok?'':'fail',`${c.ok?'✓':'✕'} ${c.name}${c.detail?` · ${c.detail}`:''}`);list.append(li);}validation.append(summary,list);body.append(validation);
  if(p.review.previousDecision)body.append(node('p','meta',`Decisão anterior invalidada: ${labels[p.review.previousDecision.action]||p.review.previousDecision.action} em ${p.review.previousDecision.at}`));
  const comments=node('div','comments');comments.append(node('h3','','Histórico e comentários'));if(!p.review.history.length)comments.append(node('p','meta','Sem decisões ou comentários.'));else for(const c of p.review.history)comments.append(node('p','',`${c.at} · ${c.actor} (${labels[c.action]||c.action})${c.text?`: ${c.text}`:''}`));body.append(comments);
  const foot=node('div','card-foot'),select=node('label'),box=node('input','card-select');box.type='checkbox';box.checked=selected.has(p.id);box.onchange=()=>{box.checked?selected.add(p.id):selected.delete(p.id);$('#selected-count').textContent=`${selected.size} selecionada${selected.size===1?'':'s'}`;$('#select-visible').checked=visible().every(x=>selected.has(x.id));};select.append(box,document.createTextNode(' Selecionar'));foot.append(select,node('span','',`${p.file.width}×${p.file.height} · ${p.file.sha256?.slice(0,10)||'sem hash'}`));
  article.append(head,preview,body,foot);return article;
}
for(const s of ['#filter-status','#filter-concept','#filter-format'])$(s).addEventListener('change',render);
$('#select-visible').addEventListener('change',e=>{for(const p of visible())e.target.checked?selected.add(p.id):selected.delete(p.id);render();});
$('#reviewer').value=localStorage.getItem('satwakeReviewer')||'';
$('#reviewer').addEventListener('input',e=>localStorage.setItem('satwakeReviewer',e.target.value));
for(const button of document.querySelectorAll('[data-action]'))button.onclick=async()=>{
  const actor=$('#reviewer').value.trim(),action=button.dataset.action,comment=$('#comment').value.trim();
  if(!actor)return showNotice('Informe o nome do revisor.',true);
  if(!selected.size)return showNotice('Selecione explicitamente uma ou mais peças.',true);
  if(action==='adjust'&&!comment)return showNotice('Explique o ajuste solicitado no comentário.',true);
  button.disabled=true;
  try{const response=await fetch('/api/decisions',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({actor,action,comment,pieceIds:[...selected]})});const data=await response.json();if(!response.ok)throw new Error(data.error);batch=data;selected.clear();$('#comment').value='';render();showNotice(`Decisão registrada: ${labels[action]||action}.`);}catch(e){showNotice(e.message,true);}finally{button.disabled=false;}
};
$('#close-preview').onclick=()=>$('#preview').close();
refresh().catch(e=>showNotice(e.message,true));
