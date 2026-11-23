import * as React from 'react';
/**
 * Bloco de carregamento; o contêiner deve ter aria-busy="true".
 */
export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  /** Gera N linhas de texto (a última com 60%). */
  lines?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;
