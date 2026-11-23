(function(){
const {TopNav,Breadcrumb,Tabs,LessonList,ProgressBar,Alert,Button,TutorPanel}=window.IniteloDesignSystem_b8cd96;
const K=window.INI_KIT;
const PTS=[{d:5,l:'Salário',inc:true},{d:10,l:'Aluguel'},{d:15,l:'Energia'},{d:20,l:'Internet'},{d:28,l:'Cartão'}];
function MonthLine(){
  return <div className="k-line" role="img" aria-label="Linha do mês: o salário entra no dia 5; o aluguel vence no dia 10, a energia no dia 15, a internet no dia 20 e o cartão no dia 28.">
    <div className="k-line__axis"></div>
    {PTS.map(p=><div key={p.d} className={'k-line__pt'+(p.inc?' is-inc':'')} style={{left:(p.d/31*100)+'%'}}><span className="k-line__dot"></span><span className="k-line__lab"><b>dia {p.d}</b>{p.l}</span></div>)}
  </div>;
}
function LessonPage({go}){
  const [tab,setTab]=React.useState('aula');
  const [msgs,setMsgs]=React.useState([]);
  const [loading,setLoading]=React.useState(false);
  const lessons=K.modulos[0].aulas.map((a,i)=>({id:a.id,title:a.title,kind:a.kind,duration:a.meta.replace(' de leitura',''),status:i===0?'current':'locked'}));
  function ask(t){setMsgs(m=>m.concat({id:'s'+m.length,from:'student',text:t}));setLoading(true);setTimeout(()=>{setMsgs(m=>m.concat({id:'t'+m.length,from:'tutor',text:K.respostaTutor}));setLoading(false);},1200);}
  function openTutor(){setTab('tutor');window.scrollTo(0,0);}
  return <div className="k-app" data-curso="financas" data-screen-label="Tela de aula">
    <TopNav links={K.links} user={K.user}/>
    <div className="kl-bar"><div className="ini-container kl-bar__in">
      <Breadcrumb items={[{label:'Finanças pessoais com IA',onClick:e=>{e.preventDefault();go('curso');}},{label:'Módulo 1'},{label:'Aula 1'}]}/>
      <div className="kl-bar__prog"><ProgressBar size="sm" tone="course" label="Seu progresso no curso" value={0} max={24} valueText="0 de 24 aulas"/></div>
    </div></div>
    <div className="ini-container kl-grid">
      <div className="kl-tabs"><Tabs label="Seções da aula" value={tab} onChange={setTab} items={[{id:'aula',label:'Aula',icon:'book-open'},{id:'modulo',label:'Módulo',icon:'list'},{id:'tutor',label:'Tutor de IA',icon:'message-circle'}]}/></div>
      <aside className={'kl-pane kl-side'+(tab==='modulo'?' is-on':'')}>
        <LessonList title="Módulo 1 · O dinheiro do mês" lessons={lessons}/>
      </aside>
      <main className={'kl-pane'+(tab==='aula'?' is-on':'')}>
        <article className="kl-article">
          <p className="ini-overline">Módulo 1 · Aula 1 · 12 min de leitura</p>
          <h1>Como organizar o dinheiro do mês</h1>
          <p className="lead">Antes de pedir ajuda à IA, você precisa enxergar o seu mês: quando o dinheiro entra, quando cada conta vence e quanto sobra entre uma data e outra.</p>
          <h2>Comece pelo calendário, não pela planilha</h2>
          <p>Muitos apertos do mês não vêm de gastar demais, e sim de datas desencontradas: a conta vence antes de o salário entrar. Por isso, o primeiro passo é colocar as datas em ordem.</p>
          <figure className="kl-fig"><MonthLine/><figcaption>Linha do mês de exemplo. Círculo cheio: entrada. Quadrado vazado: despesa com vencimento.</figcaption></figure>
          <h2>Três perguntas antes de abrir a IA</h2>
          <ol>
            <li>Quanto entra, e em que dia?</li>
            <li>Quais contas têm dia certo para vencer — e de quanto é cada uma?</li>
            <li>O que ainda não tem valor fechado, como mercado e transporte?</li>
          </ol>
          <p>Com essas respostas anotadas, a sua pergunta para a IA fica <span className="ini-grifo">completa e fácil de conferir</span>.</p>
          <Alert tone="info" title="A IA não conhece as suas contas">Ela só trabalha com o que você escrever. Se um valor ficar de fora, a resposta pode parecer certa e estar incompleta.</Alert>
          <h2>O que a IA pode fazer aqui</h2>
          <p>Organizar a lista por data, calcular o saldo depois de cada pagamento e mostrar em que dia o dinheiro fica curto. O que fazer com essa informação continua sendo uma decisão sua.</p>
          <div className="kl-nav">
            <Button variant="secondary" icon="arrow-left" onClick={()=>go('curso')}>Voltar ao curso</Button>
            <Button iconRight="arrow-right" onClick={()=>go('exercicio')}>Concluir aula e ir para o exercício</Button>
          </div>
        </article>
      </main>
      <aside className={'kl-pane kl-tutor'+(tab==='tutor'?' is-on':'')}>
        <TutorPanel messages={msgs} loading={loading} onSend={ask} suggestions={K.sugestoesTutor} emptyText="Ficou com dúvida nesta aula? Pergunte. O tutor explica e mostra as contas; quem decide é você."/>
      </aside>
      {tab==='aula'&&<div className="kl-dock"><Button variant="secondary" icon="message-circle" onClick={openTutor}>Perguntar ao tutor</Button><Button iconRight="arrow-right" onClick={()=>go('exercicio')}>Concluir aula</Button></div>}
    </div>
    <window.KitFooter/>
  </div>;
}
Object.assign(window,{LessonPage});
})();
