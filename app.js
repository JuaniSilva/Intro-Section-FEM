const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('menu-btn')
const closeMenuBtn = document.getElementById('close-menu-btn')


navToggle.addEventListener('click', () => {
	navMenu.classList.add('translate-x-0')
})

closeMenuBtn.addEventListener('click', () => {
	navMenu.classList.remove('translate-x-0')
})