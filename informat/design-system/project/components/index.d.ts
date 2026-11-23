import type * as React from 'react';

/** Nomes do conjunto de ícones Informat (grade 24, traço 1.75). */
export type IconName =
  | 'monitor' | 'laptop' | 'hard-drive' | 'wrench' | 'terminal' | 'server' | 'cpu' | 'upload' | 'camera' | 'image'
  | 'clock' | 'calendar' | 'map-pin' | 'video' | 'home' | 'check' | 'check-circle' | 'alert-triangle' | 'x'
  | 'x-circle' | 'minus-circle' | 'chevron-down' | 'chevron-right' | 'chevron-left' | 'arrow-right' | 'plus'
  | 'menu' | 'info' | 'shield-data' | 'file-text' | 'message' | 'phone' | 'mail' | 'user' | 'log-in' | 'search'
  | 'hourglass' | 'package';

/** Estados da ordem de serviço, na ordem do atendimento. */
export type OsStatus =
  | 'solicitado' | 'em-diagnostico' | 'aguardando-aprovacao' | 'aprovado' | 'em-execucao'
  | 'pronto-para-entrega' | 'entregue' | 'cancelado';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Nome do ícone. */
  name: IconName;
  /** Lado em px. Padrão 20 (use 16, 20 ou 24: icon-s, icon-m, icon-l). */
  size?: number;
  /** Rótulo acessível. Sem rótulo, o ícone é decorativo (aria-hidden). */
  label?: string;
  /** Espessura do traço. Padrão 1.75. */
  strokeWidth?: number;
}
export declare function Icon(props: IconProps): React.ReactElement;

export interface LogoProps extends React.SVGAttributes<SVGSVGElement> {
  /** horizontal (padrão), wordmark (só o nome) ou symbol (a placa com o i). */
  variant?: 'horizontal' | 'wordmark' | 'symbol';
  /** color (padrão, segue o tema pelos tokens) ou mono (uma tinta: ink). */
  tone?: 'color' | 'mono';
  /** Altura em px. Padrão 32 (40 no símbolo). Largura sai da proporção. */
  height?: number;
  /** Texto acessível. Padrão "Informat". */
  title?: string;
  /** true quando um link ao redor já nomeia o destino. */
  decorative?: boolean;
}
export declare function Logo(props: LogoProps): React.ReactElement;

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** primary: a ação da página (uma por vista). secondary: padrão. ghost: ação terciária. danger: destrutiva. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** m = 44px (padrão), l = 52px (hero, aprovação do escopo). */
  size?: 'm' | 'l';
  /** Com href, renderiza <a>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  iconLeft?: IconName;
  iconRight?: IconName;
  /** Mostra o indicador e desabilita. Troque o rótulo por um gerúndio: "Enviando". */
  loading?: boolean;
  /** Largura total do contêiner. */
  block?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): React.ReactElement;

export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label: React.ReactNode;
  /** Orientação acima do campo (ligada por aria-describedby). */
  hint?: React.ReactNode;
  /** Mensagem de erro: diz o que fazer, não só o que deu errado. */
  error?: React.ReactNode;
  /** Mostra "(opcional)" ao lado do rótulo. Campos obrigatórios não levam marca. */
  optional?: boolean;
  /** Renderiza <textarea>. Com maxLength, mostra o contador "120 de 1000". */
  multiline?: boolean;
  rows?: number;
  /** Atkinson Hyperlegible Mono: número de série, modelo, OS. */
  mono?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export declare function TextField(props: TextFieldProps): React.ReactElement;

export interface SelectOption { value: string; label: string; disabled?: boolean }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: React.ReactNode;
  options?: SelectOption[];
  /** Primeira opção desabilitada, ex.: "Escolha o tipo de equipamento". */
  placeholder?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  optional?: boolean;
}
export declare function Select(props: SelectProps): React.ReactElement;

export interface ChoiceOption {
  value: string;
  title: string;
  description?: string;
  icon?: IconName;
  /** Etiqueta curta, ex.: "Hipótese". */
  tag?: string;
  /** Linha técnica em mono, ex.: "[CIDADE] e região". */
  meta?: string;
  disabled?: boolean;
}
export interface ChoiceCardProps {
  /** A pergunta do grupo (vira <legend>). */
  legend: React.ReactNode;
  options: ChoiceOption[];
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  /** 1 empilha os cartões; padrão: colunas automáticas (mínimo card-min). */
  columns?: 1 | 'auto';
  className?: string;
}
export declare function ChoiceCard(props: ChoiceCardProps): React.ReactElement;

export interface ServiceCardProps extends React.HTMLAttributes<HTMLElement> {
  /** "01", "02", "03": aparece como "FRENTE 01". */
  index?: string;
  title: string;
  description?: string;
  /** O que está incluído, frases curtas. */
  items?: string[];
  icon?: IconName;
  href?: string;
  /** Padrão "Ver o serviço". */
  linkLabel?: string;
  /** Ex.: "Hipótese: remoto quando possível". */
  tag?: string;
  headingLevel?: 2 | 3 | 4;
}
export declare function ServiceCard(props: ServiceCardProps): React.ReactElement;

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: OsStatus;
  /** l: carimbo do cabeçalho da OS. */
  size?: 'm' | 'l';
  /** Substitui a palavra padrão (raro). */
  label?: string;
}
export declare function StatusBadge(props: StatusBadgeProps): React.ReactElement;

export interface AlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  tone?: 'info' | 'warn' | 'ok' | 'err' | 'neutral';
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Um Button ou link opcional. */
  action?: React.ReactNode;
  onClose?: () => void;
  icon?: IconName;
}
export declare function Alert(props: AlertProps): React.ReactElement;

export interface DialogProps {
  open: boolean;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  /** Botões, a ação principal por último. */
  footer?: React.ReactNode;
  onClose?: () => void;
  /** Mostra o diálogo no fluxo (documentação, canvas), sem camada fixa nem prisão de foco. */
  inline?: boolean;
  size?: 'm' | 'l';
  /** dialog (padrão) ou alertdialog para confirmações destrutivas. */
  role?: 'dialog' | 'alertdialog';
  className?: string;
}
export declare function Dialog(props: DialogProps): React.ReactElement | null;

export interface NavLink { label: string; href: string; current?: boolean }
export interface NavBarProps {
  links?: NavLink[];
  /** A chamada principal, ex.: { label: "Solicitar atendimento", href }. */
  cta?: { label: string; href: string };
  /** Entrada pela conta RBX, ex.: { label: "Entrar", href: "https://auth.merovelis.com/..." }. */
  signIn?: { label: string; href: string; icon?: IconName };
  logoHref?: string;
  /** Força o layout de celular (logo + botão de menu). Abaixo de 768px ele já é automático. */
  compact?: boolean;
  menuOpen?: boolean;
  defaultMenuOpen?: boolean;
  onMenuToggle?: (open: boolean) => void;
  className?: string;
}
export declare function NavBar(props: NavBarProps): React.ReactElement;

export interface TimelineStage {
  title: string;
  description?: string;
  /** Ex.: "[DATA] · [HORA]". */
  time?: string;
  /** step: etapa neutra do modo explain (só o número). */
  state?: 'done' | 'current' | 'pending' | 'step';
}
export interface ServiceTimelineProps {
  /** Padrão: as cinco etapas (Solicitação, Diagnóstico, Orçamento aprovado, Execução, Entrega e pós-atendimento). */
  stages?: TimelineStage[];
  /** Índice da etapa atual (0 a 4) quando as etapas não trazem state. */
  current?: number;
  orientation?: 'vertical' | 'horizontal';
  /** progress (padrão): estados da OS. explain: explica o processo (Início, página de serviço), todas as etapas como vias de cobre ligadas por trilha, só com o número. */
  mode?: 'progress' | 'explain';
  hideDescriptions?: boolean;
  label?: string;
  className?: string;
}
export declare function ServiceTimeline(props: ServiceTimelineProps): React.ReactElement;

export interface QuoteItem { label: string; detail?: string; value: React.ReactNode }
export interface QuoteSummaryProps {
  osNumber?: string;
  title?: string;
  status?: OsStatus;
  /** Diagnóstico, mão de obra, peças. Valores reais ou [VALOR]. */
  items: QuoteItem[];
  total: React.ReactNode;
  totalLabel?: string;
  /** Ex.: "[PRAZO]" ou uma data. */
  validity?: string;
  note?: React.ReactNode;
  /** false esconde os botões (OS já aprovada). */
  actions?: boolean;
  approveLabel?: string;
  onApprove?: () => void;
  onReject?: () => void;
  onAsk?: () => void;
  approveHref?: string;
  rejectHref?: string;
  askHref?: string;
  className?: string;
}
export declare function QuoteSummary(props: QuoteSummaryProps): React.ReactElement;

export type BackupChoice = 'completo' | 'pastas' | 'cliente' | 'sem-backup';
export interface BackupAgreementProps {
  value?: BackupChoice;
  defaultValue?: BackupChoice;
  onChange?: (value: BackupChoice, event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Texto da lista de pastas (opção "pastas"). */
  folders?: string;
  onFoldersChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Ciência registrada (opção "sem-backup"). */
  acknowledged?: boolean;
  onAcknowledge?: (checked: boolean) => void;
  /** Data do combinado, ex.: "[DATA]". */
  agreedAt?: string;
  /** Quem combinou, ex.: "[NOME]". */
  agreedWith?: string;
  legend?: React.ReactNode;
  hint?: React.ReactNode;
  readOnly?: boolean;
  name?: string;
  className?: string;
}
export declare function BackupAgreement(props: BackupAgreementProps): React.ReactElement;

export interface ChecklistItem {
  id?: string;
  label: React.ReactNode;
  /** Linha técnica em mono: valor medido, versão, modelo. */
  detail?: React.ReactNode;
  status?: 'pass' | 'fail' | 'pending' | 'na';
  disabled?: boolean;
}
export interface ChecklistProps {
  title?: React.ReactNode;
  items: ChecklistItem[];
  /** Renderiza caixas de seleção (escopo a aprovar) em vez de estados de teste. */
  interactive?: boolean;
  checked?: string[];
  defaultChecked?: string[];
  onChange?: (checked: string[]) => void;
  headingLevel?: 2 | 3 | 4;
  className?: string;
}
export declare function Checklist(props: ChecklistProps): React.ReactElement;

export interface UploadFile {
  name: string;
  /** Texto pronto, ex.: "2,4 MB". */
  size?: string;
  status?: 'done' | 'uploading' | 'error';
  progress?: number;
  error?: string;
}
export interface UploadFieldProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  optional?: boolean;
  files?: UploadFile[];
  onSelect?: (files: File[]) => void;
  onRemove?: (index: number) => void;
  removable?: boolean;
  accept?: string;
  multiple?: boolean;
  ctaLabel?: string;
  id?: string;
  className?: string;
}
export declare function UploadField(props: UploadFieldProps): React.ReactElement;

export interface EmptyStateProps {
  title: React.ReactNode;
  children?: React.ReactNode;
  action?: React.ReactNode;
  headingLevel?: 2 | 3 | 4;
  className?: string;
}
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;

export interface SkeletonProps {
  variant?: 'text' | 'card' | 'row';
  lines?: number;
  /** Texto para leitor de tela. Padrão "Carregando". */
  label?: string;
  className?: string;
}
export declare function Skeleton(props: SkeletonProps): React.ReactElement;

export interface ToastProps {
  tone?: 'neutral' | 'ok' | 'err';
  children: React.ReactNode;
  open?: boolean;
  action?: { label: string; onClick?: () => void };
  onClose?: () => void;
  /** Fixa no rodapé da janela. */
  floating?: boolean;
  className?: string;
}
export declare function Toast(props: ToastProps): React.ReactElement | null;

export interface OsMeta { label: string; value: React.ReactNode; mono?: boolean }
export interface OsHeaderProps {
  /** Sempre OS-0000. */
  osNumber: string;
  /** O equipamento, em palavras do cliente: "Notebook que desliga sozinho". */
  title: React.ReactNode;
  status?: OsStatus;
  meta?: OsMeta[];
  headingLevel?: 1 | 2;
  children?: React.ReactNode;
  className?: string;
}
export declare function OsHeader(props: OsHeaderProps): React.ReactElement;

export interface FooterLink { label: string; href?: string; icon?: IconName }
export interface SiteFooterProps {
  promise?: React.ReactNode;
  columns?: { title: string; links: FooterLink[] }[];
  /** Padrão "Informat · CNPJ [CNPJ]". */
  legal?: React.ReactNode;
  compact?: boolean;
  className?: string;
}
export declare function SiteFooter(props: SiteFooterProps): React.ReactElement;

declare global {
  interface Window {
    Informat: {
      Icon: typeof Icon; Logo: typeof Logo; Button: typeof Button; TextField: typeof TextField; Select: typeof Select;
      ChoiceCard: typeof ChoiceCard; ServiceCard: typeof ServiceCard; StatusBadge: typeof StatusBadge; Alert: typeof Alert;
      Dialog: typeof Dialog; NavBar: typeof NavBar; ServiceTimeline: typeof ServiceTimeline; QuoteSummary: typeof QuoteSummary;
      BackupAgreement: typeof BackupAgreement; Checklist: typeof Checklist; UploadField: typeof UploadField;
      EmptyState: typeof EmptyState; Skeleton: typeof Skeleton; Toast: typeof Toast; OsHeader: typeof OsHeader;
      SiteFooter: typeof SiteFooter;
    };
  }
}
