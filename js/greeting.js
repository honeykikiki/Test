const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greding = document.querySelector("#greding");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginInSubmit(tomato) {
  tomato.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginInSubmit);

function paintGreetings(username) {
  greding.innerHTML = `hello ${username}`;
  greding.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginInSubmit);
} else {
  paintGreetings(savedUsername);
}
