let mailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
const EMAIL__ID = document.getElementById('email');
const ERROR_MESSAGE_INVALID = document.querySelector('.ping__form-invaild');

function checker() {
  const emailValue = EMAIL__ID.value.trim();

  if (emailValue === '' || mailRegex.test(emailValue)) {
    // Hide the error message
    ERROR_MESSAGE_INVALID.classList.remove('show');
  } else {
    // Show the error message
    ERROR_MESSAGE_INVALID.classList.add('show');
  }
}
