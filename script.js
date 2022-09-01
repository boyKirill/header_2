document.addEventListener("DOMContentLoaded", function (event) {
	openBurger();
});

function openBurger() {
	const burger = document.querySelector('.header__burger');
	const menu = document.querySelector('.header__menu');

	burger.addEventListener('click', function () {
		menu.classList.toggle('open')
		burger.classList.toggle('open')
		console.log(burger);
	})
}