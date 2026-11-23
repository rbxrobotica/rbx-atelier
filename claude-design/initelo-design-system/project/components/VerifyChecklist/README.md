Lista de conferência — obrigatória entre a resposta da IA e a decisão do aluno.

    <VerifyChecklist description="Compare a resposta da IA com a sua tabela." items={[
      {id:'valores',label:'Os valores são os mesmos que você informou?',detail:'Aluguel R$ 1.450,00 · energia R$ 186,40'},
      {id:'soma',label:'A soma das despesas confere?',detail:'R$ 3.083,65'},
      {id:'premissas',label:'A IA presumiu algo que você não disse?'}]} onChange={setChecked} />

Estados: em andamento (contador "2 de 5 itens conferidos") e concluído (borda e ícone de sucesso, título "Tudo conferido").
