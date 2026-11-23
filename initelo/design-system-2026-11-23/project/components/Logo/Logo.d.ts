import * as React from 'react';
/** Assinatura visual da Initelo (PROPOSTA — ainda não validada pelo fundador). */
export interface LogoProps {
  /** horizontal = símbolo + logotipo; wordmark = só o logotipo; simbolo = só o "i" (favicon, avatar). */
  variant?: 'horizontal' | 'wordmark' | 'simbolo';
  /** clara = sobre papel; escura = sobre azul-tinta; mono = uma cor (herda color). */
  tone?: 'clara' | 'escura' | 'mono';
  /** Altura do símbolo em px (o logotipo acompanha). Mínimo 16. */
  size?: number;
  /** Forma do símbolo: quadrado (favicon) ou redondo (avatar). */
  shape?: 'quadrado' | 'redondo';
  /** Só em mono: cor do "i" vazado dentro do símbolo (a cor do fundo onde o logo está). */
  knockout?: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
