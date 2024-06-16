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

  const localStorageData = localStorage.getItem("users");

  if (localStorageData) {
    const newLocalStorageData = JSON.parse(localStorageData);
    localStorage.setItem(
      "users",
      JSON.stringify([...newLocalStorageData, userInfo]),
    );
  } else {
    localStorage.setItem("users", JSON.stringify([userInfo]));
  }

  window.location.assign("/subpage/signin/signin.html");
});

let view = document.querySelector(".view");

view.onclick = () =>
  (password.attributes[0].value =
    password.attributes[0].value === "text" ? "password" : "text");
