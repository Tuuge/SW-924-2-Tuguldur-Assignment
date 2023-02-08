"use strict";
const signUp = document.querySelector("#sign-up");
const loginEmail = document.querySelector("#email");
const loginPassword = document.querySelector("#password");
const loginButon = document.querySelector("#login-button");
const loginToRegister = document.querySelector("#sign-up");
const loginUser = JSON.parse(localStorage.getItem("Form"));
// ------------------------------------------------------------------
loginButon.addEventListener("click", login);
// ------------------------------------------------------------------

function login() {
  loginUser.findIndex((el) => {
    if (loginEmail.value === el.email && loginPassword.value === el.password) {
      alert("Success");
      location.href = "index.html";
      return el;
    } else if (
      loginEmail.value !== el.email ||
      loginPassword.value !== el.password ||
      loginEmail.value === "" ||
      loginPassword.value === " "
    ) {
    }
  });
}
// ------------------------------------------------------------------

signUp.addEventListener("click", function () {
  location.href = "Register-Page.html";
});
// ------------------------------------------------------------------
