(function(){
const {TopNav,Button,CourseSeal,LessonCard,Icon,Logo,Badge}=window.IniteloDesignSystem_b8cd96;
const K=window.INI_KIT;
function Footer(){return <footer className="k-foot"><div className="ini-container"><span>© 2026 Initelo · initelo.com</span><span>Conteúdo educacional. Não é recomendação financeira individual.</span></div></footer>;}
function CoursePage({go}){
  const [open,setOpen]=React.useState(1);
  return <div className="k-app" data-curso="financas" data-screen-label="Página do curso">
    <TopNav links={K.links} user={K.user}/>
    <section className="kc-hero ini-padrao"><div className="ini-container kc-hero__in">
      <div>
        <p className="ini-overline kc-kicker">Formação 01 · Curso on-line</p>
        <h1 className="kc-title">Finanças pessoais com IA</h1>
        <p className="kc-lead">Aprenda a usar a IA para organizar as contas do mês, comparar cenários e revisar suas hipóteses — conferindo cada resultado antes de decidir.</p>
        <ul className="kc-meta">
          <li><Icon name="layers" size={18}/>5 módulos</li>
          <li><Icon name="book-open" size={18}/>24 aulas e exercícios</li>
          <li><Icon name="clock" size={18}/>Cerca de 12 horas</li>
          <li><Icon name="calendar" size={18}/>No seu ritmo</li>
        </ul>
        <div className="kc-cta">
          <Button size="lg" iconRight="arrow-right" onClick={()=>go('aula')}>Começar pelo módulo 1</Button>
          <Button size="lg" variant="secondary" href="#modulos">Ver os módulos</Button>
        </div>
        <p className="kc-note">A IA ajuda a pensar. Quem decide é você.</p>
      </div>
      <aside className="kc-method" aria-label="Como funciona cada exercício">
        <CourseSeal number="01" title="Finanças pessoais com IA"/>
        <p className="kc-method__t">Todo exercício segue quatro passos</p>
        <ol>{K.metodo.map((m,i)=><li key={i}><span className="kc-method__n">{i+1}</span><span><b>{m[0]}</b>{m[1]}</span></li>)}</ol>
      </aside>
    </div></section>
    <main className="ini-container kc-body">
      <section className="kc-sec" aria-labelledby="kc-obj">
        <h2 id="kc-obj">Ao final do curso, você vai conseguir</h2>
        <ul className="kc-goals">{K.objetivos.map((o,i)=><li key={i}><Icon name="check" size={20} strokeWidth={2.25}/><span>{o}</span></li>)}</ul>
      </section>
      <section className="kc-sec" id="modulos" aria-labelledby="kc-mod">
        <h2 id="kc-mod">Módulos</h2>
        <div className="kc-mods">{K.modulos.map(m=>{const on=open===m.n;return <div className="kc-mod" key={m.n}>
          <h3><button type="button" className="kc-mod__head" aria-expanded={on} onClick={()=>setOpen(on?0:m.n)}>
            <span className="kc-mod__n" aria-hidden="true">{m.n}</span>
            <span className="kc-mod__t"><b>{m.titulo}</b><span>{m.meta}</span></span>
            <Icon name={on?'chevron-up':'chevron-down'} size={22}/>
          </button></h3>
          {on&&<div className="kc-mod__body">
            {m.resumo&&<p>{m.resumo}</p>}
            {m.aulas?m.aulas.map((a,i)=><LessonCard key={a.id} index={a.index} kind={a.kind} title={a.title} meta={i===0?a.meta:a.meta+' · conclua a anterior para liberar'} status={i===0?'available':'locked'} onOpen={()=>go('aula')}/>)
              :<div><Badge icon="lock">Liberado ao concluir o módulo {m.n-1}</Badge></div>}
          </div>}
        </div>;})}</div>
      </section>
      <section className="kc-sec" aria-labelledby="kc-aut">
        <h2 id="kc-aut">Quem ensina</h2>
        <div className="kc-authors">
          <div className="kc-author"><span className="kc-author__av" aria-hidden="true">C</span><div><b>Cauê</b><p>Economista formado pela FEA-USP. Autor do conteúdo de finanças do curso.</p></div></div>
          <div className="kc-author"><Logo variant="simbolo" shape="redondo" size={56} label=""/><div><b>Fundador da Initelo</b><p>Responsável por IA e tecnologia: o tutor, os exercícios de pergunta e conferência e a plataforma.</p></div></div>
        </div>
      </section>
      <section className="kc-final" data-surface="inverse">
        <p>Pronto para organizar o seu mês?</p>
        <Button size="lg" variant="secondary" iconRight="arrow-right" onClick={()=>go('aula')}>Começar pelo módulo 1</Button>
      </section>
    </main>
    <Footer/>
  </div>;
}
Object.assign(window,{CoursePage,KitFooter:Footer});
})();
