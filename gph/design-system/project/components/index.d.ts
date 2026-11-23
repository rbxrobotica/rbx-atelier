import type * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> { name: string; size?: number; title?: string }
export declare function Icon(props: IconProps): React.ReactElement;

export interface LogoProps { height?: number; symbolOnly?: boolean; label?: string; className?: string }
export declare function Logo(props: LogoProps): React.ReactElement;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { variant?: 'primary' | 'secondary' | 'quiet' | 'danger'; size?: 's' | 'm' | 'l'; icon?: string; iconEnd?: string; iconOnly?: boolean; loading?: boolean; block?: boolean; href?: string }
export declare function Button(props: ButtonProps): React.ReactElement;

export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> { label?: string; hint?: string; error?: string; counter?: string; prefix?: string; suffix?: string; icon?: string; multiline?: boolean; rows?: number; optional?: boolean }
export declare function TextField(props: TextFieldProps): React.ReactElement;

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { label?: string; hint?: string; error?: string; placeholder?: string; options: Array<string | { value: string; label: string }> }
export declare function Select(props: SelectProps): React.ReactElement;

export interface SearchBarProps { query?: string; location?: string; category?: string; categories?: string[]; size?: 'l' | 'm'; placeholder?: string; submitLabel?: string; onSubmit?: (v: { query: string; location: string }) => void; className?: string }
export declare function SearchBar(props: SearchBarProps): React.ReactElement;

export interface FilterChipItem { id: string; label: string; count?: number; icon?: string; selected?: boolean }
export interface FilterChipsProps { items: FilterChipItem[]; selected?: string[]; onChange?: (ids: string[]) => void; clearable?: boolean; label?: string; className?: string }
export declare function FilterChips(props: FilterChipsProps): React.ReactElement;

export interface ListingCardProps { href?: string; photo?: string; photoAlt?: string; photoCount?: number; category?: string; offerType?: string; title: string; price?: string; priceNote?: string; location?: string; publishedAt?: string; status?: 'rascunho' | 'em-revisao' | 'publicado' | 'pausado' | 'expirado' | 'vendido' | 'indisponivel' | 'recusado'; highlight?: boolean; saved?: boolean; onSave?: (saved: boolean) => void; hideSave?: boolean; layout?: 'grid' | 'row'; className?: string }
export declare function ListingCard(props: ListingCardProps): React.ReactElement;

export interface BadgeProps { tone?: 'neutral' | 'klein' | 'ouro' | 'ok' | 'warn' | 'err' | 'sold'; icon?: string; dot?: boolean; children?: React.ReactNode; className?: string }
export declare function Badge(props: BadgeProps): React.ReactElement;

export interface StatusBadgeProps { status: 'rascunho' | 'em-revisao' | 'publicado' | 'pausado' | 'expirado' | 'vendido' | 'indisponivel' | 'recusado'; children?: React.ReactNode; className?: string }
export declare function StatusBadge(props: StatusBadgeProps): React.ReactElement;

export interface AlertProps { tone?: 'info' | 'ok' | 'warn' | 'err'; title?: string; children?: React.ReactNode; action?: React.ReactNode; onClose?: () => void; className?: string }
export declare function Alert(props: AlertProps): React.ReactElement;

export interface DialogProps { open?: boolean; title: string; description?: string; children?: React.ReactNode; actions?: React.ReactNode; onClose?: () => void; size?: 's' | 'm' | 'l'; alert?: boolean; inline?: boolean; className?: string }
export declare function Dialog(props: DialogProps): React.ReactElement | null;

export interface NavLink { id: string; label: string; href: string }
export interface NavBarProps { active?: string; links?: NavLink[]; signedIn?: boolean; userName?: string; search?: React.ReactNode; compact?: boolean; homeHref?: string; loginHref?: string; publishHref?: string; accountHref?: string; onMenu?: () => void; className?: string }
export declare function NavBar(props: NavBarProps): React.ReactElement;

export interface BottomNavItem { id: string; label: string; icon: string; href: string; primary?: boolean }
export interface BottomNavProps { active?: string; items?: BottomNavItem[]; className?: string }
export declare function BottomNav(props: BottomNavProps): React.ReactElement;

export interface TabItem { id: string; label: string; count?: number }
export interface TabsProps { items: TabItem[]; value?: string; defaultValue?: string; onChange?: (id: string) => void; label?: string; className?: string }
export declare function Tabs(props: TabsProps): React.ReactElement;

export interface StepperProps { steps?: string[]; current?: number; className?: string }
export declare function Stepper(props: StepperProps): React.ReactElement;

export interface PhotoGalleryProps { photos?: Array<{ src?: string; alt?: string }>; total?: number; index?: number; category?: string; className?: string }
export declare function PhotoGallery(props: PhotoGalleryProps): React.ReactElement;

export interface AdvertiserCardProps { name: string; type?: string; memberSince?: string; location?: string; adsCount?: number; accountConfirmed?: boolean; href?: string; compact?: boolean; className?: string }
export declare function AdvertiserCard(props: AdvertiserCardProps): React.ReactElement;

export interface ContactPanelProps { price?: string; priceNote?: string; phoneVisible?: boolean; phone?: string; revealed?: boolean; onRevealPhone?: () => void; onMessage?: () => void; messageHref?: string; reportHref?: string; className?: string }
export declare function ContactPanel(props: ContactPanelProps): React.ReactElement;

export interface EmptyStateProps { icon?: string; title: string; children?: React.ReactNode; action?: React.ReactNode; className?: string }
export declare function EmptyState(props: EmptyStateProps): React.ReactElement;

export interface SkeletonProps { variant?: 'card' | 'line'; count?: number; label?: string; className?: string }
export declare function Skeleton(props: SkeletonProps): React.ReactElement;

export interface ToastProps { tone?: 'ok' | 'info' | 'warn' | 'err'; children?: React.ReactNode; action?: React.ReactNode; onClose?: () => void; className?: string }
export declare function Toast(props: ToastProps): React.ReactElement;

declare global { interface Window { Gph: { Icon: typeof Icon; Logo: typeof Logo; Button: typeof Button; TextField: typeof TextField; Select: typeof Select; SearchBar: typeof SearchBar; FilterChips: typeof FilterChips; ListingCard: typeof ListingCard; Badge: typeof Badge; StatusBadge: typeof StatusBadge; Alert: typeof Alert; Dialog: typeof Dialog; NavBar: typeof NavBar; BottomNav: typeof BottomNav; Tabs: typeof Tabs; Stepper: typeof Stepper; PhotoGallery: typeof PhotoGallery; AdvertiserCard: typeof AdvertiserCard; ContactPanel: typeof ContactPanel; EmptyState: typeof EmptyState; Skeleton: typeof Skeleton; Toast: typeof Toast; categories: string[] } } }
