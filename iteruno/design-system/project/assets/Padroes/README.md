# Padrão de sinal

Arcos concêntricos de um quarto de círculo a partir do canto inferior esquerdo, como os arcos do símbolo: traço de 1,25 % da largura da peça, raio inicial 20 % e passo 15 %. `iteruno-sinal.svg` em `marca` sobre fundo claro; `iteruno-sinal-marca.svg` em `marca-forte` para fundos em `marca`.

No código, o componente `Sinal` desenha o mesmo padrão com `currentColor` (props `arcs`, `step`, `width`, `opacity`); `Hero` e `ContactCTA` já o usam.

**Use** em capas, cartão, estados vazios e fundo de faixa de marca. **Nunca** atrás de texto corrido, nunca com mais de 8 arcos, nunca partindo de outro canto.
