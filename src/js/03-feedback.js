import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

formEl.addEventListener('input', throttle(onForm, 500));
formEl.addEventListener('submit', onSubmit);

const dataEl = localStorage.getItem(STORAGE_KEY);
const parseEl = JSON.parse(dataEl);

if (parseEl) {
  formEl.email.value = parseEl.email;
  formEl.message.value = parseEl.message;
}

function onForm() {
  const email = formEl.email.value;
  const message = formEl.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ email, message }));
}

function onSubmit(e) {
e.preventDefault();

  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;

  if (!email || !message) {
    return alert('Please complete all fields!');
  }

  const dataEl = {
    email,
    message,
  };

  console.log(dataEl);

  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}
