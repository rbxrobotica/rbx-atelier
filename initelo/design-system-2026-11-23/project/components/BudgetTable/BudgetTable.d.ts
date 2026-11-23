import * as React from 'react';
/**
 * Tabela de orçamento do mês com totais e saldo após cada lançamento.
 * @startingPoint section="Componentes" subtitle="Tabela de orçamento: entradas, despesas, vencimentos e saldo" viewport="700x500"
 */
export interface BudgetTableProps {
  rows: Array<{
    id: string;
    /** dd/mm */
    date: string;
    /** Dia do mês — gera "vence dia N" / "entra dia N". */
    day?: number;
    description: string;
    kind: 'income' | 'expense';
    /** Em reais. Ausente (null) mostra "—". */
    value: number | null;
    status?: 'upcoming' | 'soon' | 'overdue' | 'paid';
    daysLeft?: number;
    /** Mensagem de erro da linha (ícone + texto + fundo). */
    error?: string;
  }>;
  caption?: React.ReactNode;
  /** Linha de apoio sob o título, ex.: "Dezembro de 2026". */
  description?: React.ReactNode;
  showBalance?: boolean;
  loading?: boolean;
  /** Erro geral de carregamento. */
  error?: React.ReactNode;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyAction?: React.ReactNode;
  className?: string;
}
export declare function BudgetTable(props: BudgetTableProps): JSX.Element;
