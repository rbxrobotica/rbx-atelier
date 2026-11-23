import * as React from 'react';
/**
 * Indicador de etapas numeradas; concluídas ganham ícone de check, a atual fica preenchida.
 */
export interface StepperProps {
  steps: Array<string | { label: string }>;
  /** Índice (base 0) da etapa atual. Use steps.length para tudo concluído. */
  current?: number;
  /** Mobile: mostra só o rótulo da etapa atual ("Etapa 3 de 4 · Confira"). */
  compact?: boolean;
  className?: string;
}
export declare function Stepper(props: StepperProps): JSX.Element;
