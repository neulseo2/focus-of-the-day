const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
// also be written as:
// const loginInput = document.querySelector("#login-form input");

function onLoginBtnClick() {
  console.log("click");
}
loginButton.addEventListener("click", onLoginBtnClick);
