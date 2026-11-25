# Portfólio - Pedro Guimarães Vasconcellos

Site pessoal feito como projeto final do curso. Fala sobre mim, sobre o meu trabalho como vendedor de eletrônicos e tecnologia e sobre o meu hobby, escutar música.

Site no ar: https://pedroguivasss-oss.github.io/portfolio/

## Estrutura

```
portfolio/
├── index.html          página inicial
├── pages/
│   ├── sobre.html      sobre mim, meu trabalho e fotos
│   ├── musica.html     meu hobby
│   └── contato.html    WhatsApp e formulário
├── css/
│   ├── style.css       estilos principais (celular primeiro)
│   └── responsive.css  ajustes para tablet e computador
├── js/
│   ├── main.js         menu do celular, página atual no menu e ano no rodapé
│   ├── fotos.js        abre as fotos da página Sobre em tamanho maior
│   └── contato.js      valida o formulário e abre o WhatsApp com a mensagem
└── img/
    ├── favicon.svg     ícone da aba
    ├── foto.svg        espaço da foto da página inicial
    └── fotos/          fotos da página Sobre
```

## Requisitos

1. Site sobre mim, o que eu faço e meu hobby: páginas Início, Sobre, Música e Contato.
2. Hospedado no GitHub Pages, a partir da branch `main`.
3. HTML, CSS e JavaScript em arquivos separados.
4. Responsivo: o layout foi feito primeiro para celular e o `responsive.css` ajusta para telas maiores.
5. Pastas separadas para páginas, CSS, JavaScript e imagens.

## Como trocar a foto

Salve sua foto na pasta `img` com o nome `foto.jpg` e, no `index.html`, troque `img/foto.svg` por `img/foto.jpg`.

## Como atualizar o site

Edite os arquivos e envie para o GitHub:

```bash
git add .
git commit -m "Atualiza o site"
git push
```

O GitHub Pages publica a nova versão em 1 ou 2 minutos.
