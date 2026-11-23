<script>
  import Icon from './Icon.svelte';
  // Um serviço da Iteruno: ícone fixo por frente (wrench · globe · book-open), o que entra, link.
  let { title, description, items = [], icon = 'wrench', href, linkLabel = 'Saiba mais', headingLevel = 3, class: klass = '', ...rest } = $props();
</script>

<article class="itr-service {klass}" {...rest}>
  <span class="itr-service__pad"><Icon name={icon} size={28} /></span>
  <svelte:element this={`h${headingLevel}`} class="itr-service__title">{title}</svelte:element>
  {#if description}<p class="itr-service__desc">{description}</p>{/if}
  {#if items.length}
    <ul class="itr-service__list">{#each items as it, i (i)}<li><Icon name="check" size={16} /><span>{it}</span></li>{/each}</ul>
  {/if}
  {#if href}<a class="itr-link itr-service__link" {href}><span>{linkLabel}</span><Icon name="arrow-right" size={20} /></a>{/if}
</article>
