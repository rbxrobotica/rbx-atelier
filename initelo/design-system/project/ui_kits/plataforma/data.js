/* Dados fictícios da jornada do primeiro curso */
window.INI_KIT = {
  links: [{ label: 'Cursos', current: true }, { label: 'Minhas aulas' }, { label: 'Ajuda' }],
  user: { name: 'Marina Souza', initials: 'MS' },
  objetivos: [
    'Formular perguntas claras para a IA sobre situações financeiras do dia a dia.',
    'Montar o orçamento do mês com entradas, despesas e datas de vencimento.',
    'Comparar cenários — pagar à vista ou parcelar, antecipar ou esperar — com as contas à mostra.',
    'Conferir os valores e as premissas de cada resposta da IA.',
    'Revisar suas hipóteses quando a situação mudar.',
    'Tomar suas decisões com base no que você mesmo conferiu.'
  ],
  metodo: [
    ['Monte', 'Reúna seus valores e datas em uma tabela.'],
    ['Pergunte', 'Use ou adapte a pergunta sugerida para a IA.'],
    ['Confira', 'Compare valores, contas e premissas com a sua tabela.'],
    ['Decida', 'Escreva, com suas palavras, o que você vai fazer.']
  ],
  modulos: [
    { n: 1, titulo: 'O dinheiro do mês', meta: '5 aulas · cerca de 1 h 10 min', aulas: [
      { id: 'm1a1', index: 1, title: 'Como organizar o dinheiro do mês', meta: '12 min de leitura' },
      { id: 'm1a2', index: 2, kind: 'exercicio', title: 'Salário no dia 5, contas ao longo do mês', meta: '15 min' },
      { id: 'm1a3', index: 3, title: 'Como fazer uma boa pergunta para a IA', meta: '10 min de leitura' },
      { id: 'm1a4', index: 4, title: 'Despesas fixas e variáveis', meta: '10 min de leitura' },
      { id: 'm1a5', index: 5, kind: 'exercicio', title: 'O seu mês em uma tabela', meta: '20 min' }
    ] },
    { n: 2, titulo: 'Perguntar bem, conferir sempre', meta: '5 aulas · cerca de 2 h', resumo: 'Como dar contexto à IA, pedir as contas à mostra e identificar o que ela presumiu.' },
    { n: 3, titulo: 'Comparar cenários antes de decidir', meta: '5 aulas · cerca de 2 h 30 min', resumo: 'À vista ou parcelado, antecipar ou esperar: como montar dois cenários e comparar com os mesmos critérios.' },
    { n: 4, titulo: 'Dívidas, juros e parcelas', meta: '5 aulas · cerca de 3 h', resumo: 'Entender o custo de uma dívida, simular renegociações e conferir os cálculos de juros.' },
    { n: 5, titulo: 'Reserva e planos de longo prazo', meta: '4 aulas · cerca de 3 h', resumo: 'Definir uma reserva para imprevistos e revisar o plano quando a vida muda.' }
  ],
  linhas: [
    { id: 's', date: '05/12', day: 5, description: 'Salário', kind: 'income', value: 4200 },
    { id: 'a', date: '10/12', day: 10, description: 'Aluguel', kind: 'expense', value: 1450 },
    { id: 'e', date: '15/12', day: 15, description: 'Energia elétrica', kind: 'expense', value: 186.4 },
    { id: 'i', date: '20/12', day: 20, description: 'Internet', kind: 'expense', value: 119.9 },
    { id: 'c', date: '28/12', day: 28, description: 'Cartão de crédito', kind: 'expense', value: 1327.35 }
  ],
  pergunta: 'Meu salário de R$ 4.200,00 entra no dia 5. Tenho estas contas no mês: aluguel de R$ 1.450,00 (vence dia 10), energia de R$ 186,40 (dia 15), internet de R$ 119,90 (dia 20) e cartão de R$ 1.327,35 (dia 28). Monte uma tabela com o saldo depois de cada pagamento, mostre as contas que você fez e diga o que você presumiu.',
  resposta: 'Saldo depois de cada pagamento:\n\n05/12 · Salário  + R$ 4.200,00 → R$ 4.200,00\n10/12 · Aluguel  − R$ 1.450,00 → R$ 2.750,00\n15/12 · Energia  − R$ 186,40 → R$ 2.563,60\n20/12 · Internet  − R$ 119,90 → R$ 2.443,70\n28/12 · Cartão  − R$ 1.327,35 → R$ 1.116,35\n\nTotal de despesas: R$ 3.083,65.\nSaldo no fim do mês: R$ 1.116,35.\n\nO que presumi: que não há outras despesas no mês, como mercado e transporte, e que cada conta é paga no dia do vencimento.',
  conferencia: [
    { id: 'valores', label: 'Os valores da resposta são os mesmos da sua tabela?', detail: 'Aluguel R$ 1.450,00 · energia R$ 186,40 · internet R$ 119,90 · cartão R$ 1.327,35' },
    { id: 'datas', label: 'As datas estão certas?', detail: 'Salário no dia 5 · vencimentos nos dias 10, 15, 20 e 28' },
    { id: 'soma', label: 'A soma das despesas confere com a sua?', detail: 'Refaça na calculadora: deve dar R$ 3.083,65' },
    { id: 'saldo', label: 'O saldo final confere?', detail: 'R$ 4.200,00 − R$ 3.083,65 = R$ 1.116,35' },
    { id: 'premissas', label: 'As premissas da IA valem para o seu mês?', detail: 'Ela presumiu que não há outras despesas, como mercado e transporte.' }
  ],
  sugestoesTutor: [
    'Como organizo contas que vencem antes do salário?',
    'Qual é a diferença entre despesa fixa e variável?',
    'Me ajude a listar as minhas contas do mês.'
  ],
  respostaTutor: 'Posso ajudar. Para não presumir nada, preciso de duas informações: em que dia o seu dinheiro entra e quais contas vencem antes desse dia, com os valores. Com isso, mostro o saldo em cada data — e você confere se bate com as suas contas.',
  useNarrow: function (q) {
    var s = React.useState(function () { return window.matchMedia(q).matches; });
    React.useEffect(function () {
      var mq = window.matchMedia(q); var f = function () { s[1](mq.matches); };
      mq.addEventListener('change', f); return function () { mq.removeEventListener('change', f); };
    }, [q]);
    return s[0];
  }
};
