# ThemeToggle

Botão que alterna entre tema claro e escuro. Mostra a ação contrária ao tema em vigor ("Tema escuro" no claro, "Tema claro" no escuro) só com CSS.

## Quando usar
- No rodapé do site (`Footer` → `children`), uma vez por página.
- O site liga o comportamento num script embutido de poucas linhas: ao clicar, troca `data-theme` em `<html>` (`claro` ou `escuro`) e guarda a escolha em `localStorage`; ao carregar, aplica a escolha guardada antes da primeira pintura.
- Sem JavaScript o botão não faz nada: o site o entrega com `hidden` e o script remove o atributo.

## Quando não usar
- Dentro de um trecho com tema próprio (`.itr-theme`): o botão fala da página inteira.
- Como único jeito de ver o outro tema: sem escolha guardada o site segue `prefers-color-scheme`.

## Props
| Prop | Tipo | Padrão | O que faz |
| --- | --- | --- | --- |
| `labelEscuro / labelClaro` | `string` | `'Tema escuro' / 'Tema claro'` | Rótulos (a ação, não o estado) |
| `size` | `'s' | 'm' | 'l'` | `'s'` | Tamanho do botão |
| `variant` | `'ghost' | 'secondary'` | `'ghost'` | Variante do botão |
| `hidden` | `boolean` | `false` | Entregue oculto até o script ligar (site) |

## Em HTML puro (sem Svelte)
```html
<button type="button" class="itr-btn itr-btn--ghost itr-btn--s itr-tt" data-tema-toggle hidden>
  <span class="itr-tt__escuro"><svg class="itr-icon" …>…</svg><span class="itr-btn__label">Tema escuro</span></span>
  <span class="itr-tt__claro"><svg class="itr-icon" …>…</svg><span class="itr-btn__label">Tema claro</span></span>
</button>
<script>
  (function () {
    var d = document.documentElement;
    try { var t = localStorage.getItem('tema'); if (t === 'claro' || t === 'escuro') d.setAttribute('data-theme', t); } catch (e) {}
    document.addEventListener('click', function (e) {
      var b = e.target.closest && e.target.closest('[data-tema-toggle]'); if (!b) return;
      var escuro = d.getAttribute('data-theme') === 'escuro' || (!d.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
      var n = escuro ? 'claro' : 'escuro'; d.setAttribute('data-theme', n);
      try { localStorage.setItem('tema', n); } catch (e) {}
    });
    document.querySelectorAll('[data-tema-toggle]').forEach(function (b) { b.hidden = false; });
  })();
</script>
```

## Acessibilidade
- Rótulo visível e com verbo (a ação): leitor de tela lê "Tema escuro" ou "Tema claro"; o rótulo oculto está em `display: none`, não é lido.
- É um `<button type="button">`: foco, Enter e espaço funcionam.
- A troca não anima; `prefers-reduced-motion` não é afetado.

## Tokens
Os do `Button` (`--texto`, `--superficie-2` em hover, `--foco`).
