gsap.registerPlugin(ScrollTrigger);

const burgerBtn = document.querySelector('.nav__button span');
const navList = document.querySelector('.nav__list-mobile');
const allLinks = document.querySelectorAll('.nav__link-mobile');
const currentYear = document.querySelector('.current-year');
const links = document.querySelectorAll('.nav__link');

// SCROLLER

const allSections = document.querySelectorAll('section');
const homeLink = document.querySelector('.nav__link-home');
const aboutLink = document.querySelector('.nav__link-about');
const offerLink = document.querySelector('.nav__link-offer');

//==========

//GSAP
let durationDelay = 0.3;

const about = document.querySelector('.about');
const offer = document.querySelector('.offer');
const offerCards = document.querySelectorAll('.offer__card');

gsap.fromTo(
	about.children,
	{ y: '+=100', opacity: 0 },
	{
		y: 0,
		opacity: 1,
		stagger: 0.3,
		duration: 2,
		ease: 'easeInOut',
		scrollTrigger: {
			trigger: about,
			start: 'top 50%',
			// scrub: true,
		},
	}
);

offerCards.forEach((card) => {
	gsap.fromTo(
		card,
		{ y: '+=100', opacity: 0 },
		{
			y: 0,
			opacity: 1,
			duration: durationDelay,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: card,
				start: 'top 70%',
			},
		}
	);
	durationDelay++;
});

// =========

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

// const handleScroller = (e) => {
// 	links.forEach((link) => link.classList.remove('activeLink'));
// 	e.target.classList.add('activeLink');
// };

const handleObserver = () => {
	const currentSection = window.scrollY;
	allSections.forEach((section) => {
		if (
			section.classList.contains('about') &&
			section.offsetTop <= currentSection + 300
		) {
			links.forEach((link) => link.classList.remove('activeLink'));
			aboutLink.classList.add('activeLink');
		} else if (
			section.classList.contains('offer') &&
			section.offsetTop <= currentSection + 300
		) {
			links.forEach((link) => link.classList.remove('activeLink'));
			offerLink.classList.add('activeLink');
		} else if (
			section.classList.contains('about') &&
			section.offsetTop <= currentSection + 400
		) {
			links.forEach((link) => link.classList.remove('activeLink'));
			homeLink.classList.add('activeLink');
		}
	});
};

handleCurrentYear();
burgerBtn.addEventListener('click', handleBurger);
// links.forEach((item) => item.addEventListener('click', handleScroller));
window.addEventListener('scroll', handleObserver);
