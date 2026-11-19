<script>
  import Icon from './Icon.svelte';
  // Botão de tema. Mostra a ação contrária ao tema em vigor ("Tema escuro" no claro, "Tema claro" no escuro) só com CSS.
  // O comportamento (trocar data-theme na raiz e guardar a escolha) é do site, num script embutido de poucas linhas;
  // sem JavaScript o botão não serve, então o site o entrega com hidden e o script remove o atributo ao ligar.
  let { labelEscuro = 'Tema escuro', labelClaro = 'Tema claro', size = 's', variant = 'ghost', hidden = false, class: klass = '', ...rest } = $props();
</script>

<button type="button" class="itr-btn itr-btn--{variant} itr-btn--{size} itr-tt {klass}" data-tema-toggle {hidden} {...rest}>
  <span class="itr-tt__escuro"><Icon name="moon" size={20} /><span class="itr-btn__label">{labelEscuro}</span></span>
  <span class="itr-tt__claro"><Icon name="sun" size={20} /><span class="itr-btn__label">{labelClaro}</span></span>
</button>
