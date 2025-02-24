const input = document.querySelector('input#name-input');
const span = document.querySelector('span#name-output');
input.addEventListener('input', () => {
  let inputValue = input.value.trim();
  if (inputValue === ' ') {
    inputValue = 'Anonimous';
  }
  span.textContent = inputValue;
});

// adding styles
document.querySelector('p a').classList.add('go-back-link');

input.classList.add('input');
