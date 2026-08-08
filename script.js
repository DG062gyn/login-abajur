// Seleciona os elementos da página
const lampString = document.getElementById('lampString');
const inputs = document.querySelectorAll('input');

// 1. Liga/Desliga a luz ao clicar na cordinha do abajur
lampString.addEventListener('click', () => {
  document.body.classList.toggle('lamp-on');
});

// 2. Acende a luz automaticamente quando o usuário clicar dentro de qualquer input
inputs.forEach(input => {
  input.addEventListener('focus', () => {
    document.body.classList.add('lamp-on');
  });
});
