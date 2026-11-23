import * as React from 'react';
/**
 * Barra de progresso linear; o valor sempre aparece também em texto.
 */
export interface ProgressBarProps {
  value?: number;
  max?: number;
  label?: React.ReactNode;
  /** Ex.: "5 de 24 aulas". Padrão: porcentagem. */
  valueText?: string;
  /** action = azul-tinta; course = cor do curso em escopo. Ao chegar a 100% vira sucesso com ícone. */
  tone?: 'action' | 'course';
  size?: 'sm' | 'md';
  className?: string;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
