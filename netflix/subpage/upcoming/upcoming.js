let scroll = document.createElement("div");
scroll.className = "scroll";
let mybody = document.querySelector("body");
for (i = 0; i < 1; i++) {
  let content = document.createElement("div");
  content.className = "page";
  for (j = 0; j < 39; j++) {
    let movie = document.createElement("div");
    movie.className = "movie";
    let poster = document.createElement("img");
    poster.className = "poster";
    let mytext = document.createElement("h6");
    movie.append(poster);
    movie.append(mytext);
    content.append(movie);
  }
  scroll.append(content);
}
mybody.append(scroll);

const authenticationButtons = document.querySelector(".signin");

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