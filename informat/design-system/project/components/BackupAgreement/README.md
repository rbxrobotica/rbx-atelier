# BackupAgreement

Registro do combinado sobre backup e dados antes de qualquer intervenção: quatro opções em rádio, campos extras quando a opção pede, e a linha "Combinado em [DATA] com [NOME]".

## Quando usar
- Na Aprovação do escopo de qualquer serviço que toque no disco (formatação, troca de disco, reinstalação). Como leitura (`readOnly`) na Entrega.

## O que você fornece
- `value` e `onChange` (`completo`, `pastas`, `cliente`, `sem-backup`), `folders` e `onFoldersChange` para a lista de pastas, `acknowledged` e `onAcknowledge` para a ciência.
- `agreedAt` e `agreedWith`: data e nome reais quando registrados; até lá "[DATA]" e "[NOME]".

## Faça
- Exija a caixa de ciência quando a escolha for "Sem backup"; o botão "Aprovar escopo" só habilita com ela marcada.
- Mostre o resumo do combinado de novo na Entrega.

## Não faça
- Não pré-selecione uma opção: o cliente precisa escolher.
- Não prometa recuperação de dados.

## Estados
Nada escolhido (resumo neutro), escolhido (cartão `placa-soft`), "Sem backup" escolhido (cartão `warn-soft` e caixa de ciência), somente leitura.
