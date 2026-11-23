import * as React from 'react';
/**
 * Card de curso para catálogos e para a área do aluno.
 * @startingPoint section="Componentes" subtitle="Card de curso com faixa, progresso e estados" viewport="700x430"
 */
export interface CourseCardProps {
  title: string;
  description?: string;
  /** Número da formação com dois dígitos. */
  number?: string;
  /** Chave do curso (data-curso) — define cor e padrão da faixa. */
  curso?: string;
  /** Ex.: "5 módulos · 24 aulas · cerca de 12 h". */
  meta?: string;
  status?: 'available' | 'in-progress' | 'done' | 'soon';
  /** 0–100, usado em in-progress. */
  progress?: number;
  progressText?: string;
  href?: string;
  onOpen?: (e: React.MouseEvent) => void;
  /** Esqueleto de carregamento. */
  loading?: boolean;
  className?: string;
}
export declare function CourseCard(props: CourseCardProps): JSX.Element;
