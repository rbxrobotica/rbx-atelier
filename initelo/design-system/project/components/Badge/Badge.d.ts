import * as React from 'react';
/** Selo curto de status. */
export interface BadgeProps {
  /** course usa a cor do curso em escopo; proposal marca decisões de marca não validadas. */
  tone?: 'neutral' | 'success' | 'warning' | 'error' | 'info' | 'course' | 'proposal';
  /** Nome de ícone Lucide (14 px). */
  icon?: string;
  className?: string;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
