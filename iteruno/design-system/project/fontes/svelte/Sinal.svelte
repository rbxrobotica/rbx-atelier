<script>
  // Padrão de sinal: arcos concêntricos a partir do canto inferior direito, como as ondas do símbolo.
  let { arcs = 6, step = 60, width = 14, opacity = 0.22, class: klass = '', ...rest } = $props();
  const size = 400;
  const radii = $derived(Array.from({ length: arcs }, (_, i) => (i + 1) * step));
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" class="itr-sinal {klass}" aria-hidden="true" focusable="false" {...rest}>
  {#each radii as r (r)}
    <path class="itr-sinal__arc" d="M{size - r} {size} A{r} {r} 0 0 1 {size} {size - r}" stroke-width={width} stroke-opacity={opacity} />
  {/each}
</svg>
