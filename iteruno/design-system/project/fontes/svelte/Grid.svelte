<script>
  // columns: auto (cartões de 240 px, quantos couberem) · 2 · 3 · 4 (1 coluna no celular, 2 a partir de 768, 3 ou 4 a partir de 1200)
  let { columns = 'auto', class: klass = '', children, ...rest } = $props();
</script>

<div class="itr-grid itr-grid--{columns} {klass}" {...rest}>{@render children?.()}</div>
