var inputvalue = document.querySelector('#cityinput');
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput');
var description = document.querySelector('#description');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var apik = "2c9ead34a23f14d44a80b54522ada804";

function convertion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputvalue.value + '&appid=' + apik)
    .then(res => res.json())
    .then(data => {
        var nameval = data['name'];
        var descrip = data['weather'][0]['description'];
        var tempature = data['main']['temp'];
        var windspeed = data['wind']['speed'];

        city.innerHTML = `Weather of <span>${nameval}</span>`;
        temp.innerHTML = `Temperature: <span>${convertion(tempature)}</span>`;
        description.innerHTML = `Sky Conditions: <span>${descrip}</span>`;
        wind.innerHTML = `Wind Speed: <span>${windspeed} Km/h</span>`;
    })
    .catch(err => alert('You entered the wrong city name'));
});
