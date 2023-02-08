"use sctrict";

const menuHamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const homeLogin = document.querySelector("#log-in");
const homeSignup = document.querySelector("#sign-up");
const homeUser = document.querySelector("#user");
const userSettings = document.querySelector("#users-settings");
const accountInfo = document.querySelector("#acc-info");
const accountLogout = document.querySelector("#acc-log-out");
window.addEventListener("load", function () {
  const formArray = JSON.parse(localStorage.getItem("Form"));
  formArray.forEach((e) => {
    homeUser.textContent = e.userName;
    // homeUser.classList.remove("hidden");
    // homeLogin.classList.add("hidden");
    homeLogin.style.display = "none";
    homeSignup.style.display = "none";
    homeUser.style.display = "block";

    // console.log(formUsername);
  });
});
homeUser.addEventListener("click", function () {
  // userSettings.style.display = "none";
  userSettings.classList.toggle("hidden");
  console.log(userSettings);
  console.log(homeUser);
  console.log(homeUser.classList.toggle("hidden"));
});
