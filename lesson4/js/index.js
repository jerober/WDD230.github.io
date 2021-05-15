// Responsive hamburger menu
const hamButton = document.querySelector(".ham");
const mainNav = document.querySelector(".navigation");

hamButton.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainNav.classList.remove('responsive')};

// Date in footer
const datefield = document.querySelector("date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", {dateStyle: "full" }).format(now);

datefield.textContent = fulldate;
