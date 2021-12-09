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

// Date in footer
const datefield = document.querySelector("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full" }).format(now);

datefield.textContent = fulldate;
