function onGeoOk(location){
    const lat = location.coords.latitude;
    const long = location.coords.longitude;
    console.log("You live in ",lat, long);
}
function onGeoError(){
    alert("위치를 찾을 수 없어 날씨 정보 제공이 어렵습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)