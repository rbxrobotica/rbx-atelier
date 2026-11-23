import * as React from 'react';
/**
 * Etapa de conferência de valores e premissas; ao marcar tudo entra no estado concluído.
 */
export interface VerifyChecklistProps {
  title?: string;
  description?: React.ReactNode;
  items: Array<{ id: string; label: React.ReactNode; detail?: React.ReactNode }>;
  /** Controlado: ids marcados. */
  checked?: string[];
  defaultChecked?: string[];
  onChange?: (checked: string[]) => void;
  doneTitle?: string;
  doneDescription?: React.ReactNode;
  className?: string;
}
export declare function VerifyChecklist(props: VerifyChecklistProps): JSX.Element;
