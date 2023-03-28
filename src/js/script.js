const burgerBtn = document.querySelector('.burger-btn')
const mobileNav = document.querySelector('.mobile__nav')
const accordions = document.querySelectorAll('.accordion')
const accordionsIntro = document.querySelectorAll('.accordion__intro')
const raceFlag = document.querySelector('.raceflag')

const chceckFlag = () => {
	accordions.forEach(accordion => {
		accordion.addEventListener('click', function () {
			if (accordion.classList.contains('accordion__active')) {
				raceFlag.style.display = 'none'
			} else {
				raceFlag.style.display = 'block'
			}
		})
	})
}
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


chceckFlag()
burgerBtn.addEventListener('click', showMenu)
