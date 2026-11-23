import * as React from 'react';
/**
 * Barra superior: logotipo, links principais, conta do aluno e menu no mobile.
 */
export interface TopNavProps {
  links?: Array<{ label: string; href?: string; current?: boolean }>;
  /** Aluno autenticado; initials aparecem no avatar (sem fotos). */
  user?: { name: string; initials: string };
  /** Força o layout mobile (links recolhidos no menu). */
  compact?: boolean;
  homeHref?: string;
  onHome?: (e: React.MouseEvent) => void;
  onMenu?: () => void;
  onNavigate?: (link: { label: string; href?: string }, e: React.MouseEvent) => void;
  /** Conteúdo extra à direita, antes do avatar. */
  children?: React.ReactNode;
  className?: string;
}
export declare function TopNav(props: TopNavProps): JSX.Element;
