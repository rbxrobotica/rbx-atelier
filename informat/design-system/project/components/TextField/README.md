# TextField

Campo de texto com rótulo visível, orientação acima do campo, mensagem de erro e contador opcional; vira `<textarea>` com `multiline`.

## Quando usar
- Marca e modelo, número de série, descrição do problema, lista de pastas para backup.
- Para escolher entre opções conhecidas use Select ou ChoiceCard, não texto livre.

## O que você fornece
- `label` sempre (nunca só placeholder). `hint` para orientar o que escrever; ele fica acima do campo e é lido pelo leitor de tela.
- `optional` nos campos opcionais: aparece "(opcional)". Campos obrigatórios não levam asterisco.
- `multiline` com `maxLength` mostra "120 de 1000". `mono` para série e modelo.
- `error` com a correção: "Confira a etiqueta embaixo do notebook: o número tem letras e números, sem espaços."

## Faça
- Escreva o `hint` como exemplo concreto: "Ex.: liga, mas a tela fica preta depois do logotipo."
- Valide ao sair do campo ou ao enviar, não a cada tecla.

## Não faça
- Não peça dados que a conta RBX já tem (nome, e-mail, telefone): o contato vem da conta.
- Não use placeholder como rótulo nem como única dica.

## Estados
Repouso (borda `field`), hover (`ink-2`), foco (anel `focus`), erro (borda de 2 px em `err`, ícone e mensagem), desabilitado e somente leitura (`sunken`).
