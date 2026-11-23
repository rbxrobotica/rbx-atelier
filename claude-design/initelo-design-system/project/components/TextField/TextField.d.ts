import * as React from 'react';
/**
 * Campo de texto (uma linha ou várias) com rótulo visível, dica e mensagem de erro.
 */
export interface TextFieldProps {
  label?: React.ReactNode;
  /** Texto de apoio abaixo do campo. */
  hint?: React.ReactNode;
  /** Mensagem de erro — troca a dica, adiciona ícone e borda de erro. */
  error?: React.ReactNode;
  /** Ex.: "R$". */
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  multiline?: boolean;
  rows?: number;
  /** Alinha à direita com algarismos tabulares. */
  numeric?: boolean;
  optional?: boolean;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  id?: string;
  className?: string;
  [attr: string]: any;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
