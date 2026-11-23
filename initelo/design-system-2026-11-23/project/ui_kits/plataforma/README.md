# UI kit — Plataforma Initelo (Jornada do primeiro curso)

Três telas responsivas do curso "Finanças pessoais com IA", compostas só com tokens e componentes do sistema (namespace do bundle em ../../components/bundle.js).

| Tela | Arquivo (desktop) | Arquivo (mobile) | Componente |
|---|---|---|---|
| a) Página do curso | index.html | curso-mobile.html | CoursePage.jsx |
| b) Tela de aula "Como organizar o dinheiro do mês" | aula-desktop.html | aula-mobile.html | LessonPage.jsx |
| c) Exercício "Salário no dia 5, contas ao longo do mês" | exercicio-desktop.html | exercicio-mobile.html | ExercisePage.jsx |

- Os seis HTML carregam o mesmo app (App.jsx); muda apenas window.INI_TELA. O mobile é o mesmo código em 390 px (media queries em kit.css).
- Fluxo clicável: Começar pelo módulo 1 → aula → Concluir aula → exercício → conferir os 5 itens → registrar decisão → concluído. "Recomeçar o exercício" mostra os estados vazios.
- data.js concentra todos os textos e valores (fictícios). Aluna de exemplo: Marina Souza.
- kit.css contém apenas layout de página (prefixos k-, kc-, kl-, ke-); nenhuma cor ou fonte nova.
