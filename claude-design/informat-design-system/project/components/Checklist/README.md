# Checklist

Lista de verificação da OS em dois modos: estados de teste (Passou, Falhou, Pendente, Não se aplica, sempre com ícone e palavra) ou caixas de seleção para conferir um escopo.

## Quando usar
- Testes de entrega na tela Entrega e pós-atendimento.
- Escopo a aprovar (`interactive`) na Aprovação do escopo: cada item é algo que será feito.

## O que você fornece
- `title`, `items` (`label`, `detail` em mono com o valor medido ou a versão, `status`), `interactive`, `checked` e `onChange`.

## Faça
- Escreva o teste como resultado verificável: "Inicia o sistema sem erro".
- Use `detail` para o dado técnico: "SMART · 0 setores realocados".

## Não faça
- Não marque "Passou" sem teste feito; use "Pendente".
- Não use cor sozinha: o estado tem palavra.

## Estados
Passou (`ok`), Falhou (`err`), Pendente e Não se aplica (`ink-2`); no modo interativo, marcado, desmarcado, desabilitado e foco.
