<script module>
  import { ICONS, ICON_NAMES } from './icons.js';
  export const names = ICON_NAMES;
</script>

<script>
  let { name, size = 20, label, strokeWidth = 1.75, class: klass = '', ...rest } = $props();
  const paths = $derived(ICONS[name] || []);
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width={size}
  height={size}
  fill="none"
  stroke="currentColor"
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  focusable="false"
  class="itr-icon {klass}"
  role={label ? 'img' : undefined}
  aria-label={label || undefined}
  aria-hidden={label ? undefined : 'true'}
  {...rest}
>
  {#each paths as d, i (i)}<path {d} />{/each}
</svg>
