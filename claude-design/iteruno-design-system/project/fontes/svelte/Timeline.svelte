<script>
  import Icon from './Icon.svelte';
  import Ph from './Ph.svelte';
  // items: [{ when, title, text?, icon?, pending? }] — marcos em ordem cronológica.
  // Um marco pendente (pending, ou qualquer texto com [[CONFIRMAR]]) fica com o ponto tracejado.
  let { items = [], headingLevel = 3, class: klass = '', ...rest } = $props();
  const pendente = (it) => it.pending || /\[\[/.test(`${it.when || ''} ${it.title || ''} ${it.text || ''}`);
</script>

<ol class="itr-timeline {klass}" {...rest}>
  {#each items as it, i (i)}
    <li class="itr-timeline__item {pendente(it) ? 'itr-timeline__item--pendente' : ''}">
      <span class="itr-timeline__dot" aria-hidden="true">{#if it.icon}<Icon name={it.icon} size={16} />{/if}</span>
      <p class="itr-timeline__when"><Ph text={it.when} /></p>
      <svelte:element this={`h${headingLevel}`} class="itr-timeline__title"><Ph text={it.title} /></svelte:element>
      {#if it.text}<p class="itr-timeline__text"><Ph text={it.text} /></p>{/if}
    </li>
  {/each}
</ol>
