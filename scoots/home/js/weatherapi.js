
const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=8dd97b200c8afe4ed2b4724eaee03d91&lang=en&units=imperial"
const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=8dd97b200c8afe4ed2b4724eaee03d91&lang=en&units=imperial"

fetch(weatherURL) .then(response => response.json())
.then(data => {
    document.getElementById('temp').innerText = Math.round(data.main.temp);
    document.getElementById('high').innerText = Math.round(data.main.temp_max);
    document.getElementById('windSpeed').innerText = data.wind.speed;
    document.getElementById('humidity').innerText = data.main.humidity;
    let currentCondition = data.weather[0].description
    document.getElementById('condition').innerText = currentCondition.charAt(0).toUpperCase() + currentCondition.substring(1);
    })

fetch(forecastURL) .then(response => response.json())
.then(data => {
    newDate = '';
    weekForecast = {}

    console.log(data)

    weekForecast = Object.assign({}, ...data.list
        .filter(el => el.dt_txt.indexOf('18:00:00') >= 0)
        .map((el, index) => {
            console.log(el)
                newDate = new Date(el.dt_txt)
                return({
                    [days[newDate.getDay()] + " " + newDate.getDate()] : Math.round(el.main.temp) 
                })
            }       
        ));

        console.log(weekForecast)
    })

fetch(forecastURL) .then((response) => response.json())
    .then((data) => {

    })
    .then(() =>{
        let keys =  Object.keys(weekForecast)
        let values =  Object.values(weekForecast)
        for(i=0; i< keys.length; i++){
            document.getElementById("dayName" + (i + 1)).innerText = keys[i];
            document.getElementById("dayTemp" + (i + 1)).innerText = values[i] + " °F";
        }
    });