const burgerBtn = document.querySelector('.burger-btn')
const mobileNav = document.querySelector('.mobile__nav')
const accordions = document.querySelectorAll('.accordion')
const accordionsIntro = document.querySelectorAll('.accordion__intro')
const raceFlags = document.querySelectorAll('.raceflag')

const showMenu = () => {
	mobileNav.classList.toggle('mobile-nav-active')
}

const openAccordion = accordion => {
	const content = accordion.querySelector('.accordion__content')
	accordion.classList.add('accordion__active')
	content.style.maxHeight = content.scrollHeight + 'px'
}

const closeAccordion = accordion => {
	const content = accordion.querySelector('.accordion__content')
	accordion.classList.remove('accordion__active')
	content.style.maxHeight = null
}

accordions.forEach(accordion => {
	const intro = accordion.querySelector('.accordion__intro')
	const content = accordion.querySelector('.accordion__content')

	intro.onclick = () => {
		if (content.style.maxHeight) {
			closeAccordion(accordion)
		} else {
			accordions.forEach(accordion => closeAccordion(accordion))
			openAccordion(accordion)
		}
	}
})

const chceckFlag = () => {
	accordions.forEach(accordion => {
		accordion.addEventListener('click', function (e) {
			if (accordion.classList.contains('accordion__active')) {
				e.target.children[1].style.display = 'none'
			} else{
				e.target.children[1].style.display = 'block'
			}
		})
	})
}

chceckFlag()
burgerBtn.addEventListener('click', showMenu)
