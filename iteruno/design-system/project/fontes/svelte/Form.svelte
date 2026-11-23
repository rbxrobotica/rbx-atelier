<script>
  import Icon from './Icon.svelte';
  // errors: [{ id, message }] — quando há erros, o resumo aparece, recebe o foco e cada item leva ao campo.
  let { errors = [], summaryTitle = 'Corrija os campos abaixo para enviar', novalidate = true, class: klass = '', children, ...rest } = $props();
  const uid = $props.id();
  let summary = $state(null);
  $effect(() => {
    if (errors.length && summary) summary.focus();
  });
</script>

<form class="itr-form {klass}" {novalidate} {...rest}>
  {#if errors.length}
    <div class="itr-form__summary" role="alert" tabindex="-1" bind:this={summary} aria-labelledby="itr-form-{uid}-t">
      <Icon name="alert-triangle" size={20} class="itr-form__summary-icon" />
      <div>
        <p id="itr-form-{uid}-t" class="itr-form__summary-title">{summaryTitle}</p>
        <ul>{#each errors as e (e.id)}<li><a href="#{e.id}">{e.message}</a></li>{/each}</ul>
      </div>
    </div>
  {/if}
  {@render children?.()}
</form>
