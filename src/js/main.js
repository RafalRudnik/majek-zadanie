const burgerBtn = document.querySelector('.nav__button span');
const navList = document.querySelector('.nav__list-mobile');
const allLinks = document.querySelectorAll('.nav__link-mobile');
const currentYear = document.querySelector('.current-year');
const links = document.querySelectorAll('.nav__link');

const handleBurger = () => {
	burgerBtn.classList.toggle('spanActive');
	navList.classList.toggle('showMenu');
};

allLinks.forEach((link) => {
	link.addEventListener('click', handleBurger);
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	currentYear.textContent = year;
};

const handleScroller = (e) => {
	links.forEach((link) => link.classList.remove('activeLink'));
	e.target.classList.add('activeLink');
};

handleCurrentYear();
burgerBtn.addEventListener('click', handleBurger);
links.forEach((item) => item.addEventListener('click', handleScroller));
