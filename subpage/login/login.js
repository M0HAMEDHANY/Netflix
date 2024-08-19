let email = document.querySelector("[name='email']");
let password = document.querySelector("[name='password']");
let username = document.querySelector("[name='username");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const elements = Array.from(e.target.elements);

  const userInfo = {};

  elements.forEach((element) => {
    if (element.localName === "input") {
      userInfo[element.name] = element.value;
    }
  });

  const localStorageData = JSON.parse(localStorage.getItem("users"));

  if (localStorageData) {
    localStorageData.forEach((user) => {
      if (
        user["email"] === userInfo["email"] &&
        user["password"] === userInfo["password"]
      ) {
        localStorage.setItem("loggedIn", true);
        window.location.assign("");
      }
    });
  }
});

let view = document.querySelector(".view");

view.onclick = () =>
  (password.attributes[0].value =
    password.attributes[0].value === "text" ? "password" : "text");

