<script>
  import Button from './Button.svelte';
  import Icon from './Icon.svelte';
  import Badge from './Badge.svelte';
  import Ph from './Ph.svelte';
  // price: "R$ 120" ou "[[CONFIRMAR preço]]" (aparece como pendência). action: { label, href, icon? }.
  let { name, description, price, period, items = [], action, featured = false, featuredLabel = 'Mais procurado', note, headingLevel = 3, class: klass = '', ...rest } = $props();
</script>

<article class="itr-price {featured ? 'itr-price--featured' : ''} {klass}" {...rest}>
  {#if featured}<span class="itr-price__flag"><Badge tone="marca" label={featuredLabel} icon="star" /></span>{/if}
  <svelte:element this={`h${headingLevel}`} class="itr-price__name">{name}</svelte:element>
  {#if description}<p class="itr-price__desc">{description}</p>{/if}
  <p class="itr-price__value">
    <span class="itr-price__amount"><Ph text={price} /></span>
    {#if period}<span class="itr-price__period">{period}</span>{/if}
  </p>
  {#if items.length}
    <ul class="itr-price__list">{#each items as it, i (i)}<li><Icon name="check" size={16} /><span><Ph text={it} /></span></li>{/each}</ul>
  {/if}
  {#if action}<div class="itr-price__action"><Button variant={featured ? 'primary' : 'secondary'} block href={action.href} icon={action.icon} label={action.label} /></div>{/if}
  {#if note}<p class="itr-price__note"><Ph text={note} /></p>{/if}
</article>
