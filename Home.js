"use sctrict";

const menuHamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const homeLogin = document.querySelector("#log-in");
const homeSignup = document.querySelector("#sign-up");
const homeUser = document.querySelector("#user");
const userSettings = document.querySelector("#users-settings");
const accountInfo = document.querySelector("#acc-info");
const accountSetings = document.querySelector("#settings");
const addMovies = document.querySelector("#add-movies");
const accountLogout = document.querySelector("#-acc-log-out");

// ------------------------------------------------------------------
// Swiper
let swiper = new Swiper(".mySwiper", {
  slidesPerGroup: 2,
  //   loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 4,
    },
    // 375: {
    //   spaceBetween: 10,
    // },
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
    1600: {
      slidesPerView: 7,
      spaceBetween: 0,
    },

    1920: {
      slidesPerView: 8,
      spaceBetween: 0,
    },
  },
});
// ------------------------------------------------------------------
// Eventlisteners
// Users Name
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
// ------------------------------------------------------------------
// Menu Burger
menuHamburger.addEventListener("click", () => {
  menuHamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
document.querySelectorAll(".nav-link").forEach((e) =>
  e.addEventListener("click", () => {
    menuHamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
homeLogin.addEventListener("click", function () {
  location.href = "Login-Page.html";
});
homeSignup.addEventListener("click", function () {
  location.href = "Register-Page.html";
});
// ------------------------------------------------------------------

// const accountInfo = document.querySelector("#acc-info");
// const accountSetings = document.querySelector("#settings");
// const addMovies = document.querySelector("#add-movies");
// const accountLogout = document.querySelector("#-acc-log-out");
accountInfo.addEventListener("click", function () {
  location.href = "Account-info.html";
});
accountSetings;
accountLogout;
// addMovies.addEventListener("click", function () {
//   location.href = "Add-Movies.html";
// });
// const getFromLocalStorage = JSON.parse(localStorage.getItem("Movies"));
// console.log(getFromLocalStorage);
// getFromLocalStorage.forEach((e) => {
//   let movieGenre = e.Genre;
//   let movieName = e.Name;
//   let movieURL = e.URL;
//   let movieFakepath = e.video;
//   console.log(movieGenre);
//   console.log(movieName);
//   console.log(movieURL);
//   console.log(movieFakepath);
//   let movieURLink = document.createElement("a");
//   let moviePosterValue = oncancel.createElement("img");
//   let movieNameValue = document.createElement("p");
//   let;
// });
