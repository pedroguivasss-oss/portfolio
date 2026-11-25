/* ==========================================================
   theme.js — carregado no <head> de todas as páginas
   ----------------------------------------------------------
   Aplica o tema (claro/escuro) ANTES da página ser desenhada,
   para a tela não "piscar" com o tema errado.
   ========================================================== */
(function () {
  var temaSalvo = null;

  try {
    temaSalvo = localStorage.getItem('tema');
  } catch (erro) {
    // Navegação privada ou armazenamento bloqueado: segue sem salvar
  }

  var prefereClaro = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  var tema = temaSalvo || (prefereClaro ? 'light' : 'dark');

  document.documentElement.setAttribute('data-theme', tema);

  // Indica ao CSS que o JavaScript está ativo (usado nas animações .reveal)
  document.documentElement.classList.add('js');
})();
