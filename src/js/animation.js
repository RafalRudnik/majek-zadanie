gsap.registerPlugin(ScrollTrigger);

let durationDelay = 0.3;
const about = document.querySelector('.about');
const offer = document.querySelector('.offer');
const offerCards = document.querySelectorAll('.offer__card');

// =========

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
