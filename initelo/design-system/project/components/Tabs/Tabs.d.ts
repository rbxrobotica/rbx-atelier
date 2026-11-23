import * as React from 'react';
/**
 * Abas controladas; a selecionada tem texto forte e barra inferior de 3 px.
 */
export interface TabsProps {
  items: Array<{ id: string; label: string; icon?: string }>;
  value: string;
  onChange?: (id: string) => void;
  /** Nome acessível do conjunto. */
  label?: string;
  className?: string;
}
export declare function Tabs(props: TabsProps): JSX.Element;
