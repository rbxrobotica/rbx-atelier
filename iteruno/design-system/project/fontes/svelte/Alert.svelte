<script>
  import Icon from './Icon.svelte';
  import Ph from './Ph.svelte';
  const ICON = { info: 'info', aviso: 'alert-triangle', sucesso: 'check-circle', erro: 'x-circle', neutro: 'info' };
  // tone: info · aviso · sucesso · erro · neutro
  let { tone = 'info', title, text, icon, onclose, closeLabel = 'Fechar aviso', role, class: klass = '', children, action, ...rest } = $props();
</script>

<div class="itr-alert itr-alert--{tone} {klass}" role={role ?? (tone === 'erro' ? 'alert' : 'status')} {...rest}>
  <Icon name={icon || ICON[tone] || 'info'} size={20} class="itr-alert__icon" />
  <div class="itr-alert__body">
    {#if title}<p class="itr-alert__title">{title}</p>{/if}
    {#if text || children}<div class="itr-alert__text">{#if text}<p><Ph text={text} /></p>{/if}{@render children?.()}</div>{/if}
    {#if action}<div class="itr-alert__action">{@render action()}</div>{/if}
  </div>
  {#if onclose}
    <button type="button" class="itr-iconbtn itr-alert__close" aria-label={closeLabel} onclick={onclose}><Icon name="x" size={20} /></button>
  {/if}
</div>
