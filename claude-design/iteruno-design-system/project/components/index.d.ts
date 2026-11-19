/* Iteruno Design System · tipos como documentação (não passam por verificação de tipos em build).
 * Os componentes são Svelte 5 (fontes/svelte/*.svelte). No SvelteKit: import { Button } from '@iteruno/design-system'.
 * No bundle clássico (window.Iteruno): Iteruno.mount(Iteruno.Button, { target, props }); Iteruno.unmount(instancia).
 * Toda prop `class` é somada à classe raiz do componente; props desconhecidas vão para o elemento raiz. */

export type IconName =
  | 'alert-triangle' | 'arrow-right' | 'book-open' | 'calendar' | 'camera' | 'check' | 'check-circle' | 'chevron-down'
  | 'chevron-left' | 'chevron-right' | 'clock' | 'code' | 'cpu' | 'download' | 'external-link' | 'file-text' | 'globe'
  | 'graduation-cap' | 'hard-drive' | 'home' | 'hourglass' | 'image' | 'info' | 'laptop' | 'log-in' | 'mail' | 'map-pin'
  | 'menu' | 'message' | 'minus-circle' | 'monitor' | 'package' | 'phone' | 'play-circle' | 'plus' | 'refresh' | 'search'
  | 'server' | 'shield-data' | 'star' | 'terminal' | 'upload' | 'user' | 'video' | 'whatsapp' | 'wifi-off' | 'wrench'
  | 'x' | 'x-circle' | 'sun' | 'moon';

/** Tons de estado. Estado nunca só por cor: Badge e Alert levam palavra e, quando ajuda, ícone. */
export type Tone = 'neutro' | 'marca' | 'sucesso' | 'aviso' | 'erro' | 'info';
export type HeadingLevel = 1 | 2 | 3 | 4;
/** Link ou botão com rótulo: usado em Hero, PriceCard, CourseCard, NavBar (cta) e Footer. */
export interface LinkAction { label: string; href: string; icon?: IconName }

/** Marca. Variantes: horizontal (padrão), curto (sem TECNOLOGIAS, abaixo de 40 px), wordmark, wordmark-curto, simbolo, avatar. */
export interface LogoProps {
  variant?: 'horizontal' | 'curto' | 'wordmark' | 'wordmark-curto' | 'simbolo' | 'avatar';
  /** cor: símbolo em marca, texto em texto (segue o tema). mono: tudo em currentColor. */
  tone?: 'cor' | 'mono';
  /** Altura em px; a largura segue a proporção do arquivo. */
  height?: number;
  /** Texto acessível (padrão "Iteruno Tecnologias"). */
  title?: string;
  /** true: aria-hidden, quando o nome já está escrito ao lado. */
  decorative?: boolean;
  class?: string;
}

/** Ícone de traço na grade 24 (traço 1,75, currentColor). Decorativo por padrão; com `label` vira imagem com nome. */
export interface IconProps { name: IconName; size?: 16 | 20 | 24 | 32 | number; label?: string; strokeWidth?: number; class?: string }

export interface ButtonProps {
  /** primary (uma por tela), secondary, ghost, danger; inverse e inverse-ghost sobre fundo marca. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'inverse' | 'inverse-ghost';
  /** s 36 px, m 44 px (padrão), l 52 px. */
  size?: 's' | 'm' | 'l';
  /** Ocupa a largura toda (formulários no celular). */
  block?: boolean;
  /** Com href renderiza <a>; sem href, <button type={type}>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  /** Mostra o spinner e bloqueia cliques; o rótulo continua visível. */
  loading?: boolean;
  icon?: IconName;
  iconEnd?: IconName;
  /** Rótulo em caixa de frase. Alternativa: filhos. */
  label?: string;
  class?: string;
  onclick?: (e: MouseEvent) => void;
}

export interface TextFieldProps {
  id?: string; label: string; hint?: string;
  /** Mensagem de erro em português comum; liga aria-invalid e aria-describedby. */
  error?: string;
  /** Mostra "(opcional)" ao lado do rótulo. Campos obrigatórios não levam asterisco. */
  optional?: boolean;
  multiline?: boolean; rows?: number;
  /** Fonte mono (série, modelo, protocolo). */
  mono?: boolean;
  type?: 'text' | 'email' | 'tel' | 'url' | 'number' | 'password' | 'search';
  /** bind:value no Svelte. */
  value?: string;
  name?: string; placeholder?: string;
  /** Com maxlength aparece o contador "n de max". */
  maxlength?: number;
  required?: boolean; disabled?: boolean; class?: string;
}

export interface SelectOption { value: string; label: string; disabled?: boolean }
export interface SelectProps {
  id?: string; label: string; hint?: string; error?: string; optional?: boolean;
  options: SelectOption[];
  /** Primeira opção, desabilitada, quando nada foi escolhido. */
  placeholder?: string;
  value?: string; name?: string; required?: boolean; disabled?: boolean; class?: string;
}

export interface CheckboxProps {
  id?: string; label: string; description?: string; error?: string;
  /** bind:checked no Svelte. */
  checked?: boolean;
  name?: string; value?: string; required?: boolean; disabled?: boolean; class?: string;
}

export interface FormError { id: string; message: string }
/** Formulário com resumo de erros (recebe foco ao aparecer) e validação em português via `validar(form)`. */
export interface FormProps {
  errors?: FormError[];
  summaryTitle?: string;
  /** Padrão true: a validação nativa do navegador fica desligada e `validar` assume. */
  novalidate?: boolean;
  class?: string;
  onsubmit?: (e: SubmitEvent) => void;
}
/** Linha do formulário: 1 coluna (padrão) ou 2 a partir de 768 px. */
export interface FormRowProps { columns?: 1 | 2; class?: string }
/** Barra de ações do formulário, com nota opcional abaixo. */
export interface FormActionsProps { note?: string; class?: string }

export interface BadgeProps { tone?: Tone; icon?: IconName; size?: 'm' | 'l'; outline?: boolean; label?: string; class?: string }

export interface AlertProps {
  tone?: Tone; title?: string; text?: string;
  /** Ícone padrão por tom (info, alert-triangle, check-circle, x-circle, info). */
  icon?: IconName;
  /** Com onclose aparece o botão fechar. */
  onclose?: () => void;
  closeLabel?: string;
  /** role="alert" para erros que surgem depois do carregamento; "status" para o resto. */
  role?: 'alert' | 'status';
  class?: string;
}

export interface NavLink { label: string; href: string; current?: boolean }
/** Barra de navegação fixa: logo, links, botão WhatsApp. Abaixo de 768 px vira menu <details>, sem JavaScript. */
export interface NavBarProps {
  links?: NavLink[];
  cta?: LinkAction;
  logoHref?: string;
  /** href da página atual (aria-current="page"). */
  current?: string;
  class?: string;
}

export interface HeroProps {
  /** Rótulo pequeno em caixa alta acima do título. */
  eyebrow?: string;
  /** A promessa, em display-xl, caixa de frase. */
  title: string;
  text?: string;
  primary?: LinkAction; secondary?: LinkAction;
  /** fundo (padrão), superficie ou marca. */
  tone?: 'fundo' | 'superficie' | 'marca';
  /** Padrão de sinal à direita a partir de 1200 px. */
  pattern?: boolean;
  headingLevel?: HeadingLevel;
  class?: string;
}

export interface SectionProps {
  tone?: 'fundo' | 'superficie' | 'superficie-2' | 'marca';
  /** Largura content-narrow (760 px) para texto corrido. */
  narrow?: boolean;
  /** Sem espaçamento vertical. */
  flush?: boolean;
  eyebrow?: string; title?: string; lead?: string;
  /** Título em display-l (abertura de página). */
  display?: boolean;
  center?: boolean;
  headingLevel?: HeadingLevel;
  id?: string; class?: string;
}

/** auto: colunas de no mínimo card-min (240 px). 2, 3 e 4: uma coluna até 767 px, duas até 1199 px, n a partir de 1200 px. */
export interface GridProps { columns?: 'auto' | 2 | 3 | 4; class?: string }

export interface ServiceCardProps {
  title: string; description?: string;
  /** O que entra no serviço. */
  items?: string[];
  /** Fixo por frente: wrench (Suporte & Manutenção), globe (Sites), book-open (Cursos). */
  icon?: IconName;
  href?: string; linkLabel?: string; headingLevel?: HeadingLevel; class?: string;
}

export interface PriceCardProps {
  name: string; description?: string;
  /** Valor ou [[CONFIRMAR preço]]; nunca inventado. */
  price?: string;
  /** "por mês", "por visita". */
  period?: string;
  items?: string[]; action?: LinkAction;
  /** Um por grupo: borda em marca e selo. */
  featured?: boolean; featuredLabel?: string;
  note?: string; headingLevel?: HeadingLevel; class?: string;
}

export interface CourseCardProps {
  title: string; description?: string;
  /** "Presencial", "Online". */
  format?: string;
  /** "16 h · 8 encontros". */
  duration?: string;
  /** Próxima turma, ou [[CONFIRMAR data]]. */
  next?: string;
  /** Vagas, mostradas como Badge. */
  seats?: string; seatsTone?: Tone;
  action?: LinkAction; icon?: IconName;
  badge?: { label: string; tone?: Tone; icon?: IconName };
  headingLevel?: HeadingLevel; class?: string;
}

/** Depoimento: só com autorização por escrito. Sem foto, mostra as iniciais. */
export interface TestimonialProps { quote: string; name: string; role?: string; photo?: string; card?: boolean; class?: string }

export interface AccordionItemData { id?: string; title: string; content?: string; html?: string; open?: boolean }
/** Perguntas frequentes com <details> nativo: funciona sem JavaScript. */
export interface AccordionProps {
  items?: AccordionItemData[];
  /** Um aberto por vez (atributo name do <details>). */
  exclusive?: boolean;
  name?: string; class?: string;
}
export interface AccordionItemProps { id?: string; title: string; open?: boolean; name?: string; class?: string }

export interface ContactCTAProps {
  title?: string; text?: string;
  /** Só dígitos com DDI e DDD (5511…): vira https://wa.me/<n>?text=<message>. Pode trazer [[CONFIRMAR]]. */
  whatsapp?: string;
  message?: string;
  email?: string;
  buttonLabel?: string; emailLabel?: string;
  /** Horário, prazo de resposta. */
  meta?: string;
  /** Cartão (dentro de uma página) em vez de faixa de largura total. */
  card?: boolean;
  pattern?: boolean; symbol?: boolean; headingLevel?: HeadingLevel; class?: string;
}

export interface FooterColumn { title: string; links: (LinkAction & { external?: boolean })[] }
/** WhatsApp e e-mail só viram link quando o dado existe: sem whatsappHref, ou com e-mail em [[CONFIRMAR]], aparecem como texto. */
export interface FooterContact { whatsapp?: string; whatsappHref?: string; email?: string; address?: string; hours?: string }
export interface FooterProps {
  promise?: string; columns?: FooterColumn[]; contact?: FooterContact;
  /** Texto depois do ano: CNPJ, cidade. Pode trazer [[CONFIRMAR]]. */
  legal?: string;
  year?: number;
  /** Linha de assinatura opcional (vazia por padrão: pendência 3 de marca/decisoes.md). */
  sign?: string;
  class?: string;
  /** children: conteúdo extra na linha de base (o botão de tema, por exemplo). */
}

export interface StepItem { title: string; text?: string }
/** Passos numerados de "como funciona": 1 coluna no celular, 2 a partir de 768 px, `columns` a partir de 1200 px. */
export interface StepsProps { items?: StepItem[]; columns?: 'auto' | 2 | 3 | 4 | 5; headingLevel?: HeadingLevel; class?: string }

export interface TimelineItem { when: string; title: string; text?: string; icon?: IconName; pending?: boolean }
/** Linha do tempo (Sobre). Um marco com [[CONFIRMAR]] ou pending fica com o ponto tracejado. */
export interface TimelineProps { items?: TimelineItem[]; headingLevel?: HeadingLevel; class?: string }

/** Botão de tema (claro/escuro). A troca em si é um script embutido do site; sem JavaScript o botão fica hidden. */
export interface ThemeToggleProps { labelEscuro?: string; labelClaro?: string; size?: 's' | 'm' | 'l'; variant?: 'ghost' | 'secondary'; hidden?: boolean; class?: string }

/** Padrão de sinal: quartos de círculo a partir do canto inferior esquerdo (usado por Hero e ContactCTA). */
export interface SinalProps { arcs?: number; step?: number; width?: number; opacity?: number; class?: string }
/** Texto que pode conter [[CONFIRMAR …]]: o marcador aparece destacado (.itr-ph). */
export interface PhProps { text?: string; class?: string }
/** ContactCTA: `href` substitui o link do WhatsApp enquanto não há número confirmado. PriceCard (items, note), CourseCard (format, duration) e Testimonial (quote, name, role) aceitam [[CONFIRMAR]]. */

export interface ValidationError { id: string; name: string; message: string }

export interface IterunoBundle {
  versao: string;
  mount: (component: unknown, options: { target: Element; props?: Record<string, unknown> }) => unknown;
  unmount: (instance: unknown) => void;
  /** Trecho de HTML pronto como snippet (children, action): Iteruno.html('<p>…</p>'). */
  html: (html: string) => unknown;
  /** Valida um <form>: required, email, data-tipo="telefone", minlength. Devolve [] quando está tudo certo. */
  validar: (form: HTMLFormElement) => ValidationError[];
  ICONS: Record<IconName, string>;
  ICON_NAMES: IconName[];
  Logo: unknown; Icon: unknown; Button: unknown; TextField: unknown; Select: unknown; Checkbox: unknown;
  Form: unknown; FormRow: unknown; FormActions: unknown; Badge: unknown; Alert: unknown; NavBar: unknown;
  Hero: unknown; Section: unknown; Grid: unknown; ServiceCard: unknown; PriceCard: unknown; CourseCard: unknown;
  Testimonial: unknown; Accordion: unknown; AccordionItem: unknown; ContactCTA: unknown; Footer: unknown;
  Steps: unknown; Timeline: unknown; ThemeToggle: unknown;
  Sinal: unknown; Ph: unknown;
}
declare global { interface Window { Iteruno: IterunoBundle } }
