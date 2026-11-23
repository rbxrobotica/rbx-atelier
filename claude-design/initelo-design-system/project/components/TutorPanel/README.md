Painel do tutor de IA — coluna lateral no desktop (352 px) e folha inferior no mobile. Dê uma altura ao contêiner; o painel ocupa 100%.

    <TutorPanel messages={msgs} loading={waiting} onSend={ask} onClose={close}
      suggestions={['Explique a diferença entre despesa fixa e variável.','Como organizo contas que vencem antes do salário?']} />

Estados: vazio (texto + sugestões), conversa, carregando, erro com "Tentar novamente". O rodapé sempre lembra: "A IA pode errar. Confira valores e premissas antes de decidir."
