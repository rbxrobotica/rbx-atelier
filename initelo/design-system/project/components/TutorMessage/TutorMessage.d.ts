import * as React from 'react';
/**
 * Balão de mensagem do aluno ou do tutor de IA.
 */
export interface TutorMessageProps {
  from?: 'student' | 'tutor';
  /** loading mostra "Escrevendo a resposta…". */
  status?: 'loading';
  /** Mostra o lembrete de conferência sob respostas da IA (padrão true). */
  verify?: boolean;
  /** Substitui "Você" / "Tutor de IA". */
  author?: string;
  children?: React.ReactNode;
  className?: string;
}
export declare function TutorMessage(props: TutorMessageProps): JSX.Element;
