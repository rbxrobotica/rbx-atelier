<script>
  import { SYMBOL, WORDMARK, WORDMARK_CURTO, BOX, LOCKUP } from './logo.js';
  // variant: horizontal (padrão) · curto · wordmark · wordmark-curto · simbolo · avatar
  // tone: cor (símbolo em marca, texto em texto; segue o tema) · mono (tudo em currentColor)
  let { variant = 'horizontal', tone = 'cor', height, title = 'Iteruno Tecnologias', decorative = false, class: klass = '', ...rest } = $props();
  const g = $derived(BOX[variant] || BOX.horizontal);
  const h = $derived(height ?? (variant === 'simbolo' || variant === 'avatar' ? 40 : 32));
  const w = $derived(Math.round((g.w / g.h) * h * 100) / 100);
</script>

{#snippet simbolo()}
  <g transform="translate({SYMBOL.offset})" class="itr-logo__simbolo" fill="none" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    <g transform="rotate({SYMBOL.rotate})">
      {#each SYMBOL.rects as r, i (i)}<rect x={r.x} y={r.y} width={r.width} height={r.height} rx={r.rx} />{/each}
      {#each SYMBOL.lines as d, i (i)}<path {d} />{/each}
    </g>
    {#each SYMBOL.arcs as d, i (i)}<path {d} />{/each}
  </g>
{/snippet}

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 {g.w} {g.h}"
  width={w}
  height={h}
  class="itr-logo itr-logo--{variant} itr-logo--{tone} {klass}"
  focusable="false"
  role={decorative ? undefined : 'img'}
  aria-label={decorative ? undefined : title}
  aria-hidden={decorative ? 'true' : undefined}
  {...rest}
>
  {#if variant === 'avatar'}
    <circle class="itr-logo__fundo" cx="50" cy="50" r="50" />
    <g transform="translate({LOCKUP.avatar.symbolX} {LOCKUP.avatar.symbolY}) scale({LOCKUP.avatar.symbolScale})">{@render simbolo()}</g>
    <g transform="translate({LOCKUP.avatar.textX} {LOCKUP.avatar.textY}) scale({LOCKUP.avatar.textScale})"><path class="itr-logo__texto" d={WORDMARK_CURTO} /></g>
  {:else if variant === 'simbolo'}
    {@render simbolo()}
  {:else if variant === 'wordmark'}
    <path class="itr-logo__texto" d={WORDMARK[0]} />
    <path class="itr-logo__texto" d={WORDMARK[1]} />
  {:else if variant === 'wordmark-curto'}
    <path class="itr-logo__texto" d={WORDMARK_CURTO} />
  {:else if variant === 'curto'}
    <g transform="scale({LOCKUP.curto.symbolScale})">{@render simbolo()}</g>
    <g transform="translate({LOCKUP.curto.textX} 0)"><path class="itr-logo__texto" d={WORDMARK_CURTO} /></g>
  {:else}
    <g transform="scale({LOCKUP.horizontal.symbolScale})">{@render simbolo()}</g>
    <g transform="translate({LOCKUP.horizontal.textX} 0)">
      <path class="itr-logo__texto" d={WORDMARK[0]} />
      <path class="itr-logo__texto" d={WORDMARK[1]} />
    </g>
  {/if}
</svg>
