const lampString = document.getElementById('lampString');
const inputs = document.querySelectorAll('input');

// Alterna a luz ao clicar na cordinha
lampString.addEventListener('click', () => {
  document.body.classList.toggle('lamp-on');
});

// Acende a luz automaticamente quando o usuário interage com os inputs
inputs.forEach(input => {
  input.addEventListener('focus', () => {
    document.body.classList.add('lamp-on');
  });
});
