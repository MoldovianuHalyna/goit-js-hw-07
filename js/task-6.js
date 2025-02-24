const input = document.querySelector('div input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const container = document.querySelector('#boxes');

const createBoxes = function () {
  const amount = parseInt(input.value);
  if (isNaN(amount) || amount < 0 || amount > 100) {
    alert('Please enter a number from 1 to 100');
    return;
  }
  const boxes = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;

    boxes.appendChild(box);
  }
  container.appendChild(boxes);
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
