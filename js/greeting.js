const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input"); // 가장 첫번째 요소만 가져옴
// const loginButton = loginForm.querySelector("input:last-child");

const greeting = document.getElementById("greeting");

const HIDDEN_CLASSNAME = "hidden"; // String을 저장하고 싶을 때 대문자 변수로 둠

const savedUsername = localStorage.getItem("username");

function onLoginSubmit(event) {
    event.preventDefault(); // submit할 때 발생하는 기본 동작인 새로고침을 막아줌
    const username = loginInput.value;
    localStorage.setItem("username", username); // 이름 저장하기 (key, value)
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `Hello, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
    // form 보여주기
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // h1 보여주기
    paintGreeting(savedUsername);
}