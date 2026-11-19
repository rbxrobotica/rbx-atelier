<script>
  let { columns = 1, class: klass = '', children, ...rest } = $props();
</script>

<div class="itr-form__row itr-form__row--{columns} {klass}" {...rest}>{@render children?.()}</div>
