import type { ReactNode, MouseEventHandler, FormEvent } from 'react';

/** O símbolo: a lojinha com toldo, uma cor (`simbolo`), sem brilho. Vetorizada do logo original. */
export interface SymbolProps {
  /** Altura em px; a largura segue a proporção 154:142. Padrão 40. */
  size?: number;
  /** Com title, o SVG vira imagem acessível (role="img"); sem, é decorativo. */
  title?: string;
  className?: string;
}

/** O letreiro "GPH": DejaVu Sans Condensed Bold Oblique, magenta, com brilho branco. */
export interface WordmarkProps {
  /** m = 42px (navegação), s = 34px (celular), l = 120px (capas). */
  size?: 's' | 'm' | 'l';
  /** Quando presente, vira link para a página inicial. */
  href?: string;
  className?: string;
}

/** Assinatura completa: símbolo + wordmark lado a lado. Rodapé, capas, perfil, telas de abertura. */
export interface LockupProps {
  /** Mesmos corpos do Wordmark: s 34px, m 42px, l 120px. O símbolo acompanha (0,95em). */
  size?: 's' | 'm' | 'l';
  href?: string;
  className?: string;
}

/** Botão: primary (rosa com brilho; um por área de tela), secondary (contorno lilás) ou quiet. */
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'quiet';
  /** m = 44px; l = 52px (busca e Publique seu Anúncio na página inicial). */
  size?: 'm' | 'l';
  block?: boolean;
  /** Vira <a>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  /** Mostra o spinner e desabilita; define aria-busy. */
  loading?: boolean;
  onClick?: MouseEventHandler;
  'aria-label'?: string;
  className?: string;
  children?: ReactNode;
}

/** A busca da página inicial: pergunta em ciano, categoria, região e Pesquisar, empilhados. */
export interface SearchBarProps {
  id?: string;
  /** Padrão: "O que você está procurando?" */
  prompt?: string;
  /** id da categoria inicial ('' = Todas Categorias). */
  category?: string;
  /** Valor da região inicial ('' = Todo Brasil). */
  region?: string;
  regions?: { value: string; label: string }[];
  /** Padding menor e botão de 44px, para o topo dos resultados. */
  compact?: boolean;
  onSubmit?: (e: FormEvent) => void;
  className?: string;
}

export interface CategoryTab { id: string; label: string }

/** As cinco categorias como abas: ativa em rosa com brilho, demais em ciano. */
export interface CategoryTabsProps {
  /** id da aba atual. Padrão: 'imoveis'. */
  value?: string;
  /** Padrão: as cinco categorias do GPH na ordem do protótipo. */
  items?: CategoryTab[];
  onChange?: (id: string) => void;
  className?: string;
}

/** Cartão de anúncio: foto sobre surface, rótulo em ciano, título em ink, preço em magenta. */
export interface ListingCardProps {
  title: string;
  href?: string;
  photo?: string;
  photoAlt?: string;
  /** Ex.: "Imóveis". */
  category?: string;
  /** Ex.: "Aluguel", "Venda". */
  offer?: string;
  /** Como o anunciante escreveu, com "R$". Vazio = "A combinar". */
  price?: string;
  place?: string;
  /** "Hoje, 09:40", "Ontem", "12 out". */
  when?: string;
  /** Selo Destaque e brilho rosa (Hipótese comercial). */
  featured?: boolean;
  status?: 'publicado' | 'vendido' | 'indisponivel';
  className?: string;
}

export interface NavLink { label: string; href: string }

/** Barra superior: Wordmark, links em lilás inclinado e o botão Publique seu Anúncio. */
export interface NavBarProps {
  homeHref?: string;
  /** Padrão: Responsabilidade Corporativa, Blog, Minha Conta, Ajuda. */
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  /** Abaixo de bp-m: esconde links e CTA, mostra o botão de menu. */
  compact?: boolean;
  onToggle?: () => void;
  className?: string;
}

export const CATEGORIES: CategoryTab[];
