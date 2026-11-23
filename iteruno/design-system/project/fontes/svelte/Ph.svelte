<script>
  // Marcador de informação pendente: cada trecho [[CONFIRMAR …]] do texto aparece destacado e nunca passa despercebido;
  // o resto do texto fica normal. Um texto sem marcador é devolvido como está.
  let { text = '', class: klass = '' } = $props();
  const partes = $derived(String(text ?? '').split(/(\[\[[^\]]*\]\])/g).filter((s) => s !== ''));
</script>

{#each partes as p, i (i)}{#if p.startsWith('[[')}<span class="itr-ph {klass}">{p}</span>{:else}{p}{/if}{/each}
