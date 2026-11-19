<script>
  import Logo from './Logo.svelte';
  import Icon from './Icon.svelte';
  import Button from './Button.svelte';
  // links: [{ label, href, current? }]; cta: { label, href, icon? }; current: href da página atual.
  // No celular o menu é um <details>: abre e fecha sem JavaScript.
  let { links = [], cta, logoHref = '/', current, class: klass = '', ...rest } = $props();
  const uid = $props.id();
  const isCurrent = (l) => l.current || (current !== undefined && l.href === current);
</script>

<header class="itr-nav {klass}" {...rest}>
  <div class="itr-nav__bar">
    <a href={logoHref} class="itr-nav__brand" aria-label="Iteruno Tecnologias, página inicial"><Logo variant="horizontal" height={32} decorative /></a>
    <nav class="itr-nav__links" aria-label="Principal">
      <ul class="itr-nav__list">
        {#each links as l (l.href)}<li><a href={l.href} class="itr-nav__link" aria-current={isCurrent(l) ? 'page' : undefined}>{l.label}</a></li>{/each}
      </ul>
    </nav>
    {#if cta}<Button variant="primary" href={cta.href} icon={cta.icon} label={cta.label} class="itr-nav__cta" />{/if}
    <details class="itr-nav__menu" id="itr-nav-{uid}">
      <summary class="itr-nav__toggle">
        <Icon name="menu" size={24} class="itr-nav__ico-menu" /><Icon name="x" size={24} class="itr-nav__ico-x" />
        <span class="itr-visually-hidden">Menu</span>
      </summary>
      <div class="itr-nav__panel">
        <nav aria-label="Principal no celular">
          <ul class="itr-nav__plist">
            {#each links as l (l.href)}<li><a href={l.href} class="itr-nav__link" aria-current={isCurrent(l) ? 'page' : undefined}>{l.label}</a></li>{/each}
          </ul>
        </nav>
        {#if cta}<Button variant="primary" size="l" block href={cta.href} icon={cta.icon} label={cta.label} />{/if}
      </div>
    </details>
  </div>
</header>
