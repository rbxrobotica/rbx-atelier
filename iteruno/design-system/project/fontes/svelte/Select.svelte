<script>
  import Icon from './Icon.svelte';
  let {
    id, label, hint, error, optional = false, options = [], placeholder,
    value = $bindable(''), name, required = false, disabled = false,
    class: klass = '', children, ...rest
  } = $props();
  const uid = $props.id();
  const fid = $derived(id || `itr-sel-${uid}`);
  const describedBy = $derived([hint && `${fid}-hint`, error && `${fid}-err`].filter(Boolean).join(' ') || undefined);
</script>

<div class="itr-field {disabled ? 'is-disabled' : ''} {klass}">
  <label class="itr-field__label" for={fid}>{label}{#if optional}<span class="itr-field__opt">(opcional)</span>{/if}</label>
  {#if hint}<p id="{fid}-hint" class="itr-field__hint">{hint}</p>{/if}
  <div class="itr-select">
    <select id={fid} {name} {required} {disabled} bind:value class="itr-input itr-select__control {error ? 'is-invalid' : ''}" aria-invalid={error ? 'true' : undefined} aria-describedby={describedBy} {...rest}>
      {#if placeholder}<option value="" disabled>{placeholder}</option>{/if}
      {#each options as o (o.value)}<option value={o.value} disabled={o.disabled}>{o.label}</option>{/each}
      {@render children?.()}
    </select>
    <Icon name="chevron-down" size={20} class="itr-select__chevron" />
  </div>
  {#if error}
    <div class="itr-field__foot"><p id="{fid}-err" class="itr-field__error"><Icon name="alert-triangle" size={16} /><span>{error}</span></p></div>
  {/if}
</div>
