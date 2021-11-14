// Responsive hamburger menu
function toggleMenu() {
document.getElementsByClassName("navigation")[0].classList.toggle("responsive");

}

// hamButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

// window.onresize = () => {if (window.innerWidth > 760) mainNav.classList.remove('responsive')};

// Date in footer
const datefield = document.querySelector("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full" }).format(now);

datefield.textContent = fulldate;
