const button = document.querySelector('.change-color');
const span = document.querySelector('.color');
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function changeColor() {
  const color = getRandomHexColor();
  span.textContent = color;
  body.style.backgroundColor = color;
}

button.addEventListener('click', changeColor);

// adding styles

document.querySelector('p a').classList.add('go-back-link');
document.querySelector('.widget p').classList.add('header');
