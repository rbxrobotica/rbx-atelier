import * as React from 'react';
/**
 * Botão de ação da Initelo.
 * @startingPoint section="Componentes" subtitle="Botões: primário, secundário, fantasma e estados" viewport="700x330"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** primary = uma por tela; secondary = alternativa; ghost = ação terciária; danger = ação destrutiva. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** md (44 px) é o padrão e o mínimo em telas de toque. */
  size?: 'sm' | 'md' | 'lg';
  /** Nome de ícone Lucide à esquerda. */
  icon?: string;
  iconRight?: string;
  /** Mostra indicador e troca o rótulo por loadingLabel. */
  loading?: boolean;
  loadingLabel?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  /** Se informado, renderiza <a>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
