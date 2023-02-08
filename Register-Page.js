const loginPage = document.querySelector("#login-page");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const signUpButton = document.querySelector("#sign-up-button");
// ------------------------------------------------------------

// ------------------------------------------------------------
const formValidation = function () {
  // Values
  let firstNameValue = firstName.value;
  let lastNameValue = lastName.value;
  let emailValue = email.value;
  let passwordValue = password.value;
  let confirmPasswordValue = confirmPassword.value;
  let userId;
  // ------------------------------------------------------------
  // Firstname check
  if (!firstNameValue.match(/[A-Z][a-z]{2,15}/) || firstNameValue === "") {
    alert(
      "Firstname is wrong! First letter should have Capital letter. At least 3 letter."
    );
    // ------------------------------------------------------------
    // Lastname check
  } else if (
    !lastNameValue.match(/[A-Z][a-z]{2,15}/) ||
    firstNameValue === ""
  ) {
    alert(
      "Lastname is wrong! First letter should have Capital letter. At least 3 letter."
    );
    // ------------------------------------------------------------
    // Email check
  } else if (
    !emailValue.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ) ||
    emailValue === ""
  ) {
    alert("Email is wrong!");
    // ------------------------------------------------------------
    // Password check
  } else if (
    !passwordValue.match(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/ ||
        passwordValue === ""
    )
  ) {
    alert("Password is wrong!");
    // ------------------------------------------------------------
    // Confirm password check
  } else if (
    confirmPasswordValue !== passwordValue ||
    confirmPasswordValue === ""
  ) {
    alert("confirmpass wrong!");
    // ------------------------------------------------------------
    // Login
  } else {
    alert("Registration is successful!");
    userId = Math.trunc(Math.random() * 10);

    // Add localstoragge
    let formArray = [];
    const addLocalStorage = function () {
      let formObject = {
        userId: userId,
        firstName: firstNameValue,
        lastName: lastNameValue,
        userName: firstNameValue + " " + lastNameValue,
        email: emailValue,
        password: passwordValue,
        confirmPassword: confirmPasswordValue,
        valid: false,
      };
      if (localStorage.getItem("Form") == null) {
        formArray.push(formObject);
        localStorage.setItem("Form", JSON.stringify(formArray));
      } else {
        let formArrayTwo = JSON.parse(localStorage.getItem("Form"));
        formArrayTwo.push(formObject);
        localStorage.setItem("Form", JSON.stringify(formArrayTwo));
      }
    };
    // ------------------------------------------------------------
    addLocalStorage();
    window.location.href = "index.html";
  }
  // ------------------------------------------------------------
};

signUpButton.addEventListener("click", function () {
  formValidation();
});

loginPage.addEventListener("click", function () {
  location.href = "Login-Page.html";
});
