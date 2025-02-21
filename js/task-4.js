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
