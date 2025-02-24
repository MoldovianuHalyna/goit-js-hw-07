const form = document.querySelector('.login-form');

const submitFunction = function (event) {
  event.preventDefault();
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  if (!email || !password) {
    alert('All form fields must be filled in');
    return;
  }
  const userData = {
    email,
    password,
  };
  console.log(userData);
  form.reset();
};
form.addEventListener('submit', submitFunction);

// adding styles

document.querySelector('p a').classList.add('go-back-link');
const labels = document.querySelectorAll('.login-form label');
labels.forEach(el => el.classList.add('input-label'));

const inputs = document.querySelectorAll('.login-form label input');
inputs.forEach(el => el.classList.add('input-field'));

document.querySelector('button').classList.add('submit-btn');
