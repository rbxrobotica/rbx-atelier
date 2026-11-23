<script>
  import Icon from './Icon.svelte';
  // variant: primary · secondary · ghost · danger · inverse · inverse-ghost (os dois últimos sobre fundo marca)
  // size: s (36) · m (44) · l (52). Com href vira <a>; sem href é <button>.
  let {
    variant = 'primary', size = 'm', block = false, href, type = 'button',
    disabled = false, loading = false, icon, iconEnd, label,
    class: klass = '', children, ...rest
  } = $props();
  const cls = $derived(['itr-btn', `itr-btn--${variant}`, `itr-btn--${size}`, block && 'itr-btn--block', klass].filter(Boolean).join(' '));
</script>

{#snippet content()}
  {#if loading}<span class="itr-spinner" aria-hidden="true"></span>{:else if icon}<Icon name={icon} size={20} />{/if}
  <span class="itr-btn__label">{#if children}{@render children()}{:else}{label}{/if}</span>
  {#if iconEnd && !loading}<Icon name={iconEnd} size={20} />{/if}
{/snippet}

{#if href !== undefined}
  <a href={disabled ? undefined : href} class={cls} aria-disabled={disabled ? 'true' : undefined} role={disabled ? 'link' : undefined} {...rest}>{@render content()}</a>
{:else}
  <button {type} class={cls} disabled={disabled || loading} aria-busy={loading ? 'true' : undefined} {...rest}>{@render content()}</button>
{/if}
