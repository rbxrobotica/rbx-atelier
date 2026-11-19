<script>
  import Button from './Button.svelte';
  import Logo from './Logo.svelte';
  import Sinal from './Sinal.svelte';
  import Ph from './Ph.svelte';
  // whatsapp: número com DDI e DDD (só dígitos contam) → https://wa.me/55119…?text=… ; email opcional; meta: horário, prazo de resposta.
  let {
    title = 'Vamos resolver isso?', text, whatsapp, message = 'Olá! Vim pelo site da Iteruno e preciso de ajuda com ', email,
    buttonLabel = 'Chamar no WhatsApp', emailLabel = 'Enviar e-mail', meta, card = false, pattern = true, symbol = true, headingLevel = 2, href,
    class: klass = '', ...rest
  } = $props();
  const digits = $derived(String(whatsapp || '').replace(/\D/g, ''));
  // href: destino alternativo do botão (por exemplo /contato/) enquanto o número não existe; sem ele e sem número, fica '#'.
  const waHref = $derived(href || (digits ? `https://wa.me/${digits}${message ? '?text=' + encodeURIComponent(message) : ''}` : '#'));
</script>

<section class="itr-cta {card ? 'itr-cta--card' : ''} {klass}" {...rest}>
  {#if pattern}<Sinal class="itr-cta__sinal" arcs={5} />{/if}
  <div class="itr-cta__inner">
    <div class="itr-cta__body">
      {#if symbol}<Logo variant="simbolo" height={48} decorative />{/if}
      <svelte:element this={`h${headingLevel}`} class="itr-cta__title">{title}</svelte:element>
      {#if text}<p class="itr-cta__text">{text}</p>{/if}
      {#if meta}<p class="itr-cta__meta"><Ph text={meta} /></p>{/if}
    </div>
    <div class="itr-cta__actions">
      <Button variant="inverse" size="l" href={waHref} icon="whatsapp" label={buttonLabel} />
      {#if email}<Button variant="inverse-ghost" size="l" href="mailto:{email}" icon="mail" label={emailLabel} />{/if}
    </div>
  </div>
</section>
