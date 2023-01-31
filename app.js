const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// also be written as:
// const loginInput = document.querySelector("#login-form input");

function onLoginSubmit() {
  event.preventDefault();
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
