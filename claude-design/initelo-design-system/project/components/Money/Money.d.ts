import * as React from 'react';
/**
 * Valor monetário no padrão brasileiro (R$ 1.234,56) com algarismos tabulares.
 */
export interface MoneyProps {
  /** Número em reais (use ponto decimal no código: 1234.56). */
  value: number;
  /** income mostra "+"; expense mostra "−" (U+2212); neutral só mostra sinal se negativo. */
  kind?: 'income' | 'expense' | 'neutral';
  showSign?: boolean;
  className?: string;
}
export declare function Money(props: MoneyProps): JSX.Element;
