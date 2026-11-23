<script>
  import Icon from './Icon.svelte';
  let {
    id, label, hint, error, optional = false, multiline = false, rows = 5, mono = false,
    type = 'text', value = $bindable(''), name, placeholder, maxlength, required = false, disabled = false,
    class: klass = '', ...rest
  } = $props();
  const uid = $props.id();
  const fid = $derived(id || `itr-tf-${uid}`);
  const counter = $derived(multiline && maxlength);
  const describedBy = $derived([hint && `${fid}-hint`, error && `${fid}-err`, counter && `${fid}-cnt`].filter(Boolean).join(' ') || undefined);
  const cls = $derived(['itr-input', multiline && 'itr-input--area', mono && 'itr-input--mono', error && 'is-invalid'].filter(Boolean).join(' '));
</script>

<div class="itr-field {disabled ? 'is-disabled' : ''} {klass}">
  <label class="itr-field__label" for={fid}>{label}{#if optional}<span class="itr-field__opt">(opcional)</span>{/if}</label>
  {#if hint}<p id="{fid}-hint" class="itr-field__hint">{hint}</p>{/if}
  {#if multiline}
    <textarea id={fid} {name} {rows} {placeholder} {maxlength} {required} {disabled} bind:value class={cls} aria-invalid={error ? 'true' : undefined} aria-describedby={describedBy} {...rest}></textarea>
  {:else}
    <input id={fid} {type} {name} {placeholder} {maxlength} {required} {disabled} {value} oninput={(e) => (value = e.currentTarget.value)} class={cls} aria-invalid={error ? 'true' : undefined} aria-describedby={describedBy} {...rest} />
  {/if}
  {#if error || counter}
    <div class="itr-field__foot">
      {#if error}<p id="{fid}-err" class="itr-field__error"><Icon name="alert-triangle" size={16} /><span>{error}</span></p>{/if}
      {#if counter}<p id="{fid}-cnt" class="itr-field__count">{String(value || '').length} de {maxlength}</p>{/if}
    </div>
  {/if}
</div>
