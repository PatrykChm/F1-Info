const burgerBtn = document.querySelector('.burger-btn')
const mobileNav = document.querySelector('.mobile__nav')
const accordions = document.querySelectorAll('.accordion')
const driversButton = document.querySelector('.driver__button')
const constructorsButton = document.querySelector('.constructors__button')
const driversStandings = document.querySelector('.drivers__table')
const constructorsStandings = document.querySelector('.constructors__table')

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
		accordion.addEventListener('click', function () {
			const raceFlag = accordion.querySelector('.raceflag')
			if (accordion.classList.contains('accordion__active')) {
				raceFlag.style.display = 'none'
			} else {
				raceFlag.style.display = 'block'
			}
		})
	})
}

const standingsChange = () => {
	constructorsButton.addEventListener('click', function(){
		constructorsStandings.style.display = 'block'
		driversStandings.style.display = 'none'
	} )
	driversButton.addEventListener('click', function(){
		constructorsStandings.style.display = 'none'
		driversStandings.style.display = 'block'
	} )
}


standingsChange()
chceckFlag()
burgerBtn.addEventListener('click', showMenu)
