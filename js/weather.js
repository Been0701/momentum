const API_KEY = '8d8bc42c59547cc73b31b6649a9a6bce';

function onGeoOk(location){
    const lat = location.coords.latitude;
    const long = location.coords.longitude;
    console.log("You live in ",lat, long);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
    fetch(url) // Javascript로 브라우저에 url을 호출함
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
        city.innerText = data.name;
    });
}
function onGeoError(){
    alert("위치를 찾을 수 없어 날씨 정보 제공이 어렵습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)