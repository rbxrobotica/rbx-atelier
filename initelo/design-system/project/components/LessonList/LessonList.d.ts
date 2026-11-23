import * as React from 'react';
/**
 * Lista vertical das aulas de um módulo (barra lateral da tela de aula).
 */
export interface LessonListProps {
  /** Sobrelinha, ex.: "Módulo 1 · O dinheiro do mês". */
  title?: string;
  lessons: Array<{ id: string; title: string; duration?: string; kind?: 'aula' | 'exercicio'; status?: 'done' | 'current' | 'available' | 'locked' }>;
  onSelect?: (lesson: { id: string; title: string }) => void;
  className?: string;
}
export declare function LessonList(props: LessonListProps): JSX.Element;
