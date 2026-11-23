import * as React from 'react';
/**
 * Ficha de sugestão de pergunta (prompt) que o aluno pode adaptar, copiar ou enviar ao tutor.
 */
export interface PromptSuggestionProps {
  title?: string;
  /** Texto da pergunta (string). */
  children: React.ReactNode;
  hint?: string;
  /** Recebe o texto; normalmente preenche o campo do tutor. */
  onUse?: (text: string) => void;
  useLabel?: string;
  onCopy?: (text: string) => void;
  className?: string;
}
export declare function PromptSuggestion(props: PromptSuggestionProps): JSX.Element;
