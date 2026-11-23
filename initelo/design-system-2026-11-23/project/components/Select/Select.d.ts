import * as React from 'react';
/**
 * Seleção nativa (acessível por teclado e toque) com rótulo, dica e erro.
 */
export interface SelectProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  options?: Array<string | { value: string; label: string }>;
  /** Primeira opção vazia, ex.: "Escolha o tipo". */
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  className?: string;
  children?: React.ReactNode;
  [attr: string]: any;
}
export declare function Select(props: SelectProps): JSX.Element;
