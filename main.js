const inputEmail = document.querySelector('.email')
const button = document.querySelector('.button');

function start() {
  inputEmail.focus();
  sendEmail();
}

function showAlert(message) {
  alert(message);
}

let mailDep = '@'

function isEmptyInput() {
  if (inputEmail.value === '') {
    showAlert('E-mail vazio!');
    inputEmail.focus();
  }
}

function sendEmail() {
  button.addEventListener('click', () => {
    isEmptyInput();
  });
}

start();
