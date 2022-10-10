const clock = document.getElementById("clock");

function getClock(){
    const date = new Date();
    const hour =   String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = (`${hour}:${minute}:${second}`);
}

getClock(); // 새로고침되자마자 바로 함수 실행되도록
setInterval(getClock, 1000); // 1초마다 반복 실행

