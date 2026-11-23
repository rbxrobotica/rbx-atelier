Campo de texto com rótulo sempre visível — use para nomes, valores em R$ e respostas abertas.

    <TextField label="Valor do aluguel" prefix="R$" numeric defaultValue="1.450,00" hint="Use o valor do boleto deste mês." />
    <TextField label="Sua decisão" multiline rows={3} />
    <TextField label="Dia do vencimento" error="Informe um dia entre 1 e 31." defaultValue="35" />

Estados: padrão, hover, foco (anel de 3 px), erro (borda + ícone + texto), desabilitado. Para demonstrar estados estáticos passe className="is-hover" ou "is-focus".
