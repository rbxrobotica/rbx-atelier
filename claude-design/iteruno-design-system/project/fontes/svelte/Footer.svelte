<script>
  import Logo from './Logo.svelte';
  import Icon from './Icon.svelte';
  import Ph from './Ph.svelte';
  // columns: [{ title, links: [{ label, href, icon? }] }]; contact: { whatsapp, whatsappHref, email, address, hours }
  // WhatsApp e e-mail só viram link quando o dado existe: sem whatsappHref, ou com e-mail em [[CONFIRMAR]], aparecem como texto.
  // legal: texto depois do ano (CNPJ, cidade) — pode trazer [[CONFIRMAR]]; sign: linha de assinatura opcional.
  // children: conteúdo extra na linha de base (o botão de tema do site, por exemplo).
  let { promise, columns = [], contact, legal, year = new Date().getFullYear(), sign, class: klass = '', children, ...rest } = $props();
  const pendente = (s) => /\[\[/.test(String(s || ''));
</script>

<footer class="itr-footer {klass}" {...rest}>
  <div class="itr-footer__grid">
    <div class="itr-footer__brand">
      <Logo variant="horizontal" height={28} />
      {#if promise}<p class="itr-footer__promise">{promise}</p>{/if}
    </div>
    {#each columns as col (col.title)}
      <nav class="itr-footer__col" aria-label={col.title}>
        <p class="itr-label itr-footer__title">{col.title}</p>
        <ul>{#each col.links as l (l.label)}<li><a href={l.href} rel={l.external ? 'noopener' : undefined} target={l.external ? '_blank' : undefined}>{#if l.icon}<Icon name={l.icon} size={16} />{/if}<span>{l.label}</span></a></li>{/each}</ul>
      </nav>
    {/each}
    {#if contact}
      <div class="itr-footer__col">
        <p class="itr-label itr-footer__title">Contato</p>
        <ul>
          {#if contact.whatsapp}
            <li>{#if contact.whatsappHref}<a href={contact.whatsappHref}><Icon name="whatsapp" size={16} /><span><Ph text={contact.whatsapp} /></span></a>{:else}<span class="itr-footer__text"><Icon name="whatsapp" size={16} /><span><Ph text={contact.whatsapp} /></span></span>{/if}</li>
          {/if}
          {#if contact.email}
            <li>{#if pendente(contact.email)}<span class="itr-footer__text"><Icon name="mail" size={16} /><span><Ph text={contact.email} /></span></span>{:else}<a href="mailto:{contact.email}"><Icon name="mail" size={16} /><span>{contact.email}</span></a>{/if}</li>
          {/if}
          {#if contact.address}<li><span class="itr-footer__text"><Icon name="map-pin" size={16} /><span><Ph text={contact.address} /></span></span></li>{/if}
          {#if contact.hours}<li><span class="itr-footer__text"><Icon name="clock" size={16} /><span><Ph text={contact.hours} /></span></span></li>{/if}
        </ul>
      </div>
    {/if}
  </div>
  <div class="itr-footer__base">
    <div class="itr-footer__lines">
      <p class="itr-footer__legal">© {year} Iteruno Tecnologias{#if legal}{' · '}<Ph text={legal} />{/if}</p>
      {#if sign}<p class="itr-footer__sign">{sign}</p>{/if}
    </div>
    {@render children?.()}
  </div>
</footer>
