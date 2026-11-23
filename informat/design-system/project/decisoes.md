# Fontes, decisões e pendências

## Fontes consultadas

| Fonte | O que diz | Situação |
| --- | --- | --- |
| Repositório `github.com/ldamasio/informat` | Um único commit (31/10/2021) com o workflow inicial do GitHub (`.github/workflows/blank.yml`). Sem README, sem código, sem identidade visual. Nada mais sobre o Informat no GitHub do proprietário. | Verificado em 09/10/2026 pelo designer líder |
| Descrição do proprietário (26/09/2026) | "Formatação de HD, consultoria em Linux, reparo de notebooks e computadores pessoais." | Verificado (palavras do proprietário) |
| ADR-0011, rbx-governance (Accepted, 01/06/2026) | Cada produto pode ter domínio e app próprios, mas não cria login, cobrança, integrações de provedor, comunicação, console de suporte nem registro de governança: usa RBX Identity, RBX Commerce e RBX Comms. | Lido no repositório rbx-governance, como referência de plataforma |
| ADR-0014, rbx-governance (Accepted, 05/06/2026, emenda de 05/09/2026) | Duas superfícies por produto: domínio público da marca e entrada autenticada canônica no Hub `app.merovelis.com/<produto>`. A emenda fixa o emissor de identidade em `auth.merovelis.com`. | Lido no repositório rbx-governance, como referência de plataforma |
| Atkinson Hyperlegible Next e Mono (Google Fonts) | Famílias com SIL Open Font License 1.1; arquivos baixados do Google Fonts para gerar os contornos do logotipo. | Verificado em 09/10/2026 |
| Registro da marca "Informat", domínios, CNPJ, clientes, histórico | Nenhuma informação. | Não verificado |

**O que existia no legado:** nenhuma referência histórica verificável. Não há logotipo, cores, site, clientes, preços ou textos anteriores a preservar; este sistema parte do zero e não inventa história.

## Direções exploradas

### A · "Ordem de Serviço" (escolhida)
A ordem de serviço é o artefato central da marca: OS numerada em mono (`OS-0427`), carimbos de status, checklists, linhas de especificação. Paleta tirada de uma placa de circuito: `placa` (máscara de solda verde), `cobre` (trilhas e vias), `serigrafia` (marcações brancas). Padrão de trilhas ortogonais com dobras de 45 graus e vias, usado com parcimônia (capa, estados vazios, divisórias), nunca atrás de texto. Tipografia Atkinson Hyperlegible Next com a Mono para tudo que é registro.

**Por que venceu:** materializa a proposta de valor. Diagnóstico, aprovação de escopo e combinado de backup viram objetos visíveis (a folha da OS, o carimbo, a linha do tempo), não slogans. O verde de placa e o cobre falam de eletrônica sem clichê de "tecnologia azul", e o registro técnico sustenta a credibilidade da consultoria Linux.

### B · "Oficina do bairro" (explorada, não escolhida)
Laranja quente, ilustrações arredondadas de ferramentas, traço com cara de feito à mão, tom de vizinho prestativo.

**Por que não:** enfraquece a credibilidade da consultoria Linux e a promessa de cuidado com dados; lê como assistência técnica genérica, igual a muitas outras, e não tem onde pendurar o processo (diagnóstico, aprovação, registro).

### Decisões de desenho registradas
- **Logotipo:** testadas a via só (A) e a via com trilha curta a 45 graus (B), no wordmark e no símbolo. A ficou mais limpa em tamanho pequeno; B brigava com o f e, no símbolo, lia como uma perna chutando. Escolhida A; a trilha mora no padrão.
- **Símbolo:** o i do símbolo reproduz a construção do i da Atkinson (bandeira à esquerda), para não parecer o ícone genérico de "informação".
- **Etapa atual da linha do tempo em cobre:** a via de cobre marca "você está aqui"; concluída é `placa` com check, a seguir é anel vazio. A palavra ("Etapa atual") sempre acompanha.
- **Recusar como ação `ghost`, não `danger`:** recusar o orçamento é uma decisão legítima do cliente; o vermelho fica para a confirmação dentro do Dialog.

## Ajustes de tokens e de contraste

Todos os valores âncora do briefing passaram nos dois temas (tabela completa no Guia de implementação); nenhuma luminosidade precisou ser alterada. As mudanças foram acréscimos:

1. **`mascara` (novo, #1B5E3B nos dois temas):** no escuro, `placa` vira #74D19B e não sustenta `serigrafia` (texto claro sobre verde claro). A faixa de marca, o quadro do símbolo e o ícone de app usam `mascara`, que não muda com o tema. `serigrafia` sobre `mascara`: 7.37:1 (claro) e 6.78:1 (escuro).
2. **`cobre-via` (novo, #E09A5F nos dois temas):** `cobre` claro sobre a placa dá 1.78:1; a via do símbolo e as trilhas sobre `mascara` precisam de 3:1. Com #E09A5F: 3.30:1.
3. **`serigrafia` escuro (#E9F2EC):** o briefing não trazia valor escuro; definido para texto claro sobre `mascara`.
4. **`focus` como alias de `placa`** e **`scrim`** (véu do Dialog) acrescentados.
5. **Regras de uso:** `ink-3` nunca abaixo de 14 px; rótulos mono de 12 px usam `ink-2` (8.53:1 em `base`).
6. **Famílias extras:** `size` (alturas de controle, ícones, bordas, `card-min`, `dialog-max`), `breakpoint`, `duration`, `zIndex` e `typeScale` (os números da escala como variáveis para `bundle.css`).

## Premissas

- Todo atendimento é registrado numa OS numerada no formato OS-0000 e passa pelas cinco etapas: Solicitação, Diagnóstico, Orçamento aprovado, Execução, Entrega e pós-atendimento.
- O cliente usa uma conta RBX para solicitar e acompanhar; o Informat não tem login próprio (ADR-0011, ADR-0014).
- O pagamento acontece depois da aprovação do escopo e é processado pela RBX Commerce.
- Mensagens de etapa saem pela central RBX (RBX Comms).
- **Hipótese:** o atendimento remoto serve para Linux e configuração de programas, não para reparo de hardware.
- A OS-0427, o notebook que desliga sozinho, o SSD de 480 GB e os resultados de teste nas telas são exemplos marcados como "Exemplo".

## Pendências que exigem decisão do proprietário

1. Domínio público da marca (`[dominio-informat]`) e verificação de disponibilidade.
2. Cidade e raio do atendimento presencial (`[CIDADE]`).
3. Onde acontece o presencial: no endereço do cliente, numa bancada própria (`[ENDEREÇO]`), ou ambos.
4. Se haverá coleta e entrega do equipamento, e em que condições.
5. Escopo do atendimento remoto (Hipótese): quais serviços entram, com que ferramenta de acesso e com que autorização.
6. Preços de diagnóstico, formatação, mão de obra e backup (`[PREÇO]`, `[VALOR]`), e se o diagnóstico é cobrado quando o cliente recusa.
7. Prazos de diagnóstico e de execução (`[PRAZO]`) e a validade do orçamento.
8. Garantia: prazo e cobertura (`[GARANTIA]`).
9. Horários de atendimento (`[HORÁRIO]`).
10. Canal de contato público (WhatsApp, e-mail, telefone: `[TELEFONE]`, `[E-MAIL]`) e o canal que a RBX Comms usará para as mensagens da OS (`[CANAL]`).
11. CNPJ ou MEI e razão social para o rodapé e os documentos (`[CNPJ]`).
12. Política de peças: quem compra, procedência, uso de peças recondicionadas, devolução das peças trocadas.
13. Política de backup e dados: por quanto tempo a Informat guarda a cópia, quando apaga, e o termo de tratamento de dados (LGPD) que o cliente aceita.
14. Numeração da OS: sequência inicial e se reinicia por ano.
15. Avaliação pós-atendimento: se haverá, e se as avaliações aparecem no site (só com autorização).
16. Uso de fotos reais de equipamentos de clientes na comunicação.
17. Registro da marca "Informat" (não verificado) antes de produzir material impresso.
18. Modelo de cobrança na RBX Commerce: pagamento por OS, sinal, ou outro (Hipótese a validar).
19. Limites de envio de fotos (quantidade, tamanho, formatos aceitos).
