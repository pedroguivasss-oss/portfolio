// Formulário de contato
// Se o nome e a mensagem estiverem preenchidos, abre o WhatsApp
// com a mensagem pronta para enviar.

var formulario = document.getElementById('formulario');
var aviso = document.getElementById('aviso');
var campoNome = document.getElementById('nome');
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
  var texto = 'Olá, Pedro! Meu nome é ' + nome + '. ' + campoMensagem.value.trim();
  var link = 'https://wa.me/' + formulario.dataset.whatsapp + '?text=' + encodeURIComponent(texto);

  // Abre o WhatsApp em outra aba (no celular, abre o aplicativo)
  var aba = window.open(link, '_blank');
  if (!aba) {
    window.location.href = link;
  }

  aviso.textContent = 'Obrigado, ' + nome + '! Se o WhatsApp não abrir, me chame no (61) 99978-5174.';
  formulario.reset();
});
