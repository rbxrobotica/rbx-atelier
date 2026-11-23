<script>
  import Ph from './Ph.svelte';
  // items: [{ title, text }] — passos numerados de "como funciona", na ordem. columns: auto · 2 · 3 · 4 · 5
  // (1 coluna no celular, 2 a partir de 768 px, o número pedido a partir de 1200 px).
  let { items = [], columns = 'auto', headingLevel = 3, class: klass = '', ...rest } = $props();
</script>

<ol class="itr-steps itr-steps--{columns} {klass}" {...rest}>
  {#each items as it, i (i)}
    <li class="itr-steps__item">
      <span class="itr-steps__num" aria-hidden="true">{i + 1}</span>
      <div class="itr-steps__body">
        <svelte:element this={`h${headingLevel}`} class="itr-steps__title">{it.title}</svelte:element>
        {#if it.text}<p class="itr-steps__text"><Ph text={it.text} /></p>{/if}
      </div>
    </li>
  {/each}
</ol>
