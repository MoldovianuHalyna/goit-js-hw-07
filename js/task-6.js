const input = document.querySelector('div input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const container = document.querySelector('#boxes');

const createBoxes = function () {
  const amount = parseInt(input.value);
  if (amount < 0 || amount > 100) {
    alert('Please enter a number from 1 to 100');
    return;
  }
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width += `${10 + i * 10}px`;
    box.style.height += `${10 + i * 10}px`;

    container.appendChild(box);
    boxes.push(box);
  }

  input.value = '';
};

createBtn.addEventListener('click', createBoxes);

const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const destroyBoxes = function () {
  container.innerHTML = '';
};

destroyBtn.addEventListener('click', destroyBoxes);
////adding styles
document.querySelector('p a').classList.add('go-back-link');
input.classList.add('input');
createBtn.classList.add('create-btn');
destroyBtn.classList.add('destroy-btn');
container.classList.add('box-container');
