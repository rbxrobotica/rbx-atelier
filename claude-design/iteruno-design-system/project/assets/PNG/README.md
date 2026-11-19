# Exportações PNG

Rasterizações dos logotipos e do padrão, para onde SVG não serve (redes sociais, e-mail, ícones de plataforma).

| Arquivo | Uso |
| --- | --- |
| `iteruno-favicon-16.png`, `-32.png`, `-48.png` | favicon.ico e `<link rel="icon">` |
| `iteruno-app-icon-180.png` | `apple-touch-icon` |
| `iteruno-app-icon-512.png` | manifest da PWA, ícone de app |
| `iteruno-horizontal-48.png`, `-192.png` | assinatura de e-mail, cabeçalho de documento |
| `iteruno-horizontal-768.png`, `iteruno-horizontal-escuro-192.png` | apresentações; versão escura para slides escuros |
| `iteruno-simbolo-256.png`, `-1024.png` | avatar quadrado, selo, impressão |
| `iteruno-vertical-512.png` | perfil em redes que recortam quadrado |
| `iteruno-sinal-800.png` | fundo de capa quando SVG não é aceito |

Gere novas exportações a partir dos SVG (`marca/tools/build.py` no repositório); não redimensione um PNG a partir de outro.
