import * as React from 'react';
/**
 * Painel completo de interação com o tutor de IA.
 * @startingPoint section="Componentes" subtitle="Painel do tutor de IA com conversa, sugestões e lembrete de conferência" viewport="700x600"
 */
export interface TutorPanelProps {
  title?: string;
  messages?: Array<{ id: string; from: 'student' | 'tutor'; text: React.ReactNode; verify?: boolean }>;
  /** Perguntas sugeridas no estado vazio. */
  suggestions?: string[];
  onSend?: (text: string) => void;
  /** IA respondendo: mostra "Escrevendo a resposta…" e bloqueia o envio. */
  loading?: boolean;
  /** Mensagem de erro com ação de tentar de novo. */
  error?: React.ReactNode;
  onRetry?: () => void;
  onClose?: () => void;
  placeholder?: string;
  /** Preenche o campo (ex.: vindo de PromptSuggestion). */
  draft?: string;
  disclaimer?: string;
  emptyText?: string;
  className?: string;
}
export declare function TutorPanel(props: TutorPanelProps): JSX.Element;
