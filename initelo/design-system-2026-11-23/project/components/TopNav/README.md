Barra superior da plataforma — uma por tela, fixa no topo do documento (não flutua sobre o conteúdo).

    <TopNav links={[{label:'Cursos',current:true},{label:'Minhas aulas'},{label:'Ajuda'}]} user={{name:'Marina Souza',initials:'MS'}} />

O link atual recebe aria-current="page" e barra inferior de 3 px. Abaixo de 768 px (ou com compact) os links somem e aparece o botão "Abrir menu".
