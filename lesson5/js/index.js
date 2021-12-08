// Responsive hamburger menu
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    
    }
    
    // hamButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);
    
    // window.onresize = () => {if (window.innerWidth > 760) mainNav.classList.remove('responsive')};
    
//Banner on Fridays
const currentDate = new Date();
const weekday = new Array(7);
weekday[0] = "sunday";
weekday[1] = "monday";
weekday[2] = "tuesday";
weekday[3] = "wednesday";
weekday[4] = "thursday";
weekday[5] = "friday";
weekday[6] = "sarurday";
const day = weekday[now.getDay()];
if (day == 'friday') {
    document.querySelector(".banner").innerHTML = "Saturday = Preston Pancakes in the Park!  9:00 a.m. @city park pavilion"
}

// //Home Page JSON Data
// const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

// fetch(requestURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonObject) {
//         console.table(jsonObject);  // temporary checking for valid response and data parsing
//         const towns = jsonObject['towns'];
//         for (let i = 0; i < towns.length; i++ ) {
//             let card = document.createElement('section');
//             let h2 = document.createElement('h2');
//             h2.textContent = towns[i].name;
//             card.appendChild(h2);
//             document.querySelector('div.cards').appendChild(card);
//             let h3 = document.createElement('h3');
//             h3.textContent = towns[i].motto;
//             card.appendChild(h3);
//             let p = document.createElement('p');
//             p.textContent = 'Year Founded: ' + towns[i].yearFounded;
//             card.appendChild(p);
//             let p = document.createElement('p');
//             p.textContent = 'Population: ' + towns[i].currentPopulation;
//             card.appendChild(p);
//             let p = document.createElement('p');
//             p.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
//             card.appendChild(p);
//         }
//     });


// Date in footer
const datefield = document.querySelector("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full" }).format(now);

datefield.textContent = fulldate;
