
document.getElementById("subscription-form").onsubmit = function (e) {
  e.preventDefault();
  const form = e.target;
  const formFields = form.elements;
  let validationErrors = validateFormInput(formFields);
  if (validationErrors && validationErrors.length > 0) {
    document.getElementById('errors').textContent = '';
    validationErrors.forEach(err => {
      let errorDiv = document.createElement("div");
      errorDiv.classList.add('error');
      errorDiv.innerText = err;
      document.getElementById('errors').appendChild(errorDiv);
    });
    document.getElementById("errors").classList.remove('invisible');
  } else {
    // show data and success
    form.classList.add('invisible');
    document.getElementById("result-container").classList.remove('invisible');
    document.getElementById("errors").classList.add('invisible');

    fillResultData(formFields);
  }
  // returning false preventing the form from the default submit flow
  return false;
};

function fillResultData(formFields) {
  const firstName = formFields.firstName.value;
  const surname = formFields.surname.value;
  const mobile = formFields.mobile.value;
  const address = formFields.address.value;
  const email = formFields.email.value;
  document.getElementById("firstName").innerText = firstName;
  document.getElementById("surname").innerText = surname;
  document.getElementById("address").innerText = address;
  document.getElementById("mobile").innerText = mobile;
  document.getElementById("email").innerText = email;

}

function validateFormInput(formFields) {
  const firstName = formFields.firstName.value;
  const surname = formFields.surname.value;
  const mobile = formFields.mobile.value;
  const address = formFields.address.value;
  const email = formFields.email.value;
  const password = formFields.password.value;

  let errors = [];
  if (!firstName) {
    errors.push('First Name field is invalid');
  }
  if (!surname) {
    errors.push('Surname field is invalid');
  }
  if (!mobile) {
    errors.push('Mobile field is invalid');
  }
  if (!address) {
    errors.push('Address field is invalid');
  }
  if (!email) {
    errors.push('Email field is invalid');
  }
  if (!password) {
    errors.push('Password field is invalid');
  }
  return errors;
}