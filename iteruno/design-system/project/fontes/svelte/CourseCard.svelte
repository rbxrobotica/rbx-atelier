<script>
  import Button from './Button.svelte';
  import Icon from './Icon.svelte';
  import Badge from './Badge.svelte';
  import Ph from './Ph.svelte';
  // format: Presencial · Online · Híbrido. next: próxima turma (pode ser [[CONFIRMAR]]). seats: "6 vagas" com seatsTone.
  let { title, description, format, duration, next, seats, seatsTone = 'marca', action, icon = 'book-open', badge, headingLevel = 3, class: klass = '', ...rest } = $props();
</script>

<article class="itr-course {klass}" {...rest}>
  <div class="itr-course__top">
    <span class="itr-course__pad"><Icon name={icon} size={24} /></span>
    {#if badge}<Badge tone={badge.tone || 'neutro'} label={badge.label} />{/if}
  </div>
  <svelte:element this={`h${headingLevel}`} class="itr-course__title">{title}</svelte:element>
  {#if description}<p class="itr-course__desc">{description}</p>{/if}
  {#if format || duration || next}
    <dl class="itr-course__meta">
      {#if format}<dt>Formato</dt><dd><Ph text={format} /></dd>{/if}
      {#if duration}<dt>Duração</dt><dd><Ph text={duration} /></dd>{/if}
      {#if next}<dt>Próxima turma</dt><dd><Ph text={next} /></dd>{/if}
    </dl>
  {/if}
  {#if seats || action}
    <div class="itr-course__foot">
      {#if seats}<Badge tone={seatsTone} label={seats} icon="user" />{/if}
      {#if action}<Button variant="primary" size="s" href={action.href} icon={action.icon} label={action.label} />{/if}
    </div>
  {/if}
</article>
