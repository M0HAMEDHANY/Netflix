const swiper = new Swiper(".coming-container", {
  loop: true,
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  const direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}

let img = document.querySelectorAll(".box-img");
let nav = document.querySelector(".navbar");
let body = document.querySelector("body");
let home = document.querySelector("Home");

const authenticationButtons = document.querySelector(".login");

const isLoggedIn = JSON.parse(localStorage.getItem("loggedIn")) === true;

if (isLoggedIn) {
  while (authenticationButtons.children.length !== 0) {
    authenticationButtons.removeChild(authenticationButtons.children[0]);
  }
  const a = document.createElement("a");

  const button = document.createElement("button");

  button.innerHTML = "Log out";

  a.addEventListener("click", () => {
    localStorage.setItem("loggedIn", false);
    location.reload(true);
  });
  a.appendChild(button);
  authenticationButtons.appendChild(a);
}

//
// for (i = 0; i < 10; i++){
// }
// const swiper = new Swiper(".coming-container", {
//   slidesPerView: 5,
//   spaceBetween: 30,
//   autoplay: {
//     delay: 4000,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
