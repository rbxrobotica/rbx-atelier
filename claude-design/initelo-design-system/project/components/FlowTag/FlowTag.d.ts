import * as React from 'react';
/**
 * Rótulo com ícone para o tipo de lançamento.
 */
export interface FlowTagProps {
  kind?: 'income' | 'expense';
  className?: string;
}
export declare function FlowTag(props: FlowTagProps): JSX.Element;
