import * as React from 'react';
/**
 * Trilha de navegação; o último item é a página atual.
 */
export interface BreadcrumbProps {
  items: Array<{ label: string; href?: string; onClick?: (e: React.MouseEvent) => void }>;
  className?: string;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
