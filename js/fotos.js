// Fotos da página Sobre: ao clicar, a foto abre em tamanho maior.
// Se o navegador for antigo, o link abre a foto normalmente.

var janela = document.getElementById('foto-ampliada');
var fotoGrande = janela.querySelector('img');
var legenda = janela.querySelector('p');

document.querySelectorAll('.galeria a').forEach(function (link) {
  link.addEventListener('click', function (evento) {
    if (typeof janela.showModal !== 'function') {
      return;
    }

    evento.preventDefault();

    var foto = link.querySelector('img');
    fotoGrande.src = link.href;
    fotoGrande.alt = foto.alt;
    legenda.textContent = link.parentElement.querySelector('figcaption').textContent;

    janela.showModal();
  });
});

// Fecha no botão "Fechar" ou clicando fora da foto (a tecla Esc já fecha sozinha)
janela.querySelector('button').addEventListener('click', function () {
  janela.close();
});

janela.addEventListener('click', function (evento) {
  if (evento.target === janela) {
    janela.close();
  }
});
