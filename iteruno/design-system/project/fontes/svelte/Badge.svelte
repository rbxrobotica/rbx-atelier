<script>
  import Icon from './Icon.svelte';
  // tone: neutro · marca · sucesso · aviso · erro · info. Sempre com palavra; ícone opcional.
  let { tone = 'neutro', icon, size = 'm', outline = false, label, class: klass = '', children, ...rest } = $props();
</script>

<span class="itr-badge itr-badge--{tone} {size === 'l' ? 'itr-badge--l' : ''} {outline ? 'itr-badge--outline' : ''} {klass}" {...rest}>
  {#if icon}<Icon name={icon} size={size === 'l' ? 16 : 14} />{/if}<span>{label}{@render children?.()}</span>
</span>
