// const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=8dd97b200c8afe4ed2b4724eaee03d91"

// fetch(apiURL)
//     .then((response) => response.json())
//     .then((jsObject) => {
//         console.log(jsObject);
//         document.getElementById('current-temp').textContent = jsObject.main.temp;
//         const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
//         const desc = jsObject.weather[0].description;  // note how we reference the weather array
//         document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
//         document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
//         document.getElementById('icon').setAttribute('alt', desc);
//     });




    const weatherURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=8dd97b200c8afe4ed2b4724eaee03d91&lang=en&units=imperial"
    const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=8dd97b200c8afe4ed2b4724eaee03d91&lang=en&units=imperial"
    let temperature = 0
    let windSpeed  = 0
    let newDate = '';
    let weekForecast = {}
    
    
    function windchill(){    
        let windchill = ''
        
        if (temperature > 50 || windSpeed < 3) {
            windchill = "N/A"
        }
        else {
            windchill = Math.round((35.74) + (0.6215 * temperature) - (35.75 * (windSpeed ** 0.16)) + (0.4275 * temperature * (windSpeed ** 0.16))).toFixed(2)
        }
        return windchill
    }
    
    fetch(weatherURL)
        .then((response) => console.log(response.json()))
        .then((data) => {
            document.getElementById('temp').innerText = Math.round(data.main.temp);
            document.getElementById('high').innerText = Math.round(data.main.temp_max);
            document.getElementById('windSpeed').innerText = data.wind.speed;
            document.getElementById('humidity').innerText = data.main.humidity;
            let currentCondition = data.weather[0].description
            document.getElementById('condition').innerText = currentCondition.charAt(0).toUpperCase() + currentCondition.substring(1);
        })
        .then(() => {
            temperature = parseFloat(document.getElementById("temperature").innerText)
            windSpeed = parseFloat(document.getElementById("windSpeed").innerText)
            
            document.getElementById("windShill").innerText = windchill(temperature, windSpeed);
        });
    
    fetch(forecastURL)
        .then((response) => response.json())
        .then((data) => {
    
            newDate = '';
            weekForecast = {}

            weekForecast = Object.assign({}, ...data.list
                .filter(el => el.dt_txt.indexOf('18:00:00') >= 0)
                .map((el, index) => {
                        newDate = new Date(el.dt_txt)
                        return({
                            [days[newDate.getDay()] + " " + newDate.getDate()] : Math.round(el.main.temp) 
                        })
                    }       
                ));
        })
        .then(() =>{
            let keys =  Object.keys(weekForecast)
            let values =  Object.values(weekForecast)
            for(i=0; i< keys.length; i++){
                document.getElementById("dayName" + (i + 1)).innerText = keys[i];
                document.getElementById("dayTemp" + (i + 1)).innerText = values[i] + " °C";
            }
        });