<script>
  import { setContext, untrack } from 'svelte';
  import AccordionItem from './AccordionItem.svelte';
  import Ph from './Ph.svelte';
  // items: [{ id?, title, content | html, open? }] ou filhos <AccordionItem>. exclusive: um aberto por vez (atributo name do <details>).
  let { items = [], exclusive = false, name, class: klass = '', children, ...rest } = $props();
  const uid = $props.id();
  // o grupo é fixado na criação: exclusive e name não mudam depois de montado
  const group = untrack(() => (exclusive ? name || `itr-acc-${uid}` : undefined));
  setContext('itr-acc', group);
</script>

<div class="itr-acc {klass}" {...rest}>
  {#each items as it, i (it.id || i)}
    <AccordionItem id={it.id} title={it.title} open={it.open} name={group}>
      {#if it.html}{@html it.html}{:else}<p><Ph text={it.content} /></p>{/if}
    </AccordionItem>
  {/each}
  {@render children?.()}
</div>
