import * as React from 'react';
/**
 * Aviso em linha com ícone, título e texto.
 */
export interface AlertProps {
  tone?: 'info' | 'success' | 'warning' | 'error';
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Botão ou link de ação abaixo do texto. */
  action?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}
export declare function Alert(props: AlertProps): JSX.Element;
