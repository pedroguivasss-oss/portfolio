/* ==========================================================
   contato.js — usado apenas em pages/contato.html
   ----------------------------------------------------------
   1. Valida os campos do formulário (nome, e-mail, assunto, mensagem)
   2. Mostra um contador de caracteres na mensagem
   3. Ao enviar, abre o app de e-mail do visitante com a mensagem
      pronta (o GitHub Pages não tem servidor para enviar e-mails).

   ➜ Para receber as mensagens, troque o e-mail no atributo
     data-email do <form> em pages/contato.html.
   ========================================================== */

document.addEventListener('DOMContentLoaded', function () {
  var formulario = document.getElementById('contact-form');
  if (!formulario) return;

  var status = document.getElementById('form-status');
  var mensagem = document.getElementById('mensagem');
  var contador = document.getElementById('contador');
  var campos = formulario.querySelectorAll('.form__input');

  /* Cada regra devolve "true" se estiver certo, ou o texto do erro */
  var regras = {
    nome: function (valor) {
      return valor.trim().length >= 3 || 'Digite seu nome (pelo menos 3 letras).';
    },
    email: function (valor) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor.trim()) || 'Digite um e-mail válido, ex.: voce@email.com';
    },
    assunto: function (valor) {
      return valor.trim().length >= 3 || 'Conte em poucas palavras o assunto.';
    },
    mensagem: function (valor) {
      return valor.trim().length >= 10 || 'A mensagem precisa ter pelo menos 10 caracteres.';
    }
  };

  function validarCampo(campo) {
    var resultado = regras[campo.name](campo.value);
    var erro = document.getElementById('erro-' + campo.name);
    var valido = resultado === true;

    campo.classList.toggle('is-invalid', !valido);
    campo.setAttribute('aria-invalid', String(!valido));
    erro.textContent = valido ? '' : resultado;

    return valido;
  }

  // Valida ao sair do campo e revalida enquanto o usuário corrige
  campos.forEach(function (campo) {
    campo.addEventListener('blur', function () {
      if (campo.value.trim() !== '') validarCampo(campo);
    });

    campo.addEventListener('input', function () {
      if (campo.classList.contains('is-invalid')) validarCampo(campo);
    });
  });

  // Contador de caracteres
  function atualizarContador() {
    contador.textContent = mensagem.value.length + '/' + mensagem.maxLength;
  }

  mensagem.addEventListener('input', atualizarContador);
  atualizarContador();

  // Envio
  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    var primeiroInvalido = null;

    campos.forEach(function (campo) {
      if (!validarCampo(campo) && !primeiroInvalido) {
        primeiroInvalido = campo;
      }
    });

    if (primeiroInvalido) {
      status.className = 'form__status is-error';
      status.textContent = 'Ops! Confira os campos destacados.';
      primeiroInvalido.focus();
      return;
    }

    var dados = new FormData(formulario);
    var destino = formulario.dataset.email;
    var corpo =
      'Nome: ' + dados.get('nome') + '\n' +
      'E-mail: ' + dados.get('email') + '\n\n' +
      dados.get('mensagem');

    var link = 'mailto:' + destino +
      '?subject=' + encodeURIComponent(dados.get('assunto')) +
      '&body=' + encodeURIComponent(corpo);

    status.className = 'form__status is-success';
    status.textContent = 'Tudo certo, ' + dados.get('nome').trim().split(' ')[0] +
      '! Seu aplicativo de e-mail vai abrir com a mensagem pronta para enviar.';

    window.location.href = link;

    formulario.reset();
    atualizarContador();
  });
});
