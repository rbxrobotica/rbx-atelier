import * as React from 'react';
/**
 * Caixa de seleção com rótulo clicável (alvo de 44 px).
 */
export interface CheckboxProps {
  label: React.ReactNode;
  /** Linha de apoio em texto menor. */
  detail?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  [attr: string]: any;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
