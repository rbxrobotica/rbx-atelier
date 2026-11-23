import * as React from 'react';
/**
 * Indicador circular de espera com rótulo.
 */
export interface SpinnerProps {
  size?: number;
  label?: string;
  /** false esconde o texto visualmente (continua para leitores de tela). */
  showLabel?: boolean;
  className?: string;
}
export declare function Spinner(props: SpinnerProps): JSX.Element;
