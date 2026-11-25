/* ==========================================================
   estilos.js — usado na página inicial (index.html)
   ----------------------------------------------------------
   Seletor "Minha trilha sonora": ao clicar em um estilo,
   troca a capa, o título, o momento do dia, a barra de
   energia e a velocidade do equalizador animado.

   ➜ Para editar os estilos, mude os atributos data-* dos
     botões .style-tab no index.html:
       data-title   → nome do estilo
       data-moment  → quando você escuta
       data-energy  → energia de 0 a 100
       data-cover   → imagem da capa
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var widget = document.querySelector('[data-styles]');
  if (!widget) return;

  var abas = widget.querySelectorAll('.style-tab');
  var capa = widget.querySelector('[data-style-cover]');
  var titulo = widget.querySelector('[data-style-title]');
  var momento = widget.querySelector('[data-style-moment]');
  var energia = widget.querySelector('[data-style-energy]');
  var energiaTexto = widget.querySelector('[data-style-energy-text]');

  function selecionar(aba) {
    var nivel = Number(aba.dataset.energy);

    abas.forEach(function (a) {
      var ativa = a === aba;
      a.classList.toggle('is-active', ativa);
      a.setAttribute('aria-selected', String(ativa));
      a.tabIndex = ativa ? 0 : -1;
    });

    // Pequena animação de troca
    widget.classList.remove('is-switching');
    void widget.offsetWidth;
    widget.classList.add('is-switching');

    capa.src = aba.dataset.cover;
    titulo.textContent = aba.dataset.title;
    momento.textContent = aba.dataset.moment;
    energia.style.width = nivel + '%';
    energiaTexto.textContent = nivel + '%';

    // Quanto mais energia, mais rápido o equalizador (de ~1,1s até ~0,45s)
    var velocidade = (1.6 - nivel / 87).toFixed(2);
    widget.style.setProperty('--eq-speed', velocidade + 's');
  }

  abas.forEach(function (aba, indice) {
    aba.addEventListener('click', function () {
      selecionar(aba);
    });

    // Setas do teclado navegam entre os estilos (acessibilidade)
    aba.addEventListener('keydown', function (evento) {
      var proximo = null;
      if (evento.key === 'ArrowRight' || evento.key === 'ArrowDown') proximo = abas[(indice + 1) % abas.length];
      if (evento.key === 'ArrowLeft' || evento.key === 'ArrowUp') proximo = abas[(indice - 1 + abas.length) % abas.length];

      if (proximo) {
        evento.preventDefault();
        proximo.focus();
        selecionar(proximo);
      }
    });
  });

  // Começa com o estilo marcado como ativo no HTML
  selecionar(widget.querySelector('.style-tab.is-active') || abas[0]);
});
