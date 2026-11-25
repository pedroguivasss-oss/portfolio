// Formulário de contato
// O GitHub Pages não envia e-mails, então, se tudo estiver preenchido,
// o programa de e-mail de quem está visitando abre com a mensagem pronta.

var formulario = document.getElementById('formulario');
var aviso = document.getElementById('aviso');
var campoNome = document.getElementById('nome');
var campoEmail = document.getElementById('email');
var campoMensagem = document.getElementById('mensagem');

function mostrarErro(campo, texto) {
  document.getElementById('erro-' + campo.id).textContent = texto;

  if (texto === '') {
    campo.classList.remove('invalido');
  } else {
    campo.classList.add('invalido');
  }
}

function validar() {
  var tudoCerto = true;

  if (campoNome.value.trim() === '') {
    mostrarErro(campoNome, 'Escreva seu nome.');
    tudoCerto = false;
  } else {
    mostrarErro(campoNome, '');
  }

  if (!/^\S+@\S+\.\S+$/.test(campoEmail.value.trim())) {
    mostrarErro(campoEmail, 'Escreva um e-mail válido.');
    tudoCerto = false;
  } else {
    mostrarErro(campoEmail, '');
  }

  if (campoMensagem.value.trim().length < 5) {
    mostrarErro(campoMensagem, 'Escreva sua mensagem.');
    tudoCerto = false;
  } else {
    mostrarErro(campoMensagem, '');
  }

  return tudoCerto;
}

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  aviso.textContent = '';

  if (!validar()) {
    return;
  }

  var nome = campoNome.value.trim();
  var corpo = campoMensagem.value.trim() + '\n\n' + nome + ' (' + campoEmail.value.trim() + ')';

  window.location.href = 'mailto:' + formulario.dataset.email +
    '?subject=' + encodeURIComponent('Contato pelo site') +
    '&body=' + encodeURIComponent(corpo);

  aviso.textContent = 'Obrigado, ' + nome + '! Seu programa de e-mail vai abrir com a mensagem.';
  formulario.reset();
});
