import * as React from 'react';
/**
 * Card de aula/exercício em formato de linha, clicável por inteiro.
 */
export interface LessonCardProps {
  /** Número da aula no módulo. */
  index: number | string;
  title: string;
  /** Ex.: "12 min de leitura". */
  meta?: string;
  status?: 'done' | 'current' | 'available' | 'locked';
  kind?: 'aula' | 'exercicio';
  href?: string;
  onOpen?: (e: React.MouseEvent) => void;
  className?: string;
}
export declare function LessonCard(props: LessonCardProps): JSX.Element;
