# Portfólio — Projeto Final

Site pessoal sobre mim: **vendedor de eletrônicos e tecnologia há mais de 5 anos** e apaixonado por **música**, meu hobby.
Feito com **HTML, CSS e JavaScript puros**, responsivo (celular, tablet e desktop) e hospedado no **GitHub Pages**.

## ✅ Requisitos do projeto

| Requisito | Como foi atendido |
|---|---|
| 1. Site portfólio (sobre você, o que faz, hobby) | **Início** e **Sobre** falam de mim e do meu trabalho como vendedor; a página **Música** é sobre o meu hobby |
| 2. Hospedar no GitHub Pages | Publicado a partir da branch `main` (veja o passo a passo abaixo) |
| 3. Conteúdo HTML, CSS e JavaScript | 4 páginas HTML, 2 arquivos CSS e 6 arquivos JS |
| 4. Design responsivo (mobile) | Abordagem *mobile-first* + `css/responsive.css` com media queries e menu hambúrguer no celular |
| 5. Arquitetura completa | Pastas separadas para imagens, CSS, JS e páginas HTML |

## 📁 Estrutura de pastas

```
portfolio/
├── index.html              → página inicial (precisa ficar na raiz para o GitHub Pages)
├── pages/                  → demais páginas HTML
│   ├── sobre.html          → minha história, habilidades e trajetória nas vendas
│   ├── musica.html         → meu hobby: os estilos que eu mais escuto
│   └── contato.html        → WhatsApp, e-mail, redes sociais e formulário
├── css/
│   ├── style.css           → estilos principais (cores, layout, componentes)
│   └── responsive.css      → adaptações para cada tamanho de tela
├── js/
│   ├── theme.js            → aplica o tema claro/escuro ao abrir a página
│   ├── main.js             → menu mobile, tema, animações, voltar ao topo (todas as páginas)
│   ├── estilos.js          → seletor "Minha trilha sonora" da página inicial
│   ├── sobre.js            → contadores e barras de habilidade
│   ├── musica.js           → filtro dos estilos musicais por momento
│   └── contato.js          → validação do formulário de contato
├── img/
│   ├── favicon.svg         → ícone da aba do navegador
│   ├── avatar.svg          → ilustração da página inicial
│   ├── sobre.svg           → ilustração da página Sobre (loja de eletrônicos)
│   └── musica/             → capas dos estilos musicais e ilustração de fones
└── README.md
```

## ⚙️ Funcionalidades em JavaScript

- **Menu hambúrguer** no celular (abre/fecha, fecha com Esc ou ao clicar num link)
- **Tema claro/escuro** com botão de sol/lua — a escolha fica salva no navegador
- **Efeito de digitação** no título da página inicial
- **Seletor de estilos musicais** com capa, barra de energia e equalizador animado que acelera conforme a energia do estilo
- **Animações ao rolar** a página (elementos aparecem suavemente)
- **Contadores animados** e **barras de habilidade** na página Sobre
- **Filtro de estilos** por momento (para animar, para relaxar, com os amigos)
- **Validação do formulário** de contato com mensagens de erro e contador de caracteres
- Botão **voltar ao topo** e **ano automático** no rodapé

## ✏️ O que ainda personalizar

1. **Seu nome:** procure por `Seu Nome` em todos os arquivos `.html` e troque pelo seu (no VS Code: `Ctrl+Shift+H` substitui em todos os arquivos de uma vez).
2. **Sua foto:** coloque sua foto em `img/` (ex.: `img/foto.jpg`) e, no `index.html`, troque `img/avatar.svg` por `img/foto.jpg`. Uma foto quadrada fica melhor.
3. **Contatos:** troque `5500000000000` e `(00) 00000-0000` pelo seu WhatsApp, `seu-usuario` pelos seus perfis e `seuemail@exemplo.com` pelo seu e-mail (inclusive no `data-email` do formulário em `pages/contato.html`). Troque também `Sua Cidade`.
4. **Números:** em `pages/sobre.html`, ajuste os contadores (`data-count`) — por exemplo, a quantidade de clientes atendidos.
5. **Habilidades:** em `pages/sobre.html`, ajuste a porcentagem em `data-level`, no texto `%` e em `aria-valuenow`.
6. **Estilos musicais:** na página inicial, edite os atributos `data-title`, `data-moment` e `data-energy` dos botões `.style-tab`; na página Música, edite os cards `.music-card` (o filtro usa `data-category`).
7. **Cores:** mude as variáveis `--accent` e `--accent-2` no topo do `css/style.css`.

## 🚀 Como publicar no GitHub Pages

1. Crie um repositório **público** no GitHub (ex.: `portfolio`) e envie todos os arquivos desta pasta — o `index.html` precisa ficar na **raiz**.
2. No repositório, vá em **Settings → Pages**.
3. Em **Build and deployment → Source**, escolha **Deploy from a branch**, selecione a branch `main` e a pasta `/ (root)` e clique em **Save**.
4. Aguarde 1–2 minutos. O endereço será `https://SEU-USUARIO.github.io/portfolio/`.

Pelo terminal (com o [GitHub CLI](https://cli.github.com/) logado):

```bash
git init -b main
git add .
git commit -m "Primeira versão do portfólio"
gh repo create portfolio --public --source=. --push
gh api -X POST repos/SEU-USUARIO/portfolio/pages -f "source[branch]=main" -f "source[path]=/"
```

Para atualizar o site depois de editar algum arquivo:

```bash
git add .
git commit -m "Atualiza conteúdo"
git push
```

## 🧪 Testar no computador

Abra o `index.html` no navegador (duplo clique). Para ver como fica no celular, abra as ferramentas de desenvolvedor (`F12`) e ative o modo dispositivo (`Ctrl+Shift+M`).

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (Flexbox, Grid, variáveis CSS, media queries, animações)
- JavaScript (DOM, eventos, IntersectionObserver, localStorage)
- [Google Fonts](https://fonts.google.com/) (Inter e Space Grotesk) e [Font Awesome](https://fontawesome.com/) (ícones)
