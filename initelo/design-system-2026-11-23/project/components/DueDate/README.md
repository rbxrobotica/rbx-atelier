Vencimento por extenso — em frases use "vence dia 10"; em colunas use dd/mm (10/12).

    <DueDate day={10} />                          {/* vence dia 10 */}
    <DueDate day={5} kind="income" />             {/* entra dia 5 */}
    <DueDate day={10} status="soon" daysLeft={3} />
    <DueDate day={10} status="overdue" />  <DueDate day={10} status="paid" date="10/12" />
