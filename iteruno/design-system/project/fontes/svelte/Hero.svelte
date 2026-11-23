<script>
  import Button from './Button.svelte';
  import Sinal from './Sinal.svelte';
  // tone: fundo · superficie · marca. primary/secondary: { label, href, icon? }. art: snippet opcional no lugar do padrão de sinal.
  let { eyebrow, title, text, primary, secondary, tone = 'fundo', pattern = true, headingLevel = 1, class: klass = '', art, children, ...rest } = $props();
  const inverse = $derived(tone === 'marca');
</script>

<section class="itr-hero itr-hero--{tone} {klass}" {...rest}>
  <div class="itr-hero__inner">
    <div class="itr-hero__body">
      {#if eyebrow}<p class="itr-label itr-hero__eyebrow">{eyebrow}</p>{/if}
      <svelte:element this={`h${headingLevel}`} class="itr-hero__title">{title}</svelte:element>
      {#if text}<p class="itr-hero__text">{text}</p>{/if}
      {#if primary || secondary}
        <div class="itr-hero__actions">
          {#if primary}<Button variant={inverse ? 'inverse' : 'primary'} size="l" href={primary.href} icon={primary.icon} label={primary.label} />{/if}
          {#if secondary}<Button variant={inverse ? 'inverse-ghost' : 'secondary'} size="l" href={secondary.href} icon={secondary.icon} label={secondary.label} />{/if}
        </div>
      {/if}
      {@render children?.()}
    </div>
    {#if art}
      <div class="itr-hero__art">{@render art()}</div>
    {:else if pattern}
      <div class="itr-hero__art"><Sinal class="itr-hero__sinal" /></div>
    {/if}
  </div>
</section>
