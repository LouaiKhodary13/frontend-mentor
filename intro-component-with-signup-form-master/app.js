const form = document.getElementById('form');
const all_Inputs = document.querySelectorAll('.form__input');
const form_error = document.querySelectorAll('.form__error');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  all_Inputs.forEach((input, index) => {
    if (input.value.trim() == '') {
      input.classList.add('form__input-empty');
      form_error[index].style.display = 'block';
    } else {
      input.classList.remove('form__input-empty');
      form_error[index].style.display = 'none';
    }
  });
});
