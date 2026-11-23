import * as React from 'react';
/**
 * Opção de escolha única; agrupe com o mesmo name dentro de um fieldset com legend.
 */
export interface RadioProps {
  label: React.ReactNode;
  detail?: React.ReactNode;
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  [attr: string]: any;
}
export declare function Radio(props: RadioProps): JSX.Element;
