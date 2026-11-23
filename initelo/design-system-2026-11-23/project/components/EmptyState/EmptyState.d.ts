import * as React from 'react';
/**
 * Bloco para listas, tabelas e painéis sem conteúdo.
 */
export interface EmptyStateProps {
  /** Nome de ícone Lucide. */
  icon?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Geralmente um Button. */
  action?: React.ReactNode;
  className?: string;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
