Tabela de orçamento — lançamentos em ordem de data, valores alinhados à direita com algarismos tabulares, totais no rodapé.

    <BudgetTable description="Dezembro de 2026" rows={[
      {id:'s',date:'05/12',day:5,description:'Salário',kind:'income',value:4200},
      {id:'a',date:'10/12',day:10,description:'Aluguel',kind:'expense',value:1450},
      {id:'c',date:'28/12',day:28,description:'Cartão de crédito',kind:'expense',value:1327.35}]} />

Estados: padrão, loading (esqueleto), vazio (rows=[]), erro geral (error) e erro de linha (row.error). Abaixo de 560 px de largura do contêiner cada lançamento vira um bloco empilhado. Tipo sempre com FlowTag; despesa nunca em vermelho.
