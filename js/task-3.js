const input = document.querySelector('.input');
const span = document.querySelector('.span');
input.addEventListener('input', () => {
  let inputValue = input.value.trim();
  if (inputValue === ' ') {
    inputValue = 'Anonimous';
  }
  span.textContent = inputValue;
});
