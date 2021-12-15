// //Home Page JSON Data
const requestFile = '../../rentals.json'

fetch(requestFile)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['tours'];

        const cities = towns.filter(city => city.name == 'Fish Haven')
        
        for (let i = 0; i < cities.length; i++ ) {
            let event = document.createElement('section');
            document.querySelector('div.event').appendChild(event);
            let p = document.createElement('p');
            p.textContent = cities[i].events;
            event.appendChild(p);
        }
    });