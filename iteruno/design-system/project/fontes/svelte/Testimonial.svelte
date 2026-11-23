<script>
  // Depoimento: só com autorização por escrito do cliente. photo opcional; sem foto, iniciais.
  import Ph from './Ph.svelte';
  let { quote, name, role, photo, card = true, class: klass = '', ...rest } = $props();
  const initials = $derived(String(name || '').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join(''));
</script>

<figure class="itr-testimonial {card ? 'itr-testimonial--card' : ''} {klass}" {...rest}>
  <span class="itr-testimonial__mark" aria-hidden="true">“</span>
  <blockquote class="itr-testimonial__text"><p><Ph text={quote} /></p></blockquote>
  <figcaption class="itr-testimonial__author">
    <span class="itr-testimonial__avatar" aria-hidden="true">{#if photo}<img src={photo} alt="" />{:else}{initials}{/if}</span>
    <span><span class="itr-testimonial__name"><Ph text={name} /></span>{#if role}<br /><span class="itr-testimonial__role"><Ph text={role} /></span>{/if}</span>
  </figcaption>
</figure>
