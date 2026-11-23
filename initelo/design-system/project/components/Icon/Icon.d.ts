import * as React from 'react';
/** Ícone da biblioteca Lucide, sempre acompanhado de texto quando carrega significado. */
export interface IconProps {
  /** Nome Lucide em kebab-case, ex.: "circle-check", "arrow-down-left". */
  name: string;
  /** Tamanho em px. 16 em selos, 20 no texto, 24 em navegação. */
  size?: number;
  strokeWidth?: number;
  /** Rótulo acessível; sem ele o ícone é decorativo (aria-hidden). */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
