Valor em reais — sempre "R$" + espaço fixo + milhar com ponto + centavos com vírgula; alinhe à direita em colunas.

    <Money value={4200} kind="income" />     {/* + R$ 4.200,00 */}
    <Money value={1327.35} kind="expense" /> {/* − R$ 1.327,35 */}
    <Money value={1116.35} />                {/* R$ 1.116,35 */}

Combine com FlowTag (Entrada/Despesa) — sinal e cor nunca aparecem sem rótulo. Despesa não usa vermelho: vermelho é reservado a erro.
