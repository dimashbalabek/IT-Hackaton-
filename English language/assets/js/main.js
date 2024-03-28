/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
calc = 0
if(navToggle){
    navToggle.addEventListener('click', () =>{
        if(calc == 0){
            navMenu.classList.add('show-menu')
            calc = 1
        } else{
            navMenu.classList.remove('show-menu')
            calc = 0
        }
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
// if(navClose){
//     navClose.addEventListener('click', () =>{
//         navMenu.classList.remove('show-menu')
//     })
// }




/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
    // reset: true // Animations repeat
})

sr.reveal(`.home__data, .explore__data, .explore__user, .footer__container`)
sr.reveal(`.home__card`, {delay: 600, distance: '100px', interval: 100})
sr.reveal(`.about__data, .join__image`, {origin: 'right'})
sr.reveal(`.about__image, .join__data`, {origin: 'left'})
sr.reveal(`.popular__card`, {interval: 200})

/*===== DARK LIGHT TOGGLE =====*/
let index = 0;
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    const footer = document.querySelector('footer');
    if (index == 1) {
        document.body.classList.toggle('dark');
        document.body.style.backgroundColor = "black"; // Изменено на черный цвет заднего фона для темной темы
        const shadow_png = document.querySelector(".explore__shadow");
        const shadow2_png = document.querySelector(".home__shadow");

        // Change color of headings, paragraphs, and links to white for dark mode
        const headings = document.querySelectorAll('h1, h2, h3');
        const paragraphs = document.querySelectorAll('p');
        const links = document.querySelectorAll('a');

        headings.forEach((heading) => {
            heading.style.color = 'white';
        });

        paragraphs.forEach((paragraph) => {
            paragraph.style.color = 'white';
        });

        links.forEach((link) => {
            link.style.color = 'white';
        });

        // Change color of footer elements to white for dark mode
        footer.style.backgroundColor = 'var(--container-color)';

        shadow_png.style.background = "linear-gradient(180deg, hsl(0, 0%, 0%) 5%, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 0) 60%, hsl(0, 0%, 0%) 92%)";
        shadow2_png.style.background = "linear-gradient(180deg, hsl(0, 0%, 0%) 5%, hsla(0, 0%, 0%, 0) 40%, hsla(0, 0%, 0%, 0) 60%, hsl(0, 0%, 0%) 92%)";

        index = 0; // Изменение индекса для обозначения активной темы
    } else {
        document.body.classList.toggle('dark');
        document.body.style.backgroundColor = "white";
        const shadow_png = document.querySelector(".explore__shadow");
        const shadow2_png = document.querySelector(".home__shadow");

        // Change color of headings, paragraphs, and links to black for light mode
        const headings = document.querySelectorAll('h1, h2, h3, .popular__title');
        const paragraphs = document.querySelectorAll('p');
        const links = document.querySelectorAll('a');

        headings.forEach((heading) => {
            heading.style.color = 'black';
        });

        paragraphs.forEach((paragraph) => {
            paragraph.style.color = 'black';
        });

        links.forEach((link) => {
            link.style.color = 'black';
        });

        // Change color of footer elements to black for light mode
        footer.style.backgroundColor = '#C3C3C3';

        shadow_png.style.background = "linear-gradient(180deg, hsl(0, 0%, 100%) 5%, hsla(0, 0%, 100%, 0) 40%, hsla(0, 0%, 100%, 0) 60%, hsl(0, 0%, 100%) 92%)";
        shadow2_png.style.background = "linear-gradient(180deg, hsl(0, 0%, 100%) 5%, hsla(0, 0%, 100%, 0) 40%, hsla(0, 0%, 100%, 0) 60%, hsl(0, 0%, 100%) 92%)";

        index = 1; // Сброс индекса для обозначения активной темы
    }
});


/*===== LANGUAGE SWAP =====*/

document.addEventListener('DOMContentLoaded', () => {

	const menuBtns = document.querySelectorAll('.menu__btn');
	const drops = document.querySelectorAll('.dropdown');

	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.menu__item').querySelector('.dropdown');

			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('menu__btn--active');
				}
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('dropdown--active');
				}
			});

			drop.classList.toggle('dropdown--active');
			currentBtn.classList.toggle('menu__btn--active');
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.menu')) {
			menuBtns.forEach(el => {
				el.classList.remove('menu__btn--active');
			});

			drops.forEach(el => {
				el.classList.remove('dropdown--active');
			});
		}
	});
});


/*===== FEEDBACK =====*/
let feedbacknum = 1;
    user();

    function user(num) {
        let i = 0
        let feedbackBoxes = document.getElementsByClassName("feedback__bottom-container");
        let active = document.getElementsByClassName("feedback__active");
        

        for (let i = 0;  i < feedbackBoxes.length; i++) {
            feedbackBoxes[i].style.display = "none";
            active[i].style.backgroundColor = "#787878"
        }
        if (num >= 1){
            feedbackBoxes[num-1].style.display = "block";
            active[num -1].style.backgroundColor = "#434343"
        } else{
            feedbackBoxes[feedbacknum-1].style.display = "block";
            active[feedbackBoxes -1].style.backgroundColor = "#434343"
        }
    }
