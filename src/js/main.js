const burgerBtn = document.querySelector('.nav__button span');
const navList = document.querySelector('.nav__list-mobile');
const allLinks = document.querySelectorAll('.nav__link-mobile');
const currentYear = document.querySelector('.current-year');
const links = document.querySelectorAll('.nav__link');
const input = document.getElementById('name');
const mailInput = document.getElementById('email');
const msgInput = document.getElementById('msg');
const error = document.querySelector('.msg-status');
const sendBtn = document.querySelector('.sendBtn');
const allInputs = document.querySelectorAll('input');

// SCROLLER

const allSections = document.querySelectorAll('section');
const homeLink = document.querySelector('.nav__link-home');
const aboutLink = document.querySelector('.nav__link-about');
const offerLink = document.querySelector('.nav__link-offer');
const contactLink = document.querySelector('.nav__link-contact');

//==========

//LISTS

const allLiItems = document.querySelectorAll('.offer__card ul li');
const checkIcon = '<i class="ti ti-check"></i>';
const notInculdedIcon = '<i class="ti ti-x"></i>';

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

const handleLinksActiveClass = () => {
	links.forEach((link) => link.classList.remove('activeLink'));
};

const handleObserver = () => {
	const currentSection = window.scrollY;
	allSections.forEach((section) => {
		if (
			section.classList.contains('about') &&
			section.offsetTop <= currentSection + 300
		) {
			handleLinksActiveClass();
			aboutLink.classList.add('activeLink');
		} else if (
			section.classList.contains('offer') &&
			section.offsetTop <= currentSection + 300
		) {
			handleLinksActiveClass();
			offerLink.classList.add('activeLink');
		} else if (
			section.classList.contains('about') &&
			section.offsetTop <= currentSection + 400
		) {
			handleLinksActiveClass();
			homeLink.classList.add('activeLink');
		} else if (
			section.classList.contains('contact') &&
			section.offsetTop <= currentSection + 200
		) {
			handleLinksActiveClass();
			contactLink.classList.add('activeLink');
		}
	});
};

const listHandle = () => {
	allLiItems.forEach((liItem) => {
		if (liItem.classList.contains('offer__unsupported')) {
			liItem.innerHTML = notInculdedIcon + 'opacja poza pakietem';
		} else {
			liItem.innerHTML = checkIcon + 'opcja w pakiecie';
		}
	});
};

const inputCheck = () => {
	if (input.value === '') {
		input.placeholder = 'Musisz podać imię';
		input.classList.add('input-error');
	} else {
		input.placeholder = '';
		input.classList.remove('input-error');
	}
};

const emailCheck = (mailInput) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/i;
	if (re.test(mailInput.value)) {
		mailInput.placeholder = '';
		mailInput.classList.remove('input-error');
	} else {
		mailInput.placeholder = 'Musisz podać poprawny email';
		mailInput.classList.add('input-error');
	}
};

handleCurrentYear();
listHandle();
sendBtn.addEventListener('click', (e) => {
	e.preventDefault();
	inputCheck();
	emailCheck(mailInput);
});
burgerBtn.addEventListener('click', handleBurger);
window.addEventListener('scroll', handleObserver);
