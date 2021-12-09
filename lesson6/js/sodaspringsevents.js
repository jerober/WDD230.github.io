// //Home Page JSON Data
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        const cities = towns.filter(city => city.name == 'Soda Springs')
        
        for (let i = 0; i < cities.length; i++ ) {
            let event = document.createElement('section');
            document.querySelector('div.event').appendChild(event);
            let p = document.createElement('p');
            p.textContent = cities[i].events;
            event.appendChild(p);
        }
    });