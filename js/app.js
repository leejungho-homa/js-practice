// const age = parseInt(prompt("how old are you?"));
// if (isNaN(age)) {
//   console.log("Please wirte a number");
// } else {
//

// 이름 박스
const loginform = document.querySelector(".form");
const logininput = document.querySelector(".form input");
const greetingbox = document.querySelector(".form-text");
const greeting = document.querySelector(".form-text__text");
const HIDDEN = "hidden";
const username = logininput.value;
const USERNAME = "username";
const savedusername = localStorage.getItem(USERNAME);

function clicksubmit() {
  localStorage.setItem(USERNAME, logininput.value);
  greeting.innerHTML = `Hello ${savedusername}`;
  loginform.classList.add(HIDDEN);
  greetingbox.classList.remove(HIDDEN);
}

if (savedusername === null) {
  loginform.classList.remove(HIDDEN);
  loginform.addEventListener("submit", clicksubmit);
} else {
  greetingbox.classList.remove(HIDDEN);
  greeting.innerHTML = `Hello ${savedusername}`;
}
// 박스 핸들링
const box1 = document.querySelector(".box1");
const span = document.querySelector(".box1 span");

function handleboxclick() {
  box1.classList.toggle("box__active");
}

box1.addEventListener("click", handleboxclick);
