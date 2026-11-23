<script>
  let { note, class: klass = '', children, ...rest } = $props();
</script>

<div class="itr-form__actions {klass}" {...rest}>{@render children?.()}</div>
{#if note}<p class="itr-form__note">{note}</p>{/if}
