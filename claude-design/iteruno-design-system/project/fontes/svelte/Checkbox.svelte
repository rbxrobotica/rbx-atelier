<script>
  import Icon from './Icon.svelte';
  let { id, label, description, error, checked = $bindable(false), name, value, required = false, disabled = false, class: klass = '', ...rest } = $props();
  const uid = $props.id();
  const fid = $derived(id || `itr-cb-${uid}`);
</script>

<div class="itr-field {disabled ? 'is-disabled' : ''} {klass}">
  <label class="itr-check" for={fid}>
    <input type="checkbox" id={fid} class="itr-checkbox {error ? 'is-invalid' : ''}" bind:checked {name} {value} {required} {disabled} aria-invalid={error ? 'true' : undefined} aria-describedby={error ? `${fid}-err` : undefined} {...rest} />
    <span class="itr-check__body">
      <span class="itr-check__label">{label}</span>
      {#if description}<span class="itr-check__desc">{description}</span>{/if}
    </span>
  </label>
  {#if error}<p id="{fid}-err" class="itr-field__error"><Icon name="alert-triangle" size={16} /><span>{error}</span></p>{/if}
</div>
