// Script usado em todas as páginas

// Menu no celular: abre e fecha ao tocar no botão "Menu"
var botaoMenu = document.getElementById('menu-botao');
var menu = document.getElementById('menu');

botaoMenu.addEventListener('click', function () {
  var aberto = menu.classList.toggle('aberto');
  botaoMenu.setAttribute('aria-expanded', aberto);
  botaoMenu.textContent = aberto ? 'Fechar' : 'Menu';
});

// Marca no menu a página que está aberta
var paginaAtual = document.body.dataset.pagina;
var linkAtual = document.querySelector('.menu a[data-link="' + paginaAtual + '"]');

if (linkAtual) {
  linkAtual.setAttribute('aria-current', 'page');
}

// Ano atual no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();
