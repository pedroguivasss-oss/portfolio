/* ==========================================================
   sobre.js — usado apenas em pages/sobre.html
   ----------------------------------------------------------
   1. Contadores animados (números que sobem de 0 até o valor)
   2. Barras de habilidade que se preenchem ao aparecer na tela
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var semAnimacao = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  iniciarContadores(semAnimacao);
  iniciarBarras();
});


/* Executa "callback" uma única vez, quando o elemento entra na tela */
function quandoVisivel(elemento, callback) {
  if (!('IntersectionObserver' in window)) {
    callback(elemento);
    return;
  }

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        callback(entrada.target);
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  observador.observe(elemento);
}


/* ---------- 1. Contadores ---------- */
function iniciarContadores(semAnimacao) {
  var contadores = document.querySelectorAll('[data-count]');

  contadores.forEach(function (contador) {
    var alvo = Number(contador.dataset.count);
    var prefixo = contador.dataset.prefix || '';

    if (semAnimacao) {
      contador.textContent = prefixo + alvo;
      return;
    }

    contador.textContent = prefixo + '0';

    quandoVisivel(contador, function () {
      var duracao = 1600; // em milissegundos
      var inicio = null;

      function passo(agora) {
        if (!inicio) inicio = agora;
        var progresso = Math.min((agora - inicio) / duracao, 1);
        // "ease-out": começa rápido e desacelera no final
        var suavizado = 1 - Math.pow(1 - progresso, 3);
        contador.textContent = prefixo + Math.round(alvo * suavizado);

        if (progresso < 1) requestAnimationFrame(passo);
      }

      requestAnimationFrame(passo);
    });
  });
}


/* ---------- 2. Barras de habilidade ---------- */
function iniciarBarras() {
  var barras = document.querySelectorAll('.skill__fill');

  barras.forEach(function (barra) {
    quandoVisivel(barra, function () {
      barra.style.width = barra.dataset.level + '%';
    });
  });
}
