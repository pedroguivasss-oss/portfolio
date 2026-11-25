/* ==========================================================
   musica.js — usado apenas em pages/musica.html
   ----------------------------------------------------------
   Filtra os cards de estilos musicais por momento do dia.
   Cada botão tem data-filter="..." e cada card tem
   data-category="..." com um ou mais momentos separados
   por espaço (ex.: "animar relaxar").
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var botoes = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.music-card');
  var contador = document.getElementById('filter-count');

  botoes.forEach(function (botao) {
    botao.addEventListener('click', function () {
      var filtro = botao.dataset.filter;

      // Marca o botão clicado como ativo
      botoes.forEach(function (b) {
        var ativo = b === botao;
        b.classList.toggle('is-active', ativo);
        b.setAttribute('aria-pressed', String(ativo));
      });

      // Mostra/esconde os cards
      var visiveis = 0;

      cards.forEach(function (card) {
        var momentos = card.dataset.category.split(' ');
        var mostrar = filtro === 'todos' || momentos.indexOf(filtro) !== -1;
        card.classList.toggle('is-hidden', !mostrar);

        if (mostrar) {
          visiveis++;
          // Reinicia a animação de entrada
          card.classList.remove('fade-in');
          void card.offsetWidth;
          card.classList.add('fade-in');
        }
      });

      if (contador) {
        contador.textContent = 'Mostrando ' + visiveis + (visiveis === 1 ? ' estilo' : ' estilos');
      }
    });
  });
});
