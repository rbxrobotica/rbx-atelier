# StatusBar

Barra de estado da conexão no topo da coluna principal: diz em palavras em que estado o cliente está e desde quando. Quatro estados: conectando (`ink-3`, ponto vazado), sincronizado (`ok`), recuperando o que perdeu (`warn`, com barra de progresso) e offline com cache (`err`, com o botão Tentar reconectar).

- O consumidor fornece: o estado, o horário em `data` e, quando houver, a contagem de edições recuperadas e a ação.
- Nunca cite o protocolo interno. Cor nunca é o único sinal.
- Não use para erro de conteúdo; esse vai no envelope ou no aviso.
