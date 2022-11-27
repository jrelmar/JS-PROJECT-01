
document.getElementById("subscription-form").onsubmit = function (e) {
  e.preventDefault();
  const form = e.target;
  const formFields = form.elements;
  let validationErrors = validateFormInput(formFields);
  if (validationErrors && validationErrors.length > 0) {
    document.getElementById('errors').textContent = '';
    validationErrors.forEach(err => {
      var errorDiv = document.createElement("div");
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
  let firstName = formFields.firstName.value;
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  let surname = formFields.surname.value;
  surname = surname.charAt(0).toUpperCase() + surname.slice(1);
  const mobile = formFields.mobile.value;
  let address = formFields.address.value;
  address = address.charAt(0).toUpperCase() + address.slice(1);
  const email = formFields.email.value;
  document.getElementById("firstName").innerText = firstName;
  document.getElementById("surname").innerText = surname;
  document.getElementById("address").innerText = address;
  document.getElementById("mobile").innerText = mobile;
  document.getElementById("email").innerText = email;
  var creationDate = new Date().toString();
  document.getElementById("creationTime").innerText = creationDate;
}

function validateFormInput(formFields) {
  const firstName = formFields.firstName.value;
  const surname = formFields.surname.value;
  const mobile = formFields.mobile.value;
  const address = formFields.address.value;
  const email = formFields.email.value;
  const password = formFields.password.value;

  let errors = [];
  if (!validateNameSurname(firstName)) {
    errors.push('First Name field is invalid');
  }
  if (!validateNameSurname(surname)) {
    errors.push('Surname field is invalid');
  }
  if (!validateMobile(mobile)) {
    errors.push('Mobile field is invalid. Valid format: +48 and 9 chacarters');
  }
  if (!address) {
    errors.push('Address field is invalid');
  }
  if (!validateEmail(email)) {
    errors.push('Email field is invalid');
  }
  if (!validatePassword(password)) {
    errors.push('Password field is invalid. Password should have at least one number and one special character');
  }
  return errors;
}
function validateNameSurname(name){
  var regName = /^[a-zA-Z\s-]*$/;
  return name && regName.test(name);
}

function validateMobile(mobile){
  var regName = /^\+?[1-9][0-9]{9,10}$/;
  return mobile && regName.test(mobile);
}

function validateEmail(email){
  var regName = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
  return email && regName.test(email);
}
function validatePassword(password){
  var regName =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return password && regName.test(password);
}