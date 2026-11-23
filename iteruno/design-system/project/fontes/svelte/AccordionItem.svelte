<script>
  import { getContext } from 'svelte';
  import Icon from './Icon.svelte';
  let { id, title, open = false, name, class: klass = '', children, ...rest } = $props();
  const ctx = getContext('itr-acc');
  const group = $derived(name ?? ctx);
</script>

<details class="itr-acc__item {klass}" {id} {open} name={group} {...rest}>
  <summary class="itr-acc__summary"><span>{title}</span><Icon name="chevron-down" size={20} class="itr-acc__chevron" /></summary>
  <div class="itr-acc__content">{@render children?.()}</div>
</details>
