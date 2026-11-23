(function(){
const {TopNav,Breadcrumb,ProgressBar,Stepper,BudgetTable,PromptSuggestion,TutorMessage,VerifyChecklist,TextField,Button,Alert,EmptyState,Icon}=window.IniteloDesignSystem_b8cd96;
const K=window.INI_KIT;
const STEPS=['Monte a tabela','Pergunte à IA','Confira','Decida'];
function ExercisePage({go}){
  const narrow=K.useNarrow('(max-width: 767px)');
  const [asked,setAsked]=React.useState(true);
  const [loading,setLoading]=React.useState(false);
  const [checked,setChecked]=React.useState(['valores','datas']);
  const [decision,setDecision]=React.useState('');
  const [done,setDone]=React.useState(false);
  const all=checked.length===K.conferencia.length;
  const current=done?4:!asked?1:!all?2:3;
  function ask(){setAsked(true);setLoading(true);setTimeout(()=>setLoading(false),1400);}
  function reset(){setAsked(false);setLoading(false);setChecked([]);setDecision('');setDone(false);}
  return <div className="k-app" data-curso="financas" data-screen-label="Exercício">
    <TopNav links={K.links} user={K.user}/>
    <div className="kl-bar"><div className="ini-container kl-bar__in">
      <Breadcrumb items={[{label:'Finanças pessoais com IA',onClick:e=>{e.preventDefault();go('curso');}},{label:'Módulo 1',onClick:e=>{e.preventDefault();go('aula');}},{label:'Exercício'}]}/>
      <div className="kl-bar__prog"><ProgressBar size="sm" tone="course" label="Seu progresso no curso" value={done?2:1} max={24} valueText={(done?2:1)+' de 24 aulas'}/></div>
    </div></div>
    <main className="ini-container">
      <header className="ke-head">
        <p className="ini-overline">Módulo 1 · Exercício · cerca de 15 min</p>
        <h1>Salário no dia 5, contas ao longo do mês</h1>
        <p>O salário entra no dia 5 e as contas vencem em datas diferentes. Monte a tabela, peça à IA o saldo depois de cada pagamento e confira a resposta antes de decidir o que fazer com o que sobra.</p>
      </header>
      <div className="ke-steps"><Stepper steps={STEPS} current={current} compact={narrow}/></div>
      <div className="ke-grid">
        <div className="ke-col">
          <section className="ke-sec ke-s1" aria-labelledby="ke-h1">
            <h2 className="ke-sec__h" id="ke-h1"><span className="ke-sec__n">1</span>Monte a tabela</h2>
            <p className="ke-sec__p">Estes são valores de exemplo. Quando quiser, troque pelos seus: uma linha para cada entrada ou conta, em ordem de data.</p>
            <BudgetTable caption="Orçamento do mês" description="Dezembro de 2026 · valores de exemplo" rows={K.linhas}/>
          </section>
          <section className="ke-sec ke-s4" aria-labelledby="ke-h4">
            <h2 className="ke-sec__h" id="ke-h4"><span className="ke-sec__n">4</span>Decida</h2>
            {done?<Alert tone="success" title="Exercício concluído" action={<Button size="sm" variant="secondary" iconRight="arrow-right" onClick={()=>go('curso')}>Voltar ao curso</Button>}>Você conferiu 5 de 5 itens e registrou a sua decisão. A próxima aula já está liberada.</Alert>
            :<div className="ke-decide">
              <TextField label="O que você decide fazer com o saldo de R$ 1.116,35?" multiline rows={3} placeholder="Escreva com suas palavras. Ex.: separar o dinheiro do mercado e guardar o restante." value={decision} onChange={e=>setDecision(e.target.value)} disabled={!all} hint={all?'Não existe resposta certa: a decisão é sua.':undefined}/>
              <div className="ke-decide__row">
                {!all?<p className="ke-decide__lock"><Icon name="lock" size={16}/>Disponível depois de conferir os 5 itens.</p>:<span></span>}
                <Button disabled={!all||!decision.trim()} onClick={()=>setDone(true)}>Registrar minha decisão</Button>
              </div>
            </div>}
          </section>
        </div>
        <div className="ke-col">
          <section className="ke-sec ke-s2" aria-labelledby="ke-h2">
            <h2 className="ke-sec__h" id="ke-h2"><span className="ke-sec__n">2</span>Pergunte à IA</h2>
            <PromptSuggestion onUse={ask} useLabel={asked?'Perguntar de novo':'Usar esta pergunta'}>{K.pergunta}</PromptSuggestion>
            {asked?<div className="ke-answer" aria-live="polite">{loading?<TutorMessage status="loading"/>:<TutorMessage>{K.resposta}</TutorMessage>}</div>
              :<EmptyState icon="message-circle" title="A resposta da IA aparece aqui" description="Envie a pergunta sugerida ou escreva a sua. Depois, confira a resposta antes de usar."/>}
          </section>
          <section className="ke-sec ke-s3" aria-labelledby="ke-h3">
            <h2 className="ke-sec__h" id="ke-h3"><span className="ke-sec__n">3</span>Confira a resposta</h2>
            {asked&&!loading?<VerifyChecklist title="Confira antes de decidir" description="Compare a resposta da IA com a sua tabela, item por item." items={K.conferencia} checked={checked} onChange={setChecked} doneDescription="Valores, contas e premissas conferidos. Agora a decisão é sua."/>
              :<EmptyState icon="list-checks" title="Nada para conferir ainda" description="A lista de conferência aparece quando a IA responder."/>}
          </section>
          <div className="ke-s4" style={{order:5}}><Button variant="ghost" size="sm" icon="rotate-ccw" onClick={reset}>Recomeçar o exercício</Button></div>
        </div>
      </div>
    </main>
    <window.KitFooter/>
  </div>;
}
Object.assign(window,{ExercisePage});
})();
