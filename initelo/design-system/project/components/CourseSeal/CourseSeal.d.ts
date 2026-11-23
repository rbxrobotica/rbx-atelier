/** Selo de curso (PROPOSTA): etiqueta com número, cor e padrão próprios de cada formação. */
export interface CourseSealProps {
  /** Número da formação com dois dígitos. */
  number?: string;
  title: string;
  /** Sobrelinha, ex.: "Formação". */
  kind?: string;
  /** Chave do curso; aplica data-curso e troca cor e padrão. Ex.: "financas". */
  curso?: 'financas' | 'escrita' | 'planilhas' | 'carreira' | string;
  variant?: 'etiqueta' | 'compacto';
  className?: string;
}
export declare function CourseSeal(props: CourseSealProps): JSX.Element;
