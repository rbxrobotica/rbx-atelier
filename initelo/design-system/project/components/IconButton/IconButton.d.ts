import * as React from 'react';
/** Botão só com ícone; o rótulo é obrigatório para leitores de tela. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Nome de ícone Lucide. */
  icon: string;
  /** Texto acessível, ex.: "Fechar tutor". */
  label: string;
  size?: 'sm' | 'md';
  variant?: 'ghost' | 'outlined';
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
