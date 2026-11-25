/* ==========================================================
   main.js — funções usadas em TODAS as páginas
   ----------------------------------------------------------
   1. Alternar tema claro/escuro
   2. Menu mobile (hambúrguer)
   3. Cabeçalho com fundo ao rolar
   4. Destacar o link da página atual
   5. Efeito de digitação (página inicial)
   6. Animação de elementos ao rolar (.reveal)
   7. Botão "voltar ao topo"
   8. Ano atual no rodapé
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {
  iniciarTema();
  iniciarMenu();
  iniciarCabecalho();
  destacarLinkAtivo();
  iniciarDigitacao();
  iniciarReveal();
  iniciarVoltarAoTopo();
  atualizarAno();
});


/* ---------- 1. Tema claro/escuro ---------- */
function iniciarTema() {
  var botao = document.getElementById('theme-toggle');
  if (!botao) return;

  var html = document.documentElement;

  function atualizarRotulo() {
    var claro = html.getAttribute('data-theme') === 'light';
    botao.setAttribute('aria-label', claro ? 'Ativar tema escuro' : 'Ativar tema claro');
  }

  atualizarRotulo();

  botao.addEventListener('click', function () {
    var novoTema = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', novoTema);
    atualizarRotulo();

    try {
      localStorage.setItem('tema', novoTema);
    } catch (erro) {
      // Sem armazenamento disponível: o tema vale só nesta visita
    }
  });
}


/* ---------- 2. Menu mobile ---------- */
function iniciarMenu() {
  var botao = document.getElementById('menu-toggle');
  var menu = document.getElementById('nav');
  if (!botao || !menu) return;

  function definirMenu(aberto) {
    botao.setAttribute('aria-expanded', String(aberto));
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    menu.classList.toggle('is-open', aberto);
    document.body.classList.toggle('menu-open', aberto);
  }

  botao.addEventListener('click', function () {
    var estaAberto = botao.getAttribute('aria-expanded') === 'true';
    definirMenu(!estaAberto);
  });

  // Fecha ao clicar em um link do menu
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      definirMenu(false);
    });
  });

  // Fecha com a tecla Esc
  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && menu.classList.contains('is-open')) {
      definirMenu(false);
      botao.focus();
    }
  });

  // Se a tela crescer (ex.: girar o tablet), fecha o menu mobile
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 900) definirMenu(false);
  });
}


/* ---------- 3. Cabeçalho ao rolar ---------- */
function iniciarCabecalho() {
  var cabecalho = document.getElementById('header');
  if (!cabecalho) return;

  function verificarRolagem() {
    cabecalho.classList.toggle('is-scrolled', window.scrollY > 20);
  }

  verificarRolagem();
  window.addEventListener('scroll', verificarRolagem, { passive: true });
}


/* ---------- 4. Link da página atual ---------- */
function destacarLinkAtivo() {
  var paginaAtual = document.body.dataset.page;

  document.querySelectorAll('.nav__link').forEach(function (link) {
    if (link.dataset.nav === paginaAtual) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    }
  });
}


/* ---------- 5. Efeito de digitação ---------- */
function iniciarDigitacao() {
  var elemento = document.querySelector('[data-typing]');
  if (!elemento) return;

  var palavras;
  try {
    palavras = JSON.parse(elemento.dataset.typing);
  } catch (erro) {
    return;
  }

  // Quem prefere menos movimento vê só a primeira frase, sem animação
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elemento.textContent = palavras[0];
    return;
  }

  var indicePalavra = 0;
  var indiceLetra = 0;
  var apagando = false;

  function digitar() {
    var palavra = palavras[indicePalavra];
    elemento.textContent = palavra.slice(0, indiceLetra);

    if (!apagando && indiceLetra < palavra.length) {
      indiceLetra++;
      setTimeout(digitar, 85);           // digitando
    } else if (!apagando) {
      apagando = true;
      setTimeout(digitar, 1700);         // pausa com a palavra completa
    } else if (indiceLetra > 0) {
      indiceLetra--;
      setTimeout(digitar, 40);           // apagando
    } else {
      apagando = false;
      indicePalavra = (indicePalavra + 1) % palavras.length;
      setTimeout(digitar, 350);          // próxima palavra
    }
  }

  digitar();
}


/* ---------- 6. Revelar elementos ao rolar ---------- */
function iniciarReveal() {
  var elementos = document.querySelectorAll('.reveal');

  // Navegadores antigos: mostra tudo de uma vez
  if (!('IntersectionObserver' in window)) {
    elementos.forEach(function (el) { el.classList.add('is-visible'); });
    return;
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (!entrada.isIntersecting) return;

      var el = entrada.target;
      // .delay-1 = 100ms, .delay-2 = 200ms, .delay-3 = 300ms
      var atraso = el.className.match(/delay-(\d)/);
      var ms = atraso ? Number(atraso[1]) * 100 : 0;

      setTimeout(function () { el.classList.add('is-visible'); }, ms);
      observador.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elementos.forEach(function (el) { observador.observe(el); });
}


/* ---------- 7. Voltar ao topo ---------- */
function iniciarVoltarAoTopo() {
  var botao = document.getElementById('back-to-top');
  if (!botao) return;

  window.addEventListener('scroll', function () {
    botao.classList.toggle('is-visible', window.scrollY > 500);
  }, { passive: true });

  botao.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ---------- 8. Ano no rodapé ---------- */
function atualizarAno() {
  var ano = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = ano;
  });
}
