const FIRST_NAME = document.getElementById('first__name');
const LAST_NAME = document.getElementById('last__name');
const EMAIL_ADDRESS = document.getElementById('email_address');
const PASSWORD = document.getElementById('password');

function printInputValue(event) {
  event.preventDefault();

  const value1 = FIRST_NAME.value;
  const value2 = LAST_NAME.value;
  const value3 = EMAIL_ADDRESS.value;
  const value4 = PASSWORD.value;
  console.log(value1, value2, value3, value4);
}
