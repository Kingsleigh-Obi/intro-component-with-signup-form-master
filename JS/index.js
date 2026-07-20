const inputElements = document.querySelectorAll('input');

inputElements.forEach((inputElement) => {
  inputElement.addEventListener('input', () => {
    if(inputElement.value) {
    inputElement.classList.add('red-border');
  } else {
    inputElement.classList.remove('red-border');
  }
  });
});

// validating the email 
const emailField = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

emailField.addEventListener('input', () => {
  if(emailField.checkValidity()) {
    errorMessage.classList.remove('show-error-message');
  } else {
    errorMessage.classList.add('show-error-message');
    errorMessage.textContent = 'Looks like this is not an email';
  }
});




