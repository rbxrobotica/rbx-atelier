/* Initelo Design System — tipos dos componentes (documentação; não verificados).
   Cada componente também tem o seu em components/<Comp>/<Comp>.d.ts. */
import * as React from 'react';

// ---- Icon ----
/** Ícone da biblioteca Lucide, sempre acompanhado de texto quando carrega significado. */
export interface IconProps {
  /** Nome Lucide em kebab-case, ex.: "circle-check", "arrow-down-left". */
  name: string;
  /** Tamanho em px. 16 em selos, 20 no texto, 24 em navegação. */
  size?: number;
  strokeWidth?: number;
  /** Rótulo acessível; sem ele o ícone é decorativo (aria-hidden). */
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;

// ---- Logo ----
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

// ---- Button ----
/**
 * Botão de ação da Initelo.
 * @startingPoint section="Componentes" subtitle="Botões: primário, secundário, fantasma e estados" viewport="700x330"
 */
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** primary = uma por tela; secondary = alternativa; ghost = ação terciária; danger = ação destrutiva. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** md (44 px) é o padrão e o mínimo em telas de toque. */
  size?: 'sm' | 'md' | 'lg';
  /** Nome de ícone Lucide à esquerda. */
  icon?: string;
  iconRight?: string;
  /** Mostra indicador e troca o rótulo por loadingLabel. */
  loading?: boolean;
  loadingLabel?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  /** Se informado, renderiza <a>. */
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;

// ---- IconButton ----
/** Botão só com ícone; o rótulo é obrigatório para leitores de tela. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Nome de ícone Lucide. */
  icon: string;
  /** Texto acessível, ex.: "Fechar tutor". */
  label: string;
  size?: 'sm' | 'md';
  variant?: 'ghost' | 'outlined';
}
export declare function IconButton(props: IconButtonProps): JSX.Element;

// ---- Badge ----
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

// ---- CourseSeal ----
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

// ---- TextField ----
/**
 * Campo de texto (uma linha ou várias) com rótulo visível, dica e mensagem de erro.
 */
export interface TextFieldProps {
  label?: React.ReactNode;
  /** Texto de apoio abaixo do campo. */
  hint?: React.ReactNode;
  /** Mensagem de erro — troca a dica, adiciona ícone e borda de erro. */
  error?: React.ReactNode;
  /** Ex.: "R$". */
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  multiline?: boolean;
  rows?: number;
  /** Alinha à direita com algarismos tabulares. */
  numeric?: boolean;
  optional?: boolean;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  id?: string;
  className?: string;
  [attr: string]: any;
}
export declare function TextField(props: TextFieldProps): JSX.Element;

// ---- Select ----
/**
 * Seleção nativa (acessível por teclado e toque) com rótulo, dica e erro.
 */
export interface SelectProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  options?: Array<string | { value: string; label: string }>;
  /** Primeira opção vazia, ex.: "Escolha o tipo". */
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  id?: string;
  className?: string;
  children?: React.ReactNode;
  [attr: string]: any;
}
export declare function Select(props: SelectProps): JSX.Element;

// ---- Checkbox ----
/**
 * Caixa de seleção com rótulo clicável (alvo de 44 px).
 */
export interface CheckboxProps {
  label: React.ReactNode;
  /** Linha de apoio em texto menor. */
  detail?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  [attr: string]: any;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;

// ---- Radio ----
/**
 * Opção de escolha única; agrupe com o mesmo name dentro de um fieldset com legend.
 */
export interface RadioProps {
  label: React.ReactNode;
  detail?: React.ReactNode;
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  className?: string;
  [attr: string]: any;
}
export declare function Radio(props: RadioProps): JSX.Element;

// ---- TopNav ----
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

// ---- Breadcrumb ----
/**
 * Trilha de navegação; o último item é a página atual.
 */
export interface BreadcrumbProps {
  items: Array<{ label: string; href?: string; onClick?: (e: React.MouseEvent) => void }>;
  className?: string;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;

// ---- Tabs ----
/**
 * Abas controladas; a selecionada tem texto forte e barra inferior de 3 px.
 */
export interface TabsProps {
  items: Array<{ id: string; label: string; icon?: string }>;
  value: string;
  onChange?: (id: string) => void;
  /** Nome acessível do conjunto. */
  label?: string;
  className?: string;
}
export declare function Tabs(props: TabsProps): JSX.Element;

// ---- LessonList ----
/**
 * Lista vertical das aulas de um módulo (barra lateral da tela de aula).
 */
export interface LessonListProps {
  /** Sobrelinha, ex.: "Módulo 1 · O dinheiro do mês". */
  title?: string;
  lessons: Array<{ id: string; title: string; duration?: string; kind?: 'aula' | 'exercicio'; status?: 'done' | 'current' | 'available' | 'locked' }>;
  onSelect?: (lesson: { id: string; title: string }) => void;
  className?: string;
}
export declare function LessonList(props: LessonListProps): JSX.Element;

// ---- CourseCard ----
/**
 * Card de curso para catálogos e para a área do aluno.
 * @startingPoint section="Componentes" subtitle="Card de curso com faixa, progresso e estados" viewport="700x430"
 */
export interface CourseCardProps {
  title: string;
  description?: string;
  /** Número da formação com dois dígitos. */
  number?: string;
  /** Chave do curso (data-curso) — define cor e padrão da faixa. */
  curso?: string;
  /** Ex.: "5 módulos · 24 aulas · cerca de 12 h". */
  meta?: string;
  status?: 'available' | 'in-progress' | 'done' | 'soon';
  /** 0–100, usado em in-progress. */
  progress?: number;
  progressText?: string;
  href?: string;
  onOpen?: (e: React.MouseEvent) => void;
  /** Esqueleto de carregamento. */
  loading?: boolean;
  className?: string;
}
export declare function CourseCard(props: CourseCardProps): JSX.Element;

// ---- LessonCard ----
/**
 * Card de aula/exercício em formato de linha, clicável por inteiro.
 */
export interface LessonCardProps {
  /** Número da aula no módulo. */
  index: number | string;
  title: string;
  /** Ex.: "12 min de leitura". */
  meta?: string;
  status?: 'done' | 'current' | 'available' | 'locked';
  kind?: 'aula' | 'exercicio';
  href?: string;
  onOpen?: (e: React.MouseEvent) => void;
  className?: string;
}
export declare function LessonCard(props: LessonCardProps): JSX.Element;

// ---- EmptyState ----
/**
 * Bloco para listas, tabelas e painéis sem conteúdo.
 */
export interface EmptyStateProps {
  /** Nome de ícone Lucide. */
  icon?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** Geralmente um Button. */
  action?: React.ReactNode;
  className?: string;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;

// ---- Alert ----
/**
 * Aviso em linha com ícone, título e texto.
 */
export interface AlertProps {
  tone?: 'info' | 'success' | 'warning' | 'error';
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Botão ou link de ação abaixo do texto. */
  action?: React.ReactNode;
  onClose?: () => void;
  className?: string;
}
export declare function Alert(props: AlertProps): JSX.Element;

// ---- ProgressBar ----
/**
 * Barra de progresso linear; o valor sempre aparece também em texto.
 */
export interface ProgressBarProps {
  value?: number;
  max?: number;
  label?: React.ReactNode;
  /** Ex.: "5 de 24 aulas". Padrão: porcentagem. */
  valueText?: string;
  /** action = azul-tinta; course = cor do curso em escopo. Ao chegar a 100% vira sucesso com ícone. */
  tone?: 'action' | 'course';
  size?: 'sm' | 'md';
  className?: string;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;

// ---- Stepper ----
/**
 * Indicador de etapas numeradas; concluídas ganham ícone de check, a atual fica preenchida.
 */
export interface StepperProps {
  steps: Array<string | { label: string }>;
  /** Índice (base 0) da etapa atual. Use steps.length para tudo concluído. */
  current?: number;
  /** Mobile: mostra só o rótulo da etapa atual ("Etapa 3 de 4 · Confira"). */
  compact?: boolean;
  className?: string;
}
export declare function Stepper(props: StepperProps): JSX.Element;

// ---- Skeleton ----
/**
 * Bloco de carregamento; o contêiner deve ter aria-busy="true".
 */
export interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  /** Gera N linhas de texto (a última com 60%). */
  lines?: number;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;

// ---- Spinner ----
/**
 * Indicador circular de espera com rótulo.
 */
export interface SpinnerProps {
  size?: number;
  label?: string;
  /** false esconde o texto visualmente (continua para leitores de tela). */
  showLabel?: boolean;
  className?: string;
}
export declare function Spinner(props: SpinnerProps): JSX.Element;

// ---- Money ----
/**
 * Valor monetário no padrão brasileiro (R$ 1.234,56) com algarismos tabulares.
 */
export interface MoneyProps {
  /** Número em reais (use ponto decimal no código: 1234.56). */
  value: number;
  /** income mostra "+"; expense mostra "−" (U+2212); neutral só mostra sinal se negativo. */
  kind?: 'income' | 'expense' | 'neutral';
  showSign?: boolean;
  className?: string;
}
export declare function Money(props: MoneyProps): JSX.Element;

// ---- FlowTag ----
/**
 * Rótulo com ícone para o tipo de lançamento.
 */
export interface FlowTagProps {
  kind?: 'income' | 'expense';
  className?: string;
}
export declare function FlowTag(props: FlowTagProps): JSX.Element;

// ---- DueDate ----
/**
 * Data de vencimento (ou de entrada) em linguagem do dia a dia.
 */
export interface DueDateProps {
  /** Dia do mês, sem zero à esquerda no texto ("dia 5"). */
  day: number;
  /** income → "entra dia N"; expense → "vence dia N". */
  kind?: 'income' | 'expense';
  status?: 'upcoming' | 'soon' | 'overdue' | 'paid';
  /** Usado em soon: 0 = hoje, 1 = amanhã. */
  daysLeft?: number;
  /** dd/mm, usado em paid ("paga em 10/12"). */
  date?: string;
  icon?: boolean;
  className?: string;
}
export declare function DueDate(props: DueDateProps): JSX.Element;

// ---- BudgetTable ----
/**
 * Tabela de orçamento do mês com totais e saldo após cada lançamento.
 * @startingPoint section="Componentes" subtitle="Tabela de orçamento: entradas, despesas, vencimentos e saldo" viewport="700x500"
 */
export interface BudgetTableProps {
  rows: Array<{
    id: string;
    /** dd/mm */
    date: string;
    /** Dia do mês — gera "vence dia N" / "entra dia N". */
    day?: number;
    description: string;
    kind: 'income' | 'expense';
    /** Em reais. Ausente (null) mostra "—". */
    value: number | null;
    status?: 'upcoming' | 'soon' | 'overdue' | 'paid';
    daysLeft?: number;
    /** Mensagem de erro da linha (ícone + texto + fundo). */
    error?: string;
  }>;
  caption?: React.ReactNode;
  /** Linha de apoio sob o título, ex.: "Dezembro de 2026". */
  description?: React.ReactNode;
  showBalance?: boolean;
  loading?: boolean;
  /** Erro geral de carregamento. */
  error?: React.ReactNode;
  emptyTitle?: string;
  emptyDescription?: string;
  emptyAction?: React.ReactNode;
  className?: string;
}
export declare function BudgetTable(props: BudgetTableProps): JSX.Element;

// ---- TutorPanel ----
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

// ---- TutorMessage ----
/**
 * Balão de mensagem do aluno ou do tutor de IA.
 */
export interface TutorMessageProps {
  from?: 'student' | 'tutor';
  /** loading mostra "Escrevendo a resposta…". */
  status?: 'loading';
  /** Mostra o lembrete de conferência sob respostas da IA (padrão true). */
  verify?: boolean;
  /** Substitui "Você" / "Tutor de IA". */
  author?: string;
  children?: React.ReactNode;
  className?: string;
}
export declare function TutorMessage(props: TutorMessageProps): JSX.Element;

// ---- PromptSuggestion ----
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

// ---- VerifyChecklist ----
/**
 * Etapa de conferência de valores e premissas; ao marcar tudo entra no estado concluído.
 */
export interface VerifyChecklistProps {
  title?: string;
  description?: React.ReactNode;
  items: Array<{ id: string; label: React.ReactNode; detail?: React.ReactNode }>;
  /** Controlado: ids marcados. */
  checked?: string[];
  defaultChecked?: string[];
  onChange?: (checked: string[]) => void;
  doneTitle?: string;
  doneDescription?: React.ReactNode;
  className?: string;
}
export declare function VerifyChecklist(props: VerifyChecklistProps): JSX.Element;

declare global {
  interface Window {
    IniteloDesignSystem_b8cd96: {
      Icon: typeof Icon;
      Logo: typeof Logo;
      Button: typeof Button;
      IconButton: typeof IconButton;
      Badge: typeof Badge;
      CourseSeal: typeof CourseSeal;
      TextField: typeof TextField;
      Select: typeof Select;
      Checkbox: typeof Checkbox;
      Radio: typeof Radio;
      TopNav: typeof TopNav;
      Breadcrumb: typeof Breadcrumb;
      Tabs: typeof Tabs;
      LessonList: typeof LessonList;
      CourseCard: typeof CourseCard;
      LessonCard: typeof LessonCard;
      EmptyState: typeof EmptyState;
      Alert: typeof Alert;
      ProgressBar: typeof ProgressBar;
      Stepper: typeof Stepper;
      Skeleton: typeof Skeleton;
      Spinner: typeof Spinner;
      Money: typeof Money;
      FlowTag: typeof FlowTag;
      DueDate: typeof DueDate;
      BudgetTable: typeof BudgetTable;
      TutorPanel: typeof TutorPanel;
      TutorMessage: typeof TutorMessage;
      PromptSuggestion: typeof PromptSuggestion;
      VerifyChecklist: typeof VerifyChecklist;
    };
  }
}
