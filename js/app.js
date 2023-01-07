// const age = parseInt(prompt("how old are you?"));
// if (isNaN(age)) {
//   console.log("Please wirte a number");
// } else {
// }
const loginform = document.querySelector(".form");
const logininput = document.querySelector(".form input");
const greetingbox = document.querySelector(".form-text");
const greeting = document.querySelector(".form-text__text");
const box1 = document.querySelector(".box1");
const span = document.querySelector(".box1 span");
const HIDDEN = "hidden";

function clicksubmit(event) {
  event.preventDefault();
  loginform.classList.add(HIDDEN);
  const username = logininput.value;
  greeting.innerHTML = `Hello ${username}`;
  greetingbox.classList.remove(HIDDEN);
}

function handleboxclick() {
  box1.classList.toggle("box__active");
}

box1.addEventListener("click", handleboxclick);
loginform.addEventListener("submit", clicksubmit);
