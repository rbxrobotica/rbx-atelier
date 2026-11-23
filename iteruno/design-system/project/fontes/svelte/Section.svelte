<script>
  // tone: fundo · superficie · superficie-2 · marca. narrow: largura de texto (content-narrow). display: título em Saira.
  let { tone = 'fundo', narrow = false, flush = false, eyebrow, title, lead, display = false, center = false, headingLevel = 2, id, class: klass = '', children, ...rest } = $props();
</script>

<section class="itr-section itr-section--{tone} {flush ? 'itr-section--flush' : ''} {klass}" {id} {...rest}>
  <div class="itr-section__inner {narrow ? 'itr-section__inner--narrow' : ''}">
    {#if eyebrow || title || lead}
      <div class="itr-section__head {center ? 'itr-section__head--center' : ''}">
        {#if eyebrow}<p class="itr-label itr-section__eyebrow">{eyebrow}</p>{/if}
        {#if title}<svelte:element this={`h${headingLevel}`} class="itr-section__title {display ? 'itr-section__title--display' : ''}">{title}</svelte:element>{/if}
        {#if lead}<p class="itr-section__lead">{lead}</p>{/if}
      </div>
    {/if}
    {@render children?.()}
  </div>
</section>
