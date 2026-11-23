# ChoiceCard

Grupo de cartões de escolha única (rádios reais dentro de um `<fieldset>` com `<legend>`) para decisões que precisam de explicação, como presencial ou remoto.

## Quando usar
- De duas a quatro opções em que cada uma precisa de uma frase: modo de atendimento, frente de serviço, faixa de urgência.

## O que você fornece
- `legend` com a pergunta: "Como prefere ser atendido?".
- `options`: `title`, `description`, `icon`, `meta` (linha técnica em mono, ex.: "[CIDADE] e região") e `tag` para marcar hipóteses ("Hipótese").
- `value` e `onChange`, ou `defaultValue`.

## Faça
- Marque com `tag: "Hipótese"` toda opção cujo escopo ainda não foi confirmado (o atendimento remoto, por exemplo).
- Diga na descrição quando a opção não serve: "Remoto não serve para reparo de hardware."

## Não faça
- Não use para mais de quatro opções; não use para escolhas múltiplas.
- Não esconda o rádio: ele mostra o estado sem depender da cor.

## Estados
Repouso (borda `field`), hover, selecionado (borda de 2 px `placa` e fundo `placa-soft`), foco (anel no cartão), desabilitado (`sunken`, texto `ink-3`), erro do grupo (mensagem abaixo).
