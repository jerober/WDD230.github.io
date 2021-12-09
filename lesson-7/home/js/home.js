// //Home Page JSON Data
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];

        const cities = towns.filter(city => city.name == 'Preston')
        const cities1 = towns.filter(city => city.name == 'Fish Haven')
        const cities2 = towns.filter(city => city.name == 'Soda Springs')
        let newArray = [...cities,...cities1,...cities2]

        for (let i = 0; i < newArray.length; i++ ) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            h2.textContent = newArray[i].name;
            card.appendChild(h2);
            document.querySelector('div.cards').appendChild(card);
            let h3 = document.createElement('h3');
            h3.textContent = newArray[i].motto;
            card.appendChild(h3);
            let p = document.createElement('p');
            p.textContent = 'Year Founded: ' + newArray[i].yearFounded;
            card.appendChild(p);
            let p2 = document.createElement('p');
            p2.textContent = 'Population: ' + newArray[i].currentPopulation;
            card.appendChild(p2);
            let p3 = document.createElement('p');
            p3.textContent = 'Average Rainfall: ' + newArray[i].averageRainfall;
            card.appendChild(p3);
        }
    });