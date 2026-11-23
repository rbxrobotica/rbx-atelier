import * as React from 'react';
/**
 * Data de vencimento (ou de entrada) em linguagem do dia a dia.
 */
export interface DueDateProps {
  /** Dia do mês, sem zero à esquerda no texto ("dia 5"). */
  day: number;
  /** income → "entra dia N"; expense → "vence dia N". */
  kind?: 'income' | 'expense';
  status?: 'upcoming' | 'soon' | 'overdue' | 'paid';
  /** Usado em soon: 0 = hoje, 1 = amanhã. */
  daysLeft?: number;
  /** dd/mm, usado em paid ("paga em 10/12"). */
  date?: string;
  icon?: boolean;
  className?: string;
}
export declare function DueDate(props: DueDateProps): JSX.Element;
